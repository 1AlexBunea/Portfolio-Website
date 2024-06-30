import React, { useState, useEffect } from "react";
import "./ScrollSidebar.css";
import ButtonAnimation from "./BulletPointTextArea";

const ScrollSidebar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = (id: string) => {
    let topValue = 0; // Default top value

    // Adjust top value for 'professional-experience' ID
    if (id === "professional-experience") {
      topValue = 0; // Scroll to the top of the page
    } else {
      const element = document.getElementById(id);
      if (element) {
        // Calculate the offsetTop relative to the document body
        topValue = element.getBoundingClientRect().top + window.pageYOffset;
      }
    }

    window.scrollTo({
      behavior: "smooth",
      top: topValue,
    });
  };

  // if (windowWidth < 600) {
  //     return null; // Hide sidebar if window width is less than 600 pixels
  // }

  return (
    <div className="scroll-sidebar">
      <nav>
        <ul>
          <li style={{ paddingTop: 30 }}>
            <button
              className="sidebar-button"
              onClick={() => handleClick("professional-experience")}
            >
              Professional Experience
            </button>
          </li>
          <li>
            <button
              className="sidebar-button"
              onClick={() => handleClick("education")}
            >
              Education
            </button>
          </li>
          <li>
            <button
              className="sidebar-button"
              onClick={() => handleClick("languages")}
            >
              Languages
            </button>
          </li>
          <li>
            <button
              className="sidebar-button"
              onClick={() => handleClick("frameworks")}
            >
              Frameworks
            </button>
          </li>
          <li>
            <button
              className="sidebar-button"
              onClick={() => handleClick("tools")}
            >
              Tools
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ScrollSidebar;
