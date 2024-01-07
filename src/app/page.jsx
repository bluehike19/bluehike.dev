import Image from 'next/image';
import styles from './home.modules.css'
const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1>Creative Thoughts Agency</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium provident culpa ipsam, qui exercitationem voluptates repellat ducimus amet autem incidunt.</p>
      <div className={styles.buttons}>
        <div className={styles.button}>Learn More</div>
        <div className={styles.button}>Contact</div>
      </div>
      <div className={styles.brands}>
        <Image src='/brands.png' alt='' fill className={styles.brandImg} />
      </div>
    </div>
    <div className={styles.imgContainer}>
      <Image src='/hero.gif' alt='' fill className={styles.heroImg} />
    </div>
  </div>;
};

export default Home;