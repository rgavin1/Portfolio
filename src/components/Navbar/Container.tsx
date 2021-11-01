import React from "react";

import { Logo, Navigation, Contact } from "./index";

const Navbar: React.FC = () => {
  return (
    <>
      <Logo />
      <Navigation />
      <Contact />
    </>
  );
};

export default Navbar;
