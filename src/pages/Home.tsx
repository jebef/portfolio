import Header from '../components/Header';
import Footer from '../components/Footer';
import BoxLink from '../components/BoxLink';
import styles from './Home.module.css';

type Project = {
  link: string;
  img: string;
  pixel: boolean;
  title: string;
  description: string;
}

export default function Home() {
  const projects: Project[] = [
    { link: '/projects/crater', img: '/images/crater-tile.png', pixel: true, title: 'Crater', description: 'Digital Music Gram' },
    { link: '/projects/lone-palm-island', img: '/images/lone-palm-island.png', pixel: false, title: 'Lone Palm Island', description: 'A 3D Demo Written in C++' },
    { link: '/projects/postcard-2025', img: '/images/dive-into-2025-front.png', pixel: false, title: 'Dive Into 2025', description: 'Double Exposure Postcard'}
  ];

  return (
    <div className={styles['main']}>
      <div className={styles['container']}>
        <Header />
        <br />
        <div className={styles['links']}>
          {projects.length > 0 && projects.map((p: Project) =>
            <>
              <BoxLink link={p.link} img={p.img} pixel={p.pixel} title={p.title} description={p.description} />
              <br />
            </>
          )}
        </div>
        <br/>
        <Footer/>
      </div>
    </div>

  );
}