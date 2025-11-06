import styles from './CustomImage.module.css';

interface CustomImage {
  src: string;
  width: string;
  pixel: boolean;
  borderColor: string;
}

export default function CustomImage({ src, width, pixel, borderColor }: CustomImage) {
  return (
    <div 
      className={styles['main']}
      style={{
        width,
        borderColor
      }}
    >
      <img 
        className={styles['image']}
        src={src} 
        style={{
          imageRendering: pixel ? 'pixelated' : undefined
        }}
      />
      <div 
        className={styles['border']}
        style={{
          borderColor
        }}
      />
    </div>
  );
}