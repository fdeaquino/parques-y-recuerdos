import React, { useRef, useEffect } from 'react';

import chacoCanyon1 from '../../assets/images/newmexico/chaco-canyon-1.webp';
import chacoCanyon2 from '../../assets/images/newmexico/chaco-canyon-2.webp';
import chacoCanyon3 from '../../assets/images/newmexico/chaco-canyon-3.webp';
import chacoCanyon4 from '../../assets/images/newmexico/chaco-canyon-4.webp';
import chacoCanyon5 from '../../assets/images/newmexico/chaco-canyon-5.webp';
import chacoCanyon6 from '../../assets/images/newmexico/chaco-canyon-6.webp';
import chacoCanyon7 from '../../assets/images/newmexico/chaco-canyon-7.webp';
import chacoCanyon8 from '../../assets/images/newmexico/chaco-canyon-8.webp';
import chacoCanyon9 from '../../assets/images/newmexico/chaco-canyon-9.webp';
import chacoCanyonGuide from '../../assets/images/newmexico/chaco-canyon-guide.webp';
import chacoCanyonRoss from '../../assets/images/newmexico/chaco-canyon-ross.webp';
import chacoCanyonSign from '../../assets/images/newmexico/chaco-canyon-sign.webp';
import chacoCanyonSunset from '../../assets/images/newmexico/chaco-canyon-sunset.webp';
import chacoCanyonWindow from '../../assets/images/newmexico/chaco-canyon-window.webp';

import whiteSandsFidel from '../../assets/images/newmexico/white-sands-fidel.webp';
import whiteSandsArt from '../../assets/images/newmexico/white-sands-artist-depiction.webp';
import whiteSandsFootprint from '../../assets/images/newmexico/white-sands-footprint.webp';
import whiteSandsSign from '../../assets/images/newmexico/white-sands-sign.webp';
import whiteSands1 from '../../assets/images/newmexico/white-sands1.webp';
import whiteSands2 from '../../assets/images/newmexico/white-sands2.webp';
import whiteSands3 from '../../assets/images/newmexico/white-sands3.webp';
import whiteSands4 from '../../assets/images/newmexico/white-sands4.webp';
import whiteSands5 from '../../assets/images/newmexico/white-sands5.webp';
import whiteSands6 from '../../assets/images/newmexico/white-sands6.webp';
import whiteSands7 from '../../assets/images/newmexico/white-sands7.webp';


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
            { threshold: 0 }
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
                <p className='intro-paragraph'>Known as "The Land of Enchantment," New Mexico es conocido for its seemingly endless blue skies, landscapes vibrantly painted, y su cultura única. The history de este terreno está marcado by the Apache, Navajo, and Pueblo tribes. The geologic wonder, el Rio Grande Rift, ha modelado the terrain, providing landscapes that take your breath away. I've had the joy of visiting dos de los parques nacionales here, pero my heart anhela to see more of the natural beauty este estado ofrece.</p>
            </div>
            <div className='park-section bg-light p-3 m-3' ref={whiteSandsRef}>
                <h4 className='intro-subtitle park-title'>White Sands National Park</h4>
                <p className='intro-paragraph'>Some content I want to share about the park.</p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${whiteSandsSign})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${whiteSandsFidel})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${whiteSands1})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${whiteSands2})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${whiteSands3})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${whiteSands4})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${whiteSands5})` }}></div>
                    </div>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${whiteSands6})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${whiteSands7})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${whiteSandsArt})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${whiteSandsFootprint})` }}></div>

                    </div>

                </div>
            </div>

            <div className='park-section bg-light p-3 m-3' ref={chacoCultureRef}>
                <h4 className='intro-subtitle park-title'>Chaco Culture National Historic Park</h4>
                <p className='intro-paragraph'>Some content I want to share about the park and about my hiking experience.</p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${chacoCanyonSign})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${chacoCanyonRoss})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${chacoCanyonGuide})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${chacoCanyon1})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${chacoCanyon2})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${chacoCanyon3})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${chacoCanyon4})` }}></div>
                    </div>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${chacoCanyon5})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${chacoCanyon6})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${chacoCanyon7})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${chacoCanyon8})` }}></div>

                    </div>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${chacoCanyonWindow})` }}></div>

                    </div><div className='box box--2x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${chacoCanyon9})` }}></div>

                    </div><div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${chacoCanyonSunset})` }}></div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default NewMexicoContent;
