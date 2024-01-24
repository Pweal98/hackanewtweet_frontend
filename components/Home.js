import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.div_container_left}>
          <h1 className={styles.title}>
              Welcome to <a href="https://nextjs.org">Next.jssss!</a>
          </h1>
        </div>
        <div className={styles.div_container_right}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.jssss!</a>
          </h1>
        </div>
        
      </main>
    </div>
  );
}

export default Home;
