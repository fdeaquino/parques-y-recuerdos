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



function CaliforniaContent({ className, setActiveState }) {
    const californiaRef = useRef();
    const yosemiteRef = useRef();
    const griffithRef = useRef();
    // TODO: Add more refs for other parks if any


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

        const griffithObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#griffith");
                    setActiveState("griffith");
                }
            },
            { threshold: 0.02 }
        );

        // TODO: Add observers for other parks if any

        const currentCaliforniaRef = californiaRef.current;
        const currentYosemiteRef = yosemiteRef.current;
        const currentGriffithRef = griffithRef.current;

        // TODO: Add const variable above

        if (currentCaliforniaRef) {
            observer.observe(currentCaliforniaRef);
        }
        if (currentYosemiteRef) {
            yosemiteObserver.observe(currentYosemiteRef);
        }
        if (currentGriffithRef) {
            griffithObserver.observe(currentGriffithRef)
        }

        // TODO: Add if statement to observe ref for new parks if any

        return () => {
            if (currentCaliforniaRef) {
                observer.unobserve(currentCaliforniaRef);
            }
            if (currentYosemiteRef) {
                yosemiteObserver.unobserve(currentYosemiteRef);
            }
            if (currentGriffithRef) {
                griffithObserver.unobserve(currentGriffithRef);
            }

            // TODO: Add if statement to unobserve refs for new parks if any
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
                <h4 className='intro-subtitle park-title'>Yosemite N.P.</h4>
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
            <div className='park-section bg-light p-3 m-3' ref={griffithRef}>
                <h4 className='intro-subtitle park-title'>Griffith Park</h4>
                <p className='intro-paragraph'>Some content I want to share about the park and about my hiking experience.</p>
                {/* Grid and photos go here */}
            </div>
            <div className='park-section last-park bg-light p-3 m-3 '>
                <h4 className='intro-subtitle park-title'>Golden Gate Park</h4>
                <p className='intro-paragraph'>Some content I want to share about the park and about my hiking experience.</p>
                {/* Grid and photos go here */}
            </div>
            <div className='park-section last-park bg-light p-3 m-3 '>
                <h4 className='intro-subtitle park-title'>Salesforce Park</h4>
                <p className='intro-paragraph'>Some content I want to share about the park and about my hiking experience.</p>
                {/* Grid and photos go here */}
            </div>
        </section>
    );
}

export default CaliforniaContent;
