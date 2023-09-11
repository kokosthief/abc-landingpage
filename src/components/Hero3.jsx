import React from "react";
import { hero3 } from "../assets";
import { lightning } from "../assets";

const Hero3 = () => {
  const sectionStyle = {
    backgroundImage: `url(${hero3})`,
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
  };

  return (
    <section id="hero3" className=" h-screen    " style={sectionStyle}>
      <div className="flex flex-col mx-auto overflow-clip xl:max-w-screen-xl justify-around sm:justify-center sm:gap-8 h-full px-5 sm:px-20 md:mr-20 lg:mr-40">
        <div className=" md:place-self-end  sm:mr-[10px]">
          <h1 className="font-league font-bold text-center md:text-left text-6xl  sm:text-8xl  md:text-8xl xl:text-8xl text-white tracking-normal   ">
            <span className="text-[#0a0a0a] sm:text-[white]">Gamifying </span>
            <br />
            <span className="">Crypto</span>
            <span className="text-white sm:text-[#0a0a0a]"> Calling</span>
          </h1>
        </div>
        <div className="gap-10 md:place-self-end flex flex-col-reverse md:flex-row ">
          <img
            src={lightning}
            alt="Lightning Strike"
            className="w-[70px] md:w-[100px] mx-auto flex "
          />
          <div className=" bg-white rounded-3xl px-5 py-5 mx-auto ">
            <p className="font-spacegrotesk font-normal text-[#0a0a0a] text-center md:text-left text-1xl sm:text-2xl md:text-2xl xl:text-3xl max-w-md">
              A competitive <span className="font-bold">fun and free</span>{" "}
              crypto calling bot that brings transparency and accountability to
              the space.
            </p>
            <p className="mt-3 font-spacegrotesk font-normal text-[#0a0a0a] text-center md:text-left text-1xl sm:text-2xl max-w-md">
              Anyone can use the bot to track calls,{" "}
              <span className="font-bold">receive a score and ranking, </span>{" "}
              and make their way up the ABC leaderboards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3;
