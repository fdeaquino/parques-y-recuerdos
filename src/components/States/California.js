import React, { useRef, useEffect } from 'react';
import yosemiteFidel1 from '../../assets/images/california/yosemite-fidel-valley-view.webp';
import yosemiteFidel2 from '../../assets/images/california/yosemite-fidel-valley-trail.webp';
import yosemiteFidel3 from '../../assets/images/california/yosemite-fidel-wooded-trail.webp';
import yosemiteRoss1 from '../../assets/images/california/yosemite-ross-high-sierras.webp';
import yosemiteRoss2 from '../../assets/images/california/yosemite-ross-valley-view.webp';
import brightGreenTrail from '../../assets/images/california/yosemite-bright-green-trail.webp';
import burnedTrees from '../../assets/images/california/yosemite-burned-trees.webp';
import cabin from '../../assets/images/california/yosemite-cabin.webp';
import cocina from '../../assets/images/california/yosemite-cocina.webp';
import deadTree from '../../assets/images/california/yosemite-dead-tree.webp';
import hetchHetchyView from '../../assets/images/california/yosemite-hetch-hetchy.webp';
import hetchHetchyTrail from '../../assets/images/california/yosemite-hetch-hetchy-trail.webp';
import sequoias from '../../assets/images/california/yosemite-sequoias.webp';
import swing from '../../assets/images/california/yosemite-swing.webp';
import teslaCharging from '../../assets/images/california/yosemite-tesla-charging.webp';
import ggFerrisWheel from '../../assets/images/california/gg-ferris-wheel-view.webp';
import ggFidel from '../../assets/images/california/gg-fidel.webp';
import ggFog from '../../assets/images/california/gg-fog.webp';
import ggGarden from '../../assets/images/california/gg-garden.webp';
import ggHiddenShrine from '../../assets/images/california/gg-hidden-shrine.webp';
import ggPinkFlowers from '../../assets/images/california/gg-pink-flowers.webp';
import ggPlants from '../../assets/images/california/gg-plants.webp';
import ggPurpleFlowers from '../../assets/images/california/gg-purple-flower.webp';
import ggShrineCloseup from '../../assets/images/california/gg-shrine-closeup.webp';
import ggTrail1 from '../../assets/images/california/gg-trail-1.webp';
import ggTrail2 from '../../assets/images/california/gg-trail-2.webp';
import ggWindmill from '../../assets/images/california/gg-windmill.webp';
import ggZTree from '../../assets/images/california/gg-z-tree.webp';
import presidioFidel from '../../assets/images/california/presidio-fidel.webp';
import presidioGGTrees1 from '../../assets/images/california/presidio-gg-trees1.webp';
import presidioGGTrees2 from '../../assets/images/california/presidio-gg-trees-2.webp';
import presidioGG1 from '../../assets/images/california/presidio-gg1.webp';
import presidioGG2 from '../../assets/images/california/presidio-gg2.webp';
import presidioImmPoint from '../../assets/images/california/presidio-imm-point.webp';
import presidioPalaceFineArts1 from '../../assets/images/california/presidio-palace-fine-arts1.webp';
import presidioPalaceFineArts2 from '../../assets/images/california/presidio-palace-fine-arts2.webp';
import presidioRoss from '../../assets/images/california/presidio-ross.webp';
import presidioShadows from '../../assets/images/california/presidio-shadows.webp';
import presidioSunset from '../../assets/images/california/presidio-sunset.webp';
import sfParkLogo from '../../assets/images/california/sf-park-logo.webp';
import sfParkMonkeyTree from '../../assets/images/california/sf-park-monkey-tree.webp';
import sfParkOrangeFlower from '../../assets/images/california/sf-park-orange-flower.webp';
import sfParkPurpleFlower from '../../assets/images/california/sf-park-purple-flowers.webp';
import sfParkRoughPlant from '../../assets/images/california/sf-park-rough-plant.webp';
import sfParkSlack from '../../assets/images/california/sf-park-slack.webp';
import sfParkTowers1 from '../../assets/images/california/sf-park-towers-1.webp';
import sfParkTowers2 from '../../assets/images/california/sf-park-towers-2.webp';
import sfParkTrail from '../../assets/images/california/sf-park-trail.webp';
import sfParkTrailblazer from '../../assets/images/california/sf-park-trailblazer.webp';
import sfParkTree from '../../assets/images/california/sf-park-tree.webp';
import griffithHollywoodSign from '../../assets/images/california/griffith-hollywood-sign.webp';
import griffithHorses from '../../assets/images/california/griffith-horses.webp';
import griffithMap from '../../assets/images/california/griffith-map.webp';
import griffithPinkFlowers from '../../assets/images/california/griffith-pink-flowers.webp';
import griffithTrail1 from '../../assets/images/california/griffith-trail1.webp';
import griffithTrail2 from '../../assets/images/california/griffith-trail2.webp';
import griffithTrail3 from '../../assets/images/california/griffith-trail3.webp';
import griffithTrail4 from '../../assets/images/california/griffith-trail4.webp';
import griffithTrail5 from '../../assets/images/california/griffith-trail5.webp';
import griffithObservatoryView1 from '../../assets/images/california/griffith-observatory-view1.webp';
import griffithObservatoryView2 from '../../assets/images/california/griffith-observatory-view2.webp';
import griffithObservatory1 from '../../assets/images/california/griffith-observatory1.webp';
import griffithObservatory2 from '../../assets/images/california/griffith-observatory2.webp';
import santaMonicaBeach1 from '../../assets/images/california/santa-monica-1.webp';
import santaMonicaBeach2 from '../../assets/images/california/santa-monica-2.webp';
import santaMonicaBeach3 from '../../assets/images/california/santa-monica-3.webp';
import santaMonicaBeach4 from '../../assets/images/california/santa-monica-4.webp';
import santaMonicaBeach5 from '../../assets/images/california/santa-monica-5.webp';
import santaMonicaBeach6 from '../../assets/images/california/santa-monica-6.webp';
import santaMonicaBeach7 from '../../assets/images/california/santa-monica-7.webp';
import santaMonicaBeach8 from '../../assets/images/california/santa-monica-8.webp';




function CaliforniaContent({ className, setActiveState }) {
    const californiaRef = useRef();
    const yosemiteRef = useRef();
    const goldenGateRef = useRef();
    const presidioRef = useRef();
    const salesforceRef = useRef();
    const griffithRef = useRef();
    const santaMonicaBeachRef = useRef();
    // const harborIslandParkRef = useRef();

    // TODO: 1. Add more refs for other parks if any


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#california");
                    setActiveState("california");
                }
            },
            { threshold: 0 }
        );

        const yosemiteObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#yosemite");
                    setActiveState("yosemite");
                }
            },
            { threshold: 0.02 }
        );


        const goldenGateObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#goldenGate");
                    setActiveState("goldenGate");
                }
            },
            { threshold: 0.02 }
        );

        const salesforceObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#salesforce");
                    setActiveState("salesforce");
                }
            },
            { threshold: 0.02 }
        );

        const presidioObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#presidio");
                    setActiveState("presidio");
                }
            },
            { threshold: 0.02 }
        );

        const griffithObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#griffith");
                    setActiveState("griffith");
                }
            },
            { threshold: 0.02 }
        );

        const santaMonicaBeachObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#santaMonicaBeach");
                    setActiveState("santaMonicaBeach");
                }
            }
        );

        // const harborIslandParkObserver = new IntersectionObserver(
        //     ([entry]) => {
        //         if (entry.isIntersecting) {
        //             window.history.replaceState(null, null, "#harborIslandPark");
        //             setActiveState("harborIslandPark")
        //         }
        //     }
        // );

        // TODO: 2. Add observers for other parks if any

        const currentCaliforniaRef = californiaRef.current;
        const currentYosemiteRef = yosemiteRef.current;
        const currentGoldenGateRef = goldenGateRef.current;
        const currentSalesforceRef = salesforceRef.current;
        const currentPresidioRef = presidioRef.current;
        const currentGriffithRef = griffithRef.current;
        const currentSantaMonicaBeachRef = santaMonicaBeachRef.current;
        // const currentHarborIslandParkRef = harborIslandParkRef.current;


        // TODO: 3. Add const variable above

        if (currentCaliforniaRef) {
            observer.observe(currentCaliforniaRef);
        }
        if (currentYosemiteRef) {
            yosemiteObserver.observe(currentYosemiteRef);
        }
        if (currentGoldenGateRef) {
            goldenGateObserver.observe(currentGoldenGateRef)
        }
        if (currentSalesforceRef) {
            salesforceObserver.observe(currentSalesforceRef)
        }
        if (currentPresidioRef) {
            presidioObserver.observe(currentPresidioRef)
        }
        if (currentGriffithRef) {
            griffithObserver.observe(currentGriffithRef)
        }
        if (currentSantaMonicaBeachRef) {
            santaMonicaBeachObserver.observe(currentSantaMonicaBeachRef)
        }
        // if (currentHarborIslandParkRef) {
        //     harborIslandParkObserver.observe(currentHarborIslandParkRef)
        // }

        // TODO: 4. Add if statement to observe ref for new parks if any

        return () => {
            if (currentCaliforniaRef) {
                observer.unobserve(currentCaliforniaRef);
            }
            if (currentYosemiteRef) {
                yosemiteObserver.unobserve(currentYosemiteRef);
            }
            if (currentGoldenGateRef) {
                goldenGateObserver.unobserve(currentGoldenGateRef);
            }
            if (currentSalesforceRef) {
                salesforceObserver.unobserve(currentSalesforceRef)
            }
            if (currentPresidioRef) {
                presidioObserver.unobserve(currentPresidioRef)
            }
            if (currentGriffithRef) {
                griffithObserver.unobserve(currentGriffithRef);
            }
            if (currentSantaMonicaBeachRef) {
                santaMonicaBeachObserver.unobserve(currentSantaMonicaBeachRef);
            }
            // if (currentHarborIslandParkRef) {
            //     harborIslandParkObserver.unobserve(currentHarborIslandParkRef);
            // }

            // TODO: 5. Add if statement to unobserve refs for new parks if any
        };
    }, [setActiveState]);

    return (
        <section className={`${className}`} id="california" ref={californiaRef}>
            <div className='state-section bg-light p-3 m-3 '>
                <h3 className='intro-subtitle'>CALIFORNIA</h3>
                <p className='intro-paragraph'>Bienvenidos a California, a state as diverse as it is beautiful. Desde las playas de Santa Monica hasta las alturas majestuosas de Yosemite, you'll find a tapestry of geology y historia here. These lands, once home to Native tribes like the Miwok, Chumash, and Ohlone, tell a story of resilience and connection to the land. California’s flora is as varied as its landscapes, a testament to its rich ecosystems. Y no podemos olvidar the imprint of the Spanish missions, a network that weaves a story of faith y determinación through the state. California, con su vibrant past and dynamic present, truly is un lugar where history and nature dance together in a timelessly.</p>
            </div>
            <div className='park-section bg-light p-3 m-3' ref={yosemiteRef}>
                <h4 className='intro-subtitle park-title'>Yosemite National Park</h4>
                <p className='intro-paragraph'>Yosemite National Park, con sus acantilados de granito y sequoias gigantes, te sumerge in a world of natural grandeur. This land, once home to the Miwok and Paiute tribes, es un testimonio of the enduring strength of nature, from the marks of ancient glaciers to the towering sequoias. Aquí, te sentirás pequeño but profoundly connected to the land. Among its wonders, está Hetch Hetchy, a reservoir of vital importance to San Francisco, showcasing nature's role in our modern lives. El parque también offers accessible charging stations, una comodidad moderna amidst ancient surroundings. And then there's that unforgettably delicioso restaurante Mexicano nearby, an unexpected culinary gem. En Yosemite, history, nature, and modern conveniences converge, creating an experience that's as rich as it is inspiring.</p>
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${yosemiteFidel1})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${yosemiteRoss2})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sequoias})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${swing})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${deadTree})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${yosemiteFidel2})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${brightGreenTrail})` }}></div>
                    </div>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${yosemiteRoss1})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${yosemiteFidel3})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${hetchHetchyView})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${hetchHetchyTrail})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${burnedTrees})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${cabin})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${teslaCharging})` }}></div>
                    </div>
                    <div className='box box--3x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${cocina})` }}></div>
                    </div>
                </div>
            </div>
            <div className='park-section bg-light p-3 m-3' ref={goldenGateRef}>
                <h4 className='intro-subtitle park-title'>Golden Gate Park</h4>
                <p className='intro-paragraph'>Golden Gate Park, nestled in the corazón de San Francisco, is a stunning blend of natural beauty y cultura urbana. Here, amidst the bustle of the city, we found a moment of tranquility high above it all on the Ferris wheel. Con cada vuelta, the panoramic views took our breath away, revealing the park's verdant splendor and the city beyond. Dentro del parque, the Robin Williams Meadow is a touching tribute to a beloved actor who brought laughter y alegría to so many. It's a reminder of the enduring impact of art and culture in our lives. En Golden Gate Park, you'll discover that the harmony between city life and nature's beauty can create moments of wonder, reflection, and joy.</p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${ggFidel})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${ggTrail1})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${ggWindmill})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${ggPinkFlowers})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${ggShrineCloseup})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${ggTrail2})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${ggZTree})` }}></div>
                    </div>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${ggPlants})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${ggHiddenShrine})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${ggFog})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${ggGarden})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${ggPurpleFlowers})` }}></div>
                    </div>
                    <div className='box box--2x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${ggFerrisWheel})` }}></div>
                    </div>

                </div>
            </div>
            <div className='park-section bg-light p-3 m-3' ref={presidioRef}>
                <h4 className='intro-subtitle park-title'>Presidio of San Francisco</h4>
                <p className='intro-paragraph'>El Presidio de San Francisco, un verdadero tesoro urbano, se destaca por su historia resonante y vistas espectaculares. Desde Immigrant Point Overlook, nos maravillamos con panoramas that felt endless, offering a canvas painted by the vast Pacific. Nuestra caminata a Marshall's Beach nos dio una vista majestuosa del Golden Gate Bridge, an iconic symbol standing tall. Y walking on the bridge, sintiendo la brisa fresca y el murmullo de las olas below, was unforgettable. A esto sumamos our paseo to the Palace of Fine Arts, un elegante toque of architecture amidst natural beauty. El Presidio, entre historia y vistas asombrosas, encapsulates the spirit of San Francisco.</p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${presidioImmPoint})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${presidioFidel})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${presidioGGTrees1})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${presidioShadows})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${presidioRoss})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${presidioGG1})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${presidioGGTrees2})` }}></div>
                    </div>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${presidioGG2})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${presidioSunset})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${presidioPalaceFineArts1})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${presidioPalaceFineArts2})` }}></div>
                    </div>
                </div>
            </div>
            <div className='park-section last-park bg-light p-3 m-3' ref={salesforceRef}>
                <h4 className='intro-subtitle park-title'>Salesforce Park</h4>
                <p className='intro-paragraph'>
                    En el corazón de San Francisco, encontramos Salesforce Park, un verdadero santuario urbano. Este parque, con su naturaleza vibrante y el skyline de la ciudad como telón de fondo, es un contraste tranquilo a la agitación de la ciudad. Lo que hace especial a Salesforce Park es cómo inspiró mi camino de aprendizaje en el programa Salesforce Trailhead. Esta aventura de auto-mejoramiento me llevó a empezar my Salesforce Developer Certification. Y es un plus that the Slack office is on site, una herramienta que he utilizado durante años para mantenerme conectado y organizado. Salesforce Park is more than just a park – it's a symbol of harmony between nature, technology, and personal growth.</p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sfParkLogo})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sfParkTowers1})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sfParkPurpleFlower})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sfParkRoughPlant})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sfParkTrail})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sfParkTree})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sfParkTrailblazer})` }}></div>
                    </div>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sfParkTowers2})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sfParkSlack})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sfParkMonkeyTree})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sfParkOrangeFlower})` }}></div>
                    </div>
                </div>
            </div>
            <div className='park-section bg-light p-3 m-3' ref={griffithRef}>
                <h4 className='intro-subtitle park-title'>Griffith Park</h4>
                <p className='intro-paragraph'>Griffith Park, un verdadero tesoro en Los Angeles, ofrece un respiro de la vida urbana sin alejarte de la ciudad. Durante mi caminata, el calor del sol era palpable, reminding me to always be prepared with enough water y protector solar. A pesar de las temperaturas, cada paso en Griffith Park brought a new perspective, revealing stunning views of the city and the Hollywood sign. It's a place that shows that nature and city life can coexist, each offering their unique charm. Es aquí, under the sun of LA, where you truly feel the diverse spirit of the city.</p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${griffithHollywoodSign})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${griffithMap})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${griffithTrail1})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${griffithTrail2})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${griffithHorses})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${griffithTrail3})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${griffithTrail4})` }}></div>
                    </div>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${griffithTrail5})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${griffithPinkFlowers})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${griffithObservatoryView1})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${griffithObservatoryView2})` }}></div>
                    </div>
                    <div className='box box--2x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${griffithObservatory1})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${griffithObservatory2})` }}></div>
                    </div>
                </div>
            </div>
            <div className='park-section bg-light p-3 m-3' ref={santaMonicaBeachRef}>
                <h4 className='intro-subtitle park-title'>Santa Monica State Beach </h4>
                <p className='intro-paragraph'>Santa Monica Beach, un encuentro vibrante entre la arena y el mar, es una joya de Southern California. Aquí, la suave arena se calienta bajo tus pies while the sun graces your skin, a delightful contrast to the cool kiss of the Pacific. Esta maravillosa playa, también un parque público, se presta para una multitud de actividades: desde relajarte en la arena hasta darte un chapuzón en el océano. El muelle de Santa Monica, con su carrusel que evoca nostalgia y su ambiente lleno de vida, adds its own unique charm. El parque es un tributo al compromiso de la comunidad por preservar los espacios naturales para que todos los disfruten. Al caer la tarde, the sky is set ablaze with color, an ever-changing masterpiece that beautifully ends each day. </p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${santaMonicaBeach1})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${santaMonicaBeach2})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${santaMonicaBeach3})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${santaMonicaBeach4})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${santaMonicaBeach5})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${santaMonicaBeach6})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${santaMonicaBeach7})` }}></div>
                    </div>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${santaMonicaBeach8})` }}></div>
                    </div>
                </div>
            </div>
            {/* <div className='park-section bg-light p-3 m-3' ref={harborIslandParkRef}>
                <h4 className='intro-subtitle park-title'>Harbor Island Park</h4>
                <p className='intro-paragraph'>Some content I want to share about the park and about my hiking experience.</p>
            </div> */}
        </section>
    );
}

export default CaliforniaContent;
