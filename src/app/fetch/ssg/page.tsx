// src/app/fetch/ssg/page.tsx

import Link from 'next/link';
import styles from './ssg.module.css';
import { Post } from '@/app/types/post';

export const dynamic = 'error'; // Enforce SSG-only

async function getData(): Promise<Post[]> {
  const res = await fetch('https://68bd12090f2491613ee065c7.mockapi.io/posts', {
    cache: 'force-cache', // Enable static fetch
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data: Post[] = await res.json();
  return data;
}

export default async function SSGPage() {
  const posts = await getData();

  return (
    <div className={styles.page}>
      {/* Back Button */}
      <div className={styles.ctas}>
        <Link href="/" className={styles.primary}>← Back</Link>
      </div>

      <div className={styles.centered}>
        <h1 className={styles.title}>SSG (Static Site Generation) Example</h1>
        <p>Total records: {posts.length}</p>
        <p className={styles.timestamp}>
          This page was statically generated at build time.
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
