// helpers/indexedDbHelper.js
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
