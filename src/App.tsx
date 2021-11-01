import React from "react";

import { Navbar, Sidebar } from "./components";
import { Home } from "./pages";

const App: React.FC = () => {
  return (
    <div className="flex">
      <Navbar />
      {/* React Routing Here */}
      <Home />
      <Sidebar />
    </div>
  );
};

export default App;
