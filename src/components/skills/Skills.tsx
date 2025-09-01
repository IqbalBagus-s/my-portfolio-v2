import "./skills.css"
import Fullstack from "./Fullstack"
import CloudEnginer from "./CloudEnginer"
import MachineLearning from "./MachineLearning"

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className='section__title'>Skills</h2>
        <span className="section__subtitle">My Technical Level</span>

        <div className="skills__container container grid">
            <Fullstack/>
            <CloudEnginer/>
            <MachineLearning/>
        </div>
    </section>
  )
}

export default Skills