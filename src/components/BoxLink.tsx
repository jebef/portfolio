import styles from './BoxLink.module.css';

// TODO: 
// - 16char limit for title 
// - ??char limit for description 
// copy over dynamic font finder? Or perhaps simpler method 

export default function BoxLink({ img, pixel, title, description }: { img: string, pixel: boolean, title: string, description: string }) {

  return (
    <div className={styles['main']}>
      <div className={styles['shadow']}/>
      <div className={styles['parent']}>
        <div className={styles['img-container']}>
          <img 
            className={styles['img']} 
            src={img}
            style={{
              imageRendering: pixel ? 'pixelated' : undefined
            }}
          />
        </div>
        <div className={styles['description-background']}/>
        <div className={styles['border-highlight']}>
          <div className={styles['description']}>{description}</div>
        </div>
        <div className={styles['title-shadow']}/>
        <div className={styles['title']}>{title}</div>
      </div>
    </div>
  )
}