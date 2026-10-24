import { Outlet } from "react-router-dom";
import Header from "./Header";
import styles from "./BasePage.module.sass";

function BasePage() {
  return (
    <div className={styles.Allpage}>
      <header className={styles.headerContainer}>
        <Header />
      </header>

      <main className={styles.mainContent}>
        <Outlet />
      </main>

      <footer className={styles.footerContainer}>
        © 2026 Світ Собачок. Всі права захищені.
      </footer>
    </div>
  );
}

export default BasePage;
