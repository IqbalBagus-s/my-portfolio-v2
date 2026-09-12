import { useEffect, useRef, useState } from 'react';
import './qualification.css'

interface TimelineItem {
    title: string;
    subtitle: React.ReactNode;
    date: string;
    alignRight?: boolean;
}

const educationData: TimelineItem[] = [
    {
        title: "Universitas Pembangunan Nasional Veteran Jawa Timur",
        subtitle: "Graduated with a Bachelor's degree in Informatics Engineering in 2026.",
        date: "2022 - 2026",
    },
    {
        title: "SMAN 1 Magetan",
        subtitle: "Graduated from junior high school.",
        date: "2019 - 2022",
        alignRight: true,
    },
];

const experienceData: TimelineItem[] = [
    {
        title: "Website Developer At PT Asia Pramulia",
        subtitle: (
            <>
                - UI/UX Design: Created user-friendly designs tailored for non-technical users.<br />
                - Requirement Analysis: Conducted analysis of user needs for web applications.<br />
                - Modern Frameworks: Utilized the latest frameworks in development.<br />
                - Application Testing: Performed testing based on IEEE 829 standards.<br />
                - Local Hosting: Deployed applications on local servers using computer networks.<br />
            </>
        ),
        date: "Feb 2025 - Jun 2025",
    },
    {
        title: "Cloud Computing Graduate Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
        subtitle: (
            <>
                - Cloud Technology: Designing and managing solutions with GCP. <br />
                - Backend Development: Building scalable APIs. <br />
                - Machine Learning: Applying ML models to real use cases. <br />
                - Capstone Project: Combining cloud and ML in a final project. <br />
                - Soft Skills: Time management, problem-solving, teamwork.
            </>
        ),
        date: "Sep 2024 - Jan 2025",
        alignRight: true,
    },
];

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const [visible, setVisible] = useState<Set<string>>(new Set());
    const containerRef = useRef<HTMLDivElement>(null);

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
    }, [toggleState]);

    const renderTimeline = (data: TimelineItem[], tabKey: string) => (
        <div className={toggleState === (tabKey === 'edu' ? 1 : 2) ? "qualification__content qualification__content-active" : "qualification__content"}>
            {data.map((item, idx) => {
                const key = `${tabKey}-${idx}`;
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
                        {item.alignRight ? (
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
            <h2 className='section__title'>Qualification</h2>
            <span className="section__subtitle">My Personal Journey</span>

            <div className="qualification__container container" ref={containerRef}>
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>

                    <div className={toggleState === 2 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                </div>

                <div className="qualification__section">
                    {renderTimeline(educationData, 'edu')}
                </div>

                <div className="qualification__section">
                    {renderTimeline(experienceData, 'exp')}
                </div>
            </div>
        </section>
    )
}

export default Qualification