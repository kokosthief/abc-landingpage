import React, { useEffect } from "react";

import {
  Popover,
  PopoverContent,
  PopoverHandler,
  Typography,
} from "@material-tailwind/react";

const HowToUse = () => {
  const [openPopover, setOpenPopover] = React.useState(false);
  const [openPopover2, setOpenPopover2] = React.useState(false);

  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };
  const triggers2 = {
    onMouseEnter: () => setOpenPopover2(true),
    onMouseLeave: () => setOpenPopover2(false),
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "//telegram.im/widget-button/index.php?id=@alphabetcalls";
    document.getElementsByTagName("head")[0].appendChild(script);
  }, []);

  return (
    <section id="howtouse" className="h-max ">
      <div className="pt-10 pb-20 sm:pt-56 sm:pb-36 mx-auto px-5 ">
        <section className=" bg-white   rounded-3xl  md:max-w-[1300px] mx-auto">
          <div className="px-6 py-2 sm:py-12 text-left md:px-12">
            <div className="container mx-auto">
              <div className="grid items-center gap-12  sm:gap-0 lg:grid-cols-2 ">
                <div className="mt-6 lg:mt-0  ">
                  <h1 className="font-league text-center px-4 lg:text-left text-4xl sm:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-4 md:text-5xl ">
                    How to Use AlphaBot
                    <br />
                    <span className=" text-pink-400 md:text-6xl">
                      in Your Community
                    </span>
                  </h1>

                  <div className="font-spacegrotesk leading-7 font-normal text-sm sm:text-lg  text-[#0a0a0a]">
                    <ol className="list-inside list-decimal ">
                      <li className="block w-full cursor-default px-4 my-1 pb-2 focus:outline-none focus:ring-0 leading-7 font-spacegrotesk font-normal text-sm sm:text-lg  text-[#0a0a0a]">
                        1. Install AlphaBot in Telegram or Discord
                      </li>

                      <div className="flex flex-row gap-2 sm:gap-4 sm:pl-5  scale-90 sm:scale-100   ">
                        <div className="flex ">
                          <a
                            className="group relative "
                            href="https://discord.com/api/oauth2/authorize?client_id=1141380686188662884&permissions=534723951680&scope=bot"
                          >
                            <div className="flex absolute -left-3 items-center h-full">
                              <div className="h-5 scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100 w-1 transition-all duration-200 origin-left bg-white rounded-r"></div>
                            </div>

                            <div className="group-active:translate-y-px">
                              <div className="text-gray-100 group-hover:rounded-2xl group-hover:bg-[#5D65F3] group-hover:text-white bg-gray-700 rounded-3xl flex items-center justify-center w-36 h-12 transition-all duration-200 overflow-hidden shadow-lg">
                                <svg
                                  aria-hidden="false"
                                  aria-label="Discord"
                                  viewBox="0 0 28 20"
                                  className="w-7 h-5 mr-1"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M23.021 1.677A21.227 21.227 0 0017.658 0c-.252.462-.483.935-.687 1.418a19.931 19.931 0 00-5.943 0C10.82.935 10.59.462 10.337.005c-1.856.32-3.659.88-5.37 1.677C1.567 6.78.65 11.754 1.111 16.652A21.504 21.504 0 007.691 20c.532-.726 1.004-1.5 1.407-2.309a13.582 13.582 0 01-2.221-1.078c.188-.137.37-.274.547-.428a15.232 15.232 0 0013.152 0c.177.148.36.291.541.428-.707.424-1.453.787-2.22 1.078.408.808.875 1.578 1.405 2.303a21.5 21.5 0 006.58-3.347h.007c.541-5.674-.922-10.6-3.868-14.97zM9.681 13.638c-1.283 0-2.34-1.193-2.34-2.644S8.37 8.35 9.68 8.35c1.308 0 2.359 1.193 2.338 2.644 0 1.451-1.036 2.644-2.339 2.644zm8.635 0c-1.283 0-2.34-1.193-2.34-2.644s1.036-2.644 2.34-2.644c1.302 0 2.36 1.193 2.338 2.644 0 1.451-1.036 2.644-2.338 2.644z"
                                  ></path>
                                </svg>
                                <span className="align-middle ml-1 text-md font-sans">
                                  Discord
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>

                        <div className="">
                          <a
                            href="https://t.me/ABCAlphaBot?startgroup=true"
                            target="_blank"
                            className="flex flex-row  justify-center  items-center  h-12"
                            style={{
                              fontSize: "16px",
                              width: "146px",
                              background: "#27A5E7",
                              boxShadow: "1px 1px 3px #27A5E7",
                              color: "#FFFFFF",
                              borderRadius: "46px",
                              padding: "10px", // Add padding for spacing
                            }}
                            title="Telegram Button"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="45"
                              height="45"
                              viewBox="0 0 256 256"
                              className="inline-flex"
                            >
                              <defs>
                                <linearGradient
                                  id="logosTelegram0"
                                  x1="50%"
                                  x2="50%"
                                  y1="0%"
                                  y2="100%"
                                >
                                  <stop offset="0%" stopColor="#2AABEE" />
                                  <stop offset="100%" stopColor="#229ED9" />
                                </linearGradient>
                              </defs>
                              <path
                                fill="url(#logosTelegram0)"
                                d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.038 128.038 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51c0-33.934-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0Z"
                              />
                              <path
                                fill="#FFF"
                                d="M57.94 126.648c37.32-16.256 62.2-26.974 74.64-32.152c35.56-14.786 42.94-17.354 47.76-17.441c1.06-.017 3.42.245 4.96 1.49c1.28 1.05 1.64 2.47 1.82 3.467c.16.996.38 3.266.2 5.038c-1.92 20.24-10.26 69.356-14.5 92.026c-1.78 9.592-5.32 12.808-8.74 13.122c-7.44.684-13.08-4.912-20.28-9.63c-11.26-7.386-17.62-11.982-28.56-19.188c-12.64-8.328-4.44-12.906 2.76-20.386c1.88-1.958 34.64-31.748 35.26-34.45c.08-.338.16-1.598-.6-2.262c-.74-.666-1.84-.438-2.64-.258c-1.14.256-19.12 12.152-54 35.686c-5.1 3.508-9.72 5.218-13.88 5.128c-4.56-.098-13.36-2.584-19.9-4.708c-8-2.606-14.38-3.984-13.82-8.41c.28-2.304 3.46-4.662 9.52-7.072Z"
                              />
                            </svg>
                            <span className="font-sans text-md ">Telegram</span>
                          </a>
                        </div>
                        {/* <img
                              src={telegramcircle}
                              alt="CredibleCallers"
                              className="w-[25px] h-auto inline-block mr-1"
                            /> */}
                      </div>
                      <li className="block w-full cursor-default px-4 pt-5 my-1 focus:outline-none focus:ring-0 ">
                        2. Ensure AlphaBot is assigned the proper permissions in{" "}
                        <br />{" "}
                        <Popover open={openPopover} handler={setOpenPopover}>
                          <PopoverHandler {...triggers}>
                            <span className="text-pink-400  font-semibold cursor-help">
                              Telegram (admin){" "}
                            </span>
                          </PopoverHandler>
                          <PopoverContent
                            {...triggers}
                            className="z-50 max-w-[20rem] rounded-3xl border-pink-400 border-4 "
                          >
                            <div className="mb-2 flex items-center gap-3">
                              <Typography
                                as="a"
                                href="#"
                                variant="h6"
                                color="blue-gray"
                                className=" transition-colorsfont-spacegrotesk font-bold text-sm sm:text-md  text-[#0a0a0a] outline-none"
                              >
                                How to add to Telegram:
                              </Typography>
                            </div>

                            <ul className="list-disc list-inside ml-2  gap-x-2   leading-7  font-spacegrotesk font-normal text-sm sm:text-md  text-[#0a0a0a] font-normal">
                              <li>Open your Telegram group</li>
                              <li>Tap on the group name</li>
                              <li>Select "Administrators"</li>
                              <li>Tap on "Add Administrator"</li>
                              <li>Search for and select @AlphaBot</li>
                            </ul>
                          </PopoverContent>
                        </Popover>
                        or{" "}
                        <Popover open={openPopover2} handler={setOpenPopover2}>
                          <PopoverHandler {...triggers2}>
                            <span className="text-pink-400  font-semibold cursor-help">
                              Discord (roles)
                            </span>
                          </PopoverHandler>
                          <PopoverContent
                            {...triggers2}
                            className="z-50 max-w-[20rem] rounded-3xl border-pink-400 border-4 "
                          >
                            <div className="mb-2 flex items-center gap-3">
                              <Typography
                                as="a"
                                href="#"
                                variant="h6"
                                color="blue-gray"
                                className=" transition-colorsfont-spacegrotesk font-bold text-sm sm:text-md  text-[#0a0a0a] outline-none"
                              >
                                How to add to Discord:
                              </Typography>
                            </div>

                            <ul className="list-disc list-inside ml-2  gap-x-2   leading-7  font-spacegrotesk font-normal text-sm sm:text-md  text-[#0a0a0a]">
                              <li>Add AlphaBot to your server</li>
                              <li>Accept priveledges when prompted</li>
                            </ul>
                          </PopoverContent>
                        </Popover>
                      </li>

                      <li className="block w-full px-4 pt-5 ">
                        3. Perform basic functions: <br />
                      </li>
                      <div>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://t.me/ABCAlphaBot?start=0xasdhajsdhjasdasd"
                        >
                          <li className="block w-fit cursor-pointer  rounded-2xl px-4 py-2 my-1 transition duration-500 hover:bg-pink-100 hover:text-neutral-700">
                            <span className="text-pink-400 font-semibold ">
                              /call
                              <span className="font-mono font-normal">
                                {"  <contract address> "}
                              </span>
                            </span>
                            - Make a call
                          </li>
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://t.me/ABCAlphaBot?start=0xasdhajsdhjasdasd"
                        >
                          <li className=" block w-fit cursor-pointer  rounded-2xl px-4 py-2 my-1 transition duration-500 hover:bg-pink-100 hover:text-neutral-700">
                            <span className="text-pink-400  font-semibold">
                              /checkcalls
                              <span className="font-mono font-normal">
                                {" <@username> "}
                              </span>
                            </span>
                            - List current active calls
                          </li>
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://t.me/ABCAlphaBot?start=0xasdhajsdhjasdasd"
                        >
                          <li className=" block w-fit cursor-pointer  rounded-2xl px-4 py-2 my-1 transition duration-500 hover:bg-pink-100 hover:text-neutral-700">
                            <span className="text-pink-400 font-semibold ">
                              /stats
                              <span className="font-mono font-normal">
                                {" <@username> "}{" "}
                              </span>{" "}
                            </span>
                            - Check ranking & stats
                          </li>
                        </a>
                      </div>
                    </ol>
                  </div>
                </div>

                <div className="mb-12 lg:mb-0">
                  <div
                    className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg-lg"
                    style={{ paddingTop: "56.25%" }}
                  >
                    <iframe
                      className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 h-full w-full"
                      src="https://www.youtube.com/embed/c92a4rjc4rI?m"
                      allowFullScreen
                      data-gtm-yt-inspected-2340190_699="true"
                      id="240632615"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default HowToUse;
