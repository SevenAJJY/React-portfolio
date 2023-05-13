import { TbHome2, TbUser, TbMail } from "react-icons/tb";
import { TiFolderOpen } from "react-icons/ti";
import { BsAward } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { HiOutlineBriefcase } from "react-icons/hi";

// images
import amazonClone from "../assets/amazon-clone.png";
import mobileApp from "../assets/app-mobile.png";
import eCommerce from "../assets/eCommerce.png";
import eStore from "../assets/eStore.png";
import gestionCommande from "../assets/gestionCommande.png";
import leani from "../assets/leani.png";
import linkedInClone from "../assets/linkedin-clone.png";
import nadafa from "../assets/nadafa.png";
import port1 from "../assets/port.png";
import port2 from "../assets/port2.png";
import port3 from "../assets/portfolio2.png";
import quizApp from "../assets/quizApp.png";
import radop from "../assets/radop.png";
import shoasApp from "../assets/shoasApp.png";
import typingTestApp from "../assets/typing-test.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: TbHome2,
    url: "/",
  },
  {
    id: 2,
    name: "About",
    url: "/about",
    icon: TbUser,
  },
  {
    id: 3,
    name: "Portfolio",
    url: "/portfolio",
    icon: TiFolderOpen,
  },
  {
    id: 4,
    name: "Contact",
    url: "/contact",
    icon: TbMail,
  },
];

export const statistics = [
  {
    id: 2,
    title: "Experience",
    desc: "― 1+ Years",
    icon: BsAward,
  },
  {
    id: 1,
    title: "Completed",
    desc: "― 20 + projects",
    icon: HiOutlineBriefcase,
  },
  {
    id: 3,
    title: "Support",
    desc: "― Online 24/7",
    icon: BiSupport,
  },
];

export const skills = [
  {
    id: 1,
    name: "HTML",
    progress: "90",
  },
  {
    id: 2,
    name: "CSS",
    progress: "85",
  },
  {
    id: 3,
    name: "JavaScript",
    progress: "80",
  },
  {
    id: 4,
    name: "Bootstrap 5",
    progress: "70",
  },
  {
    id: 5,
    name: "React JS",
    progress: "60",
  },
  {
    id: 6,
    name: "RTk",
    progress: "60",
  },
  {
    id: 7,
    name: "PHP",
    progress: "90",
  },
  {
    id: 8,
    name: "JAVA",
    progress: "50",
  },
  {
    id: 9,
    name: "Python",
    progress: "50",
  },
  {
    id: 10,
    name: "MySQL",
    progress: "80",
  },
  {
    id: 11,
    name: "SQL Server",
    progress: "80",
  },
  {
    id: 12,
    name: "Github/Git",
    progress: "70",
  },
];

export const projects = [
  {
    id: 1,
    img: linkedInClone,
    category: "Web application",
    name: "LinkedIn Clone",
    languages: ["HTML", "CSS", "JavaScript", "React JS", "Redux", "Firebase"],
    desc: "― Linkedin Clone Built using React JS, Redux, Firebase & Styled-Components",
    preview: "https://linkedin-clone-2b9e2.web.app/",
    code: "https://github.com/SevenAJJY/Full-Stack-Linkedin-Clone",
  },
  {
    id: 2,
    img: port3,
    category: "Web design",
    name: "Previous portfolio",
    languages: ["HTML", "CSS", "JavaScript"],
    desc: "― This is my previous portfolio to display my work and communicate with me.",
    preview: "https://sevenajjy.github.io/Personal-site/",
    code: "https://github.com/SevenAJJY/Personal-site",
  },
  {
    id: 3,
    img: nadafa,
    category: "Web design",
    name: "Nadafa services",
    languages: ["HTML", "CSS", "JavaScript"],
    desc: "― NADAFA - Cleaning Service Website Using HTML CSS & JavaScript.",
    preview: "https://sevenajjy.github.io/nadafa/",
    code: "https://github.com/SevenAJJY/nadafa",
  },
  {
    id: 4,
    img: eStore,
    category: "Web application",
    name: "eStore",
    languages: ["HTML", "CSS", "JavaScript", "JQuery", "PHP MVC", "MySQL"],
    desc: "― The eStore is a web-based application that's purpose is to manage a products store and the daily transactions on it.",
    preview: null,
    code: "https://github.com/SevenAJJY/e-store",
  },
  {
    id: 5,
    img: eCommerce,
    category: "Web application",
    name: "eCommerce website",
    languages: ["HTML", "CSS", "JavaScript", "JQuery", "PHP", "MySQL"],
    desc: "― eCommerce website, Everything you need to start selling online today.",
    preview: null,
    code: null,
  },
  {
    id: 6,
    img: gestionCommande,
    category: "Web application",
    name: "Gestion commande",
    languages: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    desc: "― Order management software is a tool for managing customer orders, inventory, and shipments across multiple channels and marketplaces.",
    preview: null,
    code: null,
  },
  {
    id: 7,
    img: amazonClone,
    category: "Web application",
    name: "Amazon clone",
    languages: ["HTML", "CSS", "JavaScript", "React JS", "Firebase"],
    desc: "― Amazon Clone Built using React JS, Firebase",
    preview: null,
    code: null,
  },
  {
    id: 8,
    img: port1,
    category: "Web design",
    name: "Portfolio",
    languages: ["HTML", "CSS", "JavaScript", "React JS", "Firebase"],
    desc: "― This is my previous portfolio to display my work and communicate with me.",
    preview: "https://sevenajjy.github.io/simple_portfolio/",
    code: "https://github.com/SevenAJJY/simple_portfolio",
  },
  {
    id: 9,
    img: leani,
    category: "Web design",
    name: "Simple Portfolio",
    languages: ["HTML", "CSS", "javaScript"],
    desc: "― This is my previous portfolio to display my work and communicate with me.",
    preview: null,
    code: null,
  },
  {
    id: 10,
    img: port2,
    category: "Web design",
    name: "Simple Portfolio",
    languages: ["HTML", "CSS", "javaScript"],
    desc: "― This is my previous portfolio to display my work and communicate with me.",
    preview: null,
    code: null,
  },
  {
    id: 11,
    img: quizApp,
    category: "Web design",
    name: "Quiz App",
    languages: ["HTML", "CSS", "javaScript"],
    desc: "― Test your skills with SevenAJJY Quizzes. Each quiz contains 20-30 questions, you get 1 point for each correct answer, at the end of each quiz you get your total score.",
    preview: "https://sevenajjy.github.io/Quiz-App/",
    code: "https://github.com/SevenAJJY/Quiz-App",
  },
  {
    id: 12,
    img: radop,
    category: "Web application",
    name: "radop",
    languages: ["HTML", "CSS", "javaScript", "PHP", "MySQL"],
    desc: "― A site that I created for the radeec agency during my training period. It is an agency payments management website.",
    preview: null,
    code: null,
  },
  {
    id: 13,
    img: shoasApp,
    category: "Web design",
    name: "Shoas App",
    languages: ["HTML", "CSS", "javaScript"],
    desc: "― Shoas app  for basketball sneakers, running shoes, casual shoes & athletic gear from top brands like Nike, Jordan, adidas, Under Armour & more.",
    preview: null,
    code: null,
  },
  {
    id: 14,
    img: typingTestApp,
    category: "Web design",
    name: "Typing Test App",
    languages: ["HTML", "CSS", "javaScript"],
    desc: "― A simple Speed Typing Test Game for testing your typing speed. Test your typing speed, analyze your results and improve :D.",
    preview: "https://sevenajjy.github.io/Speed-Typing-Test-Game/",
    code: "https://github.com/SevenAJJY/Speed-Typing-Test-Game",
  },
  {
    id: 15,
    img: mobileApp,
    category: "Mobile application",
    name: "gestion d'employé",
    languages: ["Java", "XML", "SQLite"],
    desc: "― The best HR management apps to further automate work Data system for employees",
    preview: null,
    code: null,
  },
];
