const express = require('express');
const { getWeatherSuggestion } = require('../controllers/weatherController');

const router = express.Router();

router.get('/weather-suggestion', getWeatherSuggestion);

module.exports = router;
