import { httpAqi } from "../../configs/http-weather";
import { decodeBase64 } from "../../utils/EncoderDecoderUtils";
import { getAirQualityData } from "@/services/aqiService";

/**
 * State
 */
const state = {
  airObject: {},
  airKeyObject: {},
  apiValue: 0,
};

/**
 * Getters
 */
const getters = {
  airObjectGetters(state) {
    return state.airObject;
  },

  airKeyObjectGetters(state) {
    return state.airKeyObject;
  },

  apiValueGetters(state) {
    return state.apiValue;
  },
};

/**
 * Mutations
 */
const mutations = {
  /**
   * Xét giá trị air quality
   * @param {*} state
   * @param {*} data
   */
  setAirQuality(state, data) {
    localStorage.setItem("airObject", data);

    const newDataAir = data;

    // localStorage.setItem("airObject", newDataAir);
    state.airObject = newDataAir;
    state.apiValue = newDataAir.aqi;
  },

  /**
   * Xét giá trị air quality by key
   * @param {*} state
   * @param {*} data
   */
  setAirQualityByKey(state, data) {
    const newDataAir = data;
    if (newDataAir) {
      state.airKeyObject = newDataAir.d[0];
    }
  },
};

/**
 * Actions
 */
const actions = {
  /**
   * API Get Air Quality (Chất lượng không khí)
   * @param {*} param0
   * @param {*} param
   * @returns
   */
  async getAirQuality({ commit }, locationCode) {
    const data = await getAirQualityData(locationCode);
    if (data) commit("setAirQuality", data);
  },

  /**
   * API Get Air Quality by Key
   * @param {*} param0
   * @param {*} param
   * @returns
   */
  async getAirQualityByKey({ commit }, locationCode) {
    const data = await getAirQualityData(locationCode);
    if (data) commit("setAirQualityByKey", data);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
