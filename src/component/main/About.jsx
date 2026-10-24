import styles from "./HomeAndAbout.module.sass";

function About() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Про наш проект 🐾</h1>

      <p className={styles.description}>
        Світ Собачок - це затишний куточок, створений для всіх, хто не уявляє
        свого життя без вірних чотирилапих друзів. Наша мета - ділитися
        корисними порадами, цікавими фактами та просто дарувати гарний настрій
        шкірному відвідувачу.
      </p>

      <div className={styles.emojiContainer}>❤️🐕🦴</div>

      <p
        className={styles.description}
        style={{ fontSize: "1.1rem", color: "#455a64" }}
      >
        Проект розроблено з любов'ю до собак та великим бажанням зробити світ
        наших улюбленців ще кращим. Дякуємо, що ви з нами!
      </p>
    </div>
  );
}

export default About;
