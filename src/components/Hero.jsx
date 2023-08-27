import styles from "../style";
import { discount, abccolorlogo } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col mb-16`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}
      >
        {/* <div className="flex flex-row items-center  p-[6px] px-4 bg-discount-gradient rounded-[5px] mb-5">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} text-sm ml-2`}>
            <span className="text-white">2000</span> $ABC{" "}
            <span className="text-white">= Alpha</span> Hub
          </p>
        </div> */}

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-chivo font-black  ss:text-[88px] text-[80px] text-white ss:leading-[100.8px] leading-[75px]">
            the 1st gamified <br className="sm:block hidden" />{" "}
          </h1>
          {/* <div className="ss:flex hidden md:mr-2 ml-10">
            <GetStarted />
          </div> */}
        </div>

        <h1 className="font-chivo font-black  ss:text-[88px] text-[80px] text-black ss:leading-[100.8px] leading-[75px] w-full flex items-center">
          caller ecosystem
        </h1>
        <div className="">
          <button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            class="text-black inline-block bg-white font-extrabold rounded-full text-xl px-8 py-2.5 text-center mr-2  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] "
          >
            BUY $ABC
          </button>
          <button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            class="px-3 py-2.5 text-center mr-2 inline-block rounded-full bg-primary p-2 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-7 w-7"
            >
              <path
                fill-rule="evenodd"
                d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15zm-6.75-10.5a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V10.5z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          {/* <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://app.uniswap.org/#/swap?outputCurrency=0xd4d4b7b55b30fb096c30ad202e746d010b47dc30&chain=ethereum"
            className="navbrutalbutton font-arcade invisible md:visible"
          >
            BUY $ABC
          </a> */}
        </div>

        {/* <p className={`${styles.paragraph} max-w-[470px] mt-4 `}>
          Building a gamified ecosystem for callers, establishing the KYC (know
          your CALLER) standard, and promoting merit-based exposure, all powered
          by our proprietary call-tracking technology
        </p> */}
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0  relative`}>
        <img
          src={abccolorlogo}
          alt="CredibleCallers"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        {/* <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://t.me/AlphaBotCalls"
          className=""
        >
          <img
            src="../src/assets/abclogo.png"
            alt="ABC Color Logo"
            className="w-[100%] h-[100%] relative z-[5]"
          />
        </a> */}
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
