import Image from 'next/image';
import Link from 'next/link';

import type { Pet } from '@/types/pet';

import styles from './index.module.css';

type CardProps = Pick<Pet, 'id' | 'name' | 'photoUrl' | 'species'> & { priority?: boolean };

export function Card({ id, name, photoUrl, species, priority = false }: CardProps) {
  return (
    <article className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={photoUrl}
          alt={`${name} the ${species}`}
          className={styles.image}
          fill
          sizes="(min-width: 768px) calc((var(--container-width) - 6.4rem) / 3), 150px"
          priority={priority}
        />
      </div>
      <h3 className={`${styles.petName} h4`}>{name}</h3>
      <Link href={`/pets/${id}`} className={styles.cta} aria-label={`View ${name}`}>
        <span className={styles.ctaText}>View</span>
        <img src="/icons/arrow-right.svg" alt="" aria-hidden="true" className={styles.ctaIcon} />
      </Link>
    </article>
  );
}
