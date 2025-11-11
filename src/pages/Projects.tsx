import PageSkeleton from "./PageSkeleton"
import BoxLink from "../components/BoxLink";
import styles from './projects.module.css';

type Project = {
  link: string;
  img: string;
  pixel: boolean;
  title: string;
  description: string;
}

export default function Projects() {
  const projects: Project[] = [
    { link: '/projects/crater', img: '/images/crater/crater-tile.png', pixel: true, title: 'Crater', description: 'Digital Music Gram' },
    { link: '/projects/lone-palm-island', img: '/images/lone-palm-island/beauty-shot.webp', pixel: false, title: 'Lone Palm Island', description: 'A 3D Demo Written in C++' },
    { link: '/projects/postcard-2025', img: '/images/postcard/front-small.webp', pixel: false, title: 'Dive Into 2025', description: 'Double Exposure Postcard' }
  ];

  return (
    <PageSkeleton>
      <div 
        className={styles['content-container']}
        style={{
          padding: '0px 0px'
        }}
      >
        <div className={styles['box-links']}>
          {projects.length > 0 && projects.map((p: Project) =>
            <>
              <BoxLink link={p.link} img={p.img} pixel={p.pixel} title={p.title} description={p.description} />
              <br />
            </>
          )}
        </div>
      </div>
    </PageSkeleton>
  )
}