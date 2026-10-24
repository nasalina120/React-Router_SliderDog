import { Outlet } from "react-router-dom";
import Header from "./Header";
function BasePage() {
  return (
    <>
      <Header />

      <Outlet />

      <footer>Footer</footer>
    </>
  );
}

export default BasePage;
