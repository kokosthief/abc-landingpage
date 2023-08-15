import { userstats } from "../assets";
import styles, { layout } from "../style";

const CredibleCallers = () => (
  <section id="callers" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={userstats}
        alt="user stats"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Empowering Legitimate <br className="sm:block hidden" /> Crypto Callers
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Bringing credibility to crypto callers with proven track record of
        success. Hold 2000 $ABC and start trading with them.
      </p>
      {/* 
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="google_play"
          className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="google_play"
          className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
        />
      </div> */}
    </div>
  </section>
);

export default CredibleCallers;
