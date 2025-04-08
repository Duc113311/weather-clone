(self["webpackChunkweather_web"] = self["webpackChunkweather_web"] || []).push([["src_views_search_tide-page_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/icons/IcAirStation.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/icons/IcAirStation.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Ic-Air-Station"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/30-day/month-day-chart-tide.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/30-day/month-day-chart-tide.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_common_baseComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/common/baseComponent.vue */ "./src/components/common/baseComponent.vue");
/* harmony import */ var _chart_tide_bar_chart_tide_bar_month_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chart-tide-bar/chart-tide-bar-month.vue */ "./src/components/tide/chart-tide-bar/chart-tide-bar-month.vue");
/* harmony import */ var vue_horizontal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-horizontal */ "./node_modules/vue-horizontal/dist/vue-horizontal.es.js");
/* harmony import */ var _chart_tide_bar_label_time_month_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chart-tide-bar/label-time-month.vue */ "./src/components/tide/chart-tide-bar/label-time-month.vue");




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "month-day-chart-tide",
  components: {
    BaseComponent: _components_common_baseComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ChartTideBarMonth: _chart_tide_bar_chart_tide_bar_month_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    VueHorizontal: vue_horizontal__WEBPACK_IMPORTED_MODULE_2__["default"],
    LabelTimeMonth: _chart_tide_bar_label_time_month_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data() {
    return {
      heightAuto: "auto"
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/chart-tide-bar/chart-tide-bar-current.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/chart-tide-bar/chart-tide-bar-current.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/middleware */ "./src/utils/middleware.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.js");
/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chartjs-plugin-annotation */ "./node_modules/chartjs-plugin-annotation/dist/chartjs-plugin-annotation.esm.js");
/* harmony import */ var chartjs_adapter_date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartjs-adapter-date-fns */ "./node_modules/chartjs-adapter-date-fns/dist/chartjs-adapter-date-fns.esm.js");
/* harmony import */ var _utils_converValue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/converValue */ "./src/utils/converValue.js");




 // hoặc dayjs nếu mày dùng dayjs

chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.LineController, chart_js__WEBPACK_IMPORTED_MODULE_2__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.TimeScale,
// ✅ đăng ký TimeScale ở đây
chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend, chart_js__WEBPACK_IMPORTED_MODULE_2__.Filler, chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "chart-tide-bar-current",
  data() {
    return {
      xTarget: "2025-04-03T09:00:00+00:00",
      // Thời gian muốn nhúng điểm
      yTarget: null // Giá trị y tương ứng với xTarget
    };
  },
  computed: {
    ...(0,vuex__WEBPACK_IMPORTED_MODULE_5__.mapGetters)("tideModule", ["extremesDataGetters"]),
    extremesDataRender() {
      const data = this.extremesDataGetters.slice(0, 2);
      const unitSetting = this.$store.state.commonModule.objectSettingSave;

      // 🔹 Fake điểm đầu: giảm 20%
      const objectCloneStart = {
        ...data[0]
      };
      objectCloneStart.height = objectCloneStart.height * 0.1;
      const fakeStartValue = unitSetting.activeTide_save === "m" ? (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_4__.convertFeetToMeter)(objectCloneStart.height) : (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_4__.convertMeterToFeet)(objectCloneStart.height);

      // 🔹 Fake điểm cuối: tăng 80%
      const objectCloneEnd = {
        ...data[data.length - 1]
      };
      objectCloneEnd.height = objectCloneEnd.height / 4.8;
      const fakeEndValue = unitSetting.activeTide_save === "m" ? (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_4__.convertFeetToMeter)(objectCloneEnd.height) : (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_4__.convertMeterToFeet)(objectCloneEnd.height);

      // 🔹 Dữ liệu thật
      const listHeight = data.map(el => {
        const value = el.height;
        return unitSetting.activeTide_save === "m" ? (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_4__.convertFeetToMeter)(value) : (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_4__.convertMeterToFeet)(value);
      });

      // 🔹 Trả kết quả: [fake đầu, dữ liệu thật..., fake cuối]
      return [fakeStartValue, ...listHeight, fakeEndValue];
    },
    extremesDataRenderTime() {
      const data = this.extremesDataGetters.slice(0, 2);
      const objectClone = {
        ...data[0]
      };
      const objectCloneEnd = {
        ...data[data.length - 1]
      };
      return [objectClone, ...data, objectCloneEnd] || [];
    },
    extremesDataRenderTimeRender() {
      const data = this.extremesDataGetters.slice(0, 2);
      if (!data.length) return [];
      const formatToISOStringNoMs = dateStr => {
        const date = new Date(dateStr);
        const iso = date.toISOString();
        return iso.split(".")[0] + "+00:00";
      };

      // Clone đầu/cuối
      const start = new Date(data[0].datetime);
      start.setHours(start.getHours() + 3);
      const end = new Date(data[data.length - 1].datetime);
      end.setHours(end.getHours() - 3);
      const listDataTime = data.map(el => formatToISOStringNoMs(el.datetime));
      return [formatToISOStringNoMs(start.toISOString()), ...listDataTime, formatToISOStringNoMs(end.toISOString())];
    }
  },
  watch: {
    extremesDataRender(newData) {
      if (newData.length !== 0) {
        this.$nextTick(() => {
          this.createChartHourly24h();
        });
      }
    }
  },
  mounted() {
    if (this.extremesDataRender && this.extremesDataRender.length) {
      this.$nextTick(() => {
        this.createChartHourly24h();
      });
    }
  },
  methods: {
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
      const maxDataValue = Math.max(...this.extremesDataRender);
      const minDataValue = Math.min(...this.extremesDataRender);
      const chartHeight = ctx.canvas.height;

      // Tạo gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, chartHeight);
      gradient.addColorStop(0, "rgba(20, 130, 231, 1)"); // Màu đậm trên cùng
      gradient.addColorStop(0.6, "rgba(20, 130, 231, 0.2)"); // Màu gần như trong suốt hơn
      gradient.addColorStop(0.8, "rgba(20, 130, 231, 0.02)"); // Màu rất nhạt trước khi hết
      gradient.addColorStop(1, "rgba(20, 130, 231, 0)"); // Màu hoàn toàn trong suốt ở đáy

      // Time
      const labelList = this.extremesDataRenderTime.map(item => {
        const date = item.timestamp;
        return date;
      });
      console.log("extremesDataRender,", this.extremesDataRender);
      console.log("labelList", this.extremesDataRenderTimeRender);
      console.log("Length match?", this.extremesDataRenderTimeRender.length === this.extremesDataRender.length);

      // Chart
      this.chartInstance = new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(ctx, {
        type: "line",
        data: {
          labels: this.extremesDataRenderTimeRender,
          datasets: [{
            label: "",
            type: "line",
            // Kiểu dataset là line
            borderColor: "#1482E7",
            pointBackgroundColor: "#ffffff",
            pointRadius: ctx => ctx.dataIndex === 0 || ctx.dataIndex === 3 ? 0 : 4,
            // ẩn chấm đầu
            pointBorderWidth: 1,
            // Độ dày viền của điểm
            borderWidth: 2,
            // Độ dày đường
            pointBorderColor: "#ffffff",
            backgroundColor: gradient,
            fill: "start",
            data: this.extremesDataRender,
            pointHoverRadius: 3,
            tension: 0.4,
            datalabels: {
              align: "top",
              anchor: "end",
              color: "#ffffff",
              font: {
                size: 10
              },
              formatter: (value, context) => {
                console.log("value", context.dataIndex);
                return this.convertDateTime(this.extremesDataRenderTimeRender[context.dataIndex]); // VD: "05:20"
              }
            },
            display: true
          }, {
            label: "",
            type: "line",
            data: this.extremesDataRender,
            borderColor: "transparent",
            backgroundColor: "transparent",
            pointRadius: 0,
            datalabels: {
              align: "bottom",
              anchor: "start",
              color: "#cccccc",
              font: {
                size: 12
              },
              formatter: (value, context) => {
                const trendArrow = value >= 0 ? "↑" : "↓";
                return `${value} ${this.unitTide()} ${trendArrow}`;
              }
            }
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: {
              top: 10,
              // Chỉ định padding phía trên
              bottom: 0 // Chỉ định padding phía dưới
            }
          },
          scales: {
            x: {
              display: false,
              ticks: {
                stepSize: 20,
                // Điều chỉnh số lượng điểm hiển thị trên trục x
                autoSkip: false,
                // không bỏ qua nhãn
                maxRotation: 40
              },
              offset: false // ✅ Thêm khoảng cách đầu/cuố
            },
            y: {
              display: false,
              beginAtZero: true,
              max: maxDataValue + 0.5,
              min: minDataValue - 1
            }
          },
          plugins: {
            legend: {
              display: false
            },
            annotation: {
              annotation: {
                annotations: {
                  movingDot: {
                    type: "point",
                    xValue: null,
                    yValue: null,
                    radius: 6,
                    backgroundColor: "red",
                    borderColor: "#fff",
                    borderWidth: 2
                  }
                }
              }
            },
            tooltip: {
              enabled: true,
              mode: "nearest",
              intersect: false,
              // Cho phép hover ở mọi nơi trên đường
              theme: "dark",
              displayColors: false,
              // Ẩn ô màu mặc định
              titleAlign: "center",
              bodyAlign: "center",
              footerAlign: "center",
              filter: tooltipItem => {
                try {
                  const index = tooltipItem?.dataIndex;
                  const dataLength = tooltipItem?.chart?.data?.labels?.length;
                  if (index === undefined || !dataLength) return false;

                  // ✅ ẩn tooltip ở điểm đầu (index === 0) và điểm cuối (index === labels.length - 1)
                  return index !== 0 && index !== 3;
                } catch {
                  return false;
                }
              },
              callbacks: {
                title: tooltipItems => {
                  const item = tooltipItems?.[0];
                  if (!item || item.dataIndex === undefined) return "";
                  const index = item.dataIndex;
                  const dataLength = item.chart.data.labels.length; // ✅ dùng đúng biến
                  if (index === 0 || index === 3) return "";
                  const rawTime = this.extremesDataRenderTimeRender[index]; // Mảng thời gian của mày
                  const valueTime = this.convertDateTime(rawTime);
                  // Tùy format: có thể là "2025-04-02T05:20:00"
                  const date = new Date(rawTime);
                  const day = String(date.getDate()).padStart(2, "0");
                  const month = String(date.getMonth() + 1).padStart(2, "0");
                  return `${valueTime} - ${day}/${month}`;
                },
                label: context => {
                  const index = context.dataIndex;
                  const datasetIndex = context.datasetIndex;
                  const value = context.raw;
                  const dataLength = context.chart.data.labels.length;
                  if (index === 0 || index === 3) return ``;

                  // Nếu là dataset đầu tiên (dữ liệu chính)
                  if (datasetIndex === 0) {
                    const trendArrow = value >= 0 ? "↑" : "↓";
                    return `${value} ${this.unitTide()} ${trendArrow}`;
                  }

                  // Nếu là dataset thứ 2 (ví dụ nhãn dưới điểm)
                  if (datasetIndex === 1) {
                    return ``;
                  }

                  // Default
                  return `Giá trị: ${value}`;
                }
              }
            },
            datalabels: {
              anchor: "center",
              align: "top",
              color: "#ccc",
              // Màu chữ
              display: ctx => ctx.dataIndex === 0 || ctx.dataIndex === 3 ? 0 : 4,
              // ẩn chấm đầu
              font: {
                size: 12
              },
              formatter: (value, context) => {
                const labelTime = context.chart.data.labels[context.dataIndex];
                const trendArrow = value >= 0 ? "↑" : "↓"; // Mũi tên
                return [`${labelTime}`, `${value} ${trendArrow}`]; // array = hiển thị 2 dòng
              }
            }
          },
          elements: {
            line: {
              tension: 0.5
            }
          }
        }
      });
    },
    convertDateTime(value) {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      if (unitSetting.activeTime_save === "12h") {
        return (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_4__.formatTo12HourTimeTide)(value);
      } else {
        return (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_4__.formatTo24HourTimeTide)(value);
      }
    },
    unitTide() {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      return unitSetting.activeTide_save;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/chart-tide-bar/chart-tide-bar-month.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/chart-tide-bar/chart-tide-bar-month.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.js");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartjs-plugin-datalabels */ "./node_modules/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.esm.js");
/* harmony import */ var _utils_converValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/converValue */ "./src/utils/converValue.js");


chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_0__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_0__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_0__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_0__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_0__.Filler, chart_js__WEBPACK_IMPORTED_MODULE_0__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_0__.Legend, chart_js__WEBPACK_IMPORTED_MODULE_0__.LineController, chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1__["default"]);


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "chart-tide-bar-month",
  data() {
    return {};
  },
  computed: {
    ...(0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapGetters)("tideModule", ["extremesDataFullGetters", "extremesDataGetters", "tideDataGetters"]),
    extremesDataHeightRender() {
      const data = this.extremesDataFullGetters;
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      const objectClone = {
        ...data[0]
      };
      objectClone.height = objectClone.height * 0.8; // giảm 20%
      const fakeValue = unitSetting.activeTide_save === "m" ? (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_2__.convertFeetToMeter)(objectClone.height) : (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_2__.convertMeterToFeet)(objectClone.height);
      const listHeight = data.map(el => {
        const data = el.height;
        if (unitSetting.activeTide_save === "m") {
          return (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_2__.convertFeetToMeter)(data);
        } else {
          return (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_2__.convertMeterToFeet)(data);
        }
      });
      return [fakeValue, ...listHeight];
    },
    extremesDataRenderTime() {
      const data = this.extremesDataFullGetters;
      const objectClone = {
        ...data[0]
      };
      return [objectClone, ...data] || [];
    },
    extremesDataRenderTimeRender() {
      const data = this.extremesDataFullGetters;
      const objectClone = {
        ...data[0]
      };
      const timeClone = objectClone.datetime;
      const listDataTime = data.map(el => {
        return el.datetime;
      });
      return [timeClone, ...listDataTime] || [];
    }
  },
  watch: {
    extremesDataHeightRender(newData) {
      if (newData.length !== 0) {
        this.$nextTick(() => {
          this.createChartHourly24h();
        });
      }
    }
  },
  mounted() {
    if (this.extremesDataHeightRender && this.extremesDataHeightRender.length) {
      this.$nextTick(() => {
        this.createChartHourly24h();
      });
    }
  },
  methods: {
    unitTide() {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      return unitSetting.activeTide_save;
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
      const maxDataValue = Math.max(...this.extremesDataHeightRender);
      const minDataValue = Math.min(...this.extremesDataHeightRender);
      const chartHeight = ctx.canvas.height;

      // Tạo gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, chartHeight + 200);
      gradient.addColorStop(0, "rgba(20, 130, 231, 1)"); // Đậm đầu
      gradient.addColorStop(0.8, "rgba(255, 255, 255, 0.3)"); // Trắng mờ cuối
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)"); // Trắng mờ cuối
      // Time

      console.log("this.extremesDataRenderTime", this.extremesDataRenderTime);
      const labelList = this.extremesDataRenderTime.map(item => {
        const date = item.datetime;
        return (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_2__.formatDateToDayMonth)(date);
      });
      const canvasWidth = labelList.length * 60;
      this.$refs.canvas.width = canvasWidth;

      // Chart
      this.chartInstance = new chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart(ctx, {
        type: "line",
        data: {
          labels: labelList,
          datasets: [{
            label: "",
            type: "line",
            // Kiểu dataset là line
            borderColor: "#1482E7",
            pointBackgroundColor: "#ffffff",
            pointBorderWidth: 1,
            // Độ dày viền của điểm
            pointRadius: ctx => ctx.dataIndex === 0 ? 0 : 4,
            // ẩn chấm đầu

            borderWidth: 2,
            // Độ dày đường
            pointBorderColor: "#ffffff",
            // pointRadius: 4, // Bán kính điểm
            backgroundColor: gradient,
            fill: "start",
            data: this.extremesDataHeightRender,
            pointHoverRadius: 3,
            tension: 0.4,
            datalabels: {
              align: "top",
              anchor: "end",
              color: "#ffffff",
              font: {
                size: 10
              },
              formatter: (value, context) => {
                return this.convertDateTime(this.extremesDataRenderTimeRender[context.dataIndex]); // VD: "05:20"
              }
            },
            display: true
          }, {
            label: "",
            data: this.extremesDataHeightRender,
            borderColor: "transparent",
            backgroundColor: "transparent",
            pointRadius: 0,
            datalabels: {
              align: "bottom",
              anchor: "start",
              color: "#cccccc",
              font: {
                size: 12
              },
              formatter: (value, context) => {
                const trendArrow = value >= 0 ? "↑" : "↓";
                return `${value} ${this.unitTide()} ${trendArrow}`;
              }
            }
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
              right: 30 // Chỉ định padding phía bên phải
            }
          },
          scales: {
            x: {
              display: true,
              ticks: {
                stepSize: 20,
                // Điều chỉnh số lượng điểm hiển thị trên trục x
                autoSkip: false,
                // không bỏ qua nhãn
                maxRotation: 40,
                color: "#ffffff",
                font: {
                  size: 12
                },
                display: false,
                callback: function (value, index, ticks) {
                  const label = this.getLabelForValue(value);
                  const prevTick = ticks[index - 1];
                  if (!prevTick) return label; // luôn hiển thị nhãn đầu tiên

                  const prevLabel = this.getLabelForValue(prevTick.value);
                  if (label === prevLabel) {
                    return ""; // Nếu giống nhãn trước → không hiển thị
                  }
                  return label; // hiển thị nếu khác
                }
              },
              offset: false,
              // ✅ Thêm khoảng cách đầu/cuối

              grid: {
                display: true,
                color: "rgba(0,0,0,0.1)",
                drawOnChartArea: true,
                // ✅ cần cái này
                drawTicks: true,
                borderColor: "rgba(255,255,255,0.1)"
              }
            },
            y: {
              type: "linear",
              position: "left",
              display: true,
              beginAtZero: true,
              max: maxDataValue + 2,
              min: minDataValue.toFixed(1) - 1,
              ticks: {
                callback: val => `${val} m`,
                color: "#ccc"
              },
              grid: {
                display: false,
                // ✅ Hiện vạch kẻ trục Y
                color: "rgba(0,0,0,0.1)"
              }
            }
          },
          plugins: {
            legend: {
              display: false,
              position: "bottom"
            },
            tooltip: {
              enabled: true,
              intersect: false,
              // Cho phép hover ở mọi nơi trên đường
              mode: "index",
              // Hiển thị tooltip của tất cả dataset tại vị trí trục x
              theme: "dark",
              displayColors: false,
              // Ẩn ô màu mặc định
              titleAlign: "center",
              bodyAlign: "center",
              footerAlign: "center",
              callbacks: {
                title: tooltipItems => {
                  const index = tooltipItems[0].dataIndex;
                  const rawTime = this.extremesDataRenderTimeRender[index]; // Mảng thời gian của mày
                  const valueTime = this.convertDateTime(rawTime);
                  // Tùy format: có thể là "2025-04-02T05:20:00"
                  const date = new Date(rawTime);
                  const day = String(date.getDate()).padStart(2, "0");
                  const month = String(date.getMonth() + 1).padStart(2, "0");
                  return `${valueTime} - ${day}/${month}`;
                },
                label: context => {
                  const index = context.dataIndex;
                  const datasetIndex = context.datasetIndex;
                  const value = context.raw;

                  // Nếu là dataset đầu tiên (dữ liệu chính)
                  if (datasetIndex === 0) {
                    const trendArrow = value >= 0 ? "↑" : "↓";
                    return `${value} ${this.unitTide()} ${trendArrow}`;
                  }

                  // Nếu là dataset thứ 2 (ví dụ nhãn dưới điểm)
                  if (datasetIndex === 1) {
                    return ``;
                  }

                  // Default
                  return `Giá trị: ${value}`;
                }
              }
            },
            datalabels: {
              anchor: "center",
              align: "top",
              color: "#ccc",
              // Màu chữ
              display: ctx => ctx.dataIndex !== 0,
              // ✅ Đúng chỗ rồi
              font: {
                size: 12
              },
              formatter: (value, context) => {
                const labelTime = context.chart.data.labels[context.dataIndex];
                const trendArrow = value >= 0 ? "↑" : "↓"; // Mũi tên
                return [`${labelTime}`, `${value} ${trendArrow}`]; // array = hiển thị 2 dòng
              }
            }
          },
          elements: {
            line: {
              tension: 0.5
            }
          },
          hover: {
            mode: "index",
            intersect: false
          }
        },
        plugins: [{}]
      });
    },
    convertDateTime(value) {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      if (unitSetting.activeTime_save === "12h") {
        return (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_2__.formatTo12HourTimeTide)(value);
      } else {
        return (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_2__.formatTo24HourTimeTide)(value);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/chart-tide-bar/label-time-month.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/chart-tide-bar/label-time-month.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_converValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/converValue */ "./src/utils/converValue.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "label-time-month",
  computed: {
    ...(0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)("tideModule", ["extremesDataFullGetters", "extremesDataGetters", "tideDataGetters"]),
    extremesDataRenderTimeRender() {
      const data = this.extremesDataFullGetters;
      const objectClone = {
        ...data[0]
      };
      const timeClone = objectClone.datetime;
      const listDataTime = data.map(el => {
        return el.datetime;
      });
      return [timeClone, ...listDataTime] || [];
    },
    extremesDataRenderTime() {
      const data = this.extremesDataFullGetters;
      const objectClone = {
        ...data[0]
      };
      console.log("data-extreme", data);
      return [objectClone, ...data] || [];
    }
  },
  methods: {
    convertDateTime(value) {
      // const unitSetting = this.$store.state.commonModule.objectSettingSave;
      return (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_0__.formatDateToDayMonth)(value);
    },
    shouldShowTime(index) {
      const current = this.convertDateTime(this.extremesDataRenderTimeRender[index]);
      const prev = this.convertDateTime(this.extremesDataRenderTimeRender[index - 1]);
      if (index === 0) return true;
      return current !== prev;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/datum/datum-tide.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/datum/datum-tide.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_common_baseComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/common/baseComponent.vue */ "./src/components/common/baseComponent.vue");
/* harmony import */ var _utils_converValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/converValue */ "./src/utils/converValue.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "datum-tide",
  components: {
    BaseComponent: _components_common_baseComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data() {
    return {
      heightAuto: "auto",
      drawer: false
    };
  },
  computed: {
    ...(0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)("tideModule", ["datumsDataGetters"]),
    datumsDataRender() {
      console.log("datumsDataRender", this.datumsDataGetters);
      return this.datumsDataGetters;
    },
    unitTide() {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      return unitSetting.activeTide_save;
    }
  },
  methods: {
    convertDatum(value) {
      debugger;
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      if (unitSetting.activeTide_save === "m") {
        return (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_1__.convertFeetToMeter)(value);
      } else {
        return (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_1__.convertMeterToFeet)(value);
      }
    },
    onClickShowDatum() {
      debugger;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/station/station-tide.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/station/station-tide.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_common_baseComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/common/baseComponent.vue */ "./src/components/common/baseComponent.vue");
/* harmony import */ var _components_icons_IcAirStation_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/icons/IcAirStation.vue */ "./src/components/icons/IcAirStation.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "station-tide",
  components: {
    BaseComponent: _components_common_baseComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    IcAirStation: _components_icons_IcAirStation_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data() {
    return {
      heightAuto: "auto"
    };
  },
  computed: {
    ...(0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)("tideModule", ["listStationNearByGetters", "currentStationNearGetters"]),
    listStationParam() {
      return this.listStationNearByGetters;
    },
    currentStationNearParam() {
      return this.currentStationNearGetters;
    },
    unitSetting() {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      return unitSetting;
    }
  },
  methods: {
    ...(0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapMutations)("tideModule", ["setCurrentStationNear"]),
    ...(0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)("tideModule", ["getTidesData"]),
    convertDistanceTide(value) {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      const isMiles = unitSetting.activeDistance_save;
      if (isMiles === "mi") {
        return (value / 1609.34).toFixed(1); // Đổi sang mile
      } else {
        return value.toFixed(1); // Đổi sang km
      }
    },
    async onClickChooseStationNear(value) {
      this.setCurrentStationNear(value);
      const currentTimestamp = Math.floor(Date.now() / 1000);
      const params = {
        keyPrivate: "AMOBI_SOFT",
        duration: 44640,
        interval: 1440,
        timestamp: currentTimestamp,
        station_id: value.id,
        datum: "MLLW"
      };
      await this.getTidesData(params);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/today/today-chart-tide.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/today/today-chart-tide.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_common_baseComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/common/baseComponent.vue */ "./src/components/common/baseComponent.vue");
/* harmony import */ var _utils_converValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/converValue */ "./src/utils/converValue.js");
/* harmony import */ var _utils_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/middleware */ "./src/utils/middleware.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _chart_tide_bar_chart_tide_bar_current_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chart-tide-bar/chart-tide-bar-current.vue */ "./src/components/tide/chart-tide-bar/chart-tide-bar-current.vue");
/* harmony import */ var _views_index_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/views/index.vue */ "./src/views/index.vue");








/* harmony default export */ __webpack_exports__["default"] = ({
  name: "today-chart-tide",
  components: {
    BaseComponent: _components_common_baseComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ChartTideBarCurrent: _chart_tide_bar_chart_tide_bar_current_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data() {
    return {
      heightAuto: "auto",
      activeIndex: 0,
      resultData: [],
      currentTideUnitIndex: 0,
      // 0: m, 1: ft
      tideInterval: null // Lưu giữ ID của setInterval
    };
  },
  computed: {
    ...(0,vuex__WEBPACK_IMPORTED_MODULE_6__.mapGetters)("tideModule", ["tideDataGetters", "extremesDataGetters", "tideDataGetters"]),
    extremesDataRender() {
      return this.extremesDataGetters;
    },
    tideDataRender() {
      return this.tideDataGetters;
    },
    languageParam() {
      const languageRouter = this.$route.params;
      return Object.keys(languageRouter).length !== 0 ? languageRouter.language !== "en" && languageRouter.language !== "vi" ? "en" : languageRouter.language : this.$i18n.locale !== "en" && this.$i18n.locale !== "vi" ? "en" : this.$i18n.locale;
    }
  },
  methods: {
    convertTimeTideLive(data) {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      if (unitSetting.activeTime_save === "12h") {
        return (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_2__.formatTo12HourTimeTide)(data, true);
      } else {
        return (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_2__.formatTo24HourTimeTide)(data, false);
      }
    },
    convertTimeRender() {
      const now = new Date();
      const data = this.extremesDataRender;
      if (!Array.isArray(data) || data.length < 3) {
        return null;
      }
      const currentDayNowFirst = data[0];
      const currentDayNowSecond = data[1];
      const currentDayNowThird = data[2];
      const first = new Date(currentDayNowFirst.datetime); // sáng
      const second = new Date(currentDayNowSecond.datetime); // chiều
      const third = new Date(currentDayNowThird.datetime); // sáng hôm sau

      if (now >= first && now <= second) {
        return currentDayNowSecond; // nằm giữa sáng và chiều
      } else if (now < first) {
        return currentDayNowFirst; // trước sáng → chọn sáng
      } else {
        return currentDayNowThird; // sau chiều → chọn sáng hôm sau
      }
    },
    formatDateLocalizedConvert(data) {
      return (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_2__.formatDateLocalized)(data, this.languageParam);
    },
    formatDatetimeToVNConvert(data) {
      // return formatDatetimeToVN(data);

      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      if (unitSetting.activeTime_save === "12h") {
        return (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_2__.formatDateString)(data, true);
      } else {
        return (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_2__.formatDateString)(data, false);
      }
    },
    formatUnitTide(data) {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      if (unitSetting.activeTide_save === "m") {
        return (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_2__.convertFeetToMeter)(data);
      } else {
        return (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_2__.convertMeterToFeet)(data);
      }
    },
    formatSetIntervalTideHight(data) {
      const listUnitTide = ["m", "ft"];
      for (let i = 0; i < listUnitTide.length; i++) {
        const unitValue = listUnitTide[i];
        if (unitValue === "m") {
          const dataHeight = (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_2__.convertFeetToMeter)(data) + " " + unitValue;
          this.resultData.push(dataHeight);
        } else if (unitValue === "ft") {
          // Chuyển đổi từ feet sang mét
          const dataHeight = (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_2__.convertMeterToFeet)(data) + " " + unitValue;
          this.resultData.push(dataHeight);
        }
      }
      return this.resultData;
    },
    unitTide() {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      return unitSetting.activeTide_save;
    },
    formatDateToDDMMConvert(data) {
      return (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_2__.formatDateToDDMM)(data);
    },
    formatTideHeightSingle(value) {
      const unit = this.currentTideUnitIndex === 0 ? "m" : "ft"; // Kiểm tra đơn vị
      if (unit === "m") {
        return (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_2__.convertFeetToMeter)(value) + " m"; // Chuyển từ ft sang m
      } else {
        return (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_2__.convertMeterToFeet)(value) + " ft"; // Chuyển từ m sang ft
      }
    },
    convertExtreme(data) {
      if (data === "LOW TIDE") {
        return "Low Tide";
      } else {
        return "High Tide";
      }
    }
  },
  mounted() {
    this.tideInterval = setInterval(() => {
      // Đổi đơn vị giữa "m" và "ft" sau mỗi 10 giây
      this.currentTideUnitIndex = (this.currentTideUnitIndex + 1) % 2;
    }, 1000); // 10000ms = 10s
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/search/tide-page/index.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/search/tide-page/index.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_common_moon_phase_moon_page_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/common/moon-phase/moon-page.vue */ "./src/components/common/moon-phase/moon-page.vue");
/* harmony import */ var _components_common_sun_sun_page_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/common/sun/sun-page.vue */ "./src/components/common/sun/sun-page.vue");
/* harmony import */ var _components_tide_30_day_month_day_chart_tide_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/tide/30-day/month-day-chart-tide.vue */ "./src/components/tide/30-day/month-day-chart-tide.vue");
/* harmony import */ var _components_tide_datum_datum_tide_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/tide/datum/datum-tide.vue */ "./src/components/tide/datum/datum-tide.vue");
/* harmony import */ var _components_tide_station_station_tide_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/tide/station/station-tide.vue */ "./src/components/tide/station/station-tide.vue");
/* harmony import */ var _components_tide_today_today_chart_tide_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/tide/today/today-chart-tide.vue */ "./src/components/tide/today/today-chart-tide.vue");
/* harmony import */ var _control_ui_SkeletonLoader_SkeletonLoader_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/control-ui/SkeletonLoader/SkeletonLoader.vue */ "./src/control-ui/SkeletonLoader/SkeletonLoader.vue");
/* harmony import */ var _utils_converValue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/converValue */ "./src/utils/converValue.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");









/* harmony default export */ __webpack_exports__["default"] = ({
  name: "tide-page",
  components: {
    TodayChartTide: _components_tide_today_today_chart_tide_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    SunPage: _components_common_sun_sun_page_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    SkeletonLoader: _control_ui_SkeletonLoader_SkeletonLoader_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    MoonPage: _components_common_moon_phase_moon_page_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    MonthDayChartTide: _components_tide_30_day_month_day_chart_tide_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    StationTide: _components_tide_station_station_tide_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    DatumTide: _components_tide_datum_datum_tide_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data() {
    return {
      listTideStation: []
    };
  },
  computed: {
    ...(0,vuex__WEBPACK_IMPORTED_MODULE_8__.mapGetters)("weatherModule", ["currentlyGetters", "breadcumsObjectGetters"]),
    currentlyData() {
      return this.currentlyGetters;
    },
    objectBread() {
      const retrievedArray = JSON.parse(localStorage.getItem("objectBread"));
      const resultData = retrievedArray ? retrievedArray : this.breadcumsObjectGetters;
      return resultData;
    }
  },
  methods: {
    ...(0,vuex__WEBPACK_IMPORTED_MODULE_8__.mapMutations)("tideModule", ["setListTideStation", "setTideStationNearBy", "setCurrentStationNear"]),
    ...(0,vuex__WEBPACK_IMPORTED_MODULE_8__.mapActions)("tideModule", ["getTidesData"]),
    async loadListTideStation(currentLat, currentLon) {
      try {
        const response = await fetch("/json/tide/list_tide_station.json");
        if (!response.ok) throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        const data = await response.json();

        // Tính khoảng cách và thêm vào từng station
        const stationsWithDistance = data.map(station => {
          const distance = (0,_utils_converValue__WEBPACK_IMPORTED_MODULE_7__.getDistanceFromLatLonInKm)(currentLat, currentLon, station.latitude, station.longitude);
          return {
            ...station,
            distance
          };
        });

        // Sắp xếp theo khoảng cách tăng dần và lấy 6 phần tử đầu tiên
        const nearestStations = stationsWithDistance.sort((a, b) => a.distance - b.distance).slice(0, 6);
        this.listTideStation = nearestStations;
        this.setTideStationNearBy(this.listTideStation);
        const stationId = this.listTideStation[0].id;
        this.setCurrentStationNear(this.listTideStation[0]);
        const currentTimestamp = Math.floor(Date.now() / 1000);
        const params = {
          keyPrivate: "AMOBI_SOFT",
          duration: 44640,
          interval: 1440,
          timestamp: currentTimestamp,
          station_id: stationId,
          datum: "MLLW"
        };
        await this.getTidesData(params);
      } catch (error) {
        console.error("Error loading file:", error.message);
      }
    }
  },
  async mounted() {
    await this.loadListTideStation(this.objectBread?.latitude, this.objectBread?.longitude);
    // const params = {
    //   keyPrivate: "AMOBI_SOFT",
    //   duration: 44640,
    //   interval: 1440,
    //   timestamp: 1743502205,
    //   station_id: "GESLA3:c1028eb231",
    //   datum: "MLLW",
    // };

    // await this.getTidesData(params);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/icons/IcAirStation.vue?vue&type=template&id=6c55e7c9":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/icons/IcAirStation.vue?vue&type=template&id=6c55e7c9 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M5.46601 2.53015C5.53969 2.46149 5.5988 2.37869 5.63979 2.28669C5.68078 2.19469 5.70282 2.09538 5.7046 1.99468C5.70638 1.89397 5.68785 1.79394 5.65013 1.70056C5.61241 1.60717 5.55626 1.52233 5.48505 1.45112C5.41383 1.3799 5.32899 1.32375 5.23561 1.28603C5.14222 1.24831 5.04219 1.22979 4.94148 1.23156C4.84078 1.23334 4.74147 1.25538 4.64947 1.29637C4.55747 1.33736 4.47467 1.39647 4.40601 1.47015C3.40444 2.46745 2.60999 3.65297 2.06835 4.95849C1.52672 6.264 1.2486 7.66374 1.25001 9.07715C1.24833 10.5072 1.5328 11.9231 2.08666 13.2416C2.64051 14.56 3.45257 15.7543 4.47501 16.7542C4.61768 16.8901 4.80811 16.9644 5.00514 16.961C5.20217 16.9577 5.38996 16.8769 5.52791 16.7362C5.66587 16.5955 5.7429 16.4061 5.74235 16.2091C5.74181 16.012 5.66374 15.8231 5.52501 15.6832C4.64514 14.8231 3.94633 13.7956 3.46974 12.6612C2.99315 11.5268 2.74843 10.3086 2.75001 9.07815C2.74843 7.86166 2.9876 6.65688 3.45374 5.53323C3.91988 4.40959 4.60377 3.3883 5.46601 2.53015ZM19.677 1.55315C19.6084 1.48119 19.5263 1.42358 19.4352 1.38366C19.3442 1.34374 19.2462 1.32231 19.1468 1.32061C19.0474 1.31892 18.9487 1.337 18.8564 1.37379C18.764 1.41059 18.6799 1.46537 18.609 1.53495C18.538 1.60453 18.4815 1.68753 18.4429 1.77911C18.4043 1.8707 18.3843 1.96904 18.384 2.06843C18.3837 2.16783 18.4032 2.26628 18.4413 2.35808C18.4794 2.44988 18.5354 2.53318 18.606 2.60315C20.3035 4.33047 21.2533 6.65634 21.25 9.07815C21.2516 10.2916 21.0136 11.4933 20.5498 12.6146C20.0859 13.7358 19.4053 14.7545 18.547 15.6122C18.4774 15.6819 18.4222 15.7646 18.3846 15.8557C18.347 15.9468 18.3277 16.0443 18.3278 16.1429C18.3279 16.2414 18.3474 16.3389 18.3851 16.4299C18.4229 16.5209 18.4783 16.6036 18.548 16.6732C18.6177 16.7428 18.7005 16.7979 18.7916 16.8356C18.8826 16.8732 18.9802 16.8925 19.0787 16.8924C19.1772 16.8923 19.2748 16.8728 19.3658 16.835C19.4568 16.7972 19.5394 16.7419 19.609 16.6722C20.6063 15.6752 21.3971 14.4912 21.9361 13.1881C22.4751 11.885 22.7517 10.4883 22.75 9.07815C22.75 6.14815 21.577 3.49115 19.677 1.55315Z",
  fill: "var(--color-icon-df)"
}, null, -1 /* HOISTED */);
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M8.274 5.62617C8.34706 5.55921 8.40612 5.47844 8.44778 5.38852C8.48944 5.29861 8.51287 5.20133 8.51671 5.1023C8.52055 5.00328 8.50472 4.90448 8.47015 4.8116C8.43558 4.71873 8.38295 4.63363 8.31529 4.56122C8.24764 4.48881 8.16631 4.43052 8.07599 4.38973C7.98568 4.34894 7.88818 4.32645 7.78912 4.32356C7.69007 4.32067 7.59142 4.33745 7.49888 4.37291C7.40635 4.40837 7.32176 4.46182 7.25 4.53017C6.021 5.67917 5.25 7.28017 5.25 9.06017C5.25 10.8602 6.04 12.4782 7.292 13.6302C7.43853 13.7649 7.63258 13.8359 7.83147 13.8276C8.03035 13.8192 8.21777 13.7322 8.3525 13.5857C8.48723 13.4391 8.55823 13.2451 8.54989 13.0462C8.54154 12.8473 8.45453 12.6599 8.308 12.5252C7.338 11.6352 6.75 10.4072 6.75 9.05917C6.75 7.72717 7.325 6.51417 8.274 5.62617ZM16.803 4.58017C16.6593 4.44265 16.4668 4.36787 16.2679 4.37228C16.069 4.37669 15.88 4.45992 15.7425 4.60367C15.605 4.74741 15.5302 4.9399 15.5346 5.13878C15.539 5.33766 15.6223 5.52665 15.766 5.66417C16.691 6.54917 17.25 7.74717 17.25 9.06017C17.25 10.3892 16.678 11.6002 15.733 12.4882C15.5919 12.6253 15.5103 12.8123 15.5058 13.009C15.5013 13.2057 15.5743 13.3963 15.709 13.5397C15.8437 13.6831 16.0294 13.7678 16.226 13.7755C16.4226 13.7833 16.6144 13.7135 16.76 13.5812C17.983 12.4332 18.75 10.8352 18.75 9.06117C18.75 7.30717 18 5.72417 16.803 4.58017Z",
  fill: "var(--color-icon-df)"
}, null, -1 /* HOISTED */);
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M10.8333 10.6239C10.4897 10.3768 10.2333 10.0271 10.101 9.62513C9.96876 9.22313 9.96741 8.78952 10.0972 8.3867C10.227 7.98388 10.4812 7.63261 10.8232 7.38343C11.1653 7.13425 11.5776 7 12.0008 7C12.424 7 12.8363 7.13425 13.1784 7.38343C13.5205 7.63261 13.7747 7.98388 13.9045 8.3867C14.0343 8.78952 14.0329 9.22313 13.9006 9.62513C13.7683 10.0271 13.5119 10.3768 13.1683 10.6239L16.7153 21.7729C16.7678 21.9381 16.7615 22.1164 16.6974 22.2775C16.6333 22.4385 16.5153 22.5724 16.3636 22.6563C16.2119 22.7402 16.0359 22.769 15.8653 22.7378C15.6948 22.7065 15.5404 22.6171 15.4283 22.4849L12.0003 18.4339L8.57333 22.4839C8.46146 22.6165 8.30704 22.7063 8.1364 22.7378C7.96577 22.7694 7.78947 22.7408 7.63754 22.6569C7.48562 22.5731 7.36748 22.4391 7.30326 22.2779C7.23903 22.1167 7.2327 21.9382 7.28533 21.7729L10.8333 10.6239ZM12.9833 17.2729L14.1473 18.6479L13.5103 16.6479L12.9833 17.2729ZM12.9753 14.9649L12.9283 15.0149L12.0003 16.1129L11.0723 15.0169L11.0263 14.9659L12.0003 11.9029L12.9753 14.9649ZM10.4903 16.6489L11.0173 17.2729L9.85333 18.6479L10.4903 16.6489Z",
  fill: "var(--color-icon-df)"
}, null, -1 /* HOISTED */);
const _hoisted_5 = [_hoisted_2, _hoisted_3, _hoisted_4];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1, [..._hoisted_5]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/30-day/month-day-chart-tide.vue?vue&type=template&id=18b8ba86":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/30-day/month-day-chart-tide.vue?vue&type=template&id=18b8ba86 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
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
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex items-center text-left gap-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M19 3H18V1H16V3H8V1H6V3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3ZM19 19H5V9H19V19ZM19 7H5V5H19M7 11H12V16H7",
  fill: "var(--color-icon-df)"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "txt_medium_14"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 30 Days ")])], -1 /* HOISTED */);
const _hoisted_3 = {
  class: "w-full h-[400px] pl-4 pr-4"
};
const _hoisted_4 = {
  class: "relative w-full h-full"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_LabelTimeMonth = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("LabelTimeMonth");
  const _component_ChartTideBarMonth = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ChartTideBarMonth");
  const _component_vue_horizontal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vue-horizontal");
  const _component_BaseComponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BaseComponent");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_BaseComponent, {
    height: $data.heightAuto,
    isShowPad: false
  }, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_2]),
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vue_horizontal, {
      displacement: 1,
      class: "w-full h-full relative horizontal pl-5 pr-5"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_LabelTimeMonth, {
        class: "absolute bottom-2"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ChartTideBarMonth, {
        class: "h-[370px] absolute top-0"
      })])]),
      _: 1 /* STABLE */
    })])]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["height"])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/chart-tide-bar/chart-tide-bar-current.vue?vue&type=template&id=71e4f89c":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/chart-tide-bar/chart-tide-bar-current.vue?vue&type=template&id=71e4f89c ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  key: 0,
  class: "chart-container-tempt w-full pl-6"
};
const _hoisted_2 = {
  class: "chart-wrapper-tempt w-full h-full"
};
const _hoisted_3 = {
  id: "chart_hourly",
  ref: "canvas"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $options.extremesDataRender ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("canvas", _hoisted_3, null, 512 /* NEED_PATCH */)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/chart-tide-bar/chart-tide-bar-month.vue?vue&type=template&id=540fa179":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/chart-tide-bar/chart-tide-bar-month.vue?vue&type=template&id=540fa179 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  key: 0,
  class: "chart-container-tempt p-chart-avg w-[1550px] pt-4 pb-4"
};
const _hoisted_2 = {
  class: "chart-wrapper-tempt w-full h-full"
};
const _hoisted_3 = {
  id: "chart_hourly",
  ref: "canvas"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $options.extremesDataHeightRender ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("canvas", _hoisted_3, null, 512 /* NEED_PATCH */)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/chart-tide-bar/label-time-month.vue?vue&type=template&id=ba594298":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/chart-tide-bar/label-time-month.vue?vue&type=template&id=ba594298 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  class: "chart-container-tempt flex p-chart-avg w-[1550px] pt-4 pb-4 pl-10"
};
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "w-[200px]"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Hello")], -1 /* HOISTED */);
const _hoisted_3 = {
  class: "txt_regular_12"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tooltip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-tooltip");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.extremesDataRenderTimeRender, (item, index) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      class: "w-[100px] flex items-center gap-2",
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_tooltip, {
      effect: "dark",
      placement: "bottom-end"
    }, {
      content: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_2]),
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertDateTime(item)), 1 /* TEXT */)]),
      _: 2 /* DYNAMIC */
    }, 1024 /* DYNAMIC_SLOTS */)]);
  }), 128 /* KEYED_FRAGMENT */))]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/datum/datum-tide.vue?vue&type=template&id=a55cf266":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/datum/datum-tide.vue?vue&type=template&id=a55cf266 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
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
  class: "flex items-center justify-between text-left gap-2"
};
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex items-center gap-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M12 8.49902C17.5228 8.49902 22 7.15588 22 5.49902C22 3.84217 17.5228 2.49902 12 2.49902C6.47715 2.49902 2 3.84217 2 5.49902C2 7.15588 6.47715 8.49902 12 8.49902Z",
  stroke: "var(--color-icon-df)",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M5.385 7.74902C3.31 8.29902 2 9.10302 2 9.99902C2 11.656 6.477 12.999 12 12.999C17.523 12.999 22 11.656 22 9.99902C22 9.10302 20.6905 8.29902 18.615 7.74902C16.852 8.21552 14.536 8.49902 12 8.49902C9.464 8.49902 7.1485 8.21552 5.385 7.74902Z",
  stroke: "var(--color-icon-df)",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M5.385 12.249C3.31 12.799 2 13.603 2 14.499C2 16.156 6.477 17.499 12 17.499C17.523 17.499 22 16.156 22 14.499C22 13.603 20.6905 12.799 18.615 12.249",
  stroke: "var(--color-icon-df)",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M5.385 16.749C3.31 17.299 2 18.103 2 18.999C2 20.656 6.477 21.999 12 21.999C17.523 21.999 22 20.656 22 18.999C22 18.103 20.6905 17.299 18.615 16.749",
  stroke: "var(--color-icon-df)",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "txt_medium_14"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Tide datum data ")])], -1 /* HOISTED */);
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M10 14.999C10.2833 14.999 10.521 14.903 10.713 14.711C10.905 14.519 11.0007 14.2817 11 13.999V9.99902C11 9.71569 10.904 9.47836 10.712 9.28702C10.52 9.09569 10.2827 8.99969 10 8.99902C9.71733 8.99836 9.48 9.09436 9.288 9.28702C9.096 9.47969 9 9.71702 9 9.99902V13.999C9 14.2824 9.096 14.52 9.288 14.712C9.48 14.904 9.71733 14.9997 10 14.999ZM10 6.99902C10.2833 6.99902 10.521 6.90302 10.713 6.71102C10.905 6.51902 11.0007 6.28169 11 5.99902C10.9993 5.71636 10.9033 5.47902 10.712 5.28702C10.5207 5.09502 10.2833 4.99902 10 4.99902C9.71667 4.99902 9.47933 5.09502 9.288 5.28702C9.09667 5.47902 9.00067 5.71636 9 5.99902C8.99933 6.28169 9.09533 6.51936 9.288 6.71202C9.48067 6.90469 9.718 7.00036 10 6.99902ZM10 19.999C8.61667 19.999 7.31667 19.7364 6.1 19.211C4.88334 18.6857 3.825 17.9734 2.925 17.074C2.025 16.1747 1.31267 15.1164 0.788001 13.899C0.263335 12.6817 0.000667933 11.3817 1.26582e-06 9.99902C-0.000665401 8.61636 0.262001 7.31636 0.788001 6.09902C1.314 4.88169 2.02633 3.82336 2.925 2.92402C3.82367 2.02469 4.882 1.31236 6.1 0.787024C7.318 0.26169 8.618 -0.000976562 10 -0.000976562C11.382 -0.000976563 12.682 0.26169 13.9 0.787024C15.118 1.31236 16.1763 2.02469 17.075 2.92402C17.9737 3.82336 18.6863 4.88169 19.213 6.09902C19.7397 7.31636 20.002 8.61636 20 9.99902C19.998 11.3817 19.7353 12.6817 19.212 13.899C18.6887 15.1164 17.9763 16.1747 17.075 17.074C16.1737 17.9734 15.1153 18.686 13.9 19.212C12.6847 19.738 11.3847 20.0004 10 19.999ZM10 17.999C12.2333 17.999 14.125 17.224 15.675 15.674C17.225 14.124 18 12.2324 18 9.99902C18 7.76569 17.225 5.87402 15.675 4.32402C14.125 2.77402 12.2333 1.99902 10 1.99902C7.76667 1.99902 5.875 2.77402 4.325 4.32402C2.775 5.87402 2 7.76569 2 9.99902C2 12.2324 2.775 14.124 4.325 15.674C5.875 17.224 7.76667 17.999 10 17.999Z",
  fill: "var(--color-icon-df)"
}, null, -1 /* HOISTED */);
const _hoisted_5 = [_hoisted_4];
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "w-full mt-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "w-full flex items-center justify-center pt-2 pb-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "txt_medium_17"
}, "Tidal Datums")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex flex-col gap-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "txt_regular_14_tide color_AEBACA"
}, "In general, a datum is a base elevation used as a reference from which to reckon heights or depths. A tidal datum is a standard elevation defined by a certain phase of the tide. Tidal datums are used as references to measure local water levels and should not be extended into areas having differing oceanographic characteristics without substantiating measurements.")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "text-left"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "txt_medium_14"
}, "HAT (Highest Astronomical Tide)"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "txt_regular_14_tide color_AEBACA"
}, "The elevation of the highest predicted astronomical tide expected to occur at a specific tide station over the time period of 40 years. The 40-year period will include 2 National Tidal Datum Epoch periods. This time period will be updated every 20 years. The present values are based on the time period of 2000-2040.")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "txt_medium_14"
}, "WHHW (Mean Higher High Water)*"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "txt_regular_14_tide color_AEBACA"
}, "The average of the higher high water height of each tidal day observed over the National Tidal Datum Epoch. For stations with shorter series, comparison of simultaneous observations with a control tide station is made in order to derive the equivalent datum of the National Tidal Datum Epoch.")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "txt_medium_14"
}, "WHW (Mean High Water)"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "txt_regular_14_tide color_AEBACA"
}, "The average of all the high water heights observed over the National Tidal Datum Epoch. For stations with shorter series, comparison of simultaneous observations with a control tide station is made in order to derive the equivalent datum of the National Tidal Datum Epoch.")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "txt_medium_14"
}, "DTL (Diurnal Tide Level)"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "txt_regular_14_tide color_AEBACA"
}, "The arithmetic mean of mean higher high water and mean lower low water.")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "txt_medium_14"
}, "MTL (Mean Tide Level)"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "txt_regular_14_tide color_AEBACA"
}, "The arithmetic mean of mean high water and mean low water.")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "txt_medium_14"
}, "MSL (Mean Sea Level)"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "txt_regular_14_tide color_AEBACA"
}, "The arithmetic mean of hourly heights observed over the National Tidal Datum Epoch. Shorter series are specified in the name; e.g., monthly mean sea level and yearly mean sea level.")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "txt_medium_14"
}, "MLW (Mean Low Water)"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "txt_regular_14_tide color_AEBACA"
}, "The average of all the low water heights observed over the National Tidal Datum Epoch. For stations with shorter series, comparison of simultaneous observations with a control tide station is made in order to derive the equivalent datum of the National Tidal Datum Epoch.")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "txt_medium_14"
}, "MLLW (Mean Lower Low Water)*"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "txt_regular_14_tide color_AEBACA"
}, "The average of the lower low water height of each tidal day observed over the National Tidal Datum Epoch. For stations with shorter series, comparison of simultaneous observations with a control tide station is made in order to derive the equivalent datum of the National Tidal Datum Epoch.")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "txt_medium_14"
}, "LAT (Lowest Astronomical Tide)"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "txt_regular_14_tide color_AEBACA"
}, "The elevation of the lowest predicted astronomical tide expected to occur at a specific tide station over the time period of 40 years. The 40-year period will include 2 National Tidal Datum Epoch periods. This time period will be updated every 20 years. The present values are based on the time period of 2000-2040.")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "txt_medium_14"
}, "GT (Great Diurnal Range)"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "txt_regular_14_tide color_AEBACA"
}, "The difference in height between mean higher high water and mean lower low water.")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "txt_medium_14"
}, "MN (Mean Range of Tide)"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "txt_regular_14_tide color_AEBACA"
}, "The difference in height between mean high water and mean low water.")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "txt_medium_14"
}, " DHQ (Mean Diurnal High Water Inequality) "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "txt_regular_14_tide color_AEBACA"
}, "One-half the average difference between the two high waters of each tidal day observed over the National Tidal Datum Epoch. It is obtained by subtracting the mean of all the high waters from the mean of the higher high waters.")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "txt_medium_14"
}, " DLQ (Mean Diurnal Low Water Inequality) "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "txt_regular_14_tide color_AEBACA"
}, "One-half the average difference between the two low waters of each tidal day observed over the National Tidal Datum Epoch. It is obtained by subtracting the mean of the lower low waters from the mean of all the low waters.")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "txt_regular_14_tide color_AEBACA"
}, "*Some locations have diurnal tides--one high tide and one low tide per day. At most locations, there are semidiurnal tides--the tide cycles through a high and low twice each day, with one of the two high tides being higher than the other and one of the two low tides being lower than the other.")])])], -1 /* HOISTED */);
const _hoisted_7 = {
  class: "w-full h-[300px] pad-big pt-6"
};
const _hoisted_8 = {
  class: "w-full grid grid-cols-3 gap-6"
};
const _hoisted_9 = {
  class: "txt_medium_14 text-center"
};
const _hoisted_10 = {
  class: "txt_regular_14"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_drawer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-drawer");
  const _component_BaseComponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BaseComponent");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_BaseComponent, {
    height: $data.heightAuto,
    isShowPad: false
  }, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      class: "cursor-pointer",
      onClick: _cache[0] || (_cache[0] = $event => $data.drawer = true)
    }, [..._hoisted_5])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_drawer, {
      class: "bg-draw",
      modelValue: $data.drawer,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $data.drawer = $event),
      "with-header": false
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_6]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["modelValue"])])]),
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.datumsDataRender, (value, key) => {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        key: key
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(key), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertDatum(value)) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.unitTide), 1 /* TEXT */)]);
    }), 128 /* KEYED_FRAGMENT */))])])]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["height"])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/station/station-tide.vue?vue&type=template&id=3257b503":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/station/station-tide.vue?vue&type=template&id=3257b503 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
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
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "txt_medium_14"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Tide station near by ")], -1 /* HOISTED */);
const _hoisted_4 = {
  class: "w-full h-[300px] pad-big"
};
const _hoisted_5 = {
  class: "flex w-full h-full"
};
const _hoisted_6 = {
  class: "w-[50%] h-full"
};
const _hoisted_7 = {
  class: "flex flex-col gap-5 pt-3"
};
const _hoisted_8 = ["onClick"];
const _hoisted_9 = {
  class: "flex items-center gap-2"
};
const _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  width: "24",
  height: "25",
  viewBox: "0 0 24 25",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M5.46601 2.77918C5.53969 2.71051 5.5988 2.62771 5.63979 2.53572C5.68078 2.44372 5.70282 2.3444 5.7046 2.2437C5.70638 2.143 5.68785 2.04297 5.65013 1.94958C5.61241 1.85619 5.55626 1.77136 5.48505 1.70014C5.41383 1.62892 5.32899 1.57278 5.23561 1.53505C5.14222 1.49733 5.04219 1.47881 4.94148 1.48059C4.84078 1.48236 4.74147 1.5044 4.64947 1.5454C4.55747 1.58639 4.47467 1.64549 4.40601 1.71918C3.40444 2.71648 2.60999 3.90199 2.06835 5.20751C1.52672 6.51303 1.2486 7.91276 1.25001 9.32618C1.24833 10.7562 1.5328 12.1722 2.08666 13.4906C2.64051 14.809 3.45257 16.0033 4.47501 17.0032C4.61768 17.1391 4.80811 17.2134 5.00514 17.2101C5.20217 17.2067 5.38996 17.1259 5.52791 16.9852C5.66587 16.8445 5.7429 16.6552 5.74235 16.4581C5.74181 16.2611 5.66374 16.0721 5.52501 15.9322C4.64514 15.0721 3.94633 14.0446 3.46974 12.9102C2.99315 11.7759 2.74843 10.5576 2.75001 9.32718C2.74843 8.11068 2.9876 6.9059 3.45374 5.78226C3.91988 4.65861 4.60377 3.63732 5.46601 2.77918ZM19.677 1.80218C19.6084 1.73022 19.5263 1.6726 19.4352 1.63268C19.3442 1.59276 19.2462 1.57133 19.1468 1.56964C19.0474 1.56794 18.9487 1.58602 18.8564 1.62281C18.764 1.65961 18.6799 1.71439 18.609 1.78397C18.538 1.85356 18.4815 1.93655 18.4429 2.02813C18.4043 2.11972 18.3843 2.21807 18.384 2.31746C18.3837 2.41685 18.4032 2.51531 18.4413 2.6071C18.4794 2.6989 18.5354 2.7822 18.606 2.85218C20.3035 4.57949 21.2533 6.90536 21.25 9.32718C21.2516 10.5406 21.0136 11.7424 20.5498 12.8636C20.0859 13.9848 19.4053 15.0035 18.547 15.8612C18.4774 15.9309 18.4222 16.0137 18.3846 16.1047C18.347 16.1958 18.3277 16.2934 18.3278 16.3919C18.3279 16.4904 18.3474 16.5879 18.3851 16.6789C18.4229 16.7699 18.4783 16.8526 18.548 16.9222C18.6177 16.9918 18.7005 17.047 18.7916 17.0846C18.8826 17.1222 18.9802 17.1415 19.0787 17.1414C19.1772 17.1413 19.2748 17.1218 19.3658 17.084C19.4568 17.0462 19.5394 16.9909 19.609 16.9212C20.6063 15.9242 21.3971 14.7402 21.9361 13.4371C22.4751 12.134 22.7517 10.7374 22.75 9.32718C22.75 6.39718 21.577 3.74018 19.677 1.80218Z",
  fill: "#B6B6B6"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M8.274 5.87519C8.34706 5.80823 8.40612 5.72746 8.44778 5.63755C8.48944 5.54763 8.51287 5.45035 8.51671 5.35133C8.52055 5.2523 8.50472 5.1535 8.47015 5.06063C8.43558 4.96775 8.38295 4.88265 8.31529 4.81024C8.24764 4.73783 8.16631 4.67955 8.07599 4.63875C7.98568 4.59796 7.88818 4.57547 7.78912 4.57258C7.69007 4.5697 7.59142 4.58647 7.49888 4.62193C7.40635 4.65739 7.32176 4.71084 7.25 4.77919C6.021 5.92819 5.25 7.52919 5.25 9.30919C5.25 11.1092 6.04 12.7272 7.292 13.8792C7.43853 14.0139 7.63258 14.0849 7.83147 14.0766C8.03035 14.0682 8.21777 13.9812 8.3525 13.8347C8.48723 13.6882 8.55823 13.4941 8.54989 13.2952C8.54154 13.0963 8.45453 12.9089 8.308 12.7742C7.338 11.8842 6.75 10.6562 6.75 9.30819C6.75 7.97619 7.325 6.76319 8.274 5.87519ZM16.803 4.82919C16.6593 4.69167 16.4668 4.61689 16.2679 4.6213C16.069 4.62571 15.88 4.70894 15.7425 4.85269C15.605 4.99644 15.5302 5.18892 15.5346 5.38781C15.539 5.58669 15.6223 5.77567 15.766 5.91319C16.691 6.79819 17.25 7.99619 17.25 9.30919C17.25 10.6382 16.678 11.8492 15.733 12.7372C15.5919 12.8743 15.5103 13.0613 15.5058 13.258C15.5013 13.4547 15.5743 13.6453 15.709 13.7887C15.8437 13.9321 16.0294 14.0168 16.226 14.0246C16.4226 14.0323 16.6144 13.9625 16.76 13.8302C17.983 12.6822 18.75 11.0842 18.75 9.31019C18.75 7.55619 18 5.97319 16.803 4.82919Z",
  fill: "#B6B6B6"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M10.8333 10.8729C10.4897 10.6258 10.2333 10.2762 10.101 9.87416C9.96876 9.47215 9.96741 9.03855 10.0972 8.63573C10.227 8.23291 10.4812 7.88164 10.8232 7.63245C11.1653 7.38327 11.5776 7.24902 12.0008 7.24902C12.424 7.24902 12.8363 7.38327 13.1784 7.63245C13.5205 7.88164 13.7747 8.23291 13.9045 8.63573C14.0343 9.03855 14.0329 9.47215 13.9006 9.87416C13.7683 10.2762 13.5119 10.6258 13.1683 10.8729L16.7153 22.0219C16.7678 22.1871 16.7615 22.3654 16.6974 22.5265C16.6333 22.6875 16.5153 22.8214 16.3636 22.9053C16.2119 22.9893 16.0359 23.018 15.8653 22.9868C15.6948 22.9555 15.5404 22.8662 15.4283 22.7339L12.0003 18.6829L8.57333 22.7329C8.46145 22.8655 8.30704 22.9553 8.1364 22.9869C7.96577 23.0184 7.78947 22.9898 7.63754 22.906C7.48562 22.8221 7.36748 22.6882 7.30326 22.5269C7.23903 22.3657 7.2327 22.1872 7.28533 22.0219L10.8333 10.8729ZM12.9833 17.5219L14.1473 18.8969L13.5103 16.8969L12.9833 17.5219ZM12.9753 15.2139L12.9283 15.2639L12.0003 16.3619L11.0723 15.2659L11.0263 15.2149L12.0003 12.1519L12.9753 15.2139ZM10.4903 16.8979L11.0173 17.5219L9.85333 18.8969L10.4903 16.8979Z",
  fill: "#B6B6B6"
})], -1 /* HOISTED */);
const _hoisted_11 = {
  class: "txt_medium_14 text-left"
};
const _hoisted_12 = {
  class: "txt_regular_10 text-left"
};
const _hoisted_13 = {
  class: "flex items-center"
};
const _hoisted_14 = {
  class: "txt_regular_14"
};
const _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  width: "24",
  height: "25",
  viewBox: "0 0 24 25",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M6.72727 21.0529C6.72026 21.0597 6.71083 21.0636 6.70102 21.0636C6.6912 21.0636 6.68178 21.0597 6.67477 21.0529C6.29977 20.6366 2.29102 16.0916 2.29102 13.0804C2.29102 9.35285 4.72852 8.49035 6.70102 8.49035C8.51602 8.49035 10.8485 9.46535 10.8485 13.0804C10.8485 16.1891 7.07602 20.6441 6.72727 21.0529ZM6.56977 14.0479C7.55352 14.0479 8.35102 13.2504 8.35102 12.2666C8.35102 11.2828 7.55352 10.4854 6.56977 10.4854C5.58601 10.4854 4.78852 11.2828 4.78852 12.2666C4.78852 13.2504 5.58601 14.0479 6.56977 14.0479Z",
  fill: "#00CFFF"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M18.5923 13.5379C18.5846 13.545 18.5746 13.5489 18.5641 13.5489C18.5537 13.5489 18.5437 13.545 18.536 13.5379C18.2098 13.1629 15.0898 9.6191 15.0898 7.26035C15.0898 4.32035 17.0098 3.6416 18.566 3.6416C19.9948 3.6416 21.8323 4.3916 21.8323 7.26035C21.8323 9.6941 18.8998 13.1779 18.5923 13.5379ZM18.461 8.40035C19.2377 8.40035 19.8673 7.77075 19.8673 6.9941C19.8673 6.21745 19.2377 5.58785 18.461 5.58785C17.6844 5.58785 17.0548 6.21745 17.0548 6.9941C17.0548 7.77075 17.6844 8.40035 18.461 8.40035Z",
  fill: "#E91E63"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M2.77152 13.0799C2.77152 11.3295 3.33771 10.3344 4.05584 9.76257C4.79431 9.17454 5.77342 8.96988 6.70152 8.96988C7.53248 8.96988 8.44537 9.19414 9.14317 9.7934C9.8266 10.3803 10.369 11.383 10.369 13.0799C10.369 13.7677 10.1583 14.5622 9.8111 15.3949C9.46595 16.2226 8.99845 17.0586 8.51401 17.8213C7.82183 18.911 7.1069 19.8327 6.69337 20.3425C6.25523 19.8274 5.48582 18.8822 4.74146 17.772C4.22589 17.003 3.72885 16.1644 3.36215 15.342C2.99261 14.5131 2.77152 13.7359 2.77152 13.0799ZM6.33927 21.3952C6.40339 21.458 6.48213 21.5025 6.56737 21.5254L6.56241 21.5418C7.06291 21.6933 7.57337 21.8098 8.09007 21.8904L8.23798 20.9419C8.00691 20.9058 7.77721 20.8619 7.54927 20.8103C7.98803 20.2622 8.66536 19.3735 9.32435 18.336C9.82662 17.5452 10.324 16.6591 10.6971 15.7643C11.0682 14.8746 11.329 13.9464 11.329 13.0799C11.329 11.1617 10.7052 9.86944 9.76862 9.06511C8.84642 8.27313 7.68556 8.00988 6.70152 8.00988C5.65713 8.00988 4.43123 8.23648 3.45784 9.01157C2.46408 9.80287 1.81152 11.1028 1.81152 13.0799C1.81152 13.9295 2.09153 14.8496 2.48535 15.7329C2.88201 16.6225 3.41059 17.5108 3.94409 18.3066C5.01107 19.898 6.12374 21.1573 6.31865 21.3737L6.32863 21.3847L6.33927 21.3952ZM16.7728 14.5506C16.1486 14.795 15.5716 15.1459 15.0675 15.5878C14.5497 16.0532 14.4397 16.6671 14.2798 17.5596L14.2797 17.5599L14.2796 17.5608C14.2632 17.6523 14.2462 17.7468 14.2283 17.8444C14.042 18.8567 13.7449 20.0433 12.5345 21.1056C11.6214 21.9073 10.3129 22.0508 9.23465 22.0044L9.2759 21.0453C10.2901 21.0889 11.2767 20.9324 11.9012 20.3841C12.8657 19.5377 13.1104 18.6149 13.2841 17.6707C13.3019 17.5742 13.3189 17.4755 13.3362 17.3751C13.4816 16.5321 13.6471 15.5717 14.4286 14.8712L14.4306 14.8695L14.4325 14.8678C15.0207 14.3518 15.6941 13.942 16.4228 13.6567L16.7728 14.5506Z",
  fill: "#00CFFF"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M16.292 11.4093C16.7905 12.1549 17.303 12.8101 17.6715 13.2589C17.4308 13.3192 17.1925 13.3893 16.9573 13.4691L17.2657 14.3782C17.7131 14.2264 18.1729 14.1138 18.6398 14.0418L18.6369 14.0234C18.7423 14.0087 18.8413 13.9619 18.92 13.8885L18.94 13.8699L18.9578 13.8491C19.1177 13.6619 19.9445 12.681 20.7338 11.4328C21.1285 10.8087 21.5195 10.1087 21.8131 9.40074C22.1047 8.69764 22.3128 7.95711 22.3128 7.25988C22.3128 5.71595 21.8134 4.66558 21.0476 4.01008C20.2964 3.36707 19.3553 3.16113 18.5665 3.16113C17.7304 3.16113 16.7379 3.34171 15.9458 3.97253C15.1333 4.61956 14.6103 5.67675 14.6103 7.25988C14.6103 7.94592 14.8344 8.6808 15.1442 9.37801C15.4568 10.0814 15.8727 10.7821 16.292 11.4093ZM16.5438 4.72349C16.0072 5.15083 15.5703 5.90301 15.5703 7.25988C15.5703 7.75322 15.7361 8.34584 16.0215 8.98821C16.3042 9.62436 16.6886 10.2753 17.0901 10.8758C17.6363 11.6927 18.2018 12.3985 18.5583 12.8245C18.8926 12.407 19.4164 11.7199 19.9224 10.9198C20.2993 10.3238 20.6605 9.67395 20.9264 9.03297C21.1942 8.38713 21.3528 7.77953 21.3528 7.25988C21.3528 5.93506 20.9334 5.17606 20.4233 4.73938C19.8985 4.29019 19.2065 4.12113 18.5665 4.12113C17.8463 4.12113 17.1008 4.27993 16.5438 4.72349Z",
  fill: "#E91E63"
})], -1 /* HOISTED */);
const _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "w-[50%] h-full bg-slate-400"
}, null, -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IcAirStation = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IcAirStation");
  const _component_BaseComponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BaseComponent");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_BaseComponent, {
    height: $data.heightAuto,
    isShowPad: false
  }, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IcAirStation, {
      class: "icon-svg"
    }), _hoisted_3])]),
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.listStationParam, (item, index) => {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        class: "flex w-full justify-between gap-2 items-center pr-4 hover-station cursor-pointer",
        key: index,
        onClick: $event => $options.onClickChooseStationNear(item)
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-station", {
          'active-station': $options.currentStationNearParam.id === item.id
        }])
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.country), 1 /* TEXT */)], 2 /* CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertDistanceTide(item.distance)) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.unitSetting.activeDistance_save), 1 /* TEXT */), _hoisted_15])], 8 /* PROPS */, _hoisted_8);
    }), 128 /* KEYED_FRAGMENT */))])]), _hoisted_16])])]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["height"])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/today/today-chart-tide.vue?vue&type=template&id=f1908810":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/today/today-chart-tide.vue?vue&type=template&id=f1908810 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
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
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex items-center text-left gap-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M19 3H18V1H16V3H8V1H6V3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3ZM19 19H5V9H19V19ZM19 7H5V5H19M7 11H12V16H7",
  fill: "var(--color-icon-df)"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "txt_medium_14"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Today ")])], -1 /* HOISTED */);
const _hoisted_3 = {
  class: "w-full h-[460px]"
};
const _hoisted_4 = {
  class: "h-[50%] w-full relative p-4"
};
const _hoisted_5 = {
  class: "flex items-center"
};
const _hoisted_6 = {
  class: ""
};
const _hoisted_7 = {
  class: "absolute right-0 top-0 p-3"
};
const _hoisted_8 = {
  class: "relative"
};
const _hoisted_9 = {
  class: "w-[60px] h-[60px] bg-red-500 bor-radios-full p-2 button-rotate"
};
const _hoisted_10 = {
  key: 0,
  class: "items-center"
};
const _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex justify-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  width: "14",
  height: "15",
  viewBox: "0 0 20 21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", {
  "clip-path": "url(#clip0_4690_15669)"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M9.4452 0.881654C9.26797 0.974121 9.09074 1.15135 8.99827 1.33629C8.85186 1.62139 8.84416 1.78321 8.84416 4.58806V7.53931L7.86554 6.5607C7.31844 6.02901 6.77134 5.53585 6.63264 5.4665C6.10096 5.20451 5.41516 5.42797 5.14546 5.95966C4.95282 6.33723 4.95282 6.65316 5.13775 7.02303C5.32269 7.37749 9.1755 11.2149 9.51455 11.3844C9.83048 11.5385 10.1695 11.5385 10.4855 11.3844C10.8245 11.2149 14.6773 7.37749 14.8622 7.02303C15.0472 6.65316 15.0472 6.33723 14.8545 5.95966C14.5848 5.42797 13.899 5.20451 13.3674 5.4665C13.2287 5.53585 12.6816 6.02901 12.1422 6.5607L11.1558 7.53931V4.58806C11.1558 1.78321 11.1481 1.62139 11.0017 1.33629C10.7166 0.773775 10.0231 0.573429 9.4452 0.881654Z",
  fill: "white"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M0.351562 11.9809C0.1875 12.0669 0.0390625 12.3052 0.0390625 12.4888C0.0390625 12.7778 0.5 13.4536 0.949219 13.8208C1.25 14.0708 1.79688 14.3403 2.20312 14.4458C2.625 14.5513 3.30859 14.5552 3.73438 14.4458C4.16016 14.3403 4.69141 14.0669 5.03125 13.7856L5.3125 13.5474L5.59766 13.7856C5.93359 14.0669 6.46484 14.3403 6.89062 14.4458C7.31641 14.5513 7.99609 14.5513 8.42188 14.4458C8.84766 14.3403 9.37891 14.0669 9.71875 13.7856L10 13.5474L10.2852 13.7856C10.6211 14.0669 11.1523 14.3403 11.5781 14.4458C12.0039 14.5513 12.6836 14.5513 13.1094 14.4458C13.5352 14.3403 14.0664 14.0669 14.4062 13.7856L14.6875 13.5474L14.9727 13.7856C15.125 13.9145 15.4141 14.102 15.6055 14.1958C16.1016 14.438 16.4687 14.5239 17.0312 14.5239C17.5937 14.5239 17.9648 14.438 18.457 14.1958C19.0273 13.9145 19.4258 13.5435 19.7734 12.9731C19.9766 12.6372 20.0039 12.4263 19.875 12.2036C19.7109 11.9224 19.3945 11.8364 19.1016 11.9849C18.9883 12.0434 18.9102 12.1333 18.793 12.3247C18.4102 12.9888 17.7812 13.352 17.0312 13.352C16.2812 13.352 15.6523 12.9888 15.2695 12.3247C14.9375 11.7583 14.4375 11.7583 14.1055 12.3247C13.7227 12.9888 13.0938 13.352 12.3438 13.352C11.5938 13.352 10.9648 12.9888 10.582 12.3247C10.25 11.7583 9.75 11.7583 9.41797 12.3247C9.03516 12.9888 8.40625 13.352 7.65625 13.352C6.90625 13.352 6.27734 12.9888 5.89453 12.3247C5.5625 11.7583 5.0625 11.7583 4.73047 12.3247C4.34766 12.9888 3.71875 13.352 2.96875 13.352C2.21875 13.352 1.58984 12.9888 1.20703 12.3247C0.976562 11.9341 0.671875 11.8091 0.351562 11.9809Z",
  fill: "white"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M0.45341 14.9144C0.195598 14.9964 0.00809795 15.2972 0.0510667 15.5667C0.0901292 15.805 0.383098 16.2425 0.742473 16.594C1.27372 17.1175 1.85185 17.3987 2.60966 17.4964C3.47294 17.6058 4.4495 17.2972 5.09404 16.7073L5.31279 16.5081L5.53544 16.7112C6.012 17.137 6.62529 17.4105 7.29716 17.4964C8.16044 17.6058 9.137 17.2972 9.78154 16.7073L10.0003 16.5081L10.2229 16.7112C10.6995 17.137 11.3128 17.4105 11.9847 17.4964C12.8479 17.6058 13.8245 17.2972 14.469 16.7073L14.6878 16.5081L14.9104 16.7112C15.5745 17.305 16.5276 17.6058 17.3909 17.4964C18.1487 17.3987 18.7268 17.1175 19.2581 16.594C19.5862 16.2698 19.887 15.8362 19.9417 15.6058C20.012 15.3245 19.8089 14.9886 19.5237 14.9144C19.219 14.8323 19.0003 14.9573 18.7854 15.3323C18.5042 15.8206 17.9964 16.1839 17.4143 16.305C16.594 16.4808 15.719 16.0784 15.2737 15.3245C15.0745 14.9808 14.8518 14.844 14.5901 14.8909C14.4065 14.9261 14.2464 15.0706 14.0979 15.3323C13.8167 15.8206 13.3089 16.1839 12.7268 16.305C11.9065 16.4808 11.0315 16.0784 10.5862 15.3245C10.387 14.9808 10.1643 14.844 9.90263 14.8909C9.71904 14.9261 9.55888 15.0706 9.41044 15.3323C9.12919 15.8206 8.62138 16.1839 8.03935 16.305C7.21904 16.4808 6.34404 16.0784 5.89872 15.3245C5.6995 14.9808 5.47685 14.844 5.21513 14.8909C5.03154 14.9261 4.87138 15.0706 4.72294 15.3323C4.34794 15.9847 3.53935 16.4144 2.81279 16.3401C2.10575 16.2737 1.60966 15.9417 1.16044 15.2503C1.09013 15.1448 0.992473 15.0237 0.937785 14.9847C0.816692 14.8948 0.605754 14.8675 0.45341 14.9144Z",
  fill: "white"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M0.324422 17.9609C0.0900473 18.1016 -0.0115152 18.375 0.0783286 18.6406C0.152547 18.8711 0.480672 19.332 0.750204 19.5859C1.53927 20.3398 2.57052 20.6406 3.61739 20.4258C4.17989 20.3086 4.73458 20.0234 5.12911 19.6445L5.3127 19.4687L5.5002 19.6445C6.03927 20.168 6.87911 20.5 7.65645 20.5C8.4338 20.5 9.27364 20.168 9.81661 19.6445L10.0002 19.4687L10.1877 19.6445C10.7268 20.168 11.5666 20.5 12.344 20.5C13.1213 20.5 13.9611 20.168 14.5041 19.6445L14.6877 19.4687L14.8752 19.6445C15.2658 20.0234 15.8205 20.3086 16.383 20.4258C17.4299 20.6406 18.4611 20.3398 19.2502 19.5859C19.5275 19.3242 19.8596 18.8555 19.926 18.625C20.0432 18.2344 19.7775 17.8828 19.3635 17.8828C19.1291 17.8828 18.969 18 18.7815 18.3125C18.3205 19.0898 17.4299 19.4727 16.5666 19.2695C16.0471 19.1445 15.5588 18.7812 15.2815 18.3125C15.094 17.9961 14.9377 17.8828 14.6877 17.8828C14.4377 17.8828 14.2815 17.9961 14.094 18.3125C13.633 19.0898 12.7424 19.4727 11.8791 19.2695C11.3596 19.1445 10.8713 18.7812 10.594 18.3125C10.4065 17.9961 10.2502 17.8828 10.0002 17.8828C9.7502 17.8828 9.59395 17.9961 9.40645 18.3125C8.94552 19.0898 8.05489 19.4727 7.19161 19.2695C6.67208 19.1445 6.1838 18.7812 5.90645 18.3125C5.71895 17.9961 5.5627 17.8828 5.3127 17.8828C5.0627 17.8828 4.90645 17.9961 4.71895 18.3125C4.25802 19.0898 3.36739 19.4727 2.50411 19.2695C1.98458 19.1445 1.4963 18.7812 1.21895 18.3125C1.13302 18.1719 1.00802 18.0195 0.937704 17.9687C0.773641 17.8594 0.500204 17.8516 0.324422 17.9609Z",
  fill: "white"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("defs", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("clipPath", {
  id: "clip0_4690_15669"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  width: "20",
  height: "20",
  fill: "white",
  transform: "translate(0 0.5)"
})])])])], -1 /* HOISTED */);
const _hoisted_12 = {
  class: "txt_regular_10"
};
const _hoisted_13 = {
  class: "txt_regular_10"
};
const _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex justify-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "absolute items-center cursor-pointer txt_regular_14 bor-live"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "txt_regular_10"
}, "Live Tide")])], -1 /* HOISTED */);
const _hoisted_15 = {
  class: "w-full h-[120px] absolute bottom-8 left-0 pl-2 pr-8"
};
const _hoisted_16 = {
  class: "h-[50%] w-full pl-16 pr-16"
};
const _hoisted_17 = {
  class: "flex justify-between items-center w-full pad-small-tide"
};
const _hoisted_18 = {
  class: "flex items-center gap-2 w-[200px]"
};
const _hoisted_19 = {
  key: 0,
  width: "18",
  height: "19",
  viewBox: "0 0 20 21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", {
  "clip-path": "url(#clip0_4690_15669)"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M9.4452 0.881654C9.26797 0.974121 9.09074 1.15135 8.99827 1.33629C8.85186 1.62139 8.84416 1.78321 8.84416 4.58806V7.53931L7.86554 6.5607C7.31844 6.02901 6.77134 5.53585 6.63264 5.4665C6.10096 5.20451 5.41516 5.42797 5.14546 5.95966C4.95282 6.33723 4.95282 6.65316 5.13775 7.02303C5.32269 7.37749 9.1755 11.2149 9.51455 11.3844C9.83048 11.5385 10.1695 11.5385 10.4855 11.3844C10.8245 11.2149 14.6773 7.37749 14.8622 7.02303C15.0472 6.65316 15.0472 6.33723 14.8545 5.95966C14.5848 5.42797 13.899 5.20451 13.3674 5.4665C13.2287 5.53585 12.6816 6.02901 12.1422 6.5607L11.1558 7.53931V4.58806C11.1558 1.78321 11.1481 1.62139 11.0017 1.33629C10.7166 0.773775 10.0231 0.573429 9.4452 0.881654Z",
  fill: "white"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M0.351562 11.9809C0.1875 12.0669 0.0390625 12.3052 0.0390625 12.4888C0.0390625 12.7778 0.5 13.4536 0.949219 13.8208C1.25 14.0708 1.79688 14.3403 2.20312 14.4458C2.625 14.5513 3.30859 14.5552 3.73438 14.4458C4.16016 14.3403 4.69141 14.0669 5.03125 13.7856L5.3125 13.5474L5.59766 13.7856C5.93359 14.0669 6.46484 14.3403 6.89062 14.4458C7.31641 14.5513 7.99609 14.5513 8.42188 14.4458C8.84766 14.3403 9.37891 14.0669 9.71875 13.7856L10 13.5474L10.2852 13.7856C10.6211 14.0669 11.1523 14.3403 11.5781 14.4458C12.0039 14.5513 12.6836 14.5513 13.1094 14.4458C13.5352 14.3403 14.0664 14.0669 14.4062 13.7856L14.6875 13.5474L14.9727 13.7856C15.125 13.9145 15.4141 14.102 15.6055 14.1958C16.1016 14.438 16.4687 14.5239 17.0312 14.5239C17.5937 14.5239 17.9648 14.438 18.457 14.1958C19.0273 13.9145 19.4258 13.5435 19.7734 12.9731C19.9766 12.6372 20.0039 12.4263 19.875 12.2036C19.7109 11.9224 19.3945 11.8364 19.1016 11.9849C18.9883 12.0434 18.9102 12.1333 18.793 12.3247C18.4102 12.9888 17.7812 13.352 17.0312 13.352C16.2812 13.352 15.6523 12.9888 15.2695 12.3247C14.9375 11.7583 14.4375 11.7583 14.1055 12.3247C13.7227 12.9888 13.0938 13.352 12.3438 13.352C11.5938 13.352 10.9648 12.9888 10.582 12.3247C10.25 11.7583 9.75 11.7583 9.41797 12.3247C9.03516 12.9888 8.40625 13.352 7.65625 13.352C6.90625 13.352 6.27734 12.9888 5.89453 12.3247C5.5625 11.7583 5.0625 11.7583 4.73047 12.3247C4.34766 12.9888 3.71875 13.352 2.96875 13.352C2.21875 13.352 1.58984 12.9888 1.20703 12.3247C0.976562 11.9341 0.671875 11.8091 0.351562 11.9809Z",
  fill: "white"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M0.45341 14.9144C0.195598 14.9964 0.00809795 15.2972 0.0510667 15.5667C0.0901292 15.805 0.383098 16.2425 0.742473 16.594C1.27372 17.1175 1.85185 17.3987 2.60966 17.4964C3.47294 17.6058 4.4495 17.2972 5.09404 16.7073L5.31279 16.5081L5.53544 16.7112C6.012 17.137 6.62529 17.4105 7.29716 17.4964C8.16044 17.6058 9.137 17.2972 9.78154 16.7073L10.0003 16.5081L10.2229 16.7112C10.6995 17.137 11.3128 17.4105 11.9847 17.4964C12.8479 17.6058 13.8245 17.2972 14.469 16.7073L14.6878 16.5081L14.9104 16.7112C15.5745 17.305 16.5276 17.6058 17.3909 17.4964C18.1487 17.3987 18.7268 17.1175 19.2581 16.594C19.5862 16.2698 19.887 15.8362 19.9417 15.6058C20.012 15.3245 19.8089 14.9886 19.5237 14.9144C19.219 14.8323 19.0003 14.9573 18.7854 15.3323C18.5042 15.8206 17.9964 16.1839 17.4143 16.305C16.594 16.4808 15.719 16.0784 15.2737 15.3245C15.0745 14.9808 14.8518 14.844 14.5901 14.8909C14.4065 14.9261 14.2464 15.0706 14.0979 15.3323C13.8167 15.8206 13.3089 16.1839 12.7268 16.305C11.9065 16.4808 11.0315 16.0784 10.5862 15.3245C10.387 14.9808 10.1643 14.844 9.90263 14.8909C9.71904 14.9261 9.55888 15.0706 9.41044 15.3323C9.12919 15.8206 8.62138 16.1839 8.03935 16.305C7.21904 16.4808 6.34404 16.0784 5.89872 15.3245C5.6995 14.9808 5.47685 14.844 5.21513 14.8909C5.03154 14.9261 4.87138 15.0706 4.72294 15.3323C4.34794 15.9847 3.53935 16.4144 2.81279 16.3401C2.10575 16.2737 1.60966 15.9417 1.16044 15.2503C1.09013 15.1448 0.992473 15.0237 0.937785 14.9847C0.816692 14.8948 0.605754 14.8675 0.45341 14.9144Z",
  fill: "white"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M0.324422 17.9609C0.0900473 18.1016 -0.0115152 18.375 0.0783286 18.6406C0.152547 18.8711 0.480672 19.332 0.750204 19.5859C1.53927 20.3398 2.57052 20.6406 3.61739 20.4258C4.17989 20.3086 4.73458 20.0234 5.12911 19.6445L5.3127 19.4687L5.5002 19.6445C6.03927 20.168 6.87911 20.5 7.65645 20.5C8.4338 20.5 9.27364 20.168 9.81661 19.6445L10.0002 19.4687L10.1877 19.6445C10.7268 20.168 11.5666 20.5 12.344 20.5C13.1213 20.5 13.9611 20.168 14.5041 19.6445L14.6877 19.4687L14.8752 19.6445C15.2658 20.0234 15.8205 20.3086 16.383 20.4258C17.4299 20.6406 18.4611 20.3398 19.2502 19.5859C19.5275 19.3242 19.8596 18.8555 19.926 18.625C20.0432 18.2344 19.7775 17.8828 19.3635 17.8828C19.1291 17.8828 18.969 18 18.7815 18.3125C18.3205 19.0898 17.4299 19.4727 16.5666 19.2695C16.0471 19.1445 15.5588 18.7812 15.2815 18.3125C15.094 17.9961 14.9377 17.8828 14.6877 17.8828C14.4377 17.8828 14.2815 17.9961 14.094 18.3125C13.633 19.0898 12.7424 19.4727 11.8791 19.2695C11.3596 19.1445 10.8713 18.7812 10.594 18.3125C10.4065 17.9961 10.2502 17.8828 10.0002 17.8828C9.7502 17.8828 9.59395 17.9961 9.40645 18.3125C8.94552 19.0898 8.05489 19.4727 7.19161 19.2695C6.67208 19.1445 6.1838 18.7812 5.90645 18.3125C5.71895 17.9961 5.5627 17.8828 5.3127 17.8828C5.0627 17.8828 4.90645 17.9961 4.71895 18.3125C4.25802 19.0898 3.36739 19.4727 2.50411 19.2695C1.98458 19.1445 1.4963 18.7812 1.21895 18.3125C1.13302 18.1719 1.00802 18.0195 0.937704 17.9687C0.773641 17.8594 0.500204 17.8516 0.324422 17.9609Z",
  fill: "white"
})], -1 /* HOISTED */);
const _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("defs", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("clipPath", {
  id: "clip0_4690_15669"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  width: "20",
  height: "20",
  fill: "white",
  transform: "translate(0 0.5)"
})])], -1 /* HOISTED */);
const _hoisted_22 = [_hoisted_20, _hoisted_21];
const _hoisted_23 = {
  key: 1,
  width: "18",
  height: "19",
  viewBox: "0 0 20 21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", {
  "clip-path": "url(#clip0_4690_15678)"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M9.4452 11.1057C9.26797 11.0132 9.09074 10.836 8.99827 10.651C8.85186 10.3659 8.84416 10.2041 8.84416 7.39925V4.44799L7.86554 5.42661C7.31844 5.9583 6.77134 6.45146 6.63264 6.52081C6.10096 6.7828 5.41516 6.55933 5.14546 6.02765C4.95282 5.65007 4.95282 5.33414 5.13775 4.96427C5.32269 4.60981 9.1755 0.772413 9.51455 0.602889C9.83048 0.448777 10.1695 0.448777 10.4855 0.602889C10.8245 0.772413 14.6773 4.60981 14.8622 4.96427C15.0472 5.33414 15.0472 5.65007 14.8545 6.02765C14.5848 6.55933 13.899 6.7828 13.3674 6.52081C13.2287 6.45146 12.6816 5.9583 12.1422 5.42661L11.1558 4.44799V7.39925C11.1558 10.2041 11.1481 10.3659 11.0017 10.651C10.7166 11.2135 10.0231 11.4139 9.4452 11.1057Z",
  fill: "white"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M0.351562 11.7309C0.1875 11.8169 0.0390625 12.0552 0.0390625 12.2388C0.0390625 12.5278 0.5 13.2036 0.949219 13.5708C1.25 13.8208 1.79688 14.0903 2.20312 14.1958C2.625 14.3013 3.30859 14.3052 3.73438 14.1958C4.16016 14.0903 4.69141 13.8169 5.03125 13.5356L5.3125 13.2974L5.59766 13.5356C5.93359 13.8169 6.46484 14.0903 6.89062 14.1958C7.31641 14.3013 7.99609 14.3013 8.42188 14.1958C8.84766 14.0903 9.37891 13.8169 9.71875 13.5356L10 13.2974L10.2852 13.5356C10.6211 13.8169 11.1523 14.0903 11.5781 14.1958C12.0039 14.3013 12.6836 14.3013 13.1094 14.1958C13.5352 14.0903 14.0664 13.8169 14.4062 13.5356L14.6875 13.2974L14.9727 13.5356C15.125 13.6645 15.4141 13.852 15.6055 13.9458C16.1016 14.188 16.4687 14.2739 17.0312 14.2739C17.5937 14.2739 17.9648 14.188 18.457 13.9458C19.0273 13.6645 19.4258 13.2935 19.7734 12.7231C19.9766 12.3872 20.0039 12.1763 19.875 11.9536C19.7109 11.6724 19.3945 11.5864 19.1016 11.7349C18.9883 11.7934 18.9102 11.8833 18.793 12.0747C18.4102 12.7388 17.7812 13.102 17.0312 13.102C16.2812 13.102 15.6523 12.7388 15.2695 12.0747C14.9375 11.5083 14.4375 11.5083 14.1055 12.0747C13.7227 12.7388 13.0938 13.102 12.3438 13.102C11.5938 13.102 10.9648 12.7388 10.582 12.0747C10.25 11.5083 9.75 11.5083 9.41797 12.0747C9.03516 12.7388 8.40625 13.102 7.65625 13.102C6.90625 13.102 6.27734 12.7388 5.89453 12.0747C5.5625 11.5083 5.0625 11.5083 4.73047 12.0747C4.34766 12.7388 3.71875 13.102 2.96875 13.102C2.21875 13.102 1.58984 12.7388 1.20703 12.0747C0.976562 11.6841 0.671875 11.5591 0.351562 11.7309Z",
  fill: "white"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M0.45341 14.6644C0.195598 14.7464 0.00809795 15.0472 0.0510667 15.3167C0.0901292 15.555 0.383098 15.9925 0.742473 16.344C1.27372 16.8675 1.85185 17.1487 2.60966 17.2464C3.47294 17.3558 4.4495 17.0472 5.09404 16.4573L5.31279 16.2581L5.53544 16.4612C6.012 16.887 6.62529 17.1605 7.29716 17.2464C8.16044 17.3558 9.137 17.0472 9.78154 16.4573L10.0003 16.2581L10.2229 16.4612C10.6995 16.887 11.3128 17.1605 11.9847 17.2464C12.8479 17.3558 13.8245 17.0472 14.469 16.4573L14.6878 16.2581L14.9104 16.4612C15.5745 17.055 16.5276 17.3558 17.3909 17.2464C18.1487 17.1487 18.7268 16.8675 19.2581 16.344C19.5862 16.0198 19.887 15.5862 19.9417 15.3558C20.012 15.0745 19.8089 14.7386 19.5237 14.6644C19.219 14.5823 19.0003 14.7073 18.7854 15.0823C18.5042 15.5706 17.9964 15.9339 17.4143 16.055C16.594 16.2308 15.719 15.8284 15.2737 15.0745C15.0745 14.7308 14.8518 14.594 14.5901 14.6409C14.4065 14.6761 14.2464 14.8206 14.0979 15.0823C13.8167 15.5706 13.3089 15.9339 12.7268 16.055C11.9065 16.2308 11.0315 15.8284 10.5862 15.0745C10.387 14.7308 10.1643 14.594 9.90263 14.6409C9.71904 14.6761 9.55888 14.8206 9.41044 15.0823C9.12919 15.5706 8.62138 15.9339 8.03935 16.055C7.21904 16.2308 6.34404 15.8284 5.89872 15.0745C5.6995 14.7308 5.47685 14.594 5.21513 14.6409C5.03154 14.6761 4.87138 14.8206 4.72294 15.0823C4.34794 15.7347 3.53935 16.1644 2.81279 16.0901C2.10575 16.0237 1.60966 15.6917 1.16044 15.0003C1.09013 14.8948 0.992473 14.7737 0.937785 14.7347C0.816692 14.6448 0.605754 14.6175 0.45341 14.6644Z",
  fill: "white"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M0.324422 17.7109C0.0900473 17.8516 -0.0115152 18.125 0.0783286 18.3906C0.152547 18.6211 0.480672 19.082 0.750204 19.3359C1.53927 20.0898 2.57052 20.3906 3.61739 20.1758C4.17989 20.0586 4.73458 19.7734 5.12911 19.3945L5.3127 19.2187L5.5002 19.3945C6.03927 19.918 6.87911 20.25 7.65645 20.25C8.4338 20.25 9.27364 19.918 9.81661 19.3945L10.0002 19.2187L10.1877 19.3945C10.7268 19.918 11.5666 20.25 12.344 20.25C13.1213 20.25 13.9611 19.918 14.5041 19.3945L14.6877 19.2187L14.8752 19.3945C15.2658 19.7734 15.8205 20.0586 16.383 20.1758C17.4299 20.3906 18.4611 20.0898 19.2502 19.3359C19.5275 19.0742 19.8596 18.6055 19.926 18.375C20.0432 17.9844 19.7775 17.6328 19.3635 17.6328C19.1291 17.6328 18.969 17.75 18.7815 18.0625C18.3205 18.8398 17.4299 19.2227 16.5666 19.0195C16.0471 18.8945 15.5588 18.5312 15.2815 18.0625C15.094 17.7461 14.9377 17.6328 14.6877 17.6328C14.4377 17.6328 14.2815 17.7461 14.094 18.0625C13.633 18.8398 12.7424 19.2227 11.8791 19.0195C11.3596 18.8945 10.8713 18.5312 10.594 18.0625C10.4065 17.7461 10.2502 17.6328 10.0002 17.6328C9.7502 17.6328 9.59395 17.7461 9.40645 18.0625C8.94552 18.8398 8.05489 19.2227 7.19161 19.0195C6.67208 18.8945 6.1838 18.5312 5.90645 18.0625C5.71895 17.7461 5.5627 17.6328 5.3127 17.6328C5.0627 17.6328 4.90645 17.7461 4.71895 18.0625C4.25802 18.8398 3.36739 19.2227 2.50411 19.0195C1.98458 18.8945 1.4963 18.5312 1.21895 18.0625C1.13302 17.9219 1.00802 17.7695 0.937704 17.7187C0.773641 17.6094 0.500204 17.6016 0.324422 17.7109Z",
  fill: "white"
})], -1 /* HOISTED */);
const _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("defs", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("clipPath", {
  id: "clip0_4690_15678"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  width: "20",
  height: "20",
  fill: "white",
  transform: "translate(0 0.25)"
})])], -1 /* HOISTED */);
const _hoisted_26 = [_hoisted_24, _hoisted_25];
const _hoisted_27 = {
  class: "txt_regular_16"
};
const _hoisted_28 = {
  class: "w-[120px] text-center flex txt_regular_16"
};
const _hoisted_29 = {
  class: "w-[100px] text-right"
};
const _hoisted_30 = {
  class: "txt_regular_16 text-right"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ChartTideBarCurrent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ChartTideBarCurrent");
  const _component_BaseComponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BaseComponent");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_BaseComponent, {
    height: $data.heightAuto,
    isShowPad: false
  }, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_2]),
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatDateLocalizedConvert($options.tideDataRender.datetime)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [$options.convertTimeRender() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertTimeTideLive($options.convertTimeRender().datetime)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatTideHeightSingle($options.convertTimeRender().height)), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _hoisted_14])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ChartTideBarCurrent)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.extremesDataRender, (itemExtreme, index) => {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        class: "items-center w-full",
        key: index
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [itemExtreme.state === 'LOW TIDE' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_19, [..._hoisted_22])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_23, [..._hoisted_26])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertExtreme(itemExtreme.state)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatDatetimeToVNConvert(itemExtreme.datetime)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatUnitTide(itemExtreme.height)) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.unitTide($options.tideDataRender?.unit)), 1 /* TEXT */)])])]);
    }), 128 /* KEYED_FRAGMENT */))])])]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["height"])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/search/tide-page/index.vue?vue&type=template&id=b11f8e08":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/search/tide-page/index.vue?vue&type=template&id=b11f8e08 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  class: "w-full h-full pl-2 pr-2"
};
const _hoisted_2 = {
  class: "container mt-5"
};
const _hoisted_3 = {
  class: "header-m flex w-full gap-20-px h-full"
};
const _hoisted_4 = {
  class: "left-hourly lg:w-[68%] w-full"
};
const _hoisted_5 = {
  class: "right-hourly lg:w-[32%] w-full md:grid md:grid-cols-2 gap-5 lg:block"
};
const _hoisted_6 = {
  key: 0,
  class: "w-full"
};
const _hoisted_7 = {
  key: 1,
  class: "w-full h-[230px] md:mt-4 mt-2"
};
const _hoisted_8 = {
  key: 2,
  class: "w-full"
};
const _hoisted_9 = {
  key: 3,
  class: "w-full h-[230px] md:mt-1"
};
const _hoisted_10 = {
  class: "container mt-5"
};
const _hoisted_11 = {
  class: "header-m flex w-full gap-20-px h-full"
};
const _hoisted_12 = {
  class: "container mt-5"
};
const _hoisted_13 = {
  class: "header-m flex w-full gap-20-px h-full"
};
const _hoisted_14 = {
  class: "left-hourly lg:w-[40%] w-full"
};
const _hoisted_15 = {
  class: "right-hourly lg:w-[60%] w-full md:grid md:grid-cols-2 gap-5 lg:block"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TodayChartTide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TodayChartTide");
  const _component_SunPage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SunPage");
  const _component_SkeletonLoader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SkeletonLoader");
  const _component_MoonPage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MoonPage");
  const _component_MonthDayChartTide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MonthDayChartTide");
  const _component_DatumTide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DatumTide");
  const _component_StationTide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("StationTide");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TodayChartTide)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), $options.currentlyData && Object.keys($options.currentlyData).length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_SunPage, {
    key: _ctx.indexState + Math.random()
  }))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SkeletonLoader, {
    class: "w-full h-full"
  })])), $options.currentlyData && Object.keys($options.currentlyData).length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_8, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_MoonPage, {
    key: _ctx.indexState + Math.random()
  }))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SkeletonLoader, {
    class: "w-full h-full"
  })]))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MonthDayChartTide)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DatumTide)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_StationTide)])])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/datum/datum-tide.vue?vue&type=style&index=0&id=a55cf266&lang=scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/datum/datum-tide.vue?vue&type=style&index=0&id=a55cf266&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".bg-draw {\n  background-color: #34527c;\n}\n.color_AEBACA {\n  color: #aebaca;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/station/station-tide.vue?vue&type=style&index=0&id=3257b503&lang=scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/station/station-tide.vue?vue&type=style&index=0&id=3257b503&lang=scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".hover-station:hover .text-station {\n  color: rgb(175, 170, 203);\n}\n.active-station {\n  color: rgb(138, 121, 231);\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/today/today-chart-tide.vue?vue&type=style&index=0&id=f1908810&lang=scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/today/today-chart-tide.vue?vue&type=style&index=0&id=f1908810&lang=scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".bor-live {\n  border-radius: 14px;\n  background-color: rgb(75, 136, 227);\n  padding: 3px 6px;\n  top: 54px;\n}\n.button-rotate {\n  cursor: pointer;\n  animation: glowing 1500ms infinite;\n}\n@keyframes glowing {\n0% {\n    background-color: #b20000;\n    box-shadow: 0 0 3px #b20000;\n}\n50% {\n    background-color: #ff0000;\n    box-shadow: 0 0 40px #ff0000;\n}\n100% {\n    background-color: #b20000;\n    box-shadow: 0 0 3px #b20000;\n}\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/icons/IcAirStation.vue":
/*!***********************************************!*\
  !*** ./src/components/icons/IcAirStation.vue ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IcAirStation_vue_vue_type_template_id_6c55e7c9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IcAirStation.vue?vue&type=template&id=6c55e7c9 */ "./src/components/icons/IcAirStation.vue?vue&type=template&id=6c55e7c9");
/* harmony import */ var _IcAirStation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IcAirStation.vue?vue&type=script&lang=js */ "./src/components/icons/IcAirStation.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_IcAirStation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_IcAirStation_vue_vue_type_template_id_6c55e7c9__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/components/icons/IcAirStation.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/tide/30-day/month-day-chart-tide.vue":
/*!*************************************************************!*\
  !*** ./src/components/tide/30-day/month-day-chart-tide.vue ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _month_day_chart_tide_vue_vue_type_template_id_18b8ba86__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./month-day-chart-tide.vue?vue&type=template&id=18b8ba86 */ "./src/components/tide/30-day/month-day-chart-tide.vue?vue&type=template&id=18b8ba86");
/* harmony import */ var _month_day_chart_tide_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./month-day-chart-tide.vue?vue&type=script&lang=js */ "./src/components/tide/30-day/month-day-chart-tide.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_month_day_chart_tide_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_month_day_chart_tide_vue_vue_type_template_id_18b8ba86__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/components/tide/30-day/month-day-chart-tide.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/tide/chart-tide-bar/chart-tide-bar-current.vue":
/*!***********************************************************************!*\
  !*** ./src/components/tide/chart-tide-bar/chart-tide-bar-current.vue ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chart_tide_bar_current_vue_vue_type_template_id_71e4f89c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart-tide-bar-current.vue?vue&type=template&id=71e4f89c */ "./src/components/tide/chart-tide-bar/chart-tide-bar-current.vue?vue&type=template&id=71e4f89c");
/* harmony import */ var _chart_tide_bar_current_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart-tide-bar-current.vue?vue&type=script&lang=js */ "./src/components/tide/chart-tide-bar/chart-tide-bar-current.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_chart_tide_bar_current_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_chart_tide_bar_current_vue_vue_type_template_id_71e4f89c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/components/tide/chart-tide-bar/chart-tide-bar-current.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/tide/chart-tide-bar/chart-tide-bar-month.vue":
/*!*********************************************************************!*\
  !*** ./src/components/tide/chart-tide-bar/chart-tide-bar-month.vue ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chart_tide_bar_month_vue_vue_type_template_id_540fa179__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart-tide-bar-month.vue?vue&type=template&id=540fa179 */ "./src/components/tide/chart-tide-bar/chart-tide-bar-month.vue?vue&type=template&id=540fa179");
/* harmony import */ var _chart_tide_bar_month_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart-tide-bar-month.vue?vue&type=script&lang=js */ "./src/components/tide/chart-tide-bar/chart-tide-bar-month.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_chart_tide_bar_month_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_chart_tide_bar_month_vue_vue_type_template_id_540fa179__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/components/tide/chart-tide-bar/chart-tide-bar-month.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/tide/chart-tide-bar/label-time-month.vue":
/*!*****************************************************************!*\
  !*** ./src/components/tide/chart-tide-bar/label-time-month.vue ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _label_time_month_vue_vue_type_template_id_ba594298__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./label-time-month.vue?vue&type=template&id=ba594298 */ "./src/components/tide/chart-tide-bar/label-time-month.vue?vue&type=template&id=ba594298");
/* harmony import */ var _label_time_month_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./label-time-month.vue?vue&type=script&lang=js */ "./src/components/tide/chart-tide-bar/label-time-month.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_label_time_month_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_label_time_month_vue_vue_type_template_id_ba594298__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/components/tide/chart-tide-bar/label-time-month.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/tide/datum/datum-tide.vue":
/*!**************************************************!*\
  !*** ./src/components/tide/datum/datum-tide.vue ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _datum_tide_vue_vue_type_template_id_a55cf266__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datum-tide.vue?vue&type=template&id=a55cf266 */ "./src/components/tide/datum/datum-tide.vue?vue&type=template&id=a55cf266");
/* harmony import */ var _datum_tide_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datum-tide.vue?vue&type=script&lang=js */ "./src/components/tide/datum/datum-tide.vue?vue&type=script&lang=js");
/* harmony import */ var _datum_tide_vue_vue_type_style_index_0_id_a55cf266_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datum-tide.vue?vue&type=style&index=0&id=a55cf266&lang=scss */ "./src/components/tide/datum/datum-tide.vue?vue&type=style&index=0&id=a55cf266&lang=scss");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_datum_tide_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_datum_tide_vue_vue_type_template_id_a55cf266__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/components/tide/datum/datum-tide.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/tide/station/station-tide.vue":
/*!******************************************************!*\
  !*** ./src/components/tide/station/station-tide.vue ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _station_tide_vue_vue_type_template_id_3257b503__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./station-tide.vue?vue&type=template&id=3257b503 */ "./src/components/tide/station/station-tide.vue?vue&type=template&id=3257b503");
/* harmony import */ var _station_tide_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./station-tide.vue?vue&type=script&lang=js */ "./src/components/tide/station/station-tide.vue?vue&type=script&lang=js");
/* harmony import */ var _station_tide_vue_vue_type_style_index_0_id_3257b503_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./station-tide.vue?vue&type=style&index=0&id=3257b503&lang=scss */ "./src/components/tide/station/station-tide.vue?vue&type=style&index=0&id=3257b503&lang=scss");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_station_tide_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_station_tide_vue_vue_type_template_id_3257b503__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/components/tide/station/station-tide.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/tide/today/today-chart-tide.vue":
/*!********************************************************!*\
  !*** ./src/components/tide/today/today-chart-tide.vue ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _today_chart_tide_vue_vue_type_template_id_f1908810__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./today-chart-tide.vue?vue&type=template&id=f1908810 */ "./src/components/tide/today/today-chart-tide.vue?vue&type=template&id=f1908810");
/* harmony import */ var _today_chart_tide_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./today-chart-tide.vue?vue&type=script&lang=js */ "./src/components/tide/today/today-chart-tide.vue?vue&type=script&lang=js");
/* harmony import */ var _today_chart_tide_vue_vue_type_style_index_0_id_f1908810_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./today-chart-tide.vue?vue&type=style&index=0&id=f1908810&lang=scss */ "./src/components/tide/today/today-chart-tide.vue?vue&type=style&index=0&id=f1908810&lang=scss");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_today_chart_tide_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_today_chart_tide_vue_vue_type_template_id_f1908810__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/components/tide/today/today-chart-tide.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/search/tide-page/index.vue":
/*!**********************************************!*\
  !*** ./src/views/search/tide-page/index.vue ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_b11f8e08__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=b11f8e08 */ "./src/views/search/tide-page/index.vue?vue&type=template&id=b11f8e08");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/views/search/tide-page/index.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_b11f8e08__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/search/tide-page/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/icons/IcAirStation.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./src/components/icons/IcAirStation.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IcAirStation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IcAirStation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IcAirStation.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/icons/IcAirStation.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/tide/30-day/month-day-chart-tide.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./src/components/tide/30-day/month-day-chart-tide.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_month_day_chart_tide_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_month_day_chart_tide_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./month-day-chart-tide.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/30-day/month-day-chart-tide.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/tide/chart-tide-bar/chart-tide-bar-current.vue?vue&type=script&lang=js":
/*!***********************************************************************************************!*\
  !*** ./src/components/tide/chart-tide-bar/chart-tide-bar-current.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_chart_tide_bar_current_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_chart_tide_bar_current_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./chart-tide-bar-current.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/chart-tide-bar/chart-tide-bar-current.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/tide/chart-tide-bar/chart-tide-bar-month.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./src/components/tide/chart-tide-bar/chart-tide-bar-month.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_chart_tide_bar_month_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_chart_tide_bar_month_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./chart-tide-bar-month.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/chart-tide-bar/chart-tide-bar-month.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/tide/chart-tide-bar/label-time-month.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./src/components/tide/chart-tide-bar/label-time-month.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_label_time_month_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_label_time_month_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./label-time-month.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/chart-tide-bar/label-time-month.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/tide/datum/datum-tide.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./src/components/tide/datum/datum-tide.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_datum_tide_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_datum_tide_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./datum-tide.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/datum/datum-tide.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/tide/station/station-tide.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./src/components/tide/station/station-tide.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_station_tide_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_station_tide_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./station-tide.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/station/station-tide.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/tide/today/today-chart-tide.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./src/components/tide/today/today-chart-tide.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_today_chart_tide_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_today_chart_tide_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./today-chart-tide.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/today/today-chart-tide.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/views/search/tide-page/index.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./src/views/search/tide-page/index.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/search/tide-page/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/icons/IcAirStation.vue?vue&type=template&id=6c55e7c9":
/*!*****************************************************************************!*\
  !*** ./src/components/icons/IcAirStation.vue?vue&type=template&id=6c55e7c9 ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IcAirStation_vue_vue_type_template_id_6c55e7c9__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IcAirStation_vue_vue_type_template_id_6c55e7c9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IcAirStation.vue?vue&type=template&id=6c55e7c9 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/icons/IcAirStation.vue?vue&type=template&id=6c55e7c9");


/***/ }),

/***/ "./src/components/tide/30-day/month-day-chart-tide.vue?vue&type=template&id=18b8ba86":
/*!*******************************************************************************************!*\
  !*** ./src/components/tide/30-day/month-day-chart-tide.vue?vue&type=template&id=18b8ba86 ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_month_day_chart_tide_vue_vue_type_template_id_18b8ba86__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_month_day_chart_tide_vue_vue_type_template_id_18b8ba86__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./month-day-chart-tide.vue?vue&type=template&id=18b8ba86 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/30-day/month-day-chart-tide.vue?vue&type=template&id=18b8ba86");


/***/ }),

/***/ "./src/components/tide/chart-tide-bar/chart-tide-bar-current.vue?vue&type=template&id=71e4f89c":
/*!*****************************************************************************************************!*\
  !*** ./src/components/tide/chart-tide-bar/chart-tide-bar-current.vue?vue&type=template&id=71e4f89c ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_chart_tide_bar_current_vue_vue_type_template_id_71e4f89c__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_chart_tide_bar_current_vue_vue_type_template_id_71e4f89c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./chart-tide-bar-current.vue?vue&type=template&id=71e4f89c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/chart-tide-bar/chart-tide-bar-current.vue?vue&type=template&id=71e4f89c");


/***/ }),

/***/ "./src/components/tide/chart-tide-bar/chart-tide-bar-month.vue?vue&type=template&id=540fa179":
/*!***************************************************************************************************!*\
  !*** ./src/components/tide/chart-tide-bar/chart-tide-bar-month.vue?vue&type=template&id=540fa179 ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_chart_tide_bar_month_vue_vue_type_template_id_540fa179__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_chart_tide_bar_month_vue_vue_type_template_id_540fa179__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./chart-tide-bar-month.vue?vue&type=template&id=540fa179 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/chart-tide-bar/chart-tide-bar-month.vue?vue&type=template&id=540fa179");


/***/ }),

/***/ "./src/components/tide/chart-tide-bar/label-time-month.vue?vue&type=template&id=ba594298":
/*!***********************************************************************************************!*\
  !*** ./src/components/tide/chart-tide-bar/label-time-month.vue?vue&type=template&id=ba594298 ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_label_time_month_vue_vue_type_template_id_ba594298__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_label_time_month_vue_vue_type_template_id_ba594298__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./label-time-month.vue?vue&type=template&id=ba594298 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/chart-tide-bar/label-time-month.vue?vue&type=template&id=ba594298");


/***/ }),

/***/ "./src/components/tide/datum/datum-tide.vue?vue&type=template&id=a55cf266":
/*!********************************************************************************!*\
  !*** ./src/components/tide/datum/datum-tide.vue?vue&type=template&id=a55cf266 ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_datum_tide_vue_vue_type_template_id_a55cf266__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_datum_tide_vue_vue_type_template_id_a55cf266__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./datum-tide.vue?vue&type=template&id=a55cf266 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/datum/datum-tide.vue?vue&type=template&id=a55cf266");


/***/ }),

/***/ "./src/components/tide/station/station-tide.vue?vue&type=template&id=3257b503":
/*!************************************************************************************!*\
  !*** ./src/components/tide/station/station-tide.vue?vue&type=template&id=3257b503 ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_station_tide_vue_vue_type_template_id_3257b503__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_station_tide_vue_vue_type_template_id_3257b503__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./station-tide.vue?vue&type=template&id=3257b503 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/station/station-tide.vue?vue&type=template&id=3257b503");


/***/ }),

/***/ "./src/components/tide/today/today-chart-tide.vue?vue&type=template&id=f1908810":
/*!**************************************************************************************!*\
  !*** ./src/components/tide/today/today-chart-tide.vue?vue&type=template&id=f1908810 ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_today_chart_tide_vue_vue_type_template_id_f1908810__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_today_chart_tide_vue_vue_type_template_id_f1908810__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./today-chart-tide.vue?vue&type=template&id=f1908810 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/today/today-chart-tide.vue?vue&type=template&id=f1908810");


/***/ }),

/***/ "./src/views/search/tide-page/index.vue?vue&type=template&id=b11f8e08":
/*!****************************************************************************!*\
  !*** ./src/views/search/tide-page/index.vue?vue&type=template&id=b11f8e08 ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_b11f8e08__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_b11f8e08__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=b11f8e08 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/search/tide-page/index.vue?vue&type=template&id=b11f8e08");


/***/ }),

/***/ "./src/components/tide/datum/datum-tide.vue?vue&type=style&index=0&id=a55cf266&lang=scss":
/*!***********************************************************************************************!*\
  !*** ./src/components/tide/datum/datum-tide.vue?vue&type=style&index=0&id=a55cf266&lang=scss ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_datum_tide_vue_vue_type_style_index_0_id_a55cf266_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./datum-tide.vue?vue&type=style&index=0&id=a55cf266&lang=scss */ "./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/datum/datum-tide.vue?vue&type=style&index=0&id=a55cf266&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_datum_tide_vue_vue_type_style_index_0_id_a55cf266_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_datum_tide_vue_vue_type_style_index_0_id_a55cf266_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_datum_tide_vue_vue_type_style_index_0_id_a55cf266_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_datum_tide_vue_vue_type_style_index_0_id_a55cf266_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/components/tide/station/station-tide.vue?vue&type=style&index=0&id=3257b503&lang=scss":
/*!***************************************************************************************************!*\
  !*** ./src/components/tide/station/station-tide.vue?vue&type=style&index=0&id=3257b503&lang=scss ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_station_tide_vue_vue_type_style_index_0_id_3257b503_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./station-tide.vue?vue&type=style&index=0&id=3257b503&lang=scss */ "./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/station/station-tide.vue?vue&type=style&index=0&id=3257b503&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_station_tide_vue_vue_type_style_index_0_id_3257b503_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_station_tide_vue_vue_type_style_index_0_id_3257b503_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_station_tide_vue_vue_type_style_index_0_id_3257b503_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_station_tide_vue_vue_type_style_index_0_id_3257b503_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/components/tide/today/today-chart-tide.vue?vue&type=style&index=0&id=f1908810&lang=scss":
/*!*****************************************************************************************************!*\
  !*** ./src/components/tide/today/today-chart-tide.vue?vue&type=style&index=0&id=f1908810&lang=scss ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_today_chart_tide_vue_vue_type_style_index_0_id_f1908810_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./today-chart-tide.vue?vue&type=style&index=0&id=f1908810&lang=scss */ "./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/today/today-chart-tide.vue?vue&type=style&index=0&id=f1908810&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_today_chart_tide_vue_vue_type_style_index_0_id_f1908810_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_today_chart_tide_vue_vue_type_style_index_0_id_f1908810_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_today_chart_tide_vue_vue_type_style_index_0_id_f1908810_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_today_chart_tide_vue_vue_type_style_index_0_id_f1908810_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/datum/datum-tide.vue?vue&type=style&index=0&id=a55cf266&lang=scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/datum/datum-tide.vue?vue&type=style&index=0&id=a55cf266&lang=scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./datum-tide.vue?vue&type=style&index=0&id=a55cf266&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/datum/datum-tide.vue?vue&type=style&index=0&id=a55cf266&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("30eda87c", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/station/station-tide.vue?vue&type=style&index=0&id=3257b503&lang=scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/station/station-tide.vue?vue&type=style&index=0&id=3257b503&lang=scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./station-tide.vue?vue&type=style&index=0&id=3257b503&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/station/station-tide.vue?vue&type=style&index=0&id=3257b503&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("55c0ae24", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/today/today-chart-tide.vue?vue&type=style&index=0&id=f1908810&lang=scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/today/today-chart-tide.vue?vue&type=style&index=0&id=f1908810&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./today-chart-tide.vue?vue&type=style&index=0&id=f1908810&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/tide/today/today-chart-tide.vue?vue&type=style&index=0&id=f1908810&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("610f35d1", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/chartjs-adapter-date-fns/dist/chartjs-adapter-date-fns.esm.js":
/*!************************************************************************************!*\
  !*** ./node_modules/chartjs-adapter-date-fns/dist/chartjs-adapter-date-fns.esm.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/toDate.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/parse.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/parseISO.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isValid.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/addMilliseconds.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/addSeconds.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/addMinutes.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/addHours.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/addDays.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/addWeeks.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/addMonths.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/addQuarters.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/addYears.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/differenceInMilliseconds.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/differenceInSeconds.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/differenceInMinutes.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/differenceInHours.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/differenceInDays.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/differenceInWeeks.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/differenceInMonths.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/differenceInQuarters.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/differenceInYears.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/startOfSecond.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/startOfMinute.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/startOfHour.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/startOfDay.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/startOfWeek.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/startOfMonth.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/startOfQuarter.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/startOfYear.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/endOfSecond.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/endOfMinute.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/endOfHour.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/endOfDay.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/endOfWeek.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/endOfMonth.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/endOfQuarter.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/endOfYear.js");
/*!
 * chartjs-adapter-date-fns v3.0.0
 * https://www.chartjs.org
 * (c) 2022 chartjs-adapter-date-fns Contributors
 * Released under the MIT license
 */


const FORMATS = {
  datetime: 'MMM d, yyyy, h:mm:ss aaaa',
  millisecond: 'h:mm:ss.SSS aaaa',
  second: 'h:mm:ss aaaa',
  minute: 'h:mm aaaa',
  hour: 'ha',
  day: 'MMM d',
  week: 'PP',
  month: 'MMM yyyy',
  quarter: 'qqq - yyyy',
  year: 'yyyy'
};
chart_js__WEBPACK_IMPORTED_MODULE_0__._adapters._date.override({
  _id: 'date-fns',
  // DEBUG

  formats: function () {
    return FORMATS;
  },
  parse: function (value, fmt) {
    if (value === null || typeof value === 'undefined') {
      return null;
    }
    const type = typeof value;
    if (type === 'number' || value instanceof Date) {
      value = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.toDate)(value);
    } else if (type === 'string') {
      if (typeof fmt === 'string') {
        value = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.parse)(value, fmt, new Date(), this.options);
      } else {
        value = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.parseISO)(value, this.options);
      }
    }
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.isValid)(value) ? value.getTime() : null;
  },
  format: function (time, fmt) {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.format)(time, fmt, this.options);
  },
  add: function (time, amount, unit) {
    switch (unit) {
      case 'millisecond':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.addMilliseconds)(time, amount);
      case 'second':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.addSeconds)(time, amount);
      case 'minute':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.addMinutes)(time, amount);
      case 'hour':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.addHours)(time, amount);
      case 'day':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_10__.addDays)(time, amount);
      case 'week':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_11__.addWeeks)(time, amount);
      case 'month':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_12__.addMonths)(time, amount);
      case 'quarter':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_13__.addQuarters)(time, amount);
      case 'year':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_14__.addYears)(time, amount);
      default:
        return time;
    }
  },
  diff: function (max, min, unit) {
    switch (unit) {
      case 'millisecond':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_15__.differenceInMilliseconds)(max, min);
      case 'second':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.differenceInSeconds)(max, min);
      case 'minute':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_17__.differenceInMinutes)(max, min);
      case 'hour':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_18__.differenceInHours)(max, min);
      case 'day':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_19__.differenceInDays)(max, min);
      case 'week':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_20__.differenceInWeeks)(max, min);
      case 'month':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_21__.differenceInMonths)(max, min);
      case 'quarter':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_22__.differenceInQuarters)(max, min);
      case 'year':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_23__.differenceInYears)(max, min);
      default:
        return 0;
    }
  },
  startOf: function (time, unit, weekday) {
    switch (unit) {
      case 'second':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_24__.startOfSecond)(time);
      case 'minute':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_25__.startOfMinute)(time);
      case 'hour':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_26__.startOfHour)(time);
      case 'day':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_27__.startOfDay)(time);
      case 'week':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_28__.startOfWeek)(time);
      case 'isoWeek':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_28__.startOfWeek)(time, {
          weekStartsOn: +weekday
        });
      case 'month':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_29__.startOfMonth)(time);
      case 'quarter':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_30__.startOfQuarter)(time);
      case 'year':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_31__.startOfYear)(time);
      default:
        return time;
    }
  },
  endOf: function (time, unit) {
    switch (unit) {
      case 'second':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_32__.endOfSecond)(time);
      case 'minute':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_33__.endOfMinute)(time);
      case 'hour':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_34__.endOfHour)(time);
      case 'day':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_35__.endOfDay)(time);
      case 'week':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_36__.endOfWeek)(time);
      case 'month':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_37__.endOfMonth)(time);
      case 'quarter':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_38__.endOfQuarter)(time);
      case 'year':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_39__.endOfYear)(time);
      default:
        return time;
    }
  }
});

/***/ }),

/***/ "./node_modules/chartjs-plugin-annotation/dist/chartjs-plugin-annotation.esm.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/chartjs-plugin-annotation/dist/chartjs-plugin-annotation.esm.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ annotation; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chunks/helpers.segment.js");
/* harmony import */ var chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js/helpers */ "./node_modules/chart.js/helpers/helpers.js");

/*!
* chartjs-plugin-annotation v3.1.0
* https://www.chartjs.org/chartjs-plugin-annotation/index
 * (c) 2024 chartjs-plugin-annotation Contributors
 * Released under the MIT License
 */



/**
 * @typedef { import("chart.js").ChartEvent } ChartEvent
 * @typedef { import('../../types/element').AnnotationElement } AnnotationElement
 */

const interaction = {
  modes: {
    /**
     * Point mode returns all elements that hit test based on the event position
     * @param {AnnotationElement[]} visibleElements - annotation elements which are visible
     * @param {ChartEvent} event - the event we are find things at
     * @return {AnnotationElement[]} - elements that are found
     */
    point(visibleElements, event) {
      return filterElements(visibleElements, event, {
        intersect: true
      });
    },
    /**
     * Nearest mode returns the element closest to the event position
     * @param {AnnotationElement[]} visibleElements - annotation elements which are visible
     * @param {ChartEvent} event - the event we are find things at
     * @param {Object} options - interaction options to use
     * @return {AnnotationElement[]} - elements that are found (only 1 element)
     */
    nearest(visibleElements, event, options) {
      return getNearestItem(visibleElements, event, options);
    },
    /**
     * x mode returns the elements that hit-test at the current x coordinate
     * @param {AnnotationElement[]} visibleElements - annotation elements which are visible
     * @param {ChartEvent} event - the event we are find things at
     * @param {Object} options - interaction options to use
     * @return {AnnotationElement[]} - elements that are found
     */
    x(visibleElements, event, options) {
      return filterElements(visibleElements, event, {
        intersect: options.intersect,
        axis: 'x'
      });
    },
    /**
     * y mode returns the elements that hit-test at the current y coordinate
     * @param {AnnotationElement[]} visibleElements - annotation elements which are visible
     * @param {ChartEvent} event - the event we are find things at
     * @param {Object} options - interaction options to use
     * @return {AnnotationElement[]} - elements that are found
     */
    y(visibleElements, event, options) {
      return filterElements(visibleElements, event, {
        intersect: options.intersect,
        axis: 'y'
      });
    }
  }
};

/**
 * Returns all elements that hit test based on the event position
 * @param {AnnotationElement[]} visibleElements - annotation elements which are visible
 * @param {ChartEvent} event - the event we are find things at
 * @param {Object} options - interaction options to use
 * @return {AnnotationElement[]} - elements that are found
 */
function getElements(visibleElements, event, options) {
  const mode = interaction.modes[options.mode] || interaction.modes.nearest;
  return mode(visibleElements, event, options);
}
function inRangeByAxis(element, event, axis) {
  if (axis !== 'x' && axis !== 'y') {
    return element.inRange(event.x, event.y, 'x', true) || element.inRange(event.x, event.y, 'y', true);
  }
  return element.inRange(event.x, event.y, axis, true);
}
function getPointByAxis(event, center, axis) {
  if (axis === 'x') {
    return {
      x: event.x,
      y: center.y
    };
  } else if (axis === 'y') {
    return {
      x: center.x,
      y: event.y
    };
  }
  return center;
}
function filterElements(visibleElements, event, options) {
  return visibleElements.filter(element => options.intersect ? element.inRange(event.x, event.y) : inRangeByAxis(element, event, options.axis));
}
function getNearestItem(visibleElements, event, options) {
  let minDistance = Number.POSITIVE_INFINITY;
  return filterElements(visibleElements, event, options).reduce((nearestItems, element) => {
    const center = element.getCenterPoint();
    const evenPoint = getPointByAxis(event, center, options.axis);
    const distance = (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.distanceBetweenPoints)(event, evenPoint);
    if (distance < minDistance) {
      nearestItems = [element];
      minDistance = distance;
    } else if (distance === minDistance) {
      // Can have multiple items at the same distance in which case we sort by size
      nearestItems.push(element);
    }
    return nearestItems;
  }, []).sort((a, b) => a._index - b._index).slice(0, 1); // return only the top item;
}

/**
 * @typedef {import('chart.js').Point} Point
 */

/**
 * Rotate a `point` relative to `center` point by `angle`
 * @param {Point} point - the point to rotate
 * @param {Point} center - center point for rotation
 * @param {number} angle - angle for rotation, in radians
 * @returns {Point} rotated point
 */
function rotated(point, center, angle) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const cx = center.x;
  const cy = center.y;
  return {
    x: cx + cos * (point.x - cx) - sin * (point.y - cy),
    y: cy + sin * (point.x - cx) + cos * (point.y - cy)
  };
}
const isOlderPart = (act, req) => req > act || act.length > req.length && act.slice(0, req.length) === req;

/**
 * @typedef { import('chart.js').Point } Point
 * @typedef { import('chart.js').InteractionAxis } InteractionAxis
 * @typedef { import('../../types/element').AnnotationElement } AnnotationElement
 */

const EPSILON = 0.001;
const clamp = (x, from, to) => Math.min(to, Math.max(from, x));

/**
 * @param {{value: number, start: number, end: number}} limit
 * @param {number} hitSize
 * @returns {boolean}
 */
const inLimit = (limit, hitSize) => limit.value >= limit.start - hitSize && limit.value <= limit.end + hitSize;

/**
 * @param {Object} obj
 * @param {number} from
 * @param {number} to
 * @returns {Object}
 */
function clampAll(obj, from, to) {
  for (const key of Object.keys(obj)) {
    obj[key] = clamp(obj[key], from, to);
  }
  return obj;
}

/**
 * @param {Point} point
 * @param {Point} center
 * @param {number} radius
 * @param {number} hitSize
 * @returns {boolean}
 */
function inPointRange(point, center, radius, hitSize) {
  if (!point || !center || radius <= 0) {
    return false;
  }
  return Math.pow(point.x - center.x, 2) + Math.pow(point.y - center.y, 2) <= Math.pow(radius + hitSize, 2);
}

/**
 * @param {Point} point
 * @param {{x: number, y: number, x2: number, y2: number}} rect
 * @param {InteractionAxis} axis
 * @param {{borderWidth: number, hitTolerance: number}} hitsize
 * @returns {boolean}
 */
function inBoxRange(point, {
  x,
  y,
  x2,
  y2
}, axis, {
  borderWidth,
  hitTolerance
}) {
  const hitSize = (borderWidth + hitTolerance) / 2;
  const inRangeX = point.x >= x - hitSize - EPSILON && point.x <= x2 + hitSize + EPSILON;
  const inRangeY = point.y >= y - hitSize - EPSILON && point.y <= y2 + hitSize + EPSILON;
  if (axis === 'x') {
    return inRangeX;
  } else if (axis === 'y') {
    return inRangeY;
  }
  return inRangeX && inRangeY;
}

/**
 * @param {Point} point
 * @param {rect: {x: number, y: number, x2: number, y2: number}, center: {x: number, y: number}} element
 * @param {InteractionAxis} axis
 * @param {{rotation: number, borderWidth: number, hitTolerance: number}}
 * @returns {boolean}
 */
function inLabelRange(point, {
  rect,
  center
}, axis, {
  rotation,
  borderWidth,
  hitTolerance
}) {
  const rotPoint = rotated(point, center, (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.toRadians)(-rotation));
  return inBoxRange(rotPoint, rect, axis, {
    borderWidth,
    hitTolerance
  });
}

/**
 * @param {AnnotationElement} element
 * @param {boolean} useFinalPosition
 * @returns {Point}
 */
function getElementCenterPoint(element, useFinalPosition) {
  const {
    centerX,
    centerY
  } = element.getProps(['centerX', 'centerY'], useFinalPosition);
  return {
    x: centerX,
    y: centerY
  };
}

/**
 * @param {string} pkg
 * @param {string} min
 * @param {string} ver
 * @param {boolean} [strict=true]
 * @returns {boolean}
 */
function requireVersion(pkg, min, ver, strict = true) {
  const parts = ver.split('.');
  let i = 0;
  for (const req of min.split('.')) {
    const act = parts[i++];
    if (parseInt(req, 10) < parseInt(act, 10)) {
      break;
    }
    if (isOlderPart(act, req)) {
      if (strict) {
        throw new Error(`${pkg} v${ver} is not supported. v${min} or newer is required.`);
      } else {
        return false;
      }
    }
  }
  return true;
}
const isPercentString = s => typeof s === 'string' && s.endsWith('%');
const toPercent = s => parseFloat(s) / 100;
const toPositivePercent = s => clamp(toPercent(s), 0, 1);
const boxAppering = (x, y) => ({
  x,
  y,
  x2: x,
  y2: y,
  width: 0,
  height: 0
});
const defaultInitAnimation = {
  box: properties => boxAppering(properties.centerX, properties.centerY),
  doughnutLabel: properties => boxAppering(properties.centerX, properties.centerY),
  ellipse: properties => ({
    centerX: properties.centerX,
    centerY: properties.centerX,
    radius: 0,
    width: 0,
    height: 0
  }),
  label: properties => boxAppering(properties.centerX, properties.centerY),
  line: properties => boxAppering(properties.x, properties.y),
  point: properties => ({
    centerX: properties.centerX,
    centerY: properties.centerY,
    radius: 0,
    width: 0,
    height: 0
  }),
  polygon: properties => boxAppering(properties.centerX, properties.centerY)
};

/**
 * @typedef { import('chart.js').FontSpec } FontSpec
 * @typedef { import('chart.js').Point } Point
 * @typedef { import('chart.js').Padding } Padding
 * @typedef { import('../../types/element').AnnotationBoxModel } AnnotationBoxModel
 * @typedef { import('../../types/element').AnnotationElement } AnnotationElement
 * @typedef { import('../../types/options').AnnotationPointCoordinates } AnnotationPointCoordinates
 * @typedef { import('../../types/label').CoreLabelOptions } CoreLabelOptions
 * @typedef { import('../../types/label').LabelPositionObject } LabelPositionObject
 */

/**
 * @param {number} size
 * @param {number|string} position
 * @returns {number}
 */
function getRelativePosition(size, position) {
  if (position === 'start') {
    return 0;
  }
  if (position === 'end') {
    return size;
  }
  if (isPercentString(position)) {
    return toPositivePercent(position) * size;
  }
  return size / 2;
}

/**
 * @param {number} size
 * @param {number|string} value
 * @param {boolean} [positivePercent=true]
 * @returns {number}
 */
function getSize(size, value, positivePercent = true) {
  if (typeof value === 'number') {
    return value;
  } else if (isPercentString(value)) {
    return (positivePercent ? toPositivePercent(value) : toPercent(value)) * size;
  }
  return size;
}

/**
 * @param {{x: number, width: number}} size
 * @param {CoreLabelOptions} options
 * @returns {number}
 */
function calculateTextAlignment(size, options) {
  const {
    x,
    width
  } = size;
  const textAlign = options.textAlign;
  if (textAlign === 'center') {
    return x + width / 2;
  } else if (textAlign === 'end' || textAlign === 'right') {
    return x + width;
  }
  return x;
}

/**
 * @param {Point} point
 * @param {{height: number, width: number}} labelSize
 * @param {{borderWidth: number, position: {LabelPositionObject|string}, xAdjust: number, yAdjust: number}} options
 * @param {Padding|undefined} padding
 * @returns {{x: number, y: number, x2: number, y2: number, height: number, width: number, centerX: number, centerY: number}}
 */
function measureLabelRectangle(point, labelSize, {
  borderWidth,
  position,
  xAdjust,
  yAdjust
}, padding) {
  const hasPadding = (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.isObject)(padding);
  const width = labelSize.width + (hasPadding ? padding.width : 0) + borderWidth;
  const height = labelSize.height + (hasPadding ? padding.height : 0) + borderWidth;
  const positionObj = toPosition(position);
  const x = calculateLabelPosition$1(point.x, width, xAdjust, positionObj.x);
  const y = calculateLabelPosition$1(point.y, height, yAdjust, positionObj.y);
  return {
    x,
    y,
    x2: x + width,
    y2: y + height,
    width,
    height,
    centerX: x + width / 2,
    centerY: y + height / 2
  };
}

/**
 * @param {LabelPositionObject|string} value
 * @param {string|number} defaultValue
 * @returns {LabelPositionObject}
 */
function toPosition(value, defaultValue = 'center') {
  if ((0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.isObject)(value)) {
    return {
      x: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.valueOrDefault)(value.x, defaultValue),
      y: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.valueOrDefault)(value.y, defaultValue)
    };
  }
  value = (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.valueOrDefault)(value, defaultValue);
  return {
    x: value,
    y: value
  };
}

/**
 * @param {CoreLabelOptions} options
 * @param {number} fitRatio
 * @returns {boolean}
 */
const shouldFit = (options, fitRatio) => options && options.autoFit && fitRatio < 1;

/**
 * @param {CoreLabelOptions} options
 * @param {number} fitRatio
 * @returns {FontSpec[]}
 */
function toFonts(options, fitRatio) {
  const optFont = options.font;
  const fonts = (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.isArray)(optFont) ? optFont : [optFont];
  if (shouldFit(options, fitRatio)) {
    return fonts.map(function (f) {
      const font = (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.toFont)(f);
      font.size = Math.floor(f.size * fitRatio);
      font.lineHeight = f.lineHeight;
      return (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.toFont)(font);
    });
  }
  return fonts.map(f => (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.toFont)(f));
}

/**
 * @param {AnnotationPointCoordinates} options
 * @returns {boolean}
 */
function isBoundToPoint(options) {
  return options && ((0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.defined)(options.xValue) || (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.defined)(options.yValue));
}
function calculateLabelPosition$1(start, size, adjust = 0, position) {
  return start - getRelativePosition(size, position) + adjust;
}

/**
 * @param {Chart} chart
 * @param {AnnotationBoxModel} properties
 * @param {CoreAnnotationOptions} options
 * @returns {AnnotationElement}
 */
function initAnimationProperties(chart, properties, options) {
  const initAnim = options.init;
  if (!initAnim) {
    return;
  } else if (initAnim === true) {
    return applyDefault(properties, options);
  }
  return execCallback(chart, properties, options);
}

/**
 * @param {Object} options
 * @param {Array} hooks
 * @param {Object} hooksContainer
 * @returns {boolean}
 */
function loadHooks(options, hooks, hooksContainer) {
  let activated = false;
  hooks.forEach(hook => {
    if ((0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.isFunction)(options[hook])) {
      activated = true;
      hooksContainer[hook] = options[hook];
    } else if ((0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.defined)(hooksContainer[hook])) {
      delete hooksContainer[hook];
    }
  });
  return activated;
}
function applyDefault(properties, options) {
  const type = options.type || 'line';
  return defaultInitAnimation[type](properties);
}
function execCallback(chart, properties, options) {
  const result = (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.callback)(options.init, [{
    chart,
    properties,
    options
  }]);
  if (result === true) {
    return applyDefault(properties, options);
  } else if ((0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.isObject)(result)) {
    return result;
  }
}
const widthCache = new Map();
const notRadius = radius => isNaN(radius) || radius <= 0;
const fontsKey = fonts => fonts.reduce(function (prev, item) {
  prev += item.string;
  return prev;
}, '');

/**
 * @typedef { import('chart.js').Point } Point
 * @typedef { import('../../types/label').CoreLabelOptions } CoreLabelOptions
 * @typedef { import('../../types/options').PointAnnotationOptions } PointAnnotationOptions
 */

/**
 * Determine if content is an image or a canvas.
 * @param {*} content
 * @returns boolean|undefined
 * @todo move this function to chart.js helpers
 */
function isImageOrCanvas(content) {
  if (content && typeof content === 'object') {
    const type = content.toString();
    return type === '[object HTMLImageElement]' || type === '[object HTMLCanvasElement]';
  }
}

/**
 * Set the translation on the canvas if the rotation must be applied.
 * @param {CanvasRenderingContext2D} ctx - chart canvas context
 * @param {Point} point - the point of translation
 * @param {number} rotation - rotation (in degrees) to apply
 */
function translate(ctx, {
  x,
  y
}, rotation) {
  if (rotation) {
    ctx.translate(x, y);
    ctx.rotate((0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.toRadians)(rotation));
    ctx.translate(-x, -y);
  }
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} options
 * @returns {boolean|undefined}
 */
function setBorderStyle(ctx, options) {
  if (options && options.borderWidth) {
    ctx.lineCap = options.borderCapStyle || 'butt';
    ctx.setLineDash(options.borderDash);
    ctx.lineDashOffset = options.borderDashOffset;
    ctx.lineJoin = options.borderJoinStyle || 'miter';
    ctx.lineWidth = options.borderWidth;
    ctx.strokeStyle = options.borderColor;
    return true;
  }
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} options
 */
function setShadowStyle(ctx, options) {
  ctx.shadowColor = options.backgroundShadowColor;
  ctx.shadowBlur = options.shadowBlur;
  ctx.shadowOffsetX = options.shadowOffsetX;
  ctx.shadowOffsetY = options.shadowOffsetY;
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {CoreLabelOptions} options
 * @returns {{width: number, height: number}}
 */
function measureLabelSize(ctx, options) {
  const content = options.content;
  if (isImageOrCanvas(content)) {
    const size = {
      width: getSize(content.width, options.width),
      height: getSize(content.height, options.height)
    };
    return size;
  }
  const fonts = toFonts(options);
  const strokeWidth = options.textStrokeWidth;
  const lines = (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.isArray)(content) ? content : [content];
  const mapKey = lines.join() + fontsKey(fonts) + strokeWidth + (ctx._measureText ? '-spriting' : '');
  if (!widthCache.has(mapKey)) {
    widthCache.set(mapKey, calculateLabelSize(ctx, lines, fonts, strokeWidth));
  }
  return widthCache.get(mapKey);
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {{x: number, y: number, width: number, height: number}} rect
 * @param {Object} options
 */
function drawBox(ctx, rect, options) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  ctx.save();
  setShadowStyle(ctx, options);
  const stroke = setBorderStyle(ctx, options);
  ctx.fillStyle = options.backgroundColor;
  ctx.beginPath();
  (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.addRoundedRectPath)(ctx, {
    x,
    y,
    w: width,
    h: height,
    radius: clampAll((0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.toTRBLCorners)(options.borderRadius), 0, Math.min(width, height) / 2)
  });
  ctx.closePath();
  ctx.fill();
  if (stroke) {
    ctx.shadowColor = options.borderShadowColor;
    ctx.stroke();
  }
  ctx.restore();
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {{x: number, y: number, width: number, height: number}} rect
 * @param {CoreLabelOptions} options
 * @param {number} fitRatio
 */
function drawLabel(ctx, rect, options, fitRatio) {
  const content = options.content;
  if (isImageOrCanvas(content)) {
    ctx.save();
    ctx.globalAlpha = getOpacity(options.opacity, content.style.opacity);
    ctx.drawImage(content, rect.x, rect.y, rect.width, rect.height);
    ctx.restore();
    return;
  }
  const labels = (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.isArray)(content) ? content : [content];
  const fonts = toFonts(options, fitRatio);
  const optColor = options.color;
  const colors = (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.isArray)(optColor) ? optColor : [optColor];
  const x = calculateTextAlignment(rect, options);
  const y = rect.y + options.textStrokeWidth / 2;
  ctx.save();
  ctx.textBaseline = 'middle';
  ctx.textAlign = options.textAlign;
  if (setTextStrokeStyle(ctx, options)) {
    applyLabelDecoration(ctx, {
      x,
      y
    }, labels, fonts);
  }
  applyLabelContent(ctx, {
    x,
    y
  }, labels, {
    fonts,
    colors
  });
  ctx.restore();
}
function setTextStrokeStyle(ctx, options) {
  if (options.textStrokeWidth > 0) {
    // https://stackoverflow.com/questions/13627111/drawing-text-with-an-outer-stroke-with-html5s-canvas
    ctx.lineJoin = 'round';
    ctx.miterLimit = 2;
    ctx.lineWidth = options.textStrokeWidth;
    ctx.strokeStyle = options.textStrokeColor;
    return true;
  }
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {{radius: number, options: PointAnnotationOptions}} element
 * @param {number} x
 * @param {number} y
 */
function drawPoint(ctx, element, x, y) {
  const {
    radius,
    options
  } = element;
  const style = options.pointStyle;
  const rotation = options.rotation;
  let rad = (rotation || 0) * chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.RAD_PER_DEG;
  if (isImageOrCanvas(style)) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rad);
    ctx.drawImage(style, -style.width / 2, -style.height / 2, style.width, style.height);
    ctx.restore();
    return;
  }
  if (notRadius(radius)) {
    return;
  }
  drawPointStyle(ctx, {
    x,
    y,
    radius,
    rotation,
    style,
    rad
  });
}
function drawPointStyle(ctx, {
  x,
  y,
  radius,
  rotation,
  style,
  rad
}) {
  let xOffset, yOffset, size, cornerRadius;
  ctx.beginPath();
  switch (style) {
    // Default includes circle
    default:
      ctx.arc(x, y, radius, 0, chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.TAU);
      ctx.closePath();
      break;
    case 'triangle':
      ctx.moveTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
      rad += chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.TWO_THIRDS_PI;
      ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
      rad += chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.TWO_THIRDS_PI;
      ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
      ctx.closePath();
      break;
    case 'rectRounded':
      // NOTE: the rounded rect implementation changed to use `arc` instead of
      // `quadraticCurveTo` since it generates better results when rect is
      // almost a circle. 0.516 (instead of 0.5) produces results with visually
      // closer proportion to the previous impl and it is inscribed in the
      // circle with `radius`. For more details, see the following PRs:
      // https://github.com/chartjs/Chart.js/issues/5597
      // https://github.com/chartjs/Chart.js/issues/5858
      cornerRadius = radius * 0.516;
      size = radius - cornerRadius;
      xOffset = Math.cos(rad + chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.QUARTER_PI) * size;
      yOffset = Math.sin(rad + chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.QUARTER_PI) * size;
      ctx.arc(x - xOffset, y - yOffset, cornerRadius, rad - chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.PI, rad - chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.HALF_PI);
      ctx.arc(x + yOffset, y - xOffset, cornerRadius, rad - chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.HALF_PI, rad);
      ctx.arc(x + xOffset, y + yOffset, cornerRadius, rad, rad + chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.HALF_PI);
      ctx.arc(x - yOffset, y + xOffset, cornerRadius, rad + chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.HALF_PI, rad + chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.PI);
      ctx.closePath();
      break;
    case 'rect':
      if (!rotation) {
        size = Math.SQRT1_2 * radius;
        ctx.rect(x - size, y - size, 2 * size, 2 * size);
        break;
      }
      rad += chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.QUARTER_PI;
    /* falls through */
    case 'rectRot':
      xOffset = Math.cos(rad) * radius;
      yOffset = Math.sin(rad) * radius;
      ctx.moveTo(x - xOffset, y - yOffset);
      ctx.lineTo(x + yOffset, y - xOffset);
      ctx.lineTo(x + xOffset, y + yOffset);
      ctx.lineTo(x - yOffset, y + xOffset);
      ctx.closePath();
      break;
    case 'crossRot':
      rad += chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.QUARTER_PI;
    /* falls through */
    case 'cross':
      xOffset = Math.cos(rad) * radius;
      yOffset = Math.sin(rad) * radius;
      ctx.moveTo(x - xOffset, y - yOffset);
      ctx.lineTo(x + xOffset, y + yOffset);
      ctx.moveTo(x + yOffset, y - xOffset);
      ctx.lineTo(x - yOffset, y + xOffset);
      break;
    case 'star':
      xOffset = Math.cos(rad) * radius;
      yOffset = Math.sin(rad) * radius;
      ctx.moveTo(x - xOffset, y - yOffset);
      ctx.lineTo(x + xOffset, y + yOffset);
      ctx.moveTo(x + yOffset, y - xOffset);
      ctx.lineTo(x - yOffset, y + xOffset);
      rad += chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.QUARTER_PI;
      xOffset = Math.cos(rad) * radius;
      yOffset = Math.sin(rad) * radius;
      ctx.moveTo(x - xOffset, y - yOffset);
      ctx.lineTo(x + xOffset, y + yOffset);
      ctx.moveTo(x + yOffset, y - xOffset);
      ctx.lineTo(x - yOffset, y + xOffset);
      break;
    case 'line':
      xOffset = Math.cos(rad) * radius;
      yOffset = Math.sin(rad) * radius;
      ctx.moveTo(x - xOffset, y - yOffset);
      ctx.lineTo(x + xOffset, y + yOffset);
      break;
    case 'dash':
      ctx.moveTo(x, y);
      ctx.lineTo(x + Math.cos(rad) * radius, y + Math.sin(rad) * radius);
      break;
  }
  ctx.fill();
}
function calculateLabelSize(ctx, lines, fonts, strokeWidth) {
  ctx.save();
  const count = lines.length;
  let width = 0;
  let height = strokeWidth;
  for (let i = 0; i < count; i++) {
    const font = fonts[Math.min(i, fonts.length - 1)];
    ctx.font = font.string;
    const text = lines[i];
    width = Math.max(width, ctx.measureText(text).width + strokeWidth);
    height += font.lineHeight;
  }
  ctx.restore();
  return {
    width,
    height
  };
}
function applyLabelDecoration(ctx, {
  x,
  y
}, labels, fonts) {
  ctx.beginPath();
  let lhs = 0;
  labels.forEach(function (l, i) {
    const f = fonts[Math.min(i, fonts.length - 1)];
    const lh = f.lineHeight;
    ctx.font = f.string;
    ctx.strokeText(l, x, y + lh / 2 + lhs);
    lhs += lh;
  });
  ctx.stroke();
}
function applyLabelContent(ctx, {
  x,
  y
}, labels, {
  fonts,
  colors
}) {
  let lhs = 0;
  labels.forEach(function (l, i) {
    const c = colors[Math.min(i, colors.length - 1)];
    const f = fonts[Math.min(i, fonts.length - 1)];
    const lh = f.lineHeight;
    ctx.beginPath();
    ctx.font = f.string;
    ctx.fillStyle = c;
    ctx.fillText(l, x, y + lh / 2 + lhs);
    lhs += lh;
    ctx.fill();
  });
}
function getOpacity(value, elementValue) {
  const opacity = (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.isNumber)(value) ? value : elementValue;
  return (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.isNumber)(opacity) ? clamp(opacity, 0, 1) : 1;
}
const positions = ['left', 'bottom', 'top', 'right'];

/**
 * @typedef { import('../../types/element').AnnotationElement } AnnotationElement
 */

/**
 * Drawa the callout component for labels.
 * @param {CanvasRenderingContext2D} ctx - chart canvas context
 * @param {AnnotationElement} element - the label element
 */
function drawCallout(ctx, element) {
  const {
    pointX,
    pointY,
    options
  } = element;
  const callout = options.callout;
  const calloutPosition = callout && callout.display && resolveCalloutPosition(element, callout);
  if (!calloutPosition || isPointInRange(element, callout, calloutPosition)) {
    return;
  }
  ctx.save();
  ctx.beginPath();
  const stroke = setBorderStyle(ctx, callout);
  if (!stroke) {
    return ctx.restore();
  }
  const {
    separatorStart,
    separatorEnd
  } = getCalloutSeparatorCoord(element, calloutPosition);
  const {
    sideStart,
    sideEnd
  } = getCalloutSideCoord(element, calloutPosition, separatorStart);
  if (callout.margin > 0 || options.borderWidth === 0) {
    ctx.moveTo(separatorStart.x, separatorStart.y);
    ctx.lineTo(separatorEnd.x, separatorEnd.y);
  }
  ctx.moveTo(sideStart.x, sideStart.y);
  ctx.lineTo(sideEnd.x, sideEnd.y);
  const rotatedPoint = rotated({
    x: pointX,
    y: pointY
  }, element.getCenterPoint(), (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.toRadians)(-element.rotation));
  ctx.lineTo(rotatedPoint.x, rotatedPoint.y);
  ctx.stroke();
  ctx.restore();
}
function getCalloutSeparatorCoord(element, position) {
  const {
    x,
    y,
    x2,
    y2
  } = element;
  const adjust = getCalloutSeparatorAdjust(element, position);
  let separatorStart, separatorEnd;
  if (position === 'left' || position === 'right') {
    separatorStart = {
      x: x + adjust,
      y
    };
    separatorEnd = {
      x: separatorStart.x,
      y: y2
    };
  } else {
    //  position 'top' or 'bottom'
    separatorStart = {
      x,
      y: y + adjust
    };
    separatorEnd = {
      x: x2,
      y: separatorStart.y
    };
  }
  return {
    separatorStart,
    separatorEnd
  };
}
function getCalloutSeparatorAdjust(element, position) {
  const {
    width,
    height,
    options
  } = element;
  const adjust = options.callout.margin + options.borderWidth / 2;
  if (position === 'right') {
    return width + adjust;
  } else if (position === 'bottom') {
    return height + adjust;
  }
  return -adjust;
}
function getCalloutSideCoord(element, position, separatorStart) {
  const {
    y,
    width,
    height,
    options
  } = element;
  const start = options.callout.start;
  const side = getCalloutSideAdjust(position, options.callout);
  let sideStart, sideEnd;
  if (position === 'left' || position === 'right') {
    sideStart = {
      x: separatorStart.x,
      y: y + getSize(height, start)
    };
    sideEnd = {
      x: sideStart.x + side,
      y: sideStart.y
    };
  } else {
    //  position 'top' or 'bottom'
    sideStart = {
      x: separatorStart.x + getSize(width, start),
      y: separatorStart.y
    };
    sideEnd = {
      x: sideStart.x,
      y: sideStart.y + side
    };
  }
  return {
    sideStart,
    sideEnd
  };
}
function getCalloutSideAdjust(position, options) {
  const side = options.side;
  if (position === 'left' || position === 'top') {
    return -side;
  }
  return side;
}
function resolveCalloutPosition(element, options) {
  const position = options.position;
  if (positions.includes(position)) {
    return position;
  }
  return resolveCalloutAutoPosition(element, options);
}
function resolveCalloutAutoPosition(element, options) {
  const {
    x,
    y,
    x2,
    y2,
    width,
    height,
    pointX,
    pointY,
    centerX,
    centerY,
    rotation
  } = element;
  const center = {
    x: centerX,
    y: centerY
  };
  const start = options.start;
  const xAdjust = getSize(width, start);
  const yAdjust = getSize(height, start);
  const xPoints = [x, x + xAdjust, x + xAdjust, x2];
  const yPoints = [y + yAdjust, y2, y, y2];
  const result = [];
  for (let index = 0; index < 4; index++) {
    const rotatedPoint = rotated({
      x: xPoints[index],
      y: yPoints[index]
    }, center, (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.toRadians)(rotation));
    result.push({
      position: positions[index],
      distance: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.distanceBetweenPoints)(rotatedPoint, {
        x: pointX,
        y: pointY
      })
    });
  }
  return result.sort((a, b) => a.distance - b.distance)[0].position;
}
function isPointInRange(element, callout, position) {
  const {
    pointX,
    pointY
  } = element;
  const margin = callout.margin;
  let x = pointX;
  let y = pointY;
  if (position === 'left') {
    x += margin;
  } else if (position === 'right') {
    x -= margin;
  } else if (position === 'top') {
    y += margin;
  } else if (position === 'bottom') {
    y -= margin;
  }
  return element.inRange(x, y);
}
const limitedLineScale = {
  xScaleID: {
    min: 'xMin',
    max: 'xMax',
    start: 'left',
    end: 'right',
    startProp: 'x',
    endProp: 'x2'
  },
  yScaleID: {
    min: 'yMin',
    max: 'yMax',
    start: 'bottom',
    end: 'top',
    startProp: 'y',
    endProp: 'y2'
  }
};

/**
 * @typedef { import("chart.js").Chart } Chart
 * @typedef { import("chart.js").Scale } Scale
 * @typedef { import("chart.js").Point } Point
 * @typedef { import('../../types/element').AnnotationBoxModel } AnnotationBoxModel
 * @typedef { import('../../types/options').CoreAnnotationOptions } CoreAnnotationOptions
 * @typedef { import('../../types/options').LineAnnotationOptions } LineAnnotationOptions
 * @typedef { import('../../types/options').PointAnnotationOptions } PointAnnotationOptions
 * @typedef { import('../../types/options').PolygonAnnotationOptions } PolygonAnnotationOptions
 */

/**
 * @param {Scale} scale
 * @param {number|string} value
 * @param {number} fallback
 * @returns {number}
 */
function scaleValue(scale, value, fallback) {
  value = typeof value === 'number' ? value : scale.parse(value);
  return (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.isFinite)(value) ? scale.getPixelForValue(value) : fallback;
}

/**
 * Search the scale defined in chartjs by the axis related to the annotation options key.
 * @param {{ [key: string]: Scale }} scales
 * @param {CoreAnnotationOptions} options
 * @param {string} key
 * @returns {string}
 */
function retrieveScaleID(scales, options, key) {
  const scaleID = options[key];
  if (scaleID || key === 'scaleID') {
    return scaleID;
  }
  const axis = key.charAt(0);
  const axes = Object.values(scales).filter(scale => scale.axis && scale.axis === axis);
  if (axes.length) {
    return axes[0].id;
  }
  return axis;
}

/**
 * @param {Scale} scale
 * @param {{min: number, max: number, start: number, end: number}} options
 * @returns {{start: number, end: number}|undefined}
 */
function getDimensionByScale(scale, options) {
  if (scale) {
    const reverse = scale.options.reverse;
    const start = scaleValue(scale, options.min, reverse ? options.end : options.start);
    const end = scaleValue(scale, options.max, reverse ? options.start : options.end);
    return {
      start,
      end
    };
  }
}

/**
 * @param {Chart} chart
 * @param {CoreAnnotationOptions} options
 * @returns {Point}
 */
function getChartPoint(chart, options) {
  const {
    chartArea,
    scales
  } = chart;
  const xScale = scales[retrieveScaleID(scales, options, 'xScaleID')];
  const yScale = scales[retrieveScaleID(scales, options, 'yScaleID')];
  let x = chartArea.width / 2;
  let y = chartArea.height / 2;
  if (xScale) {
    x = scaleValue(xScale, options.xValue, xScale.left + xScale.width / 2);
  }
  if (yScale) {
    y = scaleValue(yScale, options.yValue, yScale.top + yScale.height / 2);
  }
  return {
    x,
    y
  };
}

/**
 * @param {Chart} chart
 * @param {CoreAnnotationOptions} options
 * @returns {AnnotationBoxModel}
 */
function resolveBoxProperties(chart, options) {
  const scales = chart.scales;
  const xScale = scales[retrieveScaleID(scales, options, 'xScaleID')];
  const yScale = scales[retrieveScaleID(scales, options, 'yScaleID')];
  if (!xScale && !yScale) {
    return {};
  }
  let {
    left: x,
    right: x2
  } = xScale || chart.chartArea;
  let {
    top: y,
    bottom: y2
  } = yScale || chart.chartArea;
  const xDim = getChartDimensionByScale(xScale, {
    min: options.xMin,
    max: options.xMax,
    start: x,
    end: x2
  });
  x = xDim.start;
  x2 = xDim.end;
  const yDim = getChartDimensionByScale(yScale, {
    min: options.yMin,
    max: options.yMax,
    start: y2,
    end: y
  });
  y = yDim.start;
  y2 = yDim.end;
  return {
    x,
    y,
    x2,
    y2,
    width: x2 - x,
    height: y2 - y,
    centerX: x + (x2 - x) / 2,
    centerY: y + (y2 - y) / 2
  };
}

/**
 * @param {Chart} chart
 * @param {PointAnnotationOptions|PolygonAnnotationOptions} options
 * @returns {AnnotationBoxModel}
 */
function resolvePointProperties(chart, options) {
  if (!isBoundToPoint(options)) {
    const box = resolveBoxProperties(chart, options);
    let radius = options.radius;
    if (!radius || isNaN(radius)) {
      radius = Math.min(box.width, box.height) / 2;
      options.radius = radius;
    }
    const size = radius * 2;
    const adjustCenterX = box.centerX + options.xAdjust;
    const adjustCenterY = box.centerY + options.yAdjust;
    return {
      x: adjustCenterX - radius,
      y: adjustCenterY - radius,
      x2: adjustCenterX + radius,
      y2: adjustCenterY + radius,
      centerX: adjustCenterX,
      centerY: adjustCenterY,
      width: size,
      height: size,
      radius
    };
  }
  return getChartCircle(chart, options);
}
/**
 * @param {Chart} chart
 * @param {LineAnnotationOptions} options
 * @returns {AnnotationBoxModel}
 */
function resolveLineProperties(chart, options) {
  const {
    scales,
    chartArea
  } = chart;
  const scale = scales[options.scaleID];
  const area = {
    x: chartArea.left,
    y: chartArea.top,
    x2: chartArea.right,
    y2: chartArea.bottom
  };
  if (scale) {
    resolveFullLineProperties(scale, area, options);
  } else {
    resolveLimitedLineProperties(scales, area, options);
  }
  return area;
}

/**
 * @param {Chart} chart
 * @param {CoreAnnotationOptions} options
 * @param {boolean} [centerBased=false]
 * @returns {AnnotationBoxModel}
 */
function resolveBoxAndLabelProperties(chart, options) {
  const properties = resolveBoxProperties(chart, options);
  properties.initProperties = initAnimationProperties(chart, properties, options);
  properties.elements = [{
    type: 'label',
    optionScope: 'label',
    properties: resolveLabelElementProperties$1(chart, properties, options),
    initProperties: properties.initProperties
  }];
  return properties;
}
function getChartCircle(chart, options) {
  const point = getChartPoint(chart, options);
  const size = options.radius * 2;
  return {
    x: point.x - options.radius + options.xAdjust,
    y: point.y - options.radius + options.yAdjust,
    x2: point.x + options.radius + options.xAdjust,
    y2: point.y + options.radius + options.yAdjust,
    centerX: point.x + options.xAdjust,
    centerY: point.y + options.yAdjust,
    radius: options.radius,
    width: size,
    height: size
  };
}
function getChartDimensionByScale(scale, options) {
  const result = getDimensionByScale(scale, options) || options;
  return {
    start: Math.min(result.start, result.end),
    end: Math.max(result.start, result.end)
  };
}
function resolveFullLineProperties(scale, area, options) {
  const min = scaleValue(scale, options.value, NaN);
  const max = scaleValue(scale, options.endValue, min);
  if (scale.isHorizontal()) {
    area.x = min;
    area.x2 = max;
  } else {
    area.y = min;
    area.y2 = max;
  }
}
function resolveLimitedLineProperties(scales, area, options) {
  for (const scaleId of Object.keys(limitedLineScale)) {
    const scale = scales[retrieveScaleID(scales, options, scaleId)];
    if (scale) {
      const {
        min,
        max,
        start,
        end,
        startProp,
        endProp
      } = limitedLineScale[scaleId];
      const dim = getDimensionByScale(scale, {
        min: options[min],
        max: options[max],
        start: scale[start],
        end: scale[end]
      });
      area[startProp] = dim.start;
      area[endProp] = dim.end;
    }
  }
}
function calculateX({
  properties,
  options
}, labelSize, position, padding) {
  const {
    x: start,
    x2: end,
    width: size
  } = properties;
  return calculatePosition({
    start,
    end,
    size,
    borderWidth: options.borderWidth
  }, {
    position: position.x,
    padding: {
      start: padding.left,
      end: padding.right
    },
    adjust: options.label.xAdjust,
    size: labelSize.width
  });
}
function calculateY({
  properties,
  options
}, labelSize, position, padding) {
  const {
    y: start,
    y2: end,
    height: size
  } = properties;
  return calculatePosition({
    start,
    end,
    size,
    borderWidth: options.borderWidth
  }, {
    position: position.y,
    padding: {
      start: padding.top,
      end: padding.bottom
    },
    adjust: options.label.yAdjust,
    size: labelSize.height
  });
}
function calculatePosition(boxOpts, labelOpts) {
  const {
    start,
    end,
    borderWidth
  } = boxOpts;
  const {
    position,
    padding: {
      start: padStart,
      end: padEnd
    },
    adjust
  } = labelOpts;
  const availableSize = end - borderWidth - start - padStart - padEnd - labelOpts.size;
  return start + borderWidth / 2 + adjust + getRelativePosition(availableSize, position);
}
function resolveLabelElementProperties$1(chart, properties, options) {
  const label = options.label;
  label.backgroundColor = 'transparent';
  label.callout.display = false;
  const position = toPosition(label.position);
  const padding = (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.toPadding)(label.padding);
  const labelSize = measureLabelSize(chart.ctx, label);
  const x = calculateX({
    properties,
    options
  }, labelSize, position, padding);
  const y = calculateY({
    properties,
    options
  }, labelSize, position, padding);
  const width = labelSize.width + padding.width;
  const height = labelSize.height + padding.height;
  return {
    x,
    y,
    x2: x + width,
    y2: y + height,
    width,
    height,
    centerX: x + width / 2,
    centerY: y + height / 2,
    rotation: label.rotation
  };
}
const moveHooks = ['enter', 'leave'];

/**
 * @typedef { import("chart.js").Chart } Chart
 * @typedef { import('../../types/options').AnnotationPluginOptions } AnnotationPluginOptions
 */

const eventHooks = moveHooks.concat('click');

/**
 * @param {Chart} chart
 * @param {Object} state
 * @param {AnnotationPluginOptions} options
 */
function updateListeners(chart, state, options) {
  state.listened = loadHooks(options, eventHooks, state.listeners);
  state.moveListened = false;
  moveHooks.forEach(hook => {
    if ((0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.isFunction)(options[hook])) {
      state.moveListened = true;
    }
  });
  if (!state.listened || !state.moveListened) {
    state.annotations.forEach(scope => {
      if (!state.listened && (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.isFunction)(scope.click)) {
        state.listened = true;
      }
      if (!state.moveListened) {
        moveHooks.forEach(hook => {
          if ((0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.isFunction)(scope[hook])) {
            state.listened = true;
            state.moveListened = true;
          }
        });
      }
    });
  }
}

/**
 * @param {Object} state
 * @param {ChartEvent} event
 * @param {AnnotationPluginOptions} options
 * @return {boolean|undefined}
 */
function handleEvent(state, event, options) {
  if (state.listened) {
    switch (event.type) {
      case 'mousemove':
      case 'mouseout':
        return handleMoveEvents(state, event, options);
      case 'click':
        return handleClickEvents(state, event, options);
    }
  }
}
function handleMoveEvents(state, event, options) {
  if (!state.moveListened) {
    return;
  }
  let elements;
  if (event.type === 'mousemove') {
    elements = getElements(state.visibleElements, event, options.interaction);
  } else {
    elements = [];
  }
  const previous = state.hovered;
  state.hovered = elements;
  const context = {
    state,
    event
  };
  let changed = dispatchMoveEvents(context, 'leave', previous, elements);
  return dispatchMoveEvents(context, 'enter', elements, previous) || changed;
}
function dispatchMoveEvents({
  state,
  event
}, hook, elements, checkElements) {
  let changed;
  for (const element of elements) {
    if (checkElements.indexOf(element) < 0) {
      changed = dispatchEvent(element.options[hook] || state.listeners[hook], element, event) || changed;
    }
  }
  return changed;
}
function handleClickEvents(state, event, options) {
  const listeners = state.listeners;
  const elements = getElements(state.visibleElements, event, options.interaction);
  let changed;
  for (const element of elements) {
    changed = dispatchEvent(element.options.click || listeners.click, element, event) || changed;
  }
  return changed;
}
function dispatchEvent(handler, element, event) {
  return (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.callback)(handler, [element.$context, event]) === true;
}

/**
 * @typedef { import("chart.js").Chart } Chart
 * @typedef { import('../../types/options').AnnotationPluginOptions } AnnotationPluginOptions
 * @typedef { import('../../types/element').AnnotationElement } AnnotationElement
 */

const elementHooks = ['afterDraw', 'beforeDraw'];

/**
 * @param {Chart} chart
 * @param {Object} state
 * @param {AnnotationPluginOptions} options
 */
function updateHooks(chart, state, options) {
  const visibleElements = state.visibleElements;
  state.hooked = loadHooks(options, elementHooks, state.hooks);
  if (!state.hooked) {
    visibleElements.forEach(scope => {
      if (!state.hooked) {
        elementHooks.forEach(hook => {
          if ((0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.isFunction)(scope.options[hook])) {
            state.hooked = true;
          }
        });
      }
    });
  }
}

/**
 * @param {Object} state
 * @param {AnnotationElement} element
 * @param {string} hook
 */
function invokeHook(state, element, hook) {
  if (state.hooked) {
    const callbackHook = element.options[hook] || state.hooks[hook];
    return (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.callback)(callbackHook, [element.$context]);
  }
}

/**
 * @typedef { import("chart.js").Chart } Chart
 * @typedef { import("chart.js").Scale } Scale
 * @typedef { import('../../types/options').CoreAnnotationOptions } CoreAnnotationOptions
 */

/**
 * @param {Chart} chart
 * @param {Scale} scale
 * @param {CoreAnnotationOptions[]} annotations
 */
function adjustScaleRange(chart, scale, annotations) {
  const range = getScaleLimits(chart.scales, scale, annotations);
  let changed = changeScaleLimit(scale, range, 'min', 'suggestedMin');
  changed = changeScaleLimit(scale, range, 'max', 'suggestedMax') || changed;
  if (changed && (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.isFunction)(scale.handleTickRangeOptions)) {
    scale.handleTickRangeOptions();
  }
}

/**
 * @param {CoreAnnotationOptions[]} annotations
 * @param {{ [key: string]: Scale }} scales
 */
function verifyScaleOptions(annotations, scales) {
  for (const annotation of annotations) {
    verifyScaleIDs(annotation, scales);
  }
}
function changeScaleLimit(scale, range, limit, suggestedLimit) {
  if ((0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.isFinite)(range[limit]) && !scaleLimitDefined(scale.options, limit, suggestedLimit)) {
    const changed = scale[limit] !== range[limit];
    scale[limit] = range[limit];
    return changed;
  }
}
function scaleLimitDefined(scaleOptions, limit, suggestedLimit) {
  return (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.defined)(scaleOptions[limit]) || (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.defined)(scaleOptions[suggestedLimit]);
}
function verifyScaleIDs(annotation, scales) {
  for (const key of ['scaleID', 'xScaleID', 'yScaleID']) {
    const scaleID = retrieveScaleID(scales, annotation, key);
    if (scaleID && !scales[scaleID] && verifyProperties(annotation, key)) {
      console.warn(`No scale found with id '${scaleID}' for annotation '${annotation.id}'`);
    }
  }
}
function verifyProperties(annotation, key) {
  if (key === 'scaleID') {
    return true;
  }
  const axis = key.charAt(0);
  for (const prop of ['Min', 'Max', 'Value']) {
    if ((0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.defined)(annotation[axis + prop])) {
      return true;
    }
  }
  return false;
}
function getScaleLimits(scales, scale, annotations) {
  const axis = scale.axis;
  const scaleID = scale.id;
  const scaleIDOption = axis + 'ScaleID';
  const limits = {
    min: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.valueOrDefault)(scale.min, Number.NEGATIVE_INFINITY),
    max: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.valueOrDefault)(scale.max, Number.POSITIVE_INFINITY)
  };
  for (const annotation of annotations) {
    if (annotation.scaleID === scaleID) {
      updateLimits(annotation, scale, ['value', 'endValue'], limits);
    } else if (retrieveScaleID(scales, annotation, scaleIDOption) === scaleID) {
      updateLimits(annotation, scale, [axis + 'Min', axis + 'Max', axis + 'Value'], limits);
    }
  }
  return limits;
}
function updateLimits(annotation, scale, props, limits) {
  for (const prop of props) {
    const raw = annotation[prop];
    if ((0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.defined)(raw)) {
      const value = scale.parse(raw);
      limits.min = Math.min(limits.min, value);
      limits.max = Math.max(limits.max, value);
    }
  }
}
class BoxAnnotation extends chart_js__WEBPACK_IMPORTED_MODULE_2__.Element {
  inRange(mouseX, mouseY, axis, useFinalPosition) {
    const {
      x,
      y
    } = rotated({
      x: mouseX,
      y: mouseY
    }, this.getCenterPoint(useFinalPosition), (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.toRadians)(-this.options.rotation));
    return inBoxRange({
      x,
      y
    }, this.getProps(['x', 'y', 'x2', 'y2'], useFinalPosition), axis, this.options);
  }
  getCenterPoint(useFinalPosition) {
    return getElementCenterPoint(this, useFinalPosition);
  }
  draw(ctx) {
    ctx.save();
    translate(ctx, this.getCenterPoint(), this.options.rotation);
    drawBox(ctx, this, this.options);
    ctx.restore();
  }
  get label() {
    return this.elements && this.elements[0];
  }
  resolveElementProperties(chart, options) {
    return resolveBoxAndLabelProperties(chart, options);
  }
}
BoxAnnotation.id = 'boxAnnotation';
BoxAnnotation.defaults = {
  adjustScaleRange: true,
  backgroundShadowColor: 'transparent',
  borderCapStyle: 'butt',
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: 'miter',
  borderRadius: 0,
  borderShadowColor: 'transparent',
  borderWidth: 1,
  display: true,
  init: undefined,
  hitTolerance: 0,
  label: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    callout: {
      display: false
    },
    color: 'black',
    content: null,
    display: false,
    drawTime: undefined,
    font: {
      family: undefined,
      lineHeight: undefined,
      size: undefined,
      style: undefined,
      weight: 'bold'
    },
    height: undefined,
    hitTolerance: undefined,
    opacity: undefined,
    padding: 6,
    position: 'center',
    rotation: undefined,
    textAlign: 'start',
    textStrokeColor: undefined,
    textStrokeWidth: 0,
    width: undefined,
    xAdjust: 0,
    yAdjust: 0,
    z: undefined
  },
  rotation: 0,
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  xMax: undefined,
  xMin: undefined,
  xScaleID: undefined,
  yMax: undefined,
  yMin: undefined,
  yScaleID: undefined,
  z: 0
};
BoxAnnotation.defaultRoutes = {
  borderColor: 'color',
  backgroundColor: 'color'
};
BoxAnnotation.descriptors = {
  label: {
    _fallback: true
  }
};
class DoughnutLabelAnnotation extends chart_js__WEBPACK_IMPORTED_MODULE_2__.Element {
  inRange(mouseX, mouseY, axis, useFinalPosition) {
    return inLabelRange({
      x: mouseX,
      y: mouseY
    }, {
      rect: this.getProps(['x', 'y', 'x2', 'y2'], useFinalPosition),
      center: this.getCenterPoint(useFinalPosition)
    }, axis, {
      rotation: this.rotation,
      borderWidth: 0,
      hitTolerance: this.options.hitTolerance
    });
  }
  getCenterPoint(useFinalPosition) {
    return getElementCenterPoint(this, useFinalPosition);
  }
  draw(ctx) {
    const options = this.options;
    if (!options.display || !options.content) {
      return;
    }
    drawBackground(ctx, this);
    ctx.save();
    translate(ctx, this.getCenterPoint(), this.rotation);
    drawLabel(ctx, this, options, this._fitRatio);
    ctx.restore();
  }
  resolveElementProperties(chart, options) {
    const meta = getDatasetMeta(chart, options);
    if (!meta) {
      return {};
    }
    const {
      controllerMeta,
      point,
      radius
    } = getControllerMeta(chart, options, meta);
    let labelSize = measureLabelSize(chart.ctx, options);
    const _fitRatio = getFitRatio(labelSize, radius);
    if (shouldFit(options, _fitRatio)) {
      labelSize = {
        width: labelSize.width * _fitRatio,
        height: labelSize.height * _fitRatio
      };
    }
    const {
      position,
      xAdjust,
      yAdjust
    } = options;
    const boxSize = measureLabelRectangle(point, labelSize, {
      borderWidth: 0,
      position,
      xAdjust,
      yAdjust
    });
    return {
      initProperties: initAnimationProperties(chart, boxSize, options),
      ...boxSize,
      ...controllerMeta,
      rotation: options.rotation,
      _fitRatio
    };
  }
}
DoughnutLabelAnnotation.id = 'doughnutLabelAnnotation';
DoughnutLabelAnnotation.defaults = {
  autoFit: true,
  autoHide: true,
  backgroundColor: 'transparent',
  backgroundShadowColor: 'transparent',
  borderColor: 'transparent',
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: 'miter',
  borderShadowColor: 'transparent',
  borderWidth: 0,
  color: 'black',
  content: null,
  display: true,
  font: {
    family: undefined,
    lineHeight: undefined,
    size: undefined,
    style: undefined,
    weight: undefined
  },
  height: undefined,
  hitTolerance: 0,
  init: undefined,
  opacity: undefined,
  position: 'center',
  rotation: 0,
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  spacing: 1,
  textAlign: 'center',
  textStrokeColor: undefined,
  textStrokeWidth: 0,
  width: undefined,
  xAdjust: 0,
  yAdjust: 0
};
DoughnutLabelAnnotation.defaultRoutes = {};
function getDatasetMeta(chart, options) {
  return chart.getSortedVisibleDatasetMetas().reduce(function (result, value) {
    const controller = value.controller;
    if (controller instanceof chart_js__WEBPACK_IMPORTED_MODULE_2__.DoughnutController && isControllerVisible(chart, options, value.data) && (!result || controller.innerRadius < result.controller.innerRadius) && controller.options.circumference >= 90) {
      return value;
    }
    return result;
  }, undefined);
}
function isControllerVisible(chart, options, elements) {
  if (!options.autoHide) {
    return true;
  }
  for (let i = 0; i < elements.length; i++) {
    if (!elements[i].hidden && chart.getDataVisibility(i)) {
      return true;
    }
  }
}
function getControllerMeta({
  chartArea
}, options, meta) {
  const {
    left,
    top,
    right,
    bottom
  } = chartArea;
  const {
    innerRadius,
    offsetX,
    offsetY
  } = meta.controller;
  const x = (left + right) / 2 + offsetX;
  const y = (top + bottom) / 2 + offsetY;
  const square = {
    left: Math.max(x - innerRadius, left),
    right: Math.min(x + innerRadius, right),
    top: Math.max(y - innerRadius, top),
    bottom: Math.min(y + innerRadius, bottom)
  };
  const point = {
    x: (square.left + square.right) / 2,
    y: (square.top + square.bottom) / 2
  };
  const space = options.spacing + options.borderWidth / 2;
  const _radius = innerRadius - space;
  const _counterclockwise = point.y > y;
  const side = _counterclockwise ? top + space : bottom - space;
  const angles = getAngles(side, x, y, _radius);
  const controllerMeta = {
    _centerX: x,
    _centerY: y,
    _radius,
    _counterclockwise,
    ...angles
  };
  return {
    controllerMeta,
    point,
    radius: Math.min(innerRadius, Math.min(square.right - square.left, square.bottom - square.top) / 2)
  };
}
function getFitRatio({
  width,
  height
}, radius) {
  const hypo = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
  return radius * 2 / hypo;
}
function getAngles(y, centerX, centerY, radius) {
  const yk2 = Math.pow(centerY - y, 2);
  const r2 = Math.pow(radius, 2);
  const b = centerX * -2;
  const c = Math.pow(centerX, 2) + yk2 - r2;
  const delta = Math.pow(b, 2) - 4 * c;
  if (delta <= 0) {
    return {
      _startAngle: 0,
      _endAngle: chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.TAU
    };
  }
  const start = (-b - Math.sqrt(delta)) / 2;
  const end = (-b + Math.sqrt(delta)) / 2;
  return {
    _startAngle: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.getAngleFromPoint)({
      x: centerX,
      y: centerY
    }, {
      x: start,
      y
    }).angle,
    _endAngle: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.getAngleFromPoint)({
      x: centerX,
      y: centerY
    }, {
      x: end,
      y
    }).angle
  };
}
function drawBackground(ctx, element) {
  const {
    _centerX,
    _centerY,
    _radius,
    _startAngle,
    _endAngle,
    _counterclockwise,
    options
  } = element;
  ctx.save();
  const stroke = setBorderStyle(ctx, options);
  ctx.fillStyle = options.backgroundColor;
  ctx.beginPath();
  ctx.arc(_centerX, _centerY, _radius, _startAngle, _endAngle, _counterclockwise);
  ctx.closePath();
  ctx.fill();
  if (stroke) {
    ctx.stroke();
  }
  ctx.restore();
}
class LabelAnnotation extends chart_js__WEBPACK_IMPORTED_MODULE_2__.Element {
  inRange(mouseX, mouseY, axis, useFinalPosition) {
    return inLabelRange({
      x: mouseX,
      y: mouseY
    }, {
      rect: this.getProps(['x', 'y', 'x2', 'y2'], useFinalPosition),
      center: this.getCenterPoint(useFinalPosition)
    }, axis, {
      rotation: this.rotation,
      borderWidth: this.options.borderWidth,
      hitTolerance: this.options.hitTolerance
    });
  }
  getCenterPoint(useFinalPosition) {
    return getElementCenterPoint(this, useFinalPosition);
  }
  draw(ctx) {
    const options = this.options;
    const visible = !(0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.defined)(this._visible) || this._visible;
    if (!options.display || !options.content || !visible) {
      return;
    }
    ctx.save();
    translate(ctx, this.getCenterPoint(), this.rotation);
    drawCallout(ctx, this);
    drawBox(ctx, this, options);
    drawLabel(ctx, getLabelSize(this), options);
    ctx.restore();
  }
  resolveElementProperties(chart, options) {
    let point;
    if (!isBoundToPoint(options)) {
      const {
        centerX,
        centerY
      } = resolveBoxProperties(chart, options);
      point = {
        x: centerX,
        y: centerY
      };
    } else {
      point = getChartPoint(chart, options);
    }
    const padding = (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.toPadding)(options.padding);
    const labelSize = measureLabelSize(chart.ctx, options);
    const boxSize = measureLabelRectangle(point, labelSize, options, padding);
    return {
      initProperties: initAnimationProperties(chart, boxSize, options),
      pointX: point.x,
      pointY: point.y,
      ...boxSize,
      rotation: options.rotation
    };
  }
}
LabelAnnotation.id = 'labelAnnotation';
LabelAnnotation.defaults = {
  adjustScaleRange: true,
  backgroundColor: 'transparent',
  backgroundShadowColor: 'transparent',
  borderCapStyle: 'butt',
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: 'miter',
  borderRadius: 0,
  borderShadowColor: 'transparent',
  borderWidth: 0,
  callout: {
    borderCapStyle: 'butt',
    borderColor: undefined,
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: 'miter',
    borderWidth: 1,
    display: false,
    margin: 5,
    position: 'auto',
    side: 5,
    start: '50%'
  },
  color: 'black',
  content: null,
  display: true,
  font: {
    family: undefined,
    lineHeight: undefined,
    size: undefined,
    style: undefined,
    weight: undefined
  },
  height: undefined,
  hitTolerance: 0,
  init: undefined,
  opacity: undefined,
  padding: 6,
  position: 'center',
  rotation: 0,
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  textAlign: 'center',
  textStrokeColor: undefined,
  textStrokeWidth: 0,
  width: undefined,
  xAdjust: 0,
  xMax: undefined,
  xMin: undefined,
  xScaleID: undefined,
  xValue: undefined,
  yAdjust: 0,
  yMax: undefined,
  yMin: undefined,
  yScaleID: undefined,
  yValue: undefined,
  z: 0
};
LabelAnnotation.defaultRoutes = {
  borderColor: 'color'
};
function getLabelSize({
  x,
  y,
  width,
  height,
  options
}) {
  const hBorderWidth = options.borderWidth / 2;
  const padding = (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.toPadding)(options.padding);
  return {
    x: x + padding.left + hBorderWidth,
    y: y + padding.top + hBorderWidth,
    width: width - padding.left - padding.right - options.borderWidth,
    height: height - padding.top - padding.bottom - options.borderWidth
  };
}
const pointInLine = (p1, p2, t) => ({
  x: p1.x + t * (p2.x - p1.x),
  y: p1.y + t * (p2.y - p1.y)
});
const interpolateX = (y, p1, p2) => pointInLine(p1, p2, Math.abs((y - p1.y) / (p2.y - p1.y))).x;
const interpolateY = (x, p1, p2) => pointInLine(p1, p2, Math.abs((x - p1.x) / (p2.x - p1.x))).y;
const sqr = v => v * v;
const rangeLimit = (mouseX, mouseY, {
  x,
  y,
  x2,
  y2
}, axis) => axis === 'y' ? {
  start: Math.min(y, y2),
  end: Math.max(y, y2),
  value: mouseY
} : {
  start: Math.min(x, x2),
  end: Math.max(x, x2),
  value: mouseX
};
// http://www.independent-software.com/determining-coordinates-on-a-html-canvas-bezier-curve.html
const coordInCurve = (start, cp, end, t) => (1 - t) * (1 - t) * start + 2 * (1 - t) * t * cp + t * t * end;
const pointInCurve = (start, cp, end, t) => ({
  x: coordInCurve(start.x, cp.x, end.x, t),
  y: coordInCurve(start.y, cp.y, end.y, t)
});
const coordAngleInCurve = (start, cp, end, t) => 2 * (1 - t) * (cp - start) + 2 * t * (end - cp);
const angleInCurve = (start, cp, end, t) => -Math.atan2(coordAngleInCurve(start.x, cp.x, end.x, t), coordAngleInCurve(start.y, cp.y, end.y, t)) + 0.5 * chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.PI;
class LineAnnotation extends chart_js__WEBPACK_IMPORTED_MODULE_2__.Element {
  inRange(mouseX, mouseY, axis, useFinalPosition) {
    const hitSize = (this.options.borderWidth + this.options.hitTolerance) / 2;
    if (axis !== 'x' && axis !== 'y') {
      const point = {
        mouseX,
        mouseY
      };
      const {
        path,
        ctx
      } = this;
      if (path) {
        setBorderStyle(ctx, this.options);
        ctx.lineWidth += this.options.hitTolerance;
        const {
          chart
        } = this.$context;
        const mx = mouseX * chart.currentDevicePixelRatio;
        const my = mouseY * chart.currentDevicePixelRatio;
        const result = ctx.isPointInStroke(path, mx, my) || isOnLabel(this, point, useFinalPosition);
        ctx.restore();
        return result;
      }
      const epsilon = sqr(hitSize);
      return intersects(this, point, epsilon, useFinalPosition) || isOnLabel(this, point, useFinalPosition);
    }
    return inAxisRange(this, {
      mouseX,
      mouseY
    }, axis, {
      hitSize,
      useFinalPosition
    });
  }
  getCenterPoint(useFinalPosition) {
    return getElementCenterPoint(this, useFinalPosition);
  }
  draw(ctx) {
    const {
      x,
      y,
      x2,
      y2,
      cp,
      options
    } = this;
    ctx.save();
    if (!setBorderStyle(ctx, options)) {
      // no border width, then line is not drawn
      return ctx.restore();
    }
    setShadowStyle(ctx, options);
    const length = Math.sqrt(Math.pow(x2 - x, 2) + Math.pow(y2 - y, 2));
    if (options.curve && cp) {
      drawCurve(ctx, this, cp, length);
      return ctx.restore();
    }
    const {
      startOpts,
      endOpts,
      startAdjust,
      endAdjust
    } = getArrowHeads(this);
    const angle = Math.atan2(y2 - y, x2 - x);
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(0 + startAdjust, 0);
    ctx.lineTo(length - endAdjust, 0);
    ctx.shadowColor = options.borderShadowColor;
    ctx.stroke();
    drawArrowHead(ctx, 0, startAdjust, startOpts);
    drawArrowHead(ctx, length, -endAdjust, endOpts);
    ctx.restore();
  }
  get label() {
    return this.elements && this.elements[0];
  }
  resolveElementProperties(chart, options) {
    const area = resolveLineProperties(chart, options);
    const {
      x,
      y,
      x2,
      y2
    } = area;
    const inside = isLineInArea(area, chart.chartArea);
    const properties = inside ? limitLineToArea({
      x,
      y
    }, {
      x: x2,
      y: y2
    }, chart.chartArea) : {
      x,
      y,
      x2,
      y2,
      width: Math.abs(x2 - x),
      height: Math.abs(y2 - y)
    };
    properties.centerX = (x2 + x) / 2;
    properties.centerY = (y2 + y) / 2;
    properties.initProperties = initAnimationProperties(chart, properties, options);
    if (options.curve) {
      const p1 = {
        x: properties.x,
        y: properties.y
      };
      const p2 = {
        x: properties.x2,
        y: properties.y2
      };
      properties.cp = getControlPoint(properties, options, (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.distanceBetweenPoints)(p1, p2));
    }
    const labelProperties = resolveLabelElementProperties(chart, properties, options.label);
    // additonal prop to manage zoom/pan
    labelProperties._visible = inside;
    properties.elements = [{
      type: 'label',
      optionScope: 'label',
      properties: labelProperties,
      initProperties: properties.initProperties
    }];
    return properties;
  }
}
LineAnnotation.id = 'lineAnnotation';
const arrowHeadsDefaults = {
  backgroundColor: undefined,
  backgroundShadowColor: undefined,
  borderColor: undefined,
  borderDash: undefined,
  borderDashOffset: undefined,
  borderShadowColor: undefined,
  borderWidth: undefined,
  display: undefined,
  fill: undefined,
  length: undefined,
  shadowBlur: undefined,
  shadowOffsetX: undefined,
  shadowOffsetY: undefined,
  width: undefined
};
LineAnnotation.defaults = {
  adjustScaleRange: true,
  arrowHeads: {
    display: false,
    end: Object.assign({}, arrowHeadsDefaults),
    fill: false,
    length: 12,
    start: Object.assign({}, arrowHeadsDefaults),
    width: 6
  },
  borderDash: [],
  borderDashOffset: 0,
  borderShadowColor: 'transparent',
  borderWidth: 2,
  curve: false,
  controlPoint: {
    y: '-50%'
  },
  display: true,
  endValue: undefined,
  init: undefined,
  hitTolerance: 0,
  label: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    backgroundShadowColor: 'transparent',
    borderCapStyle: 'butt',
    borderColor: 'black',
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: 'miter',
    borderRadius: 6,
    borderShadowColor: 'transparent',
    borderWidth: 0,
    callout: Object.assign({}, LabelAnnotation.defaults.callout),
    color: '#fff',
    content: null,
    display: false,
    drawTime: undefined,
    font: {
      family: undefined,
      lineHeight: undefined,
      size: undefined,
      style: undefined,
      weight: 'bold'
    },
    height: undefined,
    hitTolerance: undefined,
    opacity: undefined,
    padding: 6,
    position: 'center',
    rotation: 0,
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    textAlign: 'center',
    textStrokeColor: undefined,
    textStrokeWidth: 0,
    width: undefined,
    xAdjust: 0,
    yAdjust: 0,
    z: undefined
  },
  scaleID: undefined,
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  value: undefined,
  xMax: undefined,
  xMin: undefined,
  xScaleID: undefined,
  yMax: undefined,
  yMin: undefined,
  yScaleID: undefined,
  z: 0
};
LineAnnotation.descriptors = {
  arrowHeads: {
    start: {
      _fallback: true
    },
    end: {
      _fallback: true
    },
    _fallback: true
  }
};
LineAnnotation.defaultRoutes = {
  borderColor: 'color'
};
function inAxisRange(element, {
  mouseX,
  mouseY
}, axis, {
  hitSize,
  useFinalPosition
}) {
  const limit = rangeLimit(mouseX, mouseY, element.getProps(['x', 'y', 'x2', 'y2'], useFinalPosition), axis);
  return inLimit(limit, hitSize) || isOnLabel(element, {
    mouseX,
    mouseY
  }, useFinalPosition, axis);
}
function isLineInArea({
  x,
  y,
  x2,
  y2
}, {
  top,
  right,
  bottom,
  left
}) {
  return !(x < left && x2 < left || x > right && x2 > right || y < top && y2 < top || y > bottom && y2 > bottom);
}
function limitPointToArea({
  x,
  y
}, p2, {
  top,
  right,
  bottom,
  left
}) {
  if (x < left) {
    y = interpolateY(left, {
      x,
      y
    }, p2);
    x = left;
  }
  if (x > right) {
    y = interpolateY(right, {
      x,
      y
    }, p2);
    x = right;
  }
  if (y < top) {
    x = interpolateX(top, {
      x,
      y
    }, p2);
    y = top;
  }
  if (y > bottom) {
    x = interpolateX(bottom, {
      x,
      y
    }, p2);
    y = bottom;
  }
  return {
    x,
    y
  };
}
function limitLineToArea(p1, p2, area) {
  const {
    x,
    y
  } = limitPointToArea(p1, p2, area);
  const {
    x: x2,
    y: y2
  } = limitPointToArea(p2, p1, area);
  return {
    x,
    y,
    x2,
    y2,
    width: Math.abs(x2 - x),
    height: Math.abs(y2 - y)
  };
}
function intersects(element, {
  mouseX,
  mouseY
}, epsilon = EPSILON, useFinalPosition) {
  // Adapted from https://stackoverflow.com/a/6853926/25507
  const {
    x: x1,
    y: y1,
    x2,
    y2
  } = element.getProps(['x', 'y', 'x2', 'y2'], useFinalPosition);
  const dx = x2 - x1;
  const dy = y2 - y1;
  const lenSq = sqr(dx) + sqr(dy);
  const t = lenSq === 0 ? -1 : ((mouseX - x1) * dx + (mouseY - y1) * dy) / lenSq;
  let xx, yy;
  if (t < 0) {
    xx = x1;
    yy = y1;
  } else if (t > 1) {
    xx = x2;
    yy = y2;
  } else {
    xx = x1 + t * dx;
    yy = y1 + t * dy;
  }
  return sqr(mouseX - xx) + sqr(mouseY - yy) <= epsilon;
}
function isOnLabel(element, {
  mouseX,
  mouseY
}, useFinalPosition, axis) {
  const label = element.label;
  return label.options.display && label.inRange(mouseX, mouseY, axis, useFinalPosition);
}
function resolveLabelElementProperties(chart, properties, options) {
  const borderWidth = options.borderWidth;
  const padding = (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.toPadding)(options.padding);
  const textSize = measureLabelSize(chart.ctx, options);
  const width = textSize.width + padding.width + borderWidth;
  const height = textSize.height + padding.height + borderWidth;
  return calculateLabelPosition(properties, options, {
    width,
    height,
    padding
  }, chart.chartArea);
}
function calculateAutoRotation(properties) {
  const {
    x,
    y,
    x2,
    y2
  } = properties;
  const rotation = Math.atan2(y2 - y, x2 - x);
  // Flip the rotation if it goes > PI/2 or < -PI/2, so label stays upright
  return rotation > chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.PI / 2 ? rotation - chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.PI : rotation < chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.PI / -2 ? rotation + chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.PI : rotation;
}
function calculateLabelPosition(properties, label, sizes, chartArea) {
  const {
    width,
    height,
    padding
  } = sizes;
  const {
    xAdjust,
    yAdjust
  } = label;
  const p1 = {
    x: properties.x,
    y: properties.y
  };
  const p2 = {
    x: properties.x2,
    y: properties.y2
  };
  const rotation = label.rotation === 'auto' ? calculateAutoRotation(properties) : (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.toRadians)(label.rotation);
  const size = rotatedSize(width, height, rotation);
  const t = calculateT(properties, label, {
    labelSize: size,
    padding
  }, chartArea);
  const pt = properties.cp ? pointInCurve(p1, properties.cp, p2, t) : pointInLine(p1, p2, t);
  const xCoordinateSizes = {
    size: size.w,
    min: chartArea.left,
    max: chartArea.right,
    padding: padding.left
  };
  const yCoordinateSizes = {
    size: size.h,
    min: chartArea.top,
    max: chartArea.bottom,
    padding: padding.top
  };
  const centerX = adjustLabelCoordinate(pt.x, xCoordinateSizes) + xAdjust;
  const centerY = adjustLabelCoordinate(pt.y, yCoordinateSizes) + yAdjust;
  return {
    x: centerX - width / 2,
    y: centerY - height / 2,
    x2: centerX + width / 2,
    y2: centerY + height / 2,
    centerX,
    centerY,
    pointX: pt.x,
    pointY: pt.y,
    width,
    height,
    rotation: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.toDegrees)(rotation)
  };
}
function rotatedSize(width, height, rotation) {
  const cos = Math.cos(rotation);
  const sin = Math.sin(rotation);
  return {
    w: Math.abs(width * cos) + Math.abs(height * sin),
    h: Math.abs(width * sin) + Math.abs(height * cos)
  };
}
function calculateT(properties, label, sizes, chartArea) {
  let t;
  const space = spaceAround(properties, chartArea);
  if (label.position === 'start') {
    t = calculateTAdjust({
      w: properties.x2 - properties.x,
      h: properties.y2 - properties.y
    }, sizes, label, space);
  } else if (label.position === 'end') {
    t = 1 - calculateTAdjust({
      w: properties.x - properties.x2,
      h: properties.y - properties.y2
    }, sizes, label, space);
  } else {
    t = getRelativePosition(1, label.position);
  }
  return t;
}
function calculateTAdjust(lineSize, sizes, label, space) {
  const {
    labelSize,
    padding
  } = sizes;
  const lineW = lineSize.w * space.dx;
  const lineH = lineSize.h * space.dy;
  const x = lineW > 0 && (labelSize.w / 2 + padding.left - space.x) / lineW;
  const y = lineH > 0 && (labelSize.h / 2 + padding.top - space.y) / lineH;
  return clamp(Math.max(x, y), 0, 0.25);
}
function spaceAround(properties, chartArea) {
  const {
    x,
    x2,
    y,
    y2
  } = properties;
  const t = Math.min(y, y2) - chartArea.top;
  const l = Math.min(x, x2) - chartArea.left;
  const b = chartArea.bottom - Math.max(y, y2);
  const r = chartArea.right - Math.max(x, x2);
  return {
    x: Math.min(l, r),
    y: Math.min(t, b),
    dx: l <= r ? 1 : -1,
    dy: t <= b ? 1 : -1
  };
}
function adjustLabelCoordinate(coordinate, labelSizes) {
  const {
    size,
    min,
    max,
    padding
  } = labelSizes;
  const halfSize = size / 2;
  if (size > max - min) {
    // if it does not fit, display as much as possible
    return (max + min) / 2;
  }
  if (min >= coordinate - padding - halfSize) {
    coordinate = min + padding + halfSize;
  }
  if (max <= coordinate + padding + halfSize) {
    coordinate = max - padding - halfSize;
  }
  return coordinate;
}
function getArrowHeads(line) {
  const options = line.options;
  const arrowStartOpts = options.arrowHeads && options.arrowHeads.start;
  const arrowEndOpts = options.arrowHeads && options.arrowHeads.end;
  return {
    startOpts: arrowStartOpts,
    endOpts: arrowEndOpts,
    startAdjust: getLineAdjust(line, arrowStartOpts),
    endAdjust: getLineAdjust(line, arrowEndOpts)
  };
}
function getLineAdjust(line, arrowOpts) {
  if (!arrowOpts || !arrowOpts.display) {
    return 0;
  }
  const {
    length,
    width
  } = arrowOpts;
  const adjust = line.options.borderWidth / 2;
  const p1 = {
    x: length,
    y: width + adjust
  };
  const p2 = {
    x: 0,
    y: adjust
  };
  return Math.abs(interpolateX(0, p1, p2));
}
function drawArrowHead(ctx, offset, adjust, arrowOpts) {
  if (!arrowOpts || !arrowOpts.display) {
    return;
  }
  const {
    length,
    width,
    fill,
    backgroundColor,
    borderColor
  } = arrowOpts;
  const arrowOffsetX = Math.abs(offset - length) + adjust;
  ctx.beginPath();
  setShadowStyle(ctx, arrowOpts);
  setBorderStyle(ctx, arrowOpts);
  ctx.moveTo(arrowOffsetX, -width);
  ctx.lineTo(offset + adjust, 0);
  ctx.lineTo(arrowOffsetX, width);
  if (fill === true) {
    ctx.fillStyle = backgroundColor || borderColor;
    ctx.closePath();
    ctx.fill();
    ctx.shadowColor = 'transparent';
  } else {
    ctx.shadowColor = arrowOpts.borderShadowColor;
  }
  ctx.stroke();
}
function getControlPoint(properties, options, distance) {
  const {
    x,
    y,
    x2,
    y2,
    centerX,
    centerY
  } = properties;
  const angle = Math.atan2(y2 - y, x2 - x);
  const cp = toPosition(options.controlPoint, 0);
  const point = {
    x: centerX + getSize(distance, cp.x, false),
    y: centerY + getSize(distance, cp.y, false)
  };
  return rotated(point, {
    x: centerX,
    y: centerY
  }, angle);
}
function drawArrowHeadOnCurve(ctx, {
  x,
  y
}, {
  angle,
  adjust
}, arrowOpts) {
  if (!arrowOpts || !arrowOpts.display) {
    return;
  }
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  drawArrowHead(ctx, 0, -adjust, arrowOpts);
  ctx.restore();
}
function drawCurve(ctx, element, cp, length) {
  const {
    x,
    y,
    x2,
    y2,
    options
  } = element;
  const {
    startOpts,
    endOpts,
    startAdjust,
    endAdjust
  } = getArrowHeads(element);
  const p1 = {
    x,
    y
  };
  const p2 = {
    x: x2,
    y: y2
  };
  const startAngle = angleInCurve(p1, cp, p2, 0);
  const endAngle = angleInCurve(p1, cp, p2, 1) - chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.PI;
  const ps = pointInCurve(p1, cp, p2, startAdjust / length);
  const pe = pointInCurve(p1, cp, p2, 1 - endAdjust / length);
  const path = new Path2D();
  ctx.beginPath();
  path.moveTo(ps.x, ps.y);
  path.quadraticCurveTo(cp.x, cp.y, pe.x, pe.y);
  ctx.shadowColor = options.borderShadowColor;
  ctx.stroke(path);
  element.path = path;
  element.ctx = ctx;
  drawArrowHeadOnCurve(ctx, ps, {
    angle: startAngle,
    adjust: startAdjust
  }, startOpts);
  drawArrowHeadOnCurve(ctx, pe, {
    angle: endAngle,
    adjust: endAdjust
  }, endOpts);
}
class EllipseAnnotation extends chart_js__WEBPACK_IMPORTED_MODULE_2__.Element {
  inRange(mouseX, mouseY, axis, useFinalPosition) {
    const rotation = this.options.rotation;
    const hitSize = (this.options.borderWidth + this.options.hitTolerance) / 2;
    if (axis !== 'x' && axis !== 'y') {
      return pointInEllipse({
        x: mouseX,
        y: mouseY
      }, this.getProps(['width', 'height', 'centerX', 'centerY'], useFinalPosition), rotation, hitSize);
    }
    const {
      x,
      y,
      x2,
      y2
    } = this.getProps(['x', 'y', 'x2', 'y2'], useFinalPosition);
    const limit = axis === 'y' ? {
      start: y,
      end: y2
    } : {
      start: x,
      end: x2
    };
    const rotatedPoint = rotated({
      x: mouseX,
      y: mouseY
    }, this.getCenterPoint(useFinalPosition), (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.toRadians)(-rotation));
    return rotatedPoint[axis] >= limit.start - hitSize - EPSILON && rotatedPoint[axis] <= limit.end + hitSize + EPSILON;
  }
  getCenterPoint(useFinalPosition) {
    return getElementCenterPoint(this, useFinalPosition);
  }
  draw(ctx) {
    const {
      width,
      height,
      centerX,
      centerY,
      options
    } = this;
    ctx.save();
    translate(ctx, this.getCenterPoint(), options.rotation);
    setShadowStyle(ctx, this.options);
    ctx.beginPath();
    ctx.fillStyle = options.backgroundColor;
    const stroke = setBorderStyle(ctx, options);
    ctx.ellipse(centerX, centerY, height / 2, width / 2, chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.PI / 2, 0, 2 * chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.PI);
    ctx.fill();
    if (stroke) {
      ctx.shadowColor = options.borderShadowColor;
      ctx.stroke();
    }
    ctx.restore();
  }
  get label() {
    return this.elements && this.elements[0];
  }
  resolveElementProperties(chart, options) {
    return resolveBoxAndLabelProperties(chart, options);
  }
}
EllipseAnnotation.id = 'ellipseAnnotation';
EllipseAnnotation.defaults = {
  adjustScaleRange: true,
  backgroundShadowColor: 'transparent',
  borderDash: [],
  borderDashOffset: 0,
  borderShadowColor: 'transparent',
  borderWidth: 1,
  display: true,
  hitTolerance: 0,
  init: undefined,
  label: Object.assign({}, BoxAnnotation.defaults.label),
  rotation: 0,
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  xMax: undefined,
  xMin: undefined,
  xScaleID: undefined,
  yMax: undefined,
  yMin: undefined,
  yScaleID: undefined,
  z: 0
};
EllipseAnnotation.defaultRoutes = {
  borderColor: 'color',
  backgroundColor: 'color'
};
EllipseAnnotation.descriptors = {
  label: {
    _fallback: true
  }
};
function pointInEllipse(p, ellipse, rotation, hitSize) {
  const {
    width,
    height,
    centerX,
    centerY
  } = ellipse;
  const xRadius = width / 2;
  const yRadius = height / 2;
  if (xRadius <= 0 || yRadius <= 0) {
    return false;
  }
  // https://stackoverflow.com/questions/7946187/point-and-ellipse-rotated-position-test-algorithm
  const angle = (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.toRadians)(rotation || 0);
  const cosAngle = Math.cos(angle);
  const sinAngle = Math.sin(angle);
  const a = Math.pow(cosAngle * (p.x - centerX) + sinAngle * (p.y - centerY), 2);
  const b = Math.pow(sinAngle * (p.x - centerX) - cosAngle * (p.y - centerY), 2);
  return a / Math.pow(xRadius + hitSize, 2) + b / Math.pow(yRadius + hitSize, 2) <= 1.0001;
}
class PointAnnotation extends chart_js__WEBPACK_IMPORTED_MODULE_2__.Element {
  inRange(mouseX, mouseY, axis, useFinalPosition) {
    const {
      x,
      y,
      x2,
      y2,
      width
    } = this.getProps(['x', 'y', 'x2', 'y2', 'width'], useFinalPosition);
    const hitSize = (this.options.borderWidth + this.options.hitTolerance) / 2;
    if (axis !== 'x' && axis !== 'y') {
      return inPointRange({
        x: mouseX,
        y: mouseY
      }, this.getCenterPoint(useFinalPosition), width / 2, hitSize);
    }
    const limit = axis === 'y' ? {
      start: y,
      end: y2,
      value: mouseY
    } : {
      start: x,
      end: x2,
      value: mouseX
    };
    return inLimit(limit, hitSize);
  }
  getCenterPoint(useFinalPosition) {
    return getElementCenterPoint(this, useFinalPosition);
  }
  draw(ctx) {
    const options = this.options;
    const borderWidth = options.borderWidth;
    if (options.radius < 0.1) {
      return;
    }
    ctx.save();
    ctx.fillStyle = options.backgroundColor;
    setShadowStyle(ctx, options);
    const stroke = setBorderStyle(ctx, options);
    drawPoint(ctx, this, this.centerX, this.centerY);
    if (stroke && !isImageOrCanvas(options.pointStyle)) {
      ctx.shadowColor = options.borderShadowColor;
      ctx.stroke();
    }
    ctx.restore();
    options.borderWidth = borderWidth;
  }
  resolveElementProperties(chart, options) {
    const properties = resolvePointProperties(chart, options);
    properties.initProperties = initAnimationProperties(chart, properties, options);
    return properties;
  }
}
PointAnnotation.id = 'pointAnnotation';
PointAnnotation.defaults = {
  adjustScaleRange: true,
  backgroundShadowColor: 'transparent',
  borderDash: [],
  borderDashOffset: 0,
  borderShadowColor: 'transparent',
  borderWidth: 1,
  display: true,
  hitTolerance: 0,
  init: undefined,
  pointStyle: 'circle',
  radius: 10,
  rotation: 0,
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  xAdjust: 0,
  xMax: undefined,
  xMin: undefined,
  xScaleID: undefined,
  xValue: undefined,
  yAdjust: 0,
  yMax: undefined,
  yMin: undefined,
  yScaleID: undefined,
  yValue: undefined,
  z: 0
};
PointAnnotation.defaultRoutes = {
  borderColor: 'color',
  backgroundColor: 'color'
};
class PolygonAnnotation extends chart_js__WEBPACK_IMPORTED_MODULE_2__.Element {
  inRange(mouseX, mouseY, axis, useFinalPosition) {
    if (axis !== 'x' && axis !== 'y') {
      return this.options.radius >= 0.1 && this.elements.length > 1 && pointIsInPolygon(this.elements, mouseX, mouseY, useFinalPosition);
    }
    const rotatedPoint = rotated({
      x: mouseX,
      y: mouseY
    }, this.getCenterPoint(useFinalPosition), (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.toRadians)(-this.options.rotation));
    const axisPoints = this.elements.map(point => axis === 'y' ? point.bY : point.bX);
    const start = Math.min(...axisPoints);
    const end = Math.max(...axisPoints);
    return rotatedPoint[axis] >= start && rotatedPoint[axis] <= end;
  }
  getCenterPoint(useFinalPosition) {
    return getElementCenterPoint(this, useFinalPosition);
  }
  draw(ctx) {
    const {
      elements,
      options
    } = this;
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = options.backgroundColor;
    setShadowStyle(ctx, options);
    const stroke = setBorderStyle(ctx, options);
    let first = true;
    for (const el of elements) {
      if (first) {
        ctx.moveTo(el.x, el.y);
        first = false;
      } else {
        ctx.lineTo(el.x, el.y);
      }
    }
    ctx.closePath();
    ctx.fill();
    // If no border, don't draw it
    if (stroke) {
      ctx.shadowColor = options.borderShadowColor;
      ctx.stroke();
    }
    ctx.restore();
  }
  resolveElementProperties(chart, options) {
    const properties = resolvePointProperties(chart, options);
    const {
      sides,
      rotation
    } = options;
    const elements = [];
    const angle = 2 * chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.PI / sides;
    let rad = rotation * chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.RAD_PER_DEG;
    for (let i = 0; i < sides; i++, rad += angle) {
      const elProps = buildPointElement(properties, options, rad);
      elProps.initProperties = initAnimationProperties(chart, properties, options);
      elements.push(elProps);
    }
    properties.elements = elements;
    return properties;
  }
}
PolygonAnnotation.id = 'polygonAnnotation';
PolygonAnnotation.defaults = {
  adjustScaleRange: true,
  backgroundShadowColor: 'transparent',
  borderCapStyle: 'butt',
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: 'miter',
  borderShadowColor: 'transparent',
  borderWidth: 1,
  display: true,
  hitTolerance: 0,
  init: undefined,
  point: {
    radius: 0
  },
  radius: 10,
  rotation: 0,
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  sides: 3,
  xAdjust: 0,
  xMax: undefined,
  xMin: undefined,
  xScaleID: undefined,
  xValue: undefined,
  yAdjust: 0,
  yMax: undefined,
  yMin: undefined,
  yScaleID: undefined,
  yValue: undefined,
  z: 0
};
PolygonAnnotation.defaultRoutes = {
  borderColor: 'color',
  backgroundColor: 'color'
};
function buildPointElement({
  centerX,
  centerY
}, {
  radius,
  borderWidth,
  hitTolerance
}, rad) {
  const hitSize = (borderWidth + hitTolerance) / 2;
  const sin = Math.sin(rad);
  const cos = Math.cos(rad);
  const point = {
    x: centerX + sin * radius,
    y: centerY - cos * radius
  };
  return {
    type: 'point',
    optionScope: 'point',
    properties: {
      x: point.x,
      y: point.y,
      centerX: point.x,
      centerY: point.y,
      bX: centerX + sin * (radius + hitSize),
      bY: centerY - cos * (radius + hitSize)
    }
  };
}
function pointIsInPolygon(points, x, y, useFinalPosition) {
  let isInside = false;
  let A = points[points.length - 1].getProps(['bX', 'bY'], useFinalPosition);
  for (const point of points) {
    const B = point.getProps(['bX', 'bY'], useFinalPosition);
    if (B.bY > y !== A.bY > y && x < (A.bX - B.bX) * (y - B.bY) / (A.bY - B.bY) + B.bX) {
      isInside = !isInside;
    }
    A = B;
  }
  return isInside;
}
const annotationTypes = {
  box: BoxAnnotation,
  doughnutLabel: DoughnutLabelAnnotation,
  ellipse: EllipseAnnotation,
  label: LabelAnnotation,
  line: LineAnnotation,
  point: PointAnnotation,
  polygon: PolygonAnnotation
};

/**
 * Register fallback for annotation elements
 * For example lineAnnotation options would be looked through:
 * - the annotation object (options.plugins.annotation.annotations[id])
 * - element options (options.elements.lineAnnotation)
 * - element defaults (defaults.elements.lineAnnotation)
 * - annotation plugin defaults (defaults.plugins.annotation, this is what we are registering here)
 */
Object.keys(annotationTypes).forEach(key => {
  chart_js__WEBPACK_IMPORTED_MODULE_3__.d.describe(`elements.${annotationTypes[key].id}`, {
    _fallback: 'plugins.annotation.common'
  });
});
const directUpdater = {
  update: Object.assign
};
const hooks$1 = eventHooks.concat(elementHooks);
const resolve = (value, optDefs) => (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.isObject)(optDefs) ? resolveObj(value, optDefs) : value;

/**
 * @typedef { import("chart.js").Chart } Chart
 * @typedef { import("chart.js").UpdateMode } UpdateMode
 * @typedef { import('../../types/options').AnnotationPluginOptions } AnnotationPluginOptions
 */

/**
 * @param {string} prop
 * @returns {boolean}
 */
const isIndexable = prop => prop === 'color' || prop === 'font';

/**
 * Resolve the annotation type, checking if is supported.
 * @param {string} [type=line] - annotation type
 * @returns {string} resolved annotation type
 */
function resolveType(type = 'line') {
  if (annotationTypes[type]) {
    return type;
  }
  console.warn(`Unknown annotation type: '${type}', defaulting to 'line'`);
  return 'line';
}

/**
 * @param {Chart} chart
 * @param {Object} state
 * @param {AnnotationPluginOptions} options
 * @param {UpdateMode} mode
 */
function updateElements(chart, state, options, mode) {
  const animations = resolveAnimations(chart, options.animations, mode);
  const annotations = state.annotations;
  const elements = resyncElements(state.elements, annotations);
  for (let i = 0; i < annotations.length; i++) {
    const annotationOptions = annotations[i];
    const element = getOrCreateElement(elements, i, annotationOptions.type);
    const resolver = annotationOptions.setContext(getContext(chart, element, elements, annotationOptions));
    const properties = element.resolveElementProperties(chart, resolver);
    properties.skip = toSkip(properties);
    if ('elements' in properties) {
      updateSubElements(element, properties.elements, resolver, animations);
      // Remove the sub-element definitions from properties, so the actual elements
      // are not overwritten by their definitions
      delete properties.elements;
    }
    if (!(0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.defined)(element.x)) {
      // If the element is newly created, assing the properties directly - to
      // make them readily awailable to any scriptable options. If we do not do this,
      // the properties retruned by `resolveElementProperties` are available only
      // after options resolution.
      Object.assign(element, properties);
    }
    Object.assign(element, properties.initProperties);
    properties.options = resolveAnnotationOptions(resolver);
    animations.update(element, properties);
  }
}
function toSkip(properties) {
  return isNaN(properties.x) || isNaN(properties.y);
}
function resolveAnimations(chart, animOpts, mode) {
  if (mode === 'reset' || mode === 'none' || mode === 'resize') {
    return directUpdater;
  }
  return new chart_js__WEBPACK_IMPORTED_MODULE_2__.Animations(chart, animOpts);
}
function updateSubElements(mainElement, elements, resolver, animations) {
  const subElements = mainElement.elements || (mainElement.elements = []);
  subElements.length = elements.length;
  for (let i = 0; i < elements.length; i++) {
    const definition = elements[i];
    const properties = definition.properties;
    const subElement = getOrCreateElement(subElements, i, definition.type, definition.initProperties);
    const subResolver = resolver[definition.optionScope].override(definition);
    properties.options = resolveAnnotationOptions(subResolver);
    animations.update(subElement, properties);
  }
}
function getOrCreateElement(elements, index, type, initProperties) {
  const elementClass = annotationTypes[resolveType(type)];
  let element = elements[index];
  if (!element || !(element instanceof elementClass)) {
    element = elements[index] = new elementClass();
    Object.assign(element, initProperties);
  }
  return element;
}
function resolveAnnotationOptions(resolver) {
  const elementClass = annotationTypes[resolveType(resolver.type)];
  const result = {};
  result.id = resolver.id;
  result.type = resolver.type;
  result.drawTime = resolver.drawTime;
  Object.assign(result, resolveObj(resolver, elementClass.defaults), resolveObj(resolver, elementClass.defaultRoutes));
  for (const hook of hooks$1) {
    result[hook] = resolver[hook];
  }
  return result;
}
function resolveObj(resolver, defs) {
  const result = {};
  for (const prop of Object.keys(defs)) {
    const optDefs = defs[prop];
    const value = resolver[prop];
    if (isIndexable(prop) && (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
      result[prop] = value.map(item => resolve(item, optDefs));
    } else {
      result[prop] = resolve(value, optDefs);
    }
  }
  return result;
}
function getContext(chart, element, elements, annotation) {
  return element.$context || (element.$context = Object.assign(Object.create(chart.getContext()), {
    element,
    get elements() {
      return elements.filter(el => el && el.options);
    },
    id: annotation.id,
    type: 'annotation'
  }));
}
function resyncElements(elements, annotations) {
  const count = annotations.length;
  const start = elements.length;
  if (start < count) {
    const add = count - start;
    elements.splice(start, 0, ...new Array(add));
  } else if (start > count) {
    elements.splice(count, start - count);
  }
  return elements;
}
var version = "3.1.0";
const chartStates = new Map();
const isNotDoughnutLabel = annotation => annotation.type !== 'doughnutLabel';
const hooks = eventHooks.concat(elementHooks);
var annotation = {
  id: 'annotation',
  version,
  beforeRegister() {
    requireVersion('chart.js', '4.0', chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.version);
  },
  afterRegister() {
    chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(annotationTypes);
  },
  afterUnregister() {
    chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.unregister(annotationTypes);
  },
  beforeInit(chart) {
    chartStates.set(chart, {
      annotations: [],
      elements: [],
      visibleElements: [],
      listeners: {},
      listened: false,
      moveListened: false,
      hooks: {},
      hooked: false,
      hovered: []
    });
  },
  beforeUpdate(chart, args, options) {
    const state = chartStates.get(chart);
    const annotations = state.annotations = [];
    let annotationOptions = options.annotations;
    if ((0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.isObject)(annotationOptions)) {
      Object.keys(annotationOptions).forEach(key => {
        const value = annotationOptions[key];
        if ((0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.isObject)(value)) {
          value.id = key;
          annotations.push(value);
        }
      });
    } else if ((0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.isArray)(annotationOptions)) {
      annotations.push(...annotationOptions);
    }
    verifyScaleOptions(annotations.filter(isNotDoughnutLabel), chart.scales);
  },
  afterDataLimits(chart, args) {
    const state = chartStates.get(chart);
    adjustScaleRange(chart, args.scale, state.annotations.filter(isNotDoughnutLabel).filter(a => a.display && a.adjustScaleRange));
  },
  afterUpdate(chart, args, options) {
    const state = chartStates.get(chart);
    updateListeners(chart, state, options);
    updateElements(chart, state, options, args.mode);
    state.visibleElements = state.elements.filter(el => !el.skip && el.options.display);
    updateHooks(chart, state, options);
  },
  beforeDatasetsDraw(chart, _args, options) {
    draw(chart, 'beforeDatasetsDraw', options.clip);
  },
  afterDatasetsDraw(chart, _args, options) {
    draw(chart, 'afterDatasetsDraw', options.clip);
  },
  beforeDatasetDraw(chart, _args, options) {
    draw(chart, _args.index, options.clip);
  },
  beforeDraw(chart, _args, options) {
    draw(chart, 'beforeDraw', options.clip);
  },
  afterDraw(chart, _args, options) {
    draw(chart, 'afterDraw', options.clip);
  },
  beforeEvent(chart, args, options) {
    const state = chartStates.get(chart);
    if (handleEvent(state, args.event, options)) {
      args.changed = true;
    }
  },
  afterDestroy(chart) {
    chartStates.delete(chart);
  },
  getAnnotations(chart) {
    const state = chartStates.get(chart);
    return state ? state.elements : [];
  },
  // only for testing
  _getAnnotationElementsAtEventForMode(visibleElements, event, options) {
    return getElements(visibleElements, event, options);
  },
  defaults: {
    animations: {
      numbers: {
        properties: ['x', 'y', 'x2', 'y2', 'width', 'height', 'centerX', 'centerY', 'pointX', 'pointY', 'radius'],
        type: 'number'
      },
      colors: {
        properties: ['backgroundColor', 'borderColor'],
        type: 'color'
      }
    },
    clip: true,
    interaction: {
      mode: undefined,
      axis: undefined,
      intersect: undefined
    },
    common: {
      drawTime: 'afterDatasetsDraw',
      init: false,
      label: {}
    }
  },
  descriptors: {
    _indexable: false,
    _scriptable: prop => !hooks.includes(prop) && prop !== 'init',
    annotations: {
      _allKeys: false,
      _fallback: (prop, opts) => `elements.${annotationTypes[resolveType(opts.type)].id}`
    },
    interaction: {
      _fallback: true
    },
    common: {
      label: {
        _indexable: isIndexable,
        _fallback: true
      },
      _indexable: isIndexable
    }
  },
  additionalOptionScopes: ['']
};
function draw(chart, caller, clip) {
  const {
    ctx,
    chartArea
  } = chart;
  const state = chartStates.get(chart);
  if (clip) {
    (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.clipArea)(ctx, chartArea);
  }
  const drawableElements = getDrawableElements(state.visibleElements, caller).sort((a, b) => a.element.options.z - b.element.options.z);
  for (const item of drawableElements) {
    drawElement(ctx, chartArea, state, item);
  }
  if (clip) {
    (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.unclipArea)(ctx);
  }
}
function getDrawableElements(elements, caller) {
  const drawableElements = [];
  for (const el of elements) {
    if (el.options.drawTime === caller) {
      drawableElements.push({
        element: el,
        main: true
      });
    }
    if (el.elements && el.elements.length) {
      for (const sub of el.elements) {
        if (sub.options.display && sub.options.drawTime === caller) {
          drawableElements.push({
            element: sub
          });
        }
      }
    }
  }
  return drawableElements;
}
function drawElement(ctx, chartArea, state, item) {
  const el = item.element;
  if (item.main) {
    invokeHook(state, el, 'beforeDraw');
    el.draw(ctx, chartArea);
    invokeHook(state, el, 'afterDraw');
  } else {
    el.draw(ctx, chartArea);
  }
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/getRoundingMethod.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/_lib/getRoundingMethod.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRoundingMethod: function() { return /* binding */ getRoundingMethod; }
/* harmony export */ });
function getRoundingMethod(method) {
  return number => {
    const round = method ? Math[method] : Math.trunc;
    const result = round(number);
    // Prevent negative zero
    return result === 0 ? 0 : result;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/addDays.js":
/*!******************************************!*\
  !*** ./node_modules/date-fns/addDays.js ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDays: function() { return /* binding */ addDays; }
/* harmony export */ });
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");



/**
 * The {@link addDays} function options.
 */

/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 * @param options - An object with options
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(date, amount, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  if (isNaN(amount)) return (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(options?.in || date, NaN);

  // If 0 days, no-op to avoid changing times in the hour before end of DST
  if (!amount) return _date;
  _date.setDate(_date.getDate() + amount);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (addDays);

/***/ }),

/***/ "./node_modules/date-fns/addHours.js":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/addHours.js ***!
  \*******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addHours: function() { return /* binding */ addHours; }
/* harmony export */ });
/* harmony import */ var _addMilliseconds_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addMilliseconds.js */ "./node_modules/date-fns/addMilliseconds.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./node_modules/date-fns/constants.js");



/**
 * The {@link addHours} function options.
 */

/**
 * @name addHours
 * @category Hour Helpers
 * @summary Add the specified number of hours to the given date.
 *
 * @description
 * Add the specified number of hours to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of hours to be added
 * @param options - An object with options
 *
 * @returns The new date with the hours added
 *
 * @example
 * // Add 2 hours to 10 July 2014 23:00:00:
 * const result = addHours(new Date(2014, 6, 10, 23, 0), 2)
 * //=> Fri Jul 11 2014 01:00:00
 */
function addHours(date, amount, options) {
  return (0,_addMilliseconds_js__WEBPACK_IMPORTED_MODULE_0__.addMilliseconds)(date, amount * _constants_js__WEBPACK_IMPORTED_MODULE_1__.millisecondsInHour, options);
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (addHours);

/***/ }),

/***/ "./node_modules/date-fns/addMilliseconds.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/addMilliseconds.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addMilliseconds: function() { return /* binding */ addMilliseconds; }
/* harmony export */ });
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");



/**
 * The {@link addMilliseconds} function options.
 */

/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of milliseconds to be added.
 * @param options - The options object
 *
 * @returns The new date with the milliseconds added
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds(date, amount, options) {
  return (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(options?.in || date, +(0,_toDate_js__WEBPACK_IMPORTED_MODULE_1__.toDate)(date) + amount);
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (addMilliseconds);

/***/ }),

/***/ "./node_modules/date-fns/addMinutes.js":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/addMinutes.js ***!
  \*********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addMinutes: function() { return /* binding */ addMinutes; }
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./node_modules/date-fns/constants.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");



/**
 * The {@link addMinutes} function options.
 */

/**
 * @name addMinutes
 * @category Minute Helpers
 * @summary Add the specified number of minutes to the given date.
 *
 * @description
 * Add the specified number of minutes to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of minutes to be added.
 * @param options - An object with options
 *
 * @returns The new date with the minutes added
 *
 * @example
 * // Add 30 minutes to 10 July 2014 12:00:00:
 * const result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 12:30:00
 */
function addMinutes(date, amount, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  _date.setTime(_date.getTime() + amount * _constants_js__WEBPACK_IMPORTED_MODULE_1__.millisecondsInMinute);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (addMinutes);

/***/ }),

/***/ "./node_modules/date-fns/addMonths.js":
/*!********************************************!*\
  !*** ./node_modules/date-fns/addMonths.js ***!
  \********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addMonths: function() { return /* binding */ addMonths; }
/* harmony export */ });
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");



/**
 * The {@link addMonths} function options.
 */

/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of months to be added.
 * @param options - The options object
 *
 * @returns The new date with the months added
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 *
 * // Add one month to 30 January 2023:
 * const result = addMonths(new Date(2023, 0, 30), 1)
 * //=> Tue Feb 28 2023 00:00:00
 */
function addMonths(date, amount, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  if (isNaN(amount)) return (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(options?.in || date, NaN);
  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return _date;
  }
  const dayOfMonth = _date.getDate();

  // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.
  const endOfDesiredMonth = (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(options?.in || date, _date.getTime());
  endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
  const daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    _date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return _date;
  }
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (addMonths);

/***/ }),

/***/ "./node_modules/date-fns/addQuarters.js":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/addQuarters.js ***!
  \**********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addQuarters: function() { return /* binding */ addQuarters; }
/* harmony export */ });
/* harmony import */ var _addMonths_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addMonths.js */ "./node_modules/date-fns/addMonths.js");


/**
 * The {@link addQuarters} function options.
 */

/**
 * @name addQuarters
 * @category Quarter Helpers
 * @summary Add the specified number of year quarters to the given date.
 *
 * @description
 * Add the specified number of year quarters to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of quarters to be added.
 * @param options - An object with options
 *
 * @returns The new date with the quarters added
 *
 * @example
 * // Add 1 quarter to 1 September 2014:
 * const result = addQuarters(new Date(2014, 8, 1), 1)
 * //=; Mon Dec 01 2014 00:00:00
 */
function addQuarters(date, amount, options) {
  return (0,_addMonths_js__WEBPACK_IMPORTED_MODULE_0__.addMonths)(date, amount * 3, options);
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (addQuarters);

/***/ }),

/***/ "./node_modules/date-fns/addSeconds.js":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/addSeconds.js ***!
  \*********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addSeconds: function() { return /* binding */ addSeconds; }
/* harmony export */ });
/* harmony import */ var _addMilliseconds_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addMilliseconds.js */ "./node_modules/date-fns/addMilliseconds.js");


/**
 * The {@link addSeconds} function options.
 */

/**
 * @name addSeconds
 * @category Second Helpers
 * @summary Add the specified number of seconds to the given date.
 *
 * @description
 * Add the specified number of seconds to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of seconds to be added.
 * @param options - An object with options
 *
 * @returns The new date with the seconds added
 *
 * @example
 * // Add 30 seconds to 10 July 2014 12:45:00:
 * const result = addSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
 * //=> Thu Jul 10 2014 12:45:30
 */
function addSeconds(date, amount, options) {
  return (0,_addMilliseconds_js__WEBPACK_IMPORTED_MODULE_0__.addMilliseconds)(date, amount * 1000, options);
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (addSeconds);

/***/ }),

/***/ "./node_modules/date-fns/addWeeks.js":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/addWeeks.js ***!
  \*******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addWeeks: function() { return /* binding */ addWeeks; }
/* harmony export */ });
/* harmony import */ var _addDays_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addDays.js */ "./node_modules/date-fns/addDays.js");


/**
 * The {@link addWeeks} function options.
 */

/**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of weeks to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of weeks to be added.
 * @param options - An object with options
 *
 * @returns The new date with the weeks added
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * const result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */
function addWeeks(date, amount, options) {
  return (0,_addDays_js__WEBPACK_IMPORTED_MODULE_0__.addDays)(date, amount * 7, options);
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (addWeeks);

/***/ }),

/***/ "./node_modules/date-fns/addYears.js":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/addYears.js ***!
  \*******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addYears: function() { return /* binding */ addYears; }
/* harmony export */ });
/* harmony import */ var _addMonths_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addMonths.js */ "./node_modules/date-fns/addMonths.js");


/**
 * The {@link addYears} function options.
 */

/**
 * @name addYears
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * @description
 * Add the specified number of years to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type.
 *
 * @param date - The date to be changed
 * @param amount - The amount of years to be added.
 * @param options - The options
 *
 * @returns The new date with the years added
 *
 * @example
 * // Add 5 years to 1 September 2014:
 * const result = addYears(new Date(2014, 8, 1), 5)
 * //=> Sun Sep 01 2019 00:00:00
 */
function addYears(date, amount, options) {
  return (0,_addMonths_js__WEBPACK_IMPORTED_MODULE_0__.addMonths)(date, amount * 12, options);
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (addYears);

/***/ }),

/***/ "./node_modules/date-fns/compareAsc.js":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/compareAsc.js ***!
  \*********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compareAsc: function() { return /* binding */ compareAsc; }
/* harmony export */ });
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param dateLeft - The first date to compare
 * @param dateRight - The second date to compare
 *
 * @returns The result of the comparison
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc(dateLeft, dateRight) {
  const diff = +(0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft) - +(0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);
  if (diff < 0) return -1;else if (diff > 0) return 1;

  // Return 0 if diff is 0; return NaN if diff is NaN
  return diff;
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (compareAsc);

/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarMonths.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarMonths.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   differenceInCalendarMonths: function() { return /* binding */ differenceInCalendarMonths; }
/* harmony export */ });
/* harmony import */ var _lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/normalizeDates.js */ "./node_modules/date-fns/_lib/normalizeDates.js");


/**
 * The {@link differenceInCalendarMonths} function options.
 */

/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of calendar months
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */
function differenceInCalendarMonths(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = (0,_lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_0__.normalizeDates)(options?.in, laterDate, earlierDate);
  const yearsDiff = laterDate_.getFullYear() - earlierDate_.getFullYear();
  const monthsDiff = laterDate_.getMonth() - earlierDate_.getMonth();
  return yearsDiff * 12 + monthsDiff;
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (differenceInCalendarMonths);

/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarYears.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarYears.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   differenceInCalendarYears: function() { return /* binding */ differenceInCalendarYears; }
/* harmony export */ });
/* harmony import */ var _lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/normalizeDates.js */ "./node_modules/date-fns/_lib/normalizeDates.js");


/**
 * The {@link differenceInCalendarYears} function options.
 */

/**
 * @name differenceInCalendarYears
 * @category Year Helpers
 * @summary Get the number of calendar years between the given dates.
 *
 * @description
 * Get the number of calendar years between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options

 * @returns The number of calendar years
 *
 * @example
 * // How many calendar years are between 31 December 2013 and 11 February 2015?
 * const result = differenceInCalendarYears(
 *   new Date(2015, 1, 11),
 *   new Date(2013, 11, 31)
 * );
 * //=> 2
 */
function differenceInCalendarYears(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = (0,_lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_0__.normalizeDates)(options?.in, laterDate, earlierDate);
  return laterDate_.getFullYear() - earlierDate_.getFullYear();
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (differenceInCalendarYears);

/***/ }),

/***/ "./node_modules/date-fns/differenceInDays.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/differenceInDays.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   differenceInDays: function() { return /* binding */ differenceInDays; }
/* harmony export */ });
/* harmony import */ var _lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/normalizeDates.js */ "./node_modules/date-fns/_lib/normalizeDates.js");
/* harmony import */ var _differenceInCalendarDays_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./differenceInCalendarDays.js */ "./node_modules/date-fns/differenceInCalendarDays.js");



/**
 * The {@link differenceInDays} function options.
 */

/**
 * @name differenceInDays
 * @category Day Helpers
 * @summary Get the number of full days between the given dates.
 *
 * @description
 * Get the number of full day periods between two dates. Fractional days are
 * truncated towards zero.
 *
 * One "full day" is the distance between a local time in one day to the same
 * local time on the next or previous day. A full day can sometimes be less than
 * or more than 24 hours if a daylight savings change happens between two dates.
 *
 * To ignore DST and only measure exact 24-hour periods, use this instead:
 * `Math.trunc(differenceInHours(dateLeft, dateRight)/24)|0`.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of full days according to the local timezone
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 365
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 0
 *
 * @example
 * // How many full days are between
 * // 1 March 2020 0:00 and 1 June 2020 0:00 ?
 * // Note: because local time is used, the
 * // result will always be 92 days, even in
 * // time zones where DST starts and the
 * // period has only 92*24-1 hours.
 * const result = differenceInDays(
 *   new Date(2020, 5, 1),
 *   new Date(2020, 2, 1)
 * )
 * //=> 92
 */
function differenceInDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = (0,_lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_0__.normalizeDates)(options?.in, laterDate, earlierDate);
  const sign = compareLocalAsc(laterDate_, earlierDate_);
  const difference = Math.abs((0,_differenceInCalendarDays_js__WEBPACK_IMPORTED_MODULE_1__.differenceInCalendarDays)(laterDate_, earlierDate_));
  laterDate_.setDate(laterDate_.getDate() - sign * difference);

  // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
  // If so, result must be decreased by 1 in absolute value
  const isLastDayNotFull = Number(compareLocalAsc(laterDate_, earlierDate_) === -sign);
  const result = sign * (difference - isLastDayNotFull);
  // Prevent negative zero
  return result === 0 ? 0 : result;
}

// Like `compareAsc` but uses local time not UTC, which is needed
// for accurate equality comparisons of UTC timestamps that end up
// having the same representation in local time, e.g. one hour before
// DST ends vs. the instant that DST ends.
function compareLocalAsc(laterDate, earlierDate) {
  const diff = laterDate.getFullYear() - earlierDate.getFullYear() || laterDate.getMonth() - earlierDate.getMonth() || laterDate.getDate() - earlierDate.getDate() || laterDate.getHours() - earlierDate.getHours() || laterDate.getMinutes() - earlierDate.getMinutes() || laterDate.getSeconds() - earlierDate.getSeconds() || laterDate.getMilliseconds() - earlierDate.getMilliseconds();
  if (diff < 0) return -1;
  if (diff > 0) return 1;

  // Return 0 if diff is 0; return NaN if diff is NaN
  return diff;
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (differenceInDays);

/***/ }),

/***/ "./node_modules/date-fns/differenceInHours.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/differenceInHours.js ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   differenceInHours: function() { return /* binding */ differenceInHours; }
/* harmony export */ });
/* harmony import */ var _lib_getRoundingMethod_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/getRoundingMethod.js */ "./node_modules/date-fns/_lib/getRoundingMethod.js");
/* harmony import */ var _lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/normalizeDates.js */ "./node_modules/date-fns/_lib/normalizeDates.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./node_modules/date-fns/constants.js");




/**
 * The {@link differenceInHours} function options.
 */

/**
 * @name differenceInHours
 * @category Hour Helpers
 * @summary Get the number of hours between the given dates.
 *
 * @description
 * Get the number of hours between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of hours
 *
 * @example
 * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
 * const result = differenceInHours(
 *   new Date(2014, 6, 2, 19, 0),
 *   new Date(2014, 6, 2, 6, 50)
 * )
 * //=> 12
 */
function differenceInHours(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = (0,_lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_0__.normalizeDates)(options?.in, laterDate, earlierDate);
  const diff = (+laterDate_ - +earlierDate_) / _constants_js__WEBPACK_IMPORTED_MODULE_1__.millisecondsInHour;
  return (0,_lib_getRoundingMethod_js__WEBPACK_IMPORTED_MODULE_2__.getRoundingMethod)(options?.roundingMethod)(diff);
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (differenceInHours);

/***/ }),

/***/ "./node_modules/date-fns/differenceInMilliseconds.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/differenceInMilliseconds.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   differenceInMilliseconds: function() { return /* binding */ differenceInMilliseconds; }
/* harmony export */ });
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");


/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 *
 * @returns The number of milliseconds
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * const result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */
function differenceInMilliseconds(laterDate, earlierDate) {
  return +(0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(laterDate) - +(0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(earlierDate);
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (differenceInMilliseconds);

/***/ }),

/***/ "./node_modules/date-fns/differenceInMinutes.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/differenceInMinutes.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   differenceInMinutes: function() { return /* binding */ differenceInMinutes; }
/* harmony export */ });
/* harmony import */ var _lib_getRoundingMethod_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/getRoundingMethod.js */ "./node_modules/date-fns/_lib/getRoundingMethod.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./node_modules/date-fns/constants.js");
/* harmony import */ var _differenceInMilliseconds_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./differenceInMilliseconds.js */ "./node_modules/date-fns/differenceInMilliseconds.js");




/**
 * The {@link differenceInMinutes} function options.
 */

/**
 * @name differenceInMinutes
 * @category Minute Helpers
 * @summary Get the number of minutes between the given dates.
 *
 * @description
 * Get the signed number of full (rounded towards 0) minutes between the given dates.
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of minutes
 *
 * @example
 * // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
 * const result = differenceInMinutes(
 *   new Date(2014, 6, 2, 12, 20, 0),
 *   new Date(2014, 6, 2, 12, 7, 59)
 * )
 * //=> 12
 *
 * @example
 * // How many minutes are between 10:01:59 and 10:00:00
 * const result = differenceInMinutes(
 *   new Date(2000, 0, 1, 10, 0, 0),
 *   new Date(2000, 0, 1, 10, 1, 59)
 * )
 * //=> -1
 */
function differenceInMinutes(dateLeft, dateRight, options) {
  const diff = (0,_differenceInMilliseconds_js__WEBPACK_IMPORTED_MODULE_0__.differenceInMilliseconds)(dateLeft, dateRight) / _constants_js__WEBPACK_IMPORTED_MODULE_1__.millisecondsInMinute;
  return (0,_lib_getRoundingMethod_js__WEBPACK_IMPORTED_MODULE_2__.getRoundingMethod)(options?.roundingMethod)(diff);
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (differenceInMinutes);

/***/ }),

/***/ "./node_modules/date-fns/differenceInMonths.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/differenceInMonths.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   differenceInMonths: function() { return /* binding */ differenceInMonths; }
/* harmony export */ });
/* harmony import */ var _lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/normalizeDates.js */ "./node_modules/date-fns/_lib/normalizeDates.js");
/* harmony import */ var _compareAsc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compareAsc.js */ "./node_modules/date-fns/compareAsc.js");
/* harmony import */ var _differenceInCalendarMonths_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./differenceInCalendarMonths.js */ "./node_modules/date-fns/differenceInCalendarMonths.js");
/* harmony import */ var _isLastDayOfMonth_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isLastDayOfMonth.js */ "./node_modules/date-fns/isLastDayOfMonth.js");





/**
 * The {@link differenceInMonths} function options.
 */

/**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of full months
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */
function differenceInMonths(laterDate, earlierDate, options) {
  const [laterDate_, workingLaterDate, earlierDate_] = (0,_lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_0__.normalizeDates)(options?.in, laterDate, laterDate, earlierDate);
  const sign = (0,_compareAsc_js__WEBPACK_IMPORTED_MODULE_1__.compareAsc)(workingLaterDate, earlierDate_);
  const difference = Math.abs((0,_differenceInCalendarMonths_js__WEBPACK_IMPORTED_MODULE_2__.differenceInCalendarMonths)(workingLaterDate, earlierDate_));
  if (difference < 1) return 0;
  if (workingLaterDate.getMonth() === 1 && workingLaterDate.getDate() > 27) workingLaterDate.setDate(30);
  workingLaterDate.setMonth(workingLaterDate.getMonth() - sign * difference);
  let isLastMonthNotFull = (0,_compareAsc_js__WEBPACK_IMPORTED_MODULE_1__.compareAsc)(workingLaterDate, earlierDate_) === -sign;
  if ((0,_isLastDayOfMonth_js__WEBPACK_IMPORTED_MODULE_3__.isLastDayOfMonth)(laterDate_) && difference === 1 && (0,_compareAsc_js__WEBPACK_IMPORTED_MODULE_1__.compareAsc)(laterDate_, earlierDate_) === 1) {
    isLastMonthNotFull = false;
  }
  const result = sign * (difference - +isLastMonthNotFull);
  return result === 0 ? 0 : result;
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (differenceInMonths);

/***/ }),

/***/ "./node_modules/date-fns/differenceInQuarters.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/differenceInQuarters.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   differenceInQuarters: function() { return /* binding */ differenceInQuarters; }
/* harmony export */ });
/* harmony import */ var _lib_getRoundingMethod_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/getRoundingMethod.js */ "./node_modules/date-fns/_lib/getRoundingMethod.js");
/* harmony import */ var _differenceInMonths_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./differenceInMonths.js */ "./node_modules/date-fns/differenceInMonths.js");



/**
 * The {@link differenceInQuarters} function options.
 */

/**
 * @name differenceInQuarters
 * @category Quarter Helpers
 * @summary Get the number of quarters between the given dates.
 *
 * @description
 * Get the number of quarters between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of full quarters
 *
 * @example
 * // How many full quarters are between 31 December 2013 and 2 July 2014?
 * const result = differenceInQuarters(new Date(2014, 6, 2), new Date(2013, 11, 31))
 * //=> 2
 */
function differenceInQuarters(laterDate, earlierDate, options) {
  const diff = (0,_differenceInMonths_js__WEBPACK_IMPORTED_MODULE_0__.differenceInMonths)(laterDate, earlierDate, options) / 3;
  return (0,_lib_getRoundingMethod_js__WEBPACK_IMPORTED_MODULE_1__.getRoundingMethod)(options?.roundingMethod)(diff);
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (differenceInQuarters);

/***/ }),

/***/ "./node_modules/date-fns/differenceInSeconds.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/differenceInSeconds.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   differenceInSeconds: function() { return /* binding */ differenceInSeconds; }
/* harmony export */ });
/* harmony import */ var _lib_getRoundingMethod_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/getRoundingMethod.js */ "./node_modules/date-fns/_lib/getRoundingMethod.js");
/* harmony import */ var _differenceInMilliseconds_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./differenceInMilliseconds.js */ "./node_modules/date-fns/differenceInMilliseconds.js");



/**
 * The {@link differenceInSeconds} function options.
 */

/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of seconds
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * const result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */
function differenceInSeconds(laterDate, earlierDate, options) {
  const diff = (0,_differenceInMilliseconds_js__WEBPACK_IMPORTED_MODULE_0__.differenceInMilliseconds)(laterDate, earlierDate) / 1000;
  return (0,_lib_getRoundingMethod_js__WEBPACK_IMPORTED_MODULE_1__.getRoundingMethod)(options?.roundingMethod)(diff);
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (differenceInSeconds);

/***/ }),

/***/ "./node_modules/date-fns/differenceInWeeks.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/differenceInWeeks.js ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   differenceInWeeks: function() { return /* binding */ differenceInWeeks; }
/* harmony export */ });
/* harmony import */ var _lib_getRoundingMethod_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/getRoundingMethod.js */ "./node_modules/date-fns/_lib/getRoundingMethod.js");
/* harmony import */ var _differenceInDays_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./differenceInDays.js */ "./node_modules/date-fns/differenceInDays.js");



/**
 * The {@link differenceInWeeks} function options.
 */

/**
 * @name differenceInWeeks
 * @category Week Helpers
 * @summary Get the number of full weeks between the given dates.
 *
 * @description
 * Get the number of full weeks between two dates. Fractional weeks are
 * truncated towards zero by default.
 *
 * One "full week" is the distance between a local time in one day to the same
 * local time 7 days earlier or later. A full week can sometimes be less than
 * or more than 7*24 hours if a daylight savings change happens between two dates.
 *
 * To ignore DST and only measure exact 7*24-hour periods, use this instead:
 * `Math.trunc(differenceInHours(dateLeft, dateRight)/(7*24))|0`.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of full weeks
 *
 * @example
 * // How many full weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInWeeks(new Date(2014, 6, 20), new Date(2014, 6, 5))
 * //=> 2
 *
 * @example
 * // How many full weeks are between
 * // 1 March 2020 0:00 and 6 June 2020 0:00 ?
 * // Note: because local time is used, the
 * // result will always be 8 weeks (54 days),
 * // even if DST starts and the period has
 * // only 54*24-1 hours.
 * const result = differenceInWeeks(
 *   new Date(2020, 5, 1),
 *   new Date(2020, 2, 6)
 * )
 * //=> 8
 */
function differenceInWeeks(laterDate, earlierDate, options) {
  const diff = (0,_differenceInDays_js__WEBPACK_IMPORTED_MODULE_0__.differenceInDays)(laterDate, earlierDate, options) / 7;
  return (0,_lib_getRoundingMethod_js__WEBPACK_IMPORTED_MODULE_1__.getRoundingMethod)(options?.roundingMethod)(diff);
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (differenceInWeeks);

/***/ }),

/***/ "./node_modules/date-fns/differenceInYears.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/differenceInYears.js ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   differenceInYears: function() { return /* binding */ differenceInYears; }
/* harmony export */ });
/* harmony import */ var _lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/normalizeDates.js */ "./node_modules/date-fns/_lib/normalizeDates.js");
/* harmony import */ var _compareAsc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compareAsc.js */ "./node_modules/date-fns/compareAsc.js");
/* harmony import */ var _differenceInCalendarYears_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./differenceInCalendarYears.js */ "./node_modules/date-fns/differenceInCalendarYears.js");




/**
 * The {@link differenceInYears} function options.
 */

/**
 * @name differenceInYears
 * @category Year Helpers
 * @summary Get the number of full years between the given dates.
 *
 * @description
 * Get the number of full years between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of full years
 *
 * @example
 * // How many full years are between 31 December 2013 and 11 February 2015?
 * const result = differenceInYears(new Date(2015, 1, 11), new Date(2013, 11, 31))
 * //=> 1
 */
function differenceInYears(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = (0,_lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_0__.normalizeDates)(options?.in, laterDate, earlierDate);

  // -1 if the left date is earlier than the right date
  // 2023-12-31 - 2024-01-01 = -1
  const sign = (0,_compareAsc_js__WEBPACK_IMPORTED_MODULE_1__.compareAsc)(laterDate_, earlierDate_);

  // First calculate the difference in calendar years
  // 2024-01-01 - 2023-12-31 = 1 year
  const diff = Math.abs((0,_differenceInCalendarYears_js__WEBPACK_IMPORTED_MODULE_2__.differenceInCalendarYears)(laterDate_, earlierDate_));

  // Now we need to calculate if the difference is full. To do that we set
  // both dates to the same year and check if the both date's month and day
  // form a full year.
  laterDate_.setFullYear(1584);
  earlierDate_.setFullYear(1584);

  // For it to be true, when the later date is indeed later than the earlier date
  // (2026-02-01 - 2023-12-10 = 3 years), the difference is full if
  // the normalized later date is also later than the normalized earlier date.
  // In our example, 1584-02-01 is earlier than 1584-12-10, so the difference
  // is partial, hence we need to subtract 1 from the difference 3 - 1 = 2.
  const partial = (0,_compareAsc_js__WEBPACK_IMPORTED_MODULE_1__.compareAsc)(laterDate_, earlierDate_) === -sign;
  const result = sign * (diff - +partial);

  // Prevent negative zero
  return result === 0 ? 0 : result;
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (differenceInYears);

/***/ }),

/***/ "./node_modules/date-fns/endOfDay.js":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/endOfDay.js ***!
  \*******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   endOfDay: function() { return /* binding */ endOfDay; }
/* harmony export */ });
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");


/**
 * The {@link endOfDay} function options.
 */

/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a day
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */
function endOfDay(date, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (endOfDay);

/***/ }),

/***/ "./node_modules/date-fns/endOfHour.js":
/*!********************************************!*\
  !*** ./node_modules/date-fns/endOfHour.js ***!
  \********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   endOfHour: function() { return /* binding */ endOfHour; }
/* harmony export */ });
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");


/**
 * The {@link endOfHour} function options.
 */

/**
 * @name endOfHour
 * @category Hour Helpers
 * @summary Return the end of an hour for the given date.
 *
 * @description
 * Return the end of an hour for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of an hour
 *
 * @example
 * // The end of an hour for 2 September 2014 11:55:00:
 * const result = endOfHour(new Date(2014, 8, 2, 11, 55))
 * //=> Tue Sep 02 2014 11:59:59.999
 */
function endOfHour(date, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  _date.setMinutes(59, 59, 999);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (endOfHour);

/***/ }),

/***/ "./node_modules/date-fns/endOfMinute.js":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/endOfMinute.js ***!
  \**********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   endOfMinute: function() { return /* binding */ endOfMinute; }
/* harmony export */ });
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");


/**
 * The {@link endOfMinute} function options.
 */

/**
 * @name endOfMinute
 * @category Minute Helpers
 * @summary Return the end of a minute for the given date.
 *
 * @description
 * Return the end of a minute for the given date.
 * The result will be in the local timezone or the provided context.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a minute
 *
 * @example
 * // The end of a minute for 1 December 2014 22:15:45.400:
 * const result = endOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:59.999
 */
function endOfMinute(date, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  _date.setSeconds(59, 999);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (endOfMinute);

/***/ }),

/***/ "./node_modules/date-fns/endOfMonth.js":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/endOfMonth.js ***!
  \*********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   endOfMonth: function() { return /* binding */ endOfMonth; }
/* harmony export */ });
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");


/**
 * The {@link endOfMonth} function options.
 */

/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a month
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */
function endOfMonth(date, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  const month = _date.getMonth();
  _date.setFullYear(_date.getFullYear(), month + 1, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (endOfMonth);

/***/ }),

/***/ "./node_modules/date-fns/endOfQuarter.js":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/endOfQuarter.js ***!
  \***********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   endOfQuarter: function() { return /* binding */ endOfQuarter; }
/* harmony export */ });
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");


/**
 * The {@link endOfQuarter} function options.
 */

/**
 * @name endOfQuarter
 * @category Quarter Helpers
 * @summary Return the end of a year quarter for the given date.
 *
 * @description
 * Return the end of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a quarter
 *
 * @example
 * // The end of a quarter for 2 September 2014 11:55:00:
 * const result = endOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */
function endOfQuarter(date, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  const currentMonth = _date.getMonth();
  const month = currentMonth - currentMonth % 3 + 3;
  _date.setMonth(month, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (endOfQuarter);

/***/ }),

/***/ "./node_modules/date-fns/endOfSecond.js":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/endOfSecond.js ***!
  \**********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   endOfSecond: function() { return /* binding */ endOfSecond; }
/* harmony export */ });
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");


/**
 * The {@link endOfSecond} function options.
 */

/**
 * @name endOfSecond
 * @category Second Helpers
 * @summary Return the end of a second for the given date.
 *
 * @description
 * Return the end of a second for the given date.
 * The result will be in the local timezone if no `in` option is specified.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a second
 *
 * @example
 * // The end of a second for 1 December 2014 22:15:45.400:
 * const result = endOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:45.999
 */
function endOfSecond(date, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  _date.setMilliseconds(999);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (endOfSecond);

/***/ }),

/***/ "./node_modules/date-fns/endOfWeek.js":
/*!********************************************!*\
  !*** ./node_modules/date-fns/endOfWeek.js ***!
  \********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   endOfWeek: function() { return /* binding */ endOfWeek; }
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.js */ "./node_modules/date-fns/_lib/defaultOptions.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");



/**
 * The {@link endOfWeek} function options.
 */

/**
 * @name endOfWeek
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a week
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 23:59:59.999
 */
function endOfWeek(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_1__.toDate)(date, options?.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  _date.setDate(_date.getDate() + diff);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (endOfWeek);

/***/ }),

/***/ "./node_modules/date-fns/endOfYear.js":
/*!********************************************!*\
  !*** ./node_modules/date-fns/endOfYear.js ***!
  \********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   endOfYear: function() { return /* binding */ endOfYear; }
/* harmony export */ });
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");


/**
 * The {@link endOfYear} function options.
 */

/**
 * @name endOfYear
 * @category Year Helpers
 * @summary Return the end of a year for the given date.
 *
 * @description
 * Return the end of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The end of a year
 *
 * @example
 * // The end of a year for 2 September 2014 11:55:00:
 * const result = endOfYear(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Wed Dec 31 2014 23:59:59.999
 */
function endOfYear(date, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  const year = _date.getFullYear();
  _date.setFullYear(year + 1, 0, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (endOfYear);

/***/ }),

/***/ "./node_modules/date-fns/getISODay.js":
/*!********************************************!*\
  !*** ./node_modules/date-fns/getISODay.js ***!
  \********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getISODay: function() { return /* binding */ getISODay; }
/* harmony export */ });
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");


/**
 * The {@link getISODay} function options.
 */

/**
 * @name getISODay
 * @category Weekday Helpers
 * @summary Get the day of the ISO week of the given date.
 *
 * @description
 * Get the day of the ISO week of the given date,
 * which is 7 for Sunday, 1 for Monday etc.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The day of ISO week
 *
 * @example
 * // Which day of the ISO week is 26 February 2012?
 * const result = getISODay(new Date(2012, 1, 26))
 * //=> 7
 */
function getISODay(date, options) {
  const day = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in).getDay();
  return day === 0 ? 7 : day;
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (getISODay);

/***/ }),

/***/ "./node_modules/date-fns/isLastDayOfMonth.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/isLastDayOfMonth.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isLastDayOfMonth: function() { return /* binding */ isLastDayOfMonth; }
/* harmony export */ });
/* harmony import */ var _endOfDay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endOfDay.js */ "./node_modules/date-fns/endOfDay.js");
/* harmony import */ var _endOfMonth_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./endOfMonth.js */ "./node_modules/date-fns/endOfMonth.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");




/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is the last day of a month
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * const result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */
function isLastDayOfMonth(date, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  return +(0,_endOfDay_js__WEBPACK_IMPORTED_MODULE_1__.endOfDay)(_date, options) === +(0,_endOfMonth_js__WEBPACK_IMPORTED_MODULE_2__.endOfMonth)(_date, options);
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (isLastDayOfMonth);

/***/ }),

/***/ "./node_modules/date-fns/parse.js":
/*!****************************************!*\
  !*** ./node_modules/date-fns/parse.js ***!
  \****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   longFormatters: function() { return /* reexport safe */ _lib_format_longFormatters_js__WEBPACK_IMPORTED_MODULE_1__.longFormatters; },
/* harmony export */   parse: function() { return /* binding */ parse; },
/* harmony export */   parsers: function() { return /* reexport safe */ _parse_lib_parsers_js__WEBPACK_IMPORTED_MODULE_2__.parsers; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var _lib_defaultLocale_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_lib/defaultLocale.js */ "./node_modules/date-fns/locale/en-US.js");
/* harmony import */ var _lib_format_longFormatters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/format/longFormatters.js */ "./node_modules/date-fns/_lib/format/longFormatters.js");
/* harmony import */ var _lib_protectedTokens_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_lib/protectedTokens.js */ "./node_modules/date-fns/_lib/protectedTokens.js");
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");
/* harmony import */ var _getDefaultOptions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getDefaultOptions.js */ "./node_modules/date-fns/getDefaultOptions.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");
/* harmony import */ var _parse_lib_Setter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parse/_lib/Setter.js */ "./node_modules/date-fns/parse/_lib/Setter.js");
/* harmony import */ var _parse_lib_parsers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parse/_lib/parsers.js */ "./node_modules/date-fns/parse/_lib/parsers.js");










// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874


/**
 * The {@link parse} function options.
 */

// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const notWhitespaceRegExp = /\S/;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;

/**
 * @name parse
 * @category Common Helpers
 * @summary Parse the date.
 *
 * @description
 * Return the date parsed from string using the given format string.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters in the format string wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the format string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 5 below the table).
 *
 * Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
 * and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
 *
 * ```javascript
 * parse('23 AM', 'HH a', new Date())
 * //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
 * ```
 *
 * See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
 *
 * Accepted format string patterns:
 * | Unit                            |Prior| Pattern | Result examples                   | Notes |
 * |---------------------------------|-----|---------|-----------------------------------|-------|
 * | Era                             | 140 | G..GGG  | AD, BC                            |       |
 * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 |     | GGGGG   | A, B                              |       |
 * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
 * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
 * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
 * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
 * |                                 |     | yyyyy   | ...                               | 2,4   |
 * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
 * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
 * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
 * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
 * |                                 |     | YYYYY   | ...                               | 2,4   |
 * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
 * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
 * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
 * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
 * |                                 |     | RRRRR   | ...                               | 2,4,5 |
 * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
 * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
 * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
 * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
 * |                                 |     | uuuuu   | ...                               | 2,4   |
 * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
 * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
 * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
 * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | qq      | 01, 02, 03, 04                    |       |
 * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
 * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
 * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | MM      | 01, 02, ..., 12                   |       |
 * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | MMMM    | January, February, ..., December  | 2     |
 * |                                 |     | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
 * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | LL      | 01, 02, ..., 12                   |       |
 * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | LLLL    | January, February, ..., December  | 2     |
 * |                                 |     | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
 * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
 * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
 * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
 * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
 * |                                 |     | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
 * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
 * |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
 * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 |     | DDDD    | ...                               | 2     |
 * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
 * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
 * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
 * |                                 |     | iii     | Mon, Tue, Wed, ..., Sun           | 5     |
 * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
 * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
 * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 5     |
 * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | ee      | 02, 03, ..., 01                   |       |
 * |                                 |     | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | cc      | 02, 03, ..., 01                   |       |
 * |                                 |     | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
 * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
 * |                                 |     | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 |     | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
 * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
 * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
 * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
 * |                                 |     | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
 * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
 * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | mm      | 00, 01, ..., 59                   |       |
 * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
 * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | ss      | 00, 01, ..., 59                   |       |
 * | Seconds timestamp               |  40 | t       | 512969520                         |       |
 * |                                 |     | tt      | ...                               | 2     |
 * | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
 * |                                 |     | SS      | 00, 01, ..., 99                   |       |
 * |                                 |     | SSS     | 000, 001, ..., 999                |       |
 * |                                 |     | SSSS    | ...                               | 2     |
 * | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
 * |                                 |     | TT      | ...                               | 2     |
 * | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
 * |                                 |     | XX      | -0800, +0530, Z                   |       |
 * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
 * |                                 |     | xx      | -0800, +0530, +0000               |       |
 * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
 * |                                 |     | PP      | May 29, 1453                      |       |
 * |                                 |     | PPP     | May 29th, 1453                    |       |
 * |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
 * | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
 * |                                 |     | pp      | 12:00:00 AM                       |       |
 * | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
 * |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
 * |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
 * |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular.
 *    In `format` function, they will produce different result:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 *    `parse` will try to match both formatting and stand-alone units interchangeably.
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table:
 *    - for numerical units (`yyyyyyyy`) `parse` will try to match a number
 *      as wide as the sequence
 *    - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
 *      These variations are marked with "2" in the last column of the table.
 *
 * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 4. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` will try to guess the century of two digit year by proximity with `referenceDate`:
 *
 *    `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`
 *
 *    `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`
 *
 *    while `uu` will just assign the year as is:
 *
 *    `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`
 *
 *    `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [setISOWeekYear](https://date-fns.org/docs/setISOWeekYear)
 *    and [setWeekYear](https://date-fns.org/docs/setWeekYear)).
 *
 * 5. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 7. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
 *    on the given locale.
 *
 *    using `en-US` locale: `P` => `MM/dd/yyyy`
 *    using `en-US` locale: `p` => `hh:mm a`
 *    using `pt-BR` locale: `P` => `dd/MM/yyyy`
 *    using `pt-BR` locale: `p` => `HH:mm`
 *
 * Values will be assigned to the date in the descending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
 * the values will be taken from 3rd argument `referenceDate` which works as a context of parsing.
 *
 * `referenceDate` must be passed for correct work of the function.
 * If you're not sure which `referenceDate` to supply, create a new instance of Date:
 * `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
 * In this case parsing will be done in the context of the current date.
 * If `referenceDate` is `Invalid Date` or a value not convertible to valid `Date`,
 * then `Invalid Date` will be returned.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `referenceDate` will be returned.
 *
 * If parsing failed, `Invalid Date` will be returned.
 * Invalid Date is a Date, whose time value is NaN.
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param dateStr - The string to parse
 * @param formatStr - The string of tokens
 * @param referenceDate - defines values missing from the parsed dateString
 * @param options - An object with options.
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @returns The parsed date
 *
 * @throws `options.locale` must contain `match` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Parse 11 February 2014 from middle-endian format:
 * var result = parse('02/11/2014', 'MM/dd/yyyy', new Date())
 * //=> Tue Feb 11 2014 00:00:00
 *
 * @example
 * // Parse 28th of February in Esperanto locale in the context of 2010 year:
 * import eo from 'date-fns/locale/eo'
 * var result = parse('28-a de februaro', "do 'de' MMMM", new Date(2010, 0, 1), {
 *   locale: eo
 * })
 * //=> Sun Feb 28 2010 00:00:00
 */
function parse(dateStr, formatStr, referenceDate, options) {
  const invalidDate = () => (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_3__.constructFrom)(options?.in || referenceDate, NaN);
  const defaultOptions = (0,_getDefaultOptions_js__WEBPACK_IMPORTED_MODULE_4__.getDefaultOptions)();
  const locale = options?.locale ?? defaultOptions.locale ?? _lib_defaultLocale_js__WEBPACK_IMPORTED_MODULE_5__.enUS;
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
  if (!formatStr) return dateStr ? invalidDate() : (0,_toDate_js__WEBPACK_IMPORTED_MODULE_6__.toDate)(referenceDate, options?.in);
  const subFnOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale
  };

  // If timezone isn't specified, it will try to use the context or
  // the reference date and fallback to the system time zone.
  const setters = [new _parse_lib_Setter_js__WEBPACK_IMPORTED_MODULE_7__.DateTimezoneSetter(options?.in, referenceDate)];
  const tokens = formatStr.match(longFormattingTokensRegExp).map(substring => {
    const firstCharacter = substring[0];
    if (firstCharacter in _lib_format_longFormatters_js__WEBPACK_IMPORTED_MODULE_1__.longFormatters) {
      const longFormatter = _lib_format_longFormatters_js__WEBPACK_IMPORTED_MODULE_1__.longFormatters[firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp);
  const usedTokens = [];
  for (let token of tokens) {
    if (!options?.useAdditionalWeekYearTokens && (0,_lib_protectedTokens_js__WEBPACK_IMPORTED_MODULE_8__.isProtectedWeekYearToken)(token)) {
      (0,_lib_protectedTokens_js__WEBPACK_IMPORTED_MODULE_8__.warnOrThrowProtectedError)(token, formatStr, dateStr);
    }
    if (!options?.useAdditionalDayOfYearTokens && (0,_lib_protectedTokens_js__WEBPACK_IMPORTED_MODULE_8__.isProtectedDayOfYearToken)(token)) {
      (0,_lib_protectedTokens_js__WEBPACK_IMPORTED_MODULE_8__.warnOrThrowProtectedError)(token, formatStr, dateStr);
    }
    const firstCharacter = token[0];
    const parser = _parse_lib_parsers_js__WEBPACK_IMPORTED_MODULE_2__.parsers[firstCharacter];
    if (parser) {
      const {
        incompatibleTokens
      } = parser;
      if (Array.isArray(incompatibleTokens)) {
        const incompatibleToken = usedTokens.find(usedToken => incompatibleTokens.includes(usedToken.token) || usedToken.token === firstCharacter);
        if (incompatibleToken) {
          throw new RangeError(`The format string mustn't contain \`${incompatibleToken.fullToken}\` and \`${token}\` at the same time`);
        }
      } else if (parser.incompatibleTokens === "*" && usedTokens.length > 0) {
        throw new RangeError(`The format string mustn't contain \`${token}\` and any other token at the same time`);
      }
      usedTokens.push({
        token: firstCharacter,
        fullToken: token
      });
      const parseResult = parser.run(dateStr, token, locale.match, subFnOptions);
      if (!parseResult) {
        return invalidDate();
      }
      setters.push(parseResult.setter);
      dateStr = parseResult.rest;
    } else {
      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
      }

      // Replace two single quote characters with one single quote character
      if (token === "''") {
        token = "'";
      } else if (firstCharacter === "'") {
        token = cleanEscapedString(token);
      }

      // Cut token from string, or, if string doesn't match the token, return Invalid Date
      if (dateStr.indexOf(token) === 0) {
        dateStr = dateStr.slice(token.length);
      } else {
        return invalidDate();
      }
    }
  }

  // Check if the remaining input contains something other than whitespace
  if (dateStr.length > 0 && notWhitespaceRegExp.test(dateStr)) {
    return invalidDate();
  }
  const uniquePrioritySetters = setters.map(setter => setter.priority).sort((a, b) => b - a).filter((priority, index, array) => array.indexOf(priority) === index).map(priority => setters.filter(setter => setter.priority === priority).sort((a, b) => b.subPriority - a.subPriority)).map(setterArray => setterArray[0]);
  let date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_6__.toDate)(referenceDate, options?.in);
  if (isNaN(+date)) return invalidDate();
  const flags = {};
  for (const setter of uniquePrioritySetters) {
    if (!setter.validate(date, subFnOptions)) {
      return invalidDate();
    }
    const result = setter.set(date, flags, subFnOptions);
    // Result is tuple (date, flags)
    if (Array.isArray(result)) {
      date = result[0];
      Object.assign(flags, result[1]);
      // Result is date
    } else {
      date = result;
    }
  }
  return date;
}
function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (parse);

/***/ }),

/***/ "./node_modules/date-fns/parseISO.js":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/parseISO.js ***!
  \*******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseISO: function() { return /* binding */ parseISO; }
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.js */ "./node_modules/date-fns/constants.js");
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");




/**
 * The {@link parseISO} function options.
 */

/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param argument - The value to convert
 * @param options - An object with options
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */
function parseISO(argument, options) {
  const invalidDate = () => (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(options?.in, NaN);
  const additionalDigits = options?.additionalDigits ?? 2;
  const dateStrings = splitDateString(argument);
  let date;
  if (dateStrings.date) {
    const parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }
  if (!date || isNaN(+date)) return invalidDate();
  const timestamp = +date;
  let time = 0;
  let offset;
  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) return invalidDate();
  }
  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) return invalidDate();
  } else {
    const tmpDate = new Date(timestamp + time);
    const result = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_1__.toDate)(0, options?.in);
    result.setFullYear(tmpDate.getUTCFullYear(), tmpDate.getUTCMonth(), tmpDate.getUTCDate());
    result.setHours(tmpDate.getUTCHours(), tmpDate.getUTCMinutes(), tmpDate.getUTCSeconds(), tmpDate.getUTCMilliseconds());
    return result;
  }
  return (0,_toDate_js__WEBPACK_IMPORTED_MODULE_1__.toDate)(timestamp + time + offset, options?.in);
}
const patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
const dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
const timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
const timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
  const dateStrings = {};
  const array = dateString.split(patterns.dateTimeDelimiter);
  let timeString;

  // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].
  if (array.length > 2) {
    return dateStrings;
  }
  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }
  if (timeString) {
    const token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], "");
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  const regex = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + additionalDigits) + "})|(\\d{2}|[+-]\\d{" + (2 + additionalDigits) + "})$)");
  const captures = dateString.match(regex);
  // Invalid ISO-formatted year
  if (!captures) return {
    year: NaN,
    restDateString: ""
  };
  const year = captures[1] ? parseInt(captures[1]) : null;
  const century = captures[2] ? parseInt(captures[2]) : null;

  // either year or century is null, not both
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}
function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  const captures = dateString.match(dateRegex);
  // Invalid ISO-formatted string
  if (!captures) return new Date(NaN);
  const isWeekDate = !!captures[4];
  const dayOfYear = parseDateUnit(captures[1]);
  const month = parseDateUnit(captures[2]) - 1;
  const day = parseDateUnit(captures[3]);
  const week = parseDateUnit(captures[4]);
  const dayOfWeek = parseDateUnit(captures[5]) - 1;
  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    const date = new Date(0);
    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}
function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
  const captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  const hours = parseTimeUnit(captures[1]);
  const minutes = parseTimeUnit(captures[2]);
  const seconds = parseTimeUnit(captures[3]);
  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }
  return hours * _constants_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}
function parseTimeUnit(value) {
  return value && parseFloat(value.replace(",", ".")) || 0;
}
function parseTimezone(timezoneString) {
  if (timezoneString === "Z") return 0;
  const captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  const sign = captures[1] === "+" ? -1 : 1;
  const hours = parseInt(captures[2]);
  const minutes = captures[3] && parseInt(captures[3]) || 0;
  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }
  return sign * (hours * _constants_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  const date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  const fourthOfJanuaryDay = date.getUTCDay() || 7;
  const diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// Validation functions

// February is null to handle the leap year (using ||)
const daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }
  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (parseISO);

/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/Parser.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/Parser.js ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Parser: function() { return /* binding */ Parser; }
/* harmony export */ });
/* harmony import */ var _Setter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Setter.js */ "./node_modules/date-fns/parse/_lib/Setter.js");

class Parser {
  run(dateString, token, match, options) {
    const result = this.parse(dateString, token, match, options);
    if (!result) {
      return null;
    }
    return {
      setter: new _Setter_js__WEBPACK_IMPORTED_MODULE_0__.ValueSetter(result.value, this.validate, this.set, this.priority, this.subPriority),
      rest: result.rest
    };
  }
  validate(_utcDate, _value, _options) {
    return true;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/Setter.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/Setter.js ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateTimezoneSetter: function() { return /* binding */ DateTimezoneSetter; },
/* harmony export */   Setter: function() { return /* binding */ Setter; },
/* harmony export */   ValueSetter: function() { return /* binding */ ValueSetter; }
/* harmony export */ });
/* harmony import */ var D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constructFrom.js */ "./node_modules/date-fns/constructFrom.js");
/* harmony import */ var _transpose_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../transpose.js */ "./node_modules/date-fns/transpose.js");



const TIMEZONE_UNIT_PRIORITY = 10;
class Setter {
  constructor() {
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "subPriority", 0);
  }
  validate(_utcDate, _options) {
    return true;
  }
}
class ValueSetter extends Setter {
  constructor(value, validateValue, setValue, priority, subPriority) {
    super();
    this.value = value;
    this.validateValue = validateValue;
    this.setValue = setValue;
    this.priority = priority;
    if (subPriority) {
      this.subPriority = subPriority;
    }
  }
  validate(date, options) {
    return this.validateValue(date, this.value, options);
  }
  set(date, flags, options) {
    return this.setValue(date, flags, this.value, options);
  }
}
class DateTimezoneSetter extends Setter {
  constructor(context, reference) {
    super();
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", TIMEZONE_UNIT_PRIORITY);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "subPriority", -1);
    this.context = context || (date => (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(reference, date));
  }
  set(date, flags) {
    if (flags.timestampIsSet) return date;
    return (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, (0,_transpose_js__WEBPACK_IMPORTED_MODULE_2__.transpose)(date, this.context));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/constants.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/constants.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   numericPatterns: function() { return /* binding */ numericPatterns; },
/* harmony export */   timezonePatterns: function() { return /* binding */ timezonePatterns; }
/* harmony export */ });
const numericPatterns = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59

  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999

  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/ // 0 to 9999, -0 to -9999
};
const timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};

/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parsers: function() { return /* binding */ parsers; }
/* harmony export */ });
/* harmony import */ var _parsers_EraParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parsers/EraParser.js */ "./node_modules/date-fns/parse/_lib/parsers/EraParser.js");
/* harmony import */ var _parsers_YearParser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsers/YearParser.js */ "./node_modules/date-fns/parse/_lib/parsers/YearParser.js");
/* harmony import */ var _parsers_LocalWeekYearParser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parsers/LocalWeekYearParser.js */ "./node_modules/date-fns/parse/_lib/parsers/LocalWeekYearParser.js");
/* harmony import */ var _parsers_ISOWeekYearParser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parsers/ISOWeekYearParser.js */ "./node_modules/date-fns/parse/_lib/parsers/ISOWeekYearParser.js");
/* harmony import */ var _parsers_ExtendedYearParser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsers/ExtendedYearParser.js */ "./node_modules/date-fns/parse/_lib/parsers/ExtendedYearParser.js");
/* harmony import */ var _parsers_QuarterParser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parsers/QuarterParser.js */ "./node_modules/date-fns/parse/_lib/parsers/QuarterParser.js");
/* harmony import */ var _parsers_StandAloneQuarterParser_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parsers/StandAloneQuarterParser.js */ "./node_modules/date-fns/parse/_lib/parsers/StandAloneQuarterParser.js");
/* harmony import */ var _parsers_MonthParser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parsers/MonthParser.js */ "./node_modules/date-fns/parse/_lib/parsers/MonthParser.js");
/* harmony import */ var _parsers_StandAloneMonthParser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parsers/StandAloneMonthParser.js */ "./node_modules/date-fns/parse/_lib/parsers/StandAloneMonthParser.js");
/* harmony import */ var _parsers_LocalWeekParser_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parsers/LocalWeekParser.js */ "./node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.js");
/* harmony import */ var _parsers_ISOWeekParser_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parsers/ISOWeekParser.js */ "./node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.js");
/* harmony import */ var _parsers_DateParser_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parsers/DateParser.js */ "./node_modules/date-fns/parse/_lib/parsers/DateParser.js");
/* harmony import */ var _parsers_DayOfYearParser_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parsers/DayOfYearParser.js */ "./node_modules/date-fns/parse/_lib/parsers/DayOfYearParser.js");
/* harmony import */ var _parsers_DayParser_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./parsers/DayParser.js */ "./node_modules/date-fns/parse/_lib/parsers/DayParser.js");
/* harmony import */ var _parsers_LocalDayParser_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./parsers/LocalDayParser.js */ "./node_modules/date-fns/parse/_lib/parsers/LocalDayParser.js");
/* harmony import */ var _parsers_StandAloneLocalDayParser_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./parsers/StandAloneLocalDayParser.js */ "./node_modules/date-fns/parse/_lib/parsers/StandAloneLocalDayParser.js");
/* harmony import */ var _parsers_ISODayParser_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./parsers/ISODayParser.js */ "./node_modules/date-fns/parse/_lib/parsers/ISODayParser.js");
/* harmony import */ var _parsers_AMPMParser_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./parsers/AMPMParser.js */ "./node_modules/date-fns/parse/_lib/parsers/AMPMParser.js");
/* harmony import */ var _parsers_AMPMMidnightParser_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./parsers/AMPMMidnightParser.js */ "./node_modules/date-fns/parse/_lib/parsers/AMPMMidnightParser.js");
/* harmony import */ var _parsers_DayPeriodParser_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./parsers/DayPeriodParser.js */ "./node_modules/date-fns/parse/_lib/parsers/DayPeriodParser.js");
/* harmony import */ var _parsers_Hour1to12Parser_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./parsers/Hour1to12Parser.js */ "./node_modules/date-fns/parse/_lib/parsers/Hour1to12Parser.js");
/* harmony import */ var _parsers_Hour0to23Parser_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./parsers/Hour0to23Parser.js */ "./node_modules/date-fns/parse/_lib/parsers/Hour0to23Parser.js");
/* harmony import */ var _parsers_Hour0To11Parser_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./parsers/Hour0To11Parser.js */ "./node_modules/date-fns/parse/_lib/parsers/Hour0To11Parser.js");
/* harmony import */ var _parsers_Hour1To24Parser_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./parsers/Hour1To24Parser.js */ "./node_modules/date-fns/parse/_lib/parsers/Hour1To24Parser.js");
/* harmony import */ var _parsers_MinuteParser_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./parsers/MinuteParser.js */ "./node_modules/date-fns/parse/_lib/parsers/MinuteParser.js");
/* harmony import */ var _parsers_SecondParser_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./parsers/SecondParser.js */ "./node_modules/date-fns/parse/_lib/parsers/SecondParser.js");
/* harmony import */ var _parsers_FractionOfSecondParser_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./parsers/FractionOfSecondParser.js */ "./node_modules/date-fns/parse/_lib/parsers/FractionOfSecondParser.js");
/* harmony import */ var _parsers_ISOTimezoneWithZParser_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./parsers/ISOTimezoneWithZParser.js */ "./node_modules/date-fns/parse/_lib/parsers/ISOTimezoneWithZParser.js");
/* harmony import */ var _parsers_ISOTimezoneParser_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./parsers/ISOTimezoneParser.js */ "./node_modules/date-fns/parse/_lib/parsers/ISOTimezoneParser.js");
/* harmony import */ var _parsers_TimestampSecondsParser_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./parsers/TimestampSecondsParser.js */ "./node_modules/date-fns/parse/_lib/parsers/TimestampSecondsParser.js");
/* harmony import */ var _parsers_TimestampMillisecondsParser_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./parsers/TimestampMillisecondsParser.js */ "./node_modules/date-fns/parse/_lib/parsers/TimestampMillisecondsParser.js");
































/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O* | Timezone (GMT)                 |
 * |  p  |                                |  P  |                                |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z* | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 */
const parsers = {
  G: new _parsers_EraParser_js__WEBPACK_IMPORTED_MODULE_0__.EraParser(),
  y: new _parsers_YearParser_js__WEBPACK_IMPORTED_MODULE_1__.YearParser(),
  Y: new _parsers_LocalWeekYearParser_js__WEBPACK_IMPORTED_MODULE_2__.LocalWeekYearParser(),
  R: new _parsers_ISOWeekYearParser_js__WEBPACK_IMPORTED_MODULE_3__.ISOWeekYearParser(),
  u: new _parsers_ExtendedYearParser_js__WEBPACK_IMPORTED_MODULE_4__.ExtendedYearParser(),
  Q: new _parsers_QuarterParser_js__WEBPACK_IMPORTED_MODULE_5__.QuarterParser(),
  q: new _parsers_StandAloneQuarterParser_js__WEBPACK_IMPORTED_MODULE_6__.StandAloneQuarterParser(),
  M: new _parsers_MonthParser_js__WEBPACK_IMPORTED_MODULE_7__.MonthParser(),
  L: new _parsers_StandAloneMonthParser_js__WEBPACK_IMPORTED_MODULE_8__.StandAloneMonthParser(),
  w: new _parsers_LocalWeekParser_js__WEBPACK_IMPORTED_MODULE_9__.LocalWeekParser(),
  I: new _parsers_ISOWeekParser_js__WEBPACK_IMPORTED_MODULE_10__.ISOWeekParser(),
  d: new _parsers_DateParser_js__WEBPACK_IMPORTED_MODULE_11__.DateParser(),
  D: new _parsers_DayOfYearParser_js__WEBPACK_IMPORTED_MODULE_12__.DayOfYearParser(),
  E: new _parsers_DayParser_js__WEBPACK_IMPORTED_MODULE_13__.DayParser(),
  e: new _parsers_LocalDayParser_js__WEBPACK_IMPORTED_MODULE_14__.LocalDayParser(),
  c: new _parsers_StandAloneLocalDayParser_js__WEBPACK_IMPORTED_MODULE_15__.StandAloneLocalDayParser(),
  i: new _parsers_ISODayParser_js__WEBPACK_IMPORTED_MODULE_16__.ISODayParser(),
  a: new _parsers_AMPMParser_js__WEBPACK_IMPORTED_MODULE_17__.AMPMParser(),
  b: new _parsers_AMPMMidnightParser_js__WEBPACK_IMPORTED_MODULE_18__.AMPMMidnightParser(),
  B: new _parsers_DayPeriodParser_js__WEBPACK_IMPORTED_MODULE_19__.DayPeriodParser(),
  h: new _parsers_Hour1to12Parser_js__WEBPACK_IMPORTED_MODULE_20__.Hour1to12Parser(),
  H: new _parsers_Hour0to23Parser_js__WEBPACK_IMPORTED_MODULE_21__.Hour0to23Parser(),
  K: new _parsers_Hour0To11Parser_js__WEBPACK_IMPORTED_MODULE_22__.Hour0To11Parser(),
  k: new _parsers_Hour1To24Parser_js__WEBPACK_IMPORTED_MODULE_23__.Hour1To24Parser(),
  m: new _parsers_MinuteParser_js__WEBPACK_IMPORTED_MODULE_24__.MinuteParser(),
  s: new _parsers_SecondParser_js__WEBPACK_IMPORTED_MODULE_25__.SecondParser(),
  S: new _parsers_FractionOfSecondParser_js__WEBPACK_IMPORTED_MODULE_26__.FractionOfSecondParser(),
  X: new _parsers_ISOTimezoneWithZParser_js__WEBPACK_IMPORTED_MODULE_27__.ISOTimezoneWithZParser(),
  x: new _parsers_ISOTimezoneParser_js__WEBPACK_IMPORTED_MODULE_28__.ISOTimezoneParser(),
  t: new _parsers_TimestampSecondsParser_js__WEBPACK_IMPORTED_MODULE_29__.TimestampSecondsParser(),
  T: new _parsers_TimestampMillisecondsParser_js__WEBPACK_IMPORTED_MODULE_30__.TimestampMillisecondsParser()
};

/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/AMPMMidnightParser.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/AMPMMidnightParser.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AMPMMidnightParser: function() { return /* binding */ AMPMMidnightParser; }
/* harmony export */ });
/* harmony import */ var D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/parse/_lib/utils.js");



class AMPMMidnightParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 80);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(dateString, token, match) {
    switch (token) {
      case "b":
      case "bb":
      case "bbb":
        return match.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return match.dayPeriod(dateString, {
          width: "wide",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(date, _flags, value) {
    date.setHours((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.dayPeriodEnumToHours)(value), 0, 0, 0);
    return date;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/AMPMParser.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/AMPMParser.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AMPMParser: function() { return /* binding */ AMPMParser; }
/* harmony export */ });
/* harmony import */ var D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/parse/_lib/utils.js");



class AMPMParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 80);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(dateString, token, match) {
    switch (token) {
      case "a":
      case "aa":
      case "aaa":
        return match.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return match.dayPeriod(dateString, {
          width: "wide",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(date, _flags, value) {
    date.setHours((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.dayPeriodEnumToHours)(value), 0, 0, 0);
    return date;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/DateParser.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/DateParser.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateParser: function() { return /* binding */ DateParser; }
/* harmony export */ });
/* harmony import */ var D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.js */ "./node_modules/date-fns/parse/_lib/constants.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/parse/_lib/utils.js");




const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Day of the month
class DateParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 90);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "subPriority", 1);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]);
  }
  parse(dateString, token, match) {
    switch (token) {
      case "d":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNumericPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.numericPatterns.date, dateString);
      case "do":
        return match.ordinalNumber(dateString, {
          unit: "date"
        });
      default:
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(token.length, dateString);
    }
  }
  validate(date, value) {
    const year = date.getFullYear();
    const isLeapYear = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isLeapYearIndex)(year);
    const month = date.getMonth();
    if (isLeapYear) {
      return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
    } else {
      return value >= 1 && value <= DAYS_IN_MONTH[month];
    }
  }
  set(date, _flags, value) {
    date.setDate(value);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/DayOfYearParser.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/DayOfYearParser.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayOfYearParser: function() { return /* binding */ DayOfYearParser; }
/* harmony export */ });
/* harmony import */ var D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.js */ "./node_modules/date-fns/parse/_lib/constants.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/parse/_lib/utils.js");




class DayOfYearParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 90);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "subpriority", 1);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]);
  }
  parse(dateString, token, match) {
    switch (token) {
      case "D":
      case "DD":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNumericPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.numericPatterns.dayOfYear, dateString);
      case "Do":
        return match.ordinalNumber(dateString, {
          unit: "date"
        });
      default:
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(token.length, dateString);
    }
  }
  validate(date, value) {
    const year = date.getFullYear();
    const isLeapYear = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isLeapYearIndex)(year);
    if (isLeapYear) {
      return value >= 1 && value <= 366;
    } else {
      return value >= 1 && value <= 365;
    }
  }
  set(date, _flags, value) {
    date.setMonth(0, value);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/DayParser.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/DayParser.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayParser: function() { return /* binding */ DayParser; }
/* harmony export */ });
/* harmony import */ var D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _setDay_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../setDay.js */ "./node_modules/date-fns/setDay.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/parse/_lib/Parser.js");




// Day of week
class DayParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 90);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(dateString, token, match) {
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return match.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.day(dateString, {
          width: "short",
          context: "formatting"
        }) || match.day(dateString, {
          width: "narrow",
          context: "formatting"
        });

      // T
      case "EEEEE":
        return match.day(dateString, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return match.day(dateString, {
          width: "short",
          context: "formatting"
        }) || match.day(dateString, {
          width: "narrow",
          context: "formatting"
        });

      // Tuesday
      case "EEEE":
      default:
        return match.day(dateString, {
          width: "wide",
          context: "formatting"
        }) || match.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.day(dateString, {
          width: "short",
          context: "formatting"
        }) || match.day(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 6;
  }
  set(date, _flags, value, options) {
    date = (0,_setDay_js__WEBPACK_IMPORTED_MODULE_2__.setDay)(date, value, options);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/DayPeriodParser.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/DayPeriodParser.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayPeriodParser: function() { return /* binding */ DayPeriodParser; }
/* harmony export */ });
/* harmony import */ var D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/parse/_lib/utils.js");




// in the morning, in the afternoon, in the evening, at night
class DayPeriodParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 80);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(dateString, token, match) {
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return match.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return match.dayPeriod(dateString, {
          width: "wide",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(date, _flags, value) {
    date.setHours((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.dayPeriodEnumToHours)(value), 0, 0, 0);
    return date;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/EraParser.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/EraParser.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EraParser: function() { return /* binding */ EraParser; }
/* harmony export */ });
/* harmony import */ var D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/parse/_lib/Parser.js");


class EraParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 140);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(dateString, token, match) {
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return match.era(dateString, {
          width: "abbreviated"
        }) || match.era(dateString, {
          width: "narrow"
        });

      // A, B
      case "GGGGG":
        return match.era(dateString, {
          width: "narrow"
        });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return match.era(dateString, {
          width: "wide"
        }) || match.era(dateString, {
          width: "abbreviated"
        }) || match.era(dateString, {
          width: "narrow"
        });
    }
  }
  set(date, flags, value) {
    flags.era = value;
    date.setFullYear(value, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/ExtendedYearParser.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/ExtendedYearParser.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtendedYearParser: function() { return /* binding */ ExtendedYearParser; }
/* harmony export */ });
/* harmony import */ var D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/parse/_lib/utils.js");



class ExtendedYearParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 130);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(dateString, token) {
    if (token === "u") {
      return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigitsSigned)(4, dateString);
    }
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigitsSigned)(token.length, dateString);
  }
  set(date, _flags, value) {
    date.setFullYear(value, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/FractionOfSecondParser.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/FractionOfSecondParser.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FractionOfSecondParser: function() { return /* binding */ FractionOfSecondParser; }
/* harmony export */ });
/* harmony import */ var D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/parse/_lib/utils.js");



class FractionOfSecondParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 30);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(dateString, token) {
    const valueCallback = value => Math.trunc(value * Math.pow(10, -token.length + 3));
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(token.length, dateString), valueCallback);
  }
  set(date, _flags, value) {
    date.setMilliseconds(value);
    return date;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/Hour0To11Parser.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/Hour0To11Parser.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hour0To11Parser: function() { return /* binding */ Hour0To11Parser; }
/* harmony export */ });
/* harmony import */ var D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.js */ "./node_modules/date-fns/parse/_lib/constants.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/parse/_lib/utils.js");




class Hour0To11Parser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 70);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(dateString, token, match) {
    switch (token) {
      case "K":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNumericPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.numericPatterns.hour11h, dateString);
      case "Ko":
        return match.ordinalNumber(dateString, {
          unit: "hour"
        });
      default:
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 11;
  }
  set(date, _flags, value) {
    const isPM = date.getHours() >= 12;
    if (isPM && value < 12) {
      date.setHours(value + 12, 0, 0, 0);
    } else {
      date.setHours(value, 0, 0, 0);
    }
    return date;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/Hour0to23Parser.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/Hour0to23Parser.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hour0to23Parser: function() { return /* binding */ Hour0to23Parser; }
/* harmony export */ });
/* harmony import */ var D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.js */ "./node_modules/date-fns/parse/_lib/constants.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/parse/_lib/utils.js");




class Hour0to23Parser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 70);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(dateString, token, match) {
    switch (token) {
      case "H":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNumericPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.numericPatterns.hour23h, dateString);
      case "Ho":
        return match.ordinalNumber(dateString, {
          unit: "hour"
        });
      default:
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 23;
  }
  set(date, _flags, value) {
    date.setHours(value, 0, 0, 0);
    return date;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/Hour1To24Parser.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/Hour1To24Parser.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hour1To24Parser: function() { return /* binding */ Hour1To24Parser; }
/* harmony export */ });
/* harmony import */ var D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.js */ "./node_modules/date-fns/parse/_lib/constants.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/parse/_lib/utils.js");




class Hour1To24Parser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 70);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(dateString, token, match) {
    switch (token) {
      case "k":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNumericPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.numericPatterns.hour24h, dateString);
      case "ko":
        return match.ordinalNumber(dateString, {
          unit: "hour"
        });
      default:
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 24;
  }
  set(date, _flags, value) {
    const hours = value <= 24 ? value % 24 : value;
    date.setHours(hours, 0, 0, 0);
    return date;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/Hour1to12Parser.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/Hour1to12Parser.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hour1to12Parser: function() { return /* binding */ Hour1to12Parser; }
/* harmony export */ });
/* harmony import */ var D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.js */ "./node_modules/date-fns/parse/_lib/constants.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/parse/_lib/utils.js");




class Hour1to12Parser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 70);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(dateString, token, match) {
    switch (token) {
      case "h":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNumericPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.numericPatterns.hour12h, dateString);
      case "ho":
        return match.ordinalNumber(dateString, {
          unit: "hour"
        });
      default:
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 12;
  }
  set(date, _flags, value) {
    const isPM = date.getHours() >= 12;
    if (isPM && value < 12) {
      date.setHours(value + 12, 0, 0, 0);
    } else if (!isPM && value === 12) {
      date.setHours(0, 0, 0, 0);
    } else {
      date.setHours(value, 0, 0, 0);
    }
    return date;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/ISODayParser.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/ISODayParser.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ISODayParser: function() { return /* binding */ ISODayParser; }
/* harmony export */ });
/* harmony import */ var D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _setISODay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../setISODay.js */ "./node_modules/date-fns/setISODay.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/parse/_lib/utils.js");





// ISO day of week
class ISODayParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 90);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]);
  }
  parse(dateString, token, match) {
    const valueCallback = value => {
      if (value === 0) {
        return 7;
      }
      return value;
    };
    switch (token) {
      // 2
      case "i":
      case "ii":
        // 02
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(token.length, dateString);
      // 2nd
      case "io":
        return match.ordinalNumber(dateString, {
          unit: "day"
        });
      // Tue
      case "iii":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)(match.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.day(dateString, {
          width: "short",
          context: "formatting"
        }) || match.day(dateString, {
          width: "narrow",
          context: "formatting"
        }), valueCallback);
      // T
      case "iiiii":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)(match.day(dateString, {
          width: "narrow",
          context: "formatting"
        }), valueCallback);
      // Tu
      case "iiiiii":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)(match.day(dateString, {
          width: "short",
          context: "formatting"
        }) || match.day(dateString, {
          width: "narrow",
          context: "formatting"
        }), valueCallback);
      // Tuesday
      case "iiii":
      default:
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)(match.day(dateString, {
          width: "wide",
          context: "formatting"
        }) || match.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.day(dateString, {
          width: "short",
          context: "formatting"
        }) || match.day(dateString, {
          width: "narrow",
          context: "formatting"
        }), valueCallback);
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 7;
  }
  set(date, _flags, value) {
    date = (0,_setISODay_js__WEBPACK_IMPORTED_MODULE_3__.setISODay)(date, value);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/ISOTimezoneParser.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/ISOTimezoneParser.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ISOTimezoneParser: function() { return /* binding */ ISOTimezoneParser; }
/* harmony export */ });
/* harmony import */ var D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constructFrom.js */ "./node_modules/date-fns/constructFrom.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getTimezoneOffsetInMilliseconds.js */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.js */ "./node_modules/date-fns/parse/_lib/constants.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/parse/_lib/utils.js");







// Timezone (ISO-8601)
class ISOTimezoneParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 10);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(dateString, token) {
    switch (token) {
      case "x":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseTimezonePattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.timezonePatterns.basicOptionalMinutes, dateString);
      case "xx":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseTimezonePattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.timezonePatterns.basic, dateString);
      case "xxxx":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseTimezonePattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.timezonePatterns.basicOptionalSeconds, dateString);
      case "xxxxx":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseTimezonePattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.timezonePatterns.extendedOptionalSeconds, dateString);
      case "xxx":
      default:
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseTimezonePattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.timezonePatterns.extended, dateString);
    }
  }
  set(date, flags, value) {
    if (flags.timestampIsSet) return date;
    return (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_4__.constructFrom)(date, date.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_js__WEBPACK_IMPORTED_MODULE_5__.getTimezoneOffsetInMilliseconds)(date) - value);
  }
}

/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/ISOTimezoneWithZParser.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/ISOTimezoneWithZParser.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ISOTimezoneWithZParser: function() { return /* binding */ ISOTimezoneWithZParser; }
/* harmony export */ });
/* harmony import */ var D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constructFrom.js */ "./node_modules/date-fns/constructFrom.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getTimezoneOffsetInMilliseconds.js */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.js */ "./node_modules/date-fns/parse/_lib/constants.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/parse/_lib/utils.js");







// Timezone (ISO-8601. +00:00 is `'Z'`)
class ISOTimezoneWithZParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 10);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(dateString, token) {
    switch (token) {
      case "X":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseTimezonePattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.timezonePatterns.basicOptionalMinutes, dateString);
      case "XX":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseTimezonePattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.timezonePatterns.basic, dateString);
      case "XXXX":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseTimezonePattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.timezonePatterns.basicOptionalSeconds, dateString);
      case "XXXXX":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseTimezonePattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.timezonePatterns.extendedOptionalSeconds, dateString);
      case "XXX":
      default:
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseTimezonePattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.timezonePatterns.extended, dateString);
    }
  }
  set(date, flags, value) {
    if (flags.timestampIsSet) return date;
    return (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_4__.constructFrom)(date, date.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_js__WEBPACK_IMPORTED_MODULE_5__.getTimezoneOffsetInMilliseconds)(date) - value);
  }
}

/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ISOWeekParser: function() { return /* binding */ ISOWeekParser; }
/* harmony export */ });
/* harmony import */ var D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _setISOWeek_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../setISOWeek.js */ "./node_modules/date-fns/setISOWeek.js");
/* harmony import */ var _startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../startOfISOWeek.js */ "./node_modules/date-fns/startOfISOWeek.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.js */ "./node_modules/date-fns/parse/_lib/constants.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/parse/_lib/utils.js");







// ISO week of year
class ISOWeekParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 100);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]);
  }
  parse(dateString, token, match) {
    switch (token) {
      case "I":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNumericPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.numericPatterns.week, dateString);
      case "Io":
        return match.ordinalNumber(dateString, {
          unit: "week"
        });
      default:
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 53;
  }
  set(date, _flags, value) {
    return (0,_startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_4__.startOfISOWeek)((0,_setISOWeek_js__WEBPACK_IMPORTED_MODULE_5__.setISOWeek)(date, value));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/ISOWeekYearParser.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/ISOWeekYearParser.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ISOWeekYearParser: function() { return /* binding */ ISOWeekYearParser; }
/* harmony export */ });
/* harmony import */ var D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../startOfISOWeek.js */ "./node_modules/date-fns/startOfISOWeek.js");
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constructFrom.js */ "./node_modules/date-fns/constructFrom.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/parse/_lib/utils.js");






// ISO week-numbering year
class ISOWeekYearParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 130);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]);
  }
  parse(dateString, token) {
    if (token === "R") {
      return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigitsSigned)(4, dateString);
    }
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigitsSigned)(token.length, dateString);
  }
  set(date, _flags, value) {
    const firstWeekOfYear = (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_3__.constructFrom)(date, 0);
    firstWeekOfYear.setFullYear(value, 0, 4);
    firstWeekOfYear.setHours(0, 0, 0, 0);
    return (0,_startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_4__.startOfISOWeek)(firstWeekOfYear);
  }
}

/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/LocalDayParser.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/LocalDayParser.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalDayParser: function() { return /* binding */ LocalDayParser; }
/* harmony export */ });
/* harmony import */ var D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _setDay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../setDay.js */ "./node_modules/date-fns/setDay.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/parse/_lib/utils.js");





// Local day of week
class LocalDayParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 90);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]);
  }
  parse(dateString, token, match, options) {
    const valueCallback = value => {
      // We want here floor instead of trunc, so we get -7 for value 0 instead of 0
      const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
      return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
    };
    switch (token) {
      // 3
      case "e":
      case "ee":
        // 03
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(token.length, dateString), valueCallback);
      // 3rd
      case "eo":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)(match.ordinalNumber(dateString, {
          unit: "day"
        }), valueCallback);
      // Tue
      case "eee":
        return match.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.day(dateString, {
          width: "short",
          context: "formatting"
        }) || match.day(dateString, {
          width: "narrow",
          context: "formatting"
        });

      // T
      case "eeeee":
        return match.day(dateString, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return match.day(dateString, {
          width: "short",
          context: "formatting"
        }) || match.day(dateString, {
          width: "narrow",
          context: "formatting"
        });

      // Tuesday
      case "eeee":
      default:
        return match.day(dateString, {
          width: "wide",
          context: "formatting"
        }) || match.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.day(dateString, {
          width: "short",
          context: "formatting"
        }) || match.day(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 6;
  }
  set(date, _flags, value, options) {
    date = (0,_setDay_js__WEBPACK_IMPORTED_MODULE_3__.setDay)(date, value, options);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalWeekParser: function() { return /* binding */ LocalWeekParser; }
/* harmony export */ });
/* harmony import */ var D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _setWeek_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../setWeek.js */ "./node_modules/date-fns/setWeek.js");
/* harmony import */ var _startOfWeek_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../startOfWeek.js */ "./node_modules/date-fns/startOfWeek.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.js */ "./node_modules/date-fns/parse/_lib/constants.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/parse/_lib/utils.js");







// Local week of year
class LocalWeekParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 100);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]);
  }
  parse(dateString, token, match) {
    switch (token) {
      case "w":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNumericPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.numericPatterns.week, dateString);
      case "wo":
        return match.ordinalNumber(dateString, {
          unit: "week"
        });
      default:
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 53;
  }
  set(date, _flags, value, options) {
    return (0,_startOfWeek_js__WEBPACK_IMPORTED_MODULE_4__.startOfWeek)((0,_setWeek_js__WEBPACK_IMPORTED_MODULE_5__.setWeek)(date, value, options), options);
  }
}

/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/LocalWeekYearParser.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/LocalWeekYearParser.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalWeekYearParser: function() { return /* binding */ LocalWeekYearParser; }
/* harmony export */ });
/* harmony import */ var D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _getWeekYear_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../getWeekYear.js */ "./node_modules/date-fns/getWeekYear.js");
/* harmony import */ var _startOfWeek_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../startOfWeek.js */ "./node_modules/date-fns/startOfWeek.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/parse/_lib/utils.js");






// Local week-numbering year
class LocalWeekYearParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 130);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]);
  }
  parse(dateString, token, match) {
    const valueCallback = year => ({
      year,
      isTwoDigitYear: token === "YY"
    });
    switch (token) {
      case "Y":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(4, dateString), valueCallback);
      case "Yo":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)(match.ordinalNumber(dateString, {
          unit: "year"
        }), valueCallback);
      default:
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(token.length, dateString), valueCallback);
    }
  }
  validate(_date, value) {
    return value.isTwoDigitYear || value.year > 0;
  }
  set(date, flags, value, options) {
    const currentYear = (0,_getWeekYear_js__WEBPACK_IMPORTED_MODULE_3__.getWeekYear)(date, options);
    if (value.isTwoDigitYear) {
      const normalizedTwoDigitYear = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.normalizeTwoDigitYear)(value.year, currentYear);
      date.setFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
      date.setHours(0, 0, 0, 0);
      return (0,_startOfWeek_js__WEBPACK_IMPORTED_MODULE_4__.startOfWeek)(date, options);
    }
    const year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
    date.setFullYear(year, 0, options.firstWeekContainsDate);
    date.setHours(0, 0, 0, 0);
    return (0,_startOfWeek_js__WEBPACK_IMPORTED_MODULE_4__.startOfWeek)(date, options);
  }
}

/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/MinuteParser.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/MinuteParser.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MinuteParser: function() { return /* binding */ MinuteParser; }
/* harmony export */ });
/* harmony import */ var D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.js */ "./node_modules/date-fns/parse/_lib/constants.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/parse/_lib/utils.js");




class MinuteParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 60);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(dateString, token, match) {
    switch (token) {
      case "m":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNumericPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.numericPatterns.minute, dateString);
      case "mo":
        return match.ordinalNumber(dateString, {
          unit: "minute"
        });
      default:
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 59;
  }
  set(date, _flags, value) {
    date.setMinutes(value, 0, 0);
    return date;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/MonthParser.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/MonthParser.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MonthParser: function() { return /* binding */ MonthParser; }
/* harmony export */ });
/* harmony import */ var D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.js */ "./node_modules/date-fns/parse/_lib/constants.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/parse/_lib/utils.js");




class MonthParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 110);
  }
  parse(dateString, token, match) {
    const valueCallback = value => value - 1;
    switch (token) {
      // 1, 2, ..., 12
      case "M":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNumericPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.numericPatterns.month, dateString), valueCallback);
      // 01, 02, ..., 12
      case "MM":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(2, dateString), valueCallback);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)(match.ordinalNumber(dateString, {
          unit: "month"
        }), valueCallback);
      // Jan, Feb, ..., Dec
      case "MMM":
        return match.month(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.month(dateString, {
          width: "narrow",
          context: "formatting"
        });

      // J, F, ..., D
      case "MMMMM":
        return match.month(dateString, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return match.month(dateString, {
          width: "wide",
          context: "formatting"
        }) || match.month(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.month(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 11;
  }
  set(date, _flags, value) {
    date.setMonth(value, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/QuarterParser.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/QuarterParser.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuarterParser: function() { return /* binding */ QuarterParser; }
/* harmony export */ });
/* harmony import */ var D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/parse/_lib/utils.js");



class QuarterParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 120);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]);
  }
  parse(dateString, token, match) {
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
      case "QQ":
        // 01, 02, 03, 04
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(token.length, dateString);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return match.ordinalNumber(dateString, {
          unit: "quarter"
        });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return match.quarter(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.quarter(dateString, {
          width: "narrow",
          context: "formatting"
        });

      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return match.quarter(dateString, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return match.quarter(dateString, {
          width: "wide",
          context: "formatting"
        }) || match.quarter(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.quarter(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 4;
  }
  set(date, _flags, value) {
    date.setMonth((value - 1) * 3, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/SecondParser.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/SecondParser.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SecondParser: function() { return /* binding */ SecondParser; }
/* harmony export */ });
/* harmony import */ var D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.js */ "./node_modules/date-fns/parse/_lib/constants.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/parse/_lib/utils.js");




class SecondParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 50);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(dateString, token, match) {
    switch (token) {
      case "s":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNumericPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.numericPatterns.second, dateString);
      case "so":
        return match.ordinalNumber(dateString, {
          unit: "second"
        });
      default:
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 59;
  }
  set(date, _flags, value) {
    date.setSeconds(value, 0);
    return date;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/StandAloneLocalDayParser.js":
/*!******************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/StandAloneLocalDayParser.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StandAloneLocalDayParser: function() { return /* binding */ StandAloneLocalDayParser; }
/* harmony export */ });
/* harmony import */ var D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _setDay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../setDay.js */ "./node_modules/date-fns/setDay.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/parse/_lib/utils.js");





// Stand-alone local day of week
class StandAloneLocalDayParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 90);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]);
  }
  parse(dateString, token, match, options) {
    const valueCallback = value => {
      // We want here floor instead of trunc, so we get -7 for value 0 instead of 0
      const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
      return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
    };
    switch (token) {
      // 3
      case "c":
      case "cc":
        // 03
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(token.length, dateString), valueCallback);
      // 3rd
      case "co":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)(match.ordinalNumber(dateString, {
          unit: "day"
        }), valueCallback);
      // Tue
      case "ccc":
        return match.day(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match.day(dateString, {
          width: "short",
          context: "standalone"
        }) || match.day(dateString, {
          width: "narrow",
          context: "standalone"
        });

      // T
      case "ccccc":
        return match.day(dateString, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return match.day(dateString, {
          width: "short",
          context: "standalone"
        }) || match.day(dateString, {
          width: "narrow",
          context: "standalone"
        });

      // Tuesday
      case "cccc":
      default:
        return match.day(dateString, {
          width: "wide",
          context: "standalone"
        }) || match.day(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match.day(dateString, {
          width: "short",
          context: "standalone"
        }) || match.day(dateString, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 6;
  }
  set(date, _flags, value, options) {
    date = (0,_setDay_js__WEBPACK_IMPORTED_MODULE_3__.setDay)(date, value, options);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/StandAloneMonthParser.js":
/*!***************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/StandAloneMonthParser.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StandAloneMonthParser: function() { return /* binding */ StandAloneMonthParser; }
/* harmony export */ });
/* harmony import */ var D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.js */ "./node_modules/date-fns/parse/_lib/constants.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/parse/_lib/utils.js");




class StandAloneMonthParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 110);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]);
  }
  parse(dateString, token, match) {
    const valueCallback = value => value - 1;
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNumericPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.numericPatterns.month, dateString), valueCallback);
      // 01, 02, ..., 12
      case "LL":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(2, dateString), valueCallback);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)(match.ordinalNumber(dateString, {
          unit: "month"
        }), valueCallback);
      // Jan, Feb, ..., Dec
      case "LLL":
        return match.month(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match.month(dateString, {
          width: "narrow",
          context: "standalone"
        });

      // J, F, ..., D
      case "LLLLL":
        return match.month(dateString, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return match.month(dateString, {
          width: "wide",
          context: "standalone"
        }) || match.month(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match.month(dateString, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 11;
  }
  set(date, _flags, value) {
    date.setMonth(value, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/StandAloneQuarterParser.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/StandAloneQuarterParser.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StandAloneQuarterParser: function() { return /* binding */ StandAloneQuarterParser; }
/* harmony export */ });
/* harmony import */ var D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/parse/_lib/utils.js");



class StandAloneQuarterParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 120);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]);
  }
  parse(dateString, token, match) {
    switch (token) {
      // 1, 2, 3, 4
      case "q":
      case "qq":
        // 01, 02, 03, 04
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(token.length, dateString);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return match.ordinalNumber(dateString, {
          unit: "quarter"
        });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return match.quarter(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match.quarter(dateString, {
          width: "narrow",
          context: "standalone"
        });

      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return match.quarter(dateString, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return match.quarter(dateString, {
          width: "wide",
          context: "standalone"
        }) || match.quarter(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match.quarter(dateString, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 4;
  }
  set(date, _flags, value) {
    date.setMonth((value - 1) * 3, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/TimestampMillisecondsParser.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/TimestampMillisecondsParser.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimestampMillisecondsParser: function() { return /* binding */ TimestampMillisecondsParser; }
/* harmony export */ });
/* harmony import */ var D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constructFrom.js */ "./node_modules/date-fns/constructFrom.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/parse/_lib/utils.js");




class TimestampMillisecondsParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 20);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", "*");
  }
  parse(dateString) {
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseAnyDigitsSigned)(dateString);
  }
  set(date, _flags, value) {
    return [(0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_3__.constructFrom)(date, value), {
      timestampIsSet: true
    }];
  }
}

/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/TimestampSecondsParser.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/TimestampSecondsParser.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimestampSecondsParser: function() { return /* binding */ TimestampSecondsParser; }
/* harmony export */ });
/* harmony import */ var D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constructFrom.js */ "./node_modules/date-fns/constructFrom.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/parse/_lib/utils.js");




class TimestampSecondsParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 40);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", "*");
  }
  parse(dateString) {
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseAnyDigitsSigned)(dateString);
  }
  set(date, _flags, value) {
    return [(0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_3__.constructFrom)(date, value * 1000), {
      timestampIsSet: true
    }];
  }
}

/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/YearParser.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/YearParser.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   YearParser: function() { return /* binding */ YearParser; }
/* harmony export */ });
/* harmony import */ var D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/parse/_lib/utils.js");




// From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
// | Year     |     y | yy |   yyy |  yyyy | yyyyy |
// |----------|-------|----|-------|-------|-------|
// | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
// | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
// | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
// | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
// | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
class YearParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 130);
    (0,D_weather_clone_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(dateString, token, match) {
    const valueCallback = year => ({
      year,
      isTwoDigitYear: token === "yy"
    });
    switch (token) {
      case "y":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(4, dateString), valueCallback);
      case "yo":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)(match.ordinalNumber(dateString, {
          unit: "year"
        }), valueCallback);
      default:
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(token.length, dateString), valueCallback);
    }
  }
  validate(_date, value) {
    return value.isTwoDigitYear || value.year > 0;
  }
  set(date, flags, value) {
    const currentYear = date.getFullYear();
    if (value.isTwoDigitYear) {
      const normalizedTwoDigitYear = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.normalizeTwoDigitYear)(value.year, currentYear);
      date.setFullYear(normalizedTwoDigitYear, 0, 1);
      date.setHours(0, 0, 0, 0);
      return date;
    }
    const year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
    date.setFullYear(year, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/utils.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/utils.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dayPeriodEnumToHours: function() { return /* binding */ dayPeriodEnumToHours; },
/* harmony export */   isLeapYearIndex: function() { return /* binding */ isLeapYearIndex; },
/* harmony export */   mapValue: function() { return /* binding */ mapValue; },
/* harmony export */   normalizeTwoDigitYear: function() { return /* binding */ normalizeTwoDigitYear; },
/* harmony export */   parseAnyDigitsSigned: function() { return /* binding */ parseAnyDigitsSigned; },
/* harmony export */   parseNDigits: function() { return /* binding */ parseNDigits; },
/* harmony export */   parseNDigitsSigned: function() { return /* binding */ parseNDigitsSigned; },
/* harmony export */   parseNumericPattern: function() { return /* binding */ parseNumericPattern; },
/* harmony export */   parseTimezonePattern: function() { return /* binding */ parseTimezonePattern; }
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants.js */ "./node_modules/date-fns/constants.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./node_modules/date-fns/parse/_lib/constants.js");


function mapValue(parseFnResult, mapFn) {
  if (!parseFnResult) {
    return parseFnResult;
  }
  return {
    value: mapFn(parseFnResult.value),
    rest: parseFnResult.rest
  };
}
function parseNumericPattern(pattern, dateString) {
  const matchResult = dateString.match(pattern);
  if (!matchResult) {
    return null;
  }
  return {
    value: parseInt(matchResult[0], 10),
    rest: dateString.slice(matchResult[0].length)
  };
}
function parseTimezonePattern(pattern, dateString) {
  const matchResult = dateString.match(pattern);
  if (!matchResult) {
    return null;
  }

  // Input is 'Z'
  if (matchResult[0] === "Z") {
    return {
      value: 0,
      rest: dateString.slice(1)
    };
  }
  const sign = matchResult[1] === "+" ? 1 : -1;
  const hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  const minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  const seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
  return {
    value: sign * (hours * _constants_js__WEBPACK_IMPORTED_MODULE_0__.millisecondsInHour + minutes * _constants_js__WEBPACK_IMPORTED_MODULE_0__.millisecondsInMinute + seconds * _constants_js__WEBPACK_IMPORTED_MODULE_0__.millisecondsInSecond),
    rest: dateString.slice(matchResult[0].length)
  };
}
function parseAnyDigitsSigned(dateString) {
  return parseNumericPattern(_constants_js__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.anyDigitsSigned, dateString);
}
function parseNDigits(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(_constants_js__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.singleDigit, dateString);
    case 2:
      return parseNumericPattern(_constants_js__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.twoDigits, dateString);
    case 3:
      return parseNumericPattern(_constants_js__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.threeDigits, dateString);
    case 4:
      return parseNumericPattern(_constants_js__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.fourDigits, dateString);
    default:
      return parseNumericPattern(new RegExp("^\\d{1," + n + "}"), dateString);
  }
}
function parseNDigitsSigned(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(_constants_js__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.singleDigitSigned, dateString);
    case 2:
      return parseNumericPattern(_constants_js__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.twoDigitsSigned, dateString);
    case 3:
      return parseNumericPattern(_constants_js__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.threeDigitsSigned, dateString);
    case 4:
      return parseNumericPattern(_constants_js__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.fourDigitsSigned, dateString);
    default:
      return parseNumericPattern(new RegExp("^-?\\d{1," + n + "}"), dateString);
  }
}
function dayPeriodEnumToHours(dayPeriod) {
  switch (dayPeriod) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  const isCommonEra = currentYear > 0;
  // Absolute number of the current year:
  // 1 -> 1 AC
  // 0 -> 1 BC
  // -1 -> 2 BC
  const absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
  let result;
  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    const rangeEnd = absCurrentYear + 50;
    const rangeEndCentury = Math.trunc(rangeEnd / 100) * 100;
    const isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }
  return isCommonEra ? result : 1 - result;
}
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

/***/ }),

/***/ "./node_modules/date-fns/setDay.js":
/*!*****************************************!*\
  !*** ./node_modules/date-fns/setDay.js ***!
  \*****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setDay: function() { return /* binding */ setDay; }
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.js */ "./node_modules/date-fns/_lib/defaultOptions.js");
/* harmony import */ var _addDays_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addDays.js */ "./node_modules/date-fns/addDays.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");




/**
 * The {@link setDay} function options.
 */

/**
 * @name setDay
 * @category Weekday Helpers
 * @summary Set the day of the week to the given date.
 *
 * @description
 * Set the day of the week to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param day - The day of the week of the new date
 * @param options - An object with options.
 *
 * @returns The new date with the day of the week set
 *
 * @example
 * // Set week day to Sunday, with the default weekStartsOn of Sunday:
 * const result = setDay(new Date(2014, 8, 1), 0)
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // Set week day to Sunday, with a weekStartsOn of Monday:
 * const result = setDay(new Date(2014, 8, 1), 0, { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 00:00:00
 */
function setDay(date, day, options) {
  const defaultOptions = (0,_lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
  const date_ = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_1__.toDate)(date, options?.in);
  const currentDay = date_.getDay();
  const remainder = day % 7;
  const dayIndex = (remainder + 7) % 7;
  const delta = 7 - weekStartsOn;
  const diff = day < 0 || day > 6 ? day - (currentDay + delta) % 7 : (dayIndex + delta) % 7 - (currentDay + delta) % 7;
  return (0,_addDays_js__WEBPACK_IMPORTED_MODULE_2__.addDays)(date_, diff, options);
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (setDay);

/***/ }),

/***/ "./node_modules/date-fns/setISODay.js":
/*!********************************************!*\
  !*** ./node_modules/date-fns/setISODay.js ***!
  \********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setISODay: function() { return /* binding */ setISODay; }
/* harmony export */ });
/* harmony import */ var _addDays_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addDays.js */ "./node_modules/date-fns/addDays.js");
/* harmony import */ var _getISODay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getISODay.js */ "./node_modules/date-fns/getISODay.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");




/**
 * The {@link setISODay} function options.
 */

/**
 * @name setISODay
 * @category Weekday Helpers
 * @summary Set the day of the ISO week to the given date.
 *
 * @description
 * Set the day of the ISO week to the given date.
 * ISO week starts with Monday.
 * 7 is the index of Sunday, 1 is the index of Monday, etc.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param day - The day of the ISO week of the new date
 * @param options - An object with options
 *
 * @returns The new date with the day of the ISO week set
 *
 * @example
 * // Set Sunday to 1 September 2014:
 * const result = setISODay(new Date(2014, 8, 1), 7)
 * //=> Sun Sep 07 2014 00:00:00
 */
function setISODay(date, day, options) {
  const date_ = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  const currentDay = (0,_getISODay_js__WEBPACK_IMPORTED_MODULE_1__.getISODay)(date_, options);
  const diff = day - currentDay;
  return (0,_addDays_js__WEBPACK_IMPORTED_MODULE_2__.addDays)(date_, diff, options);
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (setISODay);

/***/ }),

/***/ "./node_modules/date-fns/setISOWeek.js":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/setISOWeek.js ***!
  \*********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setISOWeek: function() { return /* binding */ setISOWeek; }
/* harmony export */ });
/* harmony import */ var _getISOWeek_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getISOWeek.js */ "./node_modules/date-fns/getISOWeek.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");



/**
 * The {@link setISOWeek} function options.
 */

/**
 * @name setISOWeek
 * @category ISO Week Helpers
 * @summary Set the ISO week to the given date.
 *
 * @description
 * Set the ISO week to the given date, saving the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The `Date` type of the context function.
 *
 * @param date - The date to be changed
 * @param week - The ISO week of the new date
 * @param options - An object with options
 *
 * @returns The new date with the ISO week set
 *
 * @example
 * // Set the 53rd ISO week to 7 August 2004:
 * const result = setISOWeek(new Date(2004, 7, 7), 53)
 * //=> Sat Jan 01 2005 00:00:00
 */
function setISOWeek(date, week, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  const diff = (0,_getISOWeek_js__WEBPACK_IMPORTED_MODULE_1__.getISOWeek)(_date, options) - week;
  _date.setDate(_date.getDate() - diff * 7);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (setISOWeek);

/***/ }),

/***/ "./node_modules/date-fns/setWeek.js":
/*!******************************************!*\
  !*** ./node_modules/date-fns/setWeek.js ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setWeek: function() { return /* binding */ setWeek; }
/* harmony export */ });
/* harmony import */ var _getWeek_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeek.js */ "./node_modules/date-fns/getWeek.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");



/**
 * The {@link setWeek} function options.
 */

/**
 * @name setWeek
 * @category Week Helpers
 * @summary Set the local week to the given date.
 *
 * @description
 * Set the local week to the given date, saving the weekday number.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param week - The week of the new date
 * @param options - An object with options
 *
 * @returns The new date with the local week set
 *
 * @example
 * // Set the 1st week to 2 January 2005 with default options:
 * const result = setWeek(new Date(2005, 0, 2), 1)
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // Set the 1st week to 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January:
 * const result = setWeek(new Date(2005, 0, 2), 1, {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Sun Jan 4 2004 00:00:00
 */
function setWeek(date, week, options) {
  const date_ = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  const diff = (0,_getWeek_js__WEBPACK_IMPORTED_MODULE_1__.getWeek)(date_, options) - week;
  date_.setDate(date_.getDate() - diff * 7);
  return (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date_, options?.in);
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (setWeek);

/***/ }),

/***/ "./node_modules/date-fns/startOfHour.js":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfHour.js ***!
  \**********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startOfHour: function() { return /* binding */ startOfHour; }
/* harmony export */ });
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");


/**
 * The {@link startOfHour} function options.
 */

/**
 * @name startOfHour
 * @category Hour Helpers
 * @summary Return the start of an hour for the given date.
 *
 * @description
 * Return the start of an hour for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of an hour
 *
 * @example
 * // The start of an hour for 2 September 2014 11:55:00:
 * const result = startOfHour(new Date(2014, 8, 2, 11, 55))
 * //=> Tue Sep 02 2014 11:00:00
 */
function startOfHour(date, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  _date.setMinutes(0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (startOfHour);

/***/ }),

/***/ "./node_modules/date-fns/startOfMinute.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/startOfMinute.js ***!
  \************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startOfMinute: function() { return /* binding */ startOfMinute; }
/* harmony export */ });
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");


/**
 * The {@link startOfMinute} function options.
 */

/**
 * @name startOfMinute
 * @category Minute Helpers
 * @summary Return the start of a minute for the given date.
 *
 * @description
 * Return the start of a minute for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a minute
 *
 * @example
 * // The start of a minute for 1 December 2014 22:15:45.400:
 * const result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:00
 */
function startOfMinute(date, options) {
  const date_ = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  date_.setSeconds(0, 0);
  return date_;
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (startOfMinute);

/***/ }),

/***/ "./node_modules/date-fns/startOfMonth.js":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfMonth.js ***!
  \***********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startOfMonth: function() { return /* binding */ startOfMonth; }
/* harmony export */ });
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");


/**
 * The {@link startOfMonth} function options.
 */

/**
 * @name startOfMonth
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date. The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments.
 * Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed,
 * or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a month
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfMonth(date, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  _date.setDate(1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (startOfMonth);

/***/ }),

/***/ "./node_modules/date-fns/startOfQuarter.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/startOfQuarter.js ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startOfQuarter: function() { return /* binding */ startOfQuarter; }
/* harmony export */ });
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");


/**
 * The {@link startOfQuarter} function options.
 */

/**
 * @name startOfQuarter
 * @category Quarter Helpers
 * @summary Return the start of a year quarter for the given date.
 *
 * @description
 * Return the start of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a quarter
 *
 * @example
 * // The start of a quarter for 2 September 2014 11:55:00:
 * const result = startOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Jul 01 2014 00:00:00
 */
function startOfQuarter(date, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  const currentMonth = _date.getMonth();
  const month = currentMonth - currentMonth % 3;
  _date.setMonth(month, 1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (startOfQuarter);

/***/ }),

/***/ "./node_modules/date-fns/startOfSecond.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/startOfSecond.js ***!
  \************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startOfSecond: function() { return /* binding */ startOfSecond; }
/* harmony export */ });
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");


/**
 * The {@link startOfSecond} function options.
 */

/**
 * @name startOfSecond
 * @category Second Helpers
 * @summary Return the start of a second for the given date.
 *
 * @description
 * Return the start of a second for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a second
 *
 * @example
 * // The start of a second for 1 December 2014 22:15:45.400:
 * const result = startOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:45.000
 */
function startOfSecond(date, options) {
  const date_ = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  date_.setMilliseconds(0);
  return date_;
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (startOfSecond);

/***/ }),

/***/ "./node_modules/date-fns/transpose.js":
/*!********************************************!*\
  !*** ./node_modules/date-fns/transpose.js ***!
  \********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   transpose: function() { return /* binding */ transpose; }
/* harmony export */ });
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");


/**
 * @name transpose
 * @category Generic Helpers
 * @summary Transpose the date to the given constructor.
 *
 * @description
 * The function transposes the date to the given constructor. It helps you
 * to transpose the date in the system time zone to say `UTCDate` or any other
 * date extension.
 *
 * @typeParam InputDate - The input `Date` type derived from the passed argument.
 * @typeParam ResultDate - The result `Date` type derived from the passed constructor.
 *
 * @param date - The date to use values from
 * @param constructor - The date constructor to use
 *
 * @returns Date transposed to the given constructor
 *
 * @example
 * // Create July 10, 2022 00:00 in locale time zone
 * const date = new Date(2022, 6, 10)
 * //=> 'Sun Jul 10 2022 00:00:00 GMT+0800 (Singapore Standard Time)'
 *
 * @example
 * // Transpose the date to July 10, 2022 00:00 in UTC
 * transpose(date, UTCDate)
 * //=> 'Sun Jul 10 2022 00:00:00 GMT+0000 (Coordinated Universal Time)'
 */
function transpose(date, constructor) {
  const date_ = isConstructor(constructor) ? new constructor(0) : (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(constructor, 0);
  date_.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
  date_.setHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
  return date_;
}
function isConstructor(constructor) {
  return typeof constructor === "function" && constructor.prototype?.constructor === constructor;
}

// Fallback for modularized imports:
/* harmony default export */ __webpack_exports__["default"] = (transpose);

/***/ })

}]);
//# sourceMappingURL=src_views_search_tide-page_index_vue.js.map