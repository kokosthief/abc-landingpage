import styles from "../style";
import {
  abccolorlogo,
  abcbricklogo,
  twittercircle,
  telegramcircle,
  discordcircle,
  mediumcircle,
} from "../assets";
import Navbar from "./Navbar";
import Stats from "./Stats";

const Hero = () => {
  return (
    <section
      id="home"
      className={`-mb-10 pb-10  h-full sm:h-fit md:h-screen lg:h-full sm:pb-16 bg-[linear-gradient(to_bottom,_#FD7553,_#D84261)]`}
    >
      <Navbar />
      <div class="container mx-auto -mt-7 sm:mt-0 sm:py-14 md:py-16 lg:py-20 xl:py-24">
        <div class="flex flex-col-reverse	 sm:flex-row items-center justify-around ">
          <div class="mt-6 lg:mt-0 ss:text-left  ">
            <h1 class="whitespace-nowrap overflow-hidden font-league font-bold  text-4xl ss:text-5xl sm:text-6xl md:text-7xl text-white tracking-normal mb-12">
              the 1st gamified <br />
              <span class="text-black ">caller ecosystem</span>
            </h1>
            <div className="flex flex-row gap-2 justify-center sm:justify-start ">
              <div className="flex">
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
                <div className="hidden md:flex mx-auto text-center w-max align-middle">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://app.uniswap.org/#/swap?outputCurrency=0xd4d4b7b55b30fb096c30ad202e746d010b47dc30&chain=ethereum"
                    class="relative self-center overflow-hidden inline-block px-8 py-4 mr-4 font-extrabold text-xl rounded-full group focus:bg-primary-600 "
                  >
                    <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                    <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                    <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                      Buy $ABC
                    </span>
                    <span class="absolute inset-0 border-2 border-white rounded-full"></span>
                  </a>
                </div>
              </div>
              <div className="hidden xs:flex flex-row flex-wrap xs:gap-3   ">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://telegram.me/AlphaBotCalls"
                >
                  <img
                    src={telegramcircle}
                    alt="CredibleCallers"
                    className="w-[60px] h-auto rounded-full hidden xs:flex"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/alphabotcalls"
                  className="hidden ss:flex "
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
                  className="hidden md:flex "
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
                  className="hidden md:flex "
                >
                  <img
                    src={mediumcircle}
                    alt="CredibleCallers"
                    className="w-[60px] h-auto rounded-full"
                  />
                </a>
              </div>
            </div>
          </div>
          {/* abc logo */}
          <div className="flex sm:ml-8 md:ml-0 mt-6 sm:my-auto  ">
            <img
              src={abcbricklogo}
              alt="CredibleCallers"
              className="w-[200px] xs:w-[240px] ss:w-[280px] sm:w-[340px] md:w-[400px] lg:w-[450px] xl:w-[550px] "
            />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Hero;
