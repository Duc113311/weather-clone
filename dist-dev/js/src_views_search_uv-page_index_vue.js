(self["webpackChunkweather_web"] = self["webpackChunkweather_web"] || []).push([["src_views_search_uv-page_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/uv-page/chart/chart-uv-index-page.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/uv-page/chart/chart-uv-index-page.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_common_baseComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/common/baseComponent.vue */ "./src/components/common/baseComponent.vue");
/* harmony import */ var _components_common_chart_chart_days_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/common/chart/chart-days.vue */ "./src/components/common/chart/chart-days.vue");
/* harmony import */ var _components_icons_IcUvIndex_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/icons/IcUvIndex.vue */ "./src/components/icons/IcUvIndex.vue");
/* harmony import */ var _utils_converValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/converValue */ "./src/utils/converValue.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var vue_horizontal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-horizontal */ "./node_modules/vue-horizontal/dist/vue-horizontal.es.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.js");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! chartjs-plugin-datalabels */ "./node_modules/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _utils_coverTextSystem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/coverTextSystem */ "./src/utils/coverTextSystem.js");







chart_js__WEBPACK_IMPORTED_MODULE_6__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_6__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_6__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_6__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_6__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_6__.Filler, chart_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_6__.Legend, chart_js__WEBPACK_IMPORTED_MODULE_6__.LineController, chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_7__["default"]);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "chart-uv-index-page",
  components: {
    BaseComponent: _components_common_baseComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ChartDays: _components_common_chart_chart_days_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    VueHorizontal: vue_horizontal__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data() {
    return {
      srcDaytime: (0,vue__WEBPACK_IMPORTED_MODULE_4__.markRaw)(_components_icons_IcUvIndex_vue__WEBPACK_IMPORTED_MODULE_2__["default"])
    };
  },
  computed: {
    ...(0,vuex__WEBPACK_IMPORTED_MODULE_9__.mapGetters)("commonModule", ["breadcumsObjectGetters"]),
    languageParam() {
      const languageRouter = this.$route.params;
      return Object.keys(languageRouter).length !== 0 ? languageRouter.language !== "en" && languageRouter.language !== "vi" ? "en" : languageRouter.language : this.$i18n.locale !== "en" && this.$i18n.locale !== "vi" ? "en" : this.$i18n.locale;
    },
    breadcumsObject() {
      const retrievedArray = JSON.parse(localStorage.getItem("objectBread"));
      const resultData = retrievedArray ? retrievedArray : this.breadcumsObjectGetters;
      return resultData;
    },
    listHourly() {
      const hourly24hValue = [...this.$store.state.weatherModule.hourly24h]; // Tạo bản sao để tránh thay đổi trực tiếp trong store
      const currently = this.$store.state.weatherModule.currently;
      if (hourly24hValue.length !== 0 && currently) {
        hourly24hValue.splice(0, 1, currently); // Chỉ thay thế phần tử đầu tiên bằng object currently
      }
      console.log("hourly24hValue", hourly24hValue);
      return hourly24hValue;
    },
    objectSetting() {
      return this.$store.state.commonModule.objectSettingSave;
    },
    listUvIndexData() {
      const unitSetting = this.objectSetting;
      return this.listHourly.map(element => Math.round(element.uvIndex) || 0);
      // return [
      //   12, 12, 16, 17, 10, 13, 10, 15, 3, 12, 12, 16, 17, 12, 12, 16, 17, 10,
      //   13, 10, 15, 3, 12, 12,
      // ];
    }
  },
  watch: {
    listHourly(newValue) {
      if (newValue.length !== 0) {
        this.$nextTick(() => {
          this.createChartHourly24h();
        });
      }
    }
  },
  mounted() {
    if (this.listHourly && this.listHourly.length) {
      this.$nextTick(() => {
        this.createChartHourly24h();
      });
    }
  },
  methods: {
    convertToSlugCity(str) {
      const slug = (0,_utils_coverTextSystem__WEBPACK_IMPORTED_MODULE_8__.removeAccentsUnicode)(str);
      return slug.toLowerCase() // Chuyển thành chữ thường
      .replace(/\s+/g, ""); // Xóa khoảng trắng
    },
    convertToLowCase(value) {
      const normalizedStr = value.normalize("NFD") // Chuyển chuỗi sang dạng tổ hợp Unicode
      .replace(/[\u0300-\u036f]/g, ""); // Loại bỏ các dấu

      return normalizedStr;
    },
    convertTime(val) {
      const offsetValue = this.$store.state.weatherModule.locationOffset.offset;
      const timezoneValue = this.$store.state.weatherModule.locationOffset.timezone;
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      if (unitSetting.activeTime_save === "12h") {
        return (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_3__.convertTimestamp12hSun)(val, 1, offsetValue, timezoneValue);
      } else {
        return (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_3__.convertTimestamp24hSun)(val, 1, offsetValue, timezoneValue);
      }
    },
    convertValueUvTitle(value) {
      if (value <= 2) return this.$t("Low"); // Màu cho giá trị thấp
      if (2 < value && value <= 5) return this.$t("Moderate"); // Màu cho giá trị trung bình
      if (5 < value && value <= 7) return this.$t("High"); // Màu cho giá trị cao
      if (7 < value && value <= 10) return this.$t("Very_High"); // Màu cho giá trị rất cao
      return this.$t("Extreme"); // Màu cho giá trị cực cao
    },
    createChartHourly24h() {
      const canvas = this.$refs.canvas;
      if (!canvas) {
        console.error("Canvas element not found");
        return;
      }
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        console.error("Failed to get canvas context");
        return;
      }
      if (this.chartInstance) {
        this.chartInstance.destroy();
      }
      // Tạo gradient màu từ #FFDA24 đến #D9D9D9 chỉ ở nửa trên của canvas
      const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
      gradient.addColorStop(0, "#FFD600"); // Màu trên (#F5A300 với độ mờ 50%)
      gradient.addColorStop(1, "#FFA800"); // Màu dưới (#F5D400 với độ mờ 10%)
      const displayData = this.listUvIndexData.map(value => value === 0 ? 0.5 : value > 13 ? 13 : value);

      // Thay đổi màu sắc của từng cột dựa trên giá trị
      const backgroundColors = displayData.map(value => {
        if (value <= 2) return "#389311"; // Màu cho giá trị thấp
        if (2 < value && value <= 5) return "#F3E52B"; // Màu cho giá trị trung bình
        if (5 < value && value <= 7) return "#EE621D"; // Màu cho giá trị cao
        if (7 < value && value <= 10) return "#CF2526"; // Màu cho giá trị rất cao
        return "#9064CB"; // Màu cho giá trị cực cao
      });
      const labelList = this.listHourly.map(item => {
        const date = item.time;
        return this.convertTime(date);
      });
      const savedTheme = localStorage.getItem("theme") || "light";
      this.chartInstance = new chart_js__WEBPACK_IMPORTED_MODULE_6__.Chart(ctx, {
        type: "line",
        data: {
          labels: labelList,
          datasets: [{
            label: "Uv Index",
            type: "bar",
            pointBackgroundColor: "#ffffff",
            borderWidth: 1,
            pointBorderColor: "#C27021",
            pointRadius: 5,
            backgroundColor: backgroundColors,
            fill: true,
            data: displayData,
            barThickness: 30,
            borderRadius: 20
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: {
              top: 0,
              // Chỉ định padding phía trên
              bottom: 0,
              // Chỉ định padding phía dưới
              left: 0,
              right: 0
            }
          },
          plugins: {
            legend: {
              display: false,
              position: "bottom"
            },
            tooltip: {
              enabled: true,
              theme: "dark",
              callbacks: {
                label: context => {
                  const value = context.raw || "";
                  return ` ${value === 0.5 ? 0 : value}, ${this.convertValueUvTitle(value)} UV`; // Thông tin khi hover
                }
              }
            },
            datalabels: {
              display: false
            }
          },
          scales: {
            x: {
              display: false,
              ticks: {
                stepSize: 10 // Điều chỉnh số lượng điểm hiển thị trên trục x
              }
            },
            y: {
              display: false,
              beginAtZero: true,
              max: 15,
              min: 0
            }
          },
          elements: {
            line: {
              tension: 0.3
            }
          }
        },
        plugins: [{}]
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/uv-page/form-uv-index/uv-current-page.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/uv-page/form-uv-index/uv-current-page.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_common_baseComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/common/baseComponent.vue */ "./src/components/common/baseComponent.vue");
/* harmony import */ var _components_icons_IcTempt_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/icons/IcTempt.vue */ "./src/components/icons/IcTempt.vue");
/* harmony import */ var _components_icons_IcTemptMax_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/icons/IcTemptMax.vue */ "./src/components/icons/IcTemptMax.vue");
/* harmony import */ var _components_icons_IcTemptMin_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/icons/IcTemptMin.vue */ "./src/components/icons/IcTemptMin.vue");
/* harmony import */ var _utils_converValue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/converValue */ "./src/utils/converValue.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _components_icons_IcTitleDaytime_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/icons/IcTitleDaytime.vue */ "./src/components/icons/IcTitleDaytime.vue");








/* harmony default export */ __webpack_exports__["default"] = ({
  name: "uv-current-page",
  data() {
    return {
      srcNighttime: __webpack_require__(/*! ../../../assets/images/svg_v2/ic_nighttime.svg */ "./src/assets/images/svg_v2/ic_nighttime.svg"),
      srcDaytime: (0,vue__WEBPACK_IMPORTED_MODULE_5__.markRaw)(_components_icons_IcTitleDaytime_vue__WEBPACK_IMPORTED_MODULE_6__["default"]),
      height: "120"
    };
  },
  components: {
    IcTemptMax: _components_icons_IcTemptMax_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    BaseComponent: _components_common_baseComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    IcTempt: _components_icons_IcTempt_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    IcTemptMin: _components_icons_IcTemptMin_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  computed: {
    ...(0,vuex__WEBPACK_IMPORTED_MODULE_7__.mapGetters)("weatherModule", ["currentlyGetters", "dailyOneGetters"]),
    ...(0,vuex__WEBPACK_IMPORTED_MODULE_7__.mapGetters)("commonModule", ["breadcumsObjectGetters"]),
    languageParam() {
      const languageRouter = this.$route.params;
      return Object.keys(languageRouter).length !== 0 ? languageRouter.language !== "en" && languageRouter.language !== "vi" ? "en" : languageRouter.language : this.$i18n.locale !== "en" && this.$i18n.locale !== "vi" ? "en" : this.$i18n.locale;
    },
    breadcumsObject() {
      const retrievedArray = JSON.parse(localStorage.getItem("objectBread"));
      const resultData = retrievedArray ? retrievedArray : this.breadcumsObjectGetters;
      return resultData;
    },
    currentlyData() {
      return this.currentlyGetters;
    },
    dailyOneData() {
      return this.dailyOneGetters;
    },
    objectBreadcums() {
      const retrievedArray = JSON.parse(localStorage.getItem("objectBread"));
      return retrievedArray ? retrievedArray : this.breadcumsObjectGetters;
    }
  },
  methods: {
    convertFahrenheitToCelsiusNot(value) {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      if (unitSetting.activeTemperature_save === "f") {
        return (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_4__.convertCtoF)(value) + (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_4__.codeToFind)(unitSetting.activeTemperature_save);
      } else {
        return (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_4__.convertFtoC)(value) + (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_4__.codeToFind)(unitSetting.activeTemperature_save);
      }
    },
    convertFahrenheitToCelsiusNotUnit(value) {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      if (unitSetting.activeTemperature_save === "f") {
        return (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_4__.convertCtoF)(value);
      } else {
        return (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_4__.convertFtoC)(value);
      }
    },
    convertInforIndex(value) {
      return (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_4__.getInformationUVIndex)(value);
    },
    convertUvSummary(value) {
      return (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_4__.getUvSummaryName)(value);
    },
    convertToLowCase(value) {
      const normalizedStr = value.normalize("NFD") // Chuyển chuỗi sang dạng tổ hợp Unicode
      .replace(/[\u0300-\u036f]/g, ""); // Loại bỏ các dấu

      return normalizedStr;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/uv-page/note-uv/note-uv-page.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/uv-page/note-uv/note-uv-page.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "note-uv-page"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/search/uv-page/index.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/search/uv-page/index.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_common_air_quality_air_quality_page_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/common/air-quality/air-quality-page.vue */ "./src/components/common/air-quality/air-quality-page.vue");
/* harmony import */ var _components_common_moon_phase_moon_page_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/common/moon-phase/moon-page.vue */ "./src/components/common/moon-phase/moon-page.vue");
/* harmony import */ var _components_common_sun_sun_page_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/common/sun/sun-page.vue */ "./src/components/common/sun/sun-page.vue");
/* harmony import */ var _components_hourly_day_item_card_page_vue_item_time_24h_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/hourly-day/item-card-page.vue/item-time-24h.vue */ "./src/components/hourly-day/item-card-page.vue/item-time-24h.vue");
/* harmony import */ var _components_today_country_list_country_page_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/today/country/list-country-page.vue */ "./src/components/today/country/list-country-page.vue");
/* harmony import */ var _components_today_nearby_location_list_nearby_location_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/today/nearby-location/list-nearby-location.vue */ "./src/components/today/nearby-location/list-nearby-location.vue");
/* harmony import */ var _components_uv_page_chart_chart_uv_index_page_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/uv-page/chart/chart-uv-index-page.vue */ "./src/components/uv-page/chart/chart-uv-index-page.vue");
/* harmony import */ var _components_uv_page_form_uv_index_uv_current_page_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/uv-page/form-uv-index/uv-current-page.vue */ "./src/components/uv-page/form-uv-index/uv-current-page.vue");
/* harmony import */ var _components_uv_page_note_uv_note_uv_page_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/uv-page/note-uv/note-uv-page.vue */ "./src/components/uv-page/note-uv/note-uv-page.vue");
/* harmony import */ var _control_ui_SkeletonLoader_SkeletonLoader_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/control-ui/SkeletonLoader/SkeletonLoader.vue */ "./src/control-ui/SkeletonLoader/SkeletonLoader.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");











/* harmony default export */ __webpack_exports__["default"] = ({
  name: "uv-weather",
  components: {
    SkeletonLoader: _control_ui_SkeletonLoader_SkeletonLoader_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    NoteUvPage: _components_uv_page_note_uv_note_uv_page_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    MoonPage: _components_common_moon_phase_moon_page_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    AirQualityPage: _components_common_air_quality_air_quality_page_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    SunPage: _components_common_sun_sun_page_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    // ItemTime24h,
    ListNearbyLocation: _components_today_nearby_location_list_nearby_location_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    ListCountryPage: _components_today_country_list_country_page_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    UvCurrentPage: _components_uv_page_form_uv_index_uv_current_page_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    ChartUvIndexPage: _components_uv_page_chart_chart_uv_index_page_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data() {
    return {
      srcDaytime: __webpack_require__(/*! ../../../assets/images/svg_v2/ic_sun_daytime.svg */ "./src/assets/images/svg_v2/ic_sun_daytime.svg")
    };
  },
  computed: {
    ...(0,vuex__WEBPACK_IMPORTED_MODULE_10__.mapGetters)("weatherModule", ["currentlyGetters"]),
    currentlyData() {
      return this.currentlyGetters;
    },
    indexState() {
      debugger;
      return this.$store.state.commonModule.indexComponent;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/uv-page/chart/chart-uv-index-page.vue?vue&type=template&id=30025b7c&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/uv-page/chart/chart-uv-index-page.vue?vue&type=template&id=30025b7c&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-30025b7c"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1 = {
  class: "w-full h-full"
};
const _hoisted_2 = {
  class: "flex items-center text-left gap-2"
};
const _hoisted_3 = {
  key: 0,
  class: "txt_medium_14"
};
const _hoisted_4 = {
  key: 0
};
const _hoisted_5 = {
  key: 1
};
const _hoisted_6 = {
  key: 2
};
const _hoisted_7 = {
  key: 1,
  class: "txt_medium_14"
};
const _hoisted_8 = {
  key: 0
};
const _hoisted_9 = {
  key: 1
};
const _hoisted_10 = {
  key: 2
};
const _hoisted_11 = {
  class: "w-full h-full"
};
const _hoisted_12 = {
  class: "w-full h-full relative"
};
const _hoisted_13 = {
  class: "flex w-full h-full min-w-[1550px]"
};
const _hoisted_14 = {
  class: "absolute bottom-0 z-10 w-full"
};
const _hoisted_15 = {
  key: 0,
  class: "chart-container-tab-uv h-full w-[1550px]"
};
const _hoisted_16 = {
  id: "chart_hourlys",
  height: "200",
  ref: "canvas"
};
const _hoisted_17 = {
  class: "flex w-[1550px] items-center mt-2"
};
const _hoisted_18 = {
  class: "txt_regular_12"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ChartDays = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ChartDays");
  const _component_vue_horizontal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vue-horizontal");
  const _component_BaseComponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BaseComponent");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_BaseComponent, {
    isShowPad: true
  }, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($data.srcDaytime), {
      class: "icon-svg"
    })), $options.breadcumsObject.country_key === 'vn' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [$options.breadcumsObject?.city && !$options.breadcumsObject?.district ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t(`{city}_UV_index_by_hour`, {
      city: $options.convertToLowCase($options.breadcumsObject.city)
    })), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.breadcumsObject?.city && $options.breadcumsObject?.district && !$options.breadcumsObject?.ward ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t(`{city}_UV_index_by_hour`, {
      city: $options.convertToLowCase($options.breadcumsObject.district)
    })), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.breadcumsObject?.city && $options.breadcumsObject?.district && $options.breadcumsObject?.ward ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t(`{city}_UV_index_by_hour`, {
      city: $options.convertToLowCase($options.breadcumsObject.ward)
    })), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [$options.breadcumsObject?.state && !$options.breadcumsObject?.county ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t(`{city}_UV_index_by_hour`, {
      city: _ctx.$t(`${$options.breadcumsObject?.state}`)
    })), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.breadcumsObject?.state && $options.breadcumsObject?.county && !$options.breadcumsObject?.cities ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t(`{city}_UV_index_by_hour`, {
      city: _ctx.$t(`${$options.breadcumsObject?.county}`)
    })), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.breadcumsObject?.state && $options.breadcumsObject?.county && $options.breadcumsObject?.cities ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t(`{city}_UV_index_by_hour`, {
      city: _ctx.$t(`${$options.breadcumsObject?.cities}`)
    })), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]))])]),
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [$options.listUvIndexData.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_vue_horizontal, {
      key: $options.listUvIndexData.length,
      displacement: 1,
      class: "w-full h-full relative horizontal"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ChartDays, {
        class: "h-[40px]"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.listUvIndexData, (day, index) => {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          key: index,
          class: "flex-1 bor-r-chart opacity-30"
        });
      }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [$options.listHourly && $options.listHourly.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("canvas", _hoisted_16, null, 512 /* NEED_PATCH */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.listUvIndexData, (item, index) => {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          class: "weather-item w-full",
          key: index
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <span class=\"txt\">{{ renderHourly(item).timestampValue }}</span> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item), 1 /* TEXT */)]);
      }), 128 /* KEYED_FRAGMENT */))])])])]),
      _: 1 /* STABLE */
    })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]),
    _: 1 /* STABLE */
  })]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/uv-page/form-uv-index/uv-current-page.vue?vue&type=template&id=cc3e814a":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/uv-page/form-uv-index/uv-current-page.vue?vue&type=template&id=cc3e814a ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  class: "w-full h-full"
};
const _hoisted_2 = {
  class: "flex items-center text-left gap-2"
};
const _hoisted_3 = {
  key: 0,
  class: "txt_medium_14"
};
const _hoisted_4 = {
  key: 1,
  class: "txt_medium_14"
};
const _hoisted_5 = {
  class: "w-full text-left"
};
const _hoisted_6 = {
  class: "w-full text-left pt-4 pb-2"
};
const _hoisted_7 = {
  class: "txt_poppins_30"
};
const _hoisted_8 = {
  class: "w-full text-left flex flex-col gap-2 mt-2"
};
const _hoisted_9 = {
  class: "txt_regular_12"
};
const _hoisted_10 = {
  key: 0,
  class: "txt_regular_17 text-left"
};
const _hoisted_11 = {
  class: "w-full flex items-center justify-between mt-6 mb-4"
};
const _hoisted_12 = {
  class: "flex items-center text-left gap-2 txt_regular_des"
};
const _hoisted_13 = {
  class: "txt_regular_14"
};
const _hoisted_14 = {
  class: "flex items-center"
};
const _hoisted_15 = {
  class: "flex items-center"
};
const _hoisted_16 = {
  class: "txt_medium_17"
};
const _hoisted_17 = {
  class: "flex items-center"
};
const _hoisted_18 = {
  class: "txt_medium_17"
};
const _hoisted_19 = {
  class: "w-full text-left txt_regular_14"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IcTempt = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IcTempt");
  const _component_IcTemptMin = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IcTemptMin");
  const _component_IcTemptMax = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IcTemptMax");
  const _component_BaseComponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BaseComponent");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_BaseComponent, {
    isShowPad: true
  }, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($data.srcDaytime), {
      class: "icon-svg"
    })), $options.breadcumsObject?.country_key === 'vn' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t(`Current_UV_In_{city}`, {
      city: $options.convertToLowCase($options.breadcumsObject.city)
    })), 1 /* TEXT */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t(`Current_UV_In_{city}`, {
      city: `
                  ${$options.breadcumsObject?.state}`
    })), 1 /* TEXT */))])]),
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(Math.round($options.currentlyData?.uvIndex)) + " - " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertUvSummary($options.currentlyData?.uvIndex)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("World_Health_Organization_UVI")), 1 /* TEXT */), $options.objectBreadcums?.country_key?.toLowerCase() === 'vn' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertToLowCase($options.objectBreadcums.city)) + ", " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.objectBreadcums?.country), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IcTempt, {
      class: "icon-svg"
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Temperature")), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IcTemptMin, {
      class: "icon-svg"
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertFahrenheitToCelsiusNot($options.dailyOneData?.temperatureMin)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IcTemptMax, {
      class: "icon-svg"
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertFahrenheitToCelsiusNot($options.dailyOneData?.temperatureMax)), 1 /* TEXT */)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertInforIndex($options.dailyOneData?.uvIndex)), 1 /* TEXT */)])])]),
    _: 1 /* STABLE */
  })]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/uv-page/note-uv/note-uv-page.vue?vue&type=template&id=eafd4fd2":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/uv-page/note-uv/note-uv-page.vue?vue&type=template&id=eafd4fd2 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  class: "w-full md:flex md:flex-col grid grid-cols-2 gap-8 pad-t-b-10 pad-r-l-10"
};
const _hoisted_2 = {
  class: "flex items-center text-left gap-2"
};
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "bg-Low rounded-full w-[10px] h-[10px]"
}, null, -1 /* HOISTED */);
const _hoisted_4 = {
  class: "text-left"
};
const _hoisted_5 = {
  class: "txt_medium_14"
};
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "txt_regular_12"
}, "0-2", -1 /* HOISTED */);
const _hoisted_7 = {
  class: "flex items-center text-left gap-2"
};
const _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "bg-Moderate rounded-full w-[10px] h-[10px]"
}, null, -1 /* HOISTED */);
const _hoisted_9 = {
  class: "text-left"
};
const _hoisted_10 = {
  class: "txt_medium_14"
};
const _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "txt_regular_12"
}, "3-5", -1 /* HOISTED */);
const _hoisted_12 = {
  class: "flex items-center text-left gap-2"
};
const _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "bg-High rounded-full w-[10px] h-[10px]"
}, null, -1 /* HOISTED */);
const _hoisted_14 = {
  class: "text-left"
};
const _hoisted_15 = {
  class: "txt_medium_14"
};
const _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "txt_regular_12"
}, "6-7", -1 /* HOISTED */);
const _hoisted_17 = {
  class: "flex items-center text-left gap-2"
};
const _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "bg-Very-Heigh rounded-full w-[10px] h-[10px]"
}, null, -1 /* HOISTED */);
const _hoisted_19 = {
  class: "text-left"
};
const _hoisted_20 = {
  class: "txt_medium_14"
};
const _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "txt_regular_12"
}, "8-10", -1 /* HOISTED */);
const _hoisted_22 = {
  class: "flex items-center text-left gap-2"
};
const _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "bg-Extreme rounded-full w-[10px] h-[10px]"
}, null, -1 /* HOISTED */);
const _hoisted_24 = {
  class: "text-left"
};
const _hoisted_25 = {
  class: "txt_medium_14"
};
const _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "txt_regular_12"
}, "> 10", -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Low")), 1 /* TEXT */), _hoisted_6])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Moderate")), 1 /* TEXT */), _hoisted_11])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("High")), 1 /* TEXT */), _hoisted_16])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Very_High")), 1 /* TEXT */), _hoisted_21])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Extreme")), 1 /* TEXT */), _hoisted_26])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/search/uv-page/index.vue?vue&type=template&id=73083371":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/search/uv-page/index.vue?vue&type=template&id=73083371 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _assets_images_png_ic_app_download_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/images/png/ic_app_download.png */ "./src/assets/images/png/ic_app_download.png");


const _hoisted_1 = {
  class: "w-full h-full pl-2 pr-2"
};
const _hoisted_2 = {
  class: "container mt-5"
};
const _hoisted_3 = {
  class: "header-h h-full w-full md:flex gap-20-px"
};
const _hoisted_4 = {
  class: "left-hourly lg:w-[85%] h-full w-full"
};
const _hoisted_5 = {
  class: "md:flex w-full h-full gap-20-px"
};
const _hoisted_6 = {
  class: "md:w-[65%] md:h-[280px] h-[300px] w-full"
};
const _hoisted_7 = {
  class: "md:w-[35%] w-full md:mt-0 mt-12"
};
const _hoisted_8 = {
  class: "right-hourly md:w-[15%] w-full md:block hidden"
};
const _hoisted_9 = {
  class: "w-full h-full"
};
const _hoisted_10 = {
  class: "container"
};
const _hoisted_11 = {
  class: "lg:flex w-full h-full gap-20-px"
};
const _hoisted_12 = {
  class: "left-hourly h-full lg:w-[68%] w-full"
};
const _hoisted_13 = {
  class: "w-full"
};
const _hoisted_14 = {
  key: 0,
  class: "left-hourly w-full"
};
const _hoisted_15 = {
  key: 1,
  class: "w-full h-[380px] mt-5"
};
const _hoisted_16 = {
  class: "w-full"
};
const _hoisted_17 = {
  key: 0,
  class: "right-country w-full"
};
const _hoisted_18 = {
  key: 1,
  class: "w-full h-[380px] mt-4"
};
const _hoisted_19 = {
  class: "right-hourly lg:w-[30%] w-full md:block hidden"
};
const _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex justify-center items-center h-auto mt-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_png_ic_app_download_png__WEBPACK_IMPORTED_MODULE_1__,
  alt: "",
  class: "img-logo"
})], -1 /* HOISTED */);
const _hoisted_21 = {
  key: 0,
  class: "w-full"
};
const _hoisted_22 = {
  key: 1,
  class: "w-full h-[230px] mt-4"
};
const _hoisted_23 = {
  key: 2,
  class: "w-full"
};
const _hoisted_24 = {
  key: 3,
  class: "w-full h-[230px] mt-4"
};
const _hoisted_25 = {
  key: 4,
  class: "w-full"
};
const _hoisted_26 = {
  key: 5,
  class: "w-full h-[230px] mt-4"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ChartUvIndexPage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ChartUvIndexPage");
  const _component_SkeletonLoader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SkeletonLoader");
  const _component_UvCurrentPage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("UvCurrentPage");
  const _component_NoteUvPage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NoteUvPage");
  const _component_ListNearbyLocation = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ListNearbyLocation");
  const _component_ListCountryPage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ListCountryPage");
  const _component_SunPage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SunPage");
  const _component_MoonPage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MoonPage");
  const _component_AirQualityPage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AirQualityPage");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [$options.currentlyData && Object.keys($options.currentlyData).length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ChartUvIndexPage, {
    key: 0
  })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_SkeletonLoader, {
    key: 1,
    class: "w-full h-[320px]"
  }))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [$options.currentlyData && Object.keys($options.currentlyData).length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_UvCurrentPage, {
    key: 0
  })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_SkeletonLoader, {
    key: 1,
    class: "w-full h-[320px]"
  }))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [$options.currentlyData && Object.keys($options.currentlyData).length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_NoteUvPage, {
    key: 0
  })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_SkeletonLoader, {
    key: 1,
    class: "w-full h-[320px]"
  }))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Left "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"w-full\">\r\n            <ItemTime24h\r\n              :key=\"indexState + Math.random()\"\r\n              v-if=\"currentlyData && Object.keys(currentlyData).length > 0\"\r\n            ></ItemTime24h>\r\n            <div v-else class=\"w-full h-[860px] mt-4\">\r\n              <SkeletonLoader class=\"w-full h-full\"> </SkeletonLoader>\r\n            </div>\r\n          </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [$options.currentlyData && Object.keys($options.currentlyData).length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_14, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ListNearbyLocation, {
    key: $options.indexState + Math.random()
  }))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SkeletonLoader, {
    class: "w-full h-full"
  })]))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [$options.currentlyData && Object.keys($options.currentlyData).length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ListCountryPage)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SkeletonLoader, {
    class: "w-full h-full"
  })]))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Right "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), $options.currentlyData && Object.keys($options.currentlyData).length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_21, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_SunPage, {
    key: $options.indexState + Math.random()
  }))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SkeletonLoader, {
    class: "w-full h-full"
  })])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), $options.currentlyData && Object.keys($options.currentlyData).length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_23, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_MoonPage, {
    key: $options.indexState + Math.random()
  }))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SkeletonLoader, {
    class: "w-full h-full"
  })])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), $options.currentlyData && Object.keys($options.currentlyData).length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_25, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_AirQualityPage, {
    key: $options.indexState + Math.random()
  }))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SkeletonLoader, {
    class: "w-full h-full"
  })]))])])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/uv-page/chart/chart-uv-index-page.vue?vue&type=style&index=0&id=30025b7c&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/uv-page/chart/chart-uv-index-page.vue?vue&type=style&index=0&id=30025b7c&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.horizontal[data-v-30025b7c] .v-hl-btn-prev {\r\n  display: none !important;\r\n  left: 10px !important;\n}\n.horizontal[data-v-30025b7c] .v-hl-btn-next {\r\n  display: none !important;\r\n\r\n  right: 10px !important;\n}\n.horizontal[data-v-30025b7c]:hover .v-hl-btn-prev {\r\n  display: flex !important;\r\n  left: 10px !important;\r\n  opacity: 0.5;\n}\n.horizontal[data-v-30025b7c]:hover .v-hl-btn-next {\r\n  display: flex !important;\r\n  right: 10px !important;\r\n  opacity: 0.5;\n}\r\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/uv-page/note-uv/note-uv-page.vue?vue&type=style&index=0&id=eafd4fd2&lang=scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/uv-page/note-uv/note-uv-page.vue?vue&type=style&index=0&id=eafd4fd2&lang=scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".bg-Low {\n  background-color: #389311;\n}\n.bg-Moderate {\n  background-color: #f3e52b;\n}\n.bg-High {\n  background-color: #ee621d;\n}\n.bg-Very-Heigh {\n  background-color: #cf2526;\n}\n.bg-Extreme {\n  background-color: #9064cb;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/uv-page/chart/chart-uv-index-page.vue":
/*!**************************************************************!*\
  !*** ./src/components/uv-page/chart/chart-uv-index-page.vue ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chart_uv_index_page_vue_vue_type_template_id_30025b7c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart-uv-index-page.vue?vue&type=template&id=30025b7c&scoped=true */ "./src/components/uv-page/chart/chart-uv-index-page.vue?vue&type=template&id=30025b7c&scoped=true");
/* harmony import */ var _chart_uv_index_page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart-uv-index-page.vue?vue&type=script&lang=js */ "./src/components/uv-page/chart/chart-uv-index-page.vue?vue&type=script&lang=js");
/* harmony import */ var _chart_uv_index_page_vue_vue_type_style_index_0_id_30025b7c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart-uv-index-page.vue?vue&type=style&index=0&id=30025b7c&scoped=true&lang=css */ "./src/components/uv-page/chart/chart-uv-index-page.vue?vue&type=style&index=0&id=30025b7c&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_chart_uv_index_page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_chart_uv_index_page_vue_vue_type_template_id_30025b7c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-30025b7c"],['__file',"src/components/uv-page/chart/chart-uv-index-page.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/uv-page/form-uv-index/uv-current-page.vue":
/*!******************************************************************!*\
  !*** ./src/components/uv-page/form-uv-index/uv-current-page.vue ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uv_current_page_vue_vue_type_template_id_cc3e814a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uv-current-page.vue?vue&type=template&id=cc3e814a */ "./src/components/uv-page/form-uv-index/uv-current-page.vue?vue&type=template&id=cc3e814a");
/* harmony import */ var _uv_current_page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uv-current-page.vue?vue&type=script&lang=js */ "./src/components/uv-page/form-uv-index/uv-current-page.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_uv_current_page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_uv_current_page_vue_vue_type_template_id_cc3e814a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/components/uv-page/form-uv-index/uv-current-page.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/uv-page/note-uv/note-uv-page.vue":
/*!*********************************************************!*\
  !*** ./src/components/uv-page/note-uv/note-uv-page.vue ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _note_uv_page_vue_vue_type_template_id_eafd4fd2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note-uv-page.vue?vue&type=template&id=eafd4fd2 */ "./src/components/uv-page/note-uv/note-uv-page.vue?vue&type=template&id=eafd4fd2");
/* harmony import */ var _note_uv_page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note-uv-page.vue?vue&type=script&lang=js */ "./src/components/uv-page/note-uv/note-uv-page.vue?vue&type=script&lang=js");
/* harmony import */ var _note_uv_page_vue_vue_type_style_index_0_id_eafd4fd2_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./note-uv-page.vue?vue&type=style&index=0&id=eafd4fd2&lang=scss */ "./src/components/uv-page/note-uv/note-uv-page.vue?vue&type=style&index=0&id=eafd4fd2&lang=scss");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_note_uv_page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_note_uv_page_vue_vue_type_template_id_eafd4fd2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/components/uv-page/note-uv/note-uv-page.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/search/uv-page/index.vue":
/*!********************************************!*\
  !*** ./src/views/search/uv-page/index.vue ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_73083371__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=73083371 */ "./src/views/search/uv-page/index.vue?vue&type=template&id=73083371");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/views/search/uv-page/index.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_73083371__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/search/uv-page/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/uv-page/chart/chart-uv-index-page.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./src/components/uv-page/chart/chart-uv-index-page.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_chart_uv_index_page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_chart_uv_index_page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./chart-uv-index-page.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/uv-page/chart/chart-uv-index-page.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/uv-page/form-uv-index/uv-current-page.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./src/components/uv-page/form-uv-index/uv-current-page.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_uv_current_page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_uv_current_page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./uv-current-page.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/uv-page/form-uv-index/uv-current-page.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/uv-page/note-uv/note-uv-page.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./src/components/uv-page/note-uv/note-uv-page.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_note_uv_page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_note_uv_page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./note-uv-page.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/uv-page/note-uv/note-uv-page.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/views/search/uv-page/index.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./src/views/search/uv-page/index.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/search/uv-page/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/uv-page/chart/chart-uv-index-page.vue?vue&type=template&id=30025b7c&scoped=true":
/*!********************************************************************************************************!*\
  !*** ./src/components/uv-page/chart/chart-uv-index-page.vue?vue&type=template&id=30025b7c&scoped=true ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_chart_uv_index_page_vue_vue_type_template_id_30025b7c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_chart_uv_index_page_vue_vue_type_template_id_30025b7c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./chart-uv-index-page.vue?vue&type=template&id=30025b7c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/uv-page/chart/chart-uv-index-page.vue?vue&type=template&id=30025b7c&scoped=true");


/***/ }),

/***/ "./src/components/uv-page/form-uv-index/uv-current-page.vue?vue&type=template&id=cc3e814a":
/*!************************************************************************************************!*\
  !*** ./src/components/uv-page/form-uv-index/uv-current-page.vue?vue&type=template&id=cc3e814a ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_uv_current_page_vue_vue_type_template_id_cc3e814a__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_uv_current_page_vue_vue_type_template_id_cc3e814a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./uv-current-page.vue?vue&type=template&id=cc3e814a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/uv-page/form-uv-index/uv-current-page.vue?vue&type=template&id=cc3e814a");


/***/ }),

/***/ "./src/components/uv-page/note-uv/note-uv-page.vue?vue&type=template&id=eafd4fd2":
/*!***************************************************************************************!*\
  !*** ./src/components/uv-page/note-uv/note-uv-page.vue?vue&type=template&id=eafd4fd2 ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_note_uv_page_vue_vue_type_template_id_eafd4fd2__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_note_uv_page_vue_vue_type_template_id_eafd4fd2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./note-uv-page.vue?vue&type=template&id=eafd4fd2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/uv-page/note-uv/note-uv-page.vue?vue&type=template&id=eafd4fd2");


/***/ }),

/***/ "./src/views/search/uv-page/index.vue?vue&type=template&id=73083371":
/*!**************************************************************************!*\
  !*** ./src/views/search/uv-page/index.vue?vue&type=template&id=73083371 ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_73083371__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_73083371__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=73083371 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/search/uv-page/index.vue?vue&type=template&id=73083371");


/***/ }),

/***/ "./src/components/uv-page/chart/chart-uv-index-page.vue?vue&type=style&index=0&id=30025b7c&scoped=true&lang=css":
/*!**********************************************************************************************************************!*\
  !*** ./src/components/uv-page/chart/chart-uv-index-page.vue?vue&type=style&index=0&id=30025b7c&scoped=true&lang=css ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_chart_uv_index_page_vue_vue_type_style_index_0_id_30025b7c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./chart-uv-index-page.vue?vue&type=style&index=0&id=30025b7c&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/uv-page/chart/chart-uv-index-page.vue?vue&type=style&index=0&id=30025b7c&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_chart_uv_index_page_vue_vue_type_style_index_0_id_30025b7c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_chart_uv_index_page_vue_vue_type_style_index_0_id_30025b7c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_chart_uv_index_page_vue_vue_type_style_index_0_id_30025b7c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_chart_uv_index_page_vue_vue_type_style_index_0_id_30025b7c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/components/uv-page/note-uv/note-uv-page.vue?vue&type=style&index=0&id=eafd4fd2&lang=scss":
/*!******************************************************************************************************!*\
  !*** ./src/components/uv-page/note-uv/note-uv-page.vue?vue&type=style&index=0&id=eafd4fd2&lang=scss ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_note_uv_page_vue_vue_type_style_index_0_id_eafd4fd2_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./note-uv-page.vue?vue&type=style&index=0&id=eafd4fd2&lang=scss */ "./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/uv-page/note-uv/note-uv-page.vue?vue&type=style&index=0&id=eafd4fd2&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_note_uv_page_vue_vue_type_style_index_0_id_eafd4fd2_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_note_uv_page_vue_vue_type_style_index_0_id_eafd4fd2_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_note_uv_page_vue_vue_type_style_index_0_id_eafd4fd2_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_note_uv_page_vue_vue_type_style_index_0_id_eafd4fd2_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/uv-page/chart/chart-uv-index-page.vue?vue&type=style&index=0&id=30025b7c&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/uv-page/chart/chart-uv-index-page.vue?vue&type=style&index=0&id=30025b7c&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./chart-uv-index-page.vue?vue&type=style&index=0&id=30025b7c&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/uv-page/chart/chart-uv-index-page.vue?vue&type=style&index=0&id=30025b7c&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("631b1de5", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/uv-page/note-uv/note-uv-page.vue?vue&type=style&index=0&id=eafd4fd2&lang=scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/uv-page/note-uv/note-uv-page.vue?vue&type=style&index=0&id=eafd4fd2&lang=scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./note-uv-page.vue?vue&type=style&index=0&id=eafd4fd2&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/uv-page/note-uv/note-uv-page.vue?vue&type=style&index=0&id=eafd4fd2&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("63142970", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/images/svg_v2/ic_nighttime.svg":
/*!***************************************************!*\
  !*** ./src/assets/images/svg_v2/ic_nighttime.svg ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/ic_nighttime.8a9f3485.svg";

/***/ }),

/***/ "./src/assets/images/svg_v2/ic_sun_daytime.svg":
/*!*****************************************************!*\
  !*** ./src/assets/images/svg_v2/ic_sun_daytime.svg ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/ic_sun_daytime.26d57dcc.svg";

/***/ })

}]);
//# sourceMappingURL=src_views_search_uv-page_index_vue.js.map