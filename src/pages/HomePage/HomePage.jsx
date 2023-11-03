import {
  CTA,
  Footer,
  Hero,
  Hero2,
  Hero3,
  HolderBenefits,
  HowToUse,
  Integrations,
  Roadmap,
  Tokenomics,
  OTSea,
} from "../../components";
import styles from "./HomePage.style";

export const HomePage = () => {
  return (
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
        <OTSea />
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
};
