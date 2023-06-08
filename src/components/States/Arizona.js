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
                <h3 className='intro-subtitle'>ARIZONA</h3>
                <p className='intro-paragraph'>En el corazón del Southwest, Arizona es un lugar where cultures and landscapes collide, creating a vibrantly unique experience. This territory, once roamed by the Navajo, Hopi, and Tohono O'odham tribes, still whispers their rich histories in every breeze. La geología is a storyteller here, narrando cuentos of time sculpting stunning red rock formations and intricate river bends. In the desert, los cacti like the majestic Saguaro thrive, their towering figures serving as verdaderos monumentos to the region's unique flora. Con cada sunset over the red rocks, y cada dawn breaking across the desert, te sentirás connected to the soul of Arizona. Its spirit, its history, y su belleza natural all blend together, creating a place that leaves you with recuerdos and reflections as vast as the landscape itself.</p>
            </div>
            <div className='park-section bg-light p-3' ref={sedonaRef}>
                <h4 className='intro-subtitle park-title'>Sedona</h4>
                <p className='intro-paragraph'>Sedona, con sus rocas rojas y 'energy vortexes', es un lugar that whispers to your soul. Mi esposo Ross y yo, found ourselves drawn into the pulsating heartbeat of the earth as we hiked to the four Energy Vortexes. Cada paso nos acercó more to the unique energy of the land, creating a sensation that was palpable, casi tangible. Hiking amidst the crimson formations, you feel the vibraciones of the Earth under your feet, inviting you into a deeper connection. Y cuando the sun dips below the horizon, los colores del cielo dance across the landscape, leaving you in awe of the energy and beauty around you. A trip to Sedona, is more than just un viaje, it's an unforgettable journey into the heart of nature's energy. Truly, una vacación inolvidable.</p>
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
                <h4 className='intro-subtitle park-title'>Saguaro National Park</h4>
                <p className='intro-paragraph'>Saguaro National Park, split into East and West, frames the vibrant city of Tucson with its timeless beauty. En nuestro viaje, Ross y yo walked among the towering saguaros, ancient cacti that can live up to 150 years, y que empiezan a crecer sus characteristic arms at about 70 years old. Este parque is a testament to the desert's life, its unique geology y fauna diversa. With every step in Saguaro, you're walking through a living, breathing history of the desert, an unforgettable stroll through time itself.</p>
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
            <div className='park-section bg-light p-3' ref={horseshoeBendRef}>
                <h4 className='intro-subtitle park-title'>Horseshoe Bend</h4>
                <p className='intro-paragraph'>Horseshoe Bend, where the Colorado River has carved a perfect herradura into the landscape, es un verdadero espectáculo natural. Aquí, the relentless power of water over millions of years is on full display, narrando una historia de endurance y transformación. Standing on the edge, mirando el río snake through the canyon below, you can't help but feel a part of something much larger than yourself. Es un reminder of the timeless dance between nature and geology, a spectacle that leaves you humbled y lleno de asombro. Visitar Horseshoe Bend is to witness the Earth's artistry firsthand, a true testament to the power of time and persistence.</p>
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