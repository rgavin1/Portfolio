import React from "react";

import { Logo, Navigation, Contact } from "./index";

const Navbar: React.FC = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <Contact />
    </div>
  );
};

export default Navbar;
