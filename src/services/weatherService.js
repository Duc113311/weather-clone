import { fetchCurrentWeather } from "@/api/weather";
import { decodeBase64 } from "@/utils/EncoderDecoderUtils";

export const getWeatherData = async (locationCode) => {
  try {
    const { data } = await fetchCurrentWeather(locationCode);
    debugger;
    const decoded = JSON.parse(decodeBase64(data)); // hoặc format tùy logic
    return decoded;
  } catch (err) {
    console.error("🌩 Error getting weather:", err.message);
    return null;
  }
};
