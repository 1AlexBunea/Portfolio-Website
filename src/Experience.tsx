import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Experience.css";
import ScrollSidebar from "./ScrollSidebar";
import BulletPointTextArea from "./BulletPointTextArea";
import BulletPointList from "./BulletPointList";

const jobs = [
  "2024: Software Engineer Intern",
  "2022: Cybersecurity Analyst Intern",
  "2022: Data Analyst Intern",
  "2021: Software Engineer Intern",
];

const description = [
  `test1 test1 test1 test1 test1 test1test1 test1 test1test1 test1 test1test1 test1 test1test1 test1 test1.
    test2 test1 test1 test1 test1 test1 test1test1 test1 test1test1 test1 test1test1 test1 test1test1 test1 test1 .
    test3 test1 test1 test1 test1 test1 test1test1 test1 test1test1 test1 test1test1 test1 test1test1 test1 test1.
    test4 test1 test1 test1 test1 test1 test1test1 test1 test1test1 test1 test1test1 test1 test1test1 test1 test1.`,
  "test2",
  "test3",
  "test4",
];

// const test = ```testtesttest```;

const company = [
  "GAF Energy",
  "Standard Industries",
  "Standard Industries",
  "GAF Energy",
];

const codingLanguages = [
    `Python`,
    `Java`,
    `C`,
    `HTML / CSS / JavaScript`,
]

const frameworksAndTechnologies = [
    `React TypeScript and JavaScript`,
    `Express`,
    `NodeJS`,
    `FastAPI`,
    `Flask`,
    `Large Language Models`,
    `Embedding Models`,
    `Vector Databases`,
    `ChromaDB`,
    `LangChain`,
    `LlamaIndex`,
    `Retrieval Augmented Generation`,
    `Tokenization`,
    `Embedding Models`,
    `Natural Language Processing`,
    `Neural Networks`,
    `Machine Learning`,
    `Artifical Intelligence`,
    `NumPy`,
    `Pandas`,
    `MatPlotLib`,
    `OpenCV2`,
    `Pillow`,
]

const additionalTools = [
    `Postman`,
    `Git`,
    `Docker`,
    `Ubuntu`,
    `Kali Linux`,

]

const Experience = () => {
  const [activeButton, setActiveButton] = useState<number>(-1);
  const [activeButtonScroll, setScrollActiveButton] = useState<number>(-1);
  const [isOpen, setIsOpen] = useState(false);
  const popoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        popoutRef.current &&
        !popoutRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const togglePopout = () => {
    setIsOpen(!isOpen);
  };

  const handleContentClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const handleClick = (index: number) => {
    setActiveButton(index);
    togglePopout();
  };

  return (
    <div
      style={{ paddingLeft: 2, paddingRight: 2, paddingBottom: 50, maxWidth:1000 }}
      id="professional-experience"
    >
      {/* <ScrollSidebar></ScrollSidebar> */}

      <div className="experience-div">
        <h2
          className="display-1 display-sm-2 display-md-3 display-lg-4"
          style={{
            color: "rgb(182, 32, 32)",
            paddingBottom: 30,
          }}
        >
          Professional Experience
        </h2>
      </div>

      <div className="d-flex">
        <div className="indicator-container">
          {jobs.map((job, index) => (
            <div
              key={index}
              className={`indicator ${
                activeButtonScroll === index || activeButton === index
                  ? "active"
                  : ""
              }`}
            ></div>
          ))}
        </div>
        <div className="d-flex" style={{ width: "100%" }}>
          <div className="button-group-scroll">
            <div className="button-group-container">
              {jobs.map((job, index) => (
                <button
                  className={`button-item ${
                    activeButton === index ? "active" : ""
                  }`}
                  onClick={() => handleClick(index)}
                  onMouseOver={() => setScrollActiveButton(index)}
                  onMouseOut={() => setScrollActiveButton(-1)}
                  key={index}
                >
                  {job}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div
          className={`popout-container ${isOpen ? "show" : ""}`}
          ref={popoutRef}
          onClick={() => setIsOpen(false)}
        >
          <div className="popout-content" onClick={handleContentClick}>
            <h2>{company[activeButton]}</h2>
            {activeButton != -1 ? <BulletPointTextArea description={description[activeButton]}></BulletPointTextArea> : null}
          </div>
        </div>
      </div>

      <h1
        id="education"
        className="display-1 display-sm-2 display-md-3 display-lg-4"
        style={{
          color: "rgb(182, 32, 32)",
          paddingTop: 50,
        }}
      >
        Education
      </h1>
      <h2
        className="display-6"
        style={{
          color: "rgba(224, 134, 92, 0.959)",
        }}
      >
        University of Texas at Austin
      </h2>
      <div style={{ paddingLeft: 20 }}>
        <h4>GPA</h4>
        <h5 className="info-h5-header">
            3.92 (Honors)
        </h5>
        <h4>
          Relevant Coursework
        </h4>
        <h5 className="info-h5-header">
            Principles of Computer Systems, Computer
            Organization and Architecture, Information Retrieval and Web Search,
            Data Structures, Introducing to Programming, Discrete Mathematics,
            Multivariable Calculus, Differential and Integral Calculus
        </h5>
      </div>

      <h1
        id="languages"
        className="display-1 display-sm-2 display-md-3 display-lg-4"
        style={{
          color: "rgb(182, 32, 32)",
          paddingTop: 50,
          paddingBottom: 50,
        }}
      >
        Coding Languages
      </h1>
      <BulletPointList items={codingLanguages}></BulletPointList>

      <h1
        className="display-1 display-sm-2 display-md-3 display-lg-4"
        id="frameworks"
        style={{
          color: "rgb(182, 32, 32)",
          paddingTop: 50,
          paddingBottom: 50,
        }}
      >
        Frameworks & Technologies
      </h1>
      <BulletPointList items={frameworksAndTechnologies}></BulletPointList>

      <h1
        className="display-1 display-sm-2 display-md-3 display-lg-4"
        id="tools"
        style={{
          color: "rgb(182, 32, 32)",
          paddingTop: 50,
          paddingBottom: 50,
        }}
      >
        Additional Tools
      </h1>
        <BulletPointList items={additionalTools}></BulletPointList>
    </div>
  );
};

export default Experience;
