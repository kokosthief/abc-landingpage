import { herobg } from "../assets";

export default function CTA() {
  const backgroundImageStyle = {
    backgroundImage: `url(${herobg})`, // Use the herobg variable here
  };

  return (
    <div className="h-screen mx-auto">
      <section>
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] h-screen"
          style={backgroundImageStyle}
        >
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden">
            <div className="flex h-full items-center justify-center">
              <div className="px-6 text-center text-white md:px-12">
                <h2 className="font-arcade text-3xl   md:text-5xl xl:text-6xl font-semibold text-white mb-8  leading-tight tracking-tight">
                  Start Your <br />
                  <span>Alpha Journey</span>
                </h2>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://app.uniswap.org/#/swap?outputCurrency=0x52B552c4a698c9B1De4c7fe0Dd4462AF141F7C3e&chain=ethereum"
                  className="relative self-center overflow-hidden inline-block px-8 py-4 font-extrabold text-xl rounded-full group focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] shadow-lg"
                >
                  <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                  <span className="absolute top-0 left-0 w-48 h-48 -mt-1  transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-3"></span>
                  <span className="relative w-full text-left  text-white transition-colors duration-200 ease-in-out group-hover:text-black">
                    Buy $ABC
                  </span>
                  <span className="absolute inset-0 border-2 hover:border-white  rounded-full"></span>
                </a>
                <p className="font-spacegrotesk mt-6 leading-7 font-normal text-sm sm:text-lg  text-white">
                  Buy / Sell Taxes : 4%
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
