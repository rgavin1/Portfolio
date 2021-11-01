import React from "react";
import { FaHome } from "react-icons/fa";

const links = [
  { name: "A", icon: FaHome },
  { name: "B", icon: FaHome },
  { name: "C", icon: FaHome },
  { name: "D", icon: FaHome },
];

const Navigation: React.FC = () => {
  return (
    <ul>
      {links.map((x) => {
        return (
          <li className="flex">
            {x.name}
            <FaHome />
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
