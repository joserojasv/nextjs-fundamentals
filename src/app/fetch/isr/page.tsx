// src/app/fetch/isr/page.tsx

import Link from 'next/link';
import styles from './isr.module.css';
import { Post } from '@/app/types/post';

async function getData(): Promise<Post[]> {
  const res = await fetch('https://68bd12090f2491613ee065c7.mockapi.io/posts', {
    next: { revalidate: 5 }, // Revalidate every 5 seconds
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data: Post[] = await res.json();
  return data;
}

export default async function ISRPage() {
  const posts = await getData();

  return (
    <div className={styles.page}>
      {/* Back Button */}
      <div className={styles.ctas}>
        <Link href="/" className={styles.primary}>← Back</Link>
      </div>

      <div className={styles.centered}>
        <h1 className={styles.title}>ISR (Incremental Static Regeneration) Example</h1>
        <p>Total records: {posts.length}</p>
        <p className={styles.timestamp}>
          This page is statically generated and will revalidate every 5 seconds.
        </p>

        <div className={styles.grid}>
          {posts.map((post) => (
            <div key={post.id} className={styles.card}>
              <img src={post.avatar} alt={post.name} width={48} height={48} />
              <div>
                <strong>{post.name}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
