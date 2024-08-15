import React from 'react';

function Map() {
    return (
        <iframe
            title="Location Map"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed/v1/place?q=YOUR_LOCATION&key=YOUR_API_KEY"
            allowFullScreen
        ></iframe>
    );
}

export default Map;
