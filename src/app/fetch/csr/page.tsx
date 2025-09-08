'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './csr.module.css';
import { Post } from '@/app/types/post';

export default function CSRPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('https://68bd12090f2491613ee065c7.mockapi.io/posts');
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error('Failed to fetch posts:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className={styles.page}>
      {/* Back Button */}
      <div className={styles.ctas}>
        <Link href="/" className={styles.primary}>← Back</Link>
      </div>

      <div className={styles.centered}>
        <h1 className={styles.title}>CSR (Client-Side Rendering) Example</h1>
        {loading ? (
          <p>Loading posts...</p>
        ) : (
          <>
            <p>Total records: {posts.length}</p>
            <p className={styles.timestamp}>
              This page fetched data on the client after render.
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
          </>
        )}
      </div>
    </div>
  );
}
