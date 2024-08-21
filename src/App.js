import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./comp/nav";
import Fun from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import WebArticle from "./comp/webProj";
import DataSciArticle from "./comp/dataSciProj";
import Loader from "./comp/loading";
import ScrollToTop from "./comp/ScrollToTop";
import "./App.scss";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5050);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <ScrollToTop /> {/* Ensures the page scrolls to top on navigation */}
          <Routes>
            <Route exact path="/" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/play" element={<Fun />} />
            <Route path="/WebArticle" element={<WebArticle />} />
            <Route path="/DataScienceArticle" element={<DataSciArticle />} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;
