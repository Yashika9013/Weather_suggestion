import React, { useState } from 'react';

function LocationInput({ onLocationSubmit }) {
    const [location, setLocation] = useState('');

    const handleSubmit = () => {
        onLocationSubmit(location);
    };

    return (
        <div>
            <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter your city or ZIP code"
            />
            <button onClick={handleSubmit}>Get Weather Suggestion</button>
        </div>
    );
}

export default LocationInput;
