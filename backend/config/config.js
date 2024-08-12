require('dotenv').config();

module.exports = {
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
    CLAUDE_API_KEY: process.env.CLAUDE_API_KEY,
    CLAUDE_API_URL: 'https://api.claude.ai/v1/generate', // Example URL, adjust according to your API
};
