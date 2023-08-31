import React from "react";

import { stats } from "../constants";
import styles from "../style";

import { motion } from "framer-motion";

const Stats = () => (
  <section
    className={`${styles.flexCenter} flex-col md:flex-row  m-4 sm:mb-20 mb-6`}
  >
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`flex-1 flex items-center md:justify-center md:px-2 lg:px-4 xl:px-5 flex-row my-4 mx-auto transition duration-300 ease-in-out hover:scale-110`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h4 className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] font-league font-semibold text-6xl sm:text-6xl md:text-6xl leading-[43.16px] text-white">
            {stat.value}
          </h4>
        </motion.div>
        <p className="font-league font-bold text-4xl sm:text-5xl md:text-4xl leading-[31.58px] text-black ml-3 sm:ml-4 md:ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
