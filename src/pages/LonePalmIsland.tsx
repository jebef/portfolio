import styles from './projects.module.css';
import PageSkeleton from './PageSkeleton';
import Image from '../components/Image';

export default function LonePalmIsland() {
  return (
    <PageSkeleton>
      <div className={styles['content-container']}>
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
        <div className={styles['text-body']}>
          LEGOs and surfing. Two pasttimes that defined my early years and continue to play a large role in my adult life. <span style={{ color: 'yellow' }}>Figure 2</span> shows
          the box art for set 6254 - Rocky Reef. As a kid, I was priveleged enough to inherit my Dad's LEGO collection. Among cracked space helmets
          and arched monorail tracks lay the original palm. It's structure and design greatly inspired the aesthetic of this project.
        </div>
        <div className={styles['break']} />
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
              Surfing - another gift passed down by my Dad. From sixth grade on, the ocean came to dominate my
              imagination and free time. I've logged countless hours cruising highway one in search of novelty peaks
              and empty lineups. Total time in the water, unknown.
            </div>
            <div className={styles['text-body']}>
              As an undergrad at Berkeley, I began to develop a new equally powerful obsession: computer graphics. Combining pixels
              and the Pacific felt like a natural next step.
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
          create a simple oceanic scene. Novice shader and modeling skills proved complimentary to the low-poly look
          I wanted to achieve. But how do you breathe life into a digital ocean modeled as a flat plane? Textures and terrain!
        </div>
        <div className={styles['break']} />
        <div className={styles['break']} />
        <div className={styles['text-body']}>
          ...
        </div>
        <div className={styles['break']} />
        <div className={styles['break']} />
        <div className={styles['sub-title']}>Closing Thoughts</div>
        <div className={styles['break']} />
        <div className={styles['text-body']}>
          ...
        </div>
        <div className={styles['break']} />
        <div className={styles['break']} />
        <a href={'https://github.com/jebef/lone-palm-island'} className={styles['link']}>lone-palm-island</a>
      </div>
    </PageSkeleton>

  )
}