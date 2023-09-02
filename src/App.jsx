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
    <Hero2 />
    <Hero3 />

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
    <div className={`bg-[#0a0a0a] ${styles.paddingX} ${styles.flexCenter}`}>
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
