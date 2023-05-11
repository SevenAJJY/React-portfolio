import { TbHome2, TbUser, TbMail } from "react-icons/tb";
import { TiFolderOpen } from "react-icons/ti";
import { BsAward } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { HiOutlineBriefcase } from "react-icons/hi";

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
    desc: "1+ Years",
    icon: BsAward,
  },
  {
    id: 1,
    title: "Completed",
    desc: "20 + projects",
    icon: HiOutlineBriefcase,
  },
  {
    id: 3,
    title: "Support",
    desc: "Online 24/7",
    icon: BiSupport,
  },
];
