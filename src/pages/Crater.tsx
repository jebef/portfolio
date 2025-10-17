import styles from './Crater.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Crater() {
  return (
    <div className={styles['main']}>
      <div className={styles['container']}>
        <Header />
        <br/>
        <div className={styles['content-container']}>
          <div className={styles['title']}>Crater</div>
          <div className={styles['break']} />
          <div className={styles['text-body']}>
            Crater is a free web platform where users can build and share digital music grams.
            I love listening to albums from front to back and wanted a simple way to share collections of
            my favorite albums with friends and family. Popular streaming services support playlists of songs but
            sharing a 'playlist' of releases is simply not easy or sexy... until now!
          </div>
          <div className={styles['break']} />
          <div className={styles['break']} />
          <div className={styles['text-body']}>
            Initially, I envisioned creating a service built off popular streaming products such as Spotify or Apple Music.
            My first draft leveraged Spotify's web api. I built a Node backend to handle calls to Spotify as well as manage
            user auth and data persistence. I settled on Supabase to host my Postgres database.
          </div>
          <div className={styles['break']} />
          <div className={styles['break']} />
          <div className={styles['bullet']}>
            <div style={{ width: '1ch' }} />
            <div
              className={styles['text-body']}
              style={{
                paddingLeft: 'ch',
                boxShadow: '-2ch 0 magenta'
              }}
            >
              Vite + React + Typescript
            </div>
          </div>
          <div className={styles['break']} />
          <div className={styles['bullet']}>
            <div style={{ width: '1ch' }} />
            <div
              className={styles['text-body']}
              style={{
                paddingLeft: 'ch',
                boxShadow: '-2ch 0 magenta'
              }}
            >
              Supabase - Posgres + Edge Functions
            </div>
          </div>
          <div className={styles['break']} />
          <div className={styles['bullet']}>
            <div style={{ width: '1ch' }} />
            <div
              className={styles['text-body']}
              style={{
                paddingLeft: 'ch',
                boxShadow: '-2ch 0 magenta'
              }}
            >
              Vercel
            </div>
          </div>
        </div>
        <br/>
        <Footer/>
      </div>
    </div>
  )

}