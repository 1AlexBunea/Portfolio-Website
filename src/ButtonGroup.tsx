import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ButtonGroup.css';


// most recent jobs / descriptions / companies => lower index => Like a resume

const jobs = [
    '2024: Software Engineer Intern',
    '2022: Cybersecurity Analyst Intern',
    '2022: Data Analyst Intern',
    '2021: Software Engineer Intern',
];

const description = [
    'test1',
    'test2',
    'test3',
    'test4',
]

const company = [
    'GAF Energy',
    'Standard Industries',
    'Standard Industries',
    'GAF Energy'
]

const ButtonGroup = () => {
    const [activeButton, setActiveButton] = useState<number>(0); // Ensure activeButton can be number or null

    const handleClick = (index: number) => { // Define index as number or null
        setActiveButton(index);
    };

    return (
        <div className="d-flex">
            <div className="indicator-container">
            {jobs.map((job, index) => (
                <div
                    key={index}
                    className={`indicator ${activeButton === index ? 'active' : ''}`}
                ></div>
            ))}
            </div>
            <div className='button-group-scroll'> 
                
                <div className='button-group-container'>
                    {jobs.map((job, index) => (
                        <button
                        className={`button-item ${activeButton === index ? 'active' : ''}`}
                        onClick={() => handleClick(index)}
                        key={index}>
                        {job}
                        </button>
                    ))}
                </div>
            </div>

            <div>
                <ul>
                    <h4>{company[activeButton]}</h4>
                    <p style={{width:"20%"}}>{description[activeButton]}</p>
                </ul>
            </div>
        </div>
    );
};

export default ButtonGroup;
