import styles from './Image.module.css';
import { useState } from 'react';
import ImagePopup from './ImagePopup';

export default function Image({ src, pixel, caption }: { src: string, pixel: boolean, caption: string }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  }

  return (
    <>
      <div
        className={styles['main']}
        onClick={handleClick}
      >
        <img
          className={styles['img']}
          src={src}
          style={{
            imageRendering: pixel ? 'pixelated' : undefined
          }}
        />
        <div className={styles['border-container']}> 
          <div className={styles['border-highlight']}/>
        </div>
        <div className={styles['caption']}>
          {caption}
        </div>
      </div>
      {open && 
        <ImagePopup src={src} pixel={pixel}/>
      }
    </>
  )
}