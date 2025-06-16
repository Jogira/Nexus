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
        Over the past few years, I’ve grown from experimenting with personal projects to building production-ready applications for real-world use. I work primarily with{' '}
        <span className="text-[#9B4993] font-bold">C#</span>,{' '}
        <span className="text-[#4584b6] font-bold">Python</span>, and{' '}
        <span className="text-[#f7df1e] font-bold">JavaScript</span>, using frameworks like{' '}
        <span className="text-[#29A071] font-bold">Django</span>,{' '}
        <span className="text-[#4D29C8] font-bold">ASP.NET</span>, and{' '}
        <span className="text-[#DE002D] font-bold">Angular</span> to build scalable, maintainable applications.
        <br /><br />
        I enjoy translating real needs into clean, functional software, whether integrating APIs, debugging tricky edge cases, or collaborating directly with stakeholders. Outside of work, I stay curious through side projects in electrical engineering, studying Japanese, and exploring the world of animation.
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
