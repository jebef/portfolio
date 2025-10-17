import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import NavPopup from './NavPopup';

export default function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);


  const handleHomeClick = () => {
    navigate('/');
  }

  const handleNavClick = () => {
    setOpen(!open);
  }

  return (
    <>
      <div className={styles['main']}>
        <div
          className={styles['nav-button']}
          onClick={handleNavClick}
        >
          Nav
        </div>
        <div
          className={styles['home-button']}
          onClick={handleHomeClick}
        >
          - - - H O M E - - -
        </div>
      </div>
      <NavPopup open={open}/>
    </>
  )
}