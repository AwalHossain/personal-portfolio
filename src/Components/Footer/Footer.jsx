import React from "react";
import "./Footer.css";
import mask from "../../img/footer-white-mask.png";
import mask1 from "../../img/footer-white-mask-lg.png";
import Fade from "react-reveal/Fade";
const Footer = () => {
  return (
    <div className="bg-gray-300 ">
      <div className="footer h-full relative pt-64 py-32 md:pt-96">
        <div>
          <div className="footer-bg">
            {/* <img
              className="w-full align-middle"
              src="http://paperpillar.com/assets/images/footer-pattern-bg.png"
              alt=""
            /> */}
            {/* <img
              src="http://paperpillar.com/assets/images/footer-pattern-bg-lg.png"
              alt=""
            /> */}
          </div>
          <div className="footer-white-mask">
            <img className="w-full bg-1 hidden md:block" src={mask} alt="" />
            <img className="w-full block md:hidden" src={mask1} alt="" />
          </div>
          <Fade left>
            <div className="container mx-auto relative z-10 ">
              <div className="footer-text text-center">
                <p className="md:text-5xl text-xl  sm:text-2xl tracking-wide text-white font-bold w-full  ">
                  Interested in wroking with me?
                </p>
                <button className="text-white font-bold text-xs mt-12 rounded-full bg-pink-500 px-12 py-3">
                  LET'S TALK
                </button>
              </div>
            </div>
          </Fade>

          <div className="footer-social mt-62">
            <div className="social-container flex justify-center pt-10 gap-4">
              <div>
                <a href="https://www.instagram.com" title="insta">
                  <i class="fab fa-instagram-square text-4xl text-white"></i>
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com" title="insta">
                  <i class="fab fa-facebook text-4xl text-white"></i>
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com" title="insta">
                  <i class="fab fa-github text-4xl text-white"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
