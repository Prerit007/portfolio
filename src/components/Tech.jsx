import React from "react";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Skill = ({ name, icon, per }) => {
  return (
    <div className={`px-10 group flex cursor-pointer`}>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="rounded-full border border-[#B2BEB5] object-cover w-24 h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
      >
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          src={icon}
          alt={name}
          className="justify-evenly object-cover w-20 h-20"
        />
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out group-hover:bg-white w-24 h-24 z-0 rounded-full">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold text-black opacity-100">{per}</p>
        </div>
      </div>
    </div>
  );
};

const Tech = () => {
  return (
    <div className="max-w-7xl min-h-screen xl:space-y-0 mx-auto">
      <motion.div
        className={`flex-1 flex-col relative`}
        variants={textVariant()}
      >
        <h2 className={styles.sectionHeadText}>Skills.</h2>
        <p className={styles.sectionSubText}>
          Hover over a skill for current proficieny
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8 justify-center pt-12 px-5">
        {technologies.map((technology) => (
          <Skill
            key={technology.name}
            icon={technology.icon}
            per={technology.per}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
