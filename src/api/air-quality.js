import { httpAqi } from "../configs/http-weather";

/**
 * Call Aqi API hiện tại
 * @description Call Aqi API hiện tại
 * @param {*} param
 * @returns
 */
export function fetchAirQualityByKey(param) {
  return httpAqi.get(`airquality.php?param=${param}`);
}
