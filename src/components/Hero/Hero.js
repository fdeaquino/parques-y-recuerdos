import React, { useRef, useEffect } from 'react';

import { useTranslation } from 'react-i18next';


function Hero({ className, setActiveState }) {

    const { t } = useTranslation();


    // Ref for the DOM node of this component
    const ref = useRef();

    // this useEffect handles side effects post render
    // sets up an intersection observer that listens for when the Hero section of the page enters the viewport
    // url will update and as well as the active state of the application
    useEffect(() => {

        // Intersection Observer - detects when hero section enters viewport
        const observer = new IntersectionObserver(
            ([entry]) => {

                // On intersection - update URL to "#welcome" and active state to 'welcome'
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#welcome");
                    setActiveState("welcome");
                }
            },

            // Observer threshold set to 0.02, triggers callback when 2% of the element is visible
            { threshold: 0.02 }
        );

        // Cleanup and store current ref
        const currentRef = ref.current;

        // If ref exists, observer starts observation
        if (currentRef) {
            observer.observe(currentRef);
        }

        // Cleanup function - Stop observer if ref exists
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [setActiveState]);

    // Renders Hero component 
    return (
        <section className={`${className} hero-section bg-light p-3`} ref={ref}>
            <h1 className='intro-title'>
                {t('hero.introTitle')}
            </h1>
            <h2 className='intro-subtitle'>
                {t('hero.introSubtitle')}
            </h2>
            <p className='intro-paragraph'>
                {t('hero.introParagraph')}
            </p>
        </section>
    )
}

export default Hero;