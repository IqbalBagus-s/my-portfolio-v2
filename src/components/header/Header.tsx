// src/components/header/Header.tsx
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../App.css";
import "./header.css";

const Header = () => {
    const { t, i18n } = useTranslation();

    // Toggle menu
    const [toggle, showMenu] = useState(false);

    // Active navigation
    const [activeNav, setActiveNav] = useState("#home");

    // Change header background when scrolling
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".header");

            if (window.scrollY >= 560) {
                header?.classList.add("scroll-header");
            } else {
                header?.classList.remove("scroll-header");
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Change language
    const changeLanguage = (lng: "en" | "id") => {
        i18n.changeLanguage(lng);
    };

    return (
        <header className="header">
            <nav className="nav container">

                {/* Logo */}
                <a href="#home" className="nav__logo">
                    {t("nav.logo")}
                </a>

                {/* Navigation Menu */}
                <div
                    className={
                        toggle
                            ? "nav__menu show-menu"
                            : "nav__menu"
                    }
                >
                    <ul className="nav__list grid">

                        {/* Home */}
                        <li className="nav__item">
                            <a
                                href="#home"
                                className={
                                    activeNav === "#home"
                                        ? "nav__link active-link"
                                        : "nav__link"
                                }
                                onClick={() => {
                                    setActiveNav("#home");
                                    showMenu(false);
                                }}
                            >
                                <i className="uil uil-estate nav__icon"></i>
                                {t("nav.home")}
                            </a>
                        </li>

                        {/* About */}
                        <li className="nav__item">
                            <a
                                href="#about"
                                className={
                                    activeNav === "#about"
                                        ? "nav__link active-link"
                                        : "nav__link"
                                }
                                onClick={() => {
                                    setActiveNav("#about");
                                    showMenu(false);
                                }}
                            >
                                <i className="uil uil-user nav__icon"></i>
                                {t("nav.about")}
                            </a>
                        </li>

                        {/* Skills */}
                        <li className="nav__item">
                            <a
                                href="#skills"
                                className={
                                    activeNav === "#skills"
                                        ? "nav__link active-link"
                                        : "nav__link"
                                }
                                onClick={() => {
                                    setActiveNav("#skills");
                                    showMenu(false);
                                }}
                            >
                                <i className="uil uil-file-alt nav__icon"></i>
                                {t("nav.skills")}
                            </a>
                        </li>

                        {/* Services */}
                        <li className="nav__item">
                            <a
                                href="#services"
                                className={
                                    activeNav === "#services"
                                        ? "nav__link active-link"
                                        : "nav__link"
                                }
                                onClick={() => {
                                    setActiveNav("#services");
                                    showMenu(false);
                                }}
                            >
                                <i className="uil uil-briefcase nav__icon"></i>
                                {t("nav.services")}
                            </a>
                        </li>

                        {/* Portfolio */}
                        <li className="nav__item">
                            <a
                                href="#portfolio"
                                className={
                                    activeNav === "#portfolio"
                                        ? "nav__link active-link"
                                        : "nav__link"
                                }
                                onClick={() => {
                                    setActiveNav("#portfolio");
                                    showMenu(false);
                                }}
                            >
                                <i className="uil uil-scenery nav__icon"></i>
                                {t("nav.portfolio")}
                            </a>
                        </li>

                        {/* Contact */}
                        <li className="nav__item">
                            <a
                                href="#contact"
                                className={
                                    activeNav === "#contact"
                                        ? "nav__link active-link"
                                        : "nav__link"
                                }
                                onClick={() => {
                                    setActiveNav("#contact");
                                    showMenu(false);
                                }}
                            >
                                <i className="uil uil-message nav__icon"></i>
                                {t("nav.contact")}
                            </a>
                        </li>

                    </ul>

                    {/* Close Menu */}
                    <i
                        className="uil uil-times nav__close"
                        onClick={() => showMenu(false)}
                    ></i>
                </div>

                {/* Right Side Buttons */}
                <div className="nav__buttons">

                    {/* Language Switcher */}
                    <div
                        className="nav__lang"
                        role="group"
                        aria-label={t("language.label")}
                    >
                        <button
                            type="button"
                            className={`nav__lang-button ${
                                i18n.language === "en"
                                    ? "nav__lang-button--active"
                                    : ""
                            }`}
                            onClick={() => changeLanguage("en")}
                        >
                            {t("language.en")}
                        </button>

                        <span className="nav__lang-divider">
                            /
                        </span>

                        <button
                            type="button"
                            className={`nav__lang-button ${
                                i18n.language === "id"
                                    ? "nav__lang-button--active"
                                    : ""
                            }`}
                            onClick={() => changeLanguage("id")}
                        >
                            {t("language.id")}
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div
                        className="nav__toggle"
                        onClick={() => showMenu(!toggle)}
                    >
                        <i className="uil uil-apps"></i>
                    </div>

                </div>
            </nav>
        </header>
    );
};

export default Header;

