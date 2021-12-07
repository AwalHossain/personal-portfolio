import React, { useEffect, useState } from "react";
import "./Banner.css";
import heroGirl from "../../img/hero-girl.png";
import heroGuy2 from "../../img/hero-guy-2.png";
import heroGuy1 from "../../img/hero-guy-1-lg.png";
import heroGuy3 from "../../img/hero-guy-3.png";
import Navbar from "../Navbar/Navbar";
import ReactRevealText from "react-reveal-text";
const Banner = () => {
  const [scroll, setScroll] = useState(false);
  const [text, setText] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setText({ show: true });
    }, 1000);
  }, []);

  const changeBtn = () => {
    console.log(window.scrollX);
  };
  window.addEventListener("scroll", (e) => console.log(e.target));
  const myfunc = (e) => {};
  return (
    <div onScroll={myfunc()} className="main w-full  ">
      <div className="main-content  landing">
        <section className="home-hero  relative ">
          <div className="md:px-36  pb-20">
            <Navbar></Navbar>
          </div>
          <div className="hidden md:block w-full mx-auto">
            <div className="hero-character container mx-auto  md:flex justify-between items-center pb-10">
              <div className="hero-guy-2 ml-28 ">
                <img className="w-48 pt-5 " src={heroGuy2} alt="" />
              </div>
              <div className="hero-girl w-full mr-28">
                <img className="w-full md:w-62 pt-5" src={heroGirl} alt="" />
              </div>
            </div>
          </div>

          {/* For Mobile Device */}
          <div
            style={{ width: "350px" }}
            className="hero-girl w-62 px-16 md:hidden py-8 mx-auto"
          >
            <img className="w-62  pt-5" src={heroGirl} alt="" />
          </div>
          <div className="hero-section container mx-auto">
            <div className="hero-container">
              <div className="hero-text w-full mx-auto">
                <ReactRevealText
                  style={{ letterSpacing: -1 }}
                  className="md:text-8xl text text-6xl md:tracking-wide text-center text-white "
                  show={text}
                >
                  Welcome To My Portfolio
                </ReactRevealText>

                <p className=" text-white md:pt-8">
                  I am a passionate designers and developers from Bangladesh
                </p>
                <div
                  className={`hero-button-float ${
                    scroll ? "floating" : "left"
                  }`}
                >
                  <div class="hero-button-wrapper">
                    <button
                      class="btn btn-white btn-talk"
                      data-toggle="modal"
                      data-target="#contactModal"
                    >
                      <span>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://drive.google.com/file/d/1t_wIp0LDbE8uitM3bXL7qtzGIRoiOlOs/view?usp=sharing"
                          title="resume"
                        >
                          Download Resume
                        </a>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="hero-guy-3 relative block">
            <div className="">
              <img className="w-36" src={heroGuy3} alt="" />
            </div>
          </div> */}
          <div className="hero-guy-1 ">
            <div className="pt-10  right-52">
              <img src={heroGuy1} alt="" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Banner;
