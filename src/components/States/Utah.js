import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import zionFidel from '../../assets/images/utah/zion-fidel.webp';
import zion1 from '../../assets/images/utah/zion-1.webp';
import zion2 from '../../assets/images/utah/zion-2.webp';
import zion3 from '../../assets/images/utah/zion-3.webp';
import zion4 from '../../assets/images/utah/zion-4.webp';
import zion5 from '../../assets/images/utah/zion-5.webp';
import zion6 from '../../assets/images/utah/zion-6.webp';
import zion7 from '../../assets/images/utah/zion-7.webp';
import zion8 from '../../assets/images/utah/zion-8.webp';
import zion9 from '../../assets/images/utah/zion-9.webp';
import zion10 from '../../assets/images/utah/zion-10.webp';
import zion11 from '../../assets/images/utah/zion-11.webp';
import bryceCanyon1 from '../../assets/images/utah/bryce-canyon-1.webp';
import bryceCanyon2 from '../../assets/images/utah/bryce-canyon-2.webp';
import bryceCanyon3 from '../../assets/images/utah/bryce-canyon-3.webp';
import bryceCanyon4 from '../../assets/images/utah/bryce-canyon-4.webp';
import bryceCanyon5 from '../../assets/images/utah/bryce-canyon-5.webp';
import bryceCanyon6 from '../../assets/images/utah/bryce-canyon-6.webp';
import bryceCanyon7 from '../../assets/images/utah/bryce-canyon-7.webp';
import bryceCanyon8 from '../../assets/images/utah/bryce-canyon-8.webp';
import bryceCanyon9 from '../../assets/images/utah/bryce-canyon-9.webp';
import bryceCanyon10 from '../../assets/images/utah/bryce-canyon-10.webp';
import bryceCanyon11 from '../../assets/images/utah/bryce-canyon-11.webp';
import bryceCanyon12 from '../../assets/images/utah/bryce-canyon-12.webp';
import bryceCanyon13 from '../../assets/images/utah/bryce-canyon-13.webp';
import arches1 from '../../assets/images/utah/arches-1.webp';
import arches2 from '../../assets/images/utah/arches-2.webp';
import arches3 from '../../assets/images/utah/arches-3.webp';
import arches4 from '../../assets/images/utah/arches-4.webp';
import arches5 from '../../assets/images/utah/arches-5.webp';
import arches6 from '../../assets/images/utah/arches-6.webp';
import arches7 from '../../assets/images/utah/arches-7.webp';
import arches8 from '../../assets/images/utah/arches-8.webp';
import arches9 from '../../assets/images/utah/arches-9.webp';
import arches10 from '../../assets/images/utah/arches-10.webp';
import arches11 from '../../assets/images/utah/arches-11.webp';
import arches12 from '../../assets/images/utah/arches-12.webp';
import arches13 from '../../assets/images/utah/arches-13.webp';
import arches14 from '../../assets/images/utah/arches-14.webp';


function UtahContent({ className, setActiveState }) {
    const { t } = useTranslation();

    // Setting up references for each section
    const utahRef = useRef();
    const archesRef = useRef();
    const zionRef = useRef();
    const bryceCanyonRef = useRef();
    // TODO: 1. Add more refs for other parks if any

    // Initializing IntersectionObservers to watch when each section intersects with the viewport
    useEffect(() => {
        // General observer for the Utah state section
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#utah");
                    setActiveState("utah")
                }
            },
            { threshold: 0 }
        );

        // Below are specific observers for each park
        const archesObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#arches");
                    setActiveState("arches")
                }
            },
            { threshold: 0.01 }
        );
        const zionObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#zion");
                    setActiveState("zion")
                }
            },
            { threshold: 0.01 }
        );
        const bryceCanyonObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#bryceCanyon");
                    setActiveState("bryceCanyon")
                }
            },
            { threshold: 0.01 }
        );
        // TODO: 2. Add observers for other parks if any

        // Capturing current refs for cleanup later
        const currentUtahRef = utahRef.current;
        const currentArchesRef = archesRef.current;
        const currentZionRef = zionRef.current;
        const currentBryceCanyonRef = bryceCanyonRef.current;
        // TODO: 3. Add const variable above

        // Begin observing each section
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

        // Unobserve sections when component unmounts
        return () => {
            // If a reference for the specified section exists, stop observing it
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
            <div className='state-section bg-light p-3 '>
                <h3 className='intro-subtitle'>
                    {t('utah.stateName')}
                </h3>
                <p className='intro-paragraph'>
                    {t('utah.introForState')}

                </p>
            </div>
            <div className='park-section bg-light p-3 ' ref={zionRef}>
                <h4 className='intro-subtitle park-title'>
                    {t('utah.parkNameForZion')}
                </h4>
                <p className='intro-paragraph'>
                    {t('utah.introForZion')}
                </p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${zion1})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${zion2})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${zionFidel})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${zion3})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${zion4})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${zion5})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${zion6})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${zion7})` }}></div>
                    </div>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${zion8})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${zion9})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${zion10})` }}></div>
                    </div>
                    <div className='box box--3x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${zion11})` }}></div>
                    </div>
                </div>

            </div>
            <div className='park-section bg-light p-3 ' ref={bryceCanyonRef}>
                <h4 className='intro-subtitle park-title'>
                    {t('utah.parkNameForBryceCanyon')}
                </h4>
                <p className='intro-paragraph'>
                    {t('utah.introForBryceCanyon')}
                </p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${bryceCanyon1})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${bryceCanyon2})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${bryceCanyon3})` }}></div>
                    </div>
                    <div className='box box--3x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${bryceCanyon4})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${bryceCanyon5})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${bryceCanyon6})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${bryceCanyon7})` }}></div>
                    </div>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${bryceCanyon8})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${bryceCanyon9})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${bryceCanyon10})` }}></div>
                    </div>
                    <div className='box box--3x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${bryceCanyon11})` }}></div>
                    </div>

                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${bryceCanyon12})` }}></div>
                    </div>

                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${bryceCanyon13})` }}></div>
                    </div>
                </div>
            </div>
            <div className='park-section bg-light p-3 ' ref={archesRef}>
                <h4 className='intro-subtitle park-title'>
                    {t('utah.parkNameForArches')}
                </h4>
                <p className='intro-paragraph'>
                    {t('utah.introForArches')}
                </p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${arches1})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${arches2})` }}></div>
                    </div>
                    <div className='box box--3x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${arches3})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${arches4})` }}></div>
                    </div>
                    <div className='box box--3x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${arches5})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${arches6})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${arches7})` }}></div>
                    </div>
                    <div className='box box--3x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${arches8})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${arches9})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${arches10})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${arches11})` }}></div>
                    </div>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${arches12})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${arches13})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${arches14})` }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UtahContent;
