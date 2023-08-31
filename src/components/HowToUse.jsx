import React from "react";

const HowToUse = () => {
  return (
    <section id="howtouse" className="h-max">
      <div className=" my-24 mx-auto md:px-6">
        <section className=" bg-white mb-32  rounded-3xl">
          <div className="px-6 py-12 text-center md:px-12 lg:text-left">
            <div className="container mx-auto">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className="mt-12 lg:mt-0">
                  <h1 className="font-league text-4xl sm:text-5xl font-bold tracking-tight text-black mb-12 md:text-6xl xl:text-7xl">
                    how to use ABC bot
                    <br />
                    <span className=" text-pink-400">in your community</span>
                  </h1>
                  <p className="font-spacegrotesk font-bold  text-xl  text-black">
                    <ol className="list-inside list-decimal leading-10">
                      <li>
                        add{" "}
                        <a
                          className="text-pink-400"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://t.me/ABCAlphaBot?startgroup=true"
                        >
                          @ABCAlphaBot
                        </a>{" "}
                        to group{" "}
                      </li>
                      <li>make calls using /call command</li>
                      <li>track previous calls with /checkcalls command</li>
                      <li>engage your community</li>
                    </ol>
                  </p>
                </div>

                <div className="mb-12 lg:mb-0">
                  <div
                    className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg"
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
