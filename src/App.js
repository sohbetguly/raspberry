import React, { Component } from "react";
import "./App.css";
import Navbar from "./comps/Navbar";
import Footer from "./comps/footer/Footer";

import AllRoutes from "./comps/Routes/AllRoutes";

function App() {
  return (
    <div>
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}
export default App;
