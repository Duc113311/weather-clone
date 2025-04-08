import { httpWeather } from "../../configs/http-weather";
import { decodeBase64 } from "../../utils/EncoderDecoderUtils";

const state = {
  titleBackgroundColor: "var(--bg-color-widget)",
  descriptionColor: `var(--description-color-widget)`,
  titleColor: `var(--title-color-widget)`,
  textColor: `var(--text-color-widget)`,
  lineColor: `var(--line-color-widget)`,

  titleBackgroundColorDark: "#0D274C",
  descriptionColorDark: "#C7C8C8",
  titleColorDark: "#ffffff",
  textColorDark: "#CCCEFF",
  lineColorDark: "#F2F2F2",

  titleBackgroundColorLight: "#ffffff",
  descriptionColorLight: "#889a9a",
  titleColorLight: "#0E2950",
  textColorLight: "#7d7fd2",
  lineColorLight: "#739bd3",

  statusAddWidget: true,

  objectWidget: {
    titleName: "",
    currently: {},
    listDaily: [],
  },

  objectSetting: {
    activeTemperature: "c",
    activeTime: "12h",
    activePrecipitation: "mm",
    activeDistance: "km",
    activeWindSpeed: "mi/h",
    activePressure: "hPa",
  },

  objectSettingSave: {
    activeTemperature_save: "c",
    activeTime_save: "12h",
    activePrecipitation_save: "mm",
    activeDistance_save: "km",
    activeWindSpeed_save: "mi/h",
    activePressure_save: "hPa",
    activeTide_save: "m",
  },

  objectAqiPollutant: [
    {
      code: "pm25",
      label: "PM2.5",
    },
    {
      code: "pm10",
      label: "PM10",
    },
    {
      code: "03",
      label: "O3",
    },
    {
      code: "no2",
      label: "NO2",
    },
    {
      code: "SO2",
      label: "so2",
    },
    {
      code: "co",
      label: "CO",
    },
  ],

  breadcumsObject: {},

  listLocation: [],
  codeLanguage: "en",
  indexKey: 0,
  weatherWidget: {},
  weatherWidgetOption: {},

  objectCityByLocation: [],
  objectFormattesLocation: [],
  listCityAll: [],
  listAlabama: [],
  listStateAmerican: [],

  indexComponent: 0,

  locationChomeObject: {},

  activeTab: -1,
  themeValue: "dark",

  themeColor: "var(--color-txt-chart-precipitation)",

  isScroll: false,

  objectMoonDes: {},
};

const getters = {
  /**
   * Xét giá trị cho breadcums
   * @param {*} state
   * @returns
   */
  breadcumsObjectGetters(state) {
    return state.breadcumsObject;
  },

  isScrollGetters(state) {
    return state.isScroll;
  },

  indexComponentGetters(state) {
    return state.indexComponent;
  },

  activeTabGetters(state) {
    return state.activeTab;
  },

  objectCityByLocationGetters(state) {
    return state.objectCityByLocation;
  },

  objectFormatLocationGetters(state) {
    return state.objectFormattesLocation;
  },

  listCityAllGetters(state) {
    return state.listCityAll;
  },

  listAlabamaGetters(state) {
    return state.listAlabama;
  },

  listStateAmericanGetters(state) {
    return state.listStateAmerican;
  },

  locationChomeObjectGetters(state) {
    return state.locationChomeObject;
  },

  weatherWidgetOptionGetters(state) {
    return state.weatherWidgetOption;
  },
};

const mutations = {
  SET_TITLE_BACKGROUND_COLOR(state, value) {
    // state.titleBackgroundColor = value;

    const valueTheme = localStorage.getItem("theme");
    if (valueTheme === "light") {
      state.titleBackgroundColorLight = value;
    } else {
      state.titleBackgroundColorDark = value;
    }
  },
  setIsScroll(state, value) {
    state.isScroll = value;
  },
  setThemeState(state, value) {
    state.themeValue = value;
  },
  updateThemeColor(state, color) {
    state.themeColor = color;
  },
  setObjectCityByLocation(state, data) {
    sessionStorage.setItem("dataCityLog", JSON.stringify(data));

    state.objectCityByLocation = data;
  },

  setObjectFormattesLocation(state, data) {
    sessionStorage.setItem(
      `data_${data.keyStorage}`,
      JSON.stringify(data.provinceData)
    );

    state.objectFormattesLocation = data.provinceData;
  },

  setIndexComponent(state, data) {
    state.indexComponent = data;
  },

  setActiveTab(state, data) {
    state.activeTab = data;
  },

  setListDetailCityAll(state, data) {
    sessionStorage.setItem("dataCityAll", JSON.stringify(data));

    state.listCityAll = data;
  },

  setStateAmerican(state, data) {
    sessionStorage.setItem("dataAlabama", JSON.stringify(data));

    state.listAlabama = data;
  },

  setAmericanStateRegions(state, data) {
    sessionStorage.setItem("dataStateAmerican", JSON.stringify(data));

    state.listStateAmerican = data;
  },
  /**
   * Xét giá trị location khi cho phép truy cập
   * @param {*} state
   * @param {*} data
   */
  setBreadcumsAllowLocation(state, data) {
    if (data?.country_key === "vn") {
      (state.breadcumsObject.country = data?.country), // Quốc gia
        (state.breadcumsObject.country_key = data?.country_key), // Quốc gia
        (state.breadcumsObject.city = data?.city), // Thành phố
        (state.breadcumsObject.city_key = data?.city_key), // Thành phố
        (state.breadcumsObject.ward = data?.ward), // Phường xã
        (state.breadcumsObject.ward_key = data?.ward_key), // Phường xã
        (state.breadcumsObject.district = data?.district), // Quận huyện
        (state.breadcumsObject.district_key = data?.district_key), // Quận huyện
        (state.breadcumsObject.latitude = data?.latitude), // latitude
        (state.breadcumsObject.longitude = data?.longitude); // longitude
    } else {
      (state.breadcumsObject.country_key = data?.country_key), //  us
        (state.breadcumsObject.country = data?.country), // us
        (state.breadcumsObject.state = data?.state), // State
        (state.breadcumsObject.state_key = data?.state_key), // State key
        (state.breadcumsObject.county = data?.county), // county
        (state.breadcumsObject.cities = data?.cities), // cities
        (state.breadcumsObject.latitude = data?.latitude), // latitude
        (state.breadcumsObject.longitude = data?.longitude); // longitude
    }
  },

  /**
   * Xét giá trị mặc định Chome
   * @param {*} state
   * @param {*} data
   */
  setLocationChome(state, data) {
    //
    if (data?.country_key === "vn") {
      //
      (state.locationChomeObject.country = data?.country), // Quốc gia
        (state.locationChomeObject.country_key = data?.country_key), // Quốc gia
        (state.locationChomeObject.city = data?.city), // Thành phố
        (state.locationChomeObject.city_key = data?.city_key), // Thành phố
        (state.locationChomeObject.latitude = data?.latitude), // latitude
        (state.locationChomeObject.longitude = data?.longitude); // longitude
    }

    if (data?.country_key === "us") {
      (state.locationChomeObject.country = data?.country), // Quốc gia
        (state.locationChomeObject.country_key = data?.country_key), // Quốc gia
        (state.locationChomeObject.state = data?.state), // Thành phố
        (state.locationChomeObject.state_key = data?.state_key), // Thành phố
        (state.locationChomeObject.latitude = data?.latitude), // latitude
        (state.locationChomeObject.longitude = data?.longitude); // longitude
    }
  },

  /**
   * Xét giá trị location khi không cho phép truy cập
   * @param {*} state
   * @param {*} data
   */
  setBreadcumsNotAllowLocation(state, data) {
    //

    (state.breadcumsObject.country = data?.country), // Quốc gia
      (state.breadcumsObject.country_key = data?.country_key), // Quốc gia
      (state.breadcumsObject.city = data?.city),
      (state.breadcumsObject.city_key = data?.city_key),
      (state.breadcumsObject.ward = ""), // Phường xã
      (state.breadcumsObject.ward_key = ""), // Phường xã
      (state.breadcumsObject.district = ""), // Quận huyện
      (state.breadcumsObject.district_key = ""), // Quận huyện
      (state.breadcumsObject.latitude = data?.latitude), // latitude
      (state.breadcumsObject.longitude = data?.longitude); // longitud  e
  },

  setBreadcumsTheWorld(state, data) {
    //

    (state.breadcumsObject.country = data?.country), // Quốc gia
      (state.breadcumsObject.country_key = data?.country_key), // Quốc gia
      (state.breadcumsObject.city = data?.city),
      (state.breadcumsObject.city_key = data?.city_key),
      (state.breadcumsObject.district = data?.district), // Quận huyện
      (state.breadcumsObject.district_key = data?.district_key), // Quận huyện
      (state.breadcumsObject.latitude = data?.latitude), // latitude
      (state.breadcumsObject.longitude = data?.longitude); // longitud  e
  },

  setUpdateBreadcumsObject(state, data) {
    state.breadcumsObject.country = data.country;
    state.breadcumsObject.city = data.value;
  },
  setCodeLanguage(state, data) {
    state.codeLanguage = data;
  },
  setObjectSetting(state, data) {
    state.objectSetting = data;
  },
  setObjectSettingSaveDefault(state, data) {
    state.objectSettingSave.activeTemperature_save = data.activeTemperature;
    state.objectSettingSave.activeTime_save = data.activeTime;
    state.objectSettingSave.activePrecipitation_save = data.activePrecipitation;
    state.objectSettingSave.activeDistance_save = data.activeDistance;
    state.objectSettingSave.activeWindSpeed_save = data.activeWindSpeed;
    state.objectSettingSave.activePressure_save = data.activePressure;

    let storedData = localStorage.getItem("unit");
    if (storedData) {
      let parsedData = JSON.parse(storedData);

      parsedData = { ...parsedData, ...data };
      localStorage.setItem("unit", JSON.stringify(parsedData));
    } else {
      localStorage.setItem("unit", JSON.stringify(data));
    }
  },
  setObjectSettingNotLocal(state, data) {
    state.objectSettingSave.activeTemperature_save = data.activeTemperature;
    state.objectSettingSave.activeTime_save = data.activeTime;
    state.objectSettingSave.activePrecipitation_save = data.activePrecipitation;
    state.objectSettingSave.activeDistance_save = data.activeDistance;
    state.objectSettingSave.activeWindSpeed_save = data.activeWindSpeed;
    state.objectSettingSave.activePressure_save = data.activePressure;
  },

  setKeyIndexComponent(state, key) {
    state.indexKey = key;
  },

  // unit
  setActiveTemperature(state, data) {
    state.objectSetting.activeTemperature = data;
  },
  setActiveTime(state, data) {
    state.objectSetting.activeTime = data;
  },
  setActivePrecipitation(state, data) {
    state.objectSetting.activePrecipitation = data;
  },
  setActiveDistance(state, data) {
    state.objectSetting.activeDistance = data;
  },
  setActiveWindSpeed(state, data) {
    state.objectSetting.activeWindSpeed = data;
  },
  setActivePressure(state, data) {
    state.objectSetting.activePressure = data;
  },
  // end
  setTitleBackgroundColor(state, data) {
    state.statusAddWidget = false;
    state.titleBackgroundColor = data;
  },

  setDescriptionColor(state, value) {
    const valueTheme = localStorage.getItem("theme");
    if (valueTheme === "light") {
      state.descriptionColorLight = value;
    } else {
      state.descriptionColorDark = value;
    }
  },

  setTitleColor(state, value) {
    const valueTheme = localStorage.getItem("theme");
    if (valueTheme === "light") {
      state.titleColorLight = value;
    } else {
      state.titleColorDark = value;
    }
  },

  setTextColor(state, value) {
    const valueTheme = localStorage.getItem("theme");
    if (valueTheme === "light") {
      state.textColorLight = value;
    } else {
      state.textColorDark = value;
    }
  },

  setLineColor(state, value) {
    const valueTheme = localStorage.getItem("theme");
    if (valueTheme === "light") {
      state.lineColorLight = value;
    } else {
      state.lineColorDark = value;
    }
  },

  setListLocation(state, data) {
    state.listLocation = data;
  },

  setDataWidget(state, data) {
    state.objectWidget.titleName = data;
  },

  setWeatherWidget(state, data) {
    const jsonValue = decodeBase64(data);
    if (!jsonValue) {
      return;
    }
    const weatherData = JSON.parse(jsonValue);
    if (weatherData) {
      const weatherDataConvert = weatherData.results[0];
      (state.weatherWidgetOption.label =
        weatherDataConvert.formatted_address).trim(),
        (state.weatherWidgetOption.lat =
          weatherDataConvert.geometry.location.lat),
        (state.weatherWidgetOption.lng =
          weatherDataConvert.geometry.location.lng);
    }
    // state.weatherWidget = weatherData;
    // state.objectWidget.currently = weatherData.currently;
    // state.objectWidget.listDaily = weatherData.daily.data.slice(0, 3);
  },

  setNumberDataDaily(state, data) {
    state.objectWidget.listDaily = state.weatherWidget.daily.data.slice(
      0,
      data
    );
  },

  setObjectMoonphase(state, data) {
    state.objectMoonDes = data;
  },
  // setting

  // objectSetting: {
  //   activeTemperature: "c",
  //   activeTime: "12h",
  //   activePrecipitation: "mm",
  //   activeDistance: "km",
  //   activeWindSpeed: "m/s",
  //   activePressure: "atm",
  // },
};

const actions = {
  async getWeatherWidget({ commit }, data) {
    return new Promise((resolve, reject) => {
      httpWeather
        .get(`api.php?param=${data}`)
        .then((response) => {
          if (response.status === 200) {
            commit("setWeatherWidget", response.data);
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
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
