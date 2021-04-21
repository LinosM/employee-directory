import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import "./App.css"

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Body />
      </div>
    </div>
  )
}

export default App;
