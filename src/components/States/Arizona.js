import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import sedonaAirportView from '../../assets/images/arizona/sedona-airport-view.webp';
import sedonaBobcat from '../../assets/images/arizona/sedona-bobcat.webp';
import sedonaCacti from '../../assets/images/arizona/sedona-cacti.webp';
import sedonaCloudVortex from '../../assets/images/arizona/sedona-cloud-vortex.webp';
import sedonaDryTree from '../../assets/images/arizona/sedona-dry-tree.webp';
import sedonaFrost from '../../assets/images/arizona/sedona-frost.webp';
import sedonaNeighborhood from '../../assets/images/arizona/sedona-neighborhood.webp';
import sedonaOcotillo from '../../assets/images/arizona/sedona-ocotillo.webp';
import sedonaTogether from '../../assets/images/arizona/sedona-together.webp';
import sedonaTrail1 from '../../assets/images/arizona/sedona-trail.webp';
import sedonaTrail2 from '../../assets/images/arizona/sedona-trail-2.webp';
import sedonaTrailSteps from '../../assets/images/arizona/sedona-trail-steps.webp';
import saguaroCarved from '../../assets/images/arizona/saguaro-carved.webp';
import saguaroCholla from '../../assets/images/arizona/saguaro-cholla-cacti.webp';
import saguaroCreekRock from '../../assets/images/arizona/saguaro-creek-rock.webp';
import saguaroEntrance from '../../assets/images/arizona/saguaro-entrance.webp';
import saguaroFidel from '../../assets/images/arizona/saguaro-fidel.webp';
import saguaroRoss from '../../assets/images/arizona/saguaro-ross.webp';
import saguaroThreeSis from '../../assets/images/arizona/saguaro-three-sisters.webp';
import saguaroTrail1 from '../../assets/images/arizona/saguaro-trail-1.webp';
import saguaroTrail2 from '../../assets/images/arizona/saguaro-trail-2.webp';
import saguaroValleyView1 from '../../assets/images/arizona/saguaro-valley-view-1.webp';
import saguaroValleyView2 from '../../assets/images/arizona/saguaro-valley-view-2.webp';
import hsBendFence from '../../assets/images/arizona/hsBend-fence.webp';
import hsBendFidel from '../../assets/images/arizona/hsBend-fidel.webp';
import hsBendLookout from '../../assets/images/arizona/hsBend-lookout.webp';
import hsBendPeekingSun from '../../assets/images/arizona/hsBend-peeking-sun.webp';
import hsBendPhotographer from '../../assets/images/arizona/hsBend-photographer.webp';
import hsBendRiverView from '../../assets/images/arizona/hsBend-river-view.webp';
import hsBendRoss from '../../assets/images/arizona/hsBend-ross.webp';
import hsBendShadows from '../../assets/images/arizona/hsBend-shadows.webp';
import hsBendTrail1 from '../../assets/images/arizona/hsBend-trail1.webp';
import hsBendTrail2 from '../../assets/images/arizona/hsBend-trail2.webp';


function ArizonaContent({ className, setActiveState }) {
    const { t } = useTranslation();

    // Setting up references for each section
    const arizonaRef = useRef();
    const sedonaRef = useRef();
    const saguaroRef = useRef();
    const horseshoeBendRef = useRef();
    // TODO: 1. Add more refs for other parks if any

    // Initializing IntersectionObservers to watch when each section intersects with the viewport
    useEffect(() => {
        // General observer for the Arizona state section
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#arizona");
                    setActiveState("arizona")
                }
            },
            { threshold: 0 }
        );

        // Below are specific observers for each park
        const sedonaObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#sedona");
                    setActiveState("sedona");
                }
            },
            { threshold: 0.01 }
        );
        const saguaroObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#saguaro");
                    setActiveState("saguaro");
                }
            },
            { threshold: 0.01 }
        );

        const horseshoeBendObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#horseshoeBend");
                    setActiveState("horseshoeBend");
                }
            },
            { threshold: 0.01 }
        );
        // TODO: 2. Add observers for other parks if any


        // Capturing current refs for cleanup later
        const currentArizonaRef = arizonaRef.current;
        const currentSedonaRef = sedonaRef.current;
        const currentSaguaroRef = saguaroRef.current;
        const currentHorseshoeBendRef = horseshoeBendRef.current;
        // TODO: 3. Add const variable above 


        // Begin observing each section
        if (currentArizonaRef) {
            observer.observe(currentArizonaRef);
        }
        if (currentSedonaRef) {
            sedonaObserver.observe(currentSedonaRef);
        }
        if (currentSaguaroRef) {
            saguaroObserver.observe(currentSaguaroRef);
        }
        if (currentHorseshoeBendRef) {
            horseshoeBendObserver.observe(currentHorseshoeBendRef);
        }
        // TODO: 4. Add if statement to observe ref for new parks if any


        // Unobserve sections when component unmounts
        return () => {
            // If a reference for the specified section exists, stop observing it
            if (currentArizonaRef) {
                observer.unobserve(currentArizonaRef)
            }
            if (currentSedonaRef) {
                sedonaObserver.unobserve(currentSedonaRef)
            }
            if (currentSaguaroRef) {
                saguaroObserver.unobserve(currentSaguaroRef)
            }
            if (currentHorseshoeBendRef) {
                horseshoeBendObserver.unobserve(currentHorseshoeBendRef)
            }
            // TODO: 5. Add if statement to unobserve refs for new parks if any

        };

    }, [setActiveState]);

    return (
        <section className={`${className}`} id='arizona' ref={arizonaRef}>
            <div className='state-section bg-light p-3'>
                <h3 className='intro-subtitle'>
                    {t('arizona.stateName')}
                </h3>
                <p className='intro-paragraph'>
                    {t('arizona.introForState')}
                </p>
            </div>
            <div className='park-section bg-light p-3' ref={sedonaRef}>
                <h4 className='intro-subtitle park-title'>
                    {t('arizona.parkNameForSedona')}

                </h4>
                <p className='intro-paragraph'>
                    {t('arizona.introForSedona')}

                </p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sedonaTogether})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sedonaTrailSteps})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sedonaBobcat})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sedonaCacti})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sedonaCloudVortex})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sedonaDryTree})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sedonaFrost})` }}></div>
                    </div>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sedonaNeighborhood})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sedonaOcotillo})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sedonaTrail1})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sedonaTrail2})` }}></div>
                    </div>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sedonaAirportView})` }}></div>
                    </div>
                </div>

            </div>
            <div className='park-section bg-light p-3' ref={saguaroRef}>
                <h4 className='intro-subtitle park-title'>
                    {t('arizona.parkNameForSaguaro')}
                </h4>
                <p className='intro-paragraph'>
                    {t('arizona.introForSaguaro')}

                </p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${saguaroFidel})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${saguaroEntrance})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${saguaroThreeSis})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${saguaroValleyView1})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${saguaroCholla})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${saguaroCarved})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${saguaroCreekRock})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${saguaroTrail1})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${saguaroValleyView2})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${saguaroTrail2})` }}></div>
                    </div>
                </div>

            </div>
            <div className='park-section bg-light p-3' ref={horseshoeBendRef}>
                <h4 className='intro-subtitle park-title'>
                    {t('arizona.parkNameForHorseshoeBend')}
                </h4>
                <p className='intro-paragraph'>
                    {t('arizona.introForHoseshoeBend')}

                </p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${hsBendRiverView})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${hsBendTrail1})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${hsBendShadows})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${hsBendPeekingSun})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${hsBendLookout})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${hsBendPhotographer})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${hsBendRoss})` }}></div>
                    </div>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${hsBendFence})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${hsBendTrail2})` }}></div>
                    </div>
                    <div className='box box--2x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${hsBendFidel})` }}></div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default ArizonaContent;