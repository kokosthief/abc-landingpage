import React from "react";
import { hero1 } from "../assets";

const Hero2 = () => {
  const sectionStyle = {
    backgroundImage: `url(${hero1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section id="hero2" className=" h-screen    " style={sectionStyle}>
      <div className="flex mx-auto mb-12 xl:max-w-screen-xl">
        <h1 className="px-1 w-full pt-16  text-white tracking-normal font-league font-bold text-center text-6xl xs:mt-16 sm:text-8xl  md:ml-20 lg:ml-24  md:text-left md:text-8xl xl:text-9xl  ">
          a <span className="text-black">new frontier</span>
          <br />
          for crypto
        </h1>
      </div>
    </section>
  );
};

export default Hero2;
