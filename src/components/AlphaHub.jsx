import { CheckIcon } from "@heroicons/react/20/solid";

const includedFeatures = [
  "Alpha Signals Like Never Before",
  "Personalized Caller Subscriptions",
  "Fine-Tuned Filtering Options",
  "Passive Rewards through Revenue Sharing",
];

export default function AlphaHub() {
  return (
    <section className="sm:pt-24 sm:pb-20 mx-auto max-w-8xl px-5 lg:px-8 bg-hero2-gradient ">
      <div className="xl:max-w-screen-xl mx-auto sm:px-20 ">
        <div className="mx-auto text-center overflow-clip ">
          <h1 className=" font-league font-bold pt-16 text-6xl  text-center  xs:text-5xl ss:text-6xl sm:text-6xl md:text-7xl lg:text--8xl xl:text-9xl text-white tracking-normal   ">
            <span className="text-[white] ">Holder Benefits</span>
          </h1>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="font-league text-4xl sm:text-5xl font-bold tracking-tight text-white">
              ABC Alpha Hub
            </h3>
            <p className="font-spacegrotesk mt-6 text-xl leading-7 text-white">
              ABC is committed to maximizing token holder value through the
              creation of premium, <br></br>
              holder-exclusive features and access to our comprehensive revenue
              sharing model.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="font-league flex-none text-4xl font-semibold leading-6 text-white">
                benefits:
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-x-3 text-xl text-white font-spacegrotesk font-bold "
                >
                  <CheckIcon
                    className="h-6 w-5 flex-none text-white "
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0  self-center">
            <div className="rounded-2xl outline outline-4  outline-white bg-hero1-gradient opacity-76 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center md:py-8 lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="font-arcade text-base font-semibold text-white">
                  Start Your Alpha Journey
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="font-spacegrotesk text-5xl font-bold tracking-tight text-white">
                    2000
                  </span>
                  <span className="font-arcade text-sm font-semibold leading-6 tracking-wide text-white">
                    $ABC
                  </span>
                </p>
                {/* <a
                  href="#"
                  className="bg-white px-8 py-4 mr-4 font-extrabold text-xl rounded-full font-spacegrotesk mt-10 block w-full text-center   text-[#0a0a0a] shadow-sm"
                >
                  GET ACCESS
                </a> */}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://app.uniswap.org/#/swap?outputCurrency=0xd4d4b7b55b30fb096c30ad202e746d010b47dc30&chain=ethereum"
                  class="relative self-center overflow-hidden inline-block px-8 py-4 mt-5 font-extrabold text-xl rounded-full group focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] shadow-lg"
                >
                  <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                  <span class="absolute top-0 left-0 w-48 h-48 -mt-1  transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
                  <span class="relative w-full text-left  text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                    Buy $ABC
                  </span>
                  <span class="absolute inset-0 border-2 hover:border-white  rounded-full"></span>
                </a>
                <p className="font-spacegrotesk mt-6 text-xs leading-5 text-white">
                  Buy and sell taxes of 4%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
