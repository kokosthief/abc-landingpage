import { integrations } from "../constants";
import styles from "../pages/HomePage/HomePage.style";

const Integrations = () => (
  <section className={`${styles.flexCenter} my-4 `}>
    <div className={`${styles.flexCenter} hidden sm:flex flex-wrap w-full `}>
      {integrations.map((integration) => (
        <div
          key={integration.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-20`}
        >
          <img
            src={integration.logo}
            alt="integration_logo"
            className="sm:w-[192px] w-[100px] object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Integrations;
