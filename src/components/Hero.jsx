import styles from "../style";
import {
  abccolorlogo,
  twittercircle,
  telegramcircle,
  discordcircle,
  mediumcircle,
} from "../assets";
import Navbar from "./Navbar";
import Stats from "./Stats";

const Hero = () => {
  return (
    <section id="home" className={`h-max md:h-screen pb-20 bg-hero1-gradient`}>
      <Navbar />
      <div class=" text-gray-800 text-center md:text-left">
        <div class="container mx-auto xl:px-32">
          <div class="flex flex-col md:flex-row items-center py-2 md:py-24">
            <div class="mt-6 lg:mt-0 basis-7/12 ">
              <h1 class="font-league font-bold text-4xl xs:text-5xl sm:text-6xl md:text-8xl xl:text-7xl text-white   tracking-normal mb-12">
                the 1st gamified <br />
                <span class="text-black ">caller ecosystem</span>
              </h1>
              <div className="flex flex-row gap-2 justify-center md:justify-start">
                <div
                  className="md:hidden flex-shrink-0            "
                  data-te-animation-init
                  data-te-animation-start="onLoad"
                  data-te-animation-reset="true"
                  data-te-animation="[slide-right_1s_ease-in-out]"
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://app.uniswap.org/#/swap?outputCurrency=0xd4d4b7b55b30fb096c30ad202e746d010b47dc30&chain=ethereum"
                    class="relative self-center bg-white inline-block  px-8 py-4 mr-4 font-extrabold text-xl rounded-full"
                  >
                    <span class="relative w-full text-center text-black ">
                      Buy $ABC
                    </span>
                  </a>
                </div>
                <div className="hidden md:flex ">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://app.uniswap.org/#/swap?outputCurrency=0xd4d4b7b55b30fb096c30ad202e746d010b47dc30&chain=ethereum"
                    class="relative self-center overflow-hidden inline-block px-8 py-4 mr-4 font-extrabold text-xl rounded-full group focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] shadow-lg"
                  >
                    <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                    <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                    <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                      Buy $ABC
                    </span>
                    <span class="absolute inset-0 border-2 border-white rounded-full"></span>
                  </a>
                </div>
                <div className="flex flex-row flex-wrap gap-3  ">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/alphabotcalls"
                    className="hidden xs:flex "
                  >
                    <img
                      src={twittercircle}
                      alt="CredibleCallers"
                      className="w-[60px] h-auto rounded-full shadow-lg"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://telegram.me/AlphaBotCalls"
                  >
                    <img
                      src={telegramcircle}
                      alt="CredibleCallers"
                      className="w-[60px] h-auto rounded-full shadow-lg"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://discord.gg/CQ6txJa8RA"
                    className="hidden xs:flex "
                  >
                    <img
                      src={discordcircle}
                      alt="CredibleCallers"
                      className="w-[60px] h-auto rounded-full shadow-lg"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://medium.com/@alphabotcalls"
                    className="hidden sm:flex "
                  >
                    <img
                      src={mediumcircle}
                      alt="CredibleCallers"
                      className="w-[60px] h-auto rounded-full shadow-lg"
                    />
                  </a>
                </div>
              </div>
            </div>
            {/* abc logo */}
            <div className="mb-12 lg:mb-0 basis-5/12 mx-auto ">
              <img
                src={abccolorlogo}
                alt="CredibleCallers"
                className="w-[100%] h-auto mx-auto"
              />
              {/* gradient start
                  <div className="md:absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient opacity-30" />
                  <div className="md:absolute z-[1] w-[30%] h-[80%] rounded-full white__gradient bottom-40 opacity-30" />
                  <div className="md:absolute z-[0] w-[40%] h-[69%]  top-40 blue__gradient opacity-30" /> */}
              {/* gradient end */}
            </div>
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Hero;
