import React, { useEffect } from "react";
import CountUp from "react-countup";
import heroImg from "../../images/photo.png";

const Hero = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* Hero left content */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px]"
            >
              Hello Welcome
            </h5>

            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I am Arun Ravikumar <br /> Architect and Planner
            </h1>

            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button className="bg-black text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                  <i className="ri-mail-line"></i>Contact Me
                </button>
              </a>
              <a href="#portfolio">
                <button className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor">
                  See Portfolio
                </button>
              </a>
            </div>

            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor mt-14 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
            >
              <span>
                <i className="ri-apps-line"></i>
              </span>
              An architect and urban planner. My passion lies in crafting spaces
              that seamlessly merge functionality, aesthetics, and
              sustainability. With a keen eye for detail and a commitment to
              innovative design, I bring a fresh perspective to every
              architectural project.
            </p>

            {/* Social icons and Follow Me */}
            <div className="flex flex-col gap-4 mt-14">
              <div className="flex items-center gap-9">
                <span className="text-smallTextColor text-[15px] font-[600]">
                  Follow me
                </span>
                <a
                  className="text-smallTextColor text-[15px] font-[600]"
                  href="https://www.youtube.com/@modelflick"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-youtube-line"></i>
                </a>
                <a
                  className="text-smallTextColor text-[15px] font-[600]"
                  href="https://www.facebook.com/arunravi.ravimr?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-facebook-box-fill"></i>
                </a>
                <a
                  className="text-smallTextColor text-[15px] font-[600]"
                  href="https://www.instagram.com/arunarchitect.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-instagram-line"></i>
                </a>
                <a
                  className="text-smallTextColor text-[15px] font-[600]"
                  href="https://www.linkedin.com/in/arun-ravikumar-336331165?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-linkedin-box-fill"></i>
                </a>
              </div>

              {/* View My Courses Button with moving glare */}
              <a
                href="https://modelflick.com/courses"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden w-full text-center py-2 px-4 rounded font-semibold text-white bg-black"
              >
                View My Courses
                {/* Glare effect */}
                <span
                  className="absolute top-0 left-[-50%] w-1/2 h-full bg-white opacity-20 transform -skew-x-12 animate-glare"
                  style={{ pointerEvents: "none" }}
                ></span>
              </a>
            </div>
          </div>
          {/* Hero left end */}

          {/* Hero image */}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img src={heroImg} alt="Hero" />
            </figure>
          </div>
          {/* Hero image end */}

          {/* Hero content right */}
          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={5} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Years of Experience
              </h4>
            </div>

            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={100} duration={2} suffix="%" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Success Rate
              </h4>
            </div>

            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={15} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Happy Clients
              </h4>
            </div>

            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={10} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Projects Completed
              </h4>
            </div>
          </div>
          {/* Hero content right end */}
        </div>
      </div>

      {/* Inline styles for glare animation */}
      <style jsx>{`
        @keyframes glare {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }
        .animate-glare {
          animation: glare 2s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
