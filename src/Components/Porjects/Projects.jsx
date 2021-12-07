import React from "react";
import Project from "../Project/Project";
import "./Projects.css";
import Zoom from "react-reveal/Zoom";
const Projects = () => {
  return (
    <div>
      <div className="  ">
        <div className="container mx-auto md:px-40">
          <div className="section-title">
            <h2 className="text-center pb-2 text-3xl w-full md:text-6xl">
              My Latest Works
            </h2>
          </div>
        </div>
      </div>
      <Zoom>
        <Project></Project>
      </Zoom>
    </div>
  );
};

export default Projects;
