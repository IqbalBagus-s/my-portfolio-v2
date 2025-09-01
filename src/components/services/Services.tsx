import { useState, type SetStateAction } from 'react'
import './services.css'

const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    
    const toggleTab = (index: SetStateAction<number>) => {
        setToggleState(index)
    }

  return (
    <section className='services section' id='services'>
        <h2 className='section__title'>Services</h2>
        <span className="section__subtitle">What I Do.</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">
                        Custom Website <br />Development
                    </h3>
                </div>

                <span className="services__button" onClick={()=> toggleTab(1)}>
                    View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                        <h3 className="services__modal-name">Custom Website Development</h3>
                        <p className="services__modal-description">Building responsive and tailored websites to meet client needs.</p>

                        <ul className="services__modal-service grid">
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Develop custom websites with modern frontend frameworks.
                                </p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Build scalable backend systems and REST APIs.
                                </p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Ensure responsive design for all devices.
                                </p>
                            </li>
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Optimize websites for performance and SEO.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-robot services__icon"></i>
                    <h3 className="services__title">
                        Machine Learning <br />Model Development
                    </h3>
                </div>

                <span className="services__button" onClick={()=> toggleTab(2)}>
                    View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                        <h3 className="services__modal-name">Machine Learning Model Development</h3>
                        <p className="services__modal-description">Delivering intelligent solutions through custom machine learning models.</p>

                        <ul className="services__modal-service grid">
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Design and train predictive machine learning models.
                                </p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Perform data preprocessing and feature engineering.
                                </p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Deploy models into web or mobile applications.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-cloud-computing services__icon"></i>
                    <h3 className="services__title">
                        Cloud Infrastructure <br />Setup
                    </h3>
                </div>

                <span className="services__button" onClick={()=> toggleTab(3)}>
                    View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                        <h3 className="services__modal-name">Cloud Infrastructure Setup</h3>
                        <p className="services__modal-description">Setting up secure and scalable cloud infrastructure with Google Cloud Platform (GCP).</p>

                        <ul className="services__modal-service grid">
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Deploying applications using GCP services such as Cloud Run or VM Instances.
                                </p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Configuring and managing databases & storage for application needs.
                                </p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Setting up IAM (Identity & Access Management) to ensure secure access control.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services