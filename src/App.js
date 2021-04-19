import React from "react";
import Navbar from "./components/Navbar/navbar";
import Search from "./components/searchbar";
import Body from "./components/Body/body";
import "./App.css"

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Search />
        <Body />
      </div>
    </div>
  )
}

export default App;
