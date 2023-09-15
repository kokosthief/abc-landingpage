import { KeyIcon, QuestionMarkCircleIcon } from "@heroicons/react/20/solid";

import { tierdiamond, tiergold } from "../assets";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

const Pricing = () => (
  <section className="px-5 sm:px-20 py-20 md:pt-20   ">
    <div className="flex flex-wrap h-fit lg:h-screen content-center">
      <div className="w-full text-center sm:text-left lg:w-4/12 pb-20 sm:pt-3">
        <h1 className=" font-league font-bold text-white text-6xl  sm:text-8xl  md:text-8xl xl:text-8xl ">
          <span className="text-[white] ">Holder Benefits</span>
        </h1>
        <p className="font-spacegrotesk  text-xl leading-7 lg:text-left  text-white  ">
          ABC is committed to maximizing token holder value through the creation
          of premium, holder-exclusive features and access to our comprehensive
          revenue sharing model.
        </p>
      </div>

      <div className="mb-md-0 mb-6 w-full lg:w-8/12 content-center">
        <div className="mx-auto max-w-5xl  sm:px-6  lg:px-8 ">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
            <Card className="w-full max-w-[26rem] h-full justify-center shadow-lg mx-auto">
              <CardHeader
                className="w-9/12 mx-auto shadow-none"
                floated={false}
                // color="blue-gray"
              >
                <img src={tiergold} alt="ui/ux review check" />
                {/* <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " /> */}
              </CardHeader>

              <CardBody>
                <div className="mb-3 flex  justify-between ">
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="font-league text-4xl font-semibold text-center mx-auto"
                  >
                    Gold Tier
                  </Typography>
                </div>

                <div className="flex items-center relative">
                  <ul className="list-disc list-inside ml-2 gap-x-2 leading-7 font-spacegrotesk font-normal text-sm sm:text-lg text-[#0a0a0a]">
                    <li className="blur">2 eerF relalC snoiSbcstup *</li>
                    <li className="blur">
                      nraE HTE nehw gnnaiG diaP serrsubipS *
                    </li>
                    <li className="blur">dloG ahplA tahC ssseccA *</li>
                    <li className="blur">ahplA sgnilaS morF ruo esabataD *</li>
                  </ul>
                  <QuestionMarkCircleIcon className="  flex z-4 opacity-30 text-[#e6b284] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-40 w-40" />
                </div>

                <Typography
                  color="blue-gray"
                  className="flex font-arcade pt-6 gap-1.5 text-2xl font-bold mx-auto justify-center gap-x-6"
                >
                  <span className=" text-pink-400">400</span>$ABC
                </Typography>
                {/* <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
              <Tooltip content="Free wifi">
                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.062 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.182a6 6 0 018.486 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.304 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 012.122 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Tooltip>
              <Tooltip content="2 bedrooms">
                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                  </svg>
                </span>
              </Tooltip>
              <Tooltip content={`65" HDTV`}>
                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M19.5 6h-15v9h15V6z" />
                    <path
                      fillRule="evenodd"
                      d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 006 21h12a.75.75 0 000-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375zm0 13.5h17.25a.375.375 0 00.375-.375V4.875a.375.375 0 00-.375-.375H3.375A.375.375 0 003 4.875v11.25c0 .207.168.375.375.375z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Tooltip>
              <Tooltip content="Fire alert">
                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Tooltip>
              <Tooltip content="And +20 more">
                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                  +20
                </span>
              </Tooltip>
            </div> */}
              </CardBody>
              <CardFooter className="-mt-6">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href=""
                  className=" w-full box-border relative z-30 my-3 inline-flex items-center justify-center px-6  overflow-hidden font-bold text-white transition-all duration-300 bg-[#EC407A] rounded-md cursor-wait group ring-offset-2 ring-1 ring-[#e65787] ring-offset-[#ffa8c5] hover:ring-offset-[#ba3e68] ease focus:outline-none"
                >
                  <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                  <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                  <span className="relative z-20 flex items-center text-sm -my-[5px]">
                    <KeyIcon
                      className="mb-4 mt-4 h-6 w-auto text-white "
                      fill="white"
                    />
                    <span className=" font-spacegrotesk px-6 font-extrabold text-lg  ">
                      COMING SOON
                    </span>
                  </span>
                </a>

                {/* <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/AlphaBotCalls"
            >
              <Button size="lg" fullWidth={true}>
                Get Access
              </Button>
            </a> */}
              </CardFooter>
            </Card>
            <Card className="w-full max-w-[26rem] shadow-lg  mx-auto">
              <CardHeader
                className="w-9/12 mx-auto shadow-none"
                floated={false}
                // color="blue-gray"
              >
                <img src={tierdiamond} alt="ui/ux review check" />
                {/* <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " /> */}
              </CardHeader>
              <CardBody>
                <div className="mb-3 flex items-center justify-between">
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="font-league text-4xl font-semibold mx-auto"
                  >
                    Diamond Tier
                  </Typography>
                </div>

                <ul className="list-disc list-inside ml-2 gap-x-2 leading-7 font-spacegrotesk font-normal text-sm sm:text-lg  text-[#0a0a0a]">
                  <li>Calls From Top Callers Forwarded</li>
                  <li>Unlimited Free Caller Subscriptions</li>
                  <li>Diamond Alpha Chat Access</li>
                  <li>Custom Filtered Call Forwarding*</li>
                  <li>Security Filtered Calls*</li>
                  <li>RevShare*</li>
                </ul>

                <Typography
                  color="blue-gray"
                  className="flex font-arcade pt-6  gap-1.5 text-2xl font-bold mx-auto justify-center gap-x-6"
                >
                  <span className=" text-pink-400">2000</span>$ABC
                </Typography>
                {/* <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
              <Tooltip content="Revenue Share">
                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                      clipRule="evenodd"
                    />
                    <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
                  </svg>
                </span>
              </Tooltip>
              <Tooltip content="Free wifi">
                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.062 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.182a6 6 0 018.486 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.304 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 012.122 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Tooltip>
              <Tooltip content="2 bedrooms">
                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                  </svg>
                </span>
              </Tooltip>
              <Tooltip content={`65" HDTV`}>
                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M19.5 6h-15v9h15V6z" />
                    <path
                      fillRule="evenodd"
                      d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 006 21h12a.75.75 0 000-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375zm0 13.5h17.25a.375.375 0 00.375-.375V4.875a.375.375 0 00-.375-.375H3.375A.375.375 0 003 4.875v11.25c0 .207.168.375.375.375z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Tooltip>
              <Tooltip content="Fire alert">
                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Tooltip>
              <Tooltip content="And +20 more">
                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                  +20
                </span>
              </Tooltip>
            </div> */}
              </CardBody>
              <CardFooter className="-mt-6">
                <a
                  href="https://telegram.me/collablandbot?start=VFBDI1RFTCNDT01NIy0xMDAxNzMzNTg0NTg0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" w-full box-border relative z-30 my-3 inline-flex items-center justify-center px-6  overflow-hidden font-bold text-white transition-all duration-300 bg-[#EC407A] rounded-md cursor-pointer group ring-offset-2 ring-1 ring-[#e65787] ring-offset-[#ffa8c5] hover:ring-offset-[#ba3e68] ease focus:outline-none"
                >
                  <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                  <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                  <span className="relative z-20 flex items-center text-sm -my-[5px]">
                    <KeyIcon
                      className="mb-4 mt-4 h-6 w-auto text-white "
                      fill="white"
                    />
                    <span className=" font-spacegrotesk px-6  font-extrabold text-lg  ">
                      GET ACCESS
                    </span>
                  </span>
                </a>

                {/* <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/AlphaBotCalls"
            >
              <Button size="lg" fullWidth={true}>
                Get Access
              </Button>
            </a> */}
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Pricing;
