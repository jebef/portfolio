import PageSkeleton from './PageSkeleton';
import Image from '../components/Image';
import styles from './projects.module.css';

export default function Postcard() {
  return (
    <PageSkeleton>
      <div className={styles['content-container']} style={{ padding: '24px'}}>
        <div className={styles['title']}>Dive Into 2025!</div>
        <div className={styles['break']} />
        <div className={styles['text-body']}>
          More to come...
        </div>
        <div className={styles['break']} />
        <div className={styles['break']} />
        <Image src={'/images/dive-into-2025-front.png'} pixel={false} caption={'Fig.1'} />
      </div>
    </PageSkeleton>
  )
}