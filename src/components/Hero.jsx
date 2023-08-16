import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="-mt-5 flex flex-row items-center  p-[6px] px-4 bg-discount-gradient rounded-[5px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} text-sm ml-2`}>
            <span className="text-white">2000</span> $ABC{" "}
            <span className="text-white">= Alpha</span> Hub
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="	 flex-1 font-arcade font-semibold ss:text-[72px] text-[42px] text-white ss:leading-[100.8px] leading-[75px]">
            Gamifying <br className="sm:block hidden" />{" "}
          </h1>
          <div className="ss:flex hidden md:mr-2 ml-10">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-arcade font-semibold ss:text-[68px] text-[38px] text-white ss:leading-[100.8px] leading-[75px] w-full flex items-center">
          <span className="text-gradient mr-6">100x </span> Calls
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Building a gamified ecosystem for callers, establishing the KYC (know
          your CALLER) standard, and promoting merit-based exposure, all powered
          by our proprietary call-tracking technology
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        {/* <img
          src={robot}
          alt="CredibleCallers"
          className="w-[100%] h-[100%] relative z-[5]"
        /> */}
        <a
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
        </a>
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
