import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  }

  const handleNavClick = () => {

  }

  return (
    <div className={styles['main']}>
      <div className={styles['nav-button']}>
        Nav
      </div>
      <div 
        className={styles['home-button']}
        onClick={handleHomeClick}
      >
        - - - H O M E - - -
      </div>
    </div>
  )
}