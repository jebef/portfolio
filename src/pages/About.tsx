import styles from './projects.module.css';
import PageSkeleton from "./PageSkeleton";
import Image from '../components/Image';

export default function About() {
  return (
    <PageSkeleton>
      <div className={styles['content-container']}>
        <div className={styles['title']}>Who? Me!?!</div>
        <div className={styles['break']} />
        <div className={styles['text-body']}>
          BE A VERB!!!
        </div>
        <div className={styles['break']} />
        <div className={styles['break']} />
        <div className={styles['bullet']}>
          <div className={styles['bullet__point']} />
          <div className={styles['bullet__text']}>
            B.S. EECS - UC Berkely 2024
          </div>
        </div>
        <div className={styles['break']} />
        <Image src={'/images/selfie.JPG'} pixel={false} caption={'Fig.1'} />
      </div>
    </PageSkeleton>
  )
}