import Link from 'next/link';

import { Container } from '@/components/Container';
import { Header } from '@/components/Header';

export default function NotFound() {
  return (
    <div>
      <Header />
      <main className="main">
        <Container>
          <h1>Pet not found</h1>
          <p>This pet doesn&apos;t exist or may have been removed.</p>
          <Link href="/" style={{ marginTop: '2.4rem', display: 'inline-block' }}>
            ← Back to all pets
          </Link>
        </Container>
      </main>
    </div>
  );
}
