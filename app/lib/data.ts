import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import myPortfolio from "@/public/okm1.png";
import dashboardPageImg from "@/public/etik.png";
import movieWatchlistImg from "@/public/envanter.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Fullstack Developer",
    location: "",
    companyName: "MCBÜ Computer Research And Application Center",
    description:
      " I took an active role in the database, backend, frontend and deployment sections by designing various systems with Django. In addition, I had the opportunity to work with technologies such as Windows IIS and MsSQL. I worked on a series of projects to meet the needs of the MCBÜ Rectorate Private Secretary, the computer research and application center and the university.During this process, I gained only frontend development experience in some projects and fullstack experience in others.",
    detail: "",
    icon: React.createElement(CgWorkAlt),
    date: "10/05/2023 - 17 /05/2024",
  },
  {
    title: "Backend Intern - Python",
    location: "Manisa, Türkiye",
    companyName: "CodeCo Soft",
    description:
      "We recoded the company website we developed with Django using REST API to make it mobile application compatible. During this process,we took various actions to ensure JWT token integrations and data security. I had the opportunity to do in-depth research to maximize my Django knowledge.",
    detail: "",
    icon: React.createElement(CgWorkAlt),
    date: " 08/08/2023 - Present ",
  },
 
 
] as const;

export const projectsData = [
  {
    title: " Appointment tracking",
    description:"I developed this full stack project for Manisa Celal Bayar Universty, using django + javascript to keep the appointments of the private secretaries of the rectorate.",
    tags: [
      "Django",
      "SQL",
      "Javascript",
      "HTML",
      "CSS",
      "Bootsrap",
      
    ],
    imageUrl: myPortfolio,
    projectUrl: "https://okm.mcbu.edu.tr/ ",
  },
  {
    title: "MCBÜ Ethics committee  ",
    description:
      "I contributed to the data visualization section of the frontend of the ethics committee automation, I made the charts dynamic with API, I used different chart libraries.",
    tags: [
      "Javascript",
      ".Net MVC",
      "Boostrap",
      
    ],
    imageUrl: dashboardPageImg,
    projectUrl: "https://etik.cbu.edu.tr/",
  },
  {
    title: "Inventory tracking system",
    description:"I developed this full stack project using django to track inventories at MCBÜ computer research and application center and control assets.",
    tags: ["API", "JavaScript", "HTML", "CSS"],
    imageUrl: movieWatchlistImg,
    projectUrl: "",
  },
  
] as const;

export const skillsData = [
  "Python",
  "Django",
  "JavaScript",
  "React",
  "SQL",
  "Bootstrap",
  "Postman",
  "GitHub",
  "HTML",
  "CSS",
 
 
 
] as const;
