<template>
  <div class="w-full h-full">
    <div class="w-full h-[calc(100vh-120px)]" v-loading="loading">
      <div class="w-full h-full relative">
        <div class="absolute flex w-full justify-center p-4">
          <div class="bg-white bor-search flex items-center">
            <button
              class="cursor-pointer txt_regular_14 p-1 bg-color-current h-full bg-btn-hover"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20M4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4M4 12H2M12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12M12 20V22M20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4M20 12H22M12 4V2"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <el-input
              v-model="valueSearch"
              style="width: 340px"
              placeholder="Search Location"
              :suffix-icon="Search"
            />
            <button
              @click="onChangeSearchLocation"
              class="cursor-pointer txt_regular_14 p-1 bg-color-refresh h-full bg-btn-hover"
            >
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 30 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_170_27765)">
                    <path
                      d="M13.8667 1C8.42497 1 3.99219 5.43127 3.99219 10.8712C3.99219 16.311 8.42497 20.7509 13.8667 20.7509C16.191 20.7509 18.3287 19.9366 20.0182 18.5847L24.1313 22.6942C24.3389 22.8931 24.6161 23.0029 24.9036 22.9999C25.1911 22.997 25.4661 22.8817 25.6695 22.6785C25.873 22.4754 25.9888 22.2008 25.9921 21.9134C25.9955 21.626 25.8861 21.3487 25.6874 21.1409L21.5743 17.0292C22.9278 15.3377 23.7433 13.1974 23.7433 10.8712C23.7433 5.43127 19.3084 1 13.8667 1ZM13.8667 3.1941C18.1223 3.1941 21.5464 6.61706 21.5464 10.8712C21.5464 15.1253 18.1223 18.5568 13.8667 18.5568C9.61113 18.5568 6.187 15.1253 6.187 10.8712C6.187 6.61706 9.61113 3.1941 13.8667 3.1941Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_170_27765"
                      x="-0.0078125"
                      y="1"
                      width="30"
                      height="30"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_170_27765"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_170_27765"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </button>
          </div>
        </div>

        <div class="absolute right-0 top-36">
          <div class="flex flex-col">
            <div class="p-2 bg-btn-map">
              <IcTempt class="icon-svg"></IcTempt>
            </div>
            <div class="p-2 bg-btn-map">
              <IcPrecipitation class="icon-svg"></IcPrecipitation>
            </div>
            <div class="p-2 bg-btn-map">
              <IcRainMap class="icon-svg"></IcRainMap>
            </div>
            <div class="p-2 bg-btn-map">
              <IcTitleCloudCover class="icon-svg"></IcTitleCloudCover>
            </div>
            <div class="p-2 bg-btn-map">
              <IcTitleWindSpeed class="icon-svg"></IcTitleWindSpeed>
            </div>
            <div class="p-2 bg-btn-map">
              <IcSnowMap class="icon-svg"></IcSnowMap>
            </div>
            <div class="p-2 bg-btn-map">
              <IcHumidity class="icon-svg"></IcHumidity>
            </div>
          </div>
        </div>
        <iframe
          ref="radarIframe"
          :key="iframeKey"
          :src="renderRadar"
          width="100%"
          height="100%"
          frameborder="0"
          scrolling="no"
        ></iframe>

        <!-- Thêm nút phóng to -->

        <!-- Thêm nút locate -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import { Search } from "@element-plus/icons-vue";
import IcTempt from "@/components/icons/IcTempt.vue";
import IcPrecipitation from "@/components/icons/IcPrecipitation.vue";
import IcRainMap from "@/components/icons/IcRainMap.vue";
import IcTitleCloudCover from "@/components/icons/IcTitleCloudCover.vue";
import IcTitleWindSpeed from "@/components/icons/IcTitleWindSpeed.vue";
import IcSnowMap from "@/components/icons/IcSnowMap.vue";
import IcHumidity from "@/components/icons/IcHumidity.vue";
import { encodeBase64, urlEncodeString } from "@/utils/EncoderDecoderUtils";

export default {
  name: "radar-map",
  components: {
    IcTempt,
    IcPrecipitation,
    IcRainMap,
    IcTitleWindSpeed,
    IcTitleCloudCover,
    IcSnowMap,
    IcHumidity,
  },

  data() {
    return {
      heightAuto: "auto",
      overlayValue: "temp",
      originalPosition: null,
      userLocation: null,
      iframeKey: 0,
      valueSearch: "",
      loading: false,
    };
  },

  computed: {
    ...mapGetters("weatherModule", ["cityCountryGetters"]),
    ...mapGetters("commonModule", ["breadcumsObjectGetters"]),

    wardParam() {
      const retrievedArray = JSON.parse(localStorage.getItem("objectBread"));
      const resultData = retrievedArray
        ? retrievedArray
        : this.breadcumsObjectGetters;

      return resultData;
    },

    renderRadar() {
      const dataPosition = this.originalPosition;
      const objectSetting = this.$store.state.commonModule.objectSettingSave;
      if (!dataPosition || !dataPosition.latitude || !dataPosition.longitude) {
        return null;
      }
      const zoomValue = "7"; // 7,6,5,4,3
      const metricTempValue =
        objectSetting.activeTemperature_save === "f" ? "f" : "c"; // c, f
      const metricRainValue = "mm"; // mm, in
      const metricSnow = "cm"; // cm, in
      const metricWind = this.convertMetricWind(
        objectSetting.activeWindSpeed_save
      ); // kmh, kt, bft, ms,mh
      const metricPressure = objectSetting.activePressure_save; // hpa, inhg, mmhg
      const metricHumidity = "percent"; // percent
      const metricClouds = objectSetting.activePrecipitation_save; // mm, in
      const urlHost = "https://sradar.tohapp.com/en/apiv2/tohWeather.php";
      //   const urlIframe =
      //     urlHost +
      //     `?lat=${dataPosition.latitude}&lng=${dataPosition.longitude}&overlay=${this.overlayValue}&zoom=${zoomValue}&metricTemp=${metricTempValue}&metricRain=${metricRainValue}&metricSnow=${metricSnow}&metricWind=${metricWind}&metricPressure=mmhg&metricHumidity=${metricHumidity}&metricClouds=${metricClouds}&marker=${dataPosition.latitude},${dataPosition.longitude}`;

      const urlIframe =
        urlHost +
        `?lat=${dataPosition.latitude}&lng=${dataPosition.longitude}&overlay=${this.overlayValue}&metricTemp=${metricTempValue}&metricRain=${metricRainValue}&metricSnow=${metricSnow}&metricWind=${metricWind}`;

      return urlIframe;
    },
  },

  watch: {
    originalPosition: {
      handler() {
        // Khi originalPosition thay đổi, iframe sẽ tự động cập nhật
      },
      deep: true,
    },
  },

  mounted() {
    this.originalPosition = {
      latitude: this.wardParam.latitude,
      longitude: this.wardParam.longitude,
    };
  },

  methods: {
    ...mapMutations("commonModule", ["setBreadcumsNotAllowLocation"]),
    ...mapActions("weatherModule", [
      "getWeatherDataCurrent",
      "getFormattedAddress",
    ]),
    async onChangeSearchLocation() {
      debugger;
      this.loading = true;

      const urlParam = `version=1&type=4&app_id=amobi.weather.forecast.radar.rain&request=https://maps.googleapis.com/maps/api/geocode/json?address=${urlEncodeString(
        this.valueSearch
      )}&key=TOH_KEY`;

      const value = encodeBase64(urlParam);
      await this.getFormattedAddress(value);

      const objectSearch = this.$store.state.weatherModule.newArray;
      const objectLatLong = objectSearch[0];
      if (objectLatLong) {
        this.originalPosition = {
          latitude: objectLatLong.lat,
          longitude: objectLatLong.lng,
        };
        debugger;

        this.loading = false;
      }
    },

    convertMetricWind(value) {
      if (value === "m/s") {
        return "ms";
      }
      if (value === "km/h") {
        return "kmh";
      }
      if (value === "mi/h") {
        return "mh";
      }
      if (value === "knot") {
        return "kt";
      }
      if (value === "bft") {
        return "bft";
      }
    },
  },
};
</script>
<style lang="scss">
.bor-search {
  border-radius: 6px;
}

.bg-btn-map {
  background-color: #0e2950;
}
.bg-btn-map:hover {
  background-color: #65a4b5fe;
}

.bg-color-current {
  background-color: #3b99e7;
}
</style>
