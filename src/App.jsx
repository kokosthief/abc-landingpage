import styles from "./style";
import {
  Footer,
  Tokenomics,
  Hero,
  Hero2,
  Hero3,
  CTA,
  HowToUse,
  Roadmap,
  HolderBenefits,
  Integrations,
} from "./components";

const App = () => (
  <div className="w-full overflow-hidden">
    <Hero />
    <Hero2 />
    <Hero3 />
    <CTA />
    <div className="bg-hero1-gradient">
      <HolderBenefits />
      <Integrations />
      <HowToUse />
      <Roadmap />
      <Tokenomics />
    </div>

    <div className="bg-[#0a0a0a]  ">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>
          <Footer />
        </div>
      </div>
    </div>
  </div>
);

export default App;
