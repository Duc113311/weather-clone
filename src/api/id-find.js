import { httpIpFind } from "../configs/http-weather";

/**
 * Call Aqi API hiện tại
 * @description Call Aqi API hiện tại
 * @param {*} param
 * @returns
 */
export function fetchIpLocation(authKey) {
  return httpIpFind.get(`me?auth=${authKey}`);
}
