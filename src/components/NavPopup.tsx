import styles from './NavPopup.module.css';

export default function NavPopup({ open }: { open: boolean }) {
  return (

    <div 
      className={styles['main']}
      style={{
        height: open ? '100px' : '0px'
      }}
    >
      <img className={styles['quote']} src={'/images/quote-3bit-rgb.png'}/>

      <div className={styles['about']}>about</div>
      <div className={styles['projects']}>projects</div>



    </div>

  );
}