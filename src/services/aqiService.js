import { fetchAirQualityByKey } from "@/api/air-quality";
import { decodeBase64 } from "@/utils/EncoderDecoderUtils";

export const getAirQualityData = async (locationCode) => {
  try {
    const { data } = await fetchAirQualityByKey(locationCode);
    debugger;
    const decoded = JSON.parse(decodeBase64(data)); // hoặc format tùy logic
    return decoded;
  } catch (err) {
    console.error("🌩 Error getting weather:", err.message);
    return null;
  }
};
