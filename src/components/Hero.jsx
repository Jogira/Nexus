import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);

  const play = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setCurrentTime(audioRef.current.currentTime);
    } else {
      const audio = new Audio('https://github.com/Jogira/Nexus/blob/main/src/assets/highFashion.mp3?raw=true');
      audio.currentTime = currentTime;
      audio.loop = true; // Enable looping
      audio.addEventListener('ended', () => {
        audio.currentTime = 0; // Restart playback from the beginning
        audio.play();
      });
      audioRef.current = audio;
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div onClick={play} className="w-5 h-5 rounded-full bg-[#00ff91] z-10" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="z-40">
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#00ff91]">Jonathan</span>,</h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`} style={{ zIndex: 100 }}>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              a full-stack developer with a focus on C# and ASP.NET, building scalable web applications that solve real-world problems. Whether integrating complex APIs or designing intuitive UIs, I care about writing clean, maintainable code. When I'm not coding, you'll usually find me spending time with my dog or learning something new.
            </p>

          </p>
        </div>

      </div>
      <span className='lg:hidden'>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </span>
      <ComputersCanvas></ComputersCanvas>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          {/* <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div> */}
        </a>
      </div>
    </section>
  );
};

export default Hero;
