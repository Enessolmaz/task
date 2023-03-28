import { FaTasks } from "react-icons/fa";
import { AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import { MdDisplaySettings } from "react-icons/md";

const menuItems = [
  {
    name: "Home",
    logo: <AiOutlineHome size={18} />,
    url: "/",
  },
  {
    name: "Tasks",
    logo: <FaTasks size={18} />,
    url: "/tasks",
  },
  {
    name: "Projects",
    logo: <AiOutlineProject size={18} />,
    url: "/projects",
  },
  {
    name: "Settings",
    logo: <MdDisplaySettings size={18} />,
    url: "/settings",
  },
];

export default menuItems;
