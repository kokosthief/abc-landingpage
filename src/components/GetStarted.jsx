import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="https://t.me/AlphaBotCalls"
    className=""
  >
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full  bg-orange-gradient p-[2px] cursor-cell`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] hover:bg-black-gradient rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-notosans font-bold text-[20px] leading-[28.4px]">
            <span className="text-gradient ">Call w/</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow-up"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>

        <p className="font-notosans font-bold text-[20px] leading-[28.4px]">
          <span className="text-gradient ">ABC Bot</span>
        </p>
      </div>
    </div>
  </a>
);

export default GetStarted;
