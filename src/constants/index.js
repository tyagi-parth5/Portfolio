import {

  creator,
  web,
  javascript,
  ai,
  html,
  css,
  reactjs,
datas,
 codeedu,
  cpp,
  canva,
  python,
  sql,
sirius,
  tailwind,
  nodejs,
  mongodb,

   samsung,
  pneumoScan,
  dyscalcSupport,
  codSick,

  tiLogo,
  npsLogo,
  spsLogo,
 techTag,
} from "../assets";



export const navLinks = [
  {
    title: "Resume",
    url: "https://drive.google.com/file/d/1Y93Z0rCCJoOAzYXqn3yol9gu3jltEyNm/view?usp=sharing",
  },
  {
    id: "about",
    title: "About",
  },
   {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
    {
    id: "certificates",
    title: "Certificate",
  },
  {
    id: "contact",
    title: "Contact",
  },
];


export const education = [
  {
    date: "September 2022 – Present",
    institution: "Thapar Institute of Engineering and Technology, Patiala",
    degree: "Bachelor of Computer Science Engineering | CGPA: 8.87",
    icon: tiLogo,
    iconBg: "#383E56",
    details: [
      "Related Coursework: ",
      "Data Structures & Algorithms, Operating Systems, Software Engineering",
      "Computer Networks, DBMS, and Cloud Computing",
    ],
  },
  {
    date: "April 2021 – March 2022",
    institution: "National Public School, Yamuna Nagar",
    degree: "10+2 | Percentage: 92.4%",
    icon: npsLogo,
    iconBg: "#E6DEDD",
    details: [],
  },
  {
    date: "April 2019 – March 2020",
    institution: "Springfields Public School, Yamuna Nagar",
    degree: "10th | Percentage: 94.2%",
    icon: spsLogo,
    iconBg: "#383E56",
    details: [],
  },
];

export const certificates = [
  {
    title: "Certificate of Completion",
    issuer: "Samsung Research",
    date: "May 2025",
    icon: samsung,
    link: "https://drive.google.com/file/d/1uO5CMYwRaIZGTWZEU7BEL2l4DmkbaSl1/view?usp=sharing",
  },
  {
    title: "TIET Merit-based Scholarship",
    issuer: "Thapar Institute of Engineering & Technology",
    date: "Dec 2024",
    icon: tiLogo,
    link: "https://drive.google.com/file/d/1J54y-0q3umdCOC77Ekx8hLkdSRKBioPB/view?usp=sharing",
  },
  {
    title: "Certificate of Exellence",
    issuer: "Samsung Research",
    date: "August 2024",
    icon: samsung,
    link: "https://drive.google.com/file/d/1MXoBNt9Q2I8Uvg8WIq4sHhl_BhmsCmgU/view?usp=sharing",
  },
  {
    title: "2ⁿᵈ Best Project @ SummerHacks'24",
    issuer: "CodeEdu",
    date: "August 2024",
    icon: codeedu,
    link: "https://drive.google.com/file/d/1qNMtu9SFN5spTALq2IccSEsL58AV651_/view?usp=sharing",
  },
];


const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "AI/ML",
    icon: ai,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
   {
    title: "Data Science",
    icon: datas,
  },
];

const technologies = [
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
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "Canva",
    icon: canva,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "C++",
    icon: cpp,
  },
];

const experiences = [
   {
    title: "AI & Data Analyst Intern ",
    company_name: "Sirius AI @ Gurugram",
    icon: sirius,
    iconBg: "#383E56",
    date: "June 2025 - July 2025",
    points: [
      "This internship is a valuable opportunity to dive into real-world applications of artificial intelligence, work hands-on with impactful data, and learn from an inspiring team of innovators.",
    ],
  },
    {
    title: "Speech-to-Text Captioning Intern",
    company_name: "Samsung R&D Institute @ Banglore",
    icon: samsung,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Apr 2025",
    points: [
      "Worked on automated speech-to-text captioning for video with effects and improving the overall user experience .",
    ],
  },
  {
    title: "Research & Project Intern",
    company_name: "Samsung R&D Institute @ Banglore",
    icon: samsung,
    iconBg: "#383E56",
    date: "Jan 2024 - June 2024",
    points: [
      "Designed and implemented GenAI-based Autogen solutions to support custom Matter features in SmartThings PLatform.",
    ],
  },
 
];
const projects = [
  {
    name: "CodSick ",
    description:
      "For Conquering Technical Hurdles Design and development of a modern responsive and interactive web portal using HTML, CSS, and JavaScript.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: codSick,
    source_code_link: "https://cod-sick-conquering-technical-hurdles.vercel.app/",
  },

  {
    name: "PneumoScan",
    description:
      "Deep Learning-powered GUI to detect pneumonia using VGG16 CNN, with Grad-CAM heatmaps, TTS alerts, and PDF reports.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "pyqt5",
        color: "pink-text-gradient",
      },
    ],
    image: pneumoScan,
    source_code_link: "https://github.com/tyagi-parth5/ML_Proj",
  },

  {
    name: "DyscalcSupport",
    description:
      "Inclusive platform for students with dyscalculia built using MERN stack, inspired by 'Taare Zameen Par'.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: dyscalcSupport,
    source_code_link: "https://devpost.com/software/dyscalcsupport-dyscalculia-unraveled-azmpj1",
  },

  {
    name: "TechTag",
    description:
      "Smart card-based solution for seamless bus transport booking, reducing wait times and improving public transit efficiency.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: techTag,
    source_code_link: "https://tech-tag.vercel.app/",
  },
];



export { services, technologies, experiences, projects };
