import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Wrapper from "./components/Wrapper"
import "./App.css"

function App() {
  return (
    <div className="body">
      <Navbar />
      <Wrapper>
        <div className="container">
          <Body />
        </div>
      </Wrapper>
    </div>
  )
}

export default App;
