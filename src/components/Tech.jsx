import React from 'react'
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center ">
      <BallCanvas technologies={technologies} />
    </div>
  );
};

export default SectionWrapper(Tech, "")