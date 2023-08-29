import styles from "../style";
import {
  abccolorlogo,
  twittercircle,
  telegramcircle,
  discordcircle,
  mediumcircle,
} from "../assets";
import Stats from "./Stats";

const Hero = () => {
  return (
    <section id="home" className={``}>
      <div className="flex flex-col ">
        <div className="flex md:flex-row flex-row mb-8">
          <div
            className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-20 px-6`}
          >
            <div className="flex flex-row justify-between items-center w-full ">
              <h1 className="flex-1 font-league font-extrabold  ss:text-[98px] text-[45px]  text-white ss:leading-[100.8px] leading-[75px]">
                the 1st gamified
              </h1>
              {/* <div className="ss:flex hidden md:mr-2 ml-10">
            <GetStarted />
          </div> */}
            </div>

            <h1 className="font-league font-extrabold ss:text-[98px] text-[70px]  text-black ss:leading-[80.8px] leading-[75px] w-full flex items-center">
              caller ecosystem
            </h1>
            <div className="flex flex-row mt-6">
              <div className="">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://app.uniswap.org/#/swap?outputCurrency=0xd4d4b7b55b30fb096c30ad202e746d010b47dc30&chain=ethereum"
                  class="relative inline-flex items-center justify-start px-8 py-4 overflow-hidden font-extrabold text-xl rounded-full group focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                  <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                  <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                    Buy $ABC
                  </span>
                  <span class="absolute inset-0 border-2 border-white rounded-full"></span>
                </a>
              </div>
              <div class="flex flex-row items-center gap-4 ml-4 md:ml-8 md:gap-6  ">
                <div class="flex">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/alphabotcalls"
                  >
                    <img
                      src={twittercircle}
                      alt="CredibleCallers"
                      className="w-[60px] h-auto relative z-[5]"
                    />
                  </a>
                </div>
                <div class="flex ">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://telegram.me/AlphaBotCalls"
                  >
                    <img
                      src={telegramcircle}
                      alt="CredibleCallers"
                      className="w-[60px] h-auto relative z-[5]"
                    />
                  </a>
                </div>
                <div class="md:flex hidden  ">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://discord.gg/CQ6txJa8RA"
                  >
                    <img
                      src={discordcircle}
                      alt="CredibleCallers"
                      className="w-[60px] h-auto relative z-[5]"
                    />
                  </a>
                </div>
                <div class="md:flex hidden   ">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://medium.com/@alphabotcalls"
                  >
                    <img
                      src={mediumcircle}
                      alt="CredibleCallers"
                      className="w-[60px] h-auto relative z-[5]"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={`flex-1 flex ${styles.flexCenter} md:my-0  relative`}>
            <img
              src={abccolorlogo}
              alt="CredibleCallers"
              className="w-[90%] h-auto relative z-[5]"
            />
            {/* gradient start */}
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            {/* gradient end */}
          </div>
        </div>
        <Stats />
      </div>
    </section>
  );
};

export default Hero;
