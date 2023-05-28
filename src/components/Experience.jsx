import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { tesla, docker } from "../assets";
import { experiences } from "../constants";
const ExperienceCard = ({ experience }) => {
  return (
    <article className="flex flex-col rounded-lg items-center flex-shrink-0 w-[400px] md:w-[400px] xl:w-[550px] snap-center bg-tertiary p-6 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-20 h-20 rounded-full md:rounded-full xl:w-24 xl:h-24 object-cover object-center"
        src={experience.icon}
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl pt-2 font-light">{experience.title}</h4>
        <p className="text-2xl pt-2 font-bold mt-1">
          {experience.company_name}
        </p>
        <div className="flex space-x-2 my-2">
          {experience.tech.map((tech, index) => (
            <img
              className="h-10 w-10 rounded-full"
              key={`experience-tect-${index}`}
              src={tech}
              alt=""
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">{experience.date}</p>

        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

const Experience = () => {
  return (
    <div
      className={` min-h-screen relative flex-1 overflow-hidden flex-col text-left xl:flex-row max-w-7xl md:flex-row mx-auto`}
    >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Experience.</h2>
      </motion.div>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-violet-400/75">
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
