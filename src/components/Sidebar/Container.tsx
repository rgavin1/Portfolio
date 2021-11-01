import React from "react";

import { ImageName, Card } from "./index";

const Sidebar: React.FC = () => {
  return (
    <div>
      <h1>Profile</h1>
      <ImageName />
      <Card />
    </div>
  );
};

export default Sidebar;
