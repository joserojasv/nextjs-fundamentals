import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        
         <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        {/* Two Columns Side by Side */}
        <div className={styles.columns}>
          <div className={styles.column}>
            <FetchDataContent />
          </div>
          <div className={styles.column}>
            <ImageOptimizationContent />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        {/* ... footer remains unchanged ... */}
      </footer>
    </div>
  );
}

// Extracted duplicated content into a separate component
function FetchDataContent() {
  return (
    <>
     <h1>Fetch Data Strategies</h1>
      <ol>
        <li><strong>SSR (Server-Side Rendering)</strong> → For dynamic content, such as dashboards.</li>
        <li><strong>SSG (Static Site Generation)</strong> → For static content, such as blogs or landing pages.</li>
        <li><strong>ISR (Incremental Static Regeneration)</strong> → Generates static pages on-demand.</li>
        <li><strong>CSR (Client-Side Rendering)</strong> → You can also render content on the client side, like with plain React.</li>
      </ol>

      <div className={styles.ctas}>
         <Link href="/fetch/ssr" className={styles.primary}>SSR</Link>
         <Link href="/fetch/ssg" className={styles.primary}>SSG</Link>
         <Link href="/fetch/isr" className={styles.primary}>ISR</Link>
         <Link href="/fetch/csr" className={styles.primary}>CSR</Link>
      </div>
    </>
  );
}

// Extracted duplicated content into a separate component
function ImageOptimizationContent() {
  return (
    <>
      <h1>Image Optimization</h1>
      <ol>
        <li>
          Next.js automatically optimizes images with its built-in <code>Image</code>.
        </li>
        <li>Load a compressed, resized, possibly reformatted version to WebP.</li>
      </ol>

      <div className={styles.ctas}>
         <Link href="/images/optimized" className={styles.primary}>Optimized/image</Link>
         <Link href="/images/no-optimized" className={styles.primary}>Regular/image</Link>
      </div>
    </>
  );
}