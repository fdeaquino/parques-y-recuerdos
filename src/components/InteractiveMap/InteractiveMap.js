import React, { useEffect, useRef, useMemo } from 'react';
import { geoData } from './geoData'; // import geoData
const mapboxgl = window.mapboxgl;


// Set the Mapbox access token from environment variable
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const InteractiveMap = ({ state }) => {
    // Uses the useRef hook to create a ref to attach to the map container div
    const mapContainerRef = useRef(null);
    const map = useRef(null); // Create a ref for the map instance

    const stateViews = useMemo(() => ({
        'welcome': { center: [-98, 40], zoom: 2.3 },

        'arizona': { center: [-111.9307, 33.0489], zoom: 4.9 },
        'sedona': { center: [-111.7999, 34.8097], zoom: 11.5 },
        'saguaro': { center: [-111.09, 32.29], zoom: 10 },
        'horseshoeBend': { center: [-111.51, 36.879], zoom: 13.9 },


        'california': { center: [-119.4179, 35.7783], zoom: 4.6 },
        'yosemite': { center: [-119.599, 37.7], zoom: 11.3 },
        'goldenGate': { center: [-122.491, 37.7696], zoom: 12.7 },
        'presidio': { center: [-122.4667, 37.7985], zoom: 12.5 },
        'salesforce': { center: [-122.3970, 37.788], zoom: 16.2 },
        'griffith': { center: [-118.3, 34.12], zoom: 13 },
        'santaMonicaBeach': { center: [-118.487, 34], zoom: 13.6 },
        'harborIslandPark': { center: [-117.2035, 32.7257], zoom: 13 },


        'colorado': { center: [-105.7821, 38.3501], zoom: 5 },
        'rockyMountains': { center: [-105.624, 40.3128], zoom: 11.23 },
        'gardenOfTheGods': { center: [-104.8775, 38.8690], zoom: 13.4 },
        'mesaVerde': { center: [-108.485, 37.155], zoom: 13 },
        'redRocks': { center: [-105.2000, 39.66], zoom: 13.5 },


        'louisiana': { center: [-91.9623, 29.986], zoom: 5.7 },
        'povertyPoint': { center: [-91.4079, 32.63], zoom: 13.9 },


        'newmexico': { center: [-106.1999, 33.3], zoom: 5.2 },
        'chacoCulture': { center: [-107.9580, 36.0608], zoom: 13 },
        'whiteSands': { center: [-106.3, 32.7799], zoom: 11 },


        'newyork': { center: [-76.0060, 41.7128], zoom: 5.2 },
        'highlineNYC': { center: [-74.006, 40.7440], zoom: 15 },
        'centralPark': { center: [-73.9684, 40.7809], zoom: 13 },
        'mountArab': { center: [-74.591, 44.2038], zoom: 14 },
        'cantonIslandPark': { center: [-75.175, 44.595], zoom: 15 },
        'otterCreekPreserve': { center: [-75.9182, 44.323], zoom: 14 },


        'texas': { center: [-99.9018, 28.9686], zoom: 4.5 },
        'bigBend': { center: [-103.36, 29.2], zoom: 9.5 },
        'guadalupeMountains': { center: [-104.845, 31.887], zoom: 12.9 },
        'huntsvilleStatePark': { center: [-95.529, 30.6173], zoom: 13 },
        'memorialParkHouston': { center: [-95.437, 29.7605], zoom: 13 },
        'eleanorTinsleyPark': { center: [-95.4001, 29.758], zoom: 13.9 },
        'whiteOakBayou': { center: [-95.417, 29.79], zoom: 12.4 },
        'terryHersheyPark': { center: [-95.62, 29.77], zoom: 13 },
        'hermannPark': { center: [-95.389, 29.7108], zoom: 14.4 },
        'sanJacintoMonument': { center: [-95.0857, 29.748], zoom: 14 },
        'southbeltHikeBike': { center: [-95.22608, 29.5706], zoom: 13 },
        'galvestonIsland': { center: [-94.9303, 29.2010], zoom: 11.6 },
        'zilkerPark': { center: [-97.76, 30.2672], zoom: 13 },
        'lyndonBJohnson': { center: [-98.6244, 30.2370], zoom: 14 },
        'enchantedRock': { center: [-98.8189, 30.503], zoom: 14 },
        'pedernalesFalls': { center: [-98.2469, 30.298], zoom: 14 },
        'mountBonnell': { center: [-97.7737, 30.3211], zoom: 16 },
        'sanAntonioMissions': { center: [-98.47, 29.3620], zoom: 12 },

        'utah': { center: [-111.5910, 38.3209], zoom: 5.3 },
        'arches': { center: [-109.518, 38.738], zoom: 14.7 },
        'zion': { center: [-112.98, 37.2], zoom: 13.7 },
        'bryceCanyon': { center: [-112.227, 37.52], zoom: 11.5 },
    }), []);


    // Uses the useEffeect hook to run this code once after the component mounts
    useEffect(() => {
        // Create a new Mapbox map object
        // Attach it to the map container div, and set some map options
        map.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/outdoors-v12',
            center: stateViews[state]?.center || [-90, 40],
            zoom: stateViews[state]?.zoom || 2,
            pitch: 50, // pitch in degrees
            bearing: 2 // bearing in degrees
        });
        map.current.scrollZoom.disable();

        map.current.on('load', () => {
            // Iterate over the geoData features
            geoData.features.forEach((feature) => {
                // Add the source for each feature
                map.current.addSource(feature.properties.name, {
                    type: 'geojson',
                    data: feature,
                });

                // Add a layer for each source
                map.current.addLayer({
                    id: feature.properties.name,
                    type: 'line', // change this as per your needs
                    source: feature.properties.name,
                    layout: {
                        'line-join': 'round',
                        'line-cap': 'round'
                    },
                    paint: {
                        'line-color': '#FF4F00',
                        'line-width': 5
                    }
                });
            });
        });

        // Add navigation controls to the map
        // map.current.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

        // Clean up on unmount by removing the map
        return () => map.current.remove();
    }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

    //Update the map view when the state changes
    useEffect(() => {
        if (map.current && state in stateViews) {
            console.log("State changed to", state);
            const view = stateViews[state];

            // Rotate the map if the 'state' is 'Golden Gate Park' and following parks
            if (state === 'goldenGate') {
                map.current.flyTo({
                    center: view.center,
                    zoom: view.zoom,
                    bearing: 60, // Set the rotation angle
                    speed: 0.4
                });
            }else if (state === 'saguaro') {
                map.current.flyTo({
                    center: view.center,
                    zoom: view.zoom,
                    bearing: 120, // Set the rotation angle
                    speed: 0.4
                });
            } else if (state === 'eleanorTinsleyPark') {
                map.current.flyTo({
                    center: view.center,
                    zoom: view.zoom,
                    bearing: 60, // Set the rotation angle
                    speed: 0.4
                });
            } else if (state === 'whiteOakBayou') {
                map.current.flyTo({
                    center: view.center,
                    zoom: view.zoom,
                    bearing: 120, // Set the rotation angle
                    speed: 0.4
                });
            } else if (state === 'terryHersheyPark') {
                map.current.flyTo({
                    center: view.center,
                    zoom: view.zoom,
                    bearing: 100, // Set the rotation angle
                    speed: 0.4
                });
            } else if (state === 'zilkerPark') {
                map.current.flyTo({
                    center: view.center,
                    zoom: view.zoom,
                    bearing: 100, // Set the rotation angle
                    speed: 0.4
                });
            } else if (state === 'arches') {
                map.current.flyTo({
                    center: view.center,
                    zoom: view.zoom,
                    bearing: 70, // Set the rotation angle
                    speed: 0.4
                });
            } else {
                map.current.flyTo({
                    center: view.center,
                    zoom: view.zoom,
                    speed: 0.4,
                    pitch: 50, // pitch in degrees
                    bearing: 2 // bearing in degrees
                });
            }
        }
    }, [state, stateViews]);


    // Render a div that will hold the map
    // The ref created is attached here
    return <div ref={mapContainerRef} className='mapRender' style={{ height: '100vh' }}
    />
};

export default InteractiveMap;