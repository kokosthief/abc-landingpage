import styles from "../style";
import { mrser, zhaabbah, zen, kokos } from "../assets";
const Team = () => (
  <div class="pb-16">
    <div className="absolute z-[0] w-[60%] h-[60%]   -right-1/2 -left-1/12 rounded-full pink__gradient " />

    <div class="container flex justify-center mx-auto pt-16">
      <div>
        <p class="text-white text-5xl text-center font-bold pb-3 font-spacegrotesk">
          ABC Team
        </p>
        <h1 class=" font-notosans xl:text-4xl text-2xl text-center text-white font-normal pb-6 sm:w-4/6 w-5/6 mx-auto">
          The chads who believe in the ABC Vision and who are commited to make
          it happen
        </h1>
      </div>
    </div>
    <div class="w-full  px-10 pt-10">
      <div class="container mx-auto">
        <div class="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
          <div class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
            <div class="h-300 overflow-hidden w-6/12 shadow-md bg-white">
              <div class="flex  w-full  mt-6 justify-center">
                <div class="h-32 w-32">
                  <img
                    src={mrser}
                    alt=""
                    class="rounded-full object-cover h-full w-full shadow-lg"
                  />
                </div>
              </div>
              <div class="px-6 mt-6">
                <div class="font-bold text-3xl text-center pb-1">
                  Mr. Ser 🔤
                </div>
                <p class="text-gray-800 text-sm text-center">Visionary</p>
                {/* <p class="text-center text-gray-600 text-base pt-3 font-normal">
                  Leading the pack with his vision and determination
                </p> */}
                <div class="w-full flex justify-center pt-5 pb-5">
                  <a href="javascript:void(0)" class="mx-5">
                    <div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://telegram.me/MisterS3R"
                        className="flex justify-center items-center text-gray-600 hover:text-gray-900 hover:bg-white-100 bg-white dark:bg-[#13171d] dark:text-[#fffefe] dark:hover:text-orange dark:bg- rounded-full shadow transition duration-150 ease-in-out"
                        aria-label="Telegram"
                      >
                        <svg
                          className="w-8 h-8 fill-current"
                          viewBox="-8 -8 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                        </svg>
                      </a>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
            <div class="h-300 rounded overflow-hidden shadow-md bg-white">
              <div class="absolute -mt-20 w-full flex justify-center">
                <div class="h-32 w-32">
                  <img
                    src="https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif"
                    alt=""
                    class="rounded-full object-cover h-full w-full shadow-md"
                  />
                </div>
              </div>
              <div class="px-6 mt-16">
                <div class="font-bold text-3xl text-center pb-1">
                  Silene Tokyo
                </div>
                <p class="text-gray-800 text-sm text-center">
                  Product Design Head
                </p>
                <p class="text-center text-gray-600 text-base pt-3 font-normal">
                  The emphasis on innovation and technology in our companies has
                  resulted in a few of them establishing global benchmarks in
                  product design and development.
                </p>
                <div class="w-full flex justify-center pt-5 pb-5">
                  <a href="javascript:void(0)" class="mx-5">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-github"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </div>
                  </a>
                  <a href="javascript:void(0)" class="mx-5">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-twitter"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </div>
                  </a>
                  <a href="javascript:void(0)" class="mx-5">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-instagram"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
            <div class="h-300 rounded overflow-hidden shadow-md bg-white">
              <div class="absolute -mt-20 w-full flex justify-center">
                <div class="h-32 w-32">
                  <img
                    src="https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif"
                    alt=""
                    class="rounded-full object-cover h-full w-full shadow-md"
                  />
                </div>
              </div>
              <div class="px-6 mt-16">
                <div class="font-bold text-3xl text-center pb-1">
                  Johnson Stone
                </div>
                <p class="text-gray-800 text-sm text-center">
                  Manager Development
                </p>
                <p class="text-center text-gray-600 text-base pt-3 font-normal">
                  Our services encompass the assessment and repair of property
                  damage caused by water, fire, smoke, or mold. We can also be a
                  part of the restoration.
                </p>
                <div class="w-full flex justify-center pt-5 pb-5">
                  <a href="javascript:void(0)" class="mx-5">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-github"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </div>
                  </a>
                  <a href="javascript:void(0)" class="mx-5">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-twitter"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </div>
                  </a>
                  <a href="javascript:void(0)" class="mx-5">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-instagram"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
            <div class="rounded overflow-hidden shadow-md bg-white">
              <div class="absolute -mt-20 w-full flex justify-center">
                <div class="h-32 w-32">
                  <img
                    src="https://cdn.tuk.dev/assets/boy-smiling_23-2148155640.jpg"
                    alt=""
                    class="rounded-full object-cover h-full w-full shadow-md"
                  />
                </div>
              </div>
              <div class="px-6 mt-16">
                <div class="font-bold text-3xl text-center pb-1">
                  Dean Jones
                </div>
                <p class="text-gray-800 text-sm text-center">
                  Principal Software Engineer
                </p>
                <p class="text-center text-gray-600 text-base pt-3 font-normal">
                  An avid open-source developer who loves to be creative and
                  inventive. I have 20 years of experience in the field.
                </p>
                <div class="w-full flex justify-center pt-5 pb-5">
                  <a href="javascript:void(0)" class="mx-5">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-github"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </div>
                  </a>
                  <a href="javascript:void(0)" class="mx-5">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-twitter"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </div>
                  </a>
                  <a href="javascript:void(0)" class="mx-5">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-instagram"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
            <div class="rounded overflow-hidden shadow-md bg-white">
              <div class="absolute -mt-20 w-full flex justify-center">
                <div class="h-32 w-32">
                  <img
                    src="https://cdn.tuk.dev/assets/blond-man-happy-expression_1194-2873.jpg"
                    alt=""
                    class="rounded-full object-cover h-full w-full shadow-md"
                  />
                </div>
              </div>
              <div class="px-6 mt-16">
                <div class="font-bold text-3xl text-center pb-1">
                  Rachel Adams
                </div>
                <p class="text-gray-800 text-sm text-center">
                  Product Design Head
                </p>
                <p class="text-center text-gray-600 text-base pt-3 font-normal">
                  Product designer with interests in immersive computing and XR,
                  political ventures, and emerging technologies. Able to take
                  ideas and give them a life.
                </p>
                <div class="w-full flex justify-center pt-5 pb-5">
                  <a href="javascript:void(0)" class="mx-5">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-github"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </div>
                  </a>
                  <a href="javascript:void(0)" class="mx-5">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-twitter"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </div>
                  </a>
                  <a href="javascript:void(0)" class="mx-5">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-instagram"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
            <div class="rounded overflow-hidden shadow-md bg-white">
              <div class="absolute -mt-20 w-full flex justify-center">
                <div class="h-32 w-32">
                  <img
                    src="https://cdn.tuk.dev/assets/photo-1570211776045-af3a51026f4a.jfif"
                    alt=""
                    class="rounded-full object-cover h-full w-full shadow-md"
                  />
                </div>
              </div>
              <div class="px-6 mt-16">
                <div class="font-bold text-3xl text-center pb-1">
                  Charles Keith
                </div>
                <p class="text-gray-800 text-sm text-center">UX Designer</p>
                <p class="text-center text-gray-600 text-base pt-3 font-normal">
                  A UX designer is the voice of the customer. Our job is to look
                  beyond the business goals. We don't just experience user
                  interface but also questions it.
                </p>
                <div class="w-full flex justify-center pt-5 pb-5">
                  <a href="javascript:void(0)" class="mx-5">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-github"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </div>
                  </a>
                  <a href="javascript:void(0)" class="mx-5">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-twitter"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </div>
                  </a>
                  <a href="javascript:void(0)" class="mx-5">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-instagram"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Team;
