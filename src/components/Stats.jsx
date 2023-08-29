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
        className={`flex-1 flex items-center md:justify-center flex-row my-4 mx-auto transition duration-300 ease-in-out hover:scale-110`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h4 className="font-league font-semibold  text-[50.89px] leading-[43.16px] text-white">
            {stat.value}
          </h4>
        </motion.div>
        <p className="font-league font-bold  text-[38.45px] leading-[31.58px] text-black ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
