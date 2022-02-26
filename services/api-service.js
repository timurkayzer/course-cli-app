import axios from "axios";
import { getValue } from "./storage-service.js";


export async function getWeather(city) {
    const token = await getValue('token');
    if (!token) {
        throw new Error('Не задан ключ API');
    }
    // const url = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const url = new URL('https://api.openweathermap.org/data/2.5/weather');
    url.searchParams.append('q', city);
    url.searchParams.append('appid', token);
    url.searchParams.append('lang', 'ru');
    url.searchParams.append('units', 'metric');


    const httpRes = await axios.get(url.toString());
    return httpRes.data;
}