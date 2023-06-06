import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-20 h-20 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What am I</p>
        <h2 className={styles.sectionHeadText}>ABOUT?</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[19px] max-w-3xl leading-[30px]"
      >
        As a budding full stack software engineer, I've honed my programming skills primarily in{' '}
        <span className="text-[#4584b6] font-bold">Python,</span>{' '}
        <span className="text-[#9B4993] font-bold">C#,</span> and{' '}
        <span className="text-[#f7df1e] font-bold">Javascript.</span> I've also used various frameworks (<span className="text-[#29A071] font-bold">Django</span>/<span className="text-[#DE002D] font-bold">Angular</span>/<span className="text-[#4D29C8] font-bold">.NET</span>) to develop responsive, modern webapps.
        <br></br>I'm quick to learn and eager to master new technologies so I can contribute cutting-edge
        solutions that leave an <span className="italic font-bold">impact</span> on the tech world.
        <br></br>
        <br></br>
        I'm also a big fan of CRT monitors, dogs, Halloween, video games, art, and animation.
      </motion.p>

      <div className="mt-10 flex flex-wrap gap-20 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
