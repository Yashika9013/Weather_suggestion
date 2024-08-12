export const fetchSuggestion = async (location) => {
    try {
        const response = await fetch(`/api/weather-suggestion?location=${location}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather suggestion:', error);
        return null;
    }
};
