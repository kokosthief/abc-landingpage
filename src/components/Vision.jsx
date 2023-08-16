import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6   shadow-lg  ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card `}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue border-2 border-[#B369DB] hover:border-[#c290dd] rounded-0.1em shadow-md cursor-cell text-white`}
    >
      <img src={icon} alt="star" className=" w-[50%] h-[50%]  object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-notosans font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-notosans font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Vision = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        ABC is changing the space
        <br className="sm:block hidden" />{" "}
        <a class="underline decoration-[#B369DB]">for good</a>.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-7`}>
        Organic adoption of ABC Bot across crypto gamifies the culture of making
        calls whilst bringing credibilty and accountability for teh culture.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Vision;
