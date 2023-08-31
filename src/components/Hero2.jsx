import React from "react";
import { hero1 } from "../assets";

const Hero2 = () => {
  const sectionStyle = {
    backgroundImage: `url(${hero1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section id="hero2" className="relative h-screen" style={sectionStyle}>
      <div className="flex font-league font-bold text-white tracking-normal mb-12 ">
        <h1 className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] w-max mx-auto px-1 pt-16 text-center text-6xl xs:mt-16 sm:text-8xl  md:ml-20 lg:ml-24  md:text-left md:text-8xl xl:text-9xl  ">
          a <span className="text-black">new frontier</span>
          <br />
          for crypto
        </h1>
      </div>
    </section>
  );
};

export default Hero2;
