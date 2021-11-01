import React from "react";

import { ImageName, Card } from "./index";

const Sidebar: React.FC = () => {
  return (
    <>
      <h1>Profile</h1>
      <ImageName />
      <Card />
    </>
  );
};

export default Sidebar;
