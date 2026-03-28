import Image from 'next/image';

import type { Pet } from '@/types/pet';

import styles from './index.module.css';

export function Card({ name, photoUrl, species }: Pick<Pet, 'name' | 'photoUrl' | 'species'>) {
  return (
    <article className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={photoUrl}
          alt={`${name} the ${species}`}
          className={styles.image}
          fill
          sizes="(min-width: 768px) calc((var(--container-width) - 6.4rem) / 3), 150px"
        />
      </div>
      <h3 className={`${styles.petName} h4`}>{name}</h3>
      <a href="#petDetail" className={styles.cta} aria-label={`View ${name}`}>
        <span className={styles.ctaText}>View</span>
        <img src="/icons/arrow-right.svg" alt="" aria-hidden="true" className={styles.ctaIcon} />
      </a>
    </article>
  );
}
