// src/components/skills/Skills.tsx
import { useTranslation } from "react-i18next"
import "./skills.css"
import Fullstack from "./Fullstack"
import CloudEnginer from "./CloudEnginer"
import MachineLearning from "./MachineLearning"

const Skills = () => {
  const { t } = useTranslation();
  return (
    <section className="skills section" id="skills">
        <h2 className='section__title'>{t('skills.title')}</h2>
        <span className="section__subtitle">{t('skills.subtitle')}</span>

        <div className="skills__container container grid">
            <Fullstack/>
            <CloudEnginer/>
            <MachineLearning/>
        </div>
    </section>
  )
}

export default Skills