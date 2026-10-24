import "./App.css";
import BasePage from "./component/BasePage";
import HomePage from "./component/main/HomePage";
import Components from "./component/main/Components";
import About from "./component/main/About";
import NotFound from "./component/main/NotFound";
import { useEffect } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<BasePage />}>
            <Route index element={<HomePage />} />
            <Route path="/components" element={<Components />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
