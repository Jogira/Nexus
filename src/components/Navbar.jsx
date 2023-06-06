import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa"; // Import the icons from react-icons

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close, pfp } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-50 ${scrolled ? "bg-primary" : "bg-transparent"
        }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className={`flex items-center gap-2 `}
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="relative">
            <span className='sm:block hidden'>
              <img
                src={pfp}
                alt='pfp'
                style={{
                  transform: scrolled ? 'scale(0.40)' : 'none',
                  transition: 'transform 0.3s ease, left 0.3s ease, top 0.3s ease',
                  left: scrolled ? '-8rem' : '-10rem',
                  top: scrolled ? '-4rem' : '-1rem',
                  width: scrolled ? 'none' : '10rem',
                  height: scrolled ? 'none' : '10rem',
                }}
                className='object-contain absolute'
              />
            </span>
            <p className='text-white text-[18px] font-bold cursor-pointer flex'>
              Jonathan&nbsp;
              <span style={{ color: '#00f090' }}>| </span> <span className='sm:block hidden'>&nbsp;Nexus</span> &nbsp;Portfolio
            </p>
          </div>

        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li className='text-secondary hover:text-[#4078c0] text-[25px] font-medium cursor-pointer'>
            <a href='https://github.com/Jogira' title="GitHub" target='_blank' rel='noopener noreferrer'>
              <FaGithub />
            </a>
          </li>

          <li className='text-secondary hover:text-[#0e76a8] text-[25px] font-medium cursor-pointer'>
            <a href='https://www.linkedin.com/in/jonathangiraud/' title="Linkedin" target='_blank' rel='noopener noreferrer'>
              <FaLinkedin />
            </a>
          </li>

          {/* Additional PDF button */}
          <li className='text-secondary hover:text-[#34ffb9] text-[25px] font-medium cursor-pointer'>
            <a href='https://github.com/Jogira/Nexus/blob/main/resume.pdf' title='Resume' target='_blank' rel='noopener noreferrer'>
              <FaFilePdf />
            </a>
          </li>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-kanit font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li className='text-secondary hover:text-white text-[16px] font-medium cursor-pointer'>
                <a href='https://github.com/Jogira' target='_blank' rel='noopener noreferrer'>
                  GitHub
                </a>
              </li>
              <li className='text-secondary hover:text-white text-[16px] font-medium cursor-pointer'>
                <a href='https://www.linkedin.com/in/jonathangiraud/' target='_blank' rel='noopener noreferrer'>
                  LinkedIn
                </a>
              </li>

              {/* Additional PDF button */}
              <li className='text-secondary hover:text-white text-[16px] font-medium cursor-pointer'>
                <a href='https://github.com/Jogira/Nexus/blob/main/resume.pdf' title='Resume' target='_blank' rel='noopener noreferrer'>
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div >
    </nav >
  );
};

export default Navbar;
