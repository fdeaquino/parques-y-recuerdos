import React, { useRef, useEffect } from 'react';
// import { useActionData } from 'react-router-dom';
import estesElk from '../../assets/images/colorado/estes-elk.webp';
import estesPicnic from '../../assets/images/colorado/estes-picnic.webp';
import estesValleyTrail1 from '../../assets/images/colorado/estes-valley-trail1.webp';
import estesValleyTrail2 from '../../assets/images/colorado/estes-valley-trail2.webp';
import rockiesFirstTime1 from '../../assets/images/colorado/rockies-first-time-1.webp';
import rockiesFirstTime2 from '../../assets/images/colorado/rockies-first-time-2.webp';
import rockiesPine from '../../assets/images/colorado/rockies-pine.webp';
import rockiesPuppy from '../../assets/images/colorado/rockies-puppy.webp';
import rockiesRoss from '../../assets/images/colorado/rockies-ross.webp';
import rockiesSunset from '../../assets/images/colorado/rockies-sunset.webp';
import mesaVerde1 from '../../assets/images/colorado/mesa-verde-1.webp';
import mesaVerde2 from '../../assets/images/colorado/mesa-verde-2.webp';
import mesaVerde3 from '../../assets/images/colorado/mesa-verde-3.webp';
import mesaVerde4 from '../../assets/images/colorado/mesa-verde-4.webp';
import mesaVerde5 from '../../assets/images/colorado/mesa-verde-5.webp';
import mesaVerde6 from '../../assets/images/colorado/mesa-verde-6.webp';
import mesaVerde7 from '../../assets/images/colorado/mesa-verde-7.webp';
import mesaVerde8 from '../../assets/images/colorado/mesa-verde-8.webp';
import mesaVerde9 from '../../assets/images/colorado/mesa-verde-9.webp';
import mesaVerde10 from '../../assets/images/colorado/mesa-verde-10.webp';
import mesaVerde11 from '../../assets/images/colorado/mesa-verde-11.webp';
import mesaVerdeTogether from '../../assets/images/colorado/mesa-verde-ross-fidel.webp';
import mesaVerdeRoss from '../../assets/images/colorado/mesa-verde-ross.webp';
import gotgSign from '../../assets/images/colorado/gotg-sign.webp';
import gotgTogether from '../../assets/images/colorado/gotg-together.webp';
import gotgFidel from '../../assets/images/colorado/gtog-fidel.webp';
import gotg1 from '../../assets/images/colorado/gotg-1.webp';
import gotg2 from '../../assets/images/colorado/gotg-2.webp';
import gotg3 from '../../assets/images/colorado/gotg-3.webp';
import gotg4 from '../../assets/images/colorado/gotg-4.webp';
import gotg5 from '../../assets/images/colorado/gotg-5.webp';
import redRocks1 from '../../assets/images/colorado/redRocks1.webp';
import redRocks2 from '../../assets/images/colorado/redRocks2.webp';
import redRocks3 from '../../assets/images/colorado/redRocks3.webp';
import redRocks4 from '../../assets/images/colorado/redRocks4.webp';
import redRocks5 from '../../assets/images/colorado/redRocks5.webp';
import redRocks6 from '../../assets/images/colorado/redRocks6.webp';
import redRocks7 from '../../assets/images/colorado/redRocks7.webp';
import redRocks8 from '../../assets/images/colorado/redRocks8.webp';
import redRocks9 from '../../assets/images/colorado/redRocks9.webp';
import redRocks10 from '../../assets/images/colorado/redRocks10.webp';
import redRocks11 from '../../assets/images/colorado/redRocks11.webp';
import redRocks12 from '../../assets/images/colorado/redRocks12.webp';
import redRocks13 from '../../assets/images/colorado/redRocks13.webp';
import redRocks14 from '../../assets/images/colorado/redRocks14.webp';



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
            { threshold: 0 }
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

        const redRocksObserver = new IntersectionObserver(
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
                <h4 className='intro-subtitle park-title'>Rocky Mountains National Park</h4>
                <p className='intro-paragraph'>Some content I want to share about the park.</p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${rockiesFirstTime2})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${rockiesFirstTime1})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${rockiesSunset})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${estesPicnic})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${estesValleyTrail1})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${estesValleyTrail2})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${estesElk})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${rockiesPine})` }}></div>
                    </div>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${rockiesRoss})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${rockiesPuppy})` }}></div>
                    </div>
                </div>

            </div>
            <div className='park-section bg-light p-3 m-3' ref={mesaVerdeRef}>
                <h4 className='intro-subtitle park-title'>Mesa Verde National Park</h4>
                <p className='intro-paragraph'>Some content I want to share about the park and about my hiking experience.</p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mesaVerdeTogether})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mesaVerde1})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mesaVerde2})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mesaVerde3})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mesaVerde4})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mesaVerde5})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mesaVerde6})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mesaVerde7})` }}></div>
                    </div>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mesaVerde8})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mesaVerde9})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mesaVerde10})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mesaVerde11})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mesaVerdeRoss})` }}></div>
                    </div>
                </div>
            </div>
            <div className='park-section bg-light p-3 m-3' ref={gardenOfTheGodsRef}>
                <h4 className='intro-subtitle park-title'>Garden of the Gods</h4>
                <p className='intro-paragraph'>Some content I want to share about the park and about my hiking experience.</p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${gotgSign})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${gotg1})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${gotg2})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${gotgTogether})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${gotg3})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${gotgFidel})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${gotg4})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${gotg5})` }}></div>
                    </div>

                </div>
            </div>
            <div className='park-section last-park bg-light p-3 m-3' ref={redRocksRef}>
                <h4 className='intro-subtitle park-title'>Red Rocks Ampitheatre and Park</h4>
                <p className='intro-paragraph'>Some content I want to share about the park and about my hiking experience.</p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${redRocks1})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${redRocks2})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${redRocks3})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${redRocks4})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${redRocks5})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${redRocks6})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${redRocks7})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${redRocks8})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${redRocks9})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${redRocks10})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${redRocks11})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${redRocks12})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${redRocks13})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${redRocks14})` }}></div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ColoradoContent;
