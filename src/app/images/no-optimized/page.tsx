// components/NoOptimizedImage.tsx
'use client';

import Link from 'next/link';
import styles from './no-optimized.module.css';

export default function NotOptimizedImage() {
  const images = Array.from({ length: 10 }, (_, i) => ({
  src: `/avatar_${i + 1}.jpg`,   // Dynamically generates avatar_1.jpg to avatar_10.jpg
  alt: `Avatar ${i + 1}`,
  id: i + 1,
}));


  return (
    <div className={styles.page}>
      {/* Back Button */}
      <div className={styles.ctas}>
        <Link href="/" className={styles.primary}>← Back</Link>
      </div>

      <div className={styles.centered}>
        <h1 className={styles.title}>Unoptimized Image Example</h1>
        <p className={styles.timestamp}>
           Unoptimized Image not using <code>next/image</code> with 10 samples.
        </p>

        {/* Image Grid */}
        <div className={styles.grid}>
          {images.map((img) => (
           <div
  key={img.id}
  style={{
    position: 'relative',
    width: '100%',
    aspectRatio: '4 / 3',
    // maxWidth: '600px',  // REMOVE or set to '100%'
    marginBottom: '2rem',
    border: '1px solid #333',
    borderRadius: '8px',
  }}
>
    <img
                src={img.src}
                alt={img.alt}
                width={170}
                height={150}
                loading="lazy"
              />
</div>

          ))}
        </div>
      </div>

       <div className={styles.container}>
          <img
                src="/avatar_11.jpg"
                alt="Not Responsive Avatar"
                width={1200}
                height={900}  
                loading="lazy"
              />
    </div>
    </div>
    
  );
}
