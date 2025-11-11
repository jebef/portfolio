import styles from './projects.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from '../components/Image';

export default function Crater() {
  return (
    <div className={styles['main']}>
      <div className={styles['container']}>
        <Header />
        <div className={styles['break']} />
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
          <div className={styles['sub-title']}>Version 1.0</div>
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
          <div className={styles['sub-title']}>The Good</div>
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
              Responisve components. I wrote a hacky JS tool to dynamically adjust the font size for release titles and other metadata.
            </div>
          </div>
          <div className={styles['break']} />
          <div className={styles['bullet']}>
            <div className={styles['bullet__point']} style={{ backgroundColor: 'rgb(0, 255, 0)' }} />
            <div className={styles['bullet__text']}>
              Solid backend. Version 1.0 included a custom Node server with a PKCE auth flow to connect to Spotify's Web API. This server also
              handled user sign-up/sign-in and communicated with a local Postgres database to ensure persistence. Further into development, I
              chose to cut the Node server entirely, relying on Supabase to handle data storage, security, and calls to Spotify.
            </div>
          </div>
          <div className={styles['break']} />
          <div className={styles['sub-title']}>The Bad</div>
          <div className={styles['break']} />
          <div className={styles['bullet']}>
            <div className={styles['bullet__point']} style={{ backgroundColor: 'red' }} />
            <div className={styles['bullet__text']}>
              Complexity and utility. For an app that does a single simple task, the scope of my projet was much greater than
              the service I sought to provide. Time to rethink and scale back.
            </div>
          </div>
          <div className={styles['break']} />
          <div className={styles['bullet']}>
            <div className={styles['bullet__point']} style={{ backgroundColor: 'red' }} />
            <div className={styles['bullet__text']}>
              Lacking mobile support. My first iterations prioritized desktop/laptop use and failed to cleanly scale down
              for mobile users. In order to make my app as accessible as possible, I knew it needed to be usable from any device.
            </div>
          </div>
          <div className={styles['break']} />
          <div className={styles['bullet']}>
            <div className={styles['bullet__point']} style={{ backgroundColor: 'red' }} />
            <div className={styles['bullet__text']}>
              Dependency on streaming giants. Though companies such as Spotify and Apple Music provide rich, familiar, and easy to use
              music metadata APIs, making them an integral part of my app alienated potential users who don't use streaming services.
              For version 2.0 I sought to find an alternative resource that could provide similar or better music metadata.
            </div>
          </div>
          <div className={styles['break']} />
          <div className={styles['sub-title']}>Version 2.0 (aka crater-lite)</div>
          <div className={styles['break']} />
          <div className={styles['text-body']}>
            I took some time to think about the "truth" of my idea. What am I really trying to do? My conclusion: I want to share collections of
            my favorite albums with friends and family. I want the releases to be packaged in a cute way. Sharing music is a gift!
          </div>
          <div className={styles['break']} />
          <div className={styles['break']} />
          <div className={styles['text-body']}>
            This realization was pivotal. I decided to do away with dedicated user accounts, music collection management, etc. Now, users would
            simply visit the site anytime they wanted to build and share a new crate. All crates would be publicly accessible via a unique key. By
            appending this key to the end of a base link, users could view and share their crates with ease.
          </div>
          <div className={styles['break']} />
          <div className={styles['break']} />
          <div className={styles['text-body']}>
            My music metadata solution: <a href={'https://musicbrainz.org'} style={{ color: 'blue' }}>MusicBrainz!</a> Free, open-source, and incredibly rich with hyper specifc data, MusicBrainz turned out to be an
            ideal alternative to Spotify's Web API.
          </div>
          <div className={styles['break']} />
          <div className={styles['break']} />
          <div className={styles['mixed-container']}>
            <div className={styles['mixed-container__text']}>
              <div
                className={styles['text-body']}
              >
                Additionally, I made custom assetts to give the crates more life - a PS2 style rotating record bin and pixel art music gram.
                <span style={{ color: 'yellow' }}> Figure 1</span> shows a still from the crate animation.
              </div>
              <div className={styles['text-body']}>
                Though there are a small handful of bugs, optimizations, and improvements I'd like to address, I am happy with Crater's current
                state. The app is live and useable! To check it out for yourself, use the link below. Feedback and bug reports are welcome
                and encouraged :)
              </div>
            </div>
            <Image
              src='/images/crater/crate-animation-still.webp'
              pixel={true}
              scale={.9}
              backgroundColor='black'
              caption='Fig.1'
            />
          </div>
          <div className={styles['break']} />
          <a className={styles['link']} href={'https://crater-lite.vercel.app/'}>crater-lite</a>
          <div className={styles['break']} />
          <div className={styles['break']} />
          <div className={styles['sub-title']}>Closing Thoughts</div>
          <div className={styles['break']} />
          <div className={styles['text-body']}>
            Prior to this project, I had no real web development knowledge. As a result, I spent many hours researching, building,
            scrapping, and rewriting large chunks of my codebase. Though frustrating at times, I am satisfied with
            the skills and understanding I have gained.
          </div>
          <div className={styles['break']} />
          <div className={styles['break']} />
          <div className={styles['text-body']}>
            Perhaps most importantly, I am stepping away from Crater with new insights into my creative pitfalls: sharing your work is more
            important than perfecting it. Make it shippable, refine it later.
          </div>
          <div className={styles['break']} />
          <div className={styles['break']} />
          <div
            className={styles['text-body']}
            style={{
              boxShadow: '0 1em magenta'
            }}
          >
            If you've made it this far, thank you for taking the time to read my blog! More projects and posts to come soon...
          </div>
          <div className={styles['break']} />
        </div>
        <div className={styles['break']} />
        <Footer />
      </div>
    </div>
  )

}