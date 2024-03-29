import React, { useState, useEffect } from "react";
import {
  abcbricklogo,
  discordcircle,
  mediumcircle,
  telegramcircle,
  twittercircle,
} from "../assets";
import styles from "../pages/HomePage/HomePage.style";
import Navbar from "./Navbar";

const Hero = () => {
  const [calls, setCalls] = useState(null);
  const [groups, setGroups] = useState(null);
  const [users, setUsers] = useState(null);

  const simulateLoading = () => {
    const callsInterval = setInterval(() => {
      // Generate random number for calls (between 5000 and 10000 for example)
      const randomCalls = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000;
      setCalls(randomCalls);
    }, 100);

    const groupsInterval = setInterval(() => {
      // Generate random number for groups (between 50 and 200 for example)
      const randomGroups = Math.floor(Math.random() * (200 - 50 + 1)) + 50;
      setGroups(randomGroups);
    }, 100);

    const usersInterval = setInterval(() => {
      // Generate random number for users (between 20000 and 30000 for example)
      const randomUsers =
        Math.floor(Math.random() * (30000 - 20000 + 1)) + 20000;
      setUsers(randomUsers);
    }, 100);

    // After a certain time (e.g., 2000 milliseconds), clear the intervals and set the real numbers
    setTimeout(() => {
      clearInterval(callsInterval);
      clearInterval(groupsInterval);
      clearInterval(usersInterval);

      // Set the real numbers for your stats
      setCalls(7635);
      setGroups(100);
      setUsers(26765);
    }, 500);
  };

  // Call the simulateLoading function when the component mounts
  useEffect(() => {
    simulateLoading();
  }, []);

  return (
    <section
      id="home"
      className={`flex flex-col pb-10 sm:px-20  h-fit sm:h-fit md:h-screen lg:h-screen xl:h-screen  justify-between bg-[linear-gradient(to_bottom,_#FD7553,_#D84261)] mx-auto `}
    >
      <Navbar />
      <div className="container mx-auto lg:px-20 -mt-7 sm:mt-0 sm:py-10 md:py-16 lg:py-20 xl:py-24  xl:max-w-screen-xl ">
        <div className="flex flex-col-reverse	 sm:flex-row items-center justify-around sm:justify-between ">
          <div className="mt-6 lg:mt-0 text-center sm:text-left ">
            <h1 className="whitespace-nowrap overflow-hidden font-league font-bold text-5xl  sm:text-5xl  md:text-7xl lg:text-8xl text-white tracking-normal mb-3 sm:mb-12 leading-[60px]">
              Gamifying Calls. <br />
              <span className="text-[#0a0a0a]">Finding Alpha.</span>
            </h1>
            <div className="flex flex-row gap-2 justify-center sm:justify-start ">
              <div className="flex ">
                <div
                  className="sm:hidden flex-shrink-0 scale-[85%]"
                  data-te-animation-init
                  data-te-animation-start="onLoad"
                  data-te-animation-reset="true"
                  data-te-animation="[slide-right_1s_ease-in-out]"
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://app.uniswap.org/#/swap?outputCurrency=0x52B552c4a698c9B1De4c7fe0Dd4462AF141F7C3e&chain=ethereum"
                    className="relative self-center bg-white inline-block  px-8 py-4 mr-4 font-extrabold text-xl rounded-full"
                  >
                    <span className="relative w-full text-center text-[#0a0a0a] ">
                      Buy $ABC
                    </span>
                  </a>
                </div>
                <div className="sm:scale-100 hidden sm:flex mx-auto text-center w-max align-middle">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://app.uniswap.org/#/swap?outputCurrency=0x52B552c4a698c9B1De4c7fe0Dd4462AF141F7C3e&chain=ethereum"
                    className="relative self-center overflow-hidden inline-block px-8 py-4 mr-4 font-extrabold text-xl rounded-full group focus:bg-primary-600 "
                  >
                    <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                    <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-3"></span>
                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                      Buy $ABC
                    </span>
                    <span className="absolute inset-0 border-2 border-white rounded-full"></span>
                  </a>
                </div>
              </div>
              <div className="-ml-8 sm:ml-0 scale-[85%] sm:scale-100 flex flex-row gap-2 xs:gap-3   ">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://telegram.me/AlphaBotCalls"
                  className="flex"
                >
                  <img
                    src={telegramcircle}
                    alt="CredibleCallers"
                    className="w-[60px] h-auto rounded-full "
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/alphabotcalls"
                  className="flex "
                >
                  <img
                    src={twittercircle}
                    alt="CredibleCallers"
                    className="w-[60px] h-auto rounded-full"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://discord.gg/CQ6txJa8RA"
                  className="flex "
                >
                  <img
                    src={discordcircle}
                    alt="CredibleCallers"
                    className="w-[60px] h-auto rounded-full"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://medium.com/@alphabotcalls"
                  className=" hidden md:flex  "
                >
                  <img
                    src={mediumcircle}
                    alt="CredibleCallers"
                    className="w-[60px] h-[60px] rounded-full"
                  />
                </a>
              </div>
            </div>
          </div>
          {/* abc logo */}
          <div className="flex mt-6 sm:my-auto justify-end">
            <img
              src={abcbricklogo}
              alt="CredibleCallers"
              className="w-[200px] sm:w-[300px] lg:w-[400px] "
            />
          </div>
        </div>
      </div>
      <div
        className={`${styles.flexCenter} px-4 flex flex-wrap lg:grid-cols-3 m-0 sm:m-4 md:px-4 xl:px-8  `}
      >
        <div
          className={` flex flex-row  place-items-center my-2 scale-[83%]   sm:my-4 lg:scale-[93%] xl:scale-[125%]  mx-auto transition duration-300 ease-in-out hover:scale-110 `}
        >
          {/* Total Calls */}
          <h4
            className={`font-league font-semibold text-4xl xs:text-5xl ss:text-5xl sm:text-6xl lg:text-6xl xl:text-7xl leading-[43.16px] text-white ${
              calls !== null ? "scroll-animation" : ""
            }`}
          >
            {calls !== null ? calls.toLocaleString() : "Loading..."}
          </h4>

          <p className="font-league font-bold text-2xl xs:text-3xl ss:text-3xl sm:text-3xl lg:text-3xl xl:text-4xl leading-[24.58px] text-[#0a0a0a] ml-3 sm:ml-4 md:ml-3 ">
            Total Calls
          </p>
        </div>
        <div
          className={` flex flex-row  place-items-center my-2 scale-[83%]   sm:my-4 lg:scale-[93%] xl:scale-[125%]  mx-auto transition duration-300 ease-in-out hover:scale-110 `}
        >
          <h4 className="font-league font-semibold text-4xl xs:text-5xl ss:text-5xl sm:text-6xl lg:text-6xl xl:text-7xl leading-[43.16px] text-white">
            {groups !== null ? groups.toLocaleString() : "Loading..."}+
          </h4>
          <p className="font-league font-bold text-2xl xs:text-3xl ss:text-3xl sm:text-3xl lg:text-3xl xl:text-4xl leading-[24.58px] text-[#0a0a0a] ml-3 sm:ml-4 md:ml-3 ">
            Groups
          </p>
        </div>
        <div
          className={` flex flex-row  place-items-center my-2 scale-[83%]   sm:my-4 lg:scale-[93%] xl:scale-[125%]  mx-auto transition duration-300 ease-in-out hover:scale-110 `}
        >
          <h4 className="font-league font-semibold text-4xl xs:text-5xl ss:text-5xl sm:text-6xl lg:text-6xl xl:text-7xl leading-[43.16px] text-white">
            {users !== null ? users.toLocaleString() : "Loading..."}
          </h4>
          <p className="font-league font-bold text-2xl xs:text-3xl ss:text-3xl sm:text-3xl lg:text-3xl xl:text-4xl leading-[24.58px] text-[#0a0a0a] ml-3 sm:ml-4 md:ml-3">
            Users
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
