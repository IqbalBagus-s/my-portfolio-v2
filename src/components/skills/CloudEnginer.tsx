// src/components/skills/CloudEnginer.tsx
import { useTranslation } from "react-i18next"

const CloudEnginer = () => {
  const { t } = useTranslation();
  return (
    <div className="skills__content">
        <h3 className="skills__title">{t('skills.cloud.title')}</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">{t('skills.cloud.gcp.name')}</h3>
                        <span className="skills__level">{t('skills.cloud.gcp.level')}</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">{t('skills.cloud.database.name')}</h3>
                        <span className="skills__level">{t('skills.cloud.database.level')}</span>
                    </div>
                </div>
                
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">{t('skills.cloud.compute.name')}</h3>
                        <span className="skills__level">{t('skills.cloud.compute.level')}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CloudEnginer