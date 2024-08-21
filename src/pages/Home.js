import React from "react";
import Navbar from "../comp/nav";
import Marquee from "../comp/marquee";
import Footer from "../comp/footer";
import "../style/play.scss"
const Home = () => {
  return (
    <>
      <div className="flex-play">
        {/* <Navbar /> */}
        <div className="flex-play-content">
          <div>
            <h1 className="play-title">Play</h1>
            <p>
              Here, you can enjoy web-based games and download components, among
              other things.
            </p>
          </div>
        </div>
      </div>
      <div className="marquee-play">
        <Marquee />
      </div>
      <div class="comeing-soon">
        <div className="waviy">
          <span style={{ "--i": 1 }}>C</span>
          <span style={{ "--i": 2 }}>o</span>
          <span style={{ "--i": 3 }}>m</span>
          <span style={{ "--i": 4 }}>e</span>
          <span style={{ "--i": 6 }}>&nbsp;</span>
          <span style={{ "--i": 5 }}>s</span>
          <span style={{ "--i": 6 }}>o</span>
          <span style={{ "--i": 7 }}>o</span>
          <span style={{ "--i": 8 }}>n</span>
          <span style={{ "--i": 9 }}>.</span>
          <span style={{ "--i": 10 }}>.</span>
          <span style={{ "--i": 11 }}>.</span>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
