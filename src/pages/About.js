import React from "react";
import Navbar from "../comp/nav";
import bhaveshImage from "../assets/Bhavesh Sharma.jpg";
import Slider from "../comp/slider";
import CertificationList from "../comp/certification" 
import "../style/About.scss"
import Footer from "../comp/footer";
 const educationData = [
   {
     degree: "Diploma in Computer Application (DCA)",
     institution: "Web net InfoTech",
     location: "New Delhi, India",
     duration: "2016-04 - 2017",
   },
   {
     degree: "Bachelor in Computer Application",
     institution: "Jaipur National University",
     location: "Jaipur, India",
     duration: "2018-06 - 2021-07",
   },
   {
     degree: "Master in Computer Application",
     institution: "Bennett University",
     location: "Greater Noida, UP, India",
     duration: "2022-08 – current",
   },
 ];


const About = () => {

  return (
    <>
      <div className="flex-about">
        <Navbar />
        <div className="flex-about-cantent">
          <div style={{ marginTop: 90 }}>
            <h1 className="about-title">I'm Bhavesh.</h1>
          </div>

          <div className="flex-container-profile">
            <div className="flex-item">
              <div className="left-about-box">
                <Slider>
                  <img
                    src={bhaveshImage}
                    alt="AI"
                    loading="lazy"
                    style={{ width: "fit-conten" }}
                    className="bhavesh-image"
                  />
                </Slider>
              </div>
            </div>
            <div className="flex-item">
              <div className="about-info">
                <h1>
                  I'm a AI & MERN Dev working remotely from 35°C Delhi,
                  India.
                </h1>
                <p>
                  Over the past 2+ years, I've worked in various areas of
                  digital design, including front-end development, Model Trian,
                  and app UI/UX. I'm proud to have worn many hats.
                </p>
                <p>
                  These days, I focus on building Help Scout's knowledge base
                  and AI tools as a Senior Product Designer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="section-two-about">
          <div className="flex-item">
            <h1>
              Let's collaborate if you're committed to sustainability,
              education, equality, or carbon neutrality.
            </h1>
          </div>
          <div className="flex-item">
            {" "}
            <p>
              I strongly believe in the importance of leaving Earth in a better
              state for future generations. It is my goal to contribute to these
              ideals in any way possible. If you share the same passion, I would
              be delighted to engage in a conversation with you.
            </p>
          </div>
        </div>
      </div>
      <div className="Progress-title">
        <h1>Education</h1>
        <p
          style={{
            textAlign: "Center",
            maxWidth: "665px",
            width: "100%",
            fontSize: "20px",
            marginTop: -10,
          }}
        >
          Education is the key that unlocks the doors to knowledge, empowering
          individuals to grow, succeed, and make a positive impact in the world.
        </p>
      </div>
      <div className="eduaction-flex-box">
        <div className="edu-flex-box">
          <ul className="edu-list">
            {educationData.map((education, index) => (
              <li key={index}>
                <h1>{education.degree}</h1>
                <p>{education.institution}</p>
                <p>{education.location}</p>
                <p>{education.duration}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="Progress-title">
        <h1>Certification</h1>
      </div>
      <div className="list">
        <div className="certification-list">
          <CertificationList />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default About;
