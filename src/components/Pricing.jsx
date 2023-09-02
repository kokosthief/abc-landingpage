import {
  CheckBadgeIcon,
  CheckCircleIcon,
  CheckIcon,
  ShieldCheckIcon,
} from "@heroicons/react/20/solid";

const bullishPoints = [
  "total token supply: 1,000,000",
  "100% of supply added",
  "no team tokens",
  "max wallet: 2%",
];

const Pricing = () => (
  <section class="bg-hero2-gradient">
    <div class="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
        <div class="rounded-2xl border-4 bg-gradient-to-b from-sky-400 to-sky-200 border-white p-6 shadow-sm ring-1 ring-indigo-600 sm:order-last sm:px-8 lg:p-12">
          <div class="text-center">
            <h2 class="font-league text-4xl sm:text-5xl font-bold tracking-tight text-[#0a0a0a] md:text-6xl xl:text-7xl">
              Diamond
              <span class="sr-only">Plan</span>
            </h2>

            <p class="mt-2 sm:mt-4">
              <strong class=" text-3xl font-bold text-gray-900 sm:text-4xl">
                2000
              </strong>

              <span class="font-arcade  text-xl font-medium text-gray-900">
                $ABC
              </span>
            </p>
          </div>

          <ul class="mt-6 space-y-2">
            <li class="flex items-center gap-1">
              <CheckCircleIcon
                className="h-10 w-auto flex-none text-white "
                aria-hidden="true"
              />

              <span className="flex gap-x-3 text-xl text-white font-spacegrotesk font-bold lowercase">
                {" "}
                All future and existing premium features{" "}
              </span>
            </li>

            <li class="flex items-center gap-1">
              <CheckCircleIcon
                className="h-10 w-auto flex-none text-white "
                aria-hidden="true"
              />

              <span className="flex gap-x-3 text-xl text-white font-spacegrotesk font-bold lowercase">
                {" "}
                Calls From Top Callers Forwarded{" "}
              </span>
            </li>

            <li class="flex items-center gap-1">
              <CheckCircleIcon
                className="h-10 w-auto flex-none text-white "
                aria-hidden="true"
              />

              <span className="flex gap-x-3 text-xl text-white font-spacegrotesk font-bold lowercase">
                {" "}
                Unlimited Free Caller Subscriptions{" "}
              </span>
            </li>

            <li class="flex items-center gap-1">
              <CheckCircleIcon
                className="h-10 w-auto flex-none text-white "
                aria-hidden="true"
              />

              <span className="flex gap-x-3 text-xl text-white font-spacegrotesk font-bold lowercase">
                {" "}
                Diamond Alpha Chat Access{" "}
              </span>
            </li>

            <li class="flex items-center gap-1">
              <CheckCircleIcon
                className="h-10 w-auto flex-none text-white "
                aria-hidden="true"
              />

              <span className="flex gap-x-3 text-xl text-white font-spacegrotesk font-bold lowercase">
                {" "}
                Custom Filtered Call Forwarding*{" "}
              </span>
            </li>

            <li class="flex items-center gap-1">
              <CheckCircleIcon
                className="h-10 w-auto flex-none text-white "
                aria-hidden="true"
              />

              <span className="flex gap-x-3 text-xl text-white font-spacegrotesk font-bold lowercase">
                {" "}
                Security Filtered Calls*{" "}
              </span>
            </li>
            <li class="flex items-center gap-1">
              <CheckCircleIcon
                className="h-10 w-auto flex-none text-white "
                aria-hidden="true"
              />

              <span className="flex gap-x-3 text-xl text-white font-spacegrotesk font-bold lowercase">
                {" "}
                RevShare*{" "}
              </span>
            </li>
          </ul>

          <div class="text-center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.uniswap.org/#/swap?outputCurrency=0xd4d4b7b55b30fb096c30ad202e746d010b47dc30&chain=ethereum"
              class="relative self-center overflow-hidden inline-block px-8 py-4 mt-5 font-extrabold text-xl rounded-full group focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] shadow-lg"
            >
              <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
              <span class="absolute top-0 left-0 w-48 h-48 -mt-1  transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[#b9f2ff] opacity-100 group-hover:-translate-x-8"></span>
              <span class="relative w-full text-left  text-black transition-colors duration-200 ease-in-out group-hover:text-white">
                Buy $ABC
              </span>
              <span class="absolute inset-0 border-2 hover:border-[#b9f2ff]  rounded-full"></span>
            </a>
          </div>
        </div>

        <div class="rounded-2xl border-4 border-white bg-gradient-to-r from-orange to-rose-300  p-6 shadow-sm sm:px-8 lg:p-12">
          <div class="text-center">
            <h2 class="font-league text-3xl sm:text-4xl font-semibold tracking-tight text-[#0a0a0a] md:text-5xl xl:text-6xl">
              Gold
              <span class="sr-only">Plan</span>
            </h2>

            <p class="mt-2 sm:mt-4">
              <strong class="text-3xl font-bold text-gray-900 sm:text-4xl">
                200
              </strong>

              <span class="font-arcade  text-xl font-medium text-gray-900">
                $ABC
              </span>
            </p>
          </div>

          <ul class="mt-6 space-y-2">
            <li class="flex items-center gap-1">
              <CheckCircleIcon
                className="h-8 w-auto flex-none text-white "
                aria-hidden="true"
              />

              <span className="flex gap-x-3 text-xl text-white font-spacegrotesk font-bold lowercase">
                {" "}
                2 Free Caller Subscriptions*{" "}
              </span>
            </li>

            <li class="flex items-center gap-1">
              <CheckCircleIcon
                className="h-8 w-auto flex-none text-white "
                aria-hidden="true"
              />

              <span className="flex gap-x-3 text-xl text-white font-spacegrotesk font-bold lowercase">
                {" "}
                Earn ETH When Gaining Paid Subscribers*{" "}
              </span>
            </li>

            <li class="flex items-center gap-1">
              <CheckCircleIcon
                className="h-8 w-auto flex-none text-white "
                aria-hidden="true"
              />

              <span className="flex gap-x-3 text-xl text-white font-spacegrotesk font-bold lowercase">
                {" "}
                Gold Alpha Chat Access*{" "}
              </span>
            </li>

            <li class="flex items-center gap-1">
              <CheckCircleIcon
                className="h-8 w-auto flex-none text-white "
                aria-hidden="true"
              />

              <span className="flex gap-x-3 text-xl text-white font-spacegrotesk font-bold lowercase">
                {" "}
                Alpha Signals From Our Database*{" "}
              </span>
            </li>
          </ul>
          <div class="text-center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.uniswap.org/#/swap?outputCurrency=0xd4d4b7b55b30fb096c30ad202e746d010b47dc30&chain=ethereum"
              class="relative self-center overflow-hidden inline-block px-8 py-4 mt-5 font-extrabold text-xl rounded-full group focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] shadow-lg"
            >
              <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
              <span class="absolute top-0 left-0 w-48 h-48 -mt-1  transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[#d4af37] opacity-100 group-hover:-translate-x-8"></span>
              <span class="relative w-full text-left  text-black transition-colors duration-200 ease-in-out group-hover:text-white">
                Buy $ABC
              </span>
              <span class="absolute inset-0 border-2 hover:border-white  rounded-full"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Pricing;
