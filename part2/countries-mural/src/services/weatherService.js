import axios from "axios";

const baseUrl = "https://api.openweathermap.org/data/2.5/weather?"
const apiKey = import.meta.env.API_KEY

const getWeatherInfo = (lat,lon) => {
    return axios.get(`${baseUrl}lat=${lat}&lon=${lon}&appid=${apiKey}`).then(response => response.data)
}

export default {getWeatherInfo}

// lat={lat}&lon={lon}&exclude={part}&appid={API key}