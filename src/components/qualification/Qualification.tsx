// src/components/qualification/Qualification.tsx
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './qualification.css'

interface EducationItem {
    title: string;
    subtitle: string;
    date: string;
}

interface ExperienceItem {
    title: string;
    items: string[];
    date: string;
}

const Qualification = () => {
    const { t } = useTranslation();
    const [toggleState, setToggleState] = useState(1);
    const [visible, setVisible] = useState<Set<string>>(new Set());
    const containerRef = useRef<HTMLDivElement>(null);

    const educationData = t('qualification.education', { returnObjects: true }) as EducationItem[];
    const experienceData = t('qualification.experience', { returnObjects: true }) as ExperienceItem[];

    const toggleTab = (index: number) => {
        setToggleState(index)
    }

    useEffect(() => {
        const node = containerRef.current;
        if (!node) return;

        const items = node.querySelectorAll<HTMLElement>('.qualification__data');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const key = entry.target.getAttribute('data-key');
                        if (!key) return;
                        setVisible((prev) => {
                            if (prev.has(key)) return prev;
                            const next = new Set(prev);
                            next.add(key);
                            return next;
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.35, rootMargin: '0px 0px -10% 0px' }
        );

        items.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    }, [toggleState, educationData, experienceData]);

    const renderEducation = () => (
        <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
            {educationData.map((item, idx) => {
                const key = `edu-${idx}`;
                const alignRight = idx % 2 === 1;
                const content = (
                    <div className="qualification__content-item">
                        <h3 className="qualification__title">{item.title}</h3>
                        <span className="qualification__subtitle">{item.subtitle}</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i> {item.date}
                        </div>
                    </div>
                );
                const dotLine = (
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                );

                return (
                    <div
                        key={key}
                        data-key={key}
                        className={`qualification__data ${visible.has(key) ? 'qualification__data--visible' : ''}`}
                        style={{ '--i': idx } as React.CSSProperties & { '--i': number }}
                    >
                        {alignRight ? (
                            <>
                                <div></div>
                                {dotLine}
                                {content}
                            </>
                        ) : (
                            <>
                                {content}
                                {dotLine}
                            </>
                        )}
                    </div>
                );
            })}
        </div>
    );

    const renderExperience = () => (
        <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
            {experienceData.map((item, idx) => {
                const key = `exp-${idx}`;
                const alignRight = idx % 2 === 1;
                const content = (
                    <div className="qualification__content-item">
                        <h3 className="qualification__title">{item.title}</h3>
                        <span className="qualification__subtitle">
                            {item.items.map((line, lineIdx) => (
                                <span key={lineIdx}>
                                    - {line}
                                    <br />
                                </span>
                            ))}
                        </span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i> {item.date}
                        </div>
                    </div>
                );
                const dotLine = (
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                );

                return (
                    <div
                        key={key}
                        data-key={key}
                        className={`qualification__data ${visible.has(key) ? 'qualification__data--visible' : ''}`}
                        style={{ '--i': idx } as React.CSSProperties & { '--i': number }}
                    >
                        {alignRight ? (
                            <>
                                <div></div>
                                {dotLine}
                                {content}
                            </>
                        ) : (
                            <>
                                {content}
                                {dotLine}
                            </>
                        )}
                    </div>
                );
            })}
        </div>
    );

    return (
        <section className='qualification section' id='qualification'>
            <h2 className='section__title'>{t('qualification.title')}</h2>
            <span className="section__subtitle">{t('qualification.subtitle')}</span>

            <div className="qualification__container container" ref={containerRef}>
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i> {t('qualification.tabs.education')}
                    </div>

                    <div className={toggleState === 2 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i> {t('qualification.tabs.experience')}
                    </div>
                </div>

                <div className="qualification__section">
                    {renderEducation()}
                </div>

                <div className="qualification__section">
                    {renderExperience()}
                </div>
            </div>
        </section>
    )
}

export default Qualification