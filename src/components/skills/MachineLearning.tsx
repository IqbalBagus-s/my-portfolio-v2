// src/components/skills/MachineLearning.tsx
import { useTranslation } from "react-i18next"

const MachineLearning = () => {
  const { t } = useTranslation();
  return (
    <div className="skills__content">
        <h3 className="skills__title">{t('skills.ml.title')}</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">{t('skills.ml.mlops.name')}</h3>
                        <span className="skills__level">{t('skills.ml.mlops.level')}</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>


                    <div>
                        <h3 className="skills__name">{t('skills.ml.programming.name')}</h3>
                        <span className="skills__level">{t('skills.ml.programming.level')}</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">{t('skills.ml.fundamental.name')}</h3>
                        <span className="skills__level">{t('skills.ml.fundamental.level')}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MachineLearning