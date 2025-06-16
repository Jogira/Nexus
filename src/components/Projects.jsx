import React from 'react'
import Tilt from 'react-parallax-tilt';

import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github, viewIcon } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';


const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_demo_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl" />


          {/* Div button for the code repositories. */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>

          {/* Div button for the live demos. */}
          {live_demo_link && (
            <div className="absolute inset-0 flex justify-end mt-3 me-14 card-img_hover">
              <div
                onClick={() => window.open(live_demo_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={viewIcon}
                  alt="live site"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          )}


        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[15.6px]">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} mt-10`}>My personal</p>
        <h2 className={styles.sectionHeadText}>PROJECTS</h2>
      </motion.div >

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[19px] max-w-3xl leading-[30px]">
          These projects showcase my expertise with modern, industry-standard technologies across diverse domains.
          Each card provides a brief overview, along with links to the GitHub repositories and live demos when available.

          <br>
          </br>I selected projects that helped me get hands on practice with modern technology stacks so I could be prepared to work in more structured, professional environments.
        </motion.p>
      </div>

      <div className="mt-20 flex justify-center flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            {...project}
            index={index}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Projects, "projects")