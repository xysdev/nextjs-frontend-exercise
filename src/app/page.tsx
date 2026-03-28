import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { getPets } from '@/services/pets';

import styles from './page.module.css';

export default async function Home() {
  const pets = await getPets();

  return (
    <div>
      <Header />
      <div className="main">
        <Container>
          <h1>Pets</h1>

          <h2>Results</h2>
          <div className={styles.cardContainer}>
            {pets.map((pet) => (
              <Card key={pet.id} name={pet.name} photoUrl={pet.photoUrl} species={pet.species} />
            ))}
          </div>
        </Container>
      </div>
      <div className={styles.footer}>
        <Container>&nbsp;</Container>
      </div>
    </div>
  );
}
