import { httpTides } from "../configs/http-weather";

/**
 * Call API thời tiết hiện tại
 * @description Call API thời tiết hiện tại
 * @param {*} params
 * @returns
 */
export function fetchTidesData(params) {
  return httpTides.post(
    `api/getTides?keyPrivate=${params.keyPrivate}&duration=${params.duration}&interval=${params.interval}&timestamp=${params.timestamp}&station_id=${params.station_id}&datum=${params.datum}`
  );
}
