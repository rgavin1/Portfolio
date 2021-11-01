import React from "react";

import { AboutMe, Education, Skills } from "./index";

const Container: React.FC = () => {
  return (
    <>
      <AboutMe />
      <Education />
      <Skills />
    </>
  );
};

export default Container;
