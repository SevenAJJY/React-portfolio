import { TbHome2, TbUser, TbMail } from "react-icons/tb";
import { TiFolderOpen } from "react-icons/ti";

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
