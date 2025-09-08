// components/OptimizedImage.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './optimized.module.css';

export default function OptimizedImagePage() {
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
        <h1 className={styles.title}>Optimized Image Example</h1>
        <p className={styles.timestamp}>
          Optimized Image using <code>next/image</code> with 10 samples.
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
  <Image
    src={img.src}
    alt={img.alt}
    fill

    style={{
      objectFit: 'cover',
      borderRadius: '6px',
    }}
    placeholder="empty"
  />
</div>

          ))}
        </div>
      </div>

       <div className={styles.container}>
      <Image
        src="/avatar_11.jpg" // Make sure this image is in the /public folder
        alt="Responsive Avatar"
        width={1200}          // Big width on load (desktop)
        height={900}          // Maintain aspect ratio (4:3)
        sizes="(max-width: 768px) 100vw, 1200px"
        style={{ width: '100%', height: 'auto' }} // Responsive styling
        priority
        placeholder="empty"
      />
    </div>
    </div>
    
  );
}
