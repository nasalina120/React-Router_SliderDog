import { NavLink } from "react-router-dom";
import styles from "./Header.module.sass";

function Header() {
  const getLinkStyle = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <nav className={styles.menuNav}>
      <ul className={styles.navList}>
        <li>
          <NavLink to="/" className={getLinkStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={getLinkStyle}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/components" className={getLinkStyle}>
            Components
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
