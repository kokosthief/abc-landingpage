import React from "react";

const HowToUse = () => {
  return (
    <section id="howtouse" className="h-max">
      <div className="pt-24 sm:pt-56 sm:pb-8 mx-auto ">
        <section className=" bg-white mb-32  rounded-3xl">
          <div className="px-6 py-12 text-left md:px-12">
            <div className="container mx-auto">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className="mt-12 lg:mt-0">
                  <h1 className="font-league text-center md:text-left text-4xl sm:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-12 md:text-6xl xl:text-7xl">
                    How to Use AlphaBot Bot
                    <br />
                    <span className=" text-pink-400">in Your Community</span>
                  </h1>

                  <p className="font-spacegrotesk font-bold text-md sm:text-xl  text-[#0a0a0a]">
                    <ol className="list-inside list-decimal ">
                      <a
                        className=""
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://t.me/ABCAlphaBot?startgroup=true"
                      >
                        <li className="block w-full cursor-pointer rounded-2xl px-4 py-2 my-1 transition duration-500 hover:bg-pink-100 hover:text-neutral-700 focus:bg-pink-300 focus:text-neutral-500 focus:ring-0">
                          1. Install AlphaBot in{" "}
                          <a
                            className="text-pink-400 hover:text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://t.me/ABCAlphaBot?startgroup=true"
                          >
                            Telegram
                          </a>{" "}
                          or{" "}
                          <a
                            className="text-pink-400  hover:text-white  "
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://discord.com/api/oauth2/authorize?client_id=1141380686188662884&permissions=534723951680&scope=bot"
                          >
                            Discord
                          </a>
                        </li>
                      </a>
                      <li class="block w-full cursor-default px-4 py-2 my-1  font-semibold focus:outline-none focus:ring-0">
                        2. Ensure AlphaBot is assigned proper permissions in{" "}
                        <br />
                        Telegram (admin) & Discord (roles)
                      </li>

                      <li className="block w-full  rounded-2xl px-4 py-2 my-1 ">
                        3. Perform basic functions: <br />
                      </li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://t.me/ABCAlphaBot?start=0xasdhajsdhjasdasd"
                      >
                        <li className=" block w-full cursor-pointer  rounded-2xl px-4 py-2 my-1 transition duration-500 hover:bg-pink-100 hover:text-neutral-700 focus:bg-pink-300 focus:text-neutral-500 focus:ring-0">
                          <a
                            className="text-pink-400 "
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://t.me/ABCAlphaBot?start=0xasdhajsdhjasdasd"
                          >
                            /call
                          </a>
                          {" <contract address>"} - record a call
                        </li>
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://t.me/ABCAlphaBot?start=0xasdhajsdhjasdasd"
                      >
                        <li className=" block w-full cursor-pointer  rounded-2xl px-4 py-2 my-1 transition duration-500 hover:bg-pink-100 hover:text-neutral-700 focus:bg-pink-300 focus:text-neutral-500 focus:ring-0">
                          <a
                            className="text-pink-400  "
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://t.me/ABCAlphaBot?start=0xasdhajsdhjasdasd"
                          >
                            /checkcalls
                          </a>
                          {" <@username> "} - return a list of current active
                          calls
                        </li>
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://t.me/ABCAlphaBot?start=0xasdhajsdhjasdasd"
                      >
                        <li className=" block w-full cursor-pointer  rounded-2xl px-4 py-2 my-1 transition duration-500 hover:bg-pink-100 hover:text-neutral-700 focus:bg-pink-300 focus:text-neutral-500 focus:ring-0">
                          <a
                            className="text-pink-400  "
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://t.me/ABCAlphaBot?start=0xasdhajsdhjasdasd"
                          >
                            /stats
                          </a>
                          {" <@username> "} - checks ranking and stats calls
                        </li>
                      </a>
                    </ol>
                  </p>
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
