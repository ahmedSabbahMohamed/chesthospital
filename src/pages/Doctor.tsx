import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../components/ui/Logo";
import Logout from "../components/ui/Logout";

const Doctor: React.FC = () => {
  return (
    <div>
      <div className="navbar bg-base-100 container mx-auto">
        <div className="flex-1">
          <Logo />
        </div>
        <div className="flex-none">
          <Logout />
        </div>
      </div>
      <div className="w-full min-h-screen bg-blue-50 flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default Doctor;
