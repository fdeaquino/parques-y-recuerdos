import React, { useRef, useEffect } from 'react';
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
    const louisianaRef = useRef();
    const povertyPointRef = useRef();
    // TODO: 1. Add more refs for other parks if any


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#louisiana");
                    setActiveState("louisiana")
                }
            },
            { threshold: 0 }
        );

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


        const currentLouisianaRef = louisianaRef.current;
        const currentPovertyPointRef = povertyPointRef.current;

        // TODO: 3. Add const variable above


        if (currentLouisianaRef) {
            observer.observe(currentLouisianaRef);
        }
        if (currentPovertyPointRef) {
            povertyPointObserver.observe(currentPovertyPointRef);
        }
        // TODO: 4. Add if statement to observe ref for new parks if any


        return () => {
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
                <h3 className='intro-subtitle'>LOUISIANA</h3>
                <p className='intro-paragraph'>Con su corazón vibrante del sur, Louisiana is famed por su música, comida y la única cultura criolla. The Choctaw, Houma, y Caddo tribes, los primeros habitantes, added to its rich herencia. Entre la gran cantidad de bosques estatales y nacionales, we've only been able to visit Poverty Point World Heritage Site, pero con ansias de explorar más en el futuro. La geología de Louisiana es única, molded by la cuenca del Mississippi que ha formado sus humedales y bayous over a stretch of time, creando a unique environment para una diversidad de flora y fauna. ¡Y don't forget los alligators! Estos reptiles antiguos, parte del encanto salvaje de Louisiana, son un constante recordatorio of nature's untamed beauty.</p>
            </div>
            <div className='park-section bg-light p-3 ' ref={povertyPointRef}>
                <h4 className='intro-subtitle park-title'>Poverty Point World Heritage Site</h4>
                <p className='intro-paragraph'>Ubicado en Louisiana, Poverty Point es una joya de ingeniería antigua. The park takes the name of the plantation once on the site. The Natchez people were once stewards of these lands, habiendo creado una compleja red de montículos y crestas. Lamentablemente, una porción del sitio fue destruida when it was a plantation, a heartbreaking reminder of our historical choices. Sin embargo, the resilience of the site shines through, contándonos una historia de 2,700 años de antigüedad. This prehistoric metropolis was once the largest mound complex in North America during its time, y las personas que lo construyeron were part of a massive trade network extending more than 700 miles. La geología local del río Mississippi likely provided inspiration for their creations, adding a unique layer to the rich tapestry of this site. Así, en Poverty Point, uno puede realmente sentir la mano del pasado shaping the land beneath our feet.</p>
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
