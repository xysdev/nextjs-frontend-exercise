import Image from 'next/image';

import type { Pet } from '@/types/pet';

import styles from './index.module.css';

type CardProps = Pick<Pet, 'name' | 'photoUrl' | 'species'> & { priority?: boolean };

export function Card({ name, photoUrl, species, priority = false }: CardProps) {
  return (
    <article className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={photoUrl}
          alt={`${name} the ${species}`}
          className={styles.image}
          fill
          sizes="(min-width: 768px) calc((var(--container-width) - 2 * var(--container-padding) - 2 * var(--card-grid-gap)) / 3), var(--card-image-mobile)"
          priority={priority}
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
