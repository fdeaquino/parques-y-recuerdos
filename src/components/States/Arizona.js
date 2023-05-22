import React, { useRef, useEffect } from 'react';
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
    const arizonaRef = useRef();
    const sedonaRef = useRef();
    const saguaroRef = useRef();
    const horseshoeBendRef = useRef();

    // TODO: 1. Add more refs for other parks if any


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#arizona");
                    setActiveState("arizona")
                }
            },
            { threshold: 0 }
        );

        const sedonaObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#sedona");
                    setActiveState("sedona");
                }
            },
            { threshold: 0.02 }
        );
        const saguaroObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#saguaro");
                    setActiveState("saguaro");
                }
            },
            { threshold: 0.02 }
        );

        const horseshoeBendObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#horseshoeBend");
                    setActiveState("horseshoeBend");
                }
            },
            { threshold: 0.02 }
        );

        // TODO: 2. Add observers for other parks if any

        const currentArizonaRef = arizonaRef.current;
        const currentSedonaRef = sedonaRef.current;
        const currentSaguaroRef = saguaroRef.current;
        const currentHorseshoeBendRef = horseshoeBendRef.current;

        // TODO: 3. Add const variable above

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

        return () => {
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
            <div className='state-section bg-light p-3 m-3'>
                <h3 className='intro-subtitle'>ARIZONA</h3>
                <p className='intro-paragraph'>(Paragraph about the state: Recognize native lands, give my favorite history, talk about how it makes me feel. Talk about cities/towns, and places I've been to, or notable places. Try to keep it short.) ____________ Kombucha JOMO pinterest gorpcore ramps ennui, wolf cardigan pitchfork raw denim bodega boys distillery. Meh glossier shabby chic poke semiotics, sriracha single-origin coffee stumptown. Forage DIY brunch etsy. Lomo venmo squid swag lo-fi vaporware paleo chia everyday carry letterpress. Hell of polaroid meh kale chips jawn, leggings blog shabby chic skateboard offal poutine church-key.</p>
            </div>
            <div className='park-section bg-light p-3 m-3' ref={sedonaRef}>
                <h4 className='intro-subtitle park-title'>Sedona</h4>
                <p className='intro-paragraph'>Some content I want to share about the park.</p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sedonaTogether})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sedonaAirportView})` }}></div>
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
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sedonaTrailSteps})` }}></div>
                    </div>
                </div>

            </div>
            <div className='park-section bg-light p-3 m-3' ref={saguaroRef}>
                <h4 className='intro-subtitle park-title'>Saguaro National Park</h4>
                <p className='intro-paragraph'>Some content I want to share about the park.</p>
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
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${saguaroRoss})` }}></div>
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
            <div className='park-section bg-light p-3 m-3' ref={horseshoeBendRef}>
                <h4 className='intro-subtitle park-title'>Horseshoe Bend</h4>
                <p className='intro-paragraph'>Some content I want to share about the park.</p>
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
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${hsBendFidel})` }}></div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default ArizonaContent;