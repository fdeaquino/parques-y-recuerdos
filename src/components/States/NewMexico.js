import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();

    // Setting up references for each section
    const newmexicoRef = useRef();
    const whiteSandsRef = useRef();
    const chacoCultureRef = useRef();
    // TODO: 1. Add more refs for other parks if any

    // Initializing IntersectionObservers to watch when each section intersects with the viewport
    useEffect(() => {
        // General observer for the New Mexico state section
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#newmexico");
                    setActiveState("newmexico")
                }
            },
            { threshold: 0 }
        );
        // Below are specific observers for each park
        const whiteSandsObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#whiteSands");
                    setActiveState("whiteSands")
                }
            },
            { threshold: 0.01 }
        );

        const chacoCultureObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#chacoCulture");
                    setActiveState("chacoCulture")
                }
            },
            { threshold: 0.01 }
        );
        // TODO: 2. Add observers for other parks if any

        // Capturing current refs for cleanup later
        const currentNewMexicoRef = newmexicoRef.current;
        const currentWhiteSandsRef = whiteSandsRef.current;
        const currentChacoCultureRef = chacoCultureRef.current;
        // TODO: 3. Add const variable above

        // Begin observing each section
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

        // Unobserve sections when component unmounts
        return () => {
            // If a reference for the specified section exists, stop observing it
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
            <div className='state-section bg-light p-3'>
                <h3 className='intro-subtitle'>
                    {t('newmexico.stateName')}
                </h3>
                <p className='intro-paragraph'>
                    {t('newmexico.introForState')}
                </p>
            </div>
            <div className='park-section bg-light p-3' ref={whiteSandsRef}>
                <h4 className='intro-subtitle park-title'>
                    {t('newmexico.parkNameForWhiteSands')}
                </h4>
                <p className='intro-paragraph'>
                    {t('newmexico.introForWhiteSands')}
                </p>
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

            <div className='park-section bg-light p-3' ref={chacoCultureRef}>
                <h4 className='intro-subtitle park-title'>
                    {t('newmexico.parkNameForChacoCanyon')}
                </h4>
                <p className='intro-paragraph'>
                    {t('newmexico.introForChacoCanyon')}
                </p>
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
