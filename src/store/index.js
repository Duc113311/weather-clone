import { createStore } from "vuex";

import weatherModule from "./weather/weatherModule";
import airQualityModule from "./weather/airQualityModule";
import idFindModule from "./weather/idFindModule";
import commonModule from "./common/commonModule";
import tideModule from "./weather/tideModule";

export default createStore({
  modules: {
    weatherModule,
    airQualityModule,
    idFindModule,
    commonModule,
    tideModule,
  },
});
