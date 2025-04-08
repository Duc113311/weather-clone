import removeAccents from "remove-accents";
import CryptoJS from "crypto-js";
const SECRET_KEY = "bachasoft"; // 🔒 Chọn một khóa bí mật mạnh

/**
 * Convert từ "Hà Nội thủ đô" => "Ha_Noi_thu_do"
 * @param {*} str
 * @returns
 */
export function convertToSnakeCase(str) {
  const slug = removeAccents(str).replace(/\s+/g, "_");
  return slug;
}

export function convertToVietnamese(input) {
  // Map các từ gốc sang từ có dấu

  const data = removeWordAndAccents(input);

  // const dataNew = convertToCamelCase(data);

  const vietnameseMap = {
    Hanoi: "Hà Nội",
    Haiphong: "Hải Phòng",
    Danang: "Đà Nẵng",
    Hochiminh: "Hồ Chí Minh",
    Cantho: "Cần Thơ",
    AnGiang: "An Giang",
    BacGiang: "Bắc Giang",
    BacKan: "Bắc Kạn",
    BacLieu: "Bạc Liêu",
    BacNinh: "Bắc Ninh",
    BenTre: "Bến Tre",
    BinhDinh: "Bình Định",
    BinhDuong: "Bình Dương",
    BinhPhuoc: "Bình Phước",
    BinhThuan: "Bình Thuận",
    CaMau: "Cà Mau",
    CaoBang: "Cao Bằng",
    DakLak: "Đắk Lắk",
    DakNong: "Đắk Nông",
    DienBien: "Điện Biên Phủ",
    DongNai: "Đồng Nai",
    DongThap: "Đồng Tháp",
    GiaLai: "Gia Lai",
    HaGiang: "Hà Giang",
    HaNam: "Hà Nam",
    HaTinh: "Hà Tĩnh",
    HaiDuong: "Hải Dương",
    HauGiang: "Hậu Giang",
    HoaBinh: "Hòa Bình",
    HungYen: "Hưng Yên",
    KhanhHoa: "Khánh Hòa",
    KienGiang: "Kiên Giang",
    KonTum: "Kon Tum",
    LaiChau: "Lai Châu",
    LamDong: "Lâm Đồng",
    LangSon: "Lạng Sơn",
    LaoCai: "Lào Cai",
    LongAn: "Long An",
    NamDinh: "Nam Định",
    NgheAn: "Nghệ An",
    NinhBinh: "Ninh Bình",
    NinhThuan: "Ninh Thuận",
    PhuTho: "Phú Thọ",
    PhuYen: "Phú Yên",
    QuangBinh: "Quảng Bình",
    QuangNam: "Quảng Nam",
    QuangNgai: "Quảng Ngãi",
    QuangNinh: "Quảng Ninh",
    QuangTri: "Quảng Trị",
    SocTrang: "Sóc Trăng",
    SonLa: "Sơn La",
    TayNinh: "Tây Ninh",
    ThaiBinh: "Thái Bình",
    ThaiNguyen: "Thái Nguyên",
    ThanhHoa: "Thanh Hóa",
    ThuaThienHue: "Thừa Thiên Huế",
    TienGiang: "Tiền Giang",
    TraVinh: "Trà Vinh",
    TuyenQuang: "Tuyên Quang",
    VinhLong: "Vĩnh Long",
    VinhPhuc: "Vĩnh Phúc",
    YenBai: "Yên Bái",
  };

  // Kiểm tra nếu chuỗi tồn tại trong map
  const converted = vietnameseMap[data] || data;

  // Thay khoảng trắng bằng dấu gạch dưới
  return {
    city: converted,
    cityConvert: convertToConvertLowerCase(converted),
  };
}

export function convertToWorldState(input) {
  const data = removeWorldStateAndAccents(input);
  console.log("data-satte", data);

  return data;
}

export function convertToConvertLowerCase(str) {
  const slug = removeAccentsUnicode(str).replace(/\s+/g, "_");

  return slug;
}

export function removeAccentsUnicode(str) {
  return str
    .normalize("NFD") // Chuẩn hóa Unicode thành dạng tổ hợp ký tự và dấu
    .replace(/[\u0300-\u036f]/g, "") // Loại bỏ tổ hợp dấu
    .replace(/đ/g, "d") // Xử lý riêng cho chữ "đ"
    .replace(/Đ/g, "D");
}
/**
 * Xử lý chuỗi khu có ký tự ' VD: Dak R'Lay
 * @param {*} key
 * @returns
 */
export function replaceApostropheWithUnderscore(key) {
  // Kiểm tra nếu chuỗi chứa dấu ' thì thay thế bằng _
  if (key.includes("'")) {
    return key.replace(/'/g, "_");
  }
  // Nếu không chứa dấu ', trả về chuỗi gốc
  return key;
}

export function removeWorldStateAndAccents(str) {
  if (typeof str !== "string") {
    return ""; // Trả về chuỗi rỗng nếu đầu vào không phải là chuỗi
  }

  const wordsToRemove = ["Province", "province", "City"];

  // Loại bỏ từng từ trong danh sách wordsToRemove
  wordsToRemove.forEach((word) => {
    const regex = new RegExp(`\\s*\\b${word}\\b`, "gi"); // Loại bỏ từ cùng với khoảng trắng
    str = str.replace(regex, "").trim();
  });

  return str;
}
export function removeWordAndAccents(str) {
  const wordsToRemove = [
    "Xã",
    "Thị Xã",
    "Phường",
    "Thị Trấn",
    "Province",
    "City",
  ];
  const removeAccents = (s) =>
    s
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Loại bỏ dấu
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");

  // Loại bỏ dấu và chuẩn hóa chuỗi
  let normalizedStr = removeAccents(str);

  // Loại bỏ từng từ trong danh sách wordsToRemove
  wordsToRemove.forEach((word) => {
    const normalizedWord = removeAccents(word);
    const regex = new RegExp(`\\b${normalizedWord}\\b`, "gi");
    normalizedStr = normalizedStr.replace(regex, "").trim();
  });

  return normalizedStr;
}

export function convertLowerCase(str) {
  const slug = removeAccents(str);
  return slug.replace(/\s+/g, "-").toLowerCase();
}

export function checkSubstring(str1, str2) {
  // Kiểm tra nếu str1 giống hoàn toàn str2
  if (str1 === str2) {
    return true;
  }

  // Tách các từ bằng cách loại bỏ ký tự không phải chữ và chia nhỏ theo dấu "_"
  const words1 = str1.replace(/[^\w\s]/g, "").split("_");
  const words2 = str2.replace(/[^\w\s]/g, "").split("_");

  // Chuyển đổi str2 thành mảng đã định dạng (giả sử convertToFormattedArray là cần thiết)
  // const convertArray = this.convertToFormattedArray(str2);

  // Lọc ra các từ chung giữa words1 và words2
  const commonWords = words1.filter((word) => words2.includes(word));

  // Kiểm tra có ít nhất 2 từ chung
  return commonWords.length >= 2;
}

export function convertToFormattedArray(input) {
  if (!input) return []; // Nếu chuỗi không có giá trị, trả về mảng rỗng

  return input
    .split(" ") // Tách chuỗi theo khoảng trắng
    .map((word, index) => {
      if (index === 0) {
        return word; // Từ đầu tiên chuyển thành chữ thường
      }
      return word.charAt(0) + word.slice(1); // Viết hoa chữ cái đầu cho từ còn lại
    });
}

export function convertToLowCase(value) {
  const normalizedStr = value
    .normalize("NFD") // Chuyển chuỗi sang dạng tổ hợp Unicode
    .replace(/[\u0300-\u036f]/g, ""); // Loại bỏ các dấu

  return normalizedStr;
}

export function convertToSlugCity(str) {
  const slug = removeAccents(str);

  return slug
    .toLowerCase() // Chuyển thành chữ thường
    .replace(/\s+/g, ""); // Xóa khoảng trắng
}

export function encryptData(data) {
  return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
}

// 🔓 Giải mã dữ liệu JSON khi lấy từ IndexedDB
export function decryptData(encryptedData) {
  const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}

export async function saveToIndexedDB(
  jsonData,
  dbName,
  storeName // 🔥 Có thể lưu nhiều storeName khác nhau
) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, 3); // 🔥 Đảm bảo luôn mở đúng phiên bản
    request.onupgradeneeded = function (event) {
      const db = event.target.result;

      // 🔥 Nếu storeName chưa tồn tại, thì tạo mới
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, { keyPath: "id" });
        console.log(`✅ Object store '${storeName}' đã được tạo!`);
      }
    };

    request.onsuccess = function (event) {
      const db = event.target.result;

      // 🔥 Kiểm tra object store trước khi sử dụng
      if (!db.objectStoreNames.contains(storeName)) {
        console.warn(`⚠️ Object store '${storeName}' không tồn tại!`);
        resolve(false);
        return;
      }

      const transaction = db.transaction(storeName, "readwrite");
      const store = transaction.objectStore(storeName);

      // 🔥 Nếu ID trùng, nó sẽ ghi đè (update)
      for (let index = 0; index < jsonData.length; index++) {
        const element = jsonData[index];
        console.log("element.data", element.data);

        const encryptedData = encryptData(element.data);
        // Lưu trên sessionStorage
        sessionStorage.setItem(element.id, JSON.stringify(encryptedData));
        // Lưu trên IndexDB
        store.put({ id: element.id, data: encryptedData });
      }

      transaction.oncomplete = () => resolve(true);
      transaction.onerror = (e) =>
        reject("❌ Lỗi lưu IndexedDB: " + e.target.error);
    };

    request.onerror = (e) => reject("❌ Lỗi mở IndexedDB: " + e.target.error);
  });
}

export async function getFromIndexedDB(dbName, storeName) {
  return new Promise((resolve) => {
    if (!window.indexedDB) {
      console.warn("⚠️ Trình duyệt không hỗ trợ IndexedDB!");
      resolve(null);
      return;
    }

    const request = indexedDB.open(dbName, 3);

    request.onerror = function () {
      console.warn("⚠️ Không thể mở IndexedDB");
      resolve(null);
    };

    request.onupgradeneeded = function (event) {
      console.warn("⚠️ Database chưa tồn tại, cần tạo mới!");
      resolve(null);
    };

    request.onsuccess = function (event) {
      const db = event.target.result;

      if (!db.objectStoreNames.contains(storeName)) {
        console.warn(`⚠️ Object store '${storeName}' chưa tồn tại!`);
        resolve(null);
        return;
      }

      const transaction = db.transaction(storeName, "readonly");
      const store = transaction.objectStore(storeName);
      const request = store.getAll(); // 🔥 Lấy toàn bộ dữ liệu thay vì chỉ lấy một ID cụ thể
      request.onsuccess = function (event) {
        const results = event.target.result;
        if (results.length > 0) {
          // 🔓 Giải mã từng bản ghi
          const decryptedData = results.map((record) => ({
            id: record.id,
            data: decryptData(record.data),
          }));
          resolve(decryptedData);
        } else {
          resolve(null);
        }
      };

      request.onerror = function () {
        console.warn("⚠️ Lỗi khi lấy dữ liệu từ IndexedDB");
        resolve(null);
      };
    };
  });
}
