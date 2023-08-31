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
    <section id="hero3" className="h-screen w-screen" style={sectionStyle}>
      <div className="flex flex-col items-end  self-start sm:pr-10 pt-8">
        <h1 className=" font-league font-bold text-white  w-fit  mx-auto sm:mx-0 pt-16 text-center text-6xl xs:mt-16 sm:text-8xl md:pr-20  md:text-left md:text-8xl xl:text-9xl  ">
          <span className="text-[white] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            gamifying{" "}
          </span>
          <br />
          <span className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            crypto
          </span>
          <span className="text-black"> calling</span>
        </h1>
        <div className="px-10 sm:px-20 flex flex-col-reverse mx-auto sm:mx-0 gap-10 sm:flex-row pt-36 xs:pt-44 sm:pt-20 md:pt-28">
          <img
            src={lightning}
            alt="Lightning Strike"
            className=" w-[70px] md:w-[100px] mx-auto"
          />
          <div className="bg-white md:bg-transparent px-4 py-2 rounded-xl font-spacegrotesk text-black text-center sm:text-left  sm:max-w-md md:max-w-lg text-1xl sm:text-2xl md:text-2xl xl:text-3xl">
            <div className="">
              <p className="">
                a <span className="font-bold">fun and free </span>bot for
                communities, whilst bringing transparency to callers.
              </p>
            </div>
            <div className="mt-4">
              <p className="">
                Anyone can use the bot to{" "}
                <span className="font-bold">
                  track their calls, receive a ranking, and build their
                  reputation{" "}
                </span>{" "}
                as an alpha hunter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3;
