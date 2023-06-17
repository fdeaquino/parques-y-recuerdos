import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import highline1 from '../../assets/images/newyork/highline-1.webp';
import highline2 from '../../assets/images/newyork/highline-2.webp';
import highline3 from '../../assets/images/newyork/highline-3.webp';
import highline4 from '../../assets/images/newyork/highline-4.webp';
import highline5 from '../../assets/images/newyork/highline-5.webp';
import highline6 from '../../assets/images/newyork/highline-6.webp';
import highline7 from '../../assets/images/newyork/highline-7.webp';
import highline8 from '../../assets/images/newyork/highline-8.webp';
import highlineStatues from '../../assets/images/newyork/highline-statues.webp';
import highlineFidelReflection from '../../assets/images/newyork/highline-fidel-reflection.webp';
import highlineFidel from '../../assets/images/newyork/highline-fidel.webp';
import centralPark1 from '../../assets/images/newyork/central-park-1.webp';
import centralPark2 from '../../assets/images/newyork/central-park-2.webp';
import centralPark3 from '../../assets/images/newyork/central-park-3.webp';
import centralPark4 from '../../assets/images/newyork/central-park-4.webp';
import centralPark5 from '../../assets/images/newyork/central-park-5.webp';
import centralPark6 from '../../assets/images/newyork/central-park-6.webp';
import centralPark7 from '../../assets/images/newyork/central-park-7.webp';
import centralPark8 from '../../assets/images/newyork/central-park-8.webp';
import centralPark9 from '../../assets/images/newyork/central-park-9.webp';
import centralPark10 from '../../assets/images/newyork/central-park-10.webp';
import centralPark11 from '../../assets/images/newyork/central-park-11.webp';
import mountArabFidel from '../../assets/images/newyork/mtarab-fidel.webp';
import mountArabRoss from '../../assets/images/newyork/mtarab-ross.webp';
import mountArabTower from '../../assets/images/newyork/mtarab-tower.webp';
import mountArab1 from '../../assets/images/newyork/mtarab-1.webp';
import mountArab2 from '../../assets/images/newyork/mtarab-2.webp';
import mountArab3 from '../../assets/images/newyork/mtarab-3.webp';
import mountArab4 from '../../assets/images/newyork/mtarab-4.webp';
import mountArab5 from '../../assets/images/newyork/mtarab-5.webp';
import mountArab6 from '../../assets/images/newyork/mtarab-6.webp';
import mountArab7 from '../../assets/images/newyork/mtarab-7.webp';
import mountArab8 from '../../assets/images/newyork/mtarab-8.webp';
import cantonIslandPark1 from '../../assets/images/newyork/canton-island-park-1.webp';
import cantonIslandPark2 from '../../assets/images/newyork/canton-island-park-2.webp';
import cantonIslandPark3 from '../../assets/images/newyork/canton-island-park-3.webp';
import cantonIslandPark4 from '../../assets/images/newyork/canton-island-park-4.webp';
import otterCreekPreserve1 from '../../assets/images/newyork/otter-creek-1.webp';
import otterCreekPreserve2 from '../../assets/images/newyork/otter-creek-2.webp';
import otterCreekPreserve3 from '../../assets/images/newyork/otter-creek-3.webp';
import otterCreekPreserve4 from '../../assets/images/newyork/otter-creek-4.webp';
import otterCreekPreserve5 from '../../assets/images/newyork/otter-creek-5.webp';
import otterCreekPreserve6 from '../../assets/images/newyork/otter-creek-6.webp';
import otterCreekPreserve7 from '../../assets/images/newyork/otter-creek-7.webp';


function NewYorkContent({ className, setActiveState }) {
    const { t } = useTranslation();

    // Setting up references for each section
    const newyorkRef = useRef();
    const highlineNYCRef = useRef();
    const centralParkRef = useRef();
    const mountArabRef = useRef();
    const cantonIslandParkRef = useRef();
    const otterCreekPreserveRef = useRef();
    // TODO: 1. Add more refs for other parks if any

    // Initializing IntersectionObservers to watch when each section intersects with the viewport
    useEffect(() => {
        // General observer for the New York state section
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#newyork");
                    setActiveState("newyork")
                }
            },
            { threshold: 0 }
        );

        // Below are specific observers for each park
        const highlineNYCObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#highlineNYC");
                    setActiveState("highlineNYC")
                }
            },
            { threshold: 0.01 }
        );

        const centralParkObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#centralPark");
                    setActiveState("centralPark")
                }
            },
            { threshold: 0.01 }
        );

        const mountArabObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#mountArab");
                    setActiveState("mountArab")
                }
            },
            { threshold: 0.01 }
        );

        const cantonIslandParkObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#cantonIslandPark");
                    setActiveState("cantonIslandPark")
                }
            },
            { threshold: 0.01 }
        );

        const otterCreekPreserveObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#otterCreekPreserve");
                    setActiveState("otterCreekPreserve")
                }
            },
            { threshold: 0.01 }
        );
        // TODO: 2. Add observers for other parks if any

        // Capturing current refs for cleanup later
        const currentNewYorkRef = newyorkRef.current;
        const currentHighlineNYCRef = highlineNYCRef.current;
        const currentCentralParkRef = centralParkRef.current;
        const currentMountArabRef = mountArabRef.current;
        const currentCantonIslandParkRef = cantonIslandParkRef.current;
        const currentOtterCreekPreserveRef = otterCreekPreserveRef.current;
        // TODO: 3. Add const variable above

        // Begin observing each section
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

        // Unobserve sections when component unmounts
        return () => {
            // If a reference for the specified section exists, stop observing it
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
            <div className='state-section bg-light p-3 '>
                <h3 className='intro-subtitle'>
                    {t('newyork.stateName')}
                </h3>
                <p className='intro-paragraph'>
                    {t('newyork.introForState')}
                </p>
            </div>
            <div className='park-section bg-light p-3 ' ref={highlineNYCRef}>
                <h4 className='intro-subtitle park-title'>
                    {t('newyork.parkNameForHighLine')}
                </h4>
                <p className='intro-paragraph'>
                    {t('newyork.introForHighLine')}
                </p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${highline7})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${highline6})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${highline5})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${highline4})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${highline3})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${highline2})` }}></div>
                    </div>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${highlineFidel})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${highline1})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${highlineFidelReflection})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${highline8})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${highlineStatues})` }}></div>
                    </div>

                </div>

            </div>
            <div className='park-section last-park bg-light p-3  ' ref={centralParkRef}>
                <h4 className='intro-subtitle park-title'>
                    {t('newyork.parkNameForCentralPark')}
                </h4>
                <p className='intro-paragraph'>
                    {t('newyork.introForCentralPark')}
                </p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${centralPark1})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${centralPark4})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${centralPark5})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${centralPark6})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${centralPark7})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${centralPark8})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${centralPark9})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${centralPark10})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${centralPark11})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${centralPark3})` }}></div>
                    </div>
                    <div className='box box--3x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${centralPark2})` }}></div>
                    </div>
                </div>
            </div>
            <div className='park-section last-park bg-light p-3  ' ref={mountArabRef}>
                <h4 className='intro-subtitle park-title'>
                    {t('newyork.parkNameForMountArab')}
                </h4>
                <p className='intro-paragraph'>
                    {t('newyork.introForMountArab')}
                </p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mountArab7})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mountArabFidel})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mountArab1})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mountArab2})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mountArab3})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mountArab4})` }}></div>
                    </div>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mountArab5})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mountArab6})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mountArab8})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mountArabRoss})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mountArabTower})` }}></div>
                    </div>
                </div>
            </div>
            <div className='park-section last-park bg-light p-3  ' ref={cantonIslandParkRef}>
                <h4 className='intro-subtitle park-title'>
                    {t('newyork.parkNameForGrasseRiverHeritagePark')}
                </h4>
                <p className='intro-paragraph'>
                    {t('newyork.introForGrasseRiverHeritagePark')}
                </p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${cantonIslandPark1})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${cantonIslandPark2})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${cantonIslandPark3})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${cantonIslandPark4})` }}></div>
                    </div>
                </div>
            </div>
            <div className='park-section last-park bg-light p-3  ' ref={otterCreekPreserveRef}>
                <h4 className='intro-subtitle park-title'>
                    {t('newyork.parkNameForOtterCreek')}
                </h4>
                <p className='intro-paragraph'>
                    {t('newyork.introForOtterCreek')}
                </p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${otterCreekPreserve1})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${otterCreekPreserve2})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${otterCreekPreserve3})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${otterCreekPreserve4})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${otterCreekPreserve5})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${otterCreekPreserve6})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${otterCreekPreserve7})` }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewYorkContent;
