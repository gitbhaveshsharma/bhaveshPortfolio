import React, { useEffect, useRef } from "react";
import "./marquee.scss";

const Marquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    let lastScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
          const direction = currentScrollTop > lastScrollTop ? "left" : "right";
          marqueeRef.current.style.transition = "transform 0.3s ease-in-out"; 
          marqueeRef.current.style.transform =
            direction === "left" ? "translateX(0%)" : "translateX(10%)";
          ticking = false;
          lastScrollTop = currentScrollTop;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="marquee">
      <div className="marquee-container" ref={marqueeRef}>
        <div className="marquee-content">
          <h2>Play * Fun * Masti * Play * Fun </h2>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
