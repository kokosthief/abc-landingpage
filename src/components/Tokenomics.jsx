import { CheckCircleIcon } from "@heroicons/react/20/solid";

const bullishPoints = [
  "Total token supply: 1,000,000",
  "100% of supply added",
  "No team tokens",
  "Max wallet: 2%",
];

const Tokenomics = () => (
  <section className=" h-fit py-20">
    <div className="container flex flex-wrap sm:py-40 mx-auto px-5  gap-20 sm:gap-0 md:px-20">
      <div className=" border-4 border-white pl-5 shadow-2xl rounded-3xl  min-w-[100px] sm:w-7/12 md:w-1/2 sm:pr-12 py-5  ">
        <h1 className=" font-league text-left md:text-left font-bold text-white text-6xl sm:text-7xl  md:text-8xl xl:text-8xl ">
          <span className="text-[white] ">Tokenomics</span>
        </h1>
        <ul
          role="list"
          className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6  sm:gap-6"
        >
          {bullishPoints.map((point) => (
            <li
              key={point}
              className="flex gap-x-3 text-xl text-white font-bold font-spacegrotesk "
            >
              <CheckCircleIcon
                className="h-9 w-auto -mt-1 flex-none  text-white "
                aria-hidden="true"
              ></CheckCircleIcon>

              {point}
            </li>
          ))}
        </ul>
        <p className="font-spacegrotesk mt-6 text-xl leading-7 text-white">
          Liquidity is locked for 1 year and tax-added liquidity is periodically
          burned.
        </p>
        <div
          className="md:hidden pt-6"
          data-te-animation-init
          data-te-animation-start="onLoad"
          data-te-animation-reset="true"
          data-te-animation="[slide-right_1s_ease-in-out]"
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://app.uniswap.org/#/swap?outputCurrency=0xd4d4b7b55b30fb096c30ad202e746d010b47dc30&chain=ethereum"
            className="relative self-center bg-white inline-block  px-8 py-4 font-extrabold text-xl rounded-full"
          >
            <span className="relative w-full text-center text-[#0a0a0a] ">
              Buy $ABC
            </span>
          </a>
        </div>
        <div className="hidden md:flex pt-6">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://app.uniswap.org/#/swap?outputCurrency=0xd4d4b7b55b30fb096c30ad202e746d010b47dc30&chain=ethereum"
            className="relative self-center overflow-hidden inline-block px-8 py-4 mr-4 font-extrabold text-xl rounded-full group focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] shadow-lg"
          >
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-[white] opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-3"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
              Buy $ABC
            </span>
            <span className="absolute inset-0 border-2 border-white rounded-full"></span>
          </a>
        </div>
      </div>
      <div className="flex flex-col text-center sm:text-right grow justify-between gap-4">
        <h3 className="font-league text-9xl tracking-widest -mr-4 text-[#0a0a0a] font-extrabold uppercase   ">
          1M
        </h3>
        <h4 className="font-league flex-none text-3xl -mt-7 mb-3 font-semibold leading-6 text-white">
          Total Supply
        </h4>
        <h3 className="font-league text-9xl tracking-widest -mr-4 text-[#0a0a0a]  mt-1   font-extrabold uppercase   ">
          .5%
        </h3>
        <h4 className="font-league flex-none text-3xl -mt-7 mb-3 font-semibold leading-6 text-white">
          Supply Burned
        </h4>{" "}
        <h3 className="font-league text-9xl tracking-widest -mr-4 text-[#0a0a0a]   font-extrabold uppercase   ">
          4%
        </h3>
        <h4 className="font-league flex-none text-3xl -mt-7 mb-3 font-semibold leading-6 text-white">
          Buy/sell Tax
        </h4>{" "}
      </div>
    </div>
  </section>
);

export default Tokenomics;
