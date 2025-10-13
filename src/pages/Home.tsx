import Header from '../components/Header';
import BoxLink from '../components/BoxLink';
import styles from './Home.module.css';

type Project = {
  img: string;
  pixel: boolean;
  title: string;
  description: string;
}

export default function Home() {
  const projects: Project[] = [
    { img: '/images/crater-tile.png', pixel: true, title: 'Crater', description: 'Digital Music Gram' },
    { img: '/images/lone-palm-island.png', pixel: false, title: 'Lone Palm Island', description: 'A 3D Demo Written in C++' }
  ];

  return (
    <div className={styles['main']}>
      <div className={styles['container']}>
        <Header />
        <br />
        <div className={styles['links']}>
          {projects.length > 0 && projects.map((p: Project) =>
            <>
              <BoxLink img={p.img} pixel={p.pixel} title={p.title} description={p.description} />
              <br />
            </>
          )}
        </div>
      </div>
    </div>

  );
}