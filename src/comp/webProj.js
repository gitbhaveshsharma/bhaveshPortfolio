import React from "react";
import Navbar from "./nav";
import Footer from "./footer";
import MernProject from "../comp/mernProject"

const WebArticle = () => {
  return (
    <>
      <div className="flex-Work">
        <Navbar />
        <div className="flex-work-content">
          <h1 className="work-title">MERN Stack</h1>
          <div className="artical-info">
            <div className="">
              <p style={{ fontSize: 20 }}>Last Update</p>
              <p>4-07-2023</p>
            </div>
            <div>
              <p>Editor</p>
              <p>
                <span>O</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="artical-intro">
        <h1>Introduction</h1>
        <p>
          The MERN stack is a powerful and popular web development framework
          that leverages four key technologies: MongoDB, Express.js, React.js,
          and Node.js. The MERN stack provides a full-stack JavaScript
          environment, allowing developers to use a single language for both
          frontend and backend development. This fosters code reusability and
          improves the development workflow.
        </p>
      </div>
      <div className="artical-content">
        <div class="grid">
          <div class="article">
            <h2>1.</h2>
            <h3>🍃 MongoDB</h3>
            <p>
              🍃 MongoDB is a NoSQL database, providing a flexible and scalable
              way to store data in JSON-like format. It allows developers to
              work with data without the constraints of a traditional relational
              database.
            </p>
          </div>
          <div class="article">
            <h2>2.</h2>
            <h3>🚀 Express.js</h3>
            <p>
              🚀 Express.js is a minimalistic and flexible backend web
              application framework for Node.js. It simplifies the process of
              building robust APIs and handling server-side operations.
            </p>
          </div>
          <div class="article">
            <h2>3.</h2>
            <h3>⚛️ React.js </h3>
            <p>
              ⚛️ React.js is a widely-used frontend library for building user
              interfaces. It enables developers to create dynamic and
              interactive components, making it easy to build single-page
              applications with seamless user experiences.
            </p>
          </div>
          <div class="article">
            <h2>4.</h2>
            <h3> 📡 Node.js </h3>
            <p>
              📡 Node.js is a server-side JavaScript runtime that allows
              developers to run JavaScript code on the server. It facilitates
              building scalable and high-performance applications.
            </p>
          </div>
        </div>
      </div>
      <div className="artical-conclusion">
        <div className="conclusion-info">
          <h1>Conclusion</h1>
          <p>
            Additionally, the MERN stack supports the concept of the
            "JavaScript Everywhere" approach, where the same JavaScript language
            is used for both client-side and server-side development,
            streamlining the entire development process.  Overall, the MERN
            stack is a fantastic choice for building modern web applications
            with its simplicity, flexibility, and efficiency. Whether you're a
            seasoned developer or just starting, the MERN stack offers a
            delightful and productive development experience. Happy coding! 
          </p>
        </div>
      </div>
      <div className="eduaction-flex-box">
        <MernProject/>
      </div>
      <Footer />
    </>
  );
};

export default WebArticle;
