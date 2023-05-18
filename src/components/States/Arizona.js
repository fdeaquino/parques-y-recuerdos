import React, { useRef, useEffect } from 'react';

function ArizonaContent({ className, setActiveState }) {
    const arizonaRef = useRef();
    const sedonaRef = useRef();
    const saguaroRef = useRef();
    const horseshoeBendRef = useRef();

    // TODO: 1. Add more refs for other parks if any


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#arizona");
                    setActiveState("arizona")
                }
            },
            { threshold: 0.02 }
        );

        const sedonaObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#sedona");
                    setActiveState("sedona");
                }
            },
            { threshold: 0.02 }
        );
        const saguaroObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#saguaro");
                    setActiveState("saguaro");
                }
            },
            { threshold: 0.02 }
        );

        const horseshoeBendObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#horseshoeBend");
                    setActiveState("horseshoeBend");
                }
            },
            { threshold: 0.02 }
        );

        // TODO: 2. Add observers for other parks if any

        const currentArizonaRef = arizonaRef.current;
        const currentSedonaRef = sedonaRef.current;
        const currentSaguaroRef = saguaroRef.current;
        const currentHorseshoeBendRef = horseshoeBendRef.current;

        // TODO: 3. Add const variable above

        if (currentArizonaRef) {
            observer.observe(currentArizonaRef);
        }
        if (currentSedonaRef) {
            sedonaObserver.observe(currentSedonaRef);
        }
        if (currentSaguaroRef) {
            saguaroObserver.observe(currentSaguaroRef);
        }
        if (currentHorseshoeBendRef) {
            horseshoeBendObserver.observe(currentHorseshoeBendRef);
        }

        // TODO: 4. Add if statement to observe ref for new parks if any

        return () => {
            if (currentArizonaRef) {
                observer.unobserve(currentArizonaRef)
            }
            if (currentSedonaRef) {
                sedonaObserver.unobserve(currentSedonaRef)
            }
            if (currentSaguaroRef) {
                saguaroObserver.unobserve(currentSaguaroRef)
            }
            if (currentHorseshoeBendRef) {
                horseshoeBendObserver.unobserve(currentHorseshoeBendRef)
            }

            // TODO: 5. Add if statement to unobserve refs for new parks if any

        };

    }, [setActiveState]);

    return (
        <section className={`${className}`} id='arizona' ref={arizonaRef}>
            <div className='state-section bg-light p-3 m-3'>
                <h3 className='intro-subtitle'>ARIZONA</h3>
                <p className='intro-paragraph'>(Paragraph about the state: Recognize native lands, give my favorite history, talk about how it makes me feel. Talk about cities/towns, and places I've been to, or notable places. Try to keep it short.) ____________ Kombucha JOMO pinterest gorpcore ramps ennui, wolf cardigan pitchfork raw denim bodega boys distillery. Meh glossier shabby chic poke semiotics, sriracha single-origin coffee stumptown. Forage DIY brunch etsy. Lomo venmo squid swag lo-fi vaporware paleo chia everyday carry letterpress. Hell of polaroid meh kale chips jawn, leggings blog shabby chic skateboard offal poutine church-key.</p>
            </div>
            <div className='park-section bg-light p-3 m-3' ref={sedonaRef}>
                <h4 className='intro-subtitle park-title'>Sedona</h4>
                <p className='intro-paragraph'>Some content I want to share about the park.</p>
                {/* Grid and photos go here */}

            </div>
            <div className='park-section bg-light p-3 m-3' ref={saguaroRef}>
                <h4 className='intro-subtitle park-title'>Saguaro N.P.</h4>
                <p className='intro-paragraph'>Some content I want to share about the park.</p>
                {/* Grid and photos go here */}

            </div>
            <div className='park-section bg-light p-3 m-3' ref={horseshoeBendRef}>
                <h4 className='intro-subtitle park-title'>Horseshoe Bend</h4>
                <p className='intro-paragraph'>Some content I want to share about the park.</p>
                {/* Grid and photos go here */}

            </div>
        </section>
    );
}

export default ArizonaContent;