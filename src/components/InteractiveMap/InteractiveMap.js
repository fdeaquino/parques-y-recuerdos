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
        'california': { center: [-119.4179, 36.7783], zoom: 5 },
        'colorado': { center: [-105.7821, 39.5501], zoom: 6 }
        // TODO: add more states below
    }

    // Uses the useEffeect hook to run this code once after the component mounts
    useEffect(() => {
        // Create a new Mapbox map object
        // Attach it to the map container div, and set some map options
        map.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/outdoors-v12',
            center: stateViews[state]?.center || [-70, 35],
            zoom: stateViews[state]?.zoom || 3,
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