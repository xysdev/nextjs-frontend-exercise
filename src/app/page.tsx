import { Suspense } from 'react';

import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import { FilterBar } from '@/components/FilterBar';
import { getPets } from '@/services/pets';

import styles from './page.module.css';

type SearchParams = Promise<{ species?: string; sortBy?: string; order?: string }>;

export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  const { species, sortBy, order } = await searchParams;

  const resolvedSortBy = sortBy ?? 'name';
  const resolvedOrder = order;

  const [allPets, pets] = await Promise.all([
    getPets(),
    getPets({ species, sortBy: resolvedSortBy, order: resolvedOrder }),
  ]);

  const speciesOptions = [...new Set(allPets.map(p => p.species))].sort();

  return (
    <div>
      <main className="main">
        <Container>
          <h1>Pets</h1>

          <Suspense fallback={<div aria-busy="true">Loading filters…</div>}>
            <FilterBar speciesOptions={speciesOptions} />
          </Suspense>

          <h2>Results</h2>
          {pets.length === 0 ? (
            <p className={styles.emptyState}>No pets found for the selected filter.</p>
          ) : (
            <div className={styles.cardContainer}>
              {pets.map((pet, index) => (
                <Card
                  key={pet.id}
                  id={pet.id}
                  name={pet.name}
                  photoUrl={pet.photoUrl}
                  species={pet.species}
                  priority={index < 3}
                />
              ))}
            </div>
          )}
        </Container>
      </main>
    </div>
  );
}
