import { useEffect, useState } from "react"
import { projectsData, projectNav, type Project } from "./Data"
import WorkItems from "./WorkItems"

const Works = () => {
  const [item, setItem] = useState<{ name: string }>({ name: "all" })
  const [projects, setProjects] = useState<Project[]>([])  // ⬅️ kasih tipe
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData)
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category === item.name
      })
      setProjects(newProjects)
    }
  }, [item])

  const handleClick = (e: React.MouseEvent<HTMLSpanElement>, index: number) => {
    setItem({ name: e.currentTarget.textContent ?? "all" }) // ⬅️ fix typo "texContent"
    setActive(index)
  }

  return (
    <>
      <div className="work__filters">
        {projectNav.map((navItem, index) => (
          <span
            onClick={(e) => handleClick(e, index)}
            className={`${active === index ? "active-work" : ""} work__item`}
            key={index}
          >
            {navItem.name}
          </span>
        ))}
      </div>

      <div className="work__container container grid">
        {projects.map((item) => (   // ⬅️ harus pakai projects, bukan projectsData
          <WorkItems item={item} key={item.id} />
        ))}
      </div>
    </>
  )
}

export default Works
