import styles from './projects.module.css';
import PageSkeleton from './PageSkeleton';
import Image from '../components/Image';

export default function LonePalmIsland() {
  return (
    <PageSkeleton>
      <div className={styles['content-container']} style={{ padding: '24px' }}>
        <div className={styles['title']}>Lone Palm Island</div>
        <div className={styles['break']} />
        <div className={styles['mixed-container']}>
          <div className={styles['mixed-container__text']}>
            <div className={styles['text-body']}>
              Graphics programming is a discipline I aspire to master - technical wizardry meets raw visual
              expression. Lone Palm Island is a shallow dive into the world of low-level graphics programming. This blog is intended to
              document my learning and creative processes. Enjoy!
            </div>
            <div className={styles['text-body']}>
              <span style={{ color: 'yellow' }}>Figure 1</span> shows a snapshot of the demo. Highs in the mid 70s, light trade winds,
              swells of 1-2ft.
            </div>
          </div>
          <Image
            src='/images/lone-palm-island/beauty-shot.webp'
            pixel={false}
            scale={1}
            backgroundColor='none'
            caption='Fig.1'
          />
        </div>
        <div className={styles['sub-title']}>Inspiration</div>
        <div className={styles['break']} />
        <div className={styles['mixed-container']}>
          <Image
            src='/images/lone-palm-island/lego.webp'
            pixel={false}
            scale={1}
            backgroundColor='none'
            caption='Fig.2'
          />
          <div className={styles['mixed-container__text']}>
            <div className={styles['text-body']}>
              LEGOs and surfing. Two pasttimes that defined my early years and continue to play a large role in my adult life. <span style={{ color: 'yellow' }}>Figure 2</span> shows
              the box art for set 6254 - Rocky Reef.
            </div>
          </div>
        </div>

        <div className={styles['break']} />
        <div className={styles['sub-title']}>Process</div>
        <div className={styles['break']} />
        <div className={styles['text-body']}>
          From static triangles to aquatic shimmers, let <a href={'https://learnopengl.com'} style={{ color: 'blue' }}>LearnOpenGL</a> be
          your guide. If you have an interest in low-level graphics programming and no clue where to start, go check out the link above.
          Learn OpenGL is an incredible online textbook that is both approachable and rich, it enabled me to grow from aimless dreamer to
          obsessive graphical tinkerer. I cannot recommend it enough.
        </div>
        <div className={styles['break']} />
        <div className={styles['break']} />
        <div className={styles['text-body']}>
          Upon reaching the chapter "Advanced OpenGL", I felt ready to build my first bespoke 3D demo. My goal:
          create an oceanic scene with "realistic" water. Novice shader and modeling skills lead me to pursue a low-poly retro aesthetic.
          How do you breathe life into a digital ocean modeled as a flat plane? Terrain + dynamic textures. 
        </div>
        <div className={styles['break']} />
        <div className={styles['break']} />
        <div className={styles['text-body']}>
          The palm tree was
        </div>
        <div className={styles['break']} />
        <div className={styles['break']} />
        <div className={styles['sub-title']}>Closing Thoughts</div>
        <div className={styles['break']} />
        <a href={'https://github.com/jebef/lone-palm-island'} className={styles['link']}>lone-palm-island</a>
      </div>
    </PageSkeleton>

  )
}