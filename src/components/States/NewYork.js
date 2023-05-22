import React, { useRef, useEffect } from 'react';

function NewYorkContent({ className, setActiveState }) {
    const newyorkRef = useRef();
    const highlineNYCRef = useRef();
    const centralParkRef = useRef();
    const mountArabRef = useRef();
    const cantonIslandParkRef = useRef();
    const otterCreekPreserveRef = useRef();


    // TODO: 1. Add more refs for other parks if any

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#newyork");
                    setActiveState("newyork")
                }
            },
            { threshold: 0 }
        );
        
        const highlineNYCObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#highlineNYC");
                    setActiveState("highlineNYC")
                }
            },
            { threshold: 0.02 }
        );

        const centralParkObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#centralPark");
                    setActiveState("centralPark")
                }
            },
            { threshold: 0.02 }
        );

        const mountArabObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#mountArab");
                    setActiveState("mountArab")
                }
            },
            { threshold: 0.02 }
        );

        const cantonIslandParkObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#cantonIslandPark");
                    setActiveState("cantonIslandPark")
                }
            },
            { threshold: 0.02 }
        );

        const otterCreekPreserveObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#otterCreekPreserve");
                    setActiveState("otterCreekPreserve")
                }
            },
            { threshold: 0.02 }
        );

        // TODO: 2. Add observers for other parks if any


        const currentNewYorkRef = newyorkRef.current;
        const currentHighlineNYCRef = highlineNYCRef.current;
        const currentCentralParkRef = centralParkRef.current;
        const currentMountArabRef = mountArabRef.current;
        const currentCantonIslandParkRef = cantonIslandParkRef.current;
        const currentOtterCreekPreserveRef = otterCreekPreserveRef.current;





        // TODO: 3. Add const variable above


        if (currentNewYorkRef) {
            observer.observe(currentNewYorkRef);
        }
        if (currentHighlineNYCRef) {
            highlineNYCObserver.observe(currentHighlineNYCRef)
        }
        if (currentCentralParkRef) {
            centralParkObserver.observe(currentCentralParkRef)
        }
        if (currentMountArabRef) {
            mountArabObserver.observe(currentMountArabRef)
        }
        if (currentCantonIslandParkRef) {
            cantonIslandParkObserver.observe(currentCantonIslandParkRef)
        }
        if (currentOtterCreekPreserveRef) {
            otterCreekPreserveObserver.observe(currentOtterCreekPreserveRef)
        }
        // TODO: 4. Add if statement to observe ref for new parks if any


        return () => {
            if (currentNewYorkRef) {
                observer.unobserve(currentNewYorkRef);
            }
            if (currentHighlineNYCRef) {
                highlineNYCObserver.unobserve(currentNewYorkRef);
            }
            if (currentCentralParkRef) {
                centralParkObserver.unobserve(currentCentralParkRef)
            }
            if (currentMountArabRef) {
                mountArabObserver.unobserve(currentMountArabRef)
            }
            if (currentCantonIslandParkRef) {
                cantonIslandParkObserver.unobserve(currentCantonIslandParkRef)
            }
            if (currentOtterCreekPreserveRef) {
                otterCreekPreserveObserver.unobserve(currentOtterCreekPreserveRef)
            }
            // TODO: 5. Add if statement to unobserve refs for new parks if any

        };
    }, [setActiveState]);

    return (
        <section className={`${className}`} id="newyork" ref={newyorkRef}>
            <div className='state-section bg-light p-3 m-3'>
                <h3 className='intro-subtitle'>NEW YORK</h3>
                <p className='intro-paragraph'>(Paragraph about the state: Recognize native lands, give my favorite history, talk about how it makes me feel. Talk about cities/towns, and places I've been to, or notable places. Try to keep it short.) ____________ Kombucha JOMO pinterest gorpcore ramps ennui, wolf cardigan pitchfork raw denim bodega boys distillery. Meh glossier shabby chic poke semiotics, sriracha single-origin coffee stumptown. Forage DIY brunch etsy. Lomo venmo squid swag lo-fi vaporware paleo chia everyday carry letterpress. Hell of polaroid meh kale chips jawn, leggings blog shabby chic skateboard offal poutine church-key.</p>
            </div>
            <div className='park-section bg-light p-3 m-3' ref={highlineNYCRef}>
                <h4 className='intro-subtitle park-title'>High Line Park</h4>
                <p className='intro-paragraph'>Some content I want to share about the park.</p>
                {/* Grid and photos go here */}

            </div>
            <div className='park-section last-park bg-light p-3 m-3 ' ref={centralParkRef}>
                <h4 className='intro-subtitle park-title'>Central Park</h4>
                <p className='intro-paragraph'>Some content I want to share about the park and about my hiking experience.</p>
                {/* Grid and photos go here */}
            </div>
            <div className='park-section last-park bg-light p-3 m-3 ' ref={mountArabRef}>
                <h4 className='intro-subtitle park-title'>Mount Arab</h4>
                <p className='intro-paragraph'>Some content I want to share about the park and about my hiking experience.</p>
                {/* Grid and photos go here */}
            </div>
            <div className='park-section last-park bg-light p-3 m-3 ' ref={cantonIslandParkRef}>
                <h4 className='intro-subtitle park-title'>Canton Island Park</h4>
                <p className='intro-paragraph'>Some content I want to share about the park and about my hiking experience.</p>
                {/* Grid and photos go here */}
            </div>
            <div className='park-section last-park bg-light p-3 m-3 ' ref={otterCreekPreserveRef}>
                <h4 className='intro-subtitle park-title'>Otter Creek Preserve</h4>
                <p className='intro-paragraph'>Some content I want to share about the park and about my hiking experience.</p>
                {/* Grid and photos go here */}
            </div>
        </section>
    );
}

export default NewYorkContent;
