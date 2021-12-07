import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../Navbar/Navbar";

const ProjectDetails = () => {
  const [service, setService] = useState([]);
  const { serviceId } = useParams();
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((result) => setService(result));
  }, []);
  const sort = service.find((data) => data.id == serviceId);

  return (
    <div>
      <div>
        <div className="bg-gray-900 overflow-y-hidden overflow-hidden">
          <Navbar></Navbar>
        </div>

        <div className="container  md:grid grid-cols-2 px-5 gap-10">
          <div className="w-62 flex-1">
            <h3 className="text-2xl">ScreenShot-1</h3>
            <img
              style={{ width: "100%", objectFit: "cover", height: "300px" }}
              className="h-62 flex-1"
              src={sort?.img1}
              alt=""
            />
          </div>
          <div className="h-62 flex-1">
            <h3 className="text-2xl">ScreenShot-2</h3>
            <img
              style={{ width: "100%", objectFit: "contain", height: "300px" }}
              src={sort?.img2}
              alt=""
            />
          </div>
          <div className="w-62 flex-1">
            <h3 className="text-2xl">ScreenShot-3</h3>
            <img
              style={{ width: "100%", objectFit: "contain", height: "400px" }}
              src={sort?.img3}
              alt=""
            />
          </div>
          <div className="mt-10 ml-10">
            <h3 className="text-2xl text-center py-4">Project Details</h3>
            <p>{sort?.details}</p>
          </div>
        </div>
        <div className="container">
          <div className="md:flex py-20 gap-10  mx-auto justify-center">
            <button className="bg-gray-900 m-2 text-white rounded-full px-9 py-3">
              <a href={sort?.liveSite}>Live Site</a>
            </button>
            <button className="bg-gray-900 m-2 text-white rounded-full px-9 py-3">
              <a href={sort?.githubClient}>GitHub Client Code</a>
            </button>
            <button className="bg-gray-900  m-2 text-white rounded-full px-9 py-3">
              <a href={sort?.githubServer}> GitHub Server Code</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
