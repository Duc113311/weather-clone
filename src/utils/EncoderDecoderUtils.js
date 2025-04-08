import CryptoJS from "crypto-js";
import pako from "pako";

export function encodeBase64(input) {
  const compressed = compressAndEncode(input);
  const orgStr = compressed;

  let saltedStr =
    orgStr.substring(0, 10) + randomString(5) + orgStr.substring(10);
  saltedStr = randomString(5) + saltedStr + randomString(5);
  saltedStr = saltedStr.replace(/\n/g, "");

  return urlEncodeString(saltedStr);
}

export function decodeBase64(input2) {
  if (!input2) return null;
  try {
    const tmpStr = input2.substring(5, input2.length - 5);
    const tmpStr2 = tmpStr.substring(0, 10) + tmpStr.substring(15);
    const byteArray = base64ToByteArray(tmpStr2);
    const result = extract(byteArray);

    return urlDecodeString(result);
  } catch (e) {
    return null;
  }
}

function extract(compressed) {
  if (!compressed || compressed.length === 0) return "";

  try {
    if (isCompressed(compressed)) {
      const decompressed = pako.inflate(compressed);
      return new TextDecoder("utf-8").decode(decompressed);
    } else {
      return new TextDecoder("utf-8").decode(compressed);
    }
  } catch (e) {
    return "";
  }
}

function urlDecodeString(input2) {
  try {
    return decodeURIComponent(input2);
  } catch (e) {
    return input2;
  }
}

function base64ToByteArray(base64) {
  const binaryString = window.atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

function isCompressed(data) {
  return data[0] === 0x1f && data[1] === 0x8b;
}

function compressAndEncode(input) {
  try {
    const compressed = pako.gzip(input, { to: "uint8array" });
    const base64 = btoa(String.fromCharCode(...compressed));
    return base64;
  } catch (e) {
    console.error("Compression failed:", e);
    return null;
  }
}

function byteArrayToBase64(byteArray) {
  let binary = "";
  const len = byteArray.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(byteArray[i]);
  }
  return window.btoa(binary);
}

function randomString(len) {
  const abc = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < len; i++) {
    result += abc[Math.floor(Math.random() * abc.length)];
  }
  return result;
}

export function urlEncodeString(input) {
  try {
    return encodeURIComponent(input);
  } catch (e) {
    return input;
  }
}
export function getAqiDataFromLocation(latitude, longitude) {
  const param =
    "type=8&geo=1/" +
    latitude +
    "/" +
    longitude +
    "/800.0gps&lang=en&package=Asia&appv=132&appn=3.5&tz=" +
    Date.now() +
    "&metrics=1080,2027,3.375&wifi&devid=xxx";
  return param;
}

export function getParamAirByCode(cityCode) {
  const param =
    "type=9&citycode=" +
    cityCode +
    "&versionapi=11&cityid=r&lang=en&package=Asia&appv=132&appn=3.5&tz=" +
    Date.now() +
    "&metrics=1080,2027,3.375&wifi&devid=xxx";
  return param;
}

const SECRET_KEY = "bacha@123";
/**
 * Mã hóa trên LocalStorage
 * @param {*} data
 * @returns
 */
export function encryptData(data) {
  return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
}

/**
 * Giải mã trên LocalStorage
 * @param {*} encryptedData
 * @returns
 */
export function decryptData(encryptedData) {
  const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}
