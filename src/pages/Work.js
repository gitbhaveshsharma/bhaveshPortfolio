/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../comp/nav";
import Footer from "../comp/footer";
import gitHubSvg from "../assets/icons8-github.svg"
import leftImage from "../assets/Data Science.png"
import timeSeries from "../assets/Time series.png"
import ds from "../assets/DS.png"
import deepL from "../assets/NPL.png"
import rightImage from "../assets/React.png"
import Slider from "../comp/slider";
import "../style/Work.scss";




const Work = () => {
  return (
    <>
      <div className="flex-Work">
        <Navbar />
        <div className="flex-work-content">
          <div>
            <h1 className="work-title">
              Hi. I'm Bhavesh.
              <br />
              AI Developer.
            </h1>
            <p>
              As a Data Science and MERN (MongoDB, Express, React, Node.js)
              developer, <br />
              my enthusiasm lies in crafting engaging, practical, and
              user-focused interfaces.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-strap">
        <div className="flex-strap-box">
          <div className=" card flex-strap-box1">
            <div>
              {" "}
              <span className="spotifySvg">
                <img src={gitHubSvg} alt="spotify" />
              </span>
            </div>
            <div>
              <p
                style={{
                  fontWeight: 400,
                }}
              >
                GitHub
              </p>
              <p
                style={{
                  fontWeight: 700,
                }}
              >
                Bhavesh Sharma
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* one section */}
      <div className="flex-container">
        <div className="flex-item">
          <div className="left-flex-box">
            <Link to="/DataScienceArticle">
              <div className="left-info">
                <p style={{ color: "#364442" }}>Trian Model</p>
                <h2 style={{ color: "#364442" }}>Data Science</h2>{" "}
              </div>
            </Link>
            <div className="inner">
              <div className="image-holder docs">
                <Slider>
                  <img
                    src={ds}
                    alt="AI"
                    loading="lazy"
                    style={{ width: "fit-conten" }}
                  />
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-item ">
          <div className="right-flex-box">
            <Link to="/WebArticle">
              <div className="right-info">
                <p style={{ color: "#364442" }}>Website Made</p>
                <h2 style={{ color: "#364442" }}>MERN Developer</h2>{" "}
              </div>
            </Link>
            <div className="inner">
              <div className="image-holder docs">
                <Slider>
                  <img
                    src={rightImage}
                    alt="AI"
                    loading="lazy"
                    style={{ width: "fit-conten" }}
                  />
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* two section */}
      <div className="flex-container two-section">
        <div className="flex-item">
          <div className="left-flex-box" style={{ background: "#bddff9" }}>
            <Link to="/DataScienceArticle">
              <div className="left-info">
                <p style={{ color: "#364442" }}>Trian Model</p>
                <h2 style={{ color: "#364442" }}>Classification</h2>{" "}
              </div>
            </Link>
            <div className="inner">
              <div className="image-holder docs">
                <Slider>
                  <img
                    src={deepL}
                    alt="AI"
                    loading="lazy"
                    style={{ maxWidth: "350px" }}
                  />
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-item">
          <div className="right-flex-box" style={{ background: "#e8b89c" }}>
            <Link to="/DataScienceArticle">
            <div className="right-info">
              <p style={{ color: "#364442" }}>Trian Model</p>
              <h2 style={{ color: "#364442" }}>Predictor</h2>{" "}
            </div>
            </Link>

            <div className="inner">
              <div className="image-holder docs">
                <Slider>
                  <img
                    src={timeSeries}
                    alt="AI"
                    loading="lazy"
                    style={{ width: "fit-conten" }}
                  />
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Progress-title">
        <h1>In Progress</h1>
        <p>
          Work in various states of design and development, from side projects,
          <br />
          to in-flight product design and development.
        </p>
      </div>
      {/* three section */}
      <div className="flex-container three-section">
        <div className="flex-item">
          <div className="left-flex-box" style={{ background: "#3988ff" }}>
            <div className="left-info">
              <p style={{ color: "#ffff" }}>Future App</p>
              <h2 style={{ color: "#ffff" }}>labor2Hire</h2>
            </div>

            <div className="inner">
              <div className="image-holder docs" style={{}}>
                <Slider>
                  <img
                    src={leftImage}
                    alt="AI"
                    loading="lazy"
                    style={{ maxWidth: "340px" }}
                  />
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-item">
          <div className="right-flex-box" style={{ background: "#ffff" }}>
            <div className="right-info">
              <p style={{ color: "#000" }}>Future App</p>
              <h2 style={{ color: "#000" }}>CurioCove</h2>{" "}
            </div>

            <div className="inner">
              <div className="image-holder docs">
                <Slider>
                  <img
                    src={rightImage}
                    alt="AI"
                    loading="lazy"
                    style={{ width: "fit-conten" }}
                  />
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Work;
