import { Container } from '@/components/Container';
import { Header } from '@/components/Header';

import styles from './page.module.css';

export default function Loading() {
  return (
    <div>
      <Header />
      <main className="main">
        <Container>
          <div className={styles.skeletonBack} />
          <div className={styles.skeletonDetail}>
            <div className={styles.skeletonImage} />
            <div className={styles.skeletonInfo}>
              <div className={styles.skeletonName} />
              <div className={styles.skeletonRow} />
              <div className={styles.skeletonRow} />
              <div className={styles.skeletonRow} />
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
