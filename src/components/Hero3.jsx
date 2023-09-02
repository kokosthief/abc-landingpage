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
    <section id="hero3" className="h-screen" style={sectionStyle}>
      <div className="flex flex-col xl:max-w-screen-xl h-screen justify-around sm:justify-center sm:justify-items-end">
        <h1 className="w-fit mx-auto sm:mx-5 font-league font-bold text-center sm:text-left text-white text-6xl xs:mt-16 sm:text-8xl md:text-8xl xl:text-9xl">
          <span className="text-[white]">gamifying </span>
          <br />
          <span className="">crypto</span>
          <span className="text-black"> calling</span>
        </h1>
        <div className="flex flex-col-reverse sm:flex-row bg-white rounded-3xl mx-5 sm:px-5 sm:py-4 max-w-sm sm:max-w-3xl">
          <img
            src={lightning}
            alt="Lightning Strike"
            className="w-[70px] md:w-[100px] mx-auto flex"
          />
          <div className="px-4 py-2 flex flex-col font-spacegrotesk font-bold text-black text-center text-1xl sm:text-2xl md:text-2xl xl:text-3xl">
            <p className="">
              a <span className="font-bold">fun and free </span>bot for
              communities, whilst bringing transparency to callers.
            </p>
            <p className="mt-4">
              Anyone can use the bot to{" "}
              <span className="font-bold">
                track their calls, receive a ranking, and build their reputation{" "}
              </span>{" "}
              as an alpha hunter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3;
