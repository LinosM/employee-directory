import React from "react";
import Navbar from "./components/Navbar/navbar";
import Search from "./components/searchbar";
import "./App.css"

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Search />
      </div>
    </div>
  )
}

export default App;
