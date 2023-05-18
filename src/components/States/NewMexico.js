import React, { useRef, useEffect } from 'react';

function NewMexicoContent({ className, setActiveState }) {
    const newmexicoRef = useRef();
    const whiteSandsRef = useRef();
    const chacoCultureRef = useRef();

    // TODO: 1. Add more refs for other parks if any


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#newmexico");
                    setActiveState("newmexico")
                }
            },
            { threshold: 0.02 }
        );

        const whiteSandsObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#whiteSands");
                    setActiveState("whiteSands")
                }
            },
            { threshold: 0.02 }
        );

        const chacoCultureObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#chacoCulture");
                    setActiveState("chacoCulture")
                }
            },
            { threshold: 0.02 }
        );

        // TODO: 2. Add observers for other parks if any


        const currentNewMexicoRef = newmexicoRef.current;
        const currentWhiteSandsRef = whiteSandsRef.current;
        const currentChacoCultureRef = chacoCultureRef.current;

        // TODO: 3. Add const variable above


        if (currentNewMexicoRef) {
            observer.observe(currentNewMexicoRef);
        }
        if (currentWhiteSandsRef) {
            whiteSandsObserver.observe(currentWhiteSandsRef);
        }
        if (currentChacoCultureRef) {
            chacoCultureObserver.observe(currentChacoCultureRef);
        }

        // TODO: 4. Add if statement to observe ref for new parks if any


        return () => {
            if (currentNewMexicoRef) {
                observer.unobserve(currentNewMexicoRef);
            }
            if (currentWhiteSandsRef) {
                whiteSandsObserver.unobserve(currentWhiteSandsRef);
            }
            if (currentChacoCultureRef) {
                chacoCultureObserver.unobserve(currentChacoCultureRef);
            }

            // TODO: 5. Add if statement to unobserve refs for new parks if any

        };
    }, [setActiveState]);

    return (
        <section className={`${className}`} id="newmexico" ref={newmexicoRef}>
            <div className='state-section bg-light p-3 m-3'>
                <h3 className='intro-subtitle'>NEW MEXICO</h3>
                <p className='intro-paragraph'>(Paragraph about the state: Recognize native lands, give my favorite history, talk about how it makes me feel. Talk about cities/towns, and places I've been to, or notable places. Try to keep it short.) ____________ Kombucha JOMO pinterest gorpcore ramps ennui, wolf cardigan pitchfork raw denim bodega boys distillery. Meh glossier shabby chic poke semiotics, sriracha single-origin coffee stumptown. Forage DIY brunch etsy. Lomo venmo squid swag lo-fi vaporware paleo chia everyday carry letterpress. Hell of polaroid meh kale chips jawn, leggings blog shabby chic skateboard offal poutine church-key.</p>
            </div>
            <div className='park-section bg-light p-3 m-3' ref={whiteSandsRef}>
                <h4 className='intro-subtitle park-title'>White Sands N.P.</h4>
                <p className='intro-paragraph'>Some content I want to share about the park.</p>
                {/* Grid and photos go here */}

            </div>
            <div className='park-section bg-light p-3 m-3' ref={chacoCultureRef}>
                <h4 className='intro-subtitle park-title'>Chaco Culture National Historic Park</h4>
                <p className='intro-paragraph'>Some content I want to share about the park and about my hiking experience.</p>
                {/* Grid and photos go here */}
            </div>
        </section>
    );
}

export default NewMexicoContent;
