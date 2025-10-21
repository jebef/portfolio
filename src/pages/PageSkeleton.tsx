import styles from './projects.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import type { ReactNode } from 'react';

export default function PageSkeleton({ children }: { children: ReactNode}) {
  return (
    <div className={styles['main']}>
      <div className={styles['container']}>
        <Header />
        <br />
        { children }
        <br />
        <Footer />
      </div>
    </div>
  )
}