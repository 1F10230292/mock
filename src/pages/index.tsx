import styles from './index.module.css';
type Option = { time1: string; time2: string; rushLevel: number };
const Home = () => {
  const options: Option[] = [
    { time1: '8:00', time2: '8:20', rushLevel: 3 },
    { time1: '8:10', time2: '8:30', rushLevel: 2 },
    { time1: '8:00', time2: '8:22', rushLevel: 3 },
    { time1: '8:15', time2: '8:35', rushLevel: 1 },
    { time1: '7:56', time2: '8:16', rushLevel: 2 },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.edge}>
        <div className={styles.camera} />
        <div className={styles.display}>
          <div className={styles.start}>新宿</div>
          <div className={styles.goal}>赤羽</div>
          <div className={styles.back}>前</div>
          <div className={styles.next}>後</div>
          <div className={styles.box1}>最短</div>
          <div className={styles.box2}>最安</div>
          <div className={styles.bar}>
            <div className={styles.bar2}>{}</div>
          </div>
          <div className={styles.options}>
            {options.map((option, i) => (
              <div className={styles.option} key={i}>
                {`${option.time1}~${option.time2}`}
                <div className={styles.rushLevel}>{option.rushLevel}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.button} />
      </div>
    </div>
  );
};

export default Home;
