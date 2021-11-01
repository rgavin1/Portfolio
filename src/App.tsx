import React from "react";

import { Navbar, Sidebar } from "./components";
import { Home } from "./pages";

const App: React.FC = () => {
  return (
    <div className="grid grid-cols-12" style={{ height: "inherit" }}>
      <div className="col-span-12 md:col-span-2">
        <Navbar />
      </div>

      <div className="col-span-7">
        {/* React Routing Here */}
        <Home />
      </div>

      <div className="col-span-12 md:col-span-3">
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
