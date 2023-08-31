import styles from "./style";
import {
  CredibleCallers,
  Vision,
  Trending,
  Features,
  Team,
  Integrations,
  CTA,
  Footer,
  Leaderboards,
  Tokenomics,
  Hero,
  Hero2,
  Hero3,
  AlphaHub,
  HowToUse,
  Roadmap,
} from "./components";

const App = () => (
  <div className="w-full overflow-hidden">
    <Hero />
    <div className=" ">
      <div className={` ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero2 />
        </div>
      </div>
    </div>
    <div className=" ">
      <div className={` ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero3 />
        </div>
      </div>
    </div>
    <div className="bg-hero2-gradient ">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <HowToUse />
        </div>
      </div>
    </div>
    <div className="bg-hero2-gradient ">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <AlphaHub />
        </div>
      </div>
    </div>
    <div className="bg-hero2-gradient ">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Roadmap />
        </div>
      </div>
    </div>
    <div className="bg-hero2-gradient ">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>{/* <Integrations /> */}</div>
      </div>
    </div>
    <div className="bg-hero-gradient ">
      <div className={`${styles.paddingX} ${styles.flexCenter}  `}>
        <div className={`${styles.boxWidth}`}>
          <Tokenomics />
        </div>
      </div>
    </div>
    <div
      className={`bg-gradient-to-r from-gray-700 via-gray-900 to-black ${styles.paddingX} ${styles.flexCenter}`}
    >
      <div className={`${styles.boxWidth}`}>
        {/* <Features />
        <Vision />
        <CredibleCallers />
        <Trending />
        <Leaderboards />
        <Team /> */}

        {/* <CTA /> */}
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
