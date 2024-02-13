import styles from './index.module.css';

const Home = () => {
  return (
    <div className={styles.body}>
      <div className={styles.camera} />
      <div className={styles.display} />
    </div>
  );
};

export default Home;
