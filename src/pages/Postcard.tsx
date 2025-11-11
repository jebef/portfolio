import PageSkeleton from './PageSkeleton';
import Image from '../components/Image';
import styles from './projects.module.css';

export default function Postcard() {
  return (
    <PageSkeleton>
      <div className={styles['content-container']} style={{ padding: '24px' }}>
        <div className={styles['title']}>Dive Into 2025!</div>
        <div className={styles['break']} />
        <div className={styles['text-body']}>
          More to come...
        </div>
        <div className={styles['break']} />
        <div className={styles['break']} />
        <div className={styles['mixed-container']}>
          <div className={styles['image-container']}>
            <Image src={'/images/postcard/usarians.webp'} pixel={false} scale={1} backgroundColor='none' caption={'Fig.1'} />
          </div>
          <div className={styles['image-container']}>
            <Image src={'/images/postcard/front.webp'} pixel={false} scale={1.1} backgroundColor='none' caption={'Fig.2'} />
          </div>
        </div>
        <div className={styles['break']} />
      </div>
    </PageSkeleton>
  )
}