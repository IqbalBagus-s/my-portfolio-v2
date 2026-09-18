// src/components/skills/Fullstack.tsx
import { useTranslation } from "react-i18next"

const Fullstack = () => {
  const { t } = useTranslation();
  return (
    <div className="skills__content">
        <h3 className="skills__title">{t('skills.fullstack.title')}</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">{t('skills.fullstack.backend.name')}</h3>
                        <span className="skills__level">{t('skills.fullstack.backend.level')}</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">{t('skills.fullstack.frontend.name')}</h3>
                        <span className="skills__level">{t('skills.fullstack.frontend.level')}</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">{t('skills.fullstack.uiux.name')}</h3>
                        <span className="skills__level">{t('skills.fullstack.uiux.level')}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Fullstack