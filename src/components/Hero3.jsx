import { lightning } from "../assets";
const Hero3 = () => {
  return (
    <section
      id="hero2"
      className="bg-[url('../../src/assets/hero3.jpeg')] bg-[24%]  md:bg-center 	bg-cover "
    >
      <div className=" h-screen relative">
        <div
          className="absolute -bottom-12 text-center underline 	md:decoration-transparent	 decoration-sky-500 decoration-8 underline-offset-8
  md:top-44 md:right-56 "
        >
          <div className="flex flex-col">
            <h1 class="font-league font-bold text-7xl md:text-8xl xl:text-7xl text-white  tracking-normal mb-12 ">
              gamifying <br />
              <span class="md:text-black leading-4">crypto calling</span>
            </h1>
            <div className="hidden md:flex flex-row">
              <img
                src={lightning}
                alt="Lightining Strike"
                className="w-[100px] h-auto mr-6 "
              />
              <div className="flex flex-col font-spacegrotesk max-w-lg  text-3xl font-bold leading-8 text-black">
                <p className="mb-4">
                  ABC bot is fun and free, while bringing transparency to
                  callers.
                </p>
                <p className="">
                  Anyone can use the bot to track their calls, receive a
                  ranking, and build their reputation as an alpha hunter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3;
