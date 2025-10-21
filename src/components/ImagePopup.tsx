import styles from './ImagePopup.module.css';
import { Modal } from './Modal';

export default function ImagePopup({ src, pixel }: { src: string, pixel: boolean }) {
  return (
    <Modal>
      <div className={styles['main']}>
        <img 
          className={styles['img']}
          src={src} 
          style={{
            imageRendering: pixel ? 'pixelated' : undefined
          }}
        />
      </div>
    </Modal>
  );
}