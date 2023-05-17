import React, { useRef, useEffect } from 'react';
// import { useActionData } from 'react-router-dom';

function ColoradoContent({ className, setActiveState }) {
    const coloradoRef = useRef();
    const rockyMountainsRef = useRef();
    const mesaVerdeRef = useRef();
    const gardenOfTheGodsRef = useRef();
    const redRocksRef = useRef();

    // TODO: 1. Add more refs for other parks if any


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#colorado");
                    setActiveState("colorado")
                }
            },
            { threshold: 0.02 }
        );
        
        const rockyMountainsObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#rockyMountains");
                    setActiveState("rockyMountains")
                }
            },
            { threshold: 0.02 }
        );

        const mesaVerdeObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#mesaVerde");
                    setActiveState("mesaVerde")
                }
            },
            { threshold: 0.02 }
        );

        const gardenOfTheGodsObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#gardenOfTheGods");
                    setActiveState("gardenOfTheGods")
                }
            },
            { threshold: 0.02 }
        );

        const redRocksObserver = new IntersectionObserver (
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, '#redRocks');
                    setActiveState("redRocks")
                }
            },
            { threshold: 0.02 }
        );
        

        // TODO: 2. Add observers for other parks if any


        const currentColoradoRef = coloradoRef.current;
        const currentRockyMountainsRef = rockyMountainsRef.current;
        const currentMesaVerdeRef = mesaVerdeRef.current;
        const currentGardenOfTheGodsRef = gardenOfTheGodsRef.current;
        const currentRedRocksRef = redRocksRef.current;

        // TODO: 3. Add const variable above


        if (currentColoradoRef) {
            observer.observe(currentColoradoRef);
        }
        if (currentColoradoRef) {
            rockyMountainsObserver.observe(currentRockyMountainsRef);
        }
        if (currentMesaVerdeRef) {
            mesaVerdeObserver.observe(currentMesaVerdeRef)
        }
        if (currentGardenOfTheGodsRef) {
            gardenOfTheGodsObserver.observe(currentGardenOfTheGodsRef);
        }
        if (currentRedRocksRef) {
            redRocksObserver.observe(currentRedRocksRef);
        }

        // TODO: 4. Add if statement to observe ref for new parks if any


        return () => {
            if (currentColoradoRef) {
                observer.unobserve(currentColoradoRef);
            }
            if (currentColoradoRef) {
                rockyMountainsObserver.unobserve(currentRockyMountainsRef);
            }
            if (currentMesaVerdeRef) {
                observer.unobserve(currentMesaVerdeRef);
            }
            if (currentGardenOfTheGodsRef) {
                observer.unobserve(currentGardenOfTheGodsRef);
            }
            if (currentRedRocksRef) {
                observer.unobserve(currentRedRocksRef);
            }

            // TODO: 5. Add if statement to unobserve refs for new parks if any

        };
    }, [setActiveState]);

    return (
        <section className={`${className}`} id="colorado" ref={coloradoRef}>
            <div className='state-section bg-light p-3 m-3'>
                <h3 className='intro-subtitle'>COLORADO</h3>
                <p className='intro-paragraph'>(Paragraph about the state: Recognize native lands, give my favorite history, talk about how it makes me feel. Talk about cities/towns, and places I've been to, or notable places. Try to keep it short.) ____________ Kombucha JOMO pinterest gorpcore ramps ennui, wolf cardigan pitchfork raw denim bodega boys distillery. Meh glossier shabby chic poke semiotics, sriracha single-origin coffee stumptown. Forage DIY brunch etsy. Lomo venmo squid swag lo-fi vaporware paleo chia everyday carry letterpress. Hell of polaroid meh kale chips jawn, leggings blog shabby chic skateboard offal poutine church-key.</p>
            </div>
            <div className='park-section bg-light p-3 m-3' ref={rockyMountainsRef} >
                <h4 className='intro-subtitle park-title'>Rocky Mountains N.P.</h4>
                <p className='intro-paragraph'>Some content I want to share about the park.</p>
                {/* Grid and photos go here */}

            </div>
            <div className='park-section bg-light p-3 m-3' ref={mesaVerdeRef}>
                <h4 className='intro-subtitle park-title'>Mesa Verde N.P.</h4>
                <p className='intro-paragraph'>Some content I want to share about the park and about my hiking experience.</p>
                {/* Grid and photos go here */}
            </div>
            <div className='park-section bg-light p-3 m-3' ref={gardenOfTheGodsRef}>
                <h4 className='intro-subtitle park-title'>Garden of the Gods</h4>
                <p className='intro-paragraph'>Some content I want to share about the park and about my hiking experience.</p>
                {/* Grid and photos go here */}
            </div>
            <div className='park-section last-park bg-light p-3 m-3' ref={redRocksRef}>
                <h4 className='intro-subtitle park-title'>Red Rocks Ampitheatre and Park</h4>
                <p className='intro-paragraph'>Some content I want to share about the park and about my hiking experience.</p>
                {/* Grid and photos go here */}
            </div>
        </section>
    );
}

export default ColoradoContent;
