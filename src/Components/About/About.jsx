import React from "react";
import Navbar from "../Navbar/Navbar";
import "./About.css";
const About = () => {
  return (
    <div>
      <div className>
        <div className="bg-gray-900">
          <Navbar></Navbar>
        </div>
        <div>
          <section class="md:flex px-10 py-10 ">
            <div class="card ">
              <h2 class="header py-2 text-2xl ">About Me</h2>
              <p>
                I’m a Front-End Developer located in Dhaka, BD. I have a serious
                passion for UI effects, animations and creating intuitive,
                dynamic user experiences.
              </p>
              <p>
                Well-organised person, problem solver, independent employee with
                high attention to detail. Fan of MMA, outdoor activities, TV
                series and English literature. A family person and father of two
                fractious boys,
              </p>
              <p>
                Interested in the entire frontend spectrum and working on
                ambitious projects with positive people.
              </p>
              <p>
                I'm the guy who makes people buy your stuff. I do websites,
                classic print design, branding and development. From time to
                time I get paid to coach people so they become as awesome as I
                am (doesn't really work tho).
              </p>
            </div>
            <div class="card my-12">
              <h2 class="header text-2xl mb-4">Expectations</h2>
              <p>
                I want to master the process of building web sites and increase
                my knowledge, skills and abilities in:
              </p>
              <div class="skills">
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Node Js</li>
                </ul>
              </div>
              <p>
                I’d like to work for a web design firm helping clients create an
                impressive online presence.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
