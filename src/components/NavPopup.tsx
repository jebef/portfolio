import styles from './NavPopup.module.css';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavPopup({ open }: { open: boolean }) {
  const mainRef = useRef<HTMLDivElement>(null);
  const [navDelay, setNavDelay] = useState(0);
  const navigate = useNavigate();
  const destA = '/about';
  const destB = '/'; // TODO: make real projects page 
  // const destC = '/contact';

  useEffect(() => {
    if (!mainRef.current) return;
    setNavDelay(Number(getComputedStyle(mainRef.current).getPropertyValue('--nav-delay')));
  },[mainRef.current])

  const handleANavClick = () => {
    setTimeout(() => {
      navigate(destA);
    }, navDelay);
  }

  const handleBNavClick = () => {
    setTimeout(() => {
      navigate(destB);
    }, navDelay);
  }

  const handleCNavClick = () => {
    setTimeout(() => {
      //navigate(destC);
      window.location.href = "/files/Resume2025.pdf";
    }, navDelay);
  }

  return (
    <div
      className={styles['main']}
      style={{
        height: open ? '214px' : '0px',
        minHeight: open ? '214px' : '0px'
      }}
      ref={mainRef}
    >
      <div className={styles['motherboard']}>
        <div
          className={`${styles['nav-button']} ${styles['nav-button--a']}`}
          onClick={handleANavClick}
        >
          <div className={styles['nav-button__rivet']} style={{ top: '.25em', left: '.25em' }} />
          <div className={styles['nav-button__rivet']} style={{ top: '.25em', right: '.25em' }} />
          <div className={styles['nav-button__rivet']} style={{ bottom: '.25em', left: '.25em' }} />
          <div className={styles['nav-button__rivet']} style={{ bottom: '.25em', right: '.25em' }} />
          <div className={styles['nav-button__plaque']}>
            about
          </div>
        </div>
        <div
          className={`${styles['nav-button']} ${styles['nav-button--b']}`}
          onClick={handleBNavClick}
        >
          <div className={styles['nav-button__rivet']} style={{ top: '.25em', left: '.25em' }} />
          <div className={styles['nav-button__rivet']} style={{ top: '.25em', right: '.25em' }} />
          <div className={styles['nav-button__rivet']} style={{ bottom: '.25em', left: '.25em' }} />
          <div className={styles['nav-button__rivet']} style={{ bottom: '.25em', right: '.25em' }} />
          <div className={styles['nav-button__plaque']}>
            proyex
          </div>
        </div>
        <div
          className={`${styles['nav-button']} ${styles['nav-button--c']}`}
          onClick={handleCNavClick}
        >
          <div className={styles['nav-button__rivet']} style={{ top: '.25em', left: '.25em' }} />
          <div className={styles['nav-button__rivet']} style={{ top: '.25em', right: '.25em' }} />
          <div className={styles['nav-button__rivet']} style={{ bottom: '.25em', left: '.25em' }} />
          <div className={styles['nav-button__rivet']} style={{ bottom: '.25em', right: '.25em' }} />
          <div className={styles['nav-button__plaque']}>
            resume
          </div>
        </div>

        <div className={`${styles['motherboard__wire']} ${styles['motherboard__wire--a']} ${styles['motherboard__wire--a--1']}`} />
        <div className={`${styles['motherboard__wire']} ${styles['motherboard__wire--a']} ${styles['motherboard__wire--a--2']}`} />
        <div className={`${styles['motherboard__wire']} ${styles['motherboard__wire--a']} ${styles['motherboard__wire--a--3']}`} />
        <div className={`${styles['motherboard__wire']} ${styles['motherboard__wire--a']} ${styles['motherboard__wire--a--4']}`} />

        <div className={`${styles['motherboard__wire']} ${styles['motherboard__wire--b']} ${styles['motherboard__wire--b--1']}`} />
        <div className={`${styles['motherboard__wire']} ${styles['motherboard__wire--b']} ${styles['motherboard__wire--b--2']}`} />
        <div className={`${styles['motherboard__wire']} ${styles['motherboard__wire--b']} ${styles['motherboard__wire--b--3']}`} />
        <div className={`${styles['motherboard__wire']} ${styles['motherboard__wire--b']} ${styles['motherboard__wire--b--4']}`} />

        <div className={`${styles['motherboard__wire']} ${styles['motherboard__wire--c']} ${styles['motherboard__wire--c--1']}`} />
        <div className={`${styles['motherboard__wire']} ${styles['motherboard__wire--c']} ${styles['motherboard__wire--c--2']}`} />
        <div className={`${styles['motherboard__wire']} ${styles['motherboard__wire--c']} ${styles['motherboard__wire--c--3']}`} />
        <div className={`${styles['motherboard__wire']} ${styles['motherboard__wire--c']} ${styles['motherboard__wire--c--4']}`} />

        <div className={styles['light-base']}>
          <div className={`${styles['light-base__rivet']} ${styles['light-base__rivet--a']}`} />
          <div className={`${styles['light-base__rivet']} ${styles['light-base__rivet--b']}`} />
          <div className={`${styles['light-base__rivet']} ${styles['light-base__rivet--c']}`} />

        </div>
        <div className={styles['light-stand']} />
        <div className={styles['light-bulb']}>
          <div className={styles['nav-icon']} />
        </div>
      </div>
    </div>

  );
}