import React from "react";
import { hero1 } from "../assets";

const Hero2 = () => {
  const sectionStyle = {
    backgroundImage: `url(${hero1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section id="hero2" className="  h-screen    " style={sectionStyle}>
      <div className="flex flex-col mx-auto overflow-clip xl:max-w-screen-xl py-20 justify-between sm:justify-between sm:gap-8 sm:pb-44 h-full px-5 sm:px-20 md:px-28 lg:px-40">
        <div className=" ">
          <h1 className="  font-league font-bold text-center md:text-left text-4xl xs:text-5xl ss:text-6xl sm:text-6xl md:text-7xl lg:text--8xl xl:text-9xl text-white tracking-normal   ">
            Creating <br />
            <span className="text-[#0a0a0a]">an Ecosystem </span>
            <br />
            of Gem-Finders
          </h1>
        </div>
        <div className="  md:place-self-end">
          <p className="my-4 bg-white rounded-3xl px-5 py-5 mx-auto md:mx-0 font-spacegrotesk font-bold text-[#0a0a0a] text-center md:text-left text-1xl sm:text-2xl max-w-md">
            ABC tracks data and the performance of callers across all socials.
            <br></br>
          </p>
          <p className="bg-white rounded-3xl px-5 py-5 mx-auto md:mx-0 font-spacegrotesk font-bold text-[#0a0a0a] text-center md:text-left text-1xl sm:text-1xl max-w-md">
            Whether you're a seasoned gem-finder or just starting, ABC empowers
            you to build a following and earn rewards for successful calls.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
