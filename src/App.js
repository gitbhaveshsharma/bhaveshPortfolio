import React from "react";
import {Routes, Route } from "react-router-dom";
import Navbar from "./comp/nav";
import Fun from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import WebArticle from "./comp/webProj";
import DataSciArticle from "./comp/dataSciProj";
import "./App.scss";
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Fun/>} />
        <Route path="/WebArticle" element={<WebArticle/>}/>
        <Route path="/DataScienceArticle" element={<DataSciArticle/>}/>
      </Routes>
    </>
  );
};

export default App;
