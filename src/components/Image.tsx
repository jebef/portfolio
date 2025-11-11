import styles from './Image.module.css';
import { useState } from 'react';
import ImagePopup from './ImagePopup';

interface ImageProps {
  src: string;
  pixel: boolean;
  scale: number;
  backgroundColor: string;
  caption: string;
}

export default function Image({ src, pixel, scale, backgroundColor, caption }: ImageProps) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <div
        className={styles['main']}
        onClick={handleClick}
      >
        <div 
          className={styles['img-container']}
          style={{
            backgroundColor
          }}
        >
          <img
            className={styles['img']}
            src={src}
            style={{
              imageRendering: pixel ? 'pixelated' : undefined,
              scale
            }}
          />
        </div>
        <div
          className={styles['border-container']}
        >
          <div className={styles['border-highlight']} />
        </div>
        <div className={styles['caption']}>
          {caption}
        </div>
      </div>
      {open &&
        <ImagePopup src={src} pixel={pixel} onClose={handleClose} />
      }
    </>
  )
}