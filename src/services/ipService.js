import { fetchIpLocation } from "@/api/id-find";

export const getAirQualityData = async (authKey) => {
  try {
    const { data, status } = await fetchIpLocation(authKey);
    if (status === 200) return data;
    throw new Error("Non-200");
  } catch (err) {
    console.error("❌ getIpLocation error:", err.message);
    return null;
  }
};
