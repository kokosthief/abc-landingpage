import { logo } from "../assets";
import "../index.css";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BellIcon,
  ChevronDownIcon,
  CursorArrowRaysIcon,
  ChartBarSquareIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";

const solutions = [
  {
    name: "ABC Leaderboards",
    description: "List of top tokens called in the last 24 hours.",
    href: "https://telegram.me/ABCLeaderboards",
    icon: ChartBarSquareIcon,
  },
  {
    name: "ABC Subscriptions",
    description: "Subscribe to callers directly",
    href: "https://telegram.me/ABCSubscriptionsBot",
    icon: BellIcon,
  },
  {
    name: "ABC Alpha Hub",
    description: "Hold $2000 $ABC to gain access",
    href: "https://telegram.me/alphaBotCalls",
    icon: UserGroupIcon,
  },
];
const callsToAction = [
  // {
  //   name: "Watch demo",
  //   href: "https://www.youtube.com/watch?v=c92a4rjc4rI",
  //   icon: PlayCircleIcon,
  // },
  {
    name: "Make your first call",
    href: "https://telegram.me/ABCAlphaBot",
    icon: CursorArrowRaysIcon,
  },
];

export default function Navbar() {
  return (
    <nav className="xl:max-w-screen-xl md:px-14  mx-auto md:mx-0 flex flex-row py-0  sm:py-3 justify-center md:justify-start items-center scale-[85%] sm:scale-100 ">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://t.me/AlphaBotCalls"
        className=""
      >
        <img
          src={logo}
          alt="AlphaBotCalls"
          className="relative w-[100px] h-[auto] p-2"
        />
      </a>
      <h1 className="  xs:inline-flex text-sm xs:text-md sm:text-lg md:text-xl  font-arcade text-white mr-4">
        ALPHA BOT CALLS
      </h1>

      {/* <Popover className="">
        <Popover.Button className="hidden  xs:inline-flex items-center gap-x-1 text-sm xs:text-md sm:text-lg md:text-xl font-bold font-arcade text-white leading-6 focus:ring-0 ">
          <h1>ALPHA BOT CALLS</h1>
          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute left-1/2 md:left-1/3 lg:left-1/4 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
            <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ">
              <div className="p-4">
                {solutions.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                  >
                    <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        className="h-6 w-6 text-gray-600 group-hover:text-[#FF643F]"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.href}
                        className="font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon
                      className="h-5 w-5 flex-none text-gray-400"
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover> */}
    </nav>
  );
}
