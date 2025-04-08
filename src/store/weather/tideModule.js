import { groupTidesByDate } from "@/utils/middleware";
import { httpTides } from "../../configs/http-weather";

import { getTidesData } from "@/services/tideService";

const state = {
  tideData: {},
  heightsData: [],
  datumsData: {},
  extremesData: [],
  extremesDataFull: [],
  timestampCurrent: "",
  listStationNearBy: [],
  currentStationNear: {},
};

const getters = {
  extremesDataGetters(state) {
    return state.extremesData.slice(0, 6);
  },

  datumsDataGetters(state) {
    return state.datumsData;
  },

  heightsDataGetters(state) {
    return state.heightsData;
  },

  tideDataGetters(state) {
    return state.tideData;
  },

  extremesDataFullGetters(state) {
    return state.extremesDataFull.slice(0, 30);
  },

  listStationNearByGetters(state) {
    return state.listStationNearBy;
  },

  currentStationNearGetters(state) {
    return state.currentStationNear;
  },
};

const mutations = {
  setTidesDataMutation(state, data) {
    debugger;
    state.tideData = data;

    console.log("tideData", state.tideData);

    // state.extremesData = groupTidesByDate(data.extremes);

    state.extremesData = data.extremes;
    state.extremesDataFull = data.extremes;

    state.datumsData = data.datums;
    state.timestampCurrent = data.timestamp;
    state.heightsData = data.heights;
  },

  setTideStationNearBy(state, data) {
    state.listStationNearBy = data;
  },

  setCurrentStationNear(state, data) {
    state.currentStationNear = data;
  },
};

const actions = {
  /**
   * API lấy danh sách thủy chiều
   * @param {*} param0
   * @param {*} locationCode
   */
  async getTidesData({ commit }, locationCode) {
    const data = await getTidesData(locationCode);
    if (data) commit("setTidesDataMutation", data);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
