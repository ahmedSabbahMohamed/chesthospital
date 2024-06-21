import React from "react";
import { Sidebar } from "../features/dashboard";
import { Link } from "react-router-dom";
import { radiologistNavLinks } from "../data/navigationData";

const RadiologistAdmin: React.FC = () => {
  return (
    <Sidebar
      dir="ltr"
      place="mr-auto"
      sidebarContent={radiologistNavLinks.map((link) => (
        <li key={link.id}>
          <Link to={link.href} className="text-lg font-bold text-primary">
            {link.text}
          </Link>
        </li>
      ))}
    />
  );
};

export default RadiologistAdmin;
