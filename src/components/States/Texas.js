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
import hermannPark12 from '../../assets/images/texas/hermann-12.webp';
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
import ladybirdZilker1 from '../../assets/images/texas/ladybird-zilker-1.webp';
import ladybirdZilker2 from '../../assets/images/texas/ladybird-zilker-2.webp';
import ladybirdZilker3 from '../../assets/images/texas/ladybird-zilker-3.webp';
import ladybirdZilker4 from '../../assets/images/texas/ladybird-zilker-4.webp';
import ladybirdZilker5 from '../../assets/images/texas/ladybird-zilker-5.webp';
import ladybirdZilker7 from '../../assets/images/texas/ladybird-zilker-7.webp';
import ladybirdZilker8 from '../../assets/images/texas/ladybird-zilker-8.webp';
import ladybirdZilker9 from '../../assets/images/texas/ladybird-zilker-9.webp';
import ladybirdZilker10 from '../../assets/images/texas/ladybird-zilker-10.webp';
import ladybirdZilker11 from '../../assets/images/texas/ladybird-zilker-11.webp';
import mtBonnell1 from '../../assets/images/texas/mt-bonnell-1.webp';
import mtBonnell2 from '../../assets/images/texas/mt-bonnell-2.webp';
import mtBonnell3 from '../../assets/images/texas/mt-bonnell-3.webp';
import mtBonnell4 from '../../assets/images/texas/mt-bonnell-4.webp';
import lbjFidel from '../../assets/images/texas/lbj-fidel.webp';
import lbjWagon from '../../assets/images/texas/lbj-wagon.webp';
import lbjTowanka from '../../assets/images/texas/lbj-towanka.webp';
import lbj1 from '../../assets/images/texas/lbj-1.webp';
import lbj2 from '../../assets/images/texas/lbj-2.webp';
import lbj3 from '../../assets/images/texas/lbj-3.webp';
import lbj4 from '../../assets/images/texas/lbj-4.webp';
import lbj5 from '../../assets/images/texas/lbj-5.webp';
import lbj6 from '../../assets/images/texas/lbj-6.webp';
import lbj7 from '../../assets/images/texas/lbj-7.webp';
import lbj8 from '../../assets/images/texas/lbj-8.webp';
import lbj9 from '../../assets/images/texas/lbj-9.webp';
import lbj10 from '../../assets/images/texas/lbj-10.webp';
import lbj11 from '../../assets/images/texas/lbj-11.webp';
import lbj12 from '../../assets/images/texas/lbj-12.webp';
import enchantedRockFidel1 from '../../assets/images/texas/enchanted-rock-fidel1.webp';
import enchantedRockFidel2 from '../../assets/images/texas/enchanted-rock-fidel2.webp';
import enchantedRockRoss from '../../assets/images/texas/enchanted-rock-ross.webp';
import enchantedRockShadows from '../../assets/images/texas/enchanted-rock-shadows.webp';
import enchantedRock1 from '../../assets/images/texas/enchanted-rock-1.webp';
import enchantedRock2 from '../../assets/images/texas/enchanted-rock-2.webp';
import enchantedRock3 from '../../assets/images/texas/enchanted-rock-3.webp';
import enchantedRock4 from '../../assets/images/texas/enchanted-rock-4.webp';
import enchantedRock5 from '../../assets/images/texas/enchanted-rock-5.webp';
import enchantedRock6 from '../../assets/images/texas/enchanted-rock-6.webp';
import enchantedRock7 from '../../assets/images/texas/enchanted-rock-7.webp';
import enchantedRock8 from '../../assets/images/texas/enchanted-rock-8.webp';
import enchantedRock9 from '../../assets/images/texas/enchanted-rock-9.webp';
import pedernalesFallsAll from '../../assets/images/texas/pedernales-all-of-us.webp';
import pedernalesFallsBunnyRock from '../../assets/images/texas/pedernales-bunny-rock.webp';
import pedernalesFallsRossKamil from '../../assets/images/texas/pedernales-ross-kamil.webp';
import pedernalesFallsAirbnb from '../../assets/images/texas/pedernales-airbnb.webp';
import pedernalesFalls1 from '../../assets/images/texas/pedernales-1.webp';
import pedernalesFalls2 from '../../assets/images/texas/pedernales-2.webp';
import sanAntonioMissionsAlamo from '../../assets/images/texas/san-antonio-missions-alamo.webp';
import sanAntonioMissionsConcepcion from '../../assets/images/texas/san-antonio-missions-concepcion.webp';
import sanAntonioMissionsEspada from '../../assets/images/texas/san-antonio-missions-espada.webp';
import sanAntonioMissionsFidel from '../../assets/images/texas/san-antonio-missions-fidel.webp';
import sanAntonioMissionsMap from '../../assets/images/texas/san-antonio-missions-map.webp';
import sanAntonioMissionsSanJose from '../../assets/images/texas/san-antonio-missions-san-jose.webp';
import sanAntonioMissionsSanJuan from '../../assets/images/texas/san-antonio-missions-san-juan.webp';
import sanAntonioMissions1 from '../../assets/images/texas/san-antonio-missions-1.webp';
import sanAntonioMissions2 from '../../assets/images/texas/san-antonio-missions-2.webp';
import sanAntonioMissions3 from '../../assets/images/texas/san-antonio-missions-3.webp';
import sanAntonioMissions4 from '../../assets/images/texas/san-antonio-missions-4.webp';
import sanAntonioMissions5 from '../../assets/images/texas/san-antonio-missions-5.webp';
import sanAntonioMissions6 from '../../assets/images/texas/san-antonio-missions-6.webp';
import sanAntonioMissions7 from '../../assets/images/texas/san-antonio-missions-7.webp';
import sanAntonioMissions8 from '../../assets/images/texas/san-antonio-missions-8.webp';


function TexasContent({ className, setActiveState }) {
    // Setting up references for each section
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

    // Initializing IntersectionObservers to watch when each section intersects with the viewport
    useEffect(() => {
        // General observer for the Texas state section
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#texas");
                    setActiveState("texas")
                }
            },
            { threshold: 0 }
        );

        // Below are specific observers for each park
        const bigBendObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#bigBend");
                    setActiveState("bigBend")
                }
            },
            { threshold: 0.01 }
        );

        const guadalupeMountainsObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#guadalupeMountains");
                    setActiveState("guadalupeMountains")
                }
            },
            { threshold: 0.01 }
        );

        const huntsvilleStateParkObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#huntsvilleStatePark");
                    setActiveState("huntsvilleStatePark")
                }
            },
            { threshold: 0.01 }
        );
        const memorialParkHoustonObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#memorialParkHouston");
                    setActiveState("memorialParkHouston")
                }
            },
            { threshold: 0.01 }
        );
        const eleanorTinsleyParkObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#eleanorTinsleyPark");
                    setActiveState("eleanorTinsleyPark")
                }
            },
            { threshold: 0.01 }
        );
        const whiteOakBayouObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#whiteOakBayou");
                    setActiveState("whiteOakBayou")
                }
            },
            { threshold: 0.01 }
        );
        const terryHersheyParkObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#terryHersheyPark");
                    setActiveState("terryHersheyPark")
                }
            },
            { threshold: 0.01 }
        );
        const hermannParkObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#hermannPark");
                    setActiveState("hermannPark")
                }
            },
            { threshold: 0.01 }
        );
        const sanJacintoMonumentObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#sanJacintoMonument");
                    setActiveState("sanJacintoMonument")
                }
            },
            { threshold: 0.01 }
        );
        const southbeltHikeBikeObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#southbeltHikeBike");
                    setActiveState("southbeltHikeBike")
                }
            },
            { threshold: 0.01 }
        );

        const galvestonIslandObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#galvestonIsland");
                    setActiveState("galvestonIsland")
                }
            },
            { threshold: 0.01 }
        );
        const zilkerParkObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#zilkerPark");
                    setActiveState("zilkerPark")
                }
            },
            { threshold: 0.01 }
        );
        const lyndonBJohnsonObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#lyndonBJohnson");
                    setActiveState("lyndonBJohnson")
                }
            },
            { threshold: 0.01 }
        );
        const enchantedRockObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#enchantedRock");
                    setActiveState("enchantedRock")
                }
            },
            { threshold: 0.01 }
        );
        const pedernalesFallsObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#pedernalesFalls");
                    setActiveState("pedernalesFalls")
                }
            },
            { threshold: 0.01 }
        );
        const mountBonnellObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#mountBonnell");
                    setActiveState("mountBonnell")
                }
            },
            { threshold: 0.01 }
        );
        const sanAntonioMissionsObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, null, "#sanAntonioMissions");
                    setActiveState("sanAntonioMissions")
                }
            },
            { threshold: 0.01 }
        );
        // TODO: 2. Add observers for other parks if any

        // Capturing current refs for cleanup later
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

        // Begin observing each section
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

        // Unobserve sections when component unmounts
        return () => {
            // If a reference for the specified section exists, stop observing it
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
            <div className='state-section bg-light p-3 '>
                <h3 className='intro-subtitle'>TEXAS</h3>
                <p className='intro-paragraph'>Texas, el "Lone Star State", has been mi hogar desde que era un niño, después de nacer en México. Los habitantes originales como Comanche, Karankawa, and Caddo shaped the land before us, and now it's home to immigrants from all around the world. With a vast array of parques locales, estatales y nacionales, I've only scratched the surface of their beauty y tengo el deseo de explorar aún más. Interestingly, el sitio de una batalla decisiva para la independencia de Texas, is just ten miles from my parent's house. This great state boasts some of las ciudades más grandes de los Estados Unidos, and its economy rivals that of entire countries. But even here, he enfrentado discriminación y racismo; yet, I say proudly, "we didn't cross the border, the border crossed us". La geología de Texas es as diverse as its people, from the rugged mountains of Big Bend to the coastal plains. A true testament of resilience y belleza, Texas continúa siendo un lugar donde la historia y la esperanza se encuentran.</p>
            </div>
            <div className='park-section bg-light p-3 ' ref={bigBendRef}>
                <h4 className='intro-subtitle park-title'>Big Bend National Park</h4>
                <p className='intro-paragraph'>Big Bend National Park, en el extremo de Texas, ofrece una aventura dramática en un paisaje desértico. Los Chisos Native Americans were the ancient inhabitants of these lands. Among the park's unique geological gems, puedes ver formaciones like 'Mule Ears' y una que me recuerda the shape of the Alamo. Estas montañas han been standing here for about 500 million years. Aquí, los primeros colonos cultivaban algodón under the shadow of these mountains. Ross and I nos levantamos temprano to see the sunrise over the peaks, an unforgettable sight. The Santa Elena Canyon, también en este parque, was carved by the Rio Grande over millennia and is deeper than parts of the Grand Canyon. On my next visit, I hope to explore it. The park is also famous for the discovery of Quetzalcoatlus, a giant pterosaur and the largest known animal to take the sky. Its fossils are now housed en mi alma mater, UT-Austin.</p>
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
                    <div className='box box--2x2'>
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
            <div className='park-section bg-light p-3 ' ref={guadalupeMountainsRef}>
                <h4 className='intro-subtitle park-title'>Guadalupe Mountains National Park</h4>
                <p className='intro-paragraph'>Guadalupe National Park, en Texas, es un paraíso geológico and probably my favorite park en el estado. Fue hogar de las tribus Mescalero Apache. Guadalupe Peak, the highest point in Texas, revela restos de antiguos corales y criaturas marinas, recordándonos que this area was once beneath an ancient sea. Hiking it was an intense experience, with Ross y yo agotados después de más de 8 hours de subida y bajada. La montaña tiene partes empinadas, but the view from the top reveals fascinating folds in the mountain, visible solo desde esta perspectiva. Vi a people of all ages, including parents introducing their kids a la alegría de la hiking. Ya estamos planeando our return to this amazing park next year."</p>
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
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${guadalupeTogether})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${guadalupe4})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${guadalupe5})` }}></div>
                    </div>
                    <div className='box box--2x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${guadalupe6})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${guadalupe7})` }}></div>
                    </div>
                    <div className='box box--2x2'>
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
                    <div className='box box--2x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${guadalupe8})` }}></div>
                    </div>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${guadalupe9})` }}></div>
                    </div>
                </div>

            </div>
            <div className='park-section bg-light p-3 ' ref={huntsvilleStateParkRef}>
                <h4 className='intro-subtitle park-title'>Huntsville State Park</h4>
                <p className='intro-paragraph'>Huntsville State Park, un remanso verde en Texas, fue el escenario de un emocionante camping trip con amigos. Los Atakapa, tribus indígenas, fueron los antiguos guardianes de estas tierras. La geología del parque refleja la región de los Piney Woods, un bosque denso que se extiende por el sureste de los Estados Unidos. En nuestra primera noche, nos sorprendió una serpiente muy cerca de nuestro campamento, reminding us to tread carefully. A pesar de los rumores de alligators, we didn't see any during our early morning exploration, only a lake shrouded in morning fog. Lo más divertido del viaje was our game of 'Survivor', and Ross was the ultimate winner entre nuestro grupo de 8, un recuerdo que todavía nos hace reír.</p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${huntsvilleStatePark1})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${huntsvilleStatePark2})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${huntsvilleStatePark3})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${huntsvilleStatePark4})` }}></div>
                    </div>
                    <div className='box box--3x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${huntsvilleStatePark5})` }}></div>
                    </div>

                </div>
            </div>
            <div className='park-section bg-light p-3 ' ref={memorialParkHoustonRef}>
                <h4 className='intro-subtitle park-title'>Memorial Park</h4>
                <p className='intro-paragraph'>Memorial Park, un refugio urbano en Houston, es un homenaje a las tribus Karankawa que una vez habitaban estas tierras. Con un compromiso hacia ecological restoration, la ciudad ha transformado antiguos campos de béisbol into lush prairies and wetlands. Las nuevas áreas del parque, conocidas como The Glades, y los dos impresionantes land bridges te permiten contemplar the city from a distance. Este parque, con su reciente bloom of wildflowers and tranquil forest trails, se ha convertido en mi nuevo parque favorito in the city. Te hace olvidar que te encuentras en medio de una metrópolis y te invita a perderte in nature's serenity.</p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${memorialParkGlades})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${memorialPark4})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${memorialPark3})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${memorialPark2})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${memorialPark1})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${memorialPark5})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${memorialPark9})` }}></div>
                    </div>
                    <div className='box box--2x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${memorialParkArboretum})` }}></div>
                    </div>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${memorialPark6})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${memorialParkGrasshopper})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${memorialPark7})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${memorialParkBee})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${memorialPark8})` }}></div>
                    </div>

                </div>

            </div>
            <div className='park-section bg-light p-3 ' ref={eleanorTinsleyParkRef}>
                <h4 className='intro-subtitle park-title'>Buffalo Bayou + Eleanor Tinsley Park</h4>
                <p className='intro-paragraph'>Buffalo Bayou y Eleanor Tinsley Park, with great views of downtown, were once home to las tribus Akokisa. During la pandemia de Covid-19, Ross and I found tranquility aquí cada mañana, before diving into remote work. Tambien entrene aquí for the Austin Half Marathon, because of the to the slopes along the bayou. En una nota interesante, this park quedó completamente inundado when Hurricane Harvey hit the Houston area, y tomó años para su restauración.  Bats emerge at dusk from debajo del Waugh St. bridge, with hawks swooping down desde el edificio AIG for an easy snack. It's a versatile park, perfecto para watching the seasons change, enjoying a summer concert, picnicking, or exercising.</p>
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
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${buffBayouLockBridge})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${buffBayou9})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${buffBayou3})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${buffBayouFlowers})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${buffBayouSocialDistance})` }}></div>
                    </div>

                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${buffBayou2})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${buffBayou4})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${buffBayou1})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${buffBayou6})` }}></div>
                    </div>
                    <div className='box box--2x2'>
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
                    <div className='box box--2x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${buffBayouAfterRain})` }}></div>
                    </div>
                </div>

            </div>
            <div className='park-section bg-light p-3 ' ref={whiteOakBayouRef}>
                <h4 className='intro-subtitle park-title'>White Oak Bayou Greenway</h4>
                <p className='intro-paragraph'>White Oak Bayou Trail, una serpiente urbana, streaks through Houston, offering un respiro en la gran ciudad. With an impressive 16.5-mile length, the trail snakes through el histórico barrio de Heights. On nuestras caminatas, Ross y yo discovered Da Gama, now one of mis restaurantes favoritos, in a then-under-construction shopping center. El Bayou, though lined with concrete to control flooding, aún offers an urban escape. I wish there were more espacios públicos in Houston for walking and biking. We have yet to explore el trail en su totalidad, but we enjoy exploring it poco a poco.</p>
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
                    <div className='box box--1x1'>
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
            <div className='park-section bg-light p-3 ' ref={terryHersheyParkRef}>
                <h4 className='intro-subtitle park-title'>Terry Hershey Park</h4>
                <p className='intro-paragraph'>Ubicado al sur de I-10 y del Energy Corridor, Terry Hershey Park es un tesoro en Houston. Este parque se une al Baker Reservoir al oeste, formando una dinámica zona de recreo, y también está cerca del Addicks Reservoir. In my opinion, Terry Hershey es uno de los top three parks for a walk or bike ride in the Houston area. Su historia geológica es una muestra de la influencia del Buffalo Bayou, the river that has shaped Houston over the millennia.</p>
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
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${terryHersheyShadows})` }}></div>
                    </div>

                </div>
            </div>
            <div className='park-section bg-light p-3 ' ref={hermannParkRef}>
                <h4 className='intro-subtitle park-title'>Hermann Park</h4>
                <p className='intro-paragraph'>Ubicado entre the world's largest medical center y el distrito de museos, Hermann Park es un vibrante escape urbano. Con su zoológico, jardines botánicos, y estatuas de hombres influyentes de Latinoamérica como Benito Juárez, Bernardo O'Higgins, Simón Bolívar, José de San Martín, y José Martí, este parque tiene algo para todos. Es el lugar perfecto para correr, caminar, or even a round of golf. Esta joya urbana fue posible gracias a George Hermann, who generously donated about 400 acres. No te pierdas la colina panorámica con su sendero serpentino that offers stunning vistas del parque.</p>
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
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${hermannPark6})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${hermannPark7})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${hermannPark8})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${hermannPark9})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${hermannPark10})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${hermannPark11})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${hermannPark12})` }}></div>
                    </div>
                </div>
            </div>
            <div className='park-section bg-light p-3 ' ref={sanJacintoMonumentRef}>
                <h4 className='intro-subtitle park-title'>San Jacinto Monument</h4>
                <p className='intro-paragraph'>El San Jacinto Monument, un testamento de la independencia de Texas, stands tall amidst industrial plants, creando un contraste sorprendente. It was here where the Battle of San Jacinto was fought, un evento crucial that led to Texas Independence and eventually to the United States taking half of Mexico's territory. The monument serves as a reminder of this turning point, with the chance to subir hasta la cima for stunning views of the Houston area y el canal de navegación de Houston. Sin embargo, it's evident that the city and state need to invest more money to make this park more vibrant. Esta torre histórica, surrounded by smoking industrial towers, is a stark symbol of the past, presente, y futuro de Texas.</p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sanJacinto1})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sanJacinto2})` }}></div>
                    </div>
                    <div className='box box--2x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sanJacinto3})` }}></div>
                    </div>
                    <div className='box box--1x2'>
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
            <div className='park-section bg-light p-3 ' ref={southbeltHikeBikeRef}>
                <h4 className='intro-subtitle park-title'>Southbelt Hike & Bike</h4>
                <p className='intro-paragraph'>Tomando un descanso from the major parks in Houston, you can discover Southbelt Hike and Bike, un parque tranquilo al sur de la ciudad. With ample parking and an impressive length, este parque ofrece un espacio for an enjoyable walk or bike ride. Uno de los habitantes más curiosos del parque es la Nutria, a water rodent that can be seen casi todo el año along the adjacent bayou. Tampoco es raro ver turtles, hawks, migrating birds, and even snakes, as the sign warns: 'Seasonal Hazard: Beware of Snakes'. A pesar de las serpientes, I have a particular fondness for este parque.</p>
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
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${southbeltHikeBike8})` }}></div>
                    </div>
                    <div className='box box--2x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${southbeltHikeBike9})` }}></div>
                    </div>

                </div>
            </div>
            <div className='park-section bg-light p-3 ' ref={galvestonIslandRef}>
                <h4 className='intro-subtitle park-title'>Galveston Island Beaches and Parks</h4>
                <p className='intro-paragraph'>Galveston Island Beaches, un cambio de ritmo from the hustle of Houston, is a reminder of the city's proximity to the massive Gulf of Mexico. Cuando visité, Galveston Island State Park estaba cerrado, but we found access to the beach at a nearby point y caminamos a lo largo de la playa y el seawall, which was crowded in some parts. Este lugar, con su brisa marina y las olas rompiendo, offers a tranquil contrast to the urban sprawl y un lugar de escape cerca de the city.</p>
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
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${galveston5})` }}></div>
                    </div>
                    <div className='box box--2x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${galveston6})` }}></div>
                    </div>

                </div>
            </div>
            <div className='park-section bg-light p-3 ' ref={zilkerParkRef}>
                <h4 className='intro-subtitle park-title'>Zilker Park + Lady Bird Lake</h4>
                <p className='intro-paragraph'>Zilker Park y Lady Bird Lake, at the heart of Austin, son un respiro natural amidst the bustling streets y rascacielos. Native tribes y settlers once thrived around the river que ahora, being dammed, se ha convertido into a beautiful lake. Durante mis college years, I'd run along este lago with friends, watching the changing skyline con cada año que pasaba. Aunque I don't have many photos from those times, those days are still vivid in my memory, including cuando corrí parte del camino along the lake for the Austin Half Marathon in 2018. Zilker Park es un paradise for dogs, perfect for flying kites y hosting some of my favorite events como Austin City Limits y el Annual Kite Festival. These spaces son un reminder de la importancia de preserving green spaces en nuestras ciudades.</p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${ladybirdZilker1})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${ladybirdZilker2})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${ladybirdZilker3})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${ladybirdZilker4})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${ladybirdZilker5})` }}></div>
                    </div>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${ladybirdZilker7})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${ladybirdZilker8})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${ladybirdZilker9})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${ladybirdZilker10})` }}></div>
                    </div>
                    <div className='box box--2x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${ladybirdZilker11})` }}></div>
                    </div>

                </div>

            </div>
            <div className='park-section bg-light p-3 ' ref={mountBonnellRef}>
                <h4 className='intro-subtitle park-title'>Mount Bonnell</h4>
                <p className='intro-paragraph'>Mount Bonnell, con una vista única de Austin y el lago, ha crecido in popularity over the years. Las tribus nativas, antes habitantes de la zona, must have cherished this high point too. Hoy en día, es considerado un área de prestigio para vivir, con the beauty of the lake a un paso de distancia. Despite being a short hike, it can take your breath away, literally, por la empinada subida y la cantidad de steps to reach the top. Es un spot favorito para mostrar to 'out of towners' un glimpse de Austin's charm. More than a viewpoint, this area is también la puerta de entrada al hermoso hill country, un regalo que se extiende to the west. Visitar Mount Bonnell es un reminder of the unique landscapes that surround us.</p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mtBonnell1})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mtBonnell2})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mtBonnell3})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${mtBonnell4})` }}></div>
                    </div>

                </div>
            </div>
            <div className='park-section bg-light p-3 ' ref={lyndonBJohnsonRef}>
                <h4 className='intro-subtitle park-title'>Lyndon B. Johnson National and State Historic Park</h4>
                <p className='intro-paragraph'>En el centro del Texas Hill Country, se encuentra el Lyndon B. Johnson State and National Historic Park, a testament to one of our nation's past leaders. Durante mi visita in spring, the weather was perfect, invitándonos a explorar el parque. El presidente Johnson, antes de entrar en política, was a humble teacher for niños Mexicanos-Americanos in South Texas. Esta conexión personal me made me feel closer to his story. Además, the park is home to an authentic German-Texan farmhouse, un recuerdo de los primeros colonizadores alemanes. His wife, Lady Bird, deja su huella here too as a defender of Texas's wildflowers and natural beauty. El parque también alberga the Texas White House y el avión presidencial, ambos impresionantes. The family cemetery is here too, offering a peaceful respite. Este lugar fue hogar to the Tonkawa people, quienes se auto denominaban 'The Most Human of People'.</p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${lbj1})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${lbj2})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${lbjFidel})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${lbjTowanka})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${lbj3})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${lbj4})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${lbj5})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${lbjWagon})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${lbj6})` }}></div>
                    </div>
                    <div className='box box--3x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${lbj7})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${lbj8})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${lbj9})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${lbj10})` }}></div>
                    </div>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${lbj11})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${lbj12})` }}></div>
                    </div>
                </div>

            </div>
            <div className='park-section bg-light p-3 ' ref={enchantedRockRef}>
                <h4 className='intro-subtitle park-title'>Enchanted Rock State Park</h4>
                <p className='intro-paragraph'>Enchanted Rock State Park, un rincón mágico in the Texas Hill Country, es un must-visit spot. Recuerdo la visita que hice con Ross when a wind storm was sweeping through Texas. Fue una experiencia singular, with the weather being extremely pleasant. Ni calor, but very windy - casi pierdo my hat hiking to the top! Esta vez, exploramos the base of Enchanted Rock, un área que no había visto before. My only regret es que se me olvido quitarme mi mascarilla, un recuerdo of the pandemic. This park's popularity requires a reserva to visit, y cada momento spent spent aquí, feeling the magic of the rock, es totalmente worth it.</p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${enchantedRock1})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${enchantedRock2})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${enchantedRock3})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${enchantedRockFidel1})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${enchantedRockRoss})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${enchantedRock4})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${enchantedRockFidel2})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${enchantedRockShadows})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${enchantedRock5})` }}></div>
                    </div>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${enchantedRock6})` }}></div>
                    </div>
                    <div className='box box--2x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${enchantedRock7})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${enchantedRock8})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${enchantedRock9})` }}></div>
                    </div>
                </div>
            </div>
            <div className='park-section bg-light p-3 ' ref={pedernalesFallsRef}>
                <h4 className='intro-subtitle park-title'>Pedernales Falls State Park</h4>
                <p className='intro-paragraph'>En un trip con amigos a Fredricksburg, tomamos un desvío a Pedernales Falls State Park, un trozo del Hill Country que siempre invita a la aventura. Aunque el calor era casi scorching, nos lanzamos a conquistar la cima de Wolf Mountain. Las vistas were nice, pero serían aún mejor en un día más fresco. On the hike, Ross encontró una piedra pintada con un conejito rosa, un toque de whimsy in this rugged landscape. Al final del día, regresamos a nuestro Airbnb, enjoying la noche around a fire, cuando el clima era noticeably cooler. I can't wait to go back.</p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${pedernalesFallsAll})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${pedernalesFalls1})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${pedernalesFalls2})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${pedernalesFallsRossKamil})` }}></div>
                    </div>
                    <div className='box box--2x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${pedernalesFallsBunnyRock})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${pedernalesFallsAirbnb})` }}></div>
                    </div>
                </div>

            </div>
            <div className='park-section bg-light p-3 ' ref={sanAntonioMissionsRef}>
                <h4 className='intro-subtitle park-title'>San Antonio Missions National Historic Park</h4>
                <p className='intro-paragraph'>Recorriendo la historia de San Antonio desde downtown hasta las misiones, te sumerges en la historia colonial española: el Parque Histórico Nacional de las Misiones de San Antonio. Estas misiones, incluyendo el Alamo, eran núcleos de comunidad y devoción. Aunque es debatible if the indigenous people were happy to convert or coerced, no cabe duda que las misiones shaped the region culturally y económicamente. Los edificios y las acequias, sistemas de irrigation que aún funcionan, son testigos de aquellas épocas. Es interesante how las misiones se alinean, cada una aportando something different: farming, ranching, and other trades. Recomendaría visitar cuando the weather is more forgiving, ya que nuestro recorrido fue en un día extremely hot. Aun así, el tour de las misiones y las acequias fue una experiencia única. Y no te pierdas la Mission Espada, mi favorita, que al atardecer, a shadow seems to draw a smile on the ground.</p>
                {/* Grid and photos go here */}
                <div className='grid'>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sanAntonioMissions1})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sanAntonioMissionsMap})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sanAntonioMissions2})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sanAntonioMissionsConcepcion})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sanAntonioMissionsFidel})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sanAntonioMissions7})` }}></div>
                    </div>
                    <div className='box box--1x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sanAntonioMissions4})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sanAntonioMissions5})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sanAntonioMissions6})` }}></div>
                    </div>
                    <div className='box box--2x2'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sanAntonioMissionsSanJose})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sanAntonioMissions3})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sanAntonioMissions8})` }}></div>
                    </div>
                    <div className='box box--1x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sanAntonioMissionsSanJuan})` }}></div>
                    </div>
                    <div className='box box--3x3'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sanAntonioMissionsEspada})` }}></div>
                    </div>
                    <div className='box box--3x1'>
                        <div className='image-wrapper' style={{ backgroundImage: `url(${sanAntonioMissionsAlamo})` }}></div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default TexasContent;
