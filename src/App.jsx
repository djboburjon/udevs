import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Direction from "./components/Direction";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
