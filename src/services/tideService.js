import { fetchTidesData } from "@/api/tide";

export const getTidesData = async (params) => {
  try {
    const { data, status } = await fetchTidesData(params);
    if (status === 200) return data;
    throw new Error("Non-200 response");
  } catch (err) {
    console.error("❌ getTidesData error:", err.message);
    return null;
  }
};
