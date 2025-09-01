import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">My Portfolio</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About Me</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">My Projects</a>
                </li>
                
                <li>
                    <a href="#contact" className="footer__link">Contact Me</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com/iqbal.bs_?igsh=enJnN2plaWNvdTFk" className="footer__social-link" target="_blank">
                    <i className="bx bxl-instagram"></i>
                </a>
                <a href="https://github.com/IqbalBagus-s" className="footer__social-link" target="_blank">
                    <i className="bx bxl-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/iqbal-bagus-satriawan-275895326" className="footer__social-link" target="_blank">
                    <i className="bx bxl-linkedin"></i>
                </a>
            </div>
            <span className="footer__copy">
                &#169; {new Date().getFullYear()} - Iqbal.bs._
            </span>
        </div>
    </footer>
  )
}

export default Footer