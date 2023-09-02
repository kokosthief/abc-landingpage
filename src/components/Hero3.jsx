import React from "react";
import { hero3 } from "../assets";
import { lightning } from "../assets";

const Hero3 = () => {
  const sectionStyle = {
    backgroundImage: `url(${hero3})`,
    backgroundSize: "cover",
    backgroundPosition: "left",
  };

  return (
    <section id="hero3" className=" h-screen    " style={sectionStyle}>
      <div className="flex flex-col mx-auto overflow-clip xl:max-w-screen-xl justify-around sm:justify-center sm:gap-8 h-full px-5 sm:px-20 md:mr-20 lg:mr-40">
        <div className=" md:place-self-end  sm:mr-7">
          <h1 className="font-league font-bold text-center md:text-left text-4xl xs:text-5xl ss:text-6xl sm:text-6xl md:text-7xl lg:text--8xl xl:text-9xl text-white tracking-normal   ">
            <span className="text-[white]">Gamifying </span>
            <br />
            <span className="">Crypto</span>
            <span className="text-[#0a0a0a]"> Calling</span>
          </h1>
        </div>
        <div className="gap-10 md:place-self-end flex flex-col-reverse md:flex-row ">
          <img
            src={lightning}
            alt="Lightning Strike"
            className="w-[70px] md:w-[100px] mx-auto flex "
          />
          <div className=" bg-white rounded-3xl px-5 py-5 mx-auto ">
            <p className="font-spacegrotesk font-bold text-[#0a0a0a] text-center md:text-left text-1xl sm:text-2xl md:text-2xl xl:text-3xl max-w-md">
              AlphaBot is a{" "}
              <span className="font-bold">fun, free and useful </span>utility
              that tracks calls and brings transparency and competition to the
              space.
            </p>
            <p className="font-spacegrotesk font-bold text-[#0a0a0a] text-center md:text-left text-1xl sm:text-2xl md:text-2xl xl:text-3xl max-w-md">
              Anyone can use the bot to track their own calls,{" "}
              <span className="font-bold">receive a score and ranking, </span>{" "}
              and try to make it on the ABC Leaderboards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3;
