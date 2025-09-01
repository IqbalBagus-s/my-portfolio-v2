import "./portfolio.css"
import Works from "./Works"

const Portfolio = () => {
  return (
    <section className='work section' id='portfolio'>
        <h2 className='section__title'>Portfolio</h2>
        <span className="section__subtitle">Projects in web development, cloud computing, and machine learning.</span>
        <Works/>
    </section>
  )
}

export default Portfolio