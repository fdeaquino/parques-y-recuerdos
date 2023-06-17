import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import povertyPointTogether from '../../assets/images/louisiana/poverty-point-together.webp';
import povertyPoint1 from '../../assets/images/louisiana/poverty-point1.webp';
import povertyPoint2 from '../../assets/images/louisiana/poverty-point2.webp';
import povertyPoint3 from '../../assets/images/louisiana/poverty-point3.webp';
import povertyPoint4 from '../../assets/images/louisiana/poverty-point4.webp';
import povertyPoint5 from '../../assets/images/louisiana/poverty-point5.webp';
import povertyPoint6 from '../../assets/images/louisiana/poverty-point6.webp';
import povertyPoint7 from '../../assets/images/louisiana/poverty-point7.webp';
import povertyPoint8 from '../../assets/images/louisiana/poverty-point8.webp';
import povertyPoint9 from '../../assets/images/louisiana/poverty-point9.webp';
import povertyPoint10 from '../../assets/images/louisiana/poverty-point10.webp';
import povertyPoint11 from '../../assets/images/louisiana/poverty-point11.webp';
import povertyPoint12 from '../../assets/images/louisiana/poverty-point12.webp';



function LouisianaContent({ className, setActiveState }) {
    const { t } = useTranslation();

    // setting up references for each section
    const louisianaRef = useRef();
    const povertyPointRef = useRef();
    // TODO: 1. Add more refs for other parks if any

    // Initializing IntersectionObservers to watch when each section intersects with the viewport
    useEffect(() => {
        // General observer for the Louisiana state section
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#louisiana");
                    setActiveState("louisiana")
                }
            },
            { threshold: 0 }
        );
        // Below are specific observers for Poverty Point and future parks
        const povertyPointObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#povertyPoint");
                    setActiveState("povertyPoint")
                }
            },
            { threshold: 0.01 }
        );
        // TODO: 2. Add observers for other parks if any

        // Capturing current refs for cleanup later
        const currentLouisianaRef = louisianaRef.current;
        const currentPovertyPointRef = povertyPointRef.current;
        // TODO: 3. Add const variable above

        // Begin observing each section
        if (currentLouisianaRef) {
            observer.observe(currentLouisianaRef);
        }
        if (currentPovertyPointRef) {
            povertyPointObserver.observe(currentPovertyPointRef);
        }
        // TODO: 4. Add if statement to observe ref for new parks if any

        // Unobserve sections when component unmounts
        return () => {
            // If a reference for the specified section exists, stop observing it
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
            <div className='state-section bg-light p-3 '>
                <h3 className='intro-subtitle'>
                    {t('louisiana.stateName')}
                </h3>
                <p className='intro-paragraph'>
                    {t('louisiana.introForState')}
                </p>
            </div>
            <div className='park-section bg-light p-3 ' ref={povertyPointRef}>
                <h4 className='intro-subtitle park-title'>
                    {t('louisiana.parkNameForPovertyPoint')}
                </h4>
                <p className='intro-paragraph'>
                    {t('louisiana.introForPovertyPoint')}
                </p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${povertyPoint1})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${povertyPoint8})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${povertyPoint6})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${povertyPoint7})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${povertyPoint3})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${povertyPoint5})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${povertyPoint4})` }}></div>
                    </div>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${povertyPoint11})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${povertyPoint9})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${povertyPoint10})` }}></div>
                    </div><div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${povertyPoint12})` }}></div>
                    </div><div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${povertyPoint2})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${povertyPointTogether})` }}></div>
                    </div>
                </div>
            </div>
            {/* <div className='park-section last-park bg-light p-3  '>
                <h4 className='intro-subtitle park-title'>Park 2</h4>
                <p className='intro-paragraph'>Some content I want to share about the park and about my hiking experience.</p>
            </div> */}
        </section>
    );
}

export default LouisianaContent;
