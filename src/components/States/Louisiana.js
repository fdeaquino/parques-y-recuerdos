import React, { useRef, useEffect } from 'react';

function LouisianaContent({ className, setActiveState }) {
    const louisianaRef = useRef();
    const povertyPointRef = useRef();
    // TODO: 1. Add more refs for other parks if any


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#louisiana");
                    setActiveState("louisiana")
                }
            },
            { threshold: 0.02 }
        );

        const povertyPointObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#povertyPoint");
                    setActiveState("povertyPoint")
                }
            },
            { threshold: 0.02 }
        );
        // TODO: 2. Add observers for other parks if any


        const currentLouisianaRef = louisianaRef.current;
        const currentPovertyPointRef = povertyPointRef.current;

        // TODO: 3. Add const variable above


        if (currentLouisianaRef) {
            observer.observe(currentLouisianaRef);
        }
        if (currentPovertyPointRef) {
            povertyPointObserver.observe(currentPovertyPointRef);
        }
        // TODO: 4. Add if statement to observe ref for new parks if any


        return () => {
            if (currentLouisianaRef) {
                observer.unobserve(currentLouisianaRef);
            }
            if (currentPovertyPointRef) {
                povertyPointObserver.unobserve(currentPovertyPointRef);
            }

            // TODO: 5. Add if statement to unobserve refs for new parks if any

        };
    }, [setActiveState]);

    return (
        <section className={`${className}`} id="louisiana" ref={louisianaRef}>
            <div className='state-section bg-light p-3 m-3'>
                <h3 className='intro-subtitle'>LOUISIANA</h3>
                <p className='intro-paragraph'>(Paragraph about the state: Recognize native lands, give my favorite history, talk about how it makes me feel. Talk about cities/towns, and places I've been to, or notable places. Try to keep it short.) ____________ Kombucha JOMO pinterest gorpcore ramps ennui, wolf cardigan pitchfork raw denim bodega boys distillery. Meh glossier shabby chic poke semiotics, sriracha single-origin coffee stumptown. Forage DIY brunch etsy. Lomo venmo squid swag lo-fi vaporware paleo chia everyday carry letterpress. Hell of polaroid meh kale chips jawn, leggings blog shabby chic skateboard offal poutine church-key.</p>
            </div>
            <div className='park-section bg-light p-3 m-3' ref={povertyPointRef}>
                <h4 className='intro-subtitle park-title'>Poverty Point World Heritage Site</h4>
                <p className='intro-paragraph'>Some content I want to share about the park.</p>
                {/* Grid and photos go here */}

            </div>
            <div className='park-section last-park bg-light p-3 m-3 '>
                <h4 className='intro-subtitle park-title'>Park 2</h4>
                <p className='intro-paragraph'>Some content I want to share about the park and about my hiking experience.</p>
                {/* Grid and photos go here */}
            </div>
        </section>
    );
}

export default LouisianaContent;
