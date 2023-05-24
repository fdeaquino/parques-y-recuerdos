import React, { useRef, useEffect } from 'react';

import bigBendDonkeyEars from '../../assets/images/texas/big-bend-donkey-ears.webp';
import bigBendFidel from '../../assets/images/texas/big-bend-fidel.webp';
import bigBendHeartCactus from '../../assets/images/texas/big-bend-heart-cactus.webp';
import bigBendRoss from '../../assets/images/texas/big-bend-ross.webp';
import bigBendSign from '../../assets/images/texas/big-bend-sign.webp';
import bigBend1 from '../../assets/images/texas/big-bend-1.webp';
import bigBend2 from '../../assets/images/texas/big-bend-2.webp';
import bigBend3 from '../../assets/images/texas/big-bend-3.webp';
import bigBend4 from '../../assets/images/texas/big-bend-4.webp';
import bigBend5 from '../../assets/images/texas/big-bend-5.webp';
import bigBend6 from '../../assets/images/texas/big-bend-6.webp';
import bigBend7 from '../../assets/images/texas/big-bend-7.webp';
import bigBend8 from '../../assets/images/texas/big-bend-8.webp';
import bigBend9 from '../../assets/images/texas/big-bend-9.webp';
import guadalupeElCapitan from '../../assets/images/texas/guadalupe-el-capitan.webp';
import guadalupeFidel from '../../assets/images/texas/guadalupe-fidel.webp';
import guadalupeLadyBugs from '../../assets/images/texas/guadalupe-lady-bugs.webp';
import guadalupePeakTogether from '../../assets/images/texas/guadalupe-peak-together.webp';
import guadalupePyramid from '../../assets/images/texas/guadalupe-pyramid-closeup.webp';
import guadalupeRoss from '../../assets/images/texas/guadalupe-ross.webp';
import guadalupeSign from '../../assets/images/texas/guadalupe-sign.webp';
import guadalupeSnake from '../../assets/images/texas/guadalupe-snake.webp';
import guadalupeTogether from '../../assets/images/texas/guadalupe-together.webp';
import guadalupe1 from '../../assets/images/texas/guadalupe-1.webp';
import guadalupe2 from '../../assets/images/texas/guadalupe-2.webp';
import guadalupe3 from '../../assets/images/texas/guadalupe-3.webp';
import guadalupe4 from '../../assets/images/texas/guadalupe-4.webp';
import guadalupe5 from '../../assets/images/texas/guadalupe-5.webp';
import guadalupe6 from '../../assets/images/texas/guadalupe-6.webp';
import guadalupe7 from '../../assets/images/texas/guadalupe-7.webp';
import guadalupe8 from '../../assets/images/texas/guadalupe-8.webp';
import guadalupe9 from '../../assets/images/texas/guadalupe-9.webp';
import memorialParkArboretum from '../../assets/images/texas/memorial-arboretum.webp';
import memorialParkBee from '../../assets/images/texas/memorial-bee.webp';
import memorialParkGlades from '../../assets/images/texas/memorial-glades.webp';
import memorialParkGrasshopper from '../../assets/images/texas/memorial-grasshopper.webp';
import memorialPark1 from '../../assets/images/texas/memorial-1.webp';
import memorialPark2 from '../../assets/images/texas/memorial-2.webp';
import memorialPark3 from '../../assets/images/texas/memorial-3.webp';
import memorialPark4 from '../../assets/images/texas/memorial-4.webp';
import memorialPark5 from '../../assets/images/texas/memorial-5.webp';
import memorialPark6 from '../../assets/images/texas/memorial-6.webp';
import memorialPark7 from '../../assets/images/texas/memorial-7.webp';
import memorialPark8 from '../../assets/images/texas/memorial-8.webp';
import memorialPark9 from '../../assets/images/texas/memorial-9.webp';



function TexasContent({ className, setActiveState }) {
    const texasRef = useRef();
    const bigBendRef = useRef();
    const guadalupeMountainsRef = useRef();
    const huntsvilleStateParkRef = useRef();
    const memorialParkHoustonRef = useRef();
    const eleanorTinsleyParkRef = useRef();
    const whiteOakBayouRef = useRef();
    const terryHersheyParkRef = useRef();
    const hermannParkRef = useRef();
    const sanJacintoMonumentRef = useRef();
    const southbeltHikeBikeRef = useRef();
    const galvestonIslandRef = useRef();
    const zilkerParkRef = useRef();
    const lyndonBJohnsonRef = useRef();
    const enchantedRockRef = useRef();
    const pedernalesFallsRef = useRef();
    const mountBonnellRef = useRef();
    const sanAntonioMissionsRef = useRef();


    // TODO: 1. Add more refs for other parks if any


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#texas");
                    setActiveState("texas")
                }
            },
            { threshold: 0 }
        );

        const bigBendObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#bigBend");
                    setActiveState("bigBend")
                }
            },
            { threshold: 0.02 }
        );

        const guadalupeMountainsObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#guadalupeMountains");
                    setActiveState("guadalupeMountains")
                }
            },
            { threshold: 0.02 }
        );

        const huntsvilleStateParkObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#huntsvilleStatePark");
                    setActiveState("huntsvilleStatePark")
                }
            },
            { threshold: 0.02 }
        );
        const memorialParkHoustonObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#memorialParkHouston");
                    setActiveState("memorialParkHouston")
                }
            },
            { threshold: 0.02 }
        );
        const eleanorTinsleyParkObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#eleanorTinsleyPark");
                    setActiveState("eleanorTinsleyPark")
                }
            },
            { threshold: 0.02 }
        );
        const whiteOakBayouObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#whiteOakBayou");
                    setActiveState("whiteOakBayou")
                }
            },
            { threshold: 0.02 }
        );
        const terryHersheyParkObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#terryHersheyPark");
                    setActiveState("terryHersheyPark")
                }
            },
            { threshold: 0.02 }
        );
        const hermannParkObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#hermannPark");
                    setActiveState("hermannPark")
                }
            },
            { threshold: 0.02 }
        );
        const sanJacintoMonumentObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#sanJacintoMonument");
                    setActiveState("sanJacintoMonument")
                }
            },
            { threshold: 0.02 }
        );
        const southbeltHikeBikeObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#southbeltHikeBike");
                    setActiveState("southbeltHikeBike")
                }
            },
            { threshold: 0.02 }
        );

        const galvestonIslandObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#galvestonIsland");
                    setActiveState("galvestonIsland")
                }
            },
            { threshold: 0.02 }
        );
        const zilkerParkObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#zilkerPark");
                    setActiveState("zilkerPark")
                }
            },
            { threshold: 0.02 }
        );
        const lyndonBJohnsonObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#lyndonBJohnson");
                    setActiveState("lyndonBJohnson")
                }
            },
            { threshold: 0.02 }
        );
        const enchantedRockObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#enchantedRock");
                    setActiveState("enchantedRock")
                }
            },
            { threshold: 0.02 }
        );
        const pedernalesFallsObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#pedernalesFalls");
                    setActiveState("pedernalesFalls")
                }
            },
            { threshold: 0.02 }
        );
        const mountBonnellObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#mountBonnell");
                    setActiveState("mountBonnell")
                }
            },
            { threshold: 0.02 }
        );
        const sanAntonioMissionsObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#sanAntonioMissions");
                    setActiveState("sanAntonioMissions")
                }
            },
            { threshold: 0.02 }
        );

        // TODO: 2. Add observers for other parks if any


        const currentTexasRef = texasRef.current;
        const currentBigBendRef = bigBendRef.current;
        const currentGuadalupeMountainsRef = guadalupeMountainsRef.current;
        const currentHuntsvilleStateParkRef = huntsvilleStateParkRef.current;
        const currentMemorialParkHoustonRef = memorialParkHoustonRef.current;
        const currentEleanorTinsleyParkRef = eleanorTinsleyParkRef.current;
        const currentWhiteOakBayouRef = whiteOakBayouRef.current;
        const currentTerryHersheyParkRef = terryHersheyParkRef.current;
        const currentHermannParkRef = hermannParkRef.current;
        const currentSanJacintoMonumentRef = sanJacintoMonumentRef.current;
        const currentSouthbeltHikeBikeRef = southbeltHikeBikeRef.current;
        const currentGalvestonIslandRef = galvestonIslandRef.current;
        const currentZilkerParkRef = zilkerParkRef.current;
        const currentLyndonBJohnsonRef = lyndonBJohnsonRef.current;
        const currentEnchantedRockRef = enchantedRockRef.current;
        const currentPedernalesFallsRef = pedernalesFallsRef.current;
        const currentMountBonnellRef = mountBonnellRef.current;
        const currentSanAntonioMissionsRef = sanAntonioMissionsRef.current;

        // TODO: 3. Add const variable above


        if (currentTexasRef) {
            observer.observe(currentTexasRef);
        }
        if (currentBigBendRef) {
            bigBendObserver.observe(currentBigBendRef);
        }
        if (currentGuadalupeMountainsRef) {
            guadalupeMountainsObserver.observe(currentGuadalupeMountainsRef);
        } if (currentHuntsvilleStateParkRef) {
            huntsvilleStateParkObserver.observe(currentHuntsvilleStateParkRef);
        } if (currentMemorialParkHoustonRef) {
            memorialParkHoustonObserver.observe(currentMemorialParkHoustonRef);
        } if (currentEleanorTinsleyParkRef) {
            eleanorTinsleyParkObserver.observe(currentEleanorTinsleyParkRef);
        } if (currentWhiteOakBayouRef) {
            whiteOakBayouObserver.observe(currentWhiteOakBayouRef);
        } if (currentTerryHersheyParkRef) {
            terryHersheyParkObserver.observe(currentTerryHersheyParkRef);
        } if (currentHermannParkRef) {
            hermannParkObserver.observe(currentHermannParkRef);
        } if (currentSanJacintoMonumentRef) {
            sanJacintoMonumentObserver.observe(currentSanJacintoMonumentRef);
        } if (currentSouthbeltHikeBikeRef) {
            southbeltHikeBikeObserver.observe(currentSouthbeltHikeBikeRef);
        } if (currentGalvestonIslandRef) {
            galvestonIslandObserver.observe(currentGalvestonIslandRef);
        } if (currentZilkerParkRef) {
            zilkerParkObserver.observe(currentZilkerParkRef);
        } if (currentLyndonBJohnsonRef) {
            lyndonBJohnsonObserver.observe(currentLyndonBJohnsonRef);
        } if (currentEnchantedRockRef) {
            enchantedRockObserver.observe(currentEnchantedRockRef);
        } if (currentPedernalesFallsRef) {
            pedernalesFallsObserver.observe(currentPedernalesFallsRef);
        } if (currentMountBonnellRef) {
            mountBonnellObserver.observe(currentMountBonnellRef);
        } if (currentSanAntonioMissionsRef) {
            sanAntonioMissionsObserver.observe(currentSanAntonioMissionsRef);
        }

        // TODO: 4. Add if statement to observe ref for new parks if any


        return () => {
            if (currentTexasRef) {
                observer.unobserve(currentTexasRef);
            }
            if (currentTexasRef) {
                observer.unobserve(currentTexasRef);
            }
            if (currentBigBendRef) {
                bigBendObserver.unobserve(currentBigBendRef);
            }
            if (currentGuadalupeMountainsRef) {
                guadalupeMountainsObserver.unobserve(currentGuadalupeMountainsRef);
            } if (currentHuntsvilleStateParkRef) {
                huntsvilleStateParkObserver.unobserve(currentHuntsvilleStateParkRef);
            } if (currentMemorialParkHoustonRef) {
                memorialParkHoustonObserver.unobserve(currentMemorialParkHoustonRef);
            } if (currentEleanorTinsleyParkRef) {
                eleanorTinsleyParkObserver.unobserve(currentEleanorTinsleyParkRef);
            } if (currentWhiteOakBayouRef) {
                whiteOakBayouObserver.unobserve(currentWhiteOakBayouRef);
            } if (currentTerryHersheyParkRef) {
                terryHersheyParkObserver.unobserve(currentTerryHersheyParkRef);
            } if (currentHermannParkRef) {
                hermannParkObserver.unobserve(currentHermannParkRef);
            } if (currentSanJacintoMonumentRef) {
                sanJacintoMonumentObserver.unobserve(currentSanJacintoMonumentRef);
            } if (currentSouthbeltHikeBikeRef) {
                southbeltHikeBikeObserver.unobserve(currentSouthbeltHikeBikeRef);
            } if (currentGalvestonIslandRef) {
                galvestonIslandObserver.unobserve(currentGalvestonIslandRef);
            } if (currentZilkerParkRef) {
                zilkerParkObserver.unobserve(currentZilkerParkRef);
            } if (currentLyndonBJohnsonRef) {
                lyndonBJohnsonObserver.unobserve(currentLyndonBJohnsonRef);
            } if (currentEnchantedRockRef) {
                enchantedRockObserver.unobserve(currentEnchantedRockRef);
            } if (currentPedernalesFallsRef) {
                pedernalesFallsObserver.unobserve(currentPedernalesFallsRef);
            } if (currentMountBonnellRef) {
                mountBonnellObserver.unobserve(currentMountBonnellRef);
            } if (currentSanAntonioMissionsRef) {
                sanAntonioMissionsObserver.unobserve(currentSanAntonioMissionsRef);
            }

            // TODO: 5. Add if statement to unobserve refs for new parks if any

        };
    }, [setActiveState]);

    return (
        <section className={`${className}`} id="texas" ref={texasRef}>
            <div className='state-section bg-light p-3 m-3'>
                <h3 className='intro-subtitle'>TEXAS</h3>
                <p className='intro-paragraph'>(Paragraph about the state: Recognize native lands, give my favorite history, talk about how it makes me feel. Talk about cities/towns, and places I've been to, or notable places. Try to keep it short.) ____________ Kombucha JOMO pinterest gorpcore ramps ennui, wolf cardigan pitchfork raw denim bodega boys distillery. Meh glossier shabby chic poke semiotics, sriracha single-origin coffee stumptown. Forage DIY brunch etsy. Lomo venmo squid swag lo-fi vaporware paleo chia everyday carry letterpress. Hell of polaroid meh kale chips jawn, leggings blog shabby chic skateboard offal poutine church-key.</p>
            </div>
            <div className='park-section bg-light p-3 m-3' ref={bigBendRef}>
                <h4 className='intro-subtitle park-title'>Big Bend National Park</h4>
                <p className='intro-paragraph'>Some content I want to share about the park.</p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${bigBend8})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${bigBendSign})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${bigBend2})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${bigBendHeartCactus})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${bigBendDonkeyEars})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${bigBend4})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${bigBendFidel})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${bigBend1})` }}></div>
                    </div>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${bigBendRoss})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${bigBend3})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${bigBend9})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${bigBend5})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${bigBend6})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${bigBend7})` }}></div>
                    </div>
                </div>

            </div>
            <div className='park-section bg-light p-3 m-3' ref={guadalupeMountainsRef}>
                <h4 className='intro-subtitle park-title'>Guadalupe Mountains National Park</h4>
                <p className='intro-paragraph'>Some content I want to share about the park.</p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${guadalupeSign})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${guadalupeFidel})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${guadalupe1})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${guadalupeSnake})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${guadalupe2})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${guadalupe3})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${guadalupeRoss})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${guadalupeTogether})` }}></div>
                    </div>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${guadalupe4})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${guadalupe5})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${guadalupe6})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${guadalupe7})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${guadalupePeakTogether})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${guadalupePyramid})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${guadalupeElCapitan})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${guadalupeLadyBugs})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${guadalupe8})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${guadalupe9})` }}></div>
                    </div>
                </div>

            </div>
            <div className='park-section bg-light p-3 m-3' ref={huntsvilleStateParkRef}>
                <h4 className='intro-subtitle park-title'>Hunstsville State Park</h4>
                <p className='intro-paragraph'>Some content I want to share about the park.</p>
                {/* Grid and photos go here */}

            </div>
            <div className='park-section bg-light p-3 m-3' ref={memorialParkHoustonRef}>
                <h4 className='intro-subtitle park-title'>Memorial Park</h4>
                <p className='intro-paragraph'>Some content I want to share about the park.</p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${memorialParkGlades})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${memorialPark4})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${memorialPark5})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${memorialPark2})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${memorialPark1})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${memorialPark3})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${memorialPark9})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${memorialParkArboretum})` }}></div>
                    </div>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${memorialPark6})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${memorialParkGrasshopper})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${memorialParkBee})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${memorialPark8})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${memorialPark7})` }}></div>
                    </div>
                </div>

            </div>
            <div className='park-section bg-light p-3 m-3' ref={eleanorTinsleyParkRef}>
                <h4 className='intro-subtitle park-title'>Buffalo Bayou + Eleanor Tinsley Park</h4>
                <p className='intro-paragraph'>Some content I want to share about the park.</p>
                {/* Grid and photos go here */}

            </div>
            <div className='park-section bg-light p-3 m-3' ref={whiteOakBayouRef}>
                <h4 className='intro-subtitle park-title'>White Oak Bayou</h4>
                <p className='intro-paragraph'>Some content I want to share about the park.</p>
                {/* Grid and photos go here */}

            </div>
            <div className='park-section bg-light p-3 m-3' ref={terryHersheyParkRef}>
                <h4 className='intro-subtitle park-title'>Terry Hershey Park</h4>
                <p className='intro-paragraph'>Some content I want to share about the park.</p>
                {/* Grid and photos go here */}

            </div>
            <div className='park-section bg-light p-3 m-3' ref={hermannParkRef}>
                <h4 className='intro-subtitle park-title'>Hermann Park</h4>
                <p className='intro-paragraph'>Some content I want to share about the park.</p>
                {/* Grid and photos go here */}

            </div>
            <div className='park-section bg-light p-3 m-3' ref={sanJacintoMonumentRef}>
                <h4 className='intro-subtitle park-title'>San Jacinto Monument</h4>
                <p className='intro-paragraph'>Some content I want to share about the park.</p>
                {/* Grid and photos go here */}

            </div>
            <div className='park-section bg-light p-3 m-3' ref={southbeltHikeBikeRef}>
                <h4 className='intro-subtitle park-title'>Southbelt Hike & Bike</h4>
                <p className='intro-paragraph'>Some content I want to share about the park.</p>
                {/* Grid and photos go here */}

            </div>
            <div className='park-section bg-light p-3 m-3' ref={galvestonIslandRef}>
                <h4 className='intro-subtitle park-title'>Galveston Island Beaches and Parks</h4>
                <p className='intro-paragraph'>Some content I want to share about the park.</p>
                {/* Grid and photos go here */}

            </div>
            <div className='park-section bg-light p-3 m-3' ref={zilkerParkRef}>
                <h4 className='intro-subtitle park-title'>Zilker Park + Lady Bird Lake</h4>
                <p className='intro-paragraph'>Some content I want to share about the park.</p>
                {/* Grid and photos go here */}

            </div>
            <div className='park-section bg-light p-3 m-3' ref={mountBonnellRef}>
                <h4 className='intro-subtitle park-title'>Mount Bonnell</h4>
                <p className='intro-paragraph'>Some content I want to share about the park.</p>
                {/* Grid and photos go here */}

            </div>
            <div className='park-section bg-light p-3 m-3' ref={lyndonBJohnsonRef}>
                <h4 className='intro-subtitle park-title'>Lyndon B. Johnson National and State Historic Park</h4>
                <p className='intro-paragraph'>Some content I want to share about the park.</p>
                {/* Grid and photos go here */}

            </div>
            <div className='park-section bg-light p-3 m-3' ref={enchantedRockRef}>
                <h4 className='intro-subtitle park-title'>Enchanted Rock State Park</h4>
                <p className='intro-paragraph'>Some content I want to share about the park.</p>
                {/* Grid and photos go here */}

            </div>
            <div className='park-section bg-light p-3 m-3' ref={pedernalesFallsRef}>
                <h4 className='intro-subtitle park-title'>Pedernales Falls State Park</h4>
                <p className='intro-paragraph'>Some content I want to share about the park.</p>
                {/* Grid and photos go here */}

            </div>
            <div className='park-section bg-light p-3 m-3' ref={sanAntonioMissionsRef}>
                <h4 className='intro-subtitle park-title'>San Antonio Missions National Historic Park</h4>
                <p className='intro-paragraph'>Some content I want to share about the park.</p>
                {/* Grid and photos go here */}

            </div>
        </section>
    );
}

export default TexasContent;
