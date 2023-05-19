import React, { useRef, useEffect } from 'react';

function UtahContent({ className, setActiveState }) {
    const utahRef = useRef();
    const archesRef = useRef();
    const zionRef = useRef();
    const bryceCanyonRef = useRef();



    // TODO: 1. Add more refs for other parks if any


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#utah");
                    setActiveState("utah")
                }
            },
            { threshold: 0.02 }
        );
        const archesObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#arches");
                    setActiveState("arches")
                }
            },
            { threshold: 0.02 }
        );
        const zionObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#zion");
                    setActiveState("zion")
                }
            },
            { threshold: 0.02 }
        );
        const bryceCanyonObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#bryceCanyon");
                    setActiveState("bryceCanyon")
                }
            },
            { threshold: 0.02 }
        );

        // TODO: 2. Add observers for other parks if any


        const currentUtahRef = utahRef.current;
        const currentArchesRef = archesRef.current;
        const currentZionRef = zionRef.current;
        const currentBryceCanyonRef = bryceCanyonRef.current;


        // TODO: 3. Add const variable above


        if (currentUtahRef) {
            observer.observe(currentUtahRef);
        }
        if (currentArchesRef) {
            archesObserver.observe(currentArchesRef);
        }
        if (currentZionRef) {
            zionObserver.observe(currentZionRef);
        }
        if (currentBryceCanyonRef) {
            bryceCanyonObserver.observe(currentBryceCanyonRef);
        }
        // TODO: 4. Add if statement to observe ref for new parks if any


        return () => {
            if (currentUtahRef) {
                observer.unobserve(currentUtahRef);
            }
            if (currentArchesRef) {
                archesObserver.unobserve(currentArchesRef);
            }
            if (currentZionRef) {
                zionObserver.unobserve(currentZionRef);
            }
            if (currentBryceCanyonRef) {
                bryceCanyonObserver.unobserve(currentBryceCanyonRef);
            }
            // TODO: 5. Add if statement to unobserve refs for new parks if any

        };
    }, [setActiveState]);

    return (
        <section className={`${className}`} id="utah" ref={utahRef}>
            <div className='state-section bg-light p-3 m-3'>
                <h3 className='intro-subtitle'>UTAH</h3>
                <p className='intro-paragraph'>(Paragraph about the state: Recognize native lands, give my favorite history, talk about how it makes me feel. Talk about cities/towns, and places I've been to, or notable places. Try to keep it short.) ____________ Kombucha JOMO pinterest gorpcore ramps ennui, wolf cardigan pitchfork raw denim bodega boys distillery. Meh glossier shabby chic poke semiotics, sriracha single-origin coffee stumptown. Forage DIY brunch etsy. Lomo venmo squid swag lo-fi vaporware paleo chia everyday carry letterpress. Hell of polaroid meh kale chips jawn, leggings blog shabby chic skateboard offal poutine church-key.</p>
            </div>
            <div className='park-section bg-light p-3 m-3' ref={archesRef}>
                <h4 className='intro-subtitle park-title'>Arches National Park</h4>
                <p className='intro-paragraph'>Some content I want to share about the park.</p>
                {/* Grid and photos go here */}

            </div>
            <div className='park-section bg-light p-3 m-3' ref={zionRef}>
                <h4 className='intro-subtitle park-title'>Zion National Park</h4>
                <p className='intro-paragraph'>Some content I want to share about the park and about my hiking experience.</p>
                {/* Grid and photos go here */}
            </div>
            <div className='park-section bg-light p-3 m-3' ref={bryceCanyonRef}>
                <h4 className='intro-subtitle park-title'>Bryce Canyon National Park</h4>
                <p className='intro-paragraph'>Some content I want to share about the park and about my hiking experience.</p>
                {/* Grid and photos go here */}
            </div>
        </section>
    );
}

export default UtahContent;
