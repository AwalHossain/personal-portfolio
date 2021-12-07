import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bimg from "../../img/website.jpeg.png";
import Zoom from "react-reveal/Zoom";
const Project = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((result) => setService(result));
  }, []);

  const handleClick = () => {};
  return (
    <div className="">
      {service.map((data) => (
        <Zoom>
          <div className="container  md:px-12 lg:px-44 px-12 py-12   w-full mx-auto">
            <div className=" md:flex  justify-center box-shadow shadow-xl">
              <div className="flex-1">
                <div
                  style={{
                    backgroundImage: `url(${data.img1})`,
                    backgroundPosition: "top",
                    backgroundSize: "cover",
                  }}
                  className=" h-64 md:h-full w-auto mx-auto px-12 rounded-t-lg"
                >
                  {/* <img
                className="w-full h-64 md:h-full object-cover"
                src="http://paperpillar.com/assets/images/crisp-works.png"
                alt=""
              /> */}
                </div>
              </div>
              <div className="section-title flex-1 md:pt-16 bg-white">
                <h2 className="text-4xl text-center">{data.title}</h2>
                <p className="text-gray-600 text-center py-5">
                  MERN Stack Project
                </p>
                <div
                  onClick={`${() => handleClick(data.id)}`}
                  className="w-full py-4 flex"
                >
                  <Link
                    to={`projectDetails/${data.id}`}
                    className=" btn-worke mx-auto py-4 px-16 mt-16 font-bold text-xs tracking-wider text-white rounded-full"
                  >
                    VIEW PROJECT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Zoom>
      ))}
    </div>
  );
};

export default Project;

//  <div className="container  md:px-12 lg:px-44 px-12 py-12    w-full mx-auto">
//    <div className=" md:flex box-shadow justify-center shadow-xl">
//      <div className="flex-1">
//        <div className="bg-img h-64 md:h-full w-auto mx-auto px-12 rounded-t-lg">
//          {/* <img
//             className="w-full h-64 md:h-full object-cover"
//             src="http://paperpillar.com/assets/images/crisp-works.png"
//             alt=""
//           /> */}
//        </div>
//      </div>
//      <div className="section-title flex-1 md:pt-16 bg-white">
//        <h2 className="text-4xl text-center">
//          Beautiful Landing Page for your dream place
//        </h2>
//        <p className="text-gray-600 text-center py-5">
//          Crud Operation, Web Design
//        </p>
//        <div className="w-full py-4 flex">
//          <a
//            className=" btn-worke mx-auto py-4 px-16 mt-16 font-bold text-xs tracking-wider text-white rounded-full"
//            href="https://lens-kart.web.app"
//          >
//            VIEW PROJECT
//          </a>
//        </div>
//      </div>
//    </div>
//  </div>;
