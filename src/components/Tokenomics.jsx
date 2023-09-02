import { CheckIcon } from "@heroicons/react/20/solid";

const bullishPoints = [
  "total token supply: 1,000,000",
  "100% of supply added",
  "no team tokens",
  "max wallet: 2%",
];

const Tokenomics = () => (
  <section class="">
    <div class="container flex flex-wrap  py-40 mx-auto">
      <div class=" border-4 border-white px-6 shadow-2xl py-5 rounded-3xl sm:w-1/2 sm:pr-12 sm:py-8 mb-10 sm:mb-0 pb-10  ">
        <h3 className="font-league text-4xl sm:text-5xl font-bold tracking-tight text-[#E900CE]">
          tokenomics
        </h3>
        <ul
          role="list"
          className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6  sm:gap-6"
        >
          {bullishPoints.map((point) => (
            <li
              key={point}
              className="flex gap-x-3 text-xl text-white font-bold font-spacegrotesk lowercase"
            >
              <CheckIcon
                className="h-6 w-5 flex-none text-pink-400 "
                aria-hidden="true"
              />
              {point}
            </li>
          ))}
        </ul>
        <p className="font-spacegrotesk mt-6 text-xl leading-7 text-white">
          Liquidity is locked for 1 year and tax-added liquidity is periodically
          burned.
        </p>
        <div
          className="md:hidden flex-shrink-0 pt-6            "
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
            <span class="relative w-full text-center text-[#0a0a0a] ">
              Buy $ABC
            </span>
          </a>
        </div>
        <div className="hidden md:flex pt-6">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://app.uniswap.org/#/swap?outputCurrency=0xd4d4b7b55b30fb096c30ad202e746d010b47dc30&chain=ethereum"
            class="relative self-center overflow-hidden inline-block px-8 py-4 mr-4 font-extrabold text-xl rounded-full group focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] shadow-lg"
          >
            <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-[white] opacity-[3%]"></span>
            <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[#E900CE] opacity-100 group-hover:-translate-x-8"></span>
            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
              Buy $ABC
            </span>
            <span class="absolute inset-0 border-2 border-white rounded-full"></span>
          </a>
        </div>
      </div>
      <div class="flex flex-col text-center sm:text-right grow justify-between gap-4">
        <h3 className="font-league text-9xl tracking-widest -mr-4 bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text font-extrabold uppercase  text-transparent ">
          1M
        </h3>
        <h4 className="font-league flex-none text-3xl -mt-7 mb-3 font-semibold leading-6 text-white">
          total supply
        </h4>
        <h3 className="font-league text-9xl tracking-widest -mr-4 bg-[linear-gradient(to_bottom,_#FF7892,_#FF8661)] mt-1  bg-clip-text font-extrabold uppercase  text-transparent ">
          .5%
        </h3>
        <h4 className="font-league flex-none text-3xl -mt-7 mb-3 font-semibold leading-6 text-white">
          supply burned
        </h4>{" "}
        <h3 className="font-league text-9xl tracking-widest -mr-4 bg-[#FFB762] bg-clip-text font-extrabold uppercase  text-transparent ">
          4%
        </h3>
        <h4 className="font-league flex-none text-3xl -mt-7 mb-3 font-semibold leading-6 text-white">
          buy/sell tax
        </h4>{" "}
      </div>
    </div>
  </section>
);

export default Tokenomics;
