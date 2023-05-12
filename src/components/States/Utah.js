import React, { useRef, useEffect } from 'react';

function UtahContent({ className }) {
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#utah");
                }
            },
            { threshold: 0.1 }
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
    }, []);

    return (
        <section className={`bg-light p-3 m-3 ${className}`} id="utah" ref={ref}>
            <h3 className='intro-subtitle'>UTAH Title Goes Here</h3>
            <p className='intro-paragraph'>Kombucha JOMO pinterest gorpcore ramps ennui, wolf cardigan pitchfork raw denim bodega boys distillery. Meh glossier shabby chic poke semiotics, sriracha single-origin coffee stumptown. Forage DIY brunch etsy. Lomo venmo squid swag lo-fi vaporware paleo chia everyday carry letterpress. Hell of polaroid meh kale chips jawn, leggings blog shabby chic skateboard offal poutine church-key.
            </p>
            <img alt='' src='https://placehold.co/300'></img>
        </section>
    );
}

export default UtahContent;
