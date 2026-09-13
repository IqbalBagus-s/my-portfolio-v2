import "../about/about.css";

interface InfoProps {
  inView: boolean;
}

const items = [
  {
    icon: "bx-award",
    title: "Experience",
    subtitle: "9 Months Working",
  },
  {
    icon: "bx-briefcase-alt",
    title: "Completed",
    subtitle: "5+ Projects",
  },
  {
    icon: "bx-code-alt",
    title: "Tech Stack",
    subtitle: "12+ Tech Expertise",
  },
];

const Info = ({ inView }: InfoProps) => {
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
