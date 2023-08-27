import { Card } from "flowbite-react";

const Tokenomics = () => (
  <div class="pb-16">
    <div className="absolute z-[0] w-[60%] h-[60%]   -right-1/2 -left-1/12 rounded-full pink__gradient " />

    <div class="container flex justify-center mx-auto pt-16">
      <div>
        <p class="text-white text-5xl text-center font-bold pb-3 font-spacegrotesk">
          Transparent Tokenomics
        </p>
        <h1 class=" font-notosans xl:text-4xl text-2xl text-center text-white font-normal pb-6 sm:w-4/6 w-5/6 mx-auto">
          More info...
        </h1>
      </div>
    </div>
    <Card>
      <div className="mb-4 flex items-center justify-between">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Latest Customers
        </h5>
        <a
          className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500"
          href="#"
        >
          <p>View all</p>
        </a>
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                <No
                  Display
                  Name
                  alt="Neil image"
                  className="rounded-full"
                  height="32"
                  src="/images/people/profile-picture-1.jpg"
                  width="32"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                  Neil Sims
                </p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                  email@windster.com
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $320
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                <No
                  Display
                  Name
                  alt="Bonnie image"
                  className="rounded-full"
                  height="32"
                  src="/images/people/profile-picture-3.jpg"
                  width="32"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                  email@windster.com
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $3467
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                <No
                  Display
                  Name
                  alt="Michael image"
                  className="rounded-full"
                  height="32"
                  src="/images/people/profile-picture-2.jpg"
                  width="32"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                  Michael Gough
                </p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                  email@windster.com
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $67
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                <No
                  Display
                  Name
                  alt="Lana image"
                  className="rounded-full"
                  height="32"
                  src="/images/people/profile-picture-4.jpg"
                  width="32"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                  Lana Byrd
                </p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                  email@windster.com
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $367
              </div>
            </div>
          </li>
          <li className="pb-0 pt-3 sm:pt-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                <No
                  Display
                  Name
                  alt="Thomas image"
                  className="rounded-full"
                  height="32"
                  src="/images/people/profile-picture-5.jpg"
                  width="32"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                  Thomes Lean
                </p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                  email@windster.com
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $2367
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Card>
  </div>
);

export default Tokenomics;
