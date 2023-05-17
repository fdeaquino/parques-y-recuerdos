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
        'welcome': { center: [-90, 40], zoom: 2 },

        'california': { center: [-119.4179, 35.7783], zoom: 4.6 },
        'yosemite': { center: [-119.5783, 37.7851], zoom: 10 }, 
        'goldenGate': { center: [-122.4807, 37.7694], zoom: 12 },
        'presidio': { center: [-122.4667, 37.7985], zoom: 12.5 },
        'salesforce': { center: [-122.3970, 37.7891], zoom: 16 },
        'griffith': { center: [-118.2942, 34.1366], zoom: 11.8 },




        'colorado': { center: [-105.7821, 38.3501], zoom: 5 },
        'rockyMountains': { center: [-105.6836, 40.3428], zoom: 10 },
        'gardenOfTheGods': { center: [-104.8775, 38.8690], zoom: 13.4 },
        'mesaVerde': { center: [-108.4911, 37.2309], zoom: 10 },
        'redRocks': { center: [-105.2059, 39.6653], zoom: 15 },


        'louisiana': { center: [-91.9623, 30.9843], zoom: 5.5 },
        'newmexico': { center: [-106.4454, 34.5199], zoom: 5 },
        'newyork': { center: [-76.0060, 41.7128], zoom: 5.2 },
        'texas': { center: [-99.9018, 27.9686], zoom: 4.3 },
        'utah': { center: [-111.5910, 38.3209], zoom: 5.3 }
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
            pitch: 2, // pitch in degrees
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