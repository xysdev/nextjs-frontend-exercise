import Image from 'next/image';

import type { Pet } from '@/types/pet';

import styles from './index.module.css';

export function Card({ name, photoUrl, species }: Pick<Pet, 'name' | 'photoUrl' | 'species'>) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={photoUrl} alt={`${name} the ${species}`} className={styles.image} fill />
      </div>
      <h3 className={`${styles.petName} h4`}>{name}</h3>
      <a href="#petDetail" className={styles.cta}>
        View
      </a>
    </div>
  );
}
