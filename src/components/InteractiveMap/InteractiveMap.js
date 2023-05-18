import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { geoData } from './geoData'; // import geoData

// Set the Mapbox access token from environment variable
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const InteractiveMap = ({ state }) => {
    // Uses the useRef hook to create a ref to attach to the map container div
    const mapContainerRef = useRef(null);
    const map = useRef(null); // Create a ref for the map instance

    const stateViews = {
        'welcome': { center: [-98, 40], zoom: 2.3 },

        'arizona': { center: [-111.9307, 33.0489], zoom: 4.9 },
        'sedona': { center: [-111.7999, 34.8097], zoom: 11.5 },
        'saguaro': { center: [-110.940, 32.1992], zoom: 8.7 },
        'horseshoeBend': { center: [-111.5171, 36.8796], zoom: 13 },

        'california': { center: [-119.4179, 35.7783], zoom: 4.6 },
        'yosemite': { center: [-119.5783, 37.7851], zoom: 10 }, 
        'goldenGate': { center: [-122.4807, 37.7694], zoom: 12 },
        'presidio': { center: [-122.4667, 37.7985], zoom: 12.5 },
        'salesforce': { center: [-122.3970, 37.7891], zoom: 16 },
        'griffith': { center: [-118.2942, 34.1366], zoom: 11.8 },
        'santaMonicaBeach': { center: [-118.4900, 34.0030], zoom: 13.2 },
        'harborIslandPark': { center: [-117.2035, 32.7257], zoom: 13 },


        'colorado': { center: [-105.7821, 38.3501], zoom: 5 },
        'rockyMountains': { center: [-105.6236, 40.3128], zoom: 10.23 },
        'gardenOfTheGods': { center: [-104.8775, 38.8690], zoom: 13.4 },
        'mesaVerde': { center: [-108.4911, 37.1709], zoom: 11 },
        'redRocks': { center: [-105.2000, 39.6633], zoom: 13.5 },

        'louisiana': { center: [-91.9623, 29.9843], zoom: 5.7 },
        'povertyPoint': { center: [-91.4089, 32.6394], zoom: 13 },

        'newmexico': { center: [-106.4454, 30], zoom: 5.4 },
        'chacoCulture': { center: [-107.9640, 36.0608], zoom: 13 },
        'whiteSands': { center: [-106.3758, 32.7799], zoom: 13 },

        'newyork': { center: [-76.0060, 41.7128], zoom: 5.2 },
        'highlineNYC': { center: [-74.0048, 40.7480], zoom: 15 },
        'centralPark': { center: [-73.9654, 40.7829], zoom: 14 },
        'mountArab': { center: [-74.4642, 44.3206], zoom: 14 },
        'cantonIslandPark': { center: [-75.1691, 44.5956], zoom: 15 },
        'otterCreekPreserve': { center: [-75.9182, 44.3359], zoom: 15 },

        'texas': { center: [-99.9018, 28.9686], zoom: 4.5 },
        'huntsvilleStatePark': { center: [-95.5236, 30.6173], zoom: 13 },
        'southbeltHikeBike': { center: [-95.2408, 29.5706], zoom: 15 },
        'dixieFarmRdPark': { center: [-95.1818, 29.5895], zoom: 15 },
        'memorialParkHouston': { center: [-95.4307, 29.7605], zoom: 15 },
        'elenanorTinsleyPark': { center: [-95.3856, 29.7632], zoom: 15 },
        'whiteOakBayou': { center: [-95.3686, 29.8159], zoom: 15 },
        'terryHersheyPark': { center: [-95.6115, 29.7763], zoom: 15 },
        'sanJacintoMonument': { center: [-95.0807, 29.7518], zoom: 15 },
        'hermannPark': { center: [-95.3927, 29.7168], zoom: 15 },
        'zilkerPark': { center: [-97.7713, 30.2672], zoom: 15 },
        'galvestonIsland': { center: [-94.8503, 29.2410], zoom: 13 },
        'lyndonBJohnson': { center: [-98.6284, 30.2370], zoom: 14 },
        'enchantedRock': { center: [-98.8189, 30.5053], zoom: 14 },
        'sanAntonioMissions': { center: [-98.4586, 29.3620], zoom: 14 },
        'pedernalesFalls': { center: [-98.2432, 30.3075], zoom: 14 },
        'ladyBirdLake': { center: [-97.7517, 30.2677], zoom: 14 },
        'mountBonnell': { center: [-97.7737, 30.3211], zoom: 15 },
        'bigBend': { center: [-103.25, 29.25], zoom: 10 },
        'guadalupeMountains': { center: [-104.8723, 31.8912], zoom: 11 },

        'utah': { center: [-111.5910, 38.3209], zoom: 5.3 },
        'zionNationalPark': { center: [-113.0263, 37.2982], zoom: 11 },
        'bryceCanyon': { center: [-112.1670, 37.5930], zoom: 11 },
    }


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
            map.current.flyTo({ center: view.center, zoom: view.zoom, speed: 0.4 });
        }
    }, [state]);

    // Render a div that will hold the map
    // The ref created is attached here
    return <div ref={mapContainerRef} className='mapRender' style={{ height: '100vh' }}
    />
};

export default InteractiveMap;