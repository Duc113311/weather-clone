import { createI18n } from "vue-i18n";

// Hàm để tự động nhập các tệp ngôn ngữ từ thư mục translations
function loadCommonMessages() {
  const commonLocales = require.context("./translations", false, /\.json$/);
  const commonMessages = {};

  commonLocales.keys().forEach((key) => {
    const lang = key.replace("./", "").replace(".json", ""); // Lấy tên ngôn ngữ từ tên tệp
    commonMessages[lang] = commonLocales(key); // Thêm tệp ngôn ngữ vào commonMessages
  });

  console.log("commonMessages", commonMessages);

  return commonMessages;
}

// Hàm để tự động nhập các tệp ngôn ngữ từ thư mục vietnam
function loadVietnamMessages() {
  const vietnamLocales = require.context("./vietnam", true, /\.json$/);
  const vietnamMessages = {};

  vietnamLocales.keys().forEach((key) => {
    const locale = key.match(/\/([^/]+)\/([^/]+)\.json$/);
    if (locale) {
      const lang = locale[1]; // Ngôn ngữ (en hoặc vi)
      const region = locale[2]; // Tỉnh thành
      if (!vietnamMessages[lang]) {
        vietnamMessages[lang] = {};
      }
      vietnamMessages[lang][region] = vietnamLocales(key); // Thêm tệp ngôn ngữ vào vietnamMessages
    }
  });

  console.log("vietnamMessages", vietnamMessages);

  return vietnamMessages;
}
// Kết hợp cả hai tệp ngôn ngữ
const messages = {
  en: {
    ...loadVietnamMessages(),
    ...loadCommonMessages().en,
  },
  vi: {
    ...loadVietnamMessages(),
    ...loadCommonMessages().vi,
  },
  hi: {
    ...loadCommonMessages().hi,
  },
  es: {
    ...loadCommonMessages().es,
  },
  rCN: {
    ...loadCommonMessages().rCN,
  },
  fr: {
    ...loadCommonMessages().fr,
  },
  ar: {
    ...loadCommonMessages().ar,
  },
  bn: {
    ...loadCommonMessages().bn,
  },
  ru: {
    ...loadCommonMessages().ru,
  },
  pt: {
    ...loadCommonMessages().pt,
  },
  ur: {
    ...loadCommonMessages().ur,
  },
  in: {
    ...loadCommonMessages().in,
  },
  de: {
    ...loadCommonMessages().de,
  },
  ja: {
    ...loadCommonMessages().ja,
  },
  mr: {
    ...loadCommonMessages().mr,
  },
  te: {
    ...loadCommonMessages().te,
  },
  tr: {
    ...loadCommonMessages().tr,
  },
  rTW: {
    ...loadCommonMessages().rTW,
  },
  af: {
    ...loadCommonMessages().af,
  },
  az: {
    ...loadCommonMessages().az,
  },
  am: {
    ...loadCommonMessages().am,
  },
  be: {
    ...loadCommonMessages().be,
  },
  bg: {
    ...loadCommonMessages().bg,
  },
  ca: {
    ...loadCommonMessages().ca,
  },
  cs: {
    ...loadCommonMessages().cs,
  },
  da: {
    ...loadCommonMessages().da,
  },
  el: {
    ...loadCommonMessages().el,
  },
  et: {
    ...loadCommonMessages().et,
  },
  eu: {
    ...loadCommonMessages().eu,
  },
  fa: {
    ...loadCommonMessages().fa,
  },
  fi: {
    ...loadCommonMessages().fi,
  },
  fil: {
    ...loadCommonMessages().fil,
  },
  gl: {
    ...loadCommonMessages().gl,
  },
  gu: {
    ...loadCommonMessages().gu,
  },
  hr: {
    ...loadCommonMessages().hr,
  },
  hu: {
    ...loadCommonMessages().hu,
  },
  hy: {
    ...loadCommonMessages().hy,
  },
  is: {
    ...loadCommonMessages().is,
  },
  it: {
    ...loadCommonMessages().it,
  },
  iw: {
    ...loadCommonMessages().iw,
  },
  ka: {
    ...loadCommonMessages().ka,
  },
  kk: {
    ...loadCommonMessages().kk,
  },
  km: {
    ...loadCommonMessages().km,
  },
  kn: {
    ...loadCommonMessages().kn,
  },
  ko: {
    ...loadCommonMessages().ko,
  },
  ky: {
    ...loadCommonMessages().ky,
  },
  lo: {
    ...loadCommonMessages().lo,
  },
  lt: {
    ...loadCommonMessages().lt,
  },
  lv: {
    ...loadCommonMessages().lv,
  },
  mk: {
    ...loadCommonMessages().mk,
  },
  ml: {
    ...loadCommonMessages().ml,
  },
  mn: {
    ...loadCommonMessages().mn,
  },
  ms: {
    ...loadCommonMessages().ms,
  },
  my: {
    ...loadCommonMessages().my,
  },
  ne: {
    ...loadCommonMessages().ne,
  },
  nl: {
    ...loadCommonMessages().nl,
  },
  no: {
    ...loadCommonMessages().no,
  },
  pa: {
    ...loadCommonMessages().pa,
  },
  pl: {
    ...loadCommonMessages().pl,
  },
  ro: {
    ...loadCommonMessages().ro,
  },
  si: {
    ...loadCommonMessages().si,
  },
  sk: {
    ...loadCommonMessages().sk,
  },
  sl: {
    ...loadCommonMessages().sl,
  },
  sq: {
    ...loadCommonMessages().sq,
  },
  sr: {
    ...loadCommonMessages().sr,
  },
  sv: {
    ...loadCommonMessages().sv,
  },
  sw: {
    ...loadCommonMessages().sw,
  },
  th: {
    ...loadCommonMessages().th,
  },
  uk: {
    ...loadCommonMessages().uk,
  },
  zu: {
    ...loadCommonMessages().zu,
  },
};

// const messages = {
//   en: {
//     city: cityEn,
//     common: enValue,
//     angiang: angiangEn,
//     bacgiang: bacgiangEn,
//   },
//   vi: {
//     city: cityVi,
//     common: viValue,
//     angiang: angiangVi,
//     bacgiang: bacgiangVi,
//   },
// };
console.log("hihi", messages.en.city.city_en.Hung_Yen); // Kết quả mong đợi: "Hung Yen"

const storedLanguage = localStorage.getItem("language");
const defaultLanguage = "en"; // Ngôn ngữ mặc định
const i18n = createI18n({
  locale: storedLanguage || defaultLanguage, // Sử dụng ngôn ngữ từ localStorage nếu có, ngược lại sử dụng ngôn ngữ mặc định
  fallbackLocale: defaultLanguage,
  missingWarn: false, // tắt cảnh báo missing
  fallbackWarn: false, // tắt cảnh báo fallback
  silentFallbackWarn: true, // Tắt cảnh báo fallback
  messages,
});

export default i18n;
