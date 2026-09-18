// src/components/about/Info.tsx
import { useTranslation } from "react-i18next";
import "../about/about.css";

interface InfoProps {
  inView: boolean;
}

const Info = ({ inView }: InfoProps) => {
  const { t } = useTranslation();

  const items = [
    {
      icon: "bx-award",
      title: t('about.info.experience.title'),
      subtitle: t('about.info.experience.subtitle'),
    },
    {
      icon: "bx-briefcase-alt",
      title: t('about.info.completed.title'),
      subtitle: t('about.info.completed.subtitle'),
    },
    {
      icon: "bx-code-alt",
      title: t('about.info.techStack.title'),
      subtitle: t('about.info.techStack.subtitle'),
    },
  ];

  return (
    <div className="about__info grid">
      {items.map((item, i) => (
        <div
          key={item.title}
          className={`about__box ${
            inView
              ? "about__box--visible"
              : ""
          }`}
          style={{
            transitionDelay: `${i * 120}ms`,
          }}
        >
          <i
            className={`bx ${item.icon} about__icon`}
          ></i>

          <h3 className="about__title">
            {item.title}
          </h3>

          <span className="about__subtitle">
            {item.subtitle}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Info;