import { NavLink, Routes, Route } from "react-router-dom";
import AnimalSlider from "../Animal/index.jsx";
import styles from "./Components.module.sass";

function Components() {
  return (
    <div className={styles.componentsPage}>
      <p className={styles.hintText}>
        Будь ласка, натисніть на кнопку нижче, щоб відкрити інтерактивний
        слайдер та познайомитися з нашими чудовими чотирилапими друзями! ✨
      </p>

      <NavLink to="/components/slider-dog" className={styles.linkButton}>
        Переглянути слайдер собачок 🐕
      </NavLink>

      <div className={styles.sliderContent}>
        <Routes>
          <Route path="slider-dog" element={<AnimalSlider />} />
        </Routes>
      </div>
    </div>
  );
}

export default Components;
