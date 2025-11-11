import styles from './projects.module.css';
import PageSkeleton from "./PageSkeleton";
import Image from '../components/Image';

export default function About() {
  return (
    <PageSkeleton>
      <div className={styles['content-container']} style={{ padding: '24px' }}>
        <div className={styles['title']}>Hey! I'm Wyatt... </div>
        <div className={styles['break']} />
        <div className={styles['mixed-container']}>
          <div className={styles['mixed-container__text']}>
            <div className={styles['text-body']}>
              <span style={{ color: 'rgb(0, 255, 0)' }}>Engineer, Artist, Verb!</span> After graduating from
              Berkeley in the Spring of '24 I moved to the Mission to plant some roots and find my post-grad footing.
            </div>
            <div className={styles['text-body']}>
              For the last year I have worked as lead Carpenter for Boom City Builders - a local contracting company specializing
              in home renovations and improvements. By day, I join hand and hammer; By night, hand and keyboard! This balance has
              allowed me to live in the city I love while continuing to work towards my long term career goals.
            </div>
          </div>
            <Image
              src='/images/about/selfie.webp'
              pixel={false}
              scale={1}
              backgroundColor='none'
              caption='- _ -'
            />
        </div>
        <div className={styles['sub-title']}>Kai... Bi... Bo!</div>
        <div className={styles['break']} />
        <div className={styles['bullet']}>
          <div className={styles['bullet__point']} />
          <div className={styles['bullet__text']}>
            B.S. EECS - UC Berkeley 2024
          </div>
        </div>
        <div className={styles['break']} />
        <div className={styles['bullet']}>
          <div className={styles['bullet__point']} />
          <div className={styles['bullet__text']}>
            Computer graphics, web design + development, digital audio tools 
          </div>
        </div>
        <div className={styles['break']} />
        <div className={styles['bullet']}>
          <div className={styles['bullet__point']} />
          <div className={styles['bullet__text']}>
            Surfer, musician, visual artist
          </div>
        </div>
      </div>
    </PageSkeleton>
  )
}