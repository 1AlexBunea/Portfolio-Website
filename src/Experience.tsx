import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Experience.css';

const jobs = [
    '2024: Software Engineer Intern',
    '2022: Cybersecurity Analyst Intern',
    '2022: Data Analyst Intern',
    '2021: Software Engineer Intern',
];


const description = [
    `test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 `,
    'test2',
    'test3',
    'test4',
]

// const test = ```testtesttest```;

const company = [
    'GAF Energy',
    'Standard Industries',
    'Standard Industries',
    'GAF Energy'
]

const Experience = () => {
    const [activeButton, setActiveButton] = useState<number>(-1);
    const [activeButtonScroll, setScrollActiveButton] = useState<number>(-1);
    const [isOpen, setIsOpen] = useState(false);
    const popoutRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleOutsideClick = (event: MouseEvent) => {
        if (popoutRef.current && !popoutRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
        if (isOpen == false){
            setActiveButton(-1);
            setScrollActiveButton(-1);
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
        <div style={{paddingLeft: 5}}>
            <div className='experience-div'>
                <h1 className="fw-bold display-1 display-sm-2 display-md-3 display-lg-4" style={{
                    color: 'rgb(182, 32, 32)',
                    paddingBottom: 50,
                }}>Professional Experience</h1>
            </div>

            <div className="d-flex">
                <div className="indicator-container">
                    {jobs.map((job, index) => (
                        <div
                            key={index}
                            className={`indicator ${activeButtonScroll === index || activeButton === index ? 'active' : ''}`}
                        ></div>
                    ))}
                </div>
                <div className="d-flex" style={{width: '100%'}}>
                    <div className='button-group-scroll'>
                        <div className='button-group-container'>
                            {jobs.map((job, index) => (
                                <button
                                    className={`button-item ${activeButton === index ? 'active' : ''}`}
                                    onClick={() => handleClick(index)}
                                    onMouseOver={() => setScrollActiveButton(index)}
                                    onMouseOut={() => setScrollActiveButton(-1)}
                                    key={index}>
                                    {job}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className={`popout-container ${isOpen ? "show" : ""}`} ref={popoutRef} onClick={() => setIsOpen(false)}>
                    <div className="popout-content" onClick={handleContentClick}>
                        <h2>{company[activeButton]}</h2>
                        <p>{description[activeButton]}</p>
                    </div>
                </div>
            </div>

            <h1 className="fw-bold display-1 display-sm-2 display-md-3 display-lg-4" style={{
                color: 'rgb(182, 32, 32)',
                paddingTop: 50,
                paddingBottom: 50,
            }}>Education</h1>
        </div>
    );
};

export default Experience;
