import logo from "./logo.svg";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Projects from "./Components/Porjects/Projects";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import ProjectDetails from "./Components/ProjectDetails/ProjectDetails";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";

function App() {
  window.addEventListener("scroll", (changeBtn) => {
    console.log(window.scrollY);
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route
          path="projectDetails/:serviceId"
          element={<ProjectDetails />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
