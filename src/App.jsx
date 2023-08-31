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
          <Roadmap />
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
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Features />
        <Vision />
        <CredibleCallers />
        <Trending />
        <Leaderboards />
        <Team /> */}
        {/* <Tokenomics /> */}
        <Integrations />

        {/* <CTA /> */}
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
