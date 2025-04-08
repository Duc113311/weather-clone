import { httpIpFind } from "../../configs/http-weather";

/**
 * State
 */
const state = {
  ipLocation: "",
};

/**
 * Getters
 */
const getters = {};

/**
 * Mutations
 */
const mutations = {
  /**
   * Xét giá trị IP Location
   * @param {*} state
   * @param {*} data
   */
  setIpLocation(state, data) {
    state.ipLocation = data;
  },
};

/**
 * Actions
 */
const actions = {
  /**
   * API Lấy vị trí khi search
   * @param {*} param0
   * @param {*} authKey
   * @returns
   */
  async getIpLocation({ commit }, authKey) {
    return new Promise((resolve, reject) => {
      httpIpFind
        .get(`me?auth=${authKey}`)
        .then((response) => {
          if (response.status === 200) {
            // commit("setIpLocation", response.data);
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
