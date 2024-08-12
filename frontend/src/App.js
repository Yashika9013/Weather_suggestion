import React, { useState } from 'react';
import LocationInput from './components/LocationInput';
import WeatherDisplay from './components/WeatherDisplay';
import SuggestionDisplay from './components/SuggestionDisplay';
import { fetchSuggestion } from './api';

function App() {
    const [weather, setWeather] = useState(null);
    const [suggestion, setSuggestion] = useState('');

    const handleLocationSubmit = async (location) => {
        const data = await fetchSuggestion(location);
        setWeather(data.weather);
        setSuggestion(data.suggestion);
    };

    return (
        <div>
            <LocationInput onLocationSubmit={handleLocationSubmit} />
            {weather && <WeatherDisplay weather={weather} />}
            {suggestion && <SuggestionDisplay suggestion={suggestion} />}
        </div>
    );
}

export default App;
