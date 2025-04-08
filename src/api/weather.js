import { httpWeather } from "../configs/http-weather";

/**
 * Call API thời tiết hiện tại
 * @description Call API thời tiết hiện tại
 * @param {*} param
 * @returns
 */
export function fetchCurrentWeather(param) {
  return httpWeather.get(`api.php?param=${param}`);
}
