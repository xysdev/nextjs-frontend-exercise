import styles from './page.module.css';

export default function Loading() {
  return (
    <div className="main">
      <div className={styles.skeletonContainer} aria-busy="true" aria-label="Loading pets…">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className={styles.skeletonCard}>
            <div className={styles.skeletonImage} />
            <div className={styles.skeletonText} />
            <div className={styles.skeletonButton} />
          </div>
        ))}
      </div>
    </div>
  );
}
