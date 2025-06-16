import {
  frontend,
  languages,
  testing,
  gis,
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
  caci,
  timmons,
  holonet,
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
  },
  {
    title: "Automated Testing",
    icon: testing,
  },
  {
    title: "GIS Developer",
    icon: gis,
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
    title: "Full Stack Software Developer",
    company_name: "Timmons Group",
    icon: timmons,
    iconBg: "#FFFFFF",
    date: "January 2023 - Present",
    points: [
      "Collaborate directly with clients to gather requirements and plan new features that align with their goals.",
      "Manage source control with GitKraken and coordinate project workflows using Microsoft Teams and Teamwork.",
      "Develop full-stack web applications using C# (.NET 8) and JavaScript, delivering seamless frontend-to-backend solutions.",
      "Deploy and configure client websites on IIS, including web.config management and integration with Cityworks API for permit processing.",
      "Integrate ESRI ArcGIS API for interactive mapping, enabling location selection and validation within permit applications.",
      "Build and maintain secure APIs interfacing with MSSQL Server 18 databases, ensuring efficient data access and manipulation.",
      "Conduct thorough testing of new features on development branches before production deployment, maintaining system reliability.",
      "Integrate payment gateways (Authorize.NET, Stripe) to expand portal capabilities.",
      "Diagnose and resolve issues spanning frontend JavaScript, backend C#, and database layers to ensure smooth operation."
    ],
  },
  {
    title: "Junior .NET Developer",
    company_name: "CACI International",
    icon: caci,
    iconBg: "#FFFFFF",
    date: "January 2023 - August 2023",
    points: [
      "Contributed to DoD Comptroller financial systems by developing and maintaining full-stack C#/.NET applications.",
      "Collaborated within Agile teams utilizing Azure DevOps and Atlassian tools for sprint planning, version control, and CI/CD.",
      "Designed and maintained automated testing workflows with Postman, UI Path Bots, and GitLab Copilot to reduce manual QA effort and identify regressions early.",
      "Implemented RESTful and GraphQL APIs for seamless frontend-backend communication.",
      "Produced clear documentation and maintainable code to facilitate long-term system stability and easier onboarding."
    ],
  },
  {
    title: "Full Stack Django Developer",
    company_name: "Publishing Profits LLC",
    icon: ppllc,
    iconBg: "#FFFFFF",
    date: "May 2021 - January 2023",
    points: [
      "Developed and maintained web application frontends using Python, JavaScript, and AJAX within an agile startup environment.",
      "Managed database schema and optimized queries using Django ORM and PHPMyAdmin.",
      "Designed responsive user interfaces with Figma and Bootstrap 5 to ensure seamless multi-device user experiences.",
      "Incorporated user feedback into design iterations to better meet user needs.",
      "Implemented and integrated APIs aggregating revenue data from multiple vendors into a centralized platform to aid decision-making."
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
    name: "Holonet",
    description:
      ".NET + Angular ecommerce site with account creation, Stripe API integration, and form validation. Custom APIs & DTOs included."
    ,
    tags: [
      {
        name: ".NET",
        color: "yellow-text-gradient",
      },
      {
        name: "APIs",
        color: "green-text-gradient",
      },
      {
        name: "angular",
        color: "pink-text-gradient",
      },
    ],
    image: holonet,
    source_code_link: "https://github.com/Jogira/holonet",
    // live_demo_link: "http://68.183.124.176/"
  },
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
        name: "APIs",
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