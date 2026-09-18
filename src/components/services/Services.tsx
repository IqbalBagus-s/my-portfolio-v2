// src/components/services/Services.tsx
import { useState, type SetStateAction } from 'react'
import { useTranslation } from 'react-i18next'
import './services.css'

const Services = () => {
    const { t } = useTranslation();
    const [toggleState, setToggleState] = useState(0);
    
    const toggleTab = (index: SetStateAction<number>) => {
        setToggleState(index)
    }

    const webItems = t('services.web.items', { returnObjects: true }) as string[];
    const mlItems = t('services.ml.items', { returnObjects: true }) as string[];
    const cloudItems = t('services.cloud.items', { returnObjects: true }) as string[];

  return (
    <section className='services section' id='services'>
        <h2 className='section__title'>{t('services.title')}</h2>
        <span className="section__subtitle">{t('services.subtitle')}</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">
                        {t('services.web.title')}
                    </h3>
                </div>

                <span className="services__button" onClick={()=> toggleTab(1)}>
                    {t('services.viewMore')}
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                        <h3 className="services__modal-name">{t('services.web.modalName')}</h3>
                        <p className="services__modal-description">{t('services.web.modalDescription')}</p>

                        <ul className="services__modal-service grid">
                            {webItems.map((line, idx) => (
                                <li className="services__modal-services" key={idx}>
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">{line}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-robot services__icon"></i>
                    <h3 className="services__title">
                        {t('services.ml.title')}
                    </h3>
                </div>

                <span className="services__button" onClick={()=> toggleTab(2)}>
                    {t('services.viewMore')}
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                        <h3 className="services__modal-name">{t('services.ml.modalName')}</h3>
                        <p className="services__modal-description">{t('services.ml.modalDescription')}</p>

                        <ul className="services__modal-service grid">
                            {mlItems.map((line, idx) => (
                                <li className="services__modal-services" key={idx}>
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">{line}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-cloud-computing services__icon"></i>
                    <h3 className="services__title">
                        {t('services.cloud.title')}
                    </h3>
                </div>

                <span className="services__button" onClick={()=> toggleTab(3)}>
                    {t('services.viewMore')}
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                        <h3 className="services__modal-name">{t('services.cloud.modalName')}</h3>
                        <p className="services__modal-description">{t('services.cloud.modalDescription')}</p>

                        <ul className="services__modal-service grid">
                            {cloudItems.map((line, idx) => (
                                <li className="services__modal-services" key={idx}>
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">{line}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services