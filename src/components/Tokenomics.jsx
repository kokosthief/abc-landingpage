import { Chart, initTE } from "tw-elements";
initTE({ Chart });

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
    <div class="mx-auto w-3/5 overflow-hidden">
      <canvas
        data-te-chart="doughnut"
        data-te-dataset-label="Traffic"
        data-te-labels="['Monday', 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday ']"
        data-te-dataset-data="[2112, 2343, 2545, 3423, 2365, 1985, 987]"
        data-te-dataset-background-color="['rgba(63, 81, 181, 0.5)', 'rgba(77, 182, 172, 0.5)', 'rgba(66, 133, 244, 0.5)', 'rgba(156, 39, 176, 0.5)', 'rgba(233, 30, 99, 0.5)', 'rgba(66, 73, 244, 0.4)', 'rgba(66, 133, 244, 0.2)']"
      ></canvas>
    </div>
  </div>
);

export default Tokenomics;
