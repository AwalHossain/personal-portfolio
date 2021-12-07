import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Projects from "../Porjects/Projects";
import Technology from "../Technology/Technology";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Technology></Technology>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
};

export default Home;
