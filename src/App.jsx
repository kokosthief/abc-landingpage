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
  Navbar,
  Stats,
  Leaderboards,
  Tokenomics,
  Hero,
} from "./components";

const App = () => (
  <div className="w-full overflow-hidden">
    <div className="bg-hero1-gradient ">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      {/* <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
        </div>
      </div> */}
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Features /> */}
        {/* <Vision /> */}
        {/* <CredibleCallers /> */}
        {/* <Trending /> */}
        {/* <Leaderboards /> */}
        {/* <Team /> */}
        {/* <Integrations /> */}
        {/* <Tokenomics /> */}
        {/* <CTA /> */}
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
