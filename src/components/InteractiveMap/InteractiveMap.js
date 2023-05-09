import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const InteractiveMap = () => {
    const mapContainerRef = useRef(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current, 
            style: 'mapbox://styles/mapbox/streets-v11', 
            center: [-104.9876, 39.7405],
            zoom: 9,
        });

        map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

        return () => map.remove();
    }, []);

    return <div ref={mapContainerRef} style={{ width: '100%', height: '100vh' }} />
};

export default InteractiveMap;