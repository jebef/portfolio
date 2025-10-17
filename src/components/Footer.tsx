import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles['main']}>
      <div className={styles['copyright']}>
        © wyatt jebef 2025
      </div>
      <img 
        className={styles['jebef-img']}
        src={'/images/quote-2.png'}
      />
    </div>
  );
}