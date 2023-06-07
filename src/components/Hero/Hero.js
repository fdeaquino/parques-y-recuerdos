import React, { useRef, useEffect } from 'react';


function Hero({ className, setActiveState }) {

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
                Parques y Recuerdos:
            </h1>
            <h2 className='intro-subtitle'>
                Spanglish Reflections on Park Adventures
            </h2>
            <p className='intro-paragraph'>
                Como beneficiario de DACA, I've been limited to travel within the U.S., pero encontré alegría explorando local, state, y national parks. My husband and hiking partner, Ross, y yo hemos encontrado una conexión profunda con la naturaleza, nurturing our respect for the Earth. The physical and psychological benefits of hiking son enormes, bringing us closer to understanding la diversidad cultural y la rica historia de los pueblos originarios whose lands we tread upon.  In every breath of fresh air, estamos agradecidos por la oportunidad de descubrir, aprender y crecer.
            </p>
        </section>
    )
}

export default Hero;