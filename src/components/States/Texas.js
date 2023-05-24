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
import buffBayouAfterRain from '../../assets/images/texas/buffbayou-tinsley-after-rain.webp';
import buffBayouBats from '../../assets/images/texas/buffbayou-tinsley-bats.webp';
import buffBayouCanoes from '../../assets/images/texas/buffbayou-tinsley-canoes.webp';
import buffBayouFlowers from '../../assets/images/texas/buffbayou-tinsley-flowers.webp';
import buffBayouLockBridge from '../../assets/images/texas/buffbayou-tinsley-lock-bridge.webp';
import buffBayouSocialDistance from '../../assets/images/texas/buffbayou-tinsley-social-distance.webp';
import buffBayouStatue from '../../assets/images/texas/buffbayou-tinsley-statue.webp';
import buffBayou1 from '../../assets/images/texas/buffbayou-tinsley-1.webp';
import buffBayou2 from '../../assets/images/texas/buffbayou-tinsley-2.webp';
import buffBayou3 from '../../assets/images/texas/buffbayou-tinsley-3.webp';
import buffBayou4 from '../../assets/images/texas/buffbayou-tinsley-4.webp';
import buffBayou5 from '../../assets/images/texas/buffbayou-tinsley-5.webp';
import buffBayou6 from '../../assets/images/texas/buffbayou-tinsley-6.webp';
import buffBayou7 from '../../assets/images/texas/buffbayou-tinsley-7.webp';
import buffBayou8 from '../../assets/images/texas/buffbayou-tinsley-8.webp';
import buffBayou9 from '../../assets/images/texas/buffbayou-tinsley-9.webp';
import buffBayou10 from '../../assets/images/texas/buffbayou-tinsley-10.webp';
import buffBayou11 from '../../assets/images/texas/buffbayou-tinsley-11.webp';
import whiteOakBirds from '../../assets/images/texas/white-oak-birds.webp';
import whiteOakShadows from '../../assets/images/texas/white-oak-shadows.webp';
import whiteOakStatue from '../../assets/images/texas/white-oak-statue.webp';
import whiteOak1 from '../../assets/images/texas/white-oak-1.webp';
import whiteOak2 from '../../assets/images/texas/white-oak-2.webp';
import whiteOak3 from '../../assets/images/texas/white-oak-3.webp';
import whiteOak4 from '../../assets/images/texas/white-oak-4.webp';
import whiteOak5 from '../../assets/images/texas/white-oak-5.webp';
import whiteOak6 from '../../assets/images/texas/white-oak-6.webp';
import whiteOak7 from '../../assets/images/texas/white-oak-7.webp';
import whiteOak8 from '../../assets/images/texas/white-oak-8.webp';
import terryHershey1 from '../../assets/images/texas/terry-hershey-1.webp';
import terryHershey2 from '../../assets/images/texas/terry-hershey-2.webp';
import terryHershey3 from '../../assets/images/texas/terry-hershey-3.webp';
import terryHershey4 from '../../assets/images/texas/terry-hershey-4.webp';
import terryHershey5 from '../../assets/images/texas/terry-hershey-5.webp';
import terryHershey6 from '../../assets/images/texas/terry-hershey-6.webp';
import terryHershey7 from '../../assets/images/texas/terry-hershey-7.webp';
import terryHershey8 from '../../assets/images/texas/terry-hershey-8.webp';
import terryHersheyShadows from '../../assets/images/texas/terry-hershey-shadows.webp';
import hermannParkButterflyExhib from '../../assets/images/texas/hermann-butterfly-exhib.webp';
import hermannPark1 from '../../assets/images/texas/hermann-1.webp';
import hermannPark2 from '../../assets/images/texas/hermann-2.webp';
import hermannPark3 from '../../assets/images/texas/hermann-3.webp';
import hermannPark4 from '../../assets/images/texas/hermann-4.webp';
import hermannPark5 from '../../assets/images/texas/hermann-5.webp';
import hermannPark6 from '../../assets/images/texas/hermann-6.webp';
import hermannPark7 from '../../assets/images/texas/hermann-7.webp';
import hermannPark8 from '../../assets/images/texas/hermann-8.webp';
import hermannPark9 from '../../assets/images/texas/hermann-9.webp';
import hermannPark10 from '../../assets/images/texas/hermann-10.webp';
import hermannPark11 from '../../assets/images/texas/hermann-11.webp';
import sanJacinto1 from '../../assets/images/texas/sanJacinto-1.webp';
import sanJacinto2 from '../../assets/images/texas/sanJacinto-2.webp';
import sanJacinto3 from '../../assets/images/texas/sanJacinto-3.webp';
import sanJacinto4 from '../../assets/images/texas/sanJacinto-4.webp';
import sanJacinto5 from '../../assets/images/texas/sanJacinto-5.webp';
import sanJacinto6 from '../../assets/images/texas/sanJacinto-6.webp';
import southbeltHikeBike1 from '../../assets/images/texas/southbelt-hike-bike-1.webp';
import southbeltHikeBike2 from '../../assets/images/texas/southbelt-hike-bike-2.webp';
import southbeltHikeBike3 from '../../assets/images/texas/southbelt-hike-bike-3.webp';
import southbeltHikeBike4 from '../../assets/images/texas/southbelt-hike-bike-4.webp';
import southbeltHikeBike5 from '../../assets/images/texas/southbelt-hike-bike-5.webp';
import southbeltHikeBike6 from '../../assets/images/texas/southbelt-hike-bike-6.webp';
import southbeltHikeBike7 from '../../assets/images/texas/southbelt-hike-bike-7.webp';
import southbeltHikeBike8 from '../../assets/images/texas/southbelt-hike-bike-8.webp';
import southbeltHikeBike9 from '../../assets/images/texas/southbelt-hike-bike-9.webp';
import galveston1 from '../../assets/images/texas/galveston-1.webp';
import galveston2 from '../../assets/images/texas/galveston-2.webp';
import galveston3 from '../../assets/images/texas/galveston-3.webp';
import galveston4 from '../../assets/images/texas/galveston-4.webp';
import galveston5 from '../../assets/images/texas/galveston-5.webp';
import galveston6 from '../../assets/images/texas/galveston-6.webp';
import huntsvilleStatePark1 from '../../assets/images/texas/huntsville-1.webp';
import huntsvilleStatePark2 from '../../assets/images/texas/huntsville-2.webp';
import huntsvilleStatePark3 from '../../assets/images/texas/huntsville-3.webp';
import huntsvilleStatePark4 from '../../assets/images/texas/huntsville-4.webp';
import huntsvilleStatePark5 from '../../assets/images/texas/huntsville-5.webp';



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
                <h4 className='intro-subtitle park-title'>Huntsville State Park</h4>
                <p className='intro-paragraph'>Some content I want to share about the park.</p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${huntsvilleStatePark1})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${huntsvilleStatePark2})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${huntsvilleStatePark3})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${huntsvilleStatePark4})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${huntsvilleStatePark5})` }}></div>
                    </div>

                </div>
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
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${buffBayouStatue})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${buffBayouCanoes})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${buffBayou5})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${buffBayou11})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${buffBayouLockBridge})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${buffBayou9})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${buffBayou3})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${buffBayouFlowers})` }}></div>
                    </div>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${buffBayouSocialDistance})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${buffBayou1})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${buffBayou2})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${buffBayou4})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${buffBayou6})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${buffBayouBats})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${buffBayou7})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${buffBayou8})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${buffBayou10})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${buffBayouAfterRain})` }}></div>
                    </div>
                </div>

            </div>
            <div className='park-section bg-light p-3 m-3' ref={whiteOakBayouRef}>
                <h4 className='intro-subtitle park-title'>White Oak Bayou Greenway</h4>
                <p className='intro-paragraph'>Some content I want to share about the park.</p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${whiteOakBirds})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${whiteOak1})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${whiteOakShadows})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${whiteOak8})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${whiteOakStatue})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${whiteOak3})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${whiteOak5})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${whiteOak2})` }}></div>
                    </div>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${whiteOak6})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${whiteOak4})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${whiteOak7})` }}></div>
                    </div>
                </div>
            </div>
            <div className='park-section bg-light p-3 m-3' ref={terryHersheyParkRef}>
                <h4 className='intro-subtitle park-title'>Terry Hershey Park</h4>
                <p className='intro-paragraph'>Some content I want to share about the park.</p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${terryHershey2})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${terryHershey7})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${terryHershey8})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${terryHershey1})` }}></div>
                    </div>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${terryHershey5})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${terryHershey6})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${terryHershey3})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${terryHershey4})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${terryHersheyShadows})` }}></div>
                    </div>

                </div>
            </div>
            <div className='park-section bg-light p-3 m-3' ref={hermannParkRef}>
                <h4 className='intro-subtitle park-title'>Hermann Park</h4>
                <p className='intro-paragraph'>Some content I want to share about the park.</p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${hermannPark1})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${hermannPark2})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${hermannPark3})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${hermannPark4})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${hermannPark5})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${hermannParkButterflyExhib})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${hermannPark6})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${hermannPark7})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${hermannPark8})` }}></div>
                    </div>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${hermannPark9})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${hermannPark10})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${hermannPark11})` }}></div>
                    </div>
                </div>
            </div>
            <div className='park-section bg-light p-3 m-3' ref={sanJacintoMonumentRef}>
                <h4 className='intro-subtitle park-title'>San Jacinto Monument</h4>
                <p className='intro-paragraph'>Some content I want to share about the park.</p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sanJacinto1})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sanJacinto2})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sanJacinto3})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sanJacinto4})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sanJacinto5})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sanJacinto6})` }}></div>
                    </div>
                </div>
            </div>
            <div className='park-section bg-light p-3 m-3' ref={southbeltHikeBikeRef}>
                <h4 className='intro-subtitle park-title'>Southbelt Hike & Bike</h4>
                <p className='intro-paragraph'>Some content I want to share about the park.</p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${southbeltHikeBike1})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${southbeltHikeBike2})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${southbeltHikeBike3})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${southbeltHikeBike4})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${southbeltHikeBike5})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${southbeltHikeBike6})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${southbeltHikeBike7})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${southbeltHikeBike8})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${southbeltHikeBike9})` }}></div>
                    </div>

                </div>
            </div>
            <div className='park-section bg-light p-3 m-3' ref={galvestonIslandRef}>
                <h4 className='intro-subtitle park-title'>Galveston Island Beaches and Parks</h4>
                <p className='intro-paragraph'>Some content I want to share about the park.</p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${galveston1})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${galveston2})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${galveston3})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${galveston4})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${galveston5})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${galveston6})` }}></div>
                    </div>

                </div>
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
