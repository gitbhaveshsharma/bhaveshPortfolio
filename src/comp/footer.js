import React from "react";
import "./footer.scss";
import { FaGithub, FaTelegram } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import spotifySvg from "../assets/icons8-spotify.svg";

const Footer = () => {
  const items = [
    {
      text: "GitHub",
      link: "https://github.com/gitbhaveshsharma",
      icon: FaGithub,
    },
    {
      text: "Linkedin",
      link: "https://www.linkedin.com/in/bhavesh-sharma-b5b3a7222/",
      icon: ImLinkedin,
    },
    { text: "Telegram", link: "https://example.com/item3", icon: FaTelegram },
    {
      text: "Instagram",
      link: "https://www.instagram.com/bhaveshya_sharma/",
      icon: RiInstagramFill,
    },
  ];

  return (
    <>
      <div className="footer-flex-container">
        <div className="flex-item">
          <div className="left-flex-box">
            <div>
              <h3 style={{ fontWeight: 600, letterSpacing: 2 }}> Just Chill</h3>
            </div>
            <div>
              <div className="flex-strap">
                <div
                  className="flex-strap-box"
                  style={{ alignItems: "flex-start" }}
                >
                  <div className="card flex-strap-box1">
                    <div>
                      <span className="spotifySvg">
                        <img src={spotifySvg} alt="spotify" />
                      </span>
                    </div>
                    <div>
                      <p style={{ fontWeight: 400 }}>On repeat</p>
                      <p style={{ fontWeight: 700 }}>Beete lamhe by KK</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright-text">
              <p>&#169; 2023 Bhavesh Sharma • Error</p>
            </div>
          </div>
        </div>
        <div className="flex-item ">
          <div className="right-flex-box">
            <h3 style={{ fontWeight: 600, letterSpacing: 2 }}> Find Me On</h3>
            <div>
              <ul className="custom-list">
                {items.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      style={{
                        color: "#fff",
                        fontSize: 20,
                        textDecoration: "none",
                      }}
                    >
                      <div className="cont-list">
                        
                          <span style={{fontSize:30,paddingTop:6}}> {React.createElement(item.icon)}</span>

                          <span>{item.text}</span>
                        
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
