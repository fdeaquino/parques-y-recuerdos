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




function CaliforniaContent({ className, setActiveState }) {
    const californiaRef = useRef();
    const yosemiteRef = useRef();
    const goldenGateRef = useRef();
    const presidioRef = useRef();
    const salesforceRef = useRef();
    const griffithRef = useRef();
    const santaMonicaBeachRef = useRef();
    const harborIslandParkRef = useRef();

    // TODO: 1. Add more refs for other parks if any


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#california");
                    setActiveState("california");
                }
            },
            { threshold: 0.02 }
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

        const harborIslandParkObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#harborIslandPark");
                    setActiveState("harborIslandPark")
                }
            }
        );

        // TODO: 2. Add observers for other parks if any

        const currentCaliforniaRef = californiaRef.current;
        const currentYosemiteRef = yosemiteRef.current;
        const currentGoldenGateRef = goldenGateRef.current;
        const currentSalesforceRef = salesforceRef.current;
        const currentPresidioRef = presidioRef.current;
        const currentGriffithRef = griffithRef.current;
        const currentSantaMonicaBeachRef = santaMonicaBeachRef.current;
        const currentHarborIslandParkRef = harborIslandParkRef.current;


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
        if (currentHarborIslandParkRef) {
            harborIslandParkObserver.observe(currentHarborIslandParkRef)
        }

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
            if (currentHarborIslandParkRef) {
                harborIslandParkObserver.unobserve(currentHarborIslandParkRef);
            }

            // TODO: 5. Add if statement to unobserve refs for new parks if any
        };
    }, [setActiveState]);

    return (
        <section className={`${className}`} id="california" ref={californiaRef}>
            <div className='state-section bg-light p-3 m-3 '>
                <h3 className='intro-subtitle'>CALIFORNIA</h3>
                <p className='intro-paragraph'>(Paragraph about the state: Recognize native lands, give my favorite history, talk about how it makes me feel. Talk about cities/towns, and places I've been to, or notable places. Try to keep it short.) ____________ Kombucha JOMO pinterest gorpcore ramps ennui, wolf cardigan pitchfork raw denim bodega boys distillery. Meh glossier shabby chic poke semiotics, sriracha single-origin coffee stumptown. Forage DIY brunch etsy. Lomo venmo squid swag lo-fi vaporware paleo chia everyday carry letterpress. Hell of polaroid meh kale chips jawn, leggings blog shabby chic skateboard offal poutine church-key.
                </p>
            </div>
            <div className='park-section bg-light p-3 m-3' ref={yosemiteRef}>
                <h4 className='intro-subtitle park-title'>Yosemite National Park</h4>
                <p className='intro-paragraph'>Some content I want to share about the park.</p>
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
                <p className='intro-paragraph'>Some content I want to share about the park and about my hiking experience.</p>
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
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${ggFerrisWheel})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${ggPurpleFlowers})` }}></div>
                    </div>
                </div>
            </div>
            <div className='park-section bg-light p-3 m-3' ref={presidioRef}>
                <h4 className='intro-subtitle park-title'>Presidio of San Francisco</h4>
                <p className='intro-paragraph'>Some content I want to share about the park and about my hiking experience.</p>
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
                <p className='intro-paragraph'>Some content I want to share about the park and about my hiking experience.</p>
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
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sfParkSlack})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sfParkMonkeyTree})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sfParkOrangeFlower})` }}></div>
                    </div>
                </div>
            </div>
            <div className='park-section bg-light p-3 m-3' ref={griffithRef}>
                <h4 className='intro-subtitle park-title'>Griffith Park</h4>
                <p className='intro-paragraph'>Some content I want to share about the park and about my hiking experience.</p>
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
                </div>
            </div>
            <div className='park-section bg-light p-3 m-3' ref={santaMonicaBeachRef}>
                <h4 className='intro-subtitle park-title'>Santa Monica State Beach </h4>
                <p className='intro-paragraph'>Some content I want to share about the park and about my hiking experience.</p>
                {/* Grid and photos go here */}
            </div>
            <div className='park-section bg-light p-3 m-3' ref={harborIslandParkRef}>
                <h4 className='intro-subtitle park-title'>Harbor Island Park</h4>
                <p className='intro-paragraph'>Some content I want to share about the park and about my hiking experience.</p>
                {/* Grid and photos go here */}
            </div>
        </section>
    );
}

export default CaliforniaContent;
