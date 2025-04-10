// helpers/indexedDbHelper.js
import { getFromIndexedDB, saveToIndexedDB } from "@/utils/coverTextSystem";
import { set, get, del } from "idb-keyval";

export const saveGeoDataToDB = async (
  countryCode,
  data,
  ttl = 7 * 24 * 60 * 60 * 1000
) => {
  const value = {
    data,
    expiry: Date.now() + ttl,
  };
  await set(`GEO_${countryCode}`, value);
};

export const loadGeoDataFromDB = async (countryCode) => {
  const cached = await get(`GEO_${countryCode}`);
  if (!cached) return null;
  if (Date.now() > cached.expiry) {
    await del(`GEO_${countryCode}`);
    return null;
  }
  return cached.data;
};

export async function loadProvinceWould(value) {
  const countryName = value.country;
  const countryKey = value.country_key;

  // 1. Check trong IndexedDB trước
  const cachedData = await getFromIndexedDB(countryName, countryKey);
  if (cachedData && cachedData.length > 0) {
    console.log("📦 Loaded from IndexedDB:", countryKey);
    return cachedData;
  }

  // 2. Nếu chưa có → fetch từ file
  try {
    const response = await fetch(`/json/world/common/${countryName}.json`);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const provinceData = await response.json();

    debugger;

    const objectState = {
      id: countryName, // hoặc countryKey nếu mày muốn thống nhất key
      data: provinceData,
    };

    await saveToIndexedDB([objectState], countryName, countryKey);
    console.log("✅ Fetched & saved to IndexedDB:", countryKey);

    return [objectState];
  } catch (error) {
    console.error("❌ Error loading file:", error.message);
    return null;
  }
}
