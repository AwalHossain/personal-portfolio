import React from "react";
import "./Technology.css";
import express from "../../img/express.svg";
import mongodb from "../../img/mongodb.svg";

const Technology = () => {
  return (
    <div className="container mx-auto relative">
      <div className="section-tit relative mb-10">
        <h2 className="text-6xl tech text-center">Technology</h2>
        <p className="text-center py-9">
          I have been working with the Technology so far
        </p>
      </div>
      <div className=" justify-center">
        <div className="lg:flex justify-center items-center  gap-10">
          <div className=" flex items-center justify-center mb-5">
            <div className="bg-gray-300 px-16 lg:px-6 h-24  flex justify-center items-center rounded-lg">
              {/* <img
                className="tech-img "
                src="https://paperpillar.com/assets/images/hoopsai.png"
                alt=""
              /> */}
              <i class="fab p-6 fa-js tech-img text-5xl text-center text-yellow-500"></i>
            </div>
          </div>
          <div className="flex flex-col items-center flex-wrap gap-5 mb-5">
            <div className="bg-gray-300 px-20 lg:px-6   h-24 flex justify-center items-center rounded-lg">
              <img className="tech-img " src={express} alt="" />
            </div>
            <div className="bg-gray-300 px-24 lg:px-6 h-24 flex justify-center items-center rounded-lg">
              {/* <img className="tech-img" src={mongodb} alt="" /> */}
              <i className="text-5xl text-green-700 p-6">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  role="img"
                  viewBox="0 0 24 24"
                  class="external-icon"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title></title>
                  <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"></path>
                </svg>
              </i>
            </div>
          </div>
          <div className="flex items-center flex-col gap-5 mb-5">
            <div className="bg-gray-300 px-32 lg:px-6 h-24 flex justify-center items-center rounded-lg">
              <i class="fab fa-node text-5xl p-6 text-center text-green-600"></i>
            </div>
            <div className="bg-gray-300 px-40 lg:px-6  h-24 flex justify-center items-center rounded-lg">
              <i class="fab fa-react p-6 text-5xl text-center text-blue-500"></i>
            </div>
            <div className="bg-gray-300 px-32 lg:px-6 h-24 flex justify-center items-center rounded-lg">
              <img
                className="tech-img"
                src="https://img.icons8.com/color/90/000000/firebase.png"
                alt=""
              />
            </div>
          </div>
          <div className="flex items-center flex-col gap-5 mb-5">
            <div className="bg-gray-300 px-24 lg:px-6 h-24 flex justify-center items-center rounded-lg">
              {/* <img
                className="tech-img"
                src="https://paperpillar.com/assets/images/hoopsai.png"
                alt=""
              /> */}
              <i class="fab fa-bootstrap p-6 text-5xl text-blue-600 text-center"></i>
            </div>
            <div className="bg-gray-300 px-20 lg:px-6 h-24 flex justify-center items-center rounded-lg">
              {/* <img
                className="tech-img"
                src="https://paperpillar.com/assets/images/hoopsai.png"
                alt=""
              /> */}

              <i className="text-5xl p-6 text-center text-blue-500">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  role="img"
                  viewBox="0 0 24 24"
                  class="external-icon"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title></title>
                  <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
                </svg>
              </i>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-gray-300 px-16 lg:px-6 h-24 flex justify-center items-center rounded-lg">
              {/* <img
                className="tech-img"
                src="https://paperpillar.com/assets/images/hoopsai.png"
                alt=""
              /> */}
              <i className="text-5xl text-blue-600 p-6">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  role="img"
                  viewBox="0 0 24 24"
                  class="external-icon"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title></title>
                  <path d="M0 2.475v10.39l3 1.733V7.67l6 3.465 6-3.465v3.465l-6 3.463v3.464l6 3.463 9-5.195V9.402l-3 1.733v3.463l-6 3.464-3-1.732 6-3.465V2.475L9 7.67 0 2.475zm24 0l-3 1.73V7.67l3-1.732V2.474Z"></path>
                </svg>
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
