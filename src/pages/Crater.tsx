import styles from './projects.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Crater() {
  return (
    <div className={styles['main']}>
      <div className={styles['container']}>
        <Header />
        <br />
        <div className={styles['content-container']}>
          <div className={styles['title']}>Crater</div>
          <div className={styles['break']} />
          <div className={styles['text-body']}>
            Crater is a free web platform where users can build and share digital music grams.
            I love listening to albums from front to back and wanted a simple way to share collections of
            whole releases with friends and family. Popular streaming services support playlists of songs but
            sharing a "playlist" of releases is simply not easy or sexy... until now!
          </div>
          <div className={styles['break']} />
          <div className={styles['break']} />
          <div className={styles['text-body']}>
            Initially, my ambition for this project was strong. My vision: a platform where users could<span> (a) </span>
            browse their digital record collection the same way they'd browse bins at a physical record store
            <span> (b) </span>compile "crates" of albums to organize their collection and share favorite releases with others
            <span> (c) </span>write notes for specific releases and crates.
          </div>
          <div className={styles['break']} />
          <div className={styles['break']} />
          <div className={styles['text-body']}>
            One of the biggest takeaways from my last two projects: <span>prep is everything</span>. I am sometimes too eager to
            begin the process of building the thing that I don't fully know what the thing is when I start! In this case, I failed to consider
            the complexity and utility (or lack thereof) of my initial vision. I spent nearly three months working on version 1.0 only to scrap
            everything and start again from scratch. Let's go over the good and bad of my first stab...
          </div>
          <div className={styles['break']} />
          <div className={styles['break']} />
          <div className={styles['sub-title']}>The Good:</div>
          <div className={styles['break']} />
          <div className={styles['bullet']}>
            <div className={styles['bullet__point']} style={{ backgroundColor: 'rgb(0, 255, 0)' }} />
            <div className={styles['bullet__text']}>
              Beautiful design language. Still green to web development, my lack of technical skills provided my palette.
              Lowercase courier, embrace boxiness, the rule of three.
            </div>
          </div>
          <div className={styles['break']} />
          <div className={styles['bullet']}>
            <div className={styles['bullet__point']} style={{ backgroundColor: 'rgb(0, 255, 0)' }} />
            <div className={styles['bullet__text']}>
              Responisve layout and components. All pages scaled smoothly and I wrote a hacky JS tool to dynamically adjust the font size for
              release titles and other metadata.
            </div>
          </div>
          <div className={styles['break']} />
          <div className={styles['bullet']}>
            <div className={styles['bullet__point']} style={{ backgroundColor: 'rgb(0, 255, 0)' }} />
            <div className={styles['bullet__text']}>
              Solid backend. Version 1.0 included a custom Node server with a PKCE auth flow to connect to Spotify's Web API. This server also
              handled user sign-up/sign-in and communicated with a local Postgres database to ensure persistence. One evening, a friend politely asked
              why I was writing a backend user login flow. Why make a shittier version of something that is ubiquitous and widely available for free?
              Version 1.1 cut the Node server entirely, relying on Supabase to handle data storage, security, and calls to Spotify.
            </div>
          </div>
          <div className={styles['break']} />
          <div className={styles['sub-title']}>The Bad:</div>
          <div className={styles['break']} />
          <div className={styles['bullet']}>
            <div className={styles['bullet__point']} style={{ backgroundColor: 'red' }} />
            <div className={styles['bullet__text']}>
              Complexity. I was on my way to building a small social media app. Balancing my want to understand all the inner guts of my 
              application with my core priorities and interests became too troublesome. I chose to seek an alternative to dedicated user 
              accounts - a simpler way to provide the same service. 
            </div>
          </div>
          <div className={styles['break']} />
          <div className={styles['bullet']}>
            <div className={styles['bullet__point']} style={{ backgroundColor: 'red' }} />
            <div className={styles['bullet__text']}>
              Utility. For an app that does a single simple task, the scope of my projet was much greater than the serivice I sought to provide. 
              Time to rethink and scale back. 
            </div>
          </div>
          <div className={styles['break']} />
          <div className={styles['bullet']}>
            <div className={styles['bullet__point']} style={{ backgroundColor: 'red' }} />
            <div className={styles['bullet__text']}>
              Reliance on evil streaming giants. Though I currently use Spotify, I am in the process of transitioning away from the platform. 
              The company and its practices run perpendicular to my belief system. For version 2.0 I wanted to find an alternative resource that 
              could provide similar or better music metadata. 
            </div>
          </div>
          <div className={styles['break']} />
          <div className={styles['sub-title']}>Version 2.0 (aka crater-lite)</div>
          <div className={styles['break']} />
          <a className={styles['link']} href={'https://crater-lite.vercel.app/'}>crater</a>
        </div>
        <br />
        <Footer />
      </div>
    </div>
  )

}