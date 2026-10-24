import styles from "./HomeAndAbout.module.sass";

function HomePage() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Ласкаво просимо до Світу Собачок! 🐶</h1>
      <p className={styles.description}>
        Найкраще місце для всіх, хто обожнює хвостиків, мокрі носики та безмежну
        вірність. Тут ви знайдете все про наших чотирилапих друзів!
      </p>
      <div className={styles.emojiContainer}>🐕🦮🐕‍🦺🐩</div>
    </div>
  );
}

export default HomePage;
