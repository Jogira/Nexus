import React from 'react'
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';


const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center ">
      <p className={styles.sectionSubText}>My tech stack</p>
      <BallCanvas technologies={technologies} />
    </div>
  );
};

export default SectionWrapper(Tech, "")