import React from "react";
import { hero4 } from "../assets";

const Hero2 = () => {
  const sectionStyle = {
    backgroundImage: `url(${hero4})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section id="hero2" className="relative h-screen" style={sectionStyle}>
      <div className="absolute top-32 left-48 md:top-32 md:left-48">
        <h1 className="pt-4 px-2 text-center md:text-left font-league font-bold text-6xl md:text-8xl xl:text-7xl text-white tracking-normal mb-12">
          a <span className="text-[#0a0a0a]">new frontier</span>
          <br />
          for crypto
        </h1>
      </div>
    </section>
  );
};

export default Hero2;
