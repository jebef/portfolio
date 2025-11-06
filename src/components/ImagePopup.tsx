import styles from './ImagePopup.module.css';
import { Modal } from './Modal';

export default function ImagePopup({ src, pixel, onClose }: { src: string, pixel: boolean, onClose: () => void }) {
  return (
    <Modal>
      <div 
        className={styles['main']}
        onClick={onClose}
      >
        <img 
          className={styles['img']}
          src={src} 
          style={{
            imageRendering: pixel ? 'pixelated' : undefined
          }}
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </Modal>
  );
}