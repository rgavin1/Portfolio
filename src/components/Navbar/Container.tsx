import React from "react";

import { Logo, Navigation, Contact } from "./index";

const Navbar: React.FC = () => {
  return (
    <div className="p-8 h-full flex flex-col justify-between">
      <Logo />
      <Navigation />
      <Contact />
    </div>
  );
};

export default Navbar;
