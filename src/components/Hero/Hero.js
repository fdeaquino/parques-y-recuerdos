import React, { useRef, useEffect } from 'react';


function Hero({ className, setActiveState }) {
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#welcome");
                    setActiveState("welcome");  
                }
            },
            { threshold: 0.02 }
        );

        const currentRef = ref.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [setActiveState]);
    return (
        <section className={`${className} hero-section bg-light p-3 m-1`} ref={ref}>
            <h1 className='intro-title'>
                Parques y Recuerdos:
            </h1>
            <h2 className='intro-subtitle'>
                Bilingual Reflections on Park Adventures
            </h2>
            <p className='intro-paragraph'>
                Como beneficiario de DACA, I've been limited to travel within the U.S., pero encontré alegría explorando local, state, y national parks. My husband and hiking partner, Ross, y yo hemos encontrado una conexión profunda con la naturaleza, nurturing our respect for the Earth. The physical and psychological benefits of hiking son enormes, bringing us closer to understanding la diversidad cultural y la rica historia de los pueblos originarios whose lands we tread upon.  In every breath of fresh air, estamos agradecidos por la oportunidad de descubrir, aprender y crecer.
            </p>
        </section>
    )
}

export default Hero;