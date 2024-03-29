import React, { useState, useEffect } from "react";
import data from "../../assets/data/portData";
import "../../App.css";
import Model from "./Model";
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
  const [nextItems, setNextitems] = useState(3);
  const [portfolios, setPortfolios] = useState(data);
  const [selectTab, setSelectTab] = useState("all");
  const [showModel, setShowModel] = useState(false);
  const [activeID, setActiveID] = useState(null);

  const navigate = useNavigate();

  const showModelHandler = (projectId) => {
    // Use navigate to navigate to the dynamic route with the project ID
    navigate(`/project/${projectId}`);
    
  };


  const loadMoreHandler = () => {
    setNextitems((prev) => prev + 9);
  };

  useEffect(() => {
    if (selectTab === "all") {
      setPortfolios(data);
    }
    if (selectTab === "commercial") {
      const filterData = data.filter((item) => item.category === "Commercial");
      setPortfolios(filterData);
    }
    if (selectTab === "house") {
      const filterData = data.filter((item) => item.category === "House");
      setPortfolios(filterData);
    }
    if (selectTab === "hospital") {
      const filterData = data.filter((item) => item.category === "Hospital");
      setPortfolios(filterData);
    }
  }, [selectTab]);
  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className=" sm:mb-0">
            <h3 className="text-headingColor text-[2rem] font-[700]">
              Projects Involved
            </h3>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setSelectTab("all")}
              className="text-smallTextColor border border-solid border-smallTextColor   py-2 px-4 rounded-[8px]"
            >
              All
            </button>
            <button
              onClick={() => setSelectTab("commercial")}
              className="text-smallTextColor border border-solid border-smallTextColor   py-2 px-4 rounded-[8px]"
            >
              Commercial
            </button>
            <button
              onClick={() => setSelectTab("house")}
              className="text-smallTextColor border border-solid border-smallTextColor   py-2 px-4 rounded-[8px]"
            >
              Residential
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4 flex-wrap mt-12">
          {portfolios.slice(0, nextItems)?.map((portfolio, index) => (
            <div
              key={index}
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="group max-w-full xs:w-[98%] sm:w-[98%] md:w-[98%] lg:w-[32%] relative z-[1]"
            >
              <figure className="customFigure">
                <img
                  className="rounded-[18px] customFigure"
                  src={portfolio.imgUrl}
                  alt=""
                />
              </figure>
              <div className="w-full h-full bg-black bg-opacity-70 absolute top-0 left-0 z-[5] hidden group-hover:block">
                <div className="w-full h-full flex flex-col text-white items-center justify-center">
                  <h1>{portfolio.title}</h1>
                  <h1>{portfolio.location}</h1>
                  <button
                    onClick={() => showModelHandler(portfolio.id)}
                    className="text-white bg-green-500 hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
                  >
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          {nextItems < portfolios.length && data.length > 6 && (
            <button
              onClick={loadMoreHandler}
              className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
            >
              Load More
            </button>
          )}
        </div>
      </div>
      {showModel && <Model setShowModel={setShowModel} activeID={activeID} />}
    </section>
  );
};

export default Portfolio;
