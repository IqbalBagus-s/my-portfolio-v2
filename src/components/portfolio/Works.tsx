// src/components/portfolio/Works.tsx
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { projectsData, projectNavKeys, type Project } from "./Data"
import WorkItems from "./WorkItems"

const Works = () => {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [projects, setProjects] = useState<Project[]>([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (activeCategory === "all") {
      setProjects(projectsData)
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category === activeCategory
      })
      setProjects(newProjects)
    }
  }, [activeCategory])

  const handleClick = (categoryKey: string, index: number) => {
    setActiveCategory(categoryKey)
    setActive(index)
  }

  return (
    <>
      <div className="work__filters">
        {projectNavKeys.map((key, index) => (
          <span
            onClick={() => handleClick(key, index)}
            className={`${active === index ? "active-work" : ""} work__item`}
            key={key}
          >
            {t(`portfolio.filters.${key}`)}
          </span>
        ))}
      </div>

      <div className="work__container container grid">
        {projects.map((item) => (
          <WorkItems item={item} key={item.id} />
        ))}
      </div>
    </>
  )
}

export default Works