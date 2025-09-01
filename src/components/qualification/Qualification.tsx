import { useState } from 'react';
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
        
    const toggleTab = (index: number) => {
        setToggleState(index)
    }

  return (
    <section className='qualification section' id='qualification'>
        <h2 className='section__title'>Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"} onClick={()=> toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>

                <div className={toggleState === 2 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"} onClick={()=> toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                </div>
            </div>

            <div className="qualification__section">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Universitas Pembangunan Nasional Veteran Jawa Timur</h3>
                            <span className="qualification__subtitle">Currently pursuing a Bachelor's degree in Informatics Engineering.</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022 - Now
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">SMAN 1 Magetan</h3>
                            <span className="qualification__subtitle">Graduated from junior high school.</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2019 - 2022
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="qualification__section">
                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Cloud Computing Graduate Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka</h3>
                            <span className="qualification__subtitle">
                                - Cloud Technology: Designing and managing solutions with GCP. <br />- Backend Development: Building scalable APIs. <br />- Machine Learning: Applying ML models to real use cases. <br />- Capstone Project: Combining cloud and ML in a final project. <br />- Soft Skills: Time management, problem-solving, teamwork.
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2024 - 2025
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Website Developer At PT Asia Pramulia</h3>
                            <span className="qualification__subtitle">
                                - UI/UX Design: Created user-friendly designs tailored for non-technical users.<br />
                                - Requirement Analysis: Conducted analysis of user needs for web applications.<br />
                                - Modern Frameworks: Utilized the latest frameworks in development.<br />
                                - Application Testing: Performed testing based on IEEE 829 standards.<br />
                                - Local Hosting: Deployed applications on local servers using computer networks.<br />
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2025 - 2026
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification