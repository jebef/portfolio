import styles from './projects.module.css';
import PageSkeleton from './PageSkeleton';
import PortraitBounce from '../components/PortraitBounce';

export default function Home() {
  return (
    <PageSkeleton>
      <div className={styles['static-container']}>
        <div className={styles['ascii']}>
          <div className={styles['ascii__text']}>
            Welcome, Digital Traveller!
          </div>
          <div className={styles['ascii__image']}>
            <PortraitBounce
              srcs={[
                '/images/ascii/black.webp',
                '/images/ascii/halloween.webp',
                '/images/ascii/cat.webp',
                '/images/ascii/warp-selfie.webp'
              ]}
            />
          </div>
        </div>
      </div>
    </PageSkeleton>
  );
}