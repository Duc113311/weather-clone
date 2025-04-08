import { httpWeather } from "../../configs/http-weather";
import { decodeBase64 } from "../../utils/EncoderDecoderUtils";
import removeAccents from "remove-accents";
import { getWeatherData } from "@/services/weatherService";

function removeWordAndAccents(str, wordToRemove) {
  const normalizedStr = removeAccents(str); // Loại bỏ dấu nếu có
  return normalizedStr
    .replace(new RegExp(`\\b${wordToRemove}\\b`, "gi"), "")
    .trim();
}
/**
 * State
 */
const state = {
  weatherCurrentData: {},

  locationOffset: {
    latitude: "",
    longitude: "",
    offset: 0,
    timezone: "Asia/Bangkok",
  },

  currently: {},
  dailyOne: {},
  hourly24h: [],
  hourly48h: [],
  dailyData: [],

  cityCountry: {},

  newArray: [],

  listDaily30Day: [],

  suggestionsTop100: [],

  objectWidget: {},
  weatherWidgetDefault: [],

  valueTitleWidget: "",

  valueOptionWidget: {},

  valueNumberWeather: 4,

  recentData: JSON.parse(localStorage.getItem("recentData")) || [],
};

/**
 * Getters
 */
const getters = {
  cityCountryGetters(state) {
    return state.cityCountry;
  },

  currentlyGetters(state) {
    return state.currently;
  },

  locationOffsetGetters(state) {
    return state.locationOffset;
  },

  dailyDataGetters(state) {
    return state.dailyData;
  },

  hourly24hGetters(state) {
    return state.hourly24h;
  },

  dailyOneGetters(state) {
    return state.dailyOne;
  },

  suggestionsTop100Getters(state) {
    return state.suggestionsTop100;
  },

  listDaily30DayGetters(state) {
    return state.listDaily30Day;
  },
};

/**
 * Mutations
 */
const mutations = {
  /**
   * Xét giá trị Weather Current Data
   * @param {*} state
   * @param {*} data
   */
  setWeatherDataCurrent(state, data) {
    state.weatherCurrentData = data;
    if (state.weatherCurrentData) {
      state.locationOffset.latitude = state.weatherCurrentData.latitude;
      state.locationOffset.longitude = state.weatherCurrentData.longitude;
      state.locationOffset.offset = state.weatherCurrentData.offset;
      state.locationOffset.timezone = state.weatherCurrentData.timezone;

      state.currently = state.weatherCurrentData.currently;
      state.dailyOne = state.weatherCurrentData.daily.data[0];
      state.hourly24h = state.weatherCurrentData.hourly.data.slice(0, 24);
      state.hourly48h = state.weatherCurrentData.hourly.data;
      state.dailyData = state.weatherCurrentData.daily.data;

      console.log("state.weatherCurrentData", state.weatherCurrentData);
    }
  },

  saveRecentData(state, data) {
    const exists = state.recentData.find(
      (item) => item.objectAddress?.city === data.objectAddress?.city
    );
    if (exists) return; // tránh trùng

    if (state.recentData.length >= 5) {
      state.recentData.pop(); // ❗ Xoá phần tử cuối cùng thay vì đầu nếu push lên đầu
    }

    state.recentData.unshift(data); // ✅ Thêm mới vào đầu mảng

    localStorage.setItem("recentData", JSON.stringify(state.recentData));
  },

  setCityWeather(state, data) {
    state.cityCountry = data;
    state.countryFilter = data;
  },

  setFormattedAddress(state, data) {
    debugger;

    const jsonValue = data;
    if (!jsonValue) {
      return;
    }

    const listResultAddress = jsonValue;

    const addressResult = listResultAddress.results;
    debugger;
    state.newArray = [];
    for (let index = 0; index < addressResult.length; index++) {
      const element = addressResult[index];

      // const lastElement =
      //   element.address_components[element.address_components.length - 1];

      let objectPush = {};
      const valueCountry = element.address_components.find((x) =>
        ["country", "political"].every((type) => x.types.includes(type))
      ) || { long_name: "" };

      if (valueCountry.short_name === "VN") {
        const nameCity = element.address_components.find((x) =>
          ["administrative_area_level_1", "political"].every((type) =>
            x.types.includes(type)
          )
        ) || { long_name: "" };
        const nameDistrict = element.address_components.find((x) =>
          ["administrative_area_level_2", "political"].every((type) =>
            x.types.includes(type)
          )
        ) ||
          element.address_components.find((x) =>
            ["locality", "political"].every((type) => x.types.includes(type))
          ) || { long_name: "" };

        const nameWard = element.address_components.find((x) =>
          ["administrative_area_level_3", "political"].every((type) =>
            x.types.includes(type)
          )
        ) ||
          element.address_components.find((x) =>
            ["neighborhood", "political"].every((type) =>
              x.types.includes(type)
            )
          ) ||
          element.address_components.find((x) =>
            ["political", "sublocality", "sublocality_level_1"].every((type) =>
              x.types.includes(type)
            )
          ) || { long_name: "" };

        objectPush.country = valueCountry.long_name;
        objectPush.country_key = valueCountry.short_name;
        objectPush.city = nameCity.long_name;
        objectPush.district = removeWordAndAccents(
          nameDistrict.long_name,
          "District"
        );
        objectPush.ward = nameWard.long_name;
        (objectPush.address = element.formatted_address),
          (objectPush.lat = element.geometry.location.lat),
          (objectPush.lng = element.geometry.location.lng);
      } else {
        // Các bang
        const nameState = element.address_components.find((x) =>
          ["administrative_area_level_1", "political"].every((type) =>
            x.types.includes(type)
          )
        ) || { long_name: "" };

        // County - quận

        const nameArea = element.address_components.find((x) =>
          ["administrative_area_level_2", "political"].every((type) =>
            x.types.includes(type)
          )
        ) || { long_name: "" };

        // Thành phố
        const nameCity = element.address_components.find((x) =>
          ["locality", "political"].every((type) => x.types.includes(type))
        ) || { long_name: "" };

        if (valueCountry.long_name.length !== 0) {
          objectPush.country = valueCountry.long_name;
          objectPush.country_key = valueCountry.short_name.toLowerCase();
          objectPush.state = nameState.long_name; // bang
          objectPush.state_key = nameState.short_name.toLowerCase(); // key bang
          // objectPush.county = nameArea.long_name; // quận - county
          objectPush.cities = nameCity.long_name; // thành phố
          (objectPush.address = element.formatted_address),
            (objectPush.lat = element.geometry.location.lat),
            (objectPush.lng = element.geometry.location.lng);
        }
      }

      state.newArray.push(objectPush);
    }
  },

  setWeather30DayData(state, data) {
    state.weatherData30Day = data;

    console.log("state.weatherData30Day", state.weatherData30Day);

    state.listDaily30Day = state.weatherData30Day.daily.data;
  },

  setDataTop100City(state, data) {
    state.suggestionsTop100 = data;
  },

  // Widget

  setWeatherByWidget(state, data) {
    const widgetCurrently = data;
    state.weatherWidgetDefault = widgetCurrently;

    state.objectWidget.currently = widgetCurrently.currently;

    state.objectWidget.listDaily = widgetCurrently.daily.data.slice(
      1,
      state.valueNumberWeather
    );

    localStorage.setItem("objectWidget", JSON.stringify(state.objectWidget));
  },

  setNumberDailyWeather(state, data) {
    state.valueNumberWeather = data;
    state.objectWidget.listDaily = state.weatherWidgetDefault.daily.data.slice(
      1,
      data
    );

    localStorage.setItem("objectWidget", JSON.stringify(state.objectWidget));
  },

  setTitleWidget(state, data) {
    state.valueTitleWidget = data;
  },

  setOptionWidget(state, data) {
    state.valueOptionWidget = data;
  },
};

/**
 * Actions
 */
const actions = {
  /**
   * Lấy thời tiết hiện tại
   * @param {*} param0
   * @param {*} data
   * @returns
   */
  async getWeatherDataCurrent({ commit }, locationCode) {
    const data = await getWeatherData(locationCode);
    if (data) commit("setWeatherDataCurrent", data);
  },

  /**
   * Get Data lat,long Weather
   * @param {*} param0
   * @param {*} data
   * @returns
   */
  async getWeatherDataIp({ commit }, data) {
    return new Promise((resolve, reject) => {
      httpWeather
        .get(`api.php?param=${data}`)
        .then((response) => {
          if (response.status === 200) {
            resolve(response.data);
          } else {
            reject("Error: API returned non-200 status");
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  async getFormattedAddress({ commit }, locationCode) {
    const data = await getWeatherData(locationCode);
    if (data) commit("setFormattedAddress", data);
  },

  /**
   * Lấy danh sách thời tiết 30 ngày
   * @param {*} param0
   * @param {*} locationCode
   */
  async getWeather30DayData({ commit }, locationCode) {
    const data = await getWeatherData(locationCode);
    if (data) commit("setWeather30DayData", data);
  },

  /**
   * Lấy thời tiết theo địa chỉ search widget
   * @param {*} param0
   * @param {*} locationCode
   */
  async getWeatherByWidget({ commit }, locationCode) {
    const data = await getWeatherData(locationCode);
    if (data) commit("setWeatherByWidget", data);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
