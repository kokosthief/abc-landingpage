import { trending } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Trending = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        ABC <br className="sm:block hidden" /> Trending
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-7`}>
        Real-time alpha insights set to replace ETHTrending soon, as ABC
        Trending offers a dynamic resource for tracking trending crypto insights
        using real organic caller data, no paid slots.
      </p>

      <Button className="mt-6" />
    </div>

    <div className={layout.sectionImg}>
      <img
        src={trending}
        alt="Trending tokens from and accountable and credible callers"
        className="w-[100%] h-[100%]"
      />
    </div>
  </section>
);

export default Trending;
