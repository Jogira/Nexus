import {
  frontend,
  languages,
  backend,
  javascript,
  typescript,
  html,
  django,
  angular,
  bootstrap,
  csharp,
  python,
  sql,
  css,
  git,
  figma,
  staples,
  ppllc,
  vgdb,
  nexus,
  floodmap,
  aspvid,
} from "../assets";

import { FaGithub, FaLinkedin } from "react-icons/fa";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects"
  },
  {
    id: "contact",
    title: "Contact",
  }
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Multilingual Programmer",
    icon: languages
  },
  {
    title: "Backend Developer",
    icon: backend,
  }
];

const technologies = [
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Sql",
    icon: sql,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Tech & Sales Associate",
    company_name: "Staples",
    icon: staples,
    iconBg: "#FFFFFF",
    date: "May 2019 - Sept 2019",
    points: [
      "Demonstrated products to educate customers on the use and functionality of various technology, including computers, printers, and accessories.",
      "Assisted customers with technical inquiries, troubleshot hardware and software issues or installation, and recommended appropriate products and solutions to meet their needs.",
      "Actively contributed to the sales team by achieving monthly sales targets through upselling and cross-selling strategies, resulting in increased revenue and customer satisfaction.",
    ],
  },
  {
    title: "Full Stack Django Developer",
    company_name: "Publishing Profits LLC",
    icon: ppllc,
    iconBg: "#FFFFFF",
    date: "May 2021 - January 2023",
    points: [
      "Developed and maintained web application frontends using Python, JavaScript, and Ajax in a fast-paced, agile startup environment.",
      "Worked with PHPMyAdmin and the Django ORM for database management and optimization, ensuring efficient data storage and retrieval.",
      "Utilized Figma and Bootstrap 5 to create responsive and visually appealing user interfaces, ensuring a seamless experience across devices.",
      "Incorporated user feedback into design and the development process to fit our userbase needs.",
      "Implemented and consumed APIs to aggregate authors' revenue information from multiple vendors into a centralized platform to assist in decision making."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Zweiton VG DB",
    description:
      "Video game database created using Angular that allows users to search, filter, and view further game details from the Rawg.io API."
    ,
    tags: [
      {
        name: "angular",
        color: "pink-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
    ],
    image: vgdb,
    source_code_link: "https://github.com/Jogira/ng-video-game-db",
    live_demo_link: "https://zweiton-vg-db.netlify.app/"
  },
  {
    name: "ASP.VID",
    description:
      "A movie database built with ASP.NET MVC. Supports account creation and CRUD operations on movies stored locally."
    ,
    tags: [
      {
        name: ".NET",
        color: "orange-text-gradient",
      },
      {
        name: "databases",
        color: "yellow-text-gradient",
      },
      {
        name: "C#",
        color: "violet-text-gradient",
      },
    ],
    image: aspvid,
    source_code_link: "https://github.com/Jogira/DvD-Rental",
  },
  {
    name: "Capstone Flood Map",
    description:
      "A flood map showing which areas that are most the susceptible to flooding in Richmond, which was made with ARCgis and Jupyter."
    ,
    tags: [
      {
        name: "ARCgis",
        color: "green-text-gradient",
      },
      {
        name: "jupyter",
        color: "orange-text-gradient",
      },
      {
        name: "senior_project",
        color: "yellow-text-gradient",
      },
    ],
    image: floodmap,
    source_code_link: "https://github.com/Jogira/Richmond-Runoff",
    live_demo_link: "https://vcu.maps.arcgis.com/apps/webappviewer/index.html?id=18ec9de92d53400a9e1fbf9b49c7879b"
  },
  {
    name: "Nexus Portfolio",
    description:
      "This website! My revamped portfolio made with React and ThreeJS to display my coding skills and resume in a (hopefully) cool way."
    ,
    tags: [
      {
        name: "threeJS",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: nexus,
    source_code_link: "https://github.com/Jogira/Nexus",
  },
];

export { services, technologies, experiences, testimonials, projects };