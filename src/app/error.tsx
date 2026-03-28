'use client';

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="main">
      <p>Something went wrong loading the pets.</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
