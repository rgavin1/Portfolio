import React from "react";
import "./App.css";

import { Navbar, Sidebar } from "./components";
import { Home } from "./pages";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Sidebar />
    </div>
  );
};

export default App;
