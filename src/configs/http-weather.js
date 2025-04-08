import axios from "axios";

export const httpIpFind = axios.create({
  baseURL: process.env.VUE_APP_IP_FIND_BASE,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 10000,
  withCredentials: false,
});

export const httpWeather = axios.create({
  baseURL: process.env.VUE_APP_WEATHER_BASE,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 30000,
  withCredentials: false,
});

export const httpAqi = axios.create({
  baseURL: process.env.VUE_APP_AQI_BASE,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
  withCredentials: false,
});

export const httpRadar = axios.create({
  baseURL: process.env.VUE_APP_RADAR_BASE,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
  withCredentials: false,
});

export const httpTides = axios.create({
  baseURL: process.env.VUE_APP_TIDES_BASE,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 30000,
  withCredentials: false,
});
