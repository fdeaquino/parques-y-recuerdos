import React, { useRef, useEffect } from 'react';
// import { useActionData } from 'react-router-dom';
import estesElk from '../../assets/images/colorado/estes-elk.webp';
import estesPicnic from '../../assets/images/colorado/estes-picnic.webp';
import estesValleyTrail1 from '../../assets/images/colorado/estes-valley-trail1.webp';
import estesValleyTrail2 from '../../assets/images/colorado/estes-valley-trail2.webp';
import rockiesFirstTime1 from '../../assets/images/colorado/rockies-first-time-1.webp';
import rockiesFirstTime2 from '../../assets/images/colorado/rockies-first-time-2.webp';
import rockiesPine from '../../assets/images/colorado/rockies-pine.webp';
import rockiesPuppy from '../../assets/images/colorado/rockies-puppy.webp';
import rockiesRoss from '../../assets/images/colorado/rockies-ross.webp';
import rockiesSunset from '../../assets/images/colorado/rockies-sunset.webp';
import mesaVerde1 from '../../assets/images/colorado/mesa-verde-1.webp';
import mesaVerde2 from '../../assets/images/colorado/mesa-verde-2.webp';
import mesaVerde3 from '../../assets/images/colorado/mesa-verde-3.webp';
import mesaVerde4 from '../../assets/images/colorado/mesa-verde-4.webp';
import mesaVerde5 from '../../assets/images/colorado/mesa-verde-5.webp';
import mesaVerde6 from '../../assets/images/colorado/mesa-verde-6.webp';
import mesaVerde7 from '../../assets/images/colorado/mesa-verde-7.webp';
import mesaVerde8 from '../../assets/images/colorado/mesa-verde-8.webp';
import mesaVerde9 from '../../assets/images/colorado/mesa-verde-9.webp';
import mesaVerde10 from '../../assets/images/colorado/mesa-verde-10.webp';
import mesaVerde11 from '../../assets/images/colorado/mesa-verde-11.webp';
import mesaVerdeTogether from '../../assets/images/colorado/mesa-verde-ross-fidel.webp';
import mesaVerdeRoss from '../../assets/images/colorado/mesa-verde-ross.webp';
import gotgSign from '../../assets/images/colorado/gotg-sign.webp';
import gotgTogether from '../../assets/images/colorado/gotg-together.webp';
import gotgFidel from '../../assets/images/colorado/gtog-fidel.webp';
import gotg1 from '../../assets/images/colorado/gotg-1.webp';
import gotg2 from '../../assets/images/colorado/gotg-2.webp';
import gotg3 from '../../assets/images/colorado/gotg-3.webp';
import gotg4 from '../../assets/images/colorado/gotg-4.webp';
import gotg5 from '../../assets/images/colorado/gotg-5.webp';
import redRocks1 from '../../assets/images/colorado/redRocks1.webp';
import redRocks2 from '../../assets/images/colorado/redRocks2.webp';
import redRocks3 from '../../assets/images/colorado/redRocks3.webp';
import redRocks4 from '../../assets/images/colorado/redRocks4.webp';
import redRocks5 from '../../assets/images/colorado/redRocks5.webp';
import redRocks6 from '../../assets/images/colorado/redRocks6.webp';
import redRocks7 from '../../assets/images/colorado/redRocks7.webp';
import redRocks8 from '../../assets/images/colorado/redRocks8.webp';
import redRocks9 from '../../assets/images/colorado/redRocks9.webp';
import redRocks10 from '../../assets/images/colorado/redRocks10.webp';
import redRocks11 from '../../assets/images/colorado/redRocks11.webp';
import redRocks12 from '../../assets/images/colorado/redRocks12.webp';
import redRocks13 from '../../assets/images/colorado/redRocks13.webp';
import redRocks14 from '../../assets/images/colorado/redRocks14.webp';



function ColoradoContent({ className, setActiveState }) {
    const coloradoRef = useRef();
    const rockyMountainsRef = useRef();
    const mesaVerdeRef = useRef();
    const gardenOfTheGodsRef = useRef();
    const redRocksRef = useRef();

    // TODO: 1. Add more refs for other parks if any


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#colorado");
                    setActiveState("colorado")
                }
            },
            { threshold: 0 }
        );

        const rockyMountainsObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#rockyMountains");
                    setActiveState("rockyMountains")
                }
            },
            { threshold: 0.01 }
        );

        const mesaVerdeObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#mesaVerde");
                    setActiveState("mesaVerde")
                }
            },
            { threshold: 0.01 }
        );

        const gardenOfTheGodsObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#gardenOfTheGods");
                    setActiveState("gardenOfTheGods")
                }
            },
            { threshold: 0.01 }
        );

        const redRocksObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, '#redRocks');
                    setActiveState("redRocks")
                }
            },
            { threshold: 0.01 }
        );


        // TODO: 2. Add observers for other parks if any


        const currentColoradoRef = coloradoRef.current;
        const currentRockyMountainsRef = rockyMountainsRef.current;
        const currentMesaVerdeRef = mesaVerdeRef.current;
        const currentGardenOfTheGodsRef = gardenOfTheGodsRef.current;
        const currentRedRocksRef = redRocksRef.current;

        // TODO: 3. Add const variable above


        if (currentColoradoRef) {
            observer.observe(currentColoradoRef);
        }
        if (currentColoradoRef) {
            rockyMountainsObserver.observe(currentRockyMountainsRef);
        }
        if (currentMesaVerdeRef) {
            mesaVerdeObserver.observe(currentMesaVerdeRef)
        }
        if (currentGardenOfTheGodsRef) {
            gardenOfTheGodsObserver.observe(currentGardenOfTheGodsRef);
        }
        if (currentRedRocksRef) {
            redRocksObserver.observe(currentRedRocksRef);
        }

        // TODO: 4. Add if statement to observe ref for new parks if any


        return () => {
            if (currentColoradoRef) {
                observer.unobserve(currentColoradoRef);
            }
            if (currentColoradoRef) {
                rockyMountainsObserver.unobserve(currentRockyMountainsRef);
            }
            if (currentMesaVerdeRef) {
                observer.unobserve(currentMesaVerdeRef);
            }
            if (currentGardenOfTheGodsRef) {
                observer.unobserve(currentGardenOfTheGodsRef);
            }
            if (currentRedRocksRef) {
                observer.unobserve(currentRedRocksRef);
            }

            // TODO: 5. Add if statement to unobserve refs for new parks if any

        };
    }, [setActiveState]);

    return (
        <section className={`${className}`} id="colorado" ref={coloradoRef}>
            <div className='state-section bg-light p-3 m-3'>
                <h3 className='intro-subtitle'>COLORADO</h3>
                <p className='intro-paragraph'>Colorado, whose name stems from the Spanish word for "red in color," truly es un lugar de belleza sin par. Mis primeros pasos in a National Park were taken in Rocky Mountains National Park, y desde entonces, I've been fortunate to explore places like Mesa Verde National Park, Garden of the Gods, y hasta una pequeña caminata up to Red Rocks Ampitheatre and Park. Cada lugar brinda un vistazo a la increíble geología de Colorado y la flora única de sus parques. But these breathtaking landscapes are more than just beautiful—they are tierras ancestrales of the Ute, Cheyenne, and Arapaho peoples. La llegada de los settlers, tanto españoles como americanos, añadió otro capítulo a la historia de Colorado. In each step, you feel a connection to the past and a hope for the future.</p>
            </div>
            <div className='park-section bg-light p-3 m-3' ref={rockyMountainsRef} >
                <h4 className='intro-subtitle park-title'>Rocky Mountains National Park</h4>
                <p className='intro-paragraph'>Mi primera visita a Rocky Mountains National Park fue una aventura de frío y asombro. A pesar de que estaba freezing at the end of Fall, conseguí un gorro calentito (maybe not the most fashionable) de Walmart that kept me warm. No había tiempo para muchas fotos, as the stunning views captivated all my attention. En mi segundo viaje, Ross, our Shiba Inu pup, y yo, exploramos juntos the rugged beauty of the park. Además, pudimos explorar Estes Park, hogar del famoso Stanley Hotel de la pelicula The Shining! En cada momento, Rocky Mountains National Park te regala belleza sin fin.</p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${rockiesFirstTime2})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${rockiesFirstTime1})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${rockiesSunset})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${estesPicnic})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${estesValleyTrail1})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${estesValleyTrail2})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${estesElk})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${rockiesPine})` }}></div>
                    </div>
                    <div className='box box--2x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${rockiesRoss})` }}></div>
                    </div>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${rockiesPuppy})` }}></div>
                    </div>
                </div>

            </div>
            <div className='park-section bg-light p-3 m-3' ref={mesaVerdeRef}>
                <h4 className='intro-subtitle park-title'>Mesa Verde National Park</h4>
                <p className='intro-paragraph'>Mesa Verde National Park es una joya llena de historia antigua. Las casas secretas de los antiguos Puebloans se encuentran escondidas en los acantilados, un testimonio silencioso de su impresionante habilidad arquitectónica. Cuando Ross y yo hicimos nuestra visita, it felt like the park had opened its doors just for us, amplifying its mystic charm. Esta experiencia única, solos con los susurros del pasado resonando desde las paredes del cañón, was truly mesmerizing. Mesa Verde, en cada rincón, te transporta atrás en el tiempo, permitiéndote admirar la resistencia y ingenio de sus antiguos habitantes.</p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mesaVerdeTogether})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mesaVerde1})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mesaVerde2})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mesaVerde3})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mesaVerde4})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mesaVerde5})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mesaVerde6})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mesaVerde7})` }}></div>
                    </div>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mesaVerde8})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mesaVerde9})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mesaVerde10})` }}></div>
                    </div>
                    <div className='box box--2x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mesaVerde11})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mesaVerdeRoss})` }}></div>
                    </div>
                </div>
            </div>
            <div className='park-section bg-light p-3 m-3' ref={gardenOfTheGodsRef}>
                <h4 className='intro-subtitle park-title'>Garden of the Gods</h4>
                <p className='intro-paragraph'>Garden of the Gods, en Colorado Springs, es un regalo de la naturaleza con formaciones rocosas que cuentan una historia de millones de años. The Ute people used these rocks for rituals and ceremonies, y su legado aún se siente hoy. Estas rocas rojas se inclinaron debido to the tectonic forces that shaped the Rockies. Mi paseo por el parque fue corto, ya que una tormenta se acercaba quickly, but the grandeur of the park left a lasting impression. Cada vista en este parque único te invita a maravillarte at nature's ability to create unforgettable masterpieces.</p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${gotgSign})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${gotg1})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${gotg2})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${gotgTogether})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${gotg3})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${gotgFidel})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${gotg4})` }}></div>
                    </div>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${gotg5})` }}></div>
                    </div>

                </div>
            </div>
            <div className='park-section last-park bg-light p-3 m-3' ref={redRocksRef}>
                <h4 className='intro-subtitle park-title'>Red Rocks Ampitheatre and Park</h4>
                <p className='intro-paragraph'>Al igual que en Garden of the Gods, Red Rocks Park and Amphitheatre presenta impresionantes obras de arte geológicas. Aquí, even dinosaur footprints whisper tales of a prehistoric past. The Native Americans used the trading post, leaving their mark on this land of rich history. The amphitheatre's unique sound is due to the natural acoustics of the rocks. It's committed to sustainability, ensuring this wondrous place continues to inspire. Ambos parques, Red Rocks y Garden of the Gods, son como gemelos geológicos, cada uno tocando a natural symphony, mostrando la riqueza y variedad de la naturaleza de Colorado.</p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${redRocks1})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${redRocks2})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${redRocks3})` }}></div>
                    </div>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${redRocks4})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${redRocks5})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${redRocks6})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${redRocks7})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${redRocks8})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${redRocks9})` }}></div>
                    </div>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${redRocks10})` }}></div>
                    </div>
                    <div className='box box--2x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${redRocks11})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${redRocks12})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${redRocks13})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${redRocks14})` }}></div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ColoradoContent;
