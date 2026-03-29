import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { getPetById } from '@/services/pets';

import styles from './page.module.css';

type Props = { params: Promise<{ id: string }> };

export default async function PetDetailPage({ params }: Props) {
  const { id } = await params;
  const petId = Number(id);

  if (isNaN(petId)) notFound();

  let pet;
  try {
    pet = await getPetById(petId);
  } catch (err) {
    if (err instanceof Error && err.message === 'NOT_FOUND') notFound();
    throw err;
  }

  return (
    <div>
      <main className="main">
        <Container>
          <Link href="/" className={styles.backLink} aria-label="Back to all pets">
            <img
              src="/icons/arrow-right.svg"
              alt=""
              aria-hidden="true"
              className={styles.backIcon}
            />
            Back
          </Link>

          <article className={styles.detail}>
            <div className={styles.imageWrapper}>
              <Image
                src={pet.photoUrl}
                alt={`${pet.name} the ${pet.species}`}
                fill
                className={styles.image}
                sizes="(min-width: 768px) 480px, 100vw"
                priority
              />
            </div>

            <div className={styles.info}>
              <h1 className={styles.name}>{pet.name}</h1>

              <dl className={styles.detailList}>
                <div className={styles.detailRow}>
                  <dt>Species</dt>
                  <dd>{pet.species}</dd>
                </div>
                <div className={styles.detailRow}>
                  <dt>Birth year</dt>
                  <dd>{pet.birthYear}</dd>
                </div>
                <div className={styles.detailRow}>
                  <dt>Added on</dt>
                  <dd>{pet.dateAdded}</dd>
                </div>
                <div className={styles.detailRow}>
                  <dt>Available</dt>
                  <dd>
                    <span className={pet.available ? styles.available : styles.unavailable}>
                      {pet.available ? 'Yes' : 'No'}
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </article>
        </Container>
      </main>
    </div>
  );
}
