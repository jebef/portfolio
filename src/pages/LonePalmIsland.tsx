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
              expression. This project is a shallow dive into the world of low-level graphics programming. Enjoy!
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
          LEGOs and surfing. Two pastimes that defined my early years and continue to play a large role in my adult life. <span style={{ color: 'yellow' }}>Figure 2</span> shows
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
              imagination and free time. I've logged countless hours cruising Highway 1 in search of novelty peaks
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
          your guide! If you have an interest in graphics programming and no clue where to start, go check out the link above.
          LearnOpenGL is a free online textbook that is approachable and rich in content. It helped me exit the "where do I start?" phase
          and really get to work. I cannot recommend it enough.
        </div>

        <div className={styles['break']} />
        <div className={styles['break']} />

        <div className={styles['text-body']}>
          Upon reaching the chapter "Advanced OpenGL", I felt ready to build my first bespoke 3D demo. The goal:
          create a simple oceanic scene. My novice shader and modeling skills proved complimentary to the low-poly look
          I wanted to achieve. But how do you breathe life into a digital ocean modeled as a flat plane?
        </div>

        <div className={styles['break']} />
        <div className={styles['break']} />

        <div className={styles['text-body']}>
          Enter another core learning resource: <a href={'https://www.youtube.com/watch?v=HusvGeEDU_U'} style={{ color: 'blue' }}>ThinMatrix's OpenGL Water Tutorial</a>.
          After building out the bare bones of the scene - terrain/models, a straightforward rendering pipeline, basic shaders - I set out to tackle the ocean. ThinMatrix's
          tutorial proved essential. A high-level breakdown of the water rendering process:
        </div>

        <div className={styles['break']} />
        <div className={styles['break']} />

        <div className={styles['mixed-container']}>
          <div className={styles['mixed-container__text']} style={{ gap: '20px' }}>
            <div className={styles['bullet']}>
              <div className={styles['bullet__point']} />
              <div className={styles['bullet__text']}>
                Render the portion of the scene that sits above the water to an independent framebuffer - reflections.
              </div>
            </div>
            <div className={styles['bullet']}>
              <div className={styles['bullet__point']} />
              <div className={styles['bullet__text']}>
                Render the portion of the scene that sits below the water to another framebuffer - refractions.
              </div>
            </div>
            <div className={styles['bullet']}>
              <div className={styles['bullet__point']} />
              <div className={styles['bullet__text']}>
                Blend reflections and refractions to produce a final texture that is mapped to the ocean model.
              </div>
            </div>
            <div className={styles['text-body']}>
              <span style={{ color: 'yellow' }}>Figure 3</span> shows this result along with two debug windows - the reflection
              and refraction framebuffers in the top-left and bottom-right corners respectively.
            </div>
          </div>
          <Image
            src='/images/lone-palm-island/ref.webp'
            pixel={false}
            scale={1}
            backgroundColor='black'
            caption='Fig.3'
          />
        </div>

        <div className={styles['break']} />

        <div className={styles['text-body']}>
          This alone produces a believable allbeit static ocean. Reflections and refractions behave as they should, updating each frame. But perfectly still
          water is not visually engaging. In order to mimic movement we can use a DUDV map - a texture comprised of mostly red and green channels, pictured
          in <span style={{ color: 'yellow' }}>Figure 4</span>.
        </div>
        <div className={styles['break']} />
        <div className={styles['break']} />
        <div className={styles['mixed-container']}>
          <Image
            src='/images/lone-palm-island/dudv.webp'
            pixel={false}
            scale={1}
            backgroundColor='black'
            caption='Fig.4'
          />
          <Image
            src='/images/lone-palm-island/normal.webp'
            pixel={false}
            scale={1}
            backgroundColor='black'
            caption='Fig.5'
          />
          <Image
            src='/images/lone-palm-island/arial.webp'
            pixel={false}
            scale={1}
            backgroundColor='black'
            caption='Fig.6'
          />
        </div>
        <div className={styles['text-body']}>
          For each fragment, we sample the DUDV map at some offset and add this sample to our texture coordinates. Distorting our ocean texture
          in this way results in a wavy appearance. This effect is easy to identify by inspecting the edges of the island
          in <span style={{ color: 'yellow' }}>Figure 6</span>.
        </div>
        <div className={styles['break']} />
        <div className={styles['break']} />
        <div className={styles['text-body']}>
          Additionally, we can compute specular highlights using a normal map (<span style={{ color: 'yellow' }}>Figure 5</span>).
          The lesser the difference between the camera's view vector and a fragment's normal, the stronger the highlight. Like the DUDV map, we use an
          offset to sample the normal map. In doing so, these highlights move and morph with time. A final enhancement that really sells the illusion
          of small waves on the ocean's surface.
        </div>
        <div className={styles['break']} />
        <div className={styles['break']} />
        <div className={styles['sub-title']}>Closing Thoughts</div>
        <div className={styles['break']} />
        <div
          className={styles['text-body']}
          style={{
            boxShadow: '0 1em magenta'
          }}
        >
          There is so much more I could go into detail on but I am going to end this blog here. If you'd like to run this demo yourself or spend
          some time digging through the shaders, go checkout my GitHub (link below). Thank you for reading!
        </div>
        <div className={styles['break']} />
        <div className={styles['break']} />
        <a href={'https://github.com/jebef/lone-palm-island'} className={styles['link']}>lone-palm-island</a>
      </div>
    </PageSkeleton>

  )
}