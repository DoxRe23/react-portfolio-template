import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython, faAndroid } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "Node",
    "TypeScript",
    "JavaScript",
    "Bootstrap",
    "HTML5",
    "CSS",
    "Python",
    "Java",
    "PHP",
    "SQL",
];

const labelsSecond = [
    "Android Studio",
    "Visual Studio",
    "Unity",
    "Vuforia",
    "Blender",
];

const labelsThird = [
    "Python",
    "PyTorch",
    "TensorFlow",
    "NLK",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>Stay competitive in the digital market by leveraging modern, scalable web architectures in your projects. I have professional experience building enterprise-grade, full-stack solutions to empower seamless user experiences and drive business efficiency. I have built a diverse array of web applications from scratch using modern technology such as React and Node and also have strong proficiency in the SDLC process and frontend + backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faAndroid} size="3x"/>
                    <h3>Android Development</h3>
                    <p>Engage users and drive mobile strategy by leveraging modern Android technologies. I have experience building Android applications focused on performance and good user experience..</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Machine & Deep Learning</h3>
                    <p>Stay ahead of the curve by integrating robust, data-driven intelligence into your products. I have experience building machine and deep learning models to power predictive analytics and automate complex processes.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;