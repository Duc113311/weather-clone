import IcSun from "@/components/icons/IcSun.vue";
import i18n from "../locales/i18n";
import { DateTime } from "luxon";
import IcCloudy from "@/components/icons/IcCloudy.vue";
import IcCloudFog from "@/components/icons/IcCloudFog.vue";
import IcRain from "@/components/icons/IcRain.vue";
import IcClearNight from "@/components/icons/IcClearNight.vue";
import IcTornado from "@/components/icons/IcTornado.vue";
import IcWind from "@/components/icons/IcWind.vue";
import IcSnow from "@/components/icons/IcSnow.vue";
import IcCloudKey from "@/components/icons/IcCloudKey.vue";
import IcCloudLightning from "@/components/icons/IcCloudLightning.vue";
import IcCloudHail from "@/components/icons/IcCloudHail.vue";
import IcCloudMoon from "@/components/icons/IcCloudMoon.vue";
import IcCloudSun from "@/components/icons/IcCloudSun.vue";

import IcPrecip0 from "@/components/icons/precip-intensity/IcPrecip_0.vue";
import IcPrecip20 from "@/components/icons/precip-intensity/IcPrecip_20.vue";
import IcPrecip40 from "@/components/icons/precip-intensity/IcPrecip_40.vue";
import IcPrecip60 from "@/components/icons/precip-intensity/IcPrecip_60.vue";
import IcPrecip80 from "@/components/icons/precip-intensity/IcPrecip_80.vue";
import IcPrecip100 from "@/components/icons/precip-intensity/IcPrecip_100.vue";

import IcPrecip0Home from "@/components/icons/precip-intensity/IcPrecip_0_home.vue";
import IcPrecip20Home from "@/components/icons/precip-intensity/IcPrecip_20_home.vue";
import IcPrecip40Home from "@/components/icons/precip-intensity/IcPrecip_40_home.vue";
import IcPrecip60Home from "@/components/icons/precip-intensity/IcPrecip_60_home.vue";
import IcPrecip80Home from "@/components/icons/precip-intensity/IcPrecip_80_home.vue";
import IcPrecip100Home from "@/components/icons/precip-intensity/IcPrecip_100_home.vue";

/* eslint-disable prettier/prettier */
/**
 * Convert nhiệt độ Celsius sang Fahrenheit
 * @param {*} celsius
 * @returns
 */
export function celsiusToFahrenheit(celsius) {
  return Math.round((celsius * 9) / 5 + 32);
}

/**
 * Convert nhiệt độ Fahrenheit sang Celsius
 * @param {*} fahrenheit
 * @returns
 */
export function fahrenheitToCelsius(fahrenheit) {
  return Math.round(((fahrenheit - 32) * 5) / 9);
}

export function fahrenheitToCelsiusNot(fahrenheit) {
  return Math.round(((fahrenheit - 32) * 5) / 9);
}

export function celsiusToFahrenheitNot(celsius) {
  return Math.round((celsius * 9) / 5 + 32);
}
/**
 * Convert mm sang inch
 * @param {*} mm
 * @returns
 */
export function mmToInch(value) {
  return Math.round(value * 0.0393701) + "in";
}

/**
 * Convert inch sang mm
 * @param {*} inch
 * @returns
 */
export function inchToMm(inch) {
  if (inch === 0) {
    return "0.00" + " " + "mm";
  }
  return Math.round(inch * 25.4) + " " + "mm";
}

export function convertMeterToFeet(value) {
  const num = Number(value);
  return isNaN(num) ? "0.00" : (num * 3.28084).toFixed(2);
}

export function convertFeetToMeter(value) {
  const num = Number(value);
  return isNaN(num) ? "0.00" : num.toFixed(2);
}

/**
 * Convert mi/h sang m/s
 * @param {*} ms
 * @returns
 */
export function mphToMs(mph) {
  const result = mph * 0.44704;
  return result.toFixed(2) + " " + "m/s";
}

export function mphToMsInt(mph) {
  const result = mph * 0.44704;
  return result;
}

/**
 * Convert mi/h sang km/h
 * @param {*} ms
 * @returns
 */
export function mphToKmh(mph) {
  return mph * 1.60934;
}

/**
 * Convert mi/h sang knot
 * @param {*} ms
 * @returns
 */
export function mphToKnot(mph) {
  return mph * 0.868976;
}

/**
 * Convert sang Beaufort scale
 * @param {*} ms
 * @returns
 */
export function mphToBeaufort(mph) {
  const ms = mphToMs(mph); // Chuyển đổi mi/h sang m/s trước
  if (ms < 0.3) return 0;
  if (ms < 1.6) return 1;
  if (ms < 3.4) return 2;
  if (ms < 5.5) return 3;
  if (ms < 8.0) return 4;
  if (ms < 10.8) return 5;
  if (ms < 13.9) return 6;
  if (ms < 17.2) return 7;
  if (ms < 20.8) return 8;
  if (ms < 24.5) return 9;
  if (ms < 28.5) return 10;
  if (ms < 32.7) return 11;
  return 12;
}

/**
 * Convert sang String UV Index
 * @param {*} value
 * @returns
 */
export function getUvSummaryName(value) {
  // Kiểm tra nếu `value` không phải là số
  if (typeof value !== "number" && typeof value !== "string") {
    console.error("Giá trị không hợp lệ (không phải số hoặc chuỗi):", value);
    return "Unknown";
  }

  value = parseInt(value);

  if (isNaN(value)) {
    console.error("Giá trị không hợp lệ sau parseInt:", value);
    return "Unknown";
  }

  if (value <= 2) {
    return i18n.global.t("Low");
  } else if ((2 <= value) & (value <= 5)) {
    return i18n.global.t("Moderate");
  } else if ((5 <= value) & (value <= 7)) {
    return i18n.global.t("High");
  } else if ((7 <= value) & (value <= 10)) {
    return i18n.global.t("Very_High");
  } else {
    return i18n.global.t("Extremely_high");
  }
}

export function getInformationUVIndex(value) {
  if (value <= 2) {
    return i18n.global.t("Low_UV_levels");
  } else if ((2 < value) & (value <= 5)) {
    return i18n.global.t("There_is_a_moderate");
  } else if ((5 < value) & (value <= 7)) {
    return i18n.global.t("UV_rays_are_highly");
  } else if ((7 < value) & (value <= 10)) {
    return i18n.global.t("The_risk_from_UV_is_very_high");
  } else {
    return i18n.global.t("UV_rays_are_extremely_dangerous");
  }
}

export function getUvSummaryImage(value) {
  const sun_svgrepo_com_1 = require("../assets/images/svg/sun_svgrepo_com_1.svg");
  const sun_svgrepo_com_2 = require("../assets/images/svg/sun_svgrepo_com_2.svg");
  const sun_svgrepo_com_3 = require("../assets/images/svg/sun_svgrepo_com_4.svg");
  const sun_svgrepo_com_4 = require("../assets/images/svg/sun_svgrepo_com_5.svg");
  const sun_svgrepo_com_5 = require("../assets/images/svg/sun_svgrepo_com_6.svg");
  value = parseInt(value);

  if (value <= 2) {
    return sun_svgrepo_com_1;
  } else if (value <= 5) {
    return sun_svgrepo_com_2;
  } else if (value <= 7) {
    return sun_svgrepo_com_3;
  } else if (value <= 10) {
    return sun_svgrepo_com_4;
  } else {
    return sun_svgrepo_com_5;
  }
}

export function getIconChartPrecipIntensity(value) {
  const ic_precip_0 = IcPrecip0;
  const ic_precip_20 = IcPrecip20;
  const ic_precip_40 = IcPrecip40;
  const ic_precip_60 = IcPrecip60;
  const ic_precip_80 = IcPrecip80;
  const ic_precip_100 = IcPrecip100;

  // Sử dụng if-else để kiểm tra giá trị phạm vi
  if (value < 2.5) {
    return ic_precip_0;
  } else if (value >= 2.5 && value < 7.5) {
    return ic_precip_20;
  } else if (value >= 7.5 && value < 20) {
    return ic_precip_40;
  } else if (value >= 20 && value < 50) {
    return ic_precip_60;
  } else if (value >= 50 && value < 100) {
    return ic_precip_80;
  } else if (value >= 100 && value < 1000) {
    return ic_precip_100;
  } else {
    return ic_precip_0; // Default icon if value is outside the expected range
  }
}

export function getIconChartPrecipIntensityHome(value) {
  const ic_precip_0 = IcPrecip0Home;
  const ic_precip_20 = IcPrecip20Home;
  const ic_precip_40 = IcPrecip40Home;
  const ic_precip_60 = IcPrecip60Home;
  const ic_precip_80 = IcPrecip80Home;
  const ic_precip_100 = IcPrecip100Home;

  // Sử dụng if-else để kiểm tra giá trị phạm vi
  if (value < 2.5) {
    return ic_precip_0;
  } else if (value >= 2.5 && value < 7.5) {
    return ic_precip_20;
  } else if (value >= 7.5 && value < 20) {
    return ic_precip_40;
  } else if (value >= 20 && value < 50) {
    return ic_precip_60;
  } else if (value >= 50 && value < 100) {
    return ic_precip_80;
  } else if (value >= 100 && value < 1000) {
    return ic_precip_100;
  } else {
    return ic_precip_0; // Default icon if value is outside the expected range
  }
}

export function getIconHourlyForecastTheme(value) {
  const ic_cloudy_hourly = IcCloudy;
  const ic_rain_hourly = IcRain;
  const ic_clear_day_hourly = IcSun;
  const ic_partly_cloudy_night_hourly = IcCloudMoon;
  const ic_clear_day = IcCloudSun;
  const ic_clear_night = IcClearNight;
  const ic_fog = IcCloudFog;
  const ic_sleet_hourly = IcCloudHail;
  const ic_tornado_hourly = IcTornado;
  const ic_thunderstorm_hourly = IcCloudLightning;
  const ic_wind_hourly = IcWind;
  const ic_snow_hourly = IcSnow;
  const ic_cloudy = IcCloudKey;

  value = value.toString();
  switch (value) {
    case "cloudy":
      return ic_cloudy_hourly;
    case "rain":
      return ic_rain_hourly;
    case "partly_cloudy_day":
      return ic_clear_day_hourly;
    case "partly_cloudy_night":
      return ic_partly_cloudy_night_hourly;
    case "clear_day":
      return ic_clear_day;
    case "clear_night":
      return ic_clear_night;
    case "sleet":
      return ic_sleet_hourly;
    case "fog":
      return ic_fog;
    case "wind":
      return ic_wind_hourly;
    case "thunderstorm":
      return ic_thunderstorm_hourly;
    case "tornado":
      return ic_tornado_hourly;
    case "snow":
      return ic_snow_hourly;
    default:
      return ic_cloudy;
  }
}

export function getTitleIconByHouse(value, data, unitSetting) {
  value = value.toString();
  switch (value) {
    case "cloudy":
      return i18n.global.t(
        "cloudy_sky_thick_cloud_cover_lowest_temperature_is_{temp}",
        {
          temp:
            unitSetting.activeTemperature_save === "f"
              ? convertCtoF(data.temperatureMin)
              : convertFtoC(data.temperatureMin),
        }
      );
    case "rain":
      return i18n.global.t(
        "rainy_weather_humid_air_lowest_temperature_is_{temp}",
        {
          temp:
            unitSetting.activeTemperature_save === "f"
              ? convertCtoF(data.temperatureMin)
              : convertFtoC(data.temperatureMin),
        }
      );
    case "partly_cloudy_day":
      return i18n.global.t(
        "partly_cloudy_sky_gentle_sunlight_highest_temperature_is_{temp}",
        {
          temp:
            unitSetting.activeTemperature_save === "f"
              ? convertCtoF(data.temperatureMax)
              : convertFtoC(data.temperatureMax),
        }
      );
    case "partly_cloudy_night":
      return i18n.global.t(
        "cool_night_scattered_clouds_lowest_temperature_is_{temp}",
        {
          temp:
            unitSetting.activeTemperature_save === "f"
              ? convertCtoF(data.temperatureMin)
              : convertFtoC(data.temperatureMin),
        }
      );
    case "clear_day":
      return i18n.global.t("clear_sky_dry_air_highest_temperature_is_{temp}", {
        temp:
          unitSetting.activeTemperature_save === "f"
            ? convertCtoF(data.temperatureMax)
            : convertFtoC(data.temperatureMax),
      });
    case "clear_night":
      return i18n.global.t(
        "clear_sky_bright_stars_lowest_temperature_is_{temp}",
        {
          temp:
            unitSetting.activeTemperature_save === "f"
              ? convertCtoF(data.temperatureMin)
              : convertFtoC(data.temperatureMin),
        }
      );
    case "sleet":
      return i18n.global.t("sleet_cold_air_lowest_temperature_is_{temp}", {
        temp:
          unitSetting.activeTemperature_save === "f"
            ? convertCtoF(data.temperatureMin)
            : convertFtoC(data.temperatureMin),
      });
    case "fog":
      return i18n.global.t(
        "foggy_weather_humid_air_lowest_temperature_is_{temp}",
        {
          temp:
            unitSetting.activeTemperature_save === "f"
              ? convertCtoF(data.temperatureMin)
              : convertFtoC(data.temperatureMin),
        }
      );
    case "wind":
      return i18n.global.t(
        "strong_wind_cooler_air_lowest_temperature_is_{temp}",
        {
          temp:
            unitSetting.activeTemperature_save === "f"
              ? convertCtoF(data.temperatureMin)
              : convertFtoC(data.temperatureMin),
        }
      );
    case "thunderstorm":
      return i18n.global.t(
        "heavy_thunderstorm_strong_winds_lowest_temperature_is_{temp}",
        {
          temp:
            unitSetting.activeTemperature_save === "f"
              ? convertCtoF(data.temperatureMin)
              : convertFtoC(data.temperatureMin),
        }
      );
    case "tornado":
      return i18n.global.t(
        "extreme_tornado_high_destruction_risk_lowest_temperature_is_{temp}",
        {
          temp:
            unitSetting.activeTemperature_save === "f"
              ? convertCtoF(data.temperatureMin)
              : convertFtoC(data.temperatureMin),
        }
      );
    case "snow":
      return i18n.global.t(
        "snowy_sky_temperature_continues_to_drop_lowest_temperature_is_{temp}",
        {
          temp:
            unitSetting.activeTemperature_save === "f"
              ? convertCtoF(data.temperatureMin)
              : convertFtoC(data.temperatureMin),
        }
      );
    default:
      return i18n.global.t(
        "cloudy_sky_gloomy_feeling_all_day_highest_temperature_is_{temp}",
        {
          temp:
            unitSetting.activeTemperature_save === "f"
              ? convertCtoF(data.temperatureMax)
              : convertFtoC(data.temperatureMax),
        }
      );
  }
}

export function convertTimestampToMonthYear(
  dateString,
  locale,
  offset,
  timezone
) {
  // Chuyển chuỗi thành Date object
  const date = new Date((dateString + offset * 3600) * 1000); // Điều chỉnh timestamp với offset

  // Lấy thông tin ngày, tháng, năm, thứ
  const formatter = new Intl.DateTimeFormat(locale, {
    weekday: "long", // Ví dụ: "Thứ Hai" / "Monday" / "Lundi"
    day: "2-digit", // Ngày (24)
    month: "long", // "Tháng 2" (vi) / "February" (en) / "février" (fr)
    year: "numeric", // Năm (2025)
    timeZone: timezone, // Sử dụng timezone
  });

  const parts = formatter.formatToParts(date);

  // Trích xuất từng phần
  let weekday = "";
  let day = "";
  let month = "";
  let year = "";

  parts.forEach(({ type, value }) => {
    if (type === "weekday") weekday = value;
    if (type === "day") day = value;
    if (type === "month") month = value;
    if (type === "year") year = value;
  });

  // Kiểm tra locale và định dạng chuỗi phù hợp
  if (locale.startsWith("vi")) {
    // Tiếng Việt: "Thứ Hai ngày 24 tháng 2, 2025"
    return `Tháng ${month.replace("tháng ", "")}, ${year}`;
  } else if (locale.startsWith("zh")) {
    // Tiếng Trung: "2025年2月24日 星期一"
    return `${year}年${month}${day}日 ${weekday}`;
  } else if (locale.startsWith("ja")) {
    // Tiếng Nhật: "2025年2月24日 (月曜日)"
    return `${year}年${month}${day}日 (${weekday})`;
  } else if (locale.startsWith("ko")) {
    // Tiếng Hàn: "2025년 2월 24일 월요일"
    return `${year}년 ${month} ${day}일 ${weekday}`;
  } else if (locale.startsWith("de")) {
    // Tiếng Đức: "Montag, 24. Februar 2025"
    return `${weekday}, ${day}. ${month} ${year}`;
  } else if (locale.startsWith("fr")) {
    // Tiếng Pháp: "Lundi 24 février 2025"
    return `${weekday} ${day} ${month} ${year}`;
  } else {
    // Mặc định: Tiếng Anh "Monday, February 24, 2025"
    return `${month}, ${year}`;
  }
}

export function convertTimestampToDayMonth(timestamp, offsetValue, timezone) {
  // Kiểm tra nếu value không hợp lệ (null, undefined, NaN)
  if (!timestamp || isNaN(timestamp)) {
    console.error("Invalid timestamp:", timestamp);
    return "Invalid Date";
  }
  // Chuyển timestamp Unix thành Date (timestamp là giây)
  const adjustedTimestamp = timestamp + offsetValue * 60; // offset từ phút sang giây

  const date = new Date(adjustedTimestamp * 1000);

  // Lấy tên ngày viết tắt theo timezone
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    weekday: "short", // Trả về thứ viết tắt (Mon, Tue, Wed,...)
    day: "2-digit", // Ngày (DD)
    month: "2-digit", // Tháng (MM)
  });

  // Format lại thành mảng [weekday, day, month]
  const formattedDate = formatter.formatToParts(date);

  // Lấy thông tin ngày, tháng, thứ từ phần đã format
  let day = "";
  let month = "";

  formattedDate.forEach(({ type, value }) => {
    if (type === "day") day = value;
    if (type === "month") month = value;
  });

  // Trả về định dạng "Thu DD/MM" (VD: "Fri 21/02")
  return `${day}/${month}`;
}

export function convertDayOfWeek(timestamp, offsetValue, timezone) {
  const adjustedTimestamp = timestamp + offsetValue * 60; // offset từ phút sang giây

  const date = new Date(adjustedTimestamp * 1000);

  const now = new Date();
  if (
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear()
  ) {
    return i18n.global.t("Today");
  } else {
    // Nếu không trùng, hiển thị ngày trong tuần
    const days = [
      i18n.global.t("Sunday"),
      i18n.global.t("Monday"),
      i18n.global.t("Tuesday"),
      i18n.global.t("Wednesday"),
      i18n.global.t("Thursday"),
      i18n.global.t("Friday"),
      i18n.global.t("Saturday"),
    ];
    const dayOfWeek = days[date.getDay()];
    return dayOfWeek;
  }
}

export function convertDayOfWeekMonth(timestamp, offsetValue, timezone) {
  const adjustedTimestamp = timestamp + offsetValue * 60; // offset từ phút sang giây

  const date = new Date(adjustedTimestamp * 1000);

  // Lấy tên ngày viết tắt theo timezone
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    weekday: "short", // Trả về thứ viết tắt (Mon, Tue, Wed,...)
    day: "2-digit", // Ngày (DD)
    month: "2-digit", // Tháng (MM)
  });

  // Format lại thành mảng [weekday, day, month]
  const formattedDate = formatter.formatToParts(date);

  const weekMap = {
    Sunday: "Sunday",
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
  };
  // Lấy thông tin ngày, tháng, thứ từ phần đã format
  let day = "";
  let month = "";
  let week = "";

  formattedDate.forEach(({ type, value }) => {
    if (type === "day") day = value;
    if (type === "month") month = value;
    if (type === "weekday") week = weekMap[value] || value;
  });

  // Trả về định dạng "Thu DD/MM" (VD: "Fri 21/02")
  return `${i18n.global.t(week)} ${day}/${month}`;
}
/**
 * Convert timestamp sang AM/PM
 * @param {*} timestamp
 * @param {*} numberTime
 * @returns
 */
export function convertTimestampToHoursMinutes(
  timestamp,
  numberTime,
  offsetValue,
  timezone
) {
  const adjustedTimestamp = timestamp + offsetValue * 60; // offset từ phút sang giây
  const date = new Date(adjustedTimestamp * 1000);

  // Sử dụng Intl.DateTimeFormat để lấy giờ theo timezone mong muốn
  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23", // Định dạng 24h
  });

  // Chuyển timestamp thành đúng giờ theo timezone
  let formattedTime = formatter.format(date);

  // Cộng thêm offset (1 phút)
  let [hours, minutes] = formattedTime.split(":").map(Number);

  // Xử lý nếu phút >= 60
  if (minutes >= 60) {
    hours += 1;
    minutes -= 60;
  }

  // Định dạng lại giờ & phút với số 0 phía trước nếu cần
  const formattedHours = hours.toString().padStart(2, "0");
  // const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedMinutes = "00";
  // Lấy giờ hiện tại theo timezone
  const now = new Date();
  const nowFormatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: timezone,
    hour: "2-digit",
    hourCycle: "h23", // Chỉ lấy giờ (không lấy phút)
  });

  // Chỉ lấy giờ hiện tại
  const nowHours = nowFormatter.format(now);

  // Nếu giờ trùng nhau, hiển thị "Now"
  if (nowHours === formattedHours) {
    return i18n.global.t("Now");
  }

  return `${formattedHours}:${formattedMinutes}`;
}

export function convertTimestampToHoursMinutes12(
  timestamp,
  numberTime,
  offsetValue,
  timezone
) {
  // Cộng offset vào timestamp trước khi chuyển đổi
  const adjustedTimestamp = timestamp + offsetValue * 60; // offset từ phút sang giây
  const date = new Date(adjustedTimestamp * 1000); // Chuyển đổi thành Date object

  // Sử dụng Intl.DateTimeFormat để lấy giờ theo timezone mong muốn
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // Định dạng 12h AM/PM
  });

  // Chuyển timestamp thành đúng giờ theo timezone
  let formattedTime = formatter.format(date);
  let [time, period] = formattedTime.split(" ");
  let [hours, minutes] = time.split(":").map(Number);

  // console.log("minutes", minutes);

  // Loại bỏ số 0 đứng trước nếu có
  const formattedHours = parseInt(hours, 10).toString();
  // const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedMinutes = "00";

  // console.log("formattedMinutes", formattedMinutes);

  // Lấy giờ hiện tại theo timezone (chỉ lấy giờ)
  const now = new Date();
  const nowFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    hour: "2-digit",
    hour12: true,
  });

  // Lấy giờ hiện tại và loại bỏ số 0 đứng trước
  let [nowHours, nowPeriod] = nowFormatter.format(now).split(" ");
  nowHours = parseInt(nowHours, 10).toString(); // Xoá số 0 đứng trước

  // console.log("nowTime", nowHours + " " + nowPeriod);
  // console.log("timeData", formattedHours + " " + period);

  // Nếu giờ trùng nhau, hiển thị "Now"
  if (nowHours === formattedHours && nowPeriod === period) {
    return i18n.global.t("Now");
  }

  return `${formattedHours}:${formattedMinutes} ${i18n.global.t(period)}`;
}

export function convertTimestampUnit12(
  timestamp,
  numberTime,
  offsetValue,
  timezone
) {
  const dateTime = DateTime.fromMillis(timestamp * 1000, { zone: timezone });
  // Lấy giờ
  let hours = dateTime.hour; // Giờ

  // Chuyển đổi giờ sang định dạng 12 giờ
  let period = hours >= 12 ? i18n.global.t("PM") : i18n.global.t("AM");
  hours = hours % 12 || 12; // Nếu giờ là 0, chuyển thành 12

  // Trả về AM hoặc PM
  if (numberTime === 0) {
    return i18n.global.t(period); // Trả về AM/PM
  } else if (numberTime === 1) {
    return i18n.global.t(period); // Trả về AM/PM
  }
}

export function convertAMPMFromTimestamp(timestamp, offsetValue, timezone) {
  // Áp dụng offset (phút → giây) trước khi tạo Date
  const adjustedTimestamp = timestamp + offsetValue * 60;
  const date = new Date(adjustedTimestamp * 1000);

  // Lấy AM/PM theo múi giờ mong muốn
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    hour: "2-digit",
    hour12: true, // Định dạng 12h AM/PM
  });

  // Lấy chuỗi định dạng, tách lấy AM hoặc PM
  let formattedTime = formatter.format(date);
  let period = formattedTime.split(" ")[1]; // Lấy phần "AM" hoặc "PM"

  return formattedTime;
}

export function convertTime12hTimeZoneNotNowUnit(
  timestamp,
  numberTime,
  offsetValue,
  timezone
) {
  // Cộng offset vào timestamp trước khi chuyển đổi
  const adjustedTimestamp = timestamp + offsetValue * 60; // offset từ phút sang giây
  const date = new Date(adjustedTimestamp * 1000); // Chuyển đổi thành Date object

  // Sử dụng Intl.DateTimeFormat để lấy giờ theo timezone mong muốn
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // Định dạng 12h AM/PM
  });

  let formattedTime = formatter.format(date);
  let [time, period] = formattedTime.split(" ");
  let [hours, minutes] = time.split(":").map(Number);

  const formattedHours = parseInt(hours, 10).toString();
  const formattedMinutes = minutes.toString().padStart(2, "0");
  // const formattedMinutes = "00";

  return `${formattedHours}:${formattedMinutes} ${i18n.global.t(period)}`;
}

export function convertTime24hTimeZoneNotNow(
  timestamp,
  numberTime,
  offsetValue,
  timezone
) {
  const adjustedTimestamp = timestamp + offsetValue * 60;

  const date = new Date(adjustedTimestamp * 1000);
  console.log("timezone", timezone);

  // Sử dụng Intl.DateTimeFormat để lấy giờ theo timezone mong muốn
  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23", // Định dạng 24h
  });

  // Chuyển timestamp thành đúng giờ theo timezone
  let formattedTime = formatter.format(date);

  // Cộng thêm offset (1 phút)
  let [hours, minutes] = formattedTime.split(":").map(Number);

  // Xử lý nếu phút >= 60
  if (minutes >= 60) {
    hours += 1;
    minutes -= 60;
  }

  // Định dạng lại giờ & phút với số 0 phía trước nếu cần
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}`;
}

export function convertTime12hTimeZoneNotNow(
  timestamp,
  numberTime,
  offsetValue,
  timezone
) {
  const dateTime = DateTime.fromMillis(timestamp * 1000, { zone: timezone });
  // Lấy giờ và phút
  let hours = dateTime.hour; // Giờ
  let minutes = dateTime.minute; // Phút

  // Chuyển đổi giờ sang định dạng 12 giờ
  let period = hours >= 12 ? i18n.global.t("PM") : i18n.global.t("AM");
  hours = hours % 12 || 12; // Nếu giờ là 0, chuyển thành 12
  minutes = minutes < 10 ? "0" + minutes : minutes; // Đảm bảo phút có 2 chữ số

  const now = DateTime.now().setZone(timezone);
  let hoursNow = now.hour % 12 || 12;
  let periodNow = now.hour >= 12 ? i18n.global.t("PM") : i18n.global.t("AM"); // AM/PM hiện tại

  // Trả về thời gian định dạng 12 giờ
  if (numberTime === 0) {
    return hours + ":" + minutes + " " + i18n.global.t(period);
  } else if (numberTime === 1) {
    return hours + ":" + minutes + " " + i18n.global.t(period);
  }
}

export function convertTimestampNow12(timestamp, numberTime, offsetValue) {
  const date = new Date(timestamp * 1000);
  const utcTime = date.getTime();
  const localTime = new Date(utcTime + offsetValue * 3600 * 1000);

  let hours = localTime.getUTCHours();
  let minutes = localTime.getUTCMinutes();

  // Chuyển đổi giờ sang định dạng 12 giờ
  let period = hours >= 12 ? i18n.global.t("PM") : i18n.global.t("AM");
  hours = hours % 12;
  hours = hours < 10 ? "0" + hours : 12; // Nếu giờ là 0 thì chuyển thành 12
  minutes = minutes < 10 ? "0" + minutes : minutes;

  let now = new Date();
  let hoursNow = now.getHours() % 12 || 12; // Lấy giờ hiện tại theo định dạng 12 giờ

  // Trả về thời gian định dạng 12 giờ
  if (numberTime === 0) {
    return hours + ":" + minutes + " " + i18n.global.t(period);
  } else if (numberTime === 1) {
    if (hours === hoursNow) {
      return i18n.global.t("Now");
    }
    return hours + ":" + minutes + " " + i18n.global.t(period);
  }
}

//
export function convertTimestamp24hSun(
  timestamp,
  numberTime,
  offsetValue,
  timezone
) {
  const adjustedTimestamp = timestamp + offsetValue * 60;

  const date = new Date(adjustedTimestamp * 1000);
  console.log("timezone", timezone);

  // Sử dụng Intl.DateTimeFormat để lấy giờ theo timezone mong muốn
  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23", // Định dạng 24h
  });

  // Chuyển timestamp thành đúng giờ theo timezone
  let formattedTime = formatter.format(date);

  // Cộng thêm offset (1 phút)
  let [hours, minutes] = formattedTime.split(":").map(Number);

  // Xử lý nếu phút >= 60
  if (minutes >= 60) {
    hours += 1;
    minutes -= 60;
  }

  // Định dạng lại giờ & phút với số 0 phía trước nếu cần
  const formattedHours = hours.toString().padStart(2, "0");
  // const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedMinutes = "00";

  return `${formattedHours}:${formattedMinutes}`;
}

export function convertTimestamp12hSun(
  timestamp,
  numberTime,
  offsetValue,
  timezone
) {
  // Cộng offset vào timestamp trước khi chuyển đổi
  const adjustedTimestamp = timestamp + offsetValue * 60; // offset từ phút sang giây
  const date = new Date(adjustedTimestamp * 1000); // Chuyển đổi thành Date object

  // Sử dụng Intl.DateTimeFormat để lấy giờ theo timezone mong muốn
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // Định dạng 12h AM/PM
  });

  let formattedTime = formatter.format(date);
  let [time, period] = formattedTime.split(" ");
  let [hours, minutes] = time.split(":").map(Number);

  const formattedHours = parseInt(hours, 10).toString();
  // const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedMinutes = "00";

  return `${formattedHours}:${formattedMinutes} ${i18n.global.t(period)}`;
}

//

export function convertTimestampNow24(timestamp, numberTime, offsetValue) {
  const date = new Date(timestamp);
  const utcTime = date.getTime();
  const localTime = new Date(utcTime + offsetValue * 3600 * 1000);

  let hours = localTime.getUTCHours();
  let minutes = localTime.getUTCMinutes();

  // Chuyển đổi giờ sang định dạng 12 giờ
  hours = hours % 24;
  hours = hours ? hours : 0; // Nếu giờ là 0 thì chuyển thành 12
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let now = new Date();
  let hoursNow = now.getHours();
  // Trả về thời gian định dạng 12 giờ
  if (numberTime === 0) {
    return hours + ":" + minutes;
  } else if (numberTime === 1) {
    if (hours < 10) {
      return "0" + hours + ":" + minutes;
    }
    if (hours === hoursNow) {
      return i18n.global.t("Now");
    }
    return hours + ":" + minutes;
  }
}

export function convertTimeSun(timestamp, timezone, offsetValue, activeTime) {
  debugger;

  const adjustedTimestamp = timestamp + offsetValue * 60; // offset từ phút sang giây
  const date = new Date(adjustedTimestamp * 1000); // Chuyển đổi thành Date object

  // Sử dụng Intl.DateTimeFormat để lấy giờ theo timezone mong muốn
  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23", // Định dạng 24h
  });

  // Chuyển timestamp thành đúng giờ theo timezone
  let formattedTime = formatter.format(date);

  // Cộng thêm offset (1 phút)
  let [hours, minutes] = formattedTime.split(":").map(Number);

  // Xử lý nếu phút >= 60
  if (minutes >= 60) {
    hours += 1;
    minutes -= 60;
  }

  // Định dạng lại giờ & phút với số 0 phía trước nếu cần
  const formattedHours = hours.toString().padStart(2, "0");

  console.log("formattedHours", formattedHours);

  return formattedHours;
}

export function convertTimestampToAmPm(timestamp) {
  let date = new Date(timestamp * 1000);

  let hours = date.getHours();

  let amPm = hours >= 12 ? i18n.global.t("PM") : i18n.global.t("AM");

  // Trả về thời gian định dạng 12 giờ
  return amPm;
}

export function convertTimestampToFormattedDate(timestamp, language = "vi") {
  const daysOfWeek = {
    vi: ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"],
    en: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  };

  const date = new Date(timestamp); // Chuyển đổi từ timestamp
  const dayOfWeek = daysOfWeek[language][date.getDay()]; // Lấy ngày trong tuần theo ngôn ngữ
  const day = date.getDate(); // Lấy ngày
  const month = date.getMonth() + 1; // Lấy tháng (bắt đầu từ 0 nên cần +1)
  const year = date.getFullYear(); // Lấy năm

  if (language === "vi") {
    return `${dayOfWeek}, Ngày ${day}/${month}/${year}`;
  } else if (language === "en") {
    return `${dayOfWeek}, ${month}/${day}/${year}`;
  } else {
    throw new Error("Unsupported language");
  }
}

export function getFormattedCurrentDate() {
  const now = new Date(); // Lấy thời gian hiện tại

  // Lấy tên ngày trong tuần và định dạng ngày tháng
  const dayOfWeek = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(now);
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(now);
  const day = now.getDate();
  const year = now.getFullYear();

  // Lấy giờ và định dạng AM/PM
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const isAM = hours < 12;
  const formattedHours = hours % 12 || 12; // Chuyển sang định dạng 12 giờ
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const period = isAM ? i18n.global.t("AM") : i18n.global.t("PM");

  // return `${dayOfWeek}, ${month} ${day}, ${year} at ${formattedHours}:${formattedMinutes} ${period}`;
  return `${dayOfWeek}, ${month} ${day}, ${year}`;
}

/**
 * Convert mbar sang mmHg
 * @param {*} mbar
 * @returns
 */
export function mbarToMmHg(mbar) {
  return mbar * 0.750062;
}

/**
 * Convert mbar sang hPa
 * @param {*} mbar
 * @returns
 */
export function mbarToHpa(mbar) {
  return mbar; // 1 mbar = 1 hPa
}

/**
 * Convert mbar sang atm
 * @param {*} mbar
 * @returns
 */
export function mbarToAtm(mbar) {
  const result = mbar * 0.000986923;
  return result.toFixed(3) + " " + "amt";
}

/**
 * Convert mbar sang inHg
 * @param {*} mbar
 * @returns
 */
export function mbarToInHg(mbar) {
  return mbar * 0.029529983;
}

/**
 * Convert mbar sang kPa
 * @param {*} mbar
 * @returns
 */
export function mbarToKpa(mbar) {
  return mbar * 0.1;
}

export function formatTimestamp(timestamp) {
  const date = new Date(timestamp * 1000);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day} tháng ${month}, ${year}`;
}

export function getWindDirectionFromDegrees(windBearing) {
  // Normalize windBearing to be within [0, 360) range
  windBearing = windBearing % 360;

  if (windBearing < 0) {
    windBearing += 360;
  }

  if (windBearing >= 11.5 && windBearing < 33.5) return i18n.global.t("NNE");
  if (windBearing >= 33.5 && windBearing < 56.5) return i18n.global.t("NE");
  if (windBearing >= 56.5 && windBearing < 78.5) return i18n.global.t("ENE");
  if (windBearing >= 78.5 && windBearing < 101.5) return i18n.global.t("E");
  if (windBearing >= 101.5 && windBearing < 123.5) return i18n.global.t("ESE");
  if (windBearing >= 123.5 && windBearing < 146.5) return i18n.global.t("SE");
  if (windBearing >= 146.5 && windBearing < 168.5) return i18n.global.t("SSE");
  if (windBearing >= 168.5 && windBearing < 191.5) return i18n.global.t("S");
  if (windBearing >= 191.5 && windBearing < 213.5) return i18n.global.t("SSW");
  if (windBearing >= 213.5 && windBearing < 236.5) return i18n.global.t("SW");
  if (windBearing >= 236.5 && windBearing < 258.5) return i18n.global.t("WSW");
  if (windBearing >= 258.5 && windBearing < 281.5) return i18n.global.t("W");
  if (windBearing >= 281.5 && windBearing < 303.5) return i18n.global.t("WNW");
  if (windBearing >= 303.5 && windBearing < 326.5) return i18n.global.t("NW");
  if (windBearing >= 326.5 && windBearing < 348.5) return i18n.global.t("NNW");

  // Default case for windBearing < 11.5 or >= 348.5
  return "N";
}
export function getWindDirectionEmojiFromDegrees(windBearing) {
  const angle = windBearing % 360;

  if (angle >= 22.5 && angle < 67.5) {
    return "⬈";
  } else if (angle >= 67.5 && angle < 112.5) {
    return "➡";
  } else if (angle >= 112.5 && angle < 157.5) {
    return "⬊";
  } else if (angle >= 157.5 && angle < 202.5) {
    return "⬇";
  } else if (angle >= 202.5 && angle < 247.5) {
    return "⬋";
  } else if (angle >= 247.5 && angle < 292.5) {
    return "⬅";
  } else if (angle >= 292.5 && angle < 337.5) {
    return "⬉";
  } else {
    return "⬆";
  }
}

export function convertMonth(timestamp) {
  const date = new Date(timestamp * 1000);
  const dayMapping = {
    Sunday: i18n.global.t("Sun"),
    Monday: i18n.global.t("Mon"),
    Tuesday: i18n.global.t("Tue"),
    Wednesday: i18n.global.t("Wed"),
    Friday: i18n.global.t("Fri"),
    Thursday: i18n.global.t("Thu"),
    Saturday: i18n.global.t("Sat"),
  };

  const month = date.getMonth() + 1;
  return month;
}

export function convertToShortDay(dateFull) {
  const dayMapping = {
    Sunday: i18n.global.t("Sun"),
    Monday: i18n.global.t("Mon"),
    Tuesday: i18n.global.t("Tue"),
    Wednesday: i18n.global.t("Wed"),
    Friday: i18n.global.t("Fri"),
    Thursday: i18n.global.t("Thu"),
    Saturday: i18n.global.t("Sat"),
  };
  const dayOfWeek = dateFull.split(",")[0].trim();

  const currentDate = new Date();
  const dayOfWeekNow = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
  });

  if (dayMapping[dayOfWeekNow] === dayMapping[dayOfWeek]) {
    return i18n.global.t("Today");
  }

  // Chuyển đổi ngày sang dạng ngắn
  return dayMapping[dayOfWeek] || "Invalid date";
}

export function convertHaversine(
  latCurrently,
  lonCurrently,
  latNearest,
  lonNearest,
  unit = "km" // Mặc định là km
) {
  console.log("unit-test", unit);

  const R_KM = 6371; // Bán kính Trái Đất (km)
  const R_MI = 3958.8; // Bán kính Trái Đất (miles)

  const R = unit === "mi" ? R_MI : R_KM; // Chọn bán kính phù hợp
  const toRad = (x) => (x * Math.PI) / 180;

  const dLat = toRad(latNearest - latCurrently);
  const dLon = toRad(lonNearest - lonCurrently);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(latCurrently)) *
    Math.cos(toRad(latNearest)) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Khoảng cách theo đơn vị được chọn

  return distance;
}

export function dataDecodeFirstPair(input, dt, ft, st) {
  let v = 0;
  try {
    const m = [];
    let t = -dt;
    let av = 0;
    let scale = 1;
    const p = new DecodeParser(input);

    if (p.getChar() === "#") {
      p.readChar();
      scale = p.readInt();
      p.readChar();
    }

    while (!p.eos()) {
      const c = p.readChar();
      switch (true) {
        case c >= "a":
          v = c.charCodeAt(0) - "a".charCodeAt(0);
          break;
        case c >= "A":
          v = -(c.charCodeAt(0) - "A".charCodeAt(0)) - 1;
          break;
        case c === "!":
          v = p.readInt();
          break;
        case c === "$":
          v = -p.readInt();
          break;
        case c === "#":
          t = p.readInt() + t - dt;
          break;
        case c < "0" || c > "9":
          return null;
        default:
          p.back();
          t = p.readInt() + t - dt;
          break;
      }
      t += dt;
      av += v;
      m.push([t * st + ft, av / scale]);
      return m;
    }
    return m;
  } catch (e) {
    console.error(e);
    return null;
  }
}

class DecodeParser {
  constructor(input) {
    this.input = input;
    this.i = 0;
    this.l = input.length;
  }

  readInt() {
    let c = "0";
    let v = 0;
    while (this.i < this.l && (c = this.input[this.i]) >= "0" && c <= "9") {
      v = v * 10 + (c.charCodeAt(0) - "0".charCodeAt(0));
      this.i++;
    }
    return v;
  }

  getChar() {
    return this.input[this.i];
  }

  readChar() {
    return this.input[this.i++];
  }

  eos() {
    return this.i >= this.l;
  }

  back() {
    this.i--;
  }
}

//
export function convertFtoC(value) {
  return Math.round((value - 32) / 1.8);
}
export function convertCtoF(value) {
  return Math.round(value);
}
/**
 * Convert MM sang IN
 * @param {*} value
 * @returns Precipitation
 */
export function convertMillimetToInch(value) {
  return Math.round(value * 0.03937);
}

export function convertMillimet(value) {
  return Math.round(value);
}

/**
 * Convert hPa
 * @param {*} value
 * @returns
 */
export function formatHpa(value) {
  if (value === undefined || value === null || isNaN(value)) {
    console.error("Invalid input value:", value);
    return "Invalid value"; // Hoặc một giá trị mặc định hợp lý khác
  }

  function removeMultipleZero(formattedValue) {
    return formattedValue.replace(/(\.0+|(?<=\.[0-9]*[1-9])0+)$/, "");
  }

  const precision = value.toFixed(3);
  return removeMultipleZero(precision, false);
}

/**
 * Convert hPa sang mmHg
 * @param {*} value
 */
export function convertHpaToMmHg(value) {
  return (value * 0.750061683).toFixed(2);
}

/**
 * Convert hPa sang mbar
 * @param {*} value
 * @returns
 */
export function convertHpaToMbar(value) {
  function removeMultipleZero(formattedValue, keepLastZero) {
    if (keepLastZero) {
      return formattedValue;
    }
    return formattedValue.replace(/(\.0+|(?<=\.[0-9]*[1-9])0+)$/, "");
  }

  const precision = value.toFixed(3);
  return removeMultipleZero(precision, false);
}

/**
 * convert hPa sang atm
 * @param {*} value
 * @returns
 */
export function convertHpaToAtm(value) {
  return (value * 0.000986923267).toFixed(3);
}

/**
 * Convert hPa sang InHg
 * @param {*} value
 * @returns
 */
export function convertHpaToInHg(value) {
  return (value * 0.029529983071).toFixed(3);
}

/**
 * Convert hPa sang kPa
 * @param {*} value
 * @returns
 */
export function convertHpaToKpa(value) {
  function removeMultipleZero(formattedValue, keepLastZero) {
    if (keepLastZero) {
      return formattedValue;
    }
    return formattedValue.replace(/(\.0+|(?<=\.[0-9]*[1-9])0+)$/, "");
  }

  const kpaValue = value * 0.1;
  const precision = kpaValue.toFixed(3);
  return removeMultipleZero(precision, false);
}

/**
 * Convert mi/h sang m/s
 * @param {*} value
 * @returns
 */
export function convertMPHtoMetPS(value) {
  return Math.round((value * 1000) / (60 * 60 * 0.62137)).toFixed(2);
}

/**
 * Convert mi/h sang km/h
 * @param {*} value
 * @returns
 */
export function convertMiToKm(value) {
  return Math.round(value / 0.62137).toFixed(2);
}

/**
 * Convert mi/h sang Knot
 * @param {*} value
 * @returns
 */
export function convertMiToKnot(value) {
  return Math.round(value / 1.150779);
}

/**
 * Convert Beaufort scale
 * @param {*} windSpeedMph
 * @returns
 */
export function convertMiToBeaufortScale(windSpeedMph) {
  if (windSpeedMph < 1) return 0; // Calm
  if (windSpeedMph < 4) return 1; // Light Air
  if (windSpeedMph < 8) return 2; // Light Breeze
  if (windSpeedMph < 13) return 3; // Gentle Breeze
  if (windSpeedMph < 19) return 4; // Moderate Breeze
  if (windSpeedMph < 25) return 5; // Fresh Breeze
  if (windSpeedMph < 32) return 6; // Strong Breeze
  if (windSpeedMph < 39) return 7; // Moderate Gale
  if (windSpeedMph < 47) return 8; // Fresh Gale
  if (windSpeedMph < 55) return 9; // Strong Gale
  if (windSpeedMph < 64) return 10; // Whole Gale
  if (windSpeedMph < 73) return 11; // Storm
  return 12; // Hurricane Force
}

export function formatDate(date) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date); // dạng "staturday, August 10, 2024 "
}
export function formatMonthYear(date) {
  const options = { month: "long", year: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(date); //dạng "August, 2024"
}

/**
 * làm tròn 2 chữ số thập phân
 * @param {*} number
 * @returns
 */
export function roundedNumber(number) {
  return (Math.round(number * 100) / 100).toFixed(2);
}

export function codeToFind(value) {
  const unitData = [
    {
      code: "c",
      label: "°C",
    },
    {
      code: "f",
      label: "°F",
    },
    {
      code: "12h",
      label: "12h",
    },
    {
      code: "24h",
      label: "24h",
    },
    {
      code: "mm",
      label: "mm",
    },
    {
      code: "in",
      label: "in",
    },
    {
      code: "km",
      label: "km",
    },
    {
      code: "mi",
      label: "mi",
    },
    {
      code: "m/s",
      label: "m/s",
    },
    {
      code: "km/h",
      label: "km/h",
    },
    {
      code: "mi/h",
      label: "mi/h",
    },
    {
      code: "knot",
      label: "Knot",
    },
    {
      code: "bft",
      label: "BFT",
    },
    {
      code: "mmHg",
      label: "mmHg",
    },
    {
      code: "hPa",
      label: "hPa",
    },
    {
      code: "atm",
      label: "atm",
    },
    {
      code: "inHg",
      label: "inHg",
    },
    {
      code: "mBar",
      label: "mBar",
    },
    {
      code: "kPa",
      label: "kPa",
    },
  ];
  const foundObject = unitData.find((item) => item.code === value);

  return foundObject.label;
}
export function convertTimeNew(seconds) {
  const totalMinutes = Math.floor(seconds / 60);
  const hours = Math.floor(totalMinutes / 60) % 12 || 12;
  const minutes = totalMinutes % 60;

  return `${hours} ${i18n.global.t("hours")} ${minutes} ${i18n.global.t(
    "minute"
  )}`;
}

// convert AQI
export function getAQIColor(aqi) {
  if (aqi <= 50) return "#41E11F";
  if ((51 <= aqi) & (aqi <= 100)) return "#3DE177";
  if ((101 <= aqi) & (aqi <= 150)) return "#F68421";
  if ((151 <= aqi) & (aqi <= 200)) return "#F42E1C";
  if ((201 <= aqi) & (aqi <= 250)) return "#8C4396";
  return "#781125"; // Giá trị phần trăm từ 90 đến 100
}
export function getAirSummaryName(value) {
  value = parseInt(value);

  if (value <= 50) {
    return i18n.global.t("Good");
  } else if ((51 <= value) & (value <= 100)) {
    return i18n.global.t("Moderate");
  } else if ((101 <= value) & (value <= 150)) {
    return i18n.global.t("Unhealthy_for_Sensitive_Groups");
  } else if ((151 <= value) & (value <= 200)) {
    return i18n.global.t("Unhealthy");
  } else if ((201 <= value) & (value <= 250)) {
    return i18n.global.t("Very_Unhealthy");
  } else {
    return i18n.global.t("Hazardous");
  }
}

export function getAqiHealthyInformationInfo(aqi) {
  if (aqi <= 50) return i18n.global.t("Air_quality_is_satisfactory");
  if ((51 <= aqi) & (aqi <= 100))
    return i18n.global.t("Sensitive_individuals_should_avoid");
  if ((101 <= aqi) & (aqi <= 150))
    return i18n.global.t("General_public_and_sensitive");
  if ((151 <= aqi) & (aqi <= 200))
    return i18n.global.t("Increased_likelihood_of_adverse");
  if ((201 <= aqi) & (aqi <= 250)) return i18n.global.t("General_public_will");
  return i18n.global.t("General_public_at_high_risk");
}

export function getAqiRecommendedPrecautionsInfo(aqi) {
  if (aqi <= 50) return i18n.global.t("None.");
  if ((51 <= aqi) & (aqi <= 100))
    return i18n.global.t(
      "Unusually_sensitive_people_should_consider_reducing_prolonged_or_heavy_exertion."
    );
  if ((101 <= aqi) & (aqi <= 150))
    return i18n.global.t(
      "People_with_respiratory_or_heart_disease,_the_elderly_and_children_should_limit_prolonged_exertion."
    );
  if ((151 <= aqi) & (aqi <= 200))
    return i18n.global.t(
      "People_with_respiratory_or_heart_disease,_the_elderly_and_children_should_avoid_prolonged_exertion;_everyone_else_should_limit_prolonged_exertion."
    );
  if ((201 <= aqi) & (aqi <= 250))
    return i18n.global.t(
      "People_with_respiratory_or_heart_disease,_the_elderly_and_children_should_avoid_any_outdoor_activity;_everyone_else_should_avoid_prolonged_exertion."
    );
  return i18n.global.t(
    "Everyone_should_avoid_any_outdoor_exertion_people_with_respiratory_or_heart_disease,_the_elderly_and_children_should_remain_indoors."
  );
}

export function getAqiAriStationList(aqi) {
  if (aqi <= 50) return i18n.global.t("Air_quality_is_satisfactory");
  if (aqi <= 100) return i18n.global.t("Air_quality_is_acceptable");
  if (aqi <= 150)
    return i18n.global.t(
      "Members_of_sensitive_groups_may_experience_health_effects._The_general_public_is_less_likely_to_be_affected."
    );
  if (aqi <= 200)
    return i18n.global.t(
      "Some_members_of_the_general_public_may_experience_health_effects;_members_of_sensitive_groups_may_experience_more_serious_health_effects."
    );
  if (aqi <= 300)
    return i18n.global.t(
      "Health_alert:_The_risk_of_health_effects_is_increased_for_everyone."
    );
  return i18n.global.t(
    "Health_warning_of_emergency_conditions:_everyone_is_more_likely_to_be_affected."
  );
}

export function getStringPrimaryPollutantName(aqi) {
  switch (aqi) {
    case "o3":
      return i18n.global.t("O3 (Ozone)");
    case "so2":
      return i18n.global.t("SO2_(Sulphur_dioxide)");
    case "no2":
      return i18n.global.t("NO2_(Nitrogen_dioxide)");
    case "co":
      return i18n.global.t("CO_(Carbon_monoxide)");
    case "pb":
      return i18n.global.t("Pb_(Lead)");
    case "nh3":
      return i18n.global.t("NH3_(Ammonia)");
    case "pm10":
      return i18n.global.t("PM10_(Particles_matter_under_10μm)");
    default:
      return i18n.global.t("PM2.5_(Particles_matter_under_2.5μm)");
  }
}

export function getStringPrimaryPollutantInfo(aqi) {
  switch (aqi) {
    case "o3":
      return i18n.global.t(
        "Ozone_in_the_air_we_breathe_can_harm_our_health,_especially_on_hot_sunny_days_when_ozone_can_reach_unhealthy_levels._Even_relatively_low_levels_of_ozone_can_cause_health_effects."
      );
    case "so2":
      return i18n.global.t(
        "Sulfur_dioxide_irritates_the_skin_and_mucous_membranes_of_the_eyes,_nose,_throat,_and_lungs._High_concentrations_of_SO2_can_cause_inflammation_and_irritation_of_the_respiratory_system,_especially_during_heavy_physical_activity."
      );
    case "no2":
      return i18n.global.t(
        "The_main_health_effect_of_nitrogen_dioxide_is_on_the_respiratory_system._Inhalation_of_nitrogen_dioxide_by_children_increases_their_risk_of_respiratory_infection_and_may_lead_to_poorer_lung_function_in_later_life."
      );
    case "co":
      return i18n.global.t(
        "Breathing_air_with_a_high_concentration_of_CO_reduces_the_amount_of_oxygen_that_can_be_transported_in_the_blood_stream_to_critical_organs_like_the_heart_and_brain._At_very_high_levels,_which_are_possible_indoors_or_in_other_enclosed_environments,_CO_can_cause_dizziness,_confusion,_unconsciousness_and_death."
      );
    case "pb":
      return i18n.global.t(
        "Exposure_to_high_levels_of_lead_may_cause_anemia,_weakness,_and_kidney_and_brain_damage._Very_high_lead_exposure_can_cause_death."
      );
    case "nh3":
      return i18n.global.t(
        "High_levels_of_ammonia_can_irritate_and_burn_the_skin,_mouth,_throat,_lungs,_and_eyes._Very_high_levels_of_ammonia_can_damage_the_lungs_or_cause_death."
      );
    case "pm10":
      return i18n.global.t(
        "PM10_particles_are_small_enough_to_get_into_your_throat_and_lungs._High_levels_of_PM10_can_make_you_cough,_your_nose_run_and_eyes_sting."
      );
    default:
      return i18n.global.t(
        "PM2.5_particles_are_small_enough_to_enter_the_bloodstream_and_typically_result_from_wildfires,_smoke_ashes,_bacteria_or_small_dust_particles"
      );
  }
}

export function getTextWeather(value) {
  if (value == null) return "";
  let trimmedValue = value.trim();
  if (trimmedValue.endsWith(".")) {
    trimmedValue = trimmedValue.substring(0, trimmedValue.length - 1);
  }
  if (trimmedValue === "") return "";

  // Hàm chuyển đổi chuỗi thành key cho this.$t

  let textWeather = "";
  switch (trimmedValue.toLowerCase()) {
    case "smoke":
      textWeather = i18n.global.t("smoke");
      break;
    case "light intensity drizzle":
      textWeather = i18n.global.t("light_intensity_drizzle");
      break;
    case "very heavy rain":
      textWeather = i18n.global.t("very_heavy_rain");
      break;
    case "moderate or heavy rain with thunder":
      textWeather = i18n.global.t("moderate_or_heavy_rain_with_thunder");
      break;
    case "blizzard":
      textWeather = i18n.global.t("blizzard");
      break;
    case "blowing snow":
      textWeather = i18n.global.t("blowing_snow");
      break;
    case "broken clouds":
      textWeather = i18n.global.t("broken_clouds");
      break;
    case "clear":
      textWeather = i18n.global.t("clear");
      break;
    case "clear sky":
      textWeather = i18n.global.t("clear_sky");
      break;
    case "cloudy":
      textWeather = i18n.global.t("cloudy");
      break;
    case "few clouds":
      textWeather = i18n.global.t("few_clouds");
      break;
    case "fog":
      textWeather = i18n.global.t("fog");
      break;
    case "foggy":
      textWeather = i18n.global.t("foggy");
      break;
    case "freezing fog":
      textWeather = i18n.global.t("freezing_fog");
      break;
    case "haze":
      textWeather = i18n.global.t("haze");
      break;
    case "heavy intensity rain":
      textWeather = i18n.global.t("heavy_intensity_rain");
      break;
    case "heavy rain":
      textWeather = i18n.global.t("heavy_rain");
      break;
    case "heavy rain at times":
      textWeather = i18n.global.t("heavy_rain_at_times");
      break;
    case "heavy snow":
      textWeather = i18n.global.t("heavy_snow");
      break;
    case "humid":
      textWeather = i18n.global.t("humid");
      break;
    case "humid and mostly cloudy":
      textWeather = i18n.global.t("humid_and_mostly_cloudy");
      break;
    case "humid and overcast":
      textWeather = i18n.global.t("humid_and_overcast");
      break;
    case "humid and partly cloudy":
      textWeather = i18n.global.t("humid_and_partly_cloudy");
      break;
    case "light drizzle":
      textWeather = i18n.global.t("light_drizzle");
      break;
    case "light freezing rain":
      textWeather = i18n.global.t("light_freezing_rain");
      break;
    case "light rain":
      textWeather = i18n.global.t("light_rain");
      break;
    case "light rain shower":
      textWeather = i18n.global.t("light_rain_shower");
      break;
    case "light sleet":
      textWeather = i18n.global.t("light_sleet");
      break;
    case "light sleet showers":
      textWeather = i18n.global.t("light_sleet_showers");
      break;
    case "light snow":
      textWeather = i18n.global.t("light_snow");
      break;
    case "light snow showers":
      textWeather = i18n.global.t("light_snow_showers");
      break;
    case "mist":
      textWeather = i18n.global.t("mist");
      break;
    case "moderate or heavy rain shower":
      textWeather = i18n.global.t("moderate_or_heavy_rain_shower");
      break;
    case "moderate or heavy sleet":
      textWeather = i18n.global.t("moderate_or_heavy_sleet");
      break;
    case "moderate or heavy sleet showers":
      textWeather = i18n.global.t("moderate_or_heavy_sleet_showers");
      break;
    case "moderate or heavy snow showers":
      textWeather = i18n.global.t("moderate_or_heavy_snow_showers");
      break;
    case "moderate or heavy snow with thunder":
      textWeather = i18n.global.t("moderate_or_heavy_snow_with_thunder");
      break;
    case "moderate rain":
      textWeather = i18n.global.t("moderate_rain");
      break;
    case "sky is clear":
      textWeather = i18n.global.t("sky_is_clear");
      break;
    case "moderate rain at times":
      textWeather = i18n.global.t("moderate_rain_at_times");
      break;
    case "moderate snow":
      textWeather = i18n.global.t("moderate_snow");
      break;
    case "mostly cloudy":
      textWeather = i18n.global.t("mostly_cloudy");
      break;
    case "overcast":
      textWeather = i18n.global.t("overcast");
      break;
    case "overcast clouds":
      textWeather = i18n.global.t("overcast_clouds");
      break;
    case "partly cloudy":
      textWeather = i18n.global.t("partly_cloudy");
      break;
    case "patchy heavy snow":
      textWeather = i18n.global.t("patchy_heavy_snow");
      break;
    case "patchy light drizzle":
      textWeather = i18n.global.t("patchy_light_drizzle");
      break;
    case "patchy light rain":
      textWeather = i18n.global.t("patchy_light_rain");
      break;
    case "patchy light rain with thunder":
      textWeather = i18n.global.t("patchy_light_rain_with_thunder");
      break;
    case "patchy light snow":
      textWeather = i18n.global.t("patchy_light_snow");
      break;
    case "patchy light snow with thunder":
      textWeather = i18n.global.t("patchy_light_snow_with_thunder");
      break;
    case "patchy moderate snow":
      textWeather = i18n.global.t("patchy_moderate_snow");
      break;
    case "patchy rain possible":
      textWeather = i18n.global.t("patchy_rain_possible");
      break;
    case "patchy sleet possible":
      textWeather = i18n.global.t("patchy_sleet_possible");
      break;
    case "patchy snow possible":
      textWeather = i18n.global.t("patchy_snow_possible");
      break;
    case "possible light rain":
      textWeather = i18n.global.t("possible_light_rain");
      break;
    case "possible light rain and humid":
      textWeather = i18n.global.t("possible_light_rain_and_humid");
      break;
    case "rain":
      textWeather = i18n.global.t("rain");
      break;
    case "rain and humid":
      textWeather = i18n.global.t("rain_and_humid");
      break;
    case "rain and snow":
      textWeather = i18n.global.t("rain_and_snow");
      break;
    case "scattered clouds":
      textWeather = i18n.global.t("scattered_clouds");
      break;
    case "snow":
      textWeather = i18n.global.t("snow");
      break;
    case "sunny":
      textWeather = i18n.global.t("sunny");
      break;
    case "thundery outbreaks possible":
      textWeather = i18n.global.t("thundery_outbreaks_possible");
      break;
    case "torrential rain shower":
      textWeather = i18n.global.t("torrential_rain_shower");
      break;
    case "drizzle":
      textWeather = i18n.global.t("drizzle");
      break;
    case "rain and breezy":
      textWeather = i18n.global.t("rain_and_breezy");
      break;
    case "breezy":
      textWeather = i18n.global.t("breezy");
      break;
    case "thunderstorm":
      textWeather = i18n.global.t("thunderstorm");
      break;
    case "thunderstorms":
      textWeather = i18n.global.t("thunderstorms");
      break;
    case "mostly clear":
      textWeather = i18n.global.t("mostly_clear");
      break;
    case "light shower snow":
      textWeather = i18n.global.t("light_shower_snow");
      break;
    case "some clouds":
      textWeather = i18n.global.t("some_clouds");
      break;
    case "thunderstorm with light rain":
      textWeather = i18n.global.t("thunderstorm_with_light_rain");
      break;
    case "thunderstorm with rain":
      textWeather = i18n.global.t("thunderstorm_with_rain");
      break;
    case "thunderstorm with drizzle":
      textWeather = i18n.global.t("thunderstorm_with_drizzle");
      break;
    case "clouds and sun":
      textWeather = i18n.global.t("clouds_and_sun");
      break;
    case "partly sunny":
      textWeather = i18n.global.t("partly_sunny");
      break;
    case "light intensity shower rain":
      textWeather = i18n.global.t("light_intensity_shower_rain");
      break;
    case "shower rain":
      textWeather = i18n.global.t("shower_rain");
      break;
    case "mostly sunny":
      textWeather = i18n.global.t("mostly_sunny");
      break;
    case "showers":
      textWeather = i18n.global.t("showers");
      break;
    case "dust":
      textWeather = i18n.global.t("dust");
      break;
    case "partly sunny w/ showers":
      textWeather = i18n.global.t("partly_sunny_with_showers");
      break;
    case "hot":
      textWeather = i18n.global.t("hot");
      break;
    case "windy":
      textWeather = i18n.global.t("windy");
      break;
    case "hazy sunshine":
      textWeather = i18n.global.t("hazy_sunshine");
      break;
    case "intermittent clouds":
      textWeather = i18n.global.t("intermittent_clouds");
      break;
    case "mostly cloudy throughout the day":
      textWeather = i18n.global.t("mostly_cloudy_throughout_the_day");
      break;
    case "mostly cloudy w/ t-storms":
      textWeather = i18n.global.t("mostly_cloudy_with_thunderstorms");
      break;
    case "clear throughout the day":
      textWeather = i18n.global.t("clear_throughout_the_day");
      break;
    case "partly sunny w/ t-storms":
      textWeather = i18n.global.t("partly_sunny_with_thunderstorms");
      break;
    case "extreme rain":
      textWeather = i18n.global.t("extreme_rain");
      break;
    case "cloudy, overcast conditions":
      textWeather = i18n.global.t("cloudy_overcast_conditions");
      break;
    case "rain and humid throughout the day":
      textWeather = i18n.global.t("rain_and_humid_throughout_the_day");
      break;
    case "drizzle rain":
      textWeather = i18n.global.t("drizzle_rain");
      break;
    case "overcast throughout the day":
      textWeather = i18n.global.t("overcast_throughout_the_day");
      break;
    case "light intensity drizzle rain":
      textWeather = i18n.global.t("light_intensity_drizzle_rain");
      break;
    case "partly cloudy throughout the day":
      textWeather = i18n.global.t("partly_cloudy_throughout_the_day");
      break;
    case "drizzle or light rain":
      textWeather = i18n.global.t("drizzle_or_light_rain");
      break;
    case "sand":
      textWeather = i18n.global.t("sand");
      break;
    case "hazy moonlight":
      textWeather = i18n.global.t("hazy_moonlight");
      break;
    case "light thunderstorm":
      textWeather = i18n.global.t("light_thunderstorm");
      break;
    case "rain throughout the day":
      textWeather = i18n.global.t("rain_throughout_the_day");
      break;
    case "humid throughout the day":
      textWeather = i18n.global.t("humid_throughout_the_day");
      break;
    case "humid and partly cloudy throughout the day":
      textWeather = i18n.global.t("humid_and_partly_cloudy_throughout_the_day");
      break;
    case "rain in the morning":
      textWeather = i18n.global.t("rain_in_the_morning");
      break;
    case "possible light rain in the evening":
      textWeather = i18n.global.t("possible_light_rain_in_the_evening");
      break;
    case "mostly cloudy w/ showers":
      textWeather = i18n.global.t("mostly_cloudy_with_showers");
      break;
    case "partly cloudy w/ showers":
      textWeather = i18n.global.t("partly_cloudy_with_showers");
      break;
    case "thunderstorm with heavy rain":
      textWeather = i18n.global.t("thunderstorm_with_heavy_rain");
      break;
    case "heavy intensity shower rain":
      textWeather = i18n.global.t("heavy_intensity_shower_rain");
      break;
    case "possible light rain in the morning":
      textWeather = i18n.global.t("possible_light_rain_in_the_morning");
      break;
    case "rain in the evening and overnight":
      textWeather = i18n.global.t("rain_in_the_evening_and_overnight");
      break;
    case "possible light rain in the morning and overnight":
      textWeather = i18n.global.t(
        "possible_light_rain_in_the_morning_and_overnight"
      );
      break;
    default:
      textWeather = "";
      break;
  }

  if (textWeather === "") textWeather = value;
  return toTitleCase(textWeather);
}

function toTitleCase(str) {
  // Tách chuỗi thành mảng các từ
  const words = str.split(" ");

  // Viết hoa ký tự đầu mỗi từ, phần còn lại viết thường
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  // Ghép mảng từ đã thay đổi thành chuỗi
  return capitalizedWords.join(" ");
}

export function convertToWeekdayAndDate(unixTime, offsetValue) {
  const daysOfWeek = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
  const date = new Date(unixTime * 1000); // Convert Unix Timestamp to Date object

  const utcTime = date.getTime();
  const localTime = new Date(utcTime + offsetValue * 3600 * 1000);

  const weekday = daysOfWeek[localTime.getDay()];
  const day = localTime.getDate().toString().padStart(2, "0"); // Day, formatted to 2 digits
  const month = (localTime.getMonth() + 1).toString().padStart(2, "0"); // Month, formatted to 2 digits

  return {
    weekday,
    date: `${day}/${month}`,
  };
}

export function convertTimestampToDate(timestamp) {
  const date = new Date(timestamp * 1000);

  const daysOfWeek = [
    "Chủ nhật",
    "Thứ 2",
    "Thứ 3",
    "Thứ 4",
    "Thứ 5",
    "Thứ 6",
    "Thứ 7",
  ];

  const dayOfWeek = daysOfWeek[date.getDay()];
  const day = date.getDate().toString().padStart(2, "0"); // Định dạng ngày thành 2 chữ số
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Tháng +1 và định dạng tháng thành 2 chữ số

  return `${dayOfWeek} ${day}/${month}`;
}

export function formatTimestampDay(timestamp) {
  const daysOfWeek = [
    "Chủ Nhật",
    "Thứ 2",
    "Thứ 3",
    "Thứ 4",
    "Thứ 5",
    "Thứ 6",
    "Thứ 7",
  ];

  const date = new Date(timestamp * 1000);

  const dayOfWeek = daysOfWeek[date.getDay()];

  return `${dayOfWeek}`;
}

// New
/**
 * Convert sang English
 * @param {*} str
 * @returns
 */
export function convertToEnglish(str) {
  const keyLanguageStorage = localStorage.getItem("language");

  if (keyLanguageStorage === "en") {
    if (typeof str !== "string") {
      return ""; // Hoặc một giá trị mặc định khác
    }
    return str
      .normalize("NFD") // Chuẩn hóa chuỗi để tách dấu
      .replace(/[\u0300-\u036f]/g, "") // Xóa các dấu thanh
      .replace(/đ/g, "d") // Thay thế chữ "đ" thành "d"
      .replace(/Đ/g, "D"); // Thay thế chữ "Đ" thành "D"
    // .replace(/\s+/g, ''); // Loại bỏ dấu cách
  }
  // Thay thế các ký tự tiếng Việt có dấu thành không dấu
  return str;
}

export function convertToEnglishReplace(str) {
  const keyLanguageStorage = localStorage.getItem("language");

  if (keyLanguageStorage === "en") {
    if (typeof str !== "string") {
      return ""; // Hoặc một giá trị mặc định khác
    }
    return str
      .normalize("NFD") // Chuẩn hóa chuỗi để tách dấu
      .replace(/[\u0300-\u036f]/g, "") // Xóa các dấu thanh
      .replace(/đ/g, "d") // Thay thế chữ "đ" thành "d"
      .replace(/Đ/g, "D") // Thay thế chữ "Đ" thành "D"
      .replace(/\s+/g, ""); // Loại bỏ dấu cách
  }
  // Thay thế các ký tự tiếng Việt có dấu thành không dấu
  return str;
}

export function capitalizeWords(str) {
  return str
    .toLowerCase() // Chuyển tất cả các chữ cái về chữ thường
    .split(" ") // Tách chuỗi thành mảng các từ
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Viết hoa chữ cái đầu
    .join(" "); // Gộp các từ lại thành chuỗi
}

// Convert time

export function timeConvertUTC(timestamp, offset, typeTime) {
  // Chuyển đổi timestamp sang UTC Date
  const utcDate = new Date(timestamp * 1000); // Tính bằng mili giây
  // Tính giờ địa phương bằng offset
  const localDate = new Date(utcDate.getTime() + offset * 60 * 60 * 1000);

  // Định dạng thời gian 12h
  const time12h = localDate.toLocaleString("en-US", {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  // Định dạng thời gian 24h
  const time24h = localDate.toLocaleString("en-GB", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  if (typeTime === "12h") {
    return time12h;
  }
  return time24h;
}

export function formatDateFull(timestamp, offset, locale = "en-US") {
  try {
    const date = new Date((timestamp + offset * 3600) * 1000); // Điều chỉnh timestamp với offset
    return new Intl.DateTimeFormat(locale, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  } catch (error) {
    console.error("Error in formatDateWithOffset:", error);
    return "Invalid date";
  }
}

export function convertTimestampFullMoon(dateString, language, timezone) {
  // Chuyển chuỗi thành Date object
  //const adjustedTimestamp = dateString + offsetValue * 60; // offset từ phút sang giây
  //const date = new Date(adjustedTimestamp * 1000); // Chuyển đổi thành Date object

  // Lấy thông tin ngày, tháng, năm, thứ
  const formatter = new Intl.DateTimeFormat("en-US", {
    weekday: "long", // Ví dụ: "Thứ Hai" / "Monday" / "Lundi"
    day: "2-digit", // Ngày (24)
    month: "2-digit", // "Tháng 2" (vi) / "February" (en) / "février" (fr)
    year: "numeric", // Năm (2025)
  });

  // Format lại thành mảng [weekday, day, month]
  const parts = formatter.formatToParts(dateString);

  debugger; // Trích xuất từng phần
  let weekday = "";
  let day = "";
  let month = "";
  let year = "";

  parts.forEach(({ type, value }) => {
    if (type === "weekday") weekday = value;
    if (type === "day") day = value;
    if (type === "month") month = value;
    if (type === "year") year = value;
  });

  return `${i18n.global.t(weekday)}, ${day}/${month}/${year}`;
}

// Convert Day
export function formatDatetimeToVN(datetimeStr) {
  // Tạo 1 ngày tạm để parse được giờ
  const fakeDate = new Date(`1970-01-01T${datetimeStr}`);

  // Cộng thêm 7 tiếng (GMT+7)
  const vnDate = new Date(fakeDate.getTime() + 7 * 60 * 60 * 1000);

  const hours = String(vnDate.getHours()).padStart(2, "0");
  const minutes = String(vnDate.getMinutes()).padStart(2, "0");

  return `${hours}:${minutes}`;
}

export function formatDateToDDMM(dateStr) {
  const [year, month, day] = dateStr.split("-");
  return `${day}/${month}`;
}

export function convertToShortDayMonth(value, locationOffsetValue, timezone) {
  // Kiểm tra nếu value không hợp lệ (null, undefined, NaN)
  if (!value || isNaN(value)) {
    console.error("Invalid timestamp:", value);
    return "Invalid Date";
  }
  // Chuyển timestamp Unix thành Date (value là giây)
  const adjustedTimestamp = value + locationOffsetValue * 60; // offset từ phút sang giây

  const date = new Date(adjustedTimestamp * 1000);


  // Lấy tên ngày viết tắt theo timezone
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    weekday: "short", // Trả về thứ viết tắt (Mon, Tue, Wed,...)
    day: "2-digit", // Ngày (DD)
    month: "2-digit", // Tháng (MM)
  });

  // Format lại thành mảng [weekday, day, month]
  const formattedDate = formatter.formatToParts(date);

  // Lấy thông tin ngày, tháng, thứ từ phần đã format
  let day = "";
  let month = "";

  formattedDate.forEach(({ type, value }) => {
    if (type === "day") day = value;
    if (type === "month") month = value;
  });

  // Trả về định dạng "Thu DD/MM" (VD: "Fri 21/02")
  return `${day}/${month}`;
}


export function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  const EARTH_RADIUS = 6371; // Bán kính Trái Đất (km)

  const deg2rad = (deg) => deg * (Math.PI / 180);

  const latDiff = deg2rad(lat2 - lat1);
  const lonDiff = deg2rad(lon2 - lon1);

  const sin1 = Math.sin(latDiff / 2) ** 2;
  const cos1 = Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2));
  const sin2 = Math.sin(lonDiff / 2) ** 2;

  const a = sin1 + cos1 * sin2;
  const b = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return EARTH_RADIUS * b;
}

// Format dạng 24h: 26/03 18:05
export function formatDateTime24h(datetime, offset = 0, timezone = "UTC") {
  try {
    const utcDate = new Date(datetime);

    const localTime = new Date(
      utcDate.getTime() + offset * 60 * 60 * 1000
    );

    const day = String(localTime.getDate()).padStart(2, "0");
    const month = String(localTime.getMonth() + 1).padStart(2, "0");
    const hour = String(localTime.getHours()).padStart(2, "0");
    const minute = String(localTime.getMinutes()).padStart(2, "0");

    return `${day}/${month} ${hour}:${minute}`;
  } catch (e) {
    console.warn("Lỗi định dạng 24h:", e.message);
    return datetime;
  }
}


// Format dạng 12h: 26/03 06:05 AM
export function formatDateTime12h(datetime, offset = 0, timezone = "UTC") {
  try {
    const utcDate = new Date(datetime);

    const localTime = new Date(
      utcDate.getTime() + offset * 60 * 60 * 1000
    );

    const day = String(localTime.getDate()).padStart(2, "0");
    const month = String(localTime.getMonth() + 1).padStart(2, "0");

    let hour = localTime.getHours();
    const ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12; // 0 => 12

    const hourStr = String(hour).padStart(2, "0");
    const minute = String(localTime.getMinutes()).padStart(2, "0");

    return `${day}/${month} ${hourStr}:${minute} ${ampm}`;
  } catch (e) {
    console.warn("Lỗi định dạng 12h:", e.message);
    return datetime;
  }
}

export function formatDateString(datetime, use12Hour = false) {
  try {
    const date = new Date(datetime);

    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");

    let hours = date.getUTCHours();
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");

    if (use12Hour) {
      const suffix = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12; // chuyển 0 thành 12
      return `${day}/${month} ${String(hours).padStart(2, "0")}:${minutes} ${suffix}`;
    } else {
      return `${day}/${month} ${String(hours).padStart(2, "0")}:${minutes}`;
    }
  } catch (err) {
    console.warn("Lỗi định dạng:", err.message);
    return datetime;
  }
}


export function formatDateLocalized(datetime, locale = "vi") {
  const date = new Date(datetime);

  const today = new Date();
  const isToday =
    date.getUTCDate() === today.getUTCDate() &&
    date.getUTCMonth() === today.getUTCMonth() &&
    date.getUTCFullYear() === today.getUTCFullYear();

  let formatted;

  if (locale === "vi") {
    formatted = `Ngày ${date.getUTCDate()} tháng ${date.getUTCMonth() + 1}, ${date.getUTCFullYear()}`;
    return isToday ? `Hôm nay (${formatted})` : formatted;
  } else {
    // Mặc định EN
    const options = { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" };
    formatted = date.toLocaleDateString("en-US", options);
    return isToday ? `Today (${formatted})` : formatted;
  }
}

export function getCurrentTimeISO() {
  const now = new Date();

  // Lấy phần yyyy-mm-ddThh:mm:ss từ ISO string
  const isoString = now.toISOString().split(".")[0]; // Bỏ mili giây
  return isoString + "+00:00"; // Gắn offset UTC
}

export function formatTo12HourTimeTide(datetimeStr) {
  const date = new Date(datetimeStr);
  let hours = date.getUTCHours(); // dùng getUTCHours vì chuỗi có +00:00
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // 0 giờ thành 12

  return `${String(hours).padStart(2, "0")}:${minutes} ${ampm}`;
}

export function formatTo24HourTimeTide(datetimeStr) {
  const date = new Date(datetimeStr);
  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");

  return `${hours}:${minutes}`;
}

export function formatDateToDayMonth(datetimeStr) {
  debugger
  const date = new Date(datetimeStr);

  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const hour = String(date.getUTCHours()).padStart(2, "0");

  return `${day}/${month}`;
}