(self["webpackChunkweather_web"] = self["webpackChunkweather_web"] || []).push([["create-widget-view"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/widget/widget-page.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/widget/widget-page.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var element_plus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! element-plus */ "./node_modules/element-plus/es/components/notification/index.mjs");
/* harmony import */ var _utils_EncoderDecoderUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/EncoderDecoderUtils */ "./src/utils/EncoderDecoderUtils.js");
/* harmony import */ var _utils_converValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/converValue.js */ "./src/utils/converValue.js");
/* harmony import */ var _common_baseComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/baseComponent.vue */ "./src/components/common/baseComponent.vue");





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "widget-page",
  components: {
    BaseComponent: _common_baseComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  setup() {
    const successCopy = () => {
      (0,element_plus__WEBPACK_IMPORTED_MODULE_3__.ElNotification)({
        title: "Success",
        message: "Copy URL Iframe Widget Success",
        type: "success",
        duration: 3000,
        position: "top-right",
        dangerouslyUseHTMLString: true,
        showClose: true,
        // Show the close button
        iconClass: "el-icon-check",
        // Custom icon class
        customClass: "custom-notification",
        // Custom CSS class
        offset: 50 // Offset from the top
      });
    };
    const successCreate = () => {
      (0,element_plus__WEBPACK_IMPORTED_MODULE_3__.ElNotification)({
        title: "Success",
        message: "Create Iframe Widget Success",
        type: "success",
        duration: 3000,
        position: "top-right",
        dangerouslyUseHTMLString: true,
        showClose: true,
        // Show the close button
        iconClass: "el-icon-check",
        // Custom icon class
        customClass: "custom-notification",
        // Custom CSS class
        offset: 50 // Offset from the top
      });
    };
    return {
      successCopy,
      successCreate
    };
  },
  data() {
    return {
      valueAddress: "",
      valueSampling: "option_1",
      valueNumberDay: "number_3",
      valueCodeWidget: "",
      options: [],
      valueSliderWidth: 300,
      color: "#ff0000",
      listAddressVietName: [],
      reloadKey: 0,
      isVisible: true,
      valueAddressLocation: ""
    };
  },
  computed: {
    ...(0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapGetters)("commonModule", ["weatherWidgetOptionGetters"]),
    classThemeBg() {
      const themeValue = this.$store.state.commonModule.themeValue;
      const savedTheme = themeValue ? themeValue : localStorage.getItem("theme");
      if (savedTheme === "light") {
        return "bg-color-light";
      }
      return "bg-color-dark";
    },
    optionsSampling() {
      return [{
        value: "option_1",
        label: this.$t(`Sample_{number}`, {
          number: 1
        })
      }, {
        value: "option_2",
        label: this.$t(`Sample_{number}`, {
          number: 2
        })
      }, {
        value: "option_3",
        label: this.$t(`Sample_{number}`, {
          number: 3
        })
      }, {
        value: "option_4",
        label: this.$t(`Sample_{number}`, {
          number: 4
        })
      }];
    },
    optionsNumberDay() {
      return [{
        value: "number_3",
        label: this.$t(`{number}_days`, {
          number: 3
        })
      }, {
        value: "number_5",
        label: this.$t(`{number}_days`, {
          number: 5
        })
      }, {
        value: "number_7",
        label: this.$t(`{number}_days`, {
          number: 7
        })
      }];
    },
    titleBackgroundColor: {
      get() {
        const valueTheme = this.$store.state.commonModule.themeValue;
        if (valueTheme === "light") {
          return this.$store.state.commonModule.titleBackgroundColorLight;
        } else {
          return this.$store.state.commonModule.titleBackgroundColorDark;
        }
      },
      set(value) {
        this.SET_TITLE_BACKGROUND_COLOR(value);
      }
    },
    descriptionColor: {
      get() {
        const valueTheme = this.$store.state.commonModule.themeValue;
        if (valueTheme === "light") {
          return this.$store.state.commonModule.descriptionColorLight;
        } else {
          return this.$store.state.commonModule.descriptionColorDark;
        }
      },
      set(value) {
        this.setDescriptionColor(value);
      }
    },
    titleColor: {
      get() {
        const valueTheme = this.$store.state.commonModule.themeValue;
        if (valueTheme === "light") {
          return this.$store.state.commonModule.titleColorLight;
        } else {
          return this.$store.state.commonModule.titleColorDark;
        }
      },
      set(value) {
        this.setTitleColor(value);
      }
    },
    textColor: {
      get() {
        const valueTheme = this.$store.state.commonModule.themeValue;
        if (valueTheme === "light") {
          return this.$store.state.commonModule.textColorLight;
        } else {
          return this.$store.state.commonModule.textColorDark;
        }
      },
      set(value) {
        this.setTextColor(value);
      }
    },
    lineColor: {
      get() {
        const valueTheme = this.$store.state.commonModule.themeValue;
        if (valueTheme === "light") {
          return this.$store.state.commonModule.lineColorLight;
        } else {
          return this.$store.state.commonModule.lineColorDark;
        }
      },
      set(value) {
        this.setLineColor(value);
      }
    },
    renderObjectWidget() {
      return this.$store.state.weatherModule.objectWidget;
    },
    renderCountry() {
      return this.$store.state.weatherModule.cityCountry;
    },
    languageParam() {
      const languageRouter = this.$route.params;
      return Object.keys(languageRouter).length !== 0 ? languageRouter.language !== "en" && languageRouter.language !== "vi" ? "en" : languageRouter.language : this.$i18n.locale !== "en" && this.$i18n.locale !== "vi" ? "en" : this.$i18n.locale;
    }
  },
  mounted() {
    const retrievedArray = JSON.parse(localStorage.getItem("currentLocationChome"));
    this.valueAddressLocation = this.$t(`city.city_${this.languageParam}.${retrievedArray?.city_key}`) + ", " + retrievedArray.country;
    localStorage.setItem("titleWidget", JSON.stringify(this.valueAddressLocation));
    const objectOptionWidgetNew = {
      valueSample: this.valueSampling,
      valueNumber: this.valueNumberDay,
      valueSliderWidth: this.valueSliderWidth
    };
    this.setOptionWidget(objectOptionWidgetNew);
    if (this.renderObjectWidget) {
      this.onClickCreateWidget(false);
    }
  },
  methods: {
    ...(0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapMutations)("commonModule", ["setTitleBackgroundColor", "setDescriptionColor", "setTitleColor", "setTextColor", "setLineColor", "setNumberDataDaily", "SET_TITLE_BACKGROUND_COLOR"]),
    ...(0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapMutations)("weatherModule", ["setNumberDailyWeather", "setTitleWidget", "setOptionWidget"]),
    ...(0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapActions)("commonModule", ["getFormattedAddress", "getWeatherWidget"]),
    ...(0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapActions)("weatherModule", ["getWeatherByWidget"]),
    onChangeSampling(value) {
      this.valueSampling = value;
      if (value === "option_1") {
        this.setTitleBackgroundColor("#0D274C");
      }
      if (value === "option_2") {
        this.setTitleBackgroundColor("linear-gradient(102deg, #0b8429 17.75%, #085502 84.8%)");
      }
      if (value === "option_3") {
        this.setTitleBackgroundColor("linear-gradient(102deg, #0b8429 17.75%, #085502 84.8%)");
      }
      if (value === "option_4") {
        this.setTitleBackgroundColor("linear-gradient(102deg, #4f7ffa 17.75%, #335fd1 84.8%)");
      }
    },
    onChangeSliderWidth(value) {
      this.valueSliderWidth = value;
    },
    convertCapitalizeWords(value) {
      return (0,_utils_converValue_js__WEBPACK_IMPORTED_MODULE_1__.capitalizeWords)(value);
    },
    async onChangeChoose(value) {
      this.valueAddress = null; // Reset giá trị trước khi cập nhật
      this.$nextTick(() => {});
      this.valueAddress = value;
      this.valueAddressLocation = value.label;
      const latitudeValue = value.lat;
      const longitudeValue = value.lng;
      const keyLanguageStorage = this.$route.params.language ? this.$route.params.language : this.$i18n.locale;
      const param = `version=1&type=8&app_id=amobi.weather.forecast.radar.rain&request=https://api.forecast.io/forecast/TOH_KEY/${latitudeValue},${longitudeValue}?lang=${keyLanguageStorage}`;
      const encodeDataWeather = (0,_utils_EncoderDecoderUtils__WEBPACK_IMPORTED_MODULE_0__.encodeBase64)(param);
      await this.getWeatherByWidget(encodeDataWeather);
      localStorage.setItem("titleWidget", JSON.stringify(this.valueAddressLocation));
      this.setTitleWidget(this.valueAddressLocation);
    },
    async handleInput(event) {
      const valueSearch = event.target.value;
      if (valueSearch.length === 0) {
        this.options = [];
        return;
      }
      const urlParam = `version=1&type=4&app_id=amobi.weather.forecast.radar.rain&request=https://maps.googleapis.com/maps/api/geocode/json?address=${(0,_utils_EncoderDecoderUtils__WEBPACK_IMPORTED_MODULE_0__.urlEncodeString)(valueSearch)}&key=TOH_KEY`;
      const value = (0,_utils_EncoderDecoderUtils__WEBPACK_IMPORTED_MODULE_0__.encodeBase64)(urlParam);
      await this.getWeatherWidget(value);
      const newData = this.weatherWidgetOptionGetters;
      if (!newData || !newData.label) {
        console.error("Dữ liệu không hợp lệ:", newData);
        return;
      }
      if (!this.options.some(option => option.label === newData.label)) {
        // Tạo một mảng mới để kích hoạt Vue reactivity
        this.options = [...this.options, newData];
      }

      // Kiểm tra DOM sau khi render
    },
    // Khi giá trị thay đổi (chọn từ danh sách hoặc gõ xong)
    // handleChange(event) {
    //

    //   const value = event.target.value;

    //   // Tìm data-value tương ứng trong datalist
    //   const selectedOption = [...event.target.list.options].find(
    //     (option) => option.value === value
    //   );

    //   if (selectedOption) {
    //   }
    // },

    // Khi nhấn phím (ví dụ: để kiểm tra từng phím bấm)
    // handleKeyup(event) {
    //

    // },

    onChangeDescriptionColor(color) {
      this.setDescriptionColor(color);
    },
    onChangeTitleColor(color) {
      this.setTitleColor(color);
    },
    onChangeTextColor(color) {
      this.setTextColor(color);
    },
    onChangeLineColor(color) {
      this.setLineColor(color);
    },
    onChangeTitleBackgroundColor(color) {
      this.SET_TITLE_BACKGROUND_COLOR(color);
    },
    changeColor(color) {
      this.color = color.hex;
      //const { r, g, b, a } = color.rgba;
      //this.color = `rgba(${r}, ${g}, ${b}, ${a})`;
    },
    openSucker(isOpen) {
      if (isOpen) {
        // ... canvas be created
        // this.suckerCanvas = canvas
        // this.suckerArea = [x1, y1, x2, y2]
      } else {
        // this.suckerCanvas && this.suckerCanvas.remove
      }
    },
    convertIconCurrently(value) {
      if (value) {
        const url = (0,_utils_converValue_js__WEBPACK_IMPORTED_MODULE_1__.getIconHourlyForecastTheme)(value);
        return url;
      }
    },
    convertDayWeek(value) {
      const offsetValue = this.$store.state.weatherModule.locationOffset.offset;
      const timeZoneValue = this.$store.state.weatherModule.locationOffset.timeZone;
      return (0,_utils_converValue_js__WEBPACK_IMPORTED_MODULE_1__.convertDayOfWeekMonth)(value, offsetValue, timeZoneValue);
    },
    convertTemperature(value) {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      if (unitSetting.activeTemperature_save === "f") {
        return (0,_utils_converValue_js__WEBPACK_IMPORTED_MODULE_1__.convertCtoF)(value) + (0,_utils_converValue_js__WEBPACK_IMPORTED_MODULE_1__.codeToFind)(unitSetting.activeTemperature_save);
      } else {
        return (0,_utils_converValue_js__WEBPACK_IMPORTED_MODULE_1__.convertFtoC)(value) + (0,_utils_converValue_js__WEBPACK_IMPORTED_MODULE_1__.codeToFind)(unitSetting.activeTemperature_save);
      }
    },
    convertTemperatureNot(value) {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      if (unitSetting.activeTemperature_save === "f") {
        return (0,_utils_converValue_js__WEBPACK_IMPORTED_MODULE_1__.convertCtoF)(value);
      } else {
        return (0,_utils_converValue_js__WEBPACK_IMPORTED_MODULE_1__.convertFtoC)(value);
      }
    },
    convertUnitTemperature() {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      if (unitSetting.activeTemperature_save === "f") {
        return "F";
      } else {
        return "C";
      }
    },
    onClickCreateWidget(value) {
      this.isVisible = false;
      const objectOptionWidgetNew = {
        valueSample: this.valueSampling,
        valueNumber: this.valueNumberDay,
        valueSliderWidth: this.valueSliderWidth
      };
      const optionWidgetObject = JSON.stringify(objectOptionWidgetNew);
      this.setOptionWidget(objectOptionWidgetNew);
      localStorage.setItem("optionWidgetObject", optionWidgetObject);

      // Tăng key và hiển thị lại component sau 100ms

      setTimeout(() => {
        this.reloadKey += 1; // Tăng key để Vue render lại component
        this.isVisible = true; // Hiển thị lại component
      }, 100); // Độ trễ 100ms để tạo hiệu ứng "nháy"
      const objectWidget = this.$store.state.weatherModule.objectWidget;
      const objectWidgetString = JSON.stringify(objectWidget);
      console.log("objectWidgetString", objectWidgetString);

      // localStorage.setItem("objectWidget", objectWidgetString);

      const titleColor = this.$store.state.commonModule.titleColor;
      const textColor = this.$store.state.commonModule.textColor;
      const titleBackgroundColor = this.$store.state.commonModule.titleBackgroundColor;
      const descriptionColor = this.$store.state.commonModule.descriptionColor;
      const lineColor = this.$store.state.commonModule.lineColor;
      const srcUrl = `http://localhost:8080/widget-view?titleColor=${encodeURIComponent(titleColor)}&textColor=${encodeURIComponent(textColor)}&titleBackgroundColor=${encodeURIComponent(titleBackgroundColor)}&descriptionColor=${encodeURIComponent(descriptionColor)}&lineColor=${encodeURIComponent(lineColor)}&objectWidget=${encodeURIComponent(objectWidgetString)}`;
      this.valueCodeWidget = `<iframe
        src="${srcUrl}"
        width="${this.valueSliderWidth}px"
        height="360px"
        id="widget-view"
        scrolling="no"
        frameborder="0"
        allowtransparency="true"
        style="border: none; overflow: hidden"
      ></iframe>`;
      if (value === true) {
        this.successCreate();
      }
    },
    onClickCopyWidget() {
      const textarea = this.$refs.iframeCode;
      textarea.select();
      document.execCommand("copy");
      this.successCopy();
    },
    loadDataVietName() {
      fetch("file-txt/Vietnam.txt").then(response => response.text()).then(text => {
        this.processFileVietName(text);
      }).catch(error => {
        console.error("Error loading file:", error);
      });
    },
    processFileVietName(data) {
      const lines = data.split("\n");
      this.listAddressVietName = lines.map((line, index) => {
        const values = line.split(";").map(value => value.replace(/"/g, "").trim());
        return {
          id: index + 1,
          country: values[1],
          value: values[2],
          lat: values[3],
          lng: values[4]
        };
      });
    },
    onChangeNumberDay(value) {
      this.valueNumberDay = value;
      switch (value) {
        case "number_5":
          this.setNumberDailyWeather(6);
          break;
        case "number_7":
          this.setNumberDailyWeather(8);
          break;
        default:
          this.setNumberDailyWeather(4);
          break;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/widget-create/index.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/widget-create/index.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _components_widget_widget_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/widget/widget-page */ "./src/components/widget/widget-page.vue");
/* harmony import */ var _utils_EncoderDecoderUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/EncoderDecoderUtils */ "./src/utils/EncoderDecoderUtils.js");
/* harmony import */ var _layout_tabbar_bottom_nav_bottom_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/layout/tabbar-bottom/nav-bottom.vue */ "./src/layout/tabbar-bottom/nav-bottom.vue");
/* harmony import */ var _layout_footer_footer_page_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/layout/footer/footer-page.vue */ "./src/layout/footer/footer-page.vue");





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    WidgetPage: _components_widget_widget_page__WEBPACK_IMPORTED_MODULE_0__["default"],
    NavBottom: _layout_tabbar_bottom_nav_bottom_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    FooterPage: _layout_footer_footer_page_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  name: "create-widget-view",
  data() {
    return {};
  },
  // bg_ads.png
  mounted() {
    this.loadDataWidget();
  },
  computed: {
    ...(0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapGetters)("weatherModule", ["currentlyGetters"]),
    currentlyData() {
      return this.currentlyGetters;
    }
  },
  methods: {
    ...(0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapActions)("weatherModule", ["getWeatherByWidget"]),
    async loadDataWidget() {
      const locationLatLongValue = localStorage.getItem("locationLatLong");
      if (locationLatLongValue) {
        const convertLocation = JSON.parse(locationLatLongValue);
        const latitudeValue = convertLocation.latitude;
        const longitudeValue = convertLocation.longitude;
        const keyLanguageStorage = this.$route.params.language ? this.$route.params.language : this.$i18n.locale;
        const param = `version=1&type=8&app_id=amobi.weather.forecast.radar.rain&request=https://api.forecast.io/forecast/TOH_KEY/${latitudeValue},${longitudeValue}?lang=${keyLanguageStorage}`;
        const encodeDataWeather = (0,_utils_EncoderDecoderUtils__WEBPACK_IMPORTED_MODULE_1__.encodeBase64)(param);
        await this.getWeatherByWidget(encodeDataWeather);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/widget/widget-page.vue?vue&type=template&id=26ed4686":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/widget/widget-page.vue?vue&type=template&id=26ed4686 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _assets_images_svg_ic_create_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/svg/ic_create.svg */ "./src/assets/images/svg/ic_create.svg");
/* harmony import */ var _assets_images_svg_v2_ic_droplet_blue_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/svg_v2/ic_droplet_blue.svg */ "./src/assets/images/svg_v2/ic_droplet_blue.svg");
/* harmony import */ var _assets_images_svg_ic_copy_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/svg/ic_copy.svg */ "./src/assets/images/svg/ic_copy.svg");




const _hoisted_1 = {
  class: "w-full h-full mt-4"
};
const _hoisted_2 = {
  class: "w-full text-left bor-bottom"
};
const _hoisted_3 = {
  class: "w-full"
};
const _hoisted_4 = {
  class: "txt_regular text-left"
};
const _hoisted_5 = {
  class: "txt_light_summer"
};
const _hoisted_6 = {
  class: "w-full pl-4 pr-4 pb-4"
};
const _hoisted_7 = {
  class: "lg:flex block w-full justify-between p-4"
};
const _hoisted_8 = {
  class: "lg:w-[50%] flex flex-col gap-4"
};
const _hoisted_9 = {
  class: "label w-full"
};
const _hoisted_10 = {
  class: "text-left mb-2 txt_regular"
};
const _hoisted_11 = {
  class: "w-full flex justify-start"
};
const _hoisted_12 = {
  class: "label w-full"
};
const _hoisted_13 = {
  class: "text-left mb-2 txt_regular"
};
const _hoisted_14 = {
  class: "w-full flex justify-start"
};
const _hoisted_15 = {
  class: "label w-full"
};
const _hoisted_16 = {
  class: "text-left mb-2 txt_regular"
};
const _hoisted_17 = {
  class: "w-full flex justify-start"
};
const _hoisted_18 = {
  class: "label w-full"
};
const _hoisted_19 = {
  class: "text-left mb-2 txt_regular"
};
const _hoisted_20 = {
  class: "w-full flex gap-10 items-center h-[140px] txt_light_summer"
};
const _hoisted_21 = {
  class: "flex flex-col items-center h-full justify-between gap-1 text-left"
};
const _hoisted_22 = {
  class: "flex flex-col gap-1 w-full"
};
const _hoisted_23 = {
  class: "p-1.5 w-[40px] h-[35px]"
};
const _hoisted_24 = {
  class: "flex flex-col gap-1 w-full"
};
const _hoisted_25 = {
  class: "p-1.5 w-[40px] h-[35px]"
};
const _hoisted_26 = {
  class: "flex flex-col items-center h-full justify-between gap-1 text-left"
};
const _hoisted_27 = {
  class: "flex flex-col gap-1 w-full"
};
const _hoisted_28 = {
  class: "p-1.5 w-[40px] h-[35px]"
};
const _hoisted_29 = {
  class: "flex flex-col gap-1 w-full"
};
const _hoisted_30 = {
  class: "p-1.5 w-[40px] h-[35px]"
};
const _hoisted_31 = {
  class: "flex flex-col items-center h-full justify-between gap-1 text-left"
};
const _hoisted_32 = {
  class: "flex flex-col gap-1 w-full"
};
const _hoisted_33 = {
  class: "p-1.5 w-[40px] h-[35px]"
};
const _hoisted_34 = {
  class: "w-full mt-4 text-left"
};
const _hoisted_35 = {
  class: "flex items-center justify-center gap-1"
};
const _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_svg_ic_create_svg__WEBPACK_IMPORTED_MODULE_1__,
  alt: ""
}, null, -1 /* HOISTED */);
const _hoisted_37 = {
  class: "txt_medium"
};
const _hoisted_38 = {
  class: "lg:w-[50%] h-full lg:pl-8 lg:pr-8"
};
const _hoisted_39 = {
  class: "title-switch"
};
const _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "w-full text-left txt_regular"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Width:")], -1 /* HOISTED */);
const _hoisted_41 = {
  class: "slider-demo-block"
};
const _hoisted_42 = {
  key: 0,
  class: "form-widget w-full p-2"
};
const _hoisted_43 = {
  class: "w-full items-center pl-4 pr-4 pt-2 pb-2"
};
const _hoisted_44 = {
  class: "flex w-full"
};
const _hoisted_45 = {
  class: "text-left h-full w-auto"
};
const _hoisted_46 = {
  class: "temp-ture"
};
const _hoisted_47 = {
  class: "txt_regular_40"
};
const _hoisted_48 = {
  class: "txt_regular_city_40",
  href: ""
};
const _hoisted_49 = {
  class: "ml-4 h-full flex items-center pt-4"
};
const _hoisted_50 = {
  class: "w-full"
};
const _hoisted_51 = {
  class: "w-[80px] text-left"
};
const _hoisted_52 = {
  class: "flex text-right"
};
const _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M12 22C13.8565 22 15.637 21.2625 16.9497 19.9497C18.2625 18.637 19 16.8565 19 15C19 13 18 11.1 16 9.5C14 7.9 12.5 5.5 12 3C11.5 5.5 10 7.9 8 9.5C6 11.1 5 13 5 15C5 16.8565 5.7375 18.637 7.05025 19.9497C8.36301 21.2625 10.1435 22 12 22Z",
  stroke: "var(--color-chance-of-rain)",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
})], -1 /* HOISTED */);
const _hoisted_54 = {
  class: "flex items-center gap-2"
};
const _hoisted_55 = {
  class: "flex items-center gap-1"
};
const _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "h-[calc(100%-80%)] w-full bg-widget pl-4 pr-4 pt-2 pb-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "w-full flex justify-end items-center h-full gap-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "logoImg"
})])], -1 /* HOISTED */);
const _hoisted_57 = {
  key: 1,
  class: "h-[352px] w-full"
};
const _hoisted_58 = {
  key: 1,
  class: "form-widget w-full p-2"
};
const _hoisted_59 = {
  class: "w-full items-center pl-4 pr-4 pt-2 pb-2"
};
const _hoisted_60 = {
  class: "w-full text-center pt-2"
};
const _hoisted_61 = {
  class: "txt_medium_30 text-white",
  href: ""
};
const _hoisted_62 = {
  class: "flex w-full"
};
const _hoisted_63 = {
  class: "mr-4 h-full flex items-center pt-4"
};
const _hoisted_64 = {
  class: "text-left h-full w-auto"
};
const _hoisted_65 = {
  class: "temp-ture"
};
const _hoisted_66 = {
  class: "txt_regular_40"
};
const _hoisted_67 = {
  class: "w-full"
};
const _hoisted_68 = {
  class: "w-[60px]"
};
const _hoisted_69 = {
  class: "flex text-right"
};
const _hoisted_70 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_svg_v2_ic_droplet_blue_svg__WEBPACK_IMPORTED_MODULE_2__,
  alt: "",
  width: "16"
}, null, -1 /* HOISTED */);
const _hoisted_71 = {
  class: "flex items-center gap-2"
};
const _hoisted_72 = {
  class: "flex items-center gap-1"
};
const _hoisted_73 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "h-[calc(100%-80%)] w-full bg-widget pl-4 pr-4 pt-2 pb-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "w-full flex justify-end items-center h-full gap-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "logoImg"
})])], -1 /* HOISTED */);
const _hoisted_74 = {
  key: 1,
  class: "h-[352px] w-full"
};
const _hoisted_75 = {
  key: 2,
  class: "form-widget w-full p-2"
};
const _hoisted_76 = {
  class: "w-full items-center pl-4 pr-4 pt-2 pb-2"
};
const _hoisted_77 = {
  class: "w-full text-left pt-2"
};
const _hoisted_78 = {
  class: "txt_medium_30 text-white",
  href: ""
};
const _hoisted_79 = {
  class: "flex w-full"
};
const _hoisted_80 = {
  class: "mr-4 h-full flex items-center pt-4"
};
const _hoisted_81 = {
  class: "text-left h-full w-auto"
};
const _hoisted_82 = {
  class: "temp-ture"
};
const _hoisted_83 = {
  class: "txt_regular_40"
};
const _hoisted_84 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "h-[calc(100%-80%)] w-full bg-widget pl-4 pr-4 pt-2 pb-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "w-full flex justify-end items-center h-full gap-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "logoImg"
})])], -1 /* HOISTED */);
const _hoisted_85 = {
  key: 1,
  class: "h-[352px] w-full"
};
const _hoisted_86 = {
  key: 3,
  class: "form-widget w-full p-2"
};
const _hoisted_87 = {
  class: "w-full items-center pl-4 pr-4 pt-2 pb-2"
};
const _hoisted_88 = {
  class: "w-full text-left pt-2"
};
const _hoisted_89 = {
  class: "txt_medium_30 text-white",
  href: ""
};
const _hoisted_90 = {
  class: "flex w-full"
};
const _hoisted_91 = {
  class: "mr-4 h-full flex items-center pt-4"
};
const _hoisted_92 = {
  class: "text-left h-full w-auto"
};
const _hoisted_93 = {
  class: "temp-ture"
};
const _hoisted_94 = {
  class: "txt_regular_40"
};
const _hoisted_95 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "h-[calc(100%-80%)] w-full bg-widget pl-4 pr-4 pt-2 pb-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "w-full flex justify-end items-center h-full gap-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "logoImg"
})])], -1 /* HOISTED */);
const _hoisted_96 = {
  key: 1,
  class: "h-[352px] w-full"
};
const _hoisted_97 = {
  class: "w-full h-[100px] mt-4 bor-form-10"
};
const _hoisted_98 = ["placeholder"];
const _hoisted_99 = {
  class: "w-full mt-4 text-left"
};
const _hoisted_100 = {
  class: "flex items-center justify-center gap-1"
};
const _hoisted_101 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_svg_ic_copy_svg__WEBPACK_IMPORTED_MODULE_3__,
  alt: ""
}, null, -1 /* HOISTED */);
const _hoisted_102 = {
  class: "txt_medium"
};
const _hoisted_103 = {
  class: "w-full items-center mt-4"
};
const _hoisted_104 = {
  class: "flex items-center text-left gap-2"
};
const _hoisted_105 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M17.25 12.75V11.25H15.675C15.6 10.8 15.375 10.35 15.15 9.9L16.275 8.775L15.225 7.725L14.1 8.85C13.725 8.625 13.275 8.4 12.75 8.325V6.75H11.25V8.325C10.8 8.4 10.35 8.625 9.9 8.85L8.775 7.725L7.725 8.775L8.85 9.9C8.625 10.275 8.4 10.725 8.325 11.25H6.75V12.75H8.325C8.4 13.2 8.625 13.65 8.85 14.1L7.725 15.225L8.775 16.275L9.9 15.15C10.275 15.375 10.725 15.6 11.25 15.675V17.25H12.75V15.675C13.2 15.6 13.65 15.375 14.1 15.15L15.225 16.275L16.275 15.225L15.15 14.1C15.375 13.725 15.6 13.275 15.675 12.75H17.25ZM12 14.25C10.725 14.25 9.75 13.275 9.75 12C9.75 10.725 10.725 9.75 12 9.75C13.275 9.75 14.25 10.725 14.25 12C14.25 13.275 13.275 14.25 12 14.25Z",
  fill: "var(--color-icon-df)"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M12.0004 1.5V3C16.9504 3 21.0004 7.05 21.0004 12C21.0004 16.95 16.9504 21 12.0004 21V22.5C17.7754 22.5 22.5004 17.775 22.5004 12C22.5004 6.225 17.7754 1.5 12.0004 1.5ZM6.15039 18.825L5.25039 20.025C6.15039 20.775 7.20039 21.45 8.40039 21.825L8.92539 20.4C7.87539 20.025 6.97539 19.5 6.15039 18.825ZM3.15039 13.5L1.65039 13.8C1.87539 15 2.32539 16.2 2.92539 17.25L4.20039 16.5C3.67539 15.6 3.30039 14.55 3.15039 13.5ZM4.20039 7.5L2.92539 6.75C2.32539 7.8 1.87539 9 1.72539 10.2L3.22539 10.425C3.30039 9.375 3.67539 8.4 4.20039 7.5ZM8.85039 3.6L8.32539 2.175C7.20039 2.625 6.15039 3.225 5.25039 3.975L6.22539 5.1C6.97539 4.5 7.87539 3.975 8.85039 3.6Z",
  fill: "var(--color-icon-df)"
})], -1 /* HOISTED */);
const _hoisted_106 = {
  class: "text-left flex flex-col gap-2"
};
const _hoisted_107 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "w-full h-[100px] items-center mt-4"
}, null, -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_option = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-option");
  const _component_el_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-select");
  const _component_el_color_picker = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-color-picker");
  const _component_el_slider = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-slider");
  const _component_BaseComponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BaseComponent");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_BaseComponent, {
    isShowPad: false
  }, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Weather_forecast_on_your_website")), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Create_custom_code_for_your_website")), 1 /* TEXT */)])])])]),
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Left "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Locations")), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_select, {
      size: "large",
      modelValue: $data.valueAddress,
      "onUpdate:modelValue": [_cache[0] || (_cache[0] = $event => $data.valueAddress = $event), $options.onChangeChoose],
      filterable: "",
      placeholder: _ctx.$t('Search_location'),
      "filter-method": () => true,
      "no-data-text": "No data",
      onInput: $options.handleInput
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.options, (item, index) => {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_el_option, {
          key: index,
          label: item.label,
          value: item
        }, null, 8 /* PROPS */, ["label", "value"]);
      }), 128 /* KEYED_FRAGMENT */))]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["modelValue", "placeholder", "onInput", "onUpdate:modelValue"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Select_template")), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_select, {
      modelValue: $data.valueSampling,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $data.valueSampling = $event),
      placeholder: "Select",
      size: "large",
      onChange: $options.onChangeSampling
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.optionsSampling, item => {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_el_option, {
          key: item.value,
          label: item.label,
          value: item.value
        }, null, 8 /* PROPS */, ["label", "value"]);
      }), 128 /* KEYED_FRAGMENT */))]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["modelValue", "onChange"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Number_of_days")), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_select, {
      modelValue: $data.valueNumberDay,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $data.valueNumberDay = $event),
      placeholder: "Select",
      size: "large",
      onChange: $options.onChangeNumberDay
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.optionsNumberDay, (item, index) => {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_el_option, {
          key: index,
          label: item.label,
          value: item.value
        }, null, 8 /* PROPS */, ["label", "value"]);
      }), 128 /* KEYED_FRAGMENT */))]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["modelValue", "onChange"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Color_change_panel")), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Background_color")), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_color_picker, {
      "show-alpha": false,
      modelValue: $options.titleBackgroundColor,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $options.titleBackgroundColor = $event),
      onChange: $options.onChangeTitleBackgroundColor
    }, null, 8 /* PROPS */, ["modelValue", "onChange"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Color_description")), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_color_picker, {
      "show-alpha": true,
      modelValue: $options.descriptionColor,
      "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => $options.descriptionColor = $event),
      onChange: $options.onChangeDescriptionColor
    }, null, 8 /* PROPS */, ["modelValue", "onChange"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Title_color")), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_color_picker, {
      "show-alpha": true,
      modelValue: $options.titleColor,
      "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => $options.titleColor = $event),
      onChange: $options.onChangeTitleColor
    }, null, 8 /* PROPS */, ["modelValue", "onChange"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Text_color")), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_color_picker, {
      "show-alpha": true,
      modelValue: $options.textColor,
      "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => $options.textColor = $event),
      onChange: $options.onChangeTextColor
    }, null, 8 /* PROPS */, ["modelValue", "onChange"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Line_color")), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_color_picker, {
      "show-alpha": true,
      modelValue: $options.lineColor,
      "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => $options.lineColor = $event),
      onChange: $options.onChangeLineColor
    }, null, 8 /* PROPS */, ["modelValue", "onChange"])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      onClick: _cache[8] || (_cache[8] = $event => $options.onClickCreateWidget(true)),
      type: "button",
      class: "bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none font-medium rounded-xl text-sm px-4 py-2.5 text-center me-2 mb-2"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [_hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Add_widget")), 1 /* TEXT */)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" right "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), _hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_slider, {
      max: 500,
      min: 200,
      modelValue: $data.valueSliderWidth,
      "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => $data.valueSliderWidth = $event),
      onChange: $options.onChangeSliderWidth
    }, null, 8 /* PROPS */, ["modelValue", "onChange"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Option 1 "), $data.valueSampling === 'option_1' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_42, [$data.isVisible && $options.renderObjectWidget ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: $data.reloadKey,
      class: "w-full h-full flex justify-center items-center"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        width: $data.valueSliderWidth + 'px',
        background: $options.titleBackgroundColor
      }),
      class: "widget-form-new text-black overflow-hidden"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Nhiệt độ "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        color: $options.titleColor
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertTemperature($options.renderObjectWidget?.currently?.temperature)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.valueAddressLocation), 1 /* TEXT */)], 4 /* STYLE */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: "txt_regular_des",
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        color: $options.descriptionColor
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Real_feel")) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertTemperature($options.renderObjectWidget?.currently?.apparentTemperature)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertCapitalizeWords(_ctx.$t(`${$options.renderObjectWidget?.currently?.summary.replace(/\s+/g, "_")}`))), 1 /* TEXT */)])], 4 /* STYLE */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($options.convertIconCurrently($options.renderObjectWidget?.currently?.icon)), {
      width: 50,
      height: 50
    }))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: "h-[42%] w-full flex items-center justify-center pb-4 pl-4 pr-4 txt_regular_des",
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        color: $options.textColor
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.renderObjectWidget?.listDaily, (item, index) => {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
          'border-bottom': index === $options.renderObjectWidget.listDaily.length - 1 ? 'none' : `1px solid ${$options.lineColor}`
        }),
        class: "flex justify-between items-center pt-2 pb-2 txt_regular_14",
        key: index
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertDayWeek(item.time)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [_hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(Math.round(item.humidity * 100)) + "%", 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($options.convertIconCurrently(item?.icon)))), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <img :src=\"convertIconCurrently(item?.icon)\" alt=\"\" />\r\n                          <img :src=\"convertIconCurrently(item?.icon)\" alt=\"\" /> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertTemperatureNot(item.temperatureMin)) + "° ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertTemperatureNot(item.temperatureMax)) + "° ", 1 /* TEXT */)])], 4 /* STYLE */);
    }), 128 /* KEYED_FRAGMENT */))])], 4 /* STYLE */), _hoisted_56], 4 /* STYLE */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  ")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$data.isVisible && !$options.renderObjectWidget ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_57)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Option 2 "), $data.valueSampling === 'option_2' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_58, [$data.isVisible && $options.renderObjectWidget ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: $data.reloadKey,
      class: "w-full h-full flex justify-center items-center"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        width: $data.valueSliderWidth + 'px',
        background: $options.titleBackgroundColor
      }),
      class: "widget-form-new text-black overflow-hidden"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_59, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_61, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.valueAddressLocation), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Nhiệt độ "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($options.convertIconCurrently($options.renderObjectWidget?.currently?.icon)), {
      width: 40,
      height: 40
    }))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        color: $options.titleColor
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_65, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_66, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertTemperature($options.renderObjectWidget?.currently?.temperature)), 1 /* TEXT */)])], 4 /* STYLE */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: "txt_regular_des",
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        color: $options.descriptionColor
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Real_feel")) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertTemperature($options.renderObjectWidget?.currently?.apparentTemperature)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertCapitalizeWords(_ctx.$t(`${$options.renderObjectWidget?.currently?.summary.replace(/\s+/g, "_")}`))), 1 /* TEXT */)])], 4 /* STYLE */)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: "h-[42%] w-full flex items-center justify-center pb-4 pl-4 pr-4 txt_regular_des",
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        color: $options.textColor
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_67, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.renderObjectWidget?.listDaily, (item, index) => {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
          'border-bottom': index === $options.renderObjectWidget.listDaily.length - 1 ? 'none' : `1px solid ${$options.lineColor}`
        }),
        class: "flex justify-between items-center pt-2 pb-2 txt_regular_14",
        key: index
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_68, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertDayWeek(item.time)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_69, [_hoisted_70, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(Math.round(item.humidity * 100)) + "%", 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_71, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($options.convertIconCurrently(item?.icon)))), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($options.convertIconCurrently(item?.icon)))), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <img :src=\"convertIconCurrently(item?.icon)\" alt=\"\" />\r\n                          <img :src=\"convertIconCurrently(item?.icon)\" alt=\"\" /> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_72, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertTemperatureNot(item.temperatureMin)) + "° ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertTemperatureNot(item.temperatureMax)) + "° ", 1 /* TEXT */)])], 4 /* STYLE */);
    }), 128 /* KEYED_FRAGMENT */))])], 4 /* STYLE */), _hoisted_73], 4 /* STYLE */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  ")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$data.isVisible && !$options.renderObjectWidget ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_74)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Option 3 "), $data.valueSampling === 'option_3' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_75, [$data.isVisible && $options.renderObjectWidget ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: $data.reloadKey,
      class: "w-full h-full flex justify-center items-center"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        width: $data.valueSliderWidth + 'px',
        background: $options.titleBackgroundColor
      }),
      class: "widget-form-new text-black overflow-hidden"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_76, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_77, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_78, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.valueAddressLocation), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Nhiệt độ "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_79, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_80, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($options.convertIconCurrently($options.renderObjectWidget?.currently?.icon)), {
      width: 40,
      height: 40
    }))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_81, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        color: $options.titleColor
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_82, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_83, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertTemperature($options.renderObjectWidget?.currently?.temperature)), 1 /* TEXT */)])], 4 /* STYLE */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: "txt_regular_des",
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        color: $options.descriptionColor
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Real_feel")) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertTemperature($options.renderObjectWidget?.currently?.apparentTemperature)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertCapitalizeWords(_ctx.$t(`${$options.renderObjectWidget?.currently?.summary.replace(/\s+/g, "_")}`))), 1 /* TEXT */)])], 4 /* STYLE */)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), _hoisted_84], 4 /* STYLE */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  ")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$data.isVisible && !$options.renderObjectWidget ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_85)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Option 4 "), $data.valueSampling === 'option_4' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_86, [$data.isVisible && $options.renderObjectWidget ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: $data.reloadKey,
      class: "w-full h-full flex justify-center items-center"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        width: $data.valueSliderWidth + 'px',
        background: $options.titleBackgroundColor
      }),
      class: "widget-form-new text-black overflow-hidden"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_87, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_88, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_89, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.valueAddressLocation), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Nhiệt độ "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_90, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_91, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($options.convertIconCurrently($options.renderObjectWidget?.currently?.icon)), {
      width: 40,
      height: 40
    }))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_92, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        color: $options.titleColor
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_93, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_94, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertTemperature($options.renderObjectWidget?.currently?.temperature)), 1 /* TEXT */)])], 4 /* STYLE */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: "txt_regular_des",
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        color: $options.descriptionColor
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Real_feel")) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertTemperature($options.renderObjectWidget?.currently?.apparentTemperature)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertCapitalizeWords(_ctx.$t(`${$options.renderObjectWidget?.currently?.summary.replace(/\s+/g, "_")}`))), 1 /* TEXT */)])], 4 /* STYLE */)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), _hoisted_95], 4 /* STYLE */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  ")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$data.isVisible && !$options.renderObjectWidget ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_96)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_97, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
      type: "textarea",
      ref: "iframeCode",
      class: "textarea-type hide-scroll",
      placeholder: _ctx.Copy_code_iframe_in_website,
      "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => $data.valueCodeWidget = $event),
      maxlength: "500"
    }, null, 8 /* PROPS */, _hoisted_98), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.valueCodeWidget]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_99, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      onClick: _cache[11] || (_cache[11] = (...args) => $options.onClickCopyWidget && $options.onClickCopyWidget(...args)),
      type: "button",
      class: "bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none font-medium rounded-xl text-sm px-4 py-2.5 text-center me-2 mb-2"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_100, [_hoisted_101, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_102, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Copy_code")), 1 /* TEXT */)])])])])])])]),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div v-html=\"valueCodeWidget\"></div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_103, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_BaseComponent, {
    isShowPad: true
  }, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_104, [_hoisted_105, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("INSTRUCTIONS_ON_WEBSITE")), 1 /* TEXT */)])]),
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_106, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Creating_and_installing")), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Next_is_a_custom")), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Then_you_copy")), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("The_above_code")), 1 /* TEXT */)])])]),
    _: 1 /* STABLE */
  })]), _hoisted_107, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div v-html=\"valueCodeWidget\"></div> ")]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/widget-create/index.vue?vue&type=template&id=29f9ee84":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/widget-create/index.vue?vue&type=template&id=29f9ee84 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
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
  class: "container"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavBottom = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NavBottom");
  const _component_WidgetPage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("WidgetPage");
  const _component_FooterPage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FooterPage");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_NavBottom), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_WidgetPage)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FooterPage)]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/widget/widget-page.vue?vue&type=style&index=0&id=26ed4686&lang=scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/widget/widget-page.vue?vue&type=style&index=0&id=26ed4686&lang=scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/svg/logo_new.svg */ "./src/assets/images/svg/logo_new.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n.bg-title-widget {\n  background-color: rgba(149, 139, 208, 0.25);\n}\n.change-color-widget {\n  border: 1px solid #000000;\n  border-radius: 5px;\n}\n.slider-demo-block {\n  max-width: 600px;\n  display: flex;\n  align-items: center;\n}\n.slider-demo-block .el-slider {\n  margin-top: 0;\n  margin-left: 12px;\n}\n.widget-form-new {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n.textarea-type {\n  width: 100%;\n  height: 100%;\n  outline: none; /* Loại bỏ viền xung quanh khi được focus */\n  resize: none; /* Ngăn chặn khả năng thay đổi kích thước */\n  border-radius: 14px;\n  color: #000000;\n  border: 1px solid #ced4da;\n  overflow: scroll;\n  padding: 0.47rem 0.75rem;\n  font-size: 0.8125rem;\n}\n.bg-widget {\n  background-color: #dfecff;\n}\n.logoImg {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  width: 125px;\n  height: 25px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  transition: width 0.3s ease, height 0.3s ease; /* Thêm hiệu ứng chuyển đổi */\n}\n.temp-ture {\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: start;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n}\n.custom-notification {\n  text-align: left;\n}\n.form-control {\n  display: block;\n  width: 100%;\n  padding: 9px 17px;\n  font-size: 0.8125rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1.5px solid #ced4da;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.form-control:focus {\n  color: #495057;\n  background-color: #fff;\n  border-color: #b9bfc4;\n  outline: 0;\n  box-shadow: none;\n}\n.form-control:hover {\n  border: 1.5px solid #6d99c9;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/widget/widget-page.vue":
/*!***********************************************!*\
  !*** ./src/components/widget/widget-page.vue ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _widget_page_vue_vue_type_template_id_26ed4686__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget-page.vue?vue&type=template&id=26ed4686 */ "./src/components/widget/widget-page.vue?vue&type=template&id=26ed4686");
/* harmony import */ var _widget_page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget-page.vue?vue&type=script&lang=js */ "./src/components/widget/widget-page.vue?vue&type=script&lang=js");
/* harmony import */ var _widget_page_vue_vue_type_style_index_0_id_26ed4686_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widget-page.vue?vue&type=style&index=0&id=26ed4686&lang=scss */ "./src/components/widget/widget-page.vue?vue&type=style&index=0&id=26ed4686&lang=scss");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_widget_page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_widget_page_vue_vue_type_template_id_26ed4686__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/components/widget/widget-page.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/widget-create/index.vue":
/*!*******************************************!*\
  !*** ./src/views/widget-create/index.vue ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_29f9ee84__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=29f9ee84 */ "./src/views/widget-create/index.vue?vue&type=template&id=29f9ee84");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/views/widget-create/index.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_29f9ee84__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/widget-create/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/widget/widget-page.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./src/components/widget/widget-page.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_widget_page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_widget_page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./widget-page.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/widget/widget-page.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/views/widget-create/index.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./src/views/widget-create/index.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/widget-create/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/widget/widget-page.vue?vue&type=template&id=26ed4686":
/*!*****************************************************************************!*\
  !*** ./src/components/widget/widget-page.vue?vue&type=template&id=26ed4686 ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_widget_page_vue_vue_type_template_id_26ed4686__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_widget_page_vue_vue_type_template_id_26ed4686__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./widget-page.vue?vue&type=template&id=26ed4686 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/widget/widget-page.vue?vue&type=template&id=26ed4686");


/***/ }),

/***/ "./src/views/widget-create/index.vue?vue&type=template&id=29f9ee84":
/*!*************************************************************************!*\
  !*** ./src/views/widget-create/index.vue?vue&type=template&id=29f9ee84 ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_29f9ee84__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_29f9ee84__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=29f9ee84 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/widget-create/index.vue?vue&type=template&id=29f9ee84");


/***/ }),

/***/ "./src/components/widget/widget-page.vue?vue&type=style&index=0&id=26ed4686&lang=scss":
/*!********************************************************************************************!*\
  !*** ./src/components/widget/widget-page.vue?vue&type=style&index=0&id=26ed4686&lang=scss ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_widget_page_vue_vue_type_style_index_0_id_26ed4686_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./widget-page.vue?vue&type=style&index=0&id=26ed4686&lang=scss */ "./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/widget/widget-page.vue?vue&type=style&index=0&id=26ed4686&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_widget_page_vue_vue_type_style_index_0_id_26ed4686_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_widget_page_vue_vue_type_style_index_0_id_26ed4686_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_widget_page_vue_vue_type_style_index_0_id_26ed4686_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_widget_page_vue_vue_type_style_index_0_id_26ed4686_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/widget/widget-page.vue?vue&type=style&index=0&id=26ed4686&lang=scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/widget/widget-page.vue?vue&type=style&index=0&id=26ed4686&lang=scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./widget-page.vue?vue&type=style&index=0&id=26ed4686&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/widget/widget-page.vue?vue&type=style&index=0&id=26ed4686&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("065245d8", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/images/svg/ic_copy.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/svg/ic_copy.svg ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/ic_copy.60696990.svg";

/***/ }),

/***/ "./src/assets/images/svg/ic_create.svg":
/*!*********************************************!*\
  !*** ./src/assets/images/svg/ic_create.svg ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/ic_create.77877d8a.svg";

/***/ })

}]);
//# sourceMappingURL=create-widget-view.js.map