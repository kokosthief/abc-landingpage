import React from "react";

import { stats } from "../constants";
import styles from "../style";

import { motion } from "framer-motion";

const Stats = () => (
  <section
    className={`${styles.flexCenter} grid grid-cols-1 ss:grid-cols-2 md:grid-cols-4 sm:flex-row m-4 sm:mb-20 mb-6 md:px-4 lg:px-10 xl:max-w-screen-xl mx-auto `}
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
          <h4 className="font-league font-semibold text-4xl xs:text-5xl ss:text-5xl sm:text-6xl lg:text-7xl leading-[43.16px] text-white">
            {stat.value}
          </h4>
        </motion.div>
        <p className="font-league font-bold text-2xl xs:text-3xl ss:text-3xl sm:text-3xl lg:text-4xl leading-[31.58px] text-[#0a0a0a] ml-3 sm:ml-4 md:ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
