import React from 'react';
import data from '../models/resumeInfo.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import '../css/Resume.css';


const Resume = () => {
    console.log("ResumeData", data);
    return (
        <>
            <div className="button">
            <button className="download-resume">
                <a className="button-link" href="../images/resume_pdfdownload.pdf" download >PDF</a>
            </button> {/*https://stackoverflow.com/questions/60922523/how-to-make-a-pdf-download-on-a-button-click-with-react*/}
            </div>

            <div className="resume-container">
                <header>
                    <div className="titlebar">
                        <h1 className="name">{data.profile.name}</h1>
                        <p><FontAwesomeIcon icon={faEnvelope} /> {data.profile.email} | website: {data.profile.url}</p>
                    </div>
                </header>

                <div className="summary">
                    <h2>{data.profile.summary}</h2>
                </div>

                <div className="section2">

                    <div className="experience">
                        <div className="section2-items">
                            <h2 className="experience-h2">Experience</h2>
                            {data.experience.map((experience, index) => (
                                <div key={index} className="experience-items">
                                    <p className="strong">{experience.company}  | {experience.position} | {experience.startDate} - {experience.endDate}</p>
                                    <p>{experience.summary}</p>
                                    <br></br>
                                </div>

                            ))}
                        </div>
                    </div>

                    <div className="education">
                        <div className="section2-items">
                            <h2>Education</h2>
                            {data.education.map((education, index) => (
                                <div key={index} className="education-items">
                                    <p className="strong">{education.institution}</p>
                                    <p>{education.area}</p>
                                    <p>{education.startDate} - {education.endDate}</p>
                                    <br></br>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="certificates">
                        <div className="section2-items">
                            <h2>Certificates</h2>
                            {data.certificates.map((cert, index) => (
                                <div key={index} className="certificates-items">
                                    <p>{cert.name}</p>
                                    <p className="strong">{cert.institution}</p>
                                    <p>{cert.date}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="section3">
                    <div className="skills">
                        <h2>Skills</h2>
                        <div className="skills-grid">
                            {data.skills.map((skill, index) => (
                                <div key={index} className="skillsitems">
                                    <ul className="skills-items"></ul>
                                    <li>{skill}</li>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="languages">
                        <h2>Languages</h2>
                        {data.languages.map((lang, index) => (
                            <div key={index} className="languages">
                                <p>{lang}</p>
                            </div>
                        ))}
                    </div>

                    <div className="hobbies">
                        <h2>Hobbies</h2>

                        {data.hobbies.map((hobby, index) => (
                            <ul key={index} className="hobbies-items">
                                <li>{hobby}</li>
                            </ul>
                        ))}
                    </div>
                </div>
            </div>

        </>
    );
};

export default Resume;