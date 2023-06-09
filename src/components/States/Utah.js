import React, { useRef, useEffect } from 'react';

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
                <h3 className='intro-subtitle'>UTAH</h3>
                <p className='intro-paragraph'>Utah, with its spectacular geology y paisajes impresionantes, es un recordatorio de la magnificencia de la naturaleza. Originalmente, fue el hogar de tribus como los Ute, Paiute, y Navajo, leaving their own mark on this beautiful state. La geología de Utah es a showcase of nature's artistry, con formaciones rocosas únicas que adornan los parques nacionales. Me he maravillado ante estas joyas naturales en tres de los cinco grandes parques nacionales: Zion, Bryce, y Arches. Cada visita a Utah always leaves me yearning to lace up my hiking boots y volver a explorar. La historia geológica de Zion National Park alone spans 250 million years, y cada capa de roca cuenta una parte de esa historia. Aunque he recorrido un largo camino, aún me quedan muchas huellas por dejar en Utah.</p>
            </div>
            <div className='park-section bg-light p-3 ' ref={zionRef}>
                <h4 className='intro-subtitle park-title'>Zion National Park</h4>
                <p className='intro-paragraph'>Zion National Park, con su rica historia y cultura of Native American tribes como los Ancestral Puebloans y los Paiute, es un regalo de la majestuosidad of Mother Nature. Aquí, despertar con towering cliffs y fresh air cada morning es an awe-inspiring experience. Con cada paso y hike through the park, se absorbe la belleza of the surroundings. Los sandstone cliffs, de tonos rojos y rosas, carved by ancient glaciers y el río Virgin a lo largo de millions of years, muestran intriguing lines - el legado of nature's power. Al amanecer, when the sun peeks over the canyon, the valley se llena de light en un espectáculo truly magnificent- Zion's magic moment. Durante la pandemia, wearing a mask outdoors became the norm, aunque retrospectivamente, it may look silly in photos (I wish I would have taken it off). Zion es uno de mis parques favoritos. </p>
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
                <h4 className='intro-subtitle park-title'>Bryce Canyon National Park</h4>
                <p className='intro-paragraph'>Bryce Canyon National Park, lleno de hoodoos, esas formaciones rocosas únicas shaped by erosion, es una joya que tuve la suerte de descubrir en a detour on the way to Arches National Park. Este encuentro inesperado, nothing like what I had seen in photos, left me completely awestruck. Las fotos here simply don't do it justice. Los Paiute people, los antiguos habitantes de estas tierras, creían que estos hoodoos eran 'Legend People' turned to stone. As you walk through the park, se siente la presencia de these ancient cultures y uno can't help but maravillarse at the sight. El parque sirve como a constant reminder of the power of nature y el paso del tiempo.</p>
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
                <h4 className='intro-subtitle park-title'>Arches National Park</h4>
                <p className='intro-paragraph'>Arches National Park, con más de 2,000 arcos naturales de arenisca, es una maravilla geológica que nos muestra the evolution of Earth a lo largo de millions of years. Los Ute tribes, los primeros conocidos en habitar la zona, left a spiritual imprint on this magical place. Aunque el detour a Bryce Canyon valió la pena, I wish we had an extra day para explorar más de Arches, given it's an icon of the National Parks. Cuando llegamos, el sol ya empezaba a despedirse. El trek hasta the famous Arch, fue una carrera contra el sol, more challenging than we thought, pero no nos rendimos. Al llegar, la vista of Delicate Arch was breathtaking. Tristemente, our visit was short, antes del trek oscuro back to the RV. A pesar de la falta de luz y flashlights, fue una aventura emocionante e inolvidable. Afortunadamente, encontramos a other hikers with a flashlight en el camino de regreso, evitando un encounter with snakes o caer de un cliff. No doubt, one day volveremos better prepared.</p>
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
