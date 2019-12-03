import axios from 'axios';

// Auth from OpenWeatherMap API
// const API_KEY = 'f1d37bfbc7711f9f8e3a0940bf6e8a28';
const API_KEY= 'e12cda1d493571d458702f3562348864';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather/?appid=${API_KEY}`; 

export const FETCH_WEATHER = 'FETCH_WEATHER';

// Create and export an action creator for making API (AJAX) request
export function fetchWeather(city) {
    // Complete the url request including param for the AJAX call
    const defaultURL = `${ROOT_URL}&q=Abbotsford,ca&units=metric`;
    const url = `${ROOT_URL}&q=${city},ca&units=metric`;

    // Assign asynchonous get request
    const request = axios.get(url);
    
    // Return an action with type and payload
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
