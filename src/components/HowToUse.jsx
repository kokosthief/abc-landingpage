import React, { useEffect } from "react";

const HowToUse = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "//telegram.im/widget-button/index.php?id=@alphabetcalls";
    document.getElementsByTagName("head")[0].appendChild(script);
  }, []);

  return (
    <section id="howtouse" className="h-max bg-hero2-gradient">
      <div className="pt-10 pb-20 sm:pt-56 sm:pb-36 mx-auto px-5 ">
        <section className=" bg-white   rounded-3xl  md:max-w-[1300px] mx-auto">
          <div className="px-6 py-2 sm:py-12 text-left md:px-12">
            <div className="container mx-auto">
              <div className="grid items-center gap-12 lg:grid-cols-2 ">
                <div className="mt-6 lg:mt-0 ">
                  <h1 className="font-league text-center  lg:text-left text-4xl sm:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-4 md:text-5xl ">
                    How to Use AlphaBot
                    <br />
                    <span className=" text-pink-400 md:text-6xl">
                      in Your Community
                    </span>
                  </h1>

                  <p className="font-spacegrotesk font-normal text-sm sm:text-lg  text-[#0a0a0a]">
                    <ol className="list-inside list-decimal ">
                      <li class="block w-full cursor-default px-4 my-1  font-semibold focus:outline-none focus:ring-0">
                        1. Install AlphaBot in Telegram or Discord
                      </li>
                      <div className=" inline-flex gap-5 ml-5">
                        <a
                          class="group relative inline-block"
                          href="https://discord.com/api/oauth2/authorize?client_id=1141380686188662884&permissions=534723951680&scope=bot"
                        >
                          <div class="flex absolute -left-3 items-center h-full">
                            <div class="h-5 scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100 w-1 transition-all duration-200 origin-left bg-white rounded-r"></div>
                          </div>
                          <div class="group-active:translate-y-px">
                            <div class="text-gray-100 group-hover:rounded-2xl group-hover:bg-[#5D65F3] group-hover:text-white bg-gray-700 rounded-3xl flex items-center justify-center w-12 h-12 transition-all duration-200 overflow-hidden">
                              <svg
                                aria-hidden="false"
                                aria-label="Discord"
                                viewBox="0 0 28 20"
                                class="w-7 h-5"
                              >
                                <path
                                  fill="currentColor"
                                  d="M23.021 1.677A21.227 21.227 0 0017.658 0c-.252.462-.483.935-.687 1.418a19.931 19.931 0 00-5.943 0C10.82.935 10.59.462 10.337.005c-1.856.32-3.659.88-5.37 1.677C1.567 6.78.65 11.754 1.111 16.652A21.504 21.504 0 007.691 20c.532-.726 1.004-1.5 1.407-2.309a13.582 13.582 0 01-2.221-1.078c.188-.137.37-.274.547-.428a15.232 15.232 0 0013.152 0c.177.148.36.291.541.428-.707.424-1.453.787-2.22 1.078.408.808.875 1.578 1.405 2.303a21.5 21.5 0 006.58-3.347h.007c.541-5.674-.922-10.6-3.868-14.97zM9.681 13.638c-1.283 0-2.34-1.193-2.34-2.644S8.37 8.35 9.68 8.35c1.308 0 2.359 1.193 2.338 2.644 0 1.451-1.036 2.644-2.339 2.644zm8.635 0c-1.283 0-2.34-1.193-2.34-2.644s1.036-2.644 2.34-2.644c1.302 0 2.36 1.193 2.338 2.644 0 1.451-1.036 2.644-2.338 2.644z"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </a>
                        <a
                          href="https://t.me/ABCAlphaBot?startgroup=true"
                          target="_blank"
                          className="telegramim_button -ml-2"
                          style={{
                            fontSize: "16px",
                            width: "116px",
                            background: "#27A5E7",
                            boxShadow: "1px 1px 3px #27A5E7",
                            color: "#FFFFFF",
                            borderRadius: "46px",
                          }}
                          title="Telegram Button"
                        >
                          <i></i> Telegram
                        </a>
                      </div>
                      <li class="block w-full cursor-default px-4 py-2 my-1  font-semibold focus:outline-none focus:ring-0">
                        2. Ensure AlphaBot is assigned proper permissions in{" "}
                        <br />
                        Telegram (admin) & Discord (roles)
                      </li>

                      <li class="block w-full cursor-default px-4 py-2 my-1  font-semibold focus:outline-none focus:ring-0">
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
