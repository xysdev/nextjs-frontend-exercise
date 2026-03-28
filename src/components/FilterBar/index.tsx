'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import styles from './index.module.css';

type FilterBarProps = {
  speciesOptions: string[];
};

export function FilterBar({ speciesOptions }: FilterBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedSpecies = searchParams.get('species') ?? '';

  const handleSpeciesChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set('species', value);
    } else {
      params.delete('species');
    }
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className={styles.filterBar}>
      <div className={styles.selectWrapper}>
        <select
          className={styles.select}
          value={selectedSpecies}
          onChange={(e) => handleSpeciesChange(e.target.value)}
          aria-label="Filter by species"
        >
          <option value="">Species</option>
          {speciesOptions.map((species) => (
            <option key={species} value={species}>
              {species}
            </option>
          ))}
        </select>
        <img src="/icons/chevron-down.svg" alt="" aria-hidden="true" className={styles.chevron} />
      </div>
    </div>
  );
}
