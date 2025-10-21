import styles from './projects.module.css';
import PageSkeleton from './PageSkeleton';
import Image from '../components/Image';

export default function LonePalmIsland() {
  return (
    <PageSkeleton>
      <div className={styles['content-container']}>
        <div className={styles['title']}>Lone Palm Island</div>
        <div className={styles['break']}/>
        <div className={styles['text-body']}>
          Graphics programming is a discipline that I aspire to master. 
          A magical blend of technical wizardry and creative expression. Lone Palm Island is my 
          first 'proper' post grad project - a shallow dive into the world of low-level graphics programming. 
        </div>
        <div className={styles['break']}/>
        <div className={styles['break']}/>
        <Image src={'/images/lone-palm-island.png'} pixel={false} caption={'Fig.1'}/>
      </div>
    </PageSkeleton>

  )
}