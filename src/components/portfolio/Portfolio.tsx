// src/components/portfolio/Portfolio.tsx
import { useTranslation } from "react-i18next"
import "./portfolio.css"
import Works from "./Works"

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <section className='work section' id='portfolio'>
        <h2 className='section__title'>{t('portfolio.title')}</h2>
        <span className="section__subtitle">{t('portfolio.subtitle')}</span>
        <Works/>
    </section>
  )
}

export default Portfolio