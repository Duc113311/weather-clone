<template>
  <div class="w-full">
    <!--   -->
    <div class="flex items-center text-left gap-2 pad-t-b">
      <svg
        class="icon-svg"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.167 2V4M5.09717 4.92993L6.50717 6.33993M20.167 12H22.167M19.2371 4.92993L17.8271 6.33993M16.114 12.6501C16.237 11.9046 16.1464 11.1395 15.8527 10.4433C15.5589 9.74717 15.0739 9.14847 14.454 8.71654C13.834 8.28461 13.1044 8.03711 12.3496 8.00269C11.5948 7.96827 10.8457 8.14835 10.189 8.52206M13.167 22H7.16695C6.22092 21.9998 5.29436 21.7312 4.49487 21.2255C3.69539 20.7197 3.0558 19.9975 2.65038 19.1427C2.24496 18.288 2.09035 17.3358 2.20451 16.3966C2.31867 15.4575 2.69691 14.5701 3.29531 13.8373C3.89371 13.1046 4.6877 12.5567 5.58507 12.2572C6.48244 11.9577 7.44637 11.9189 8.36489 12.1454C9.28342 12.3718 10.1188 12.8542 10.7742 13.5366C11.4295 14.2189 11.8777 15.0731 12.067 16H13.167C13.9626 16 14.7257 16.3161 15.2883 16.8787C15.8509 17.4413 16.167 18.2044 16.167 19C16.167 19.7956 15.8509 20.5587 15.2883 21.1213C14.7257 21.6839 13.9626 22 13.167 22Z"
          stroke="var(--color-icon-df)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div class="txt_medium_14" v-if="breadcumsObject.country_key === 'vn'">
        <span v-if="breadcumsObject?.city && !breadcumsObject?.district">
          {{
            $t(`Weather_forecast_for_{city}`, {
              city: convertToLowCase(breadcumsObject.city),
            })
          }}
        </span>

        <span
          v-if="
            breadcumsObject?.city &&
            breadcumsObject?.district &&
            !breadcumsObject?.ward
          "
        >
          {{
            convertCapitalizeWords(
              $t(`Weather_forecast_for_{city}`, {
                city: convertToLowCase(breadcumsObject.district),
              })
            )
          }}
        </span>

        <span
          v-if="
            breadcumsObject?.city &&
            breadcumsObject?.district &&
            breadcumsObject?.ward
          "
          >{{
            convertCapitalizeWords(
              $t(`Weather_forecast_for_{city}`, {
                city: convertToLowCase(breadcumsObject.ward),
              })
            )
          }}</span
        >
      </div>
      <div class="txt_medium_14" v-else>
        <span v-if="breadcumsObject?.state && !breadcumsObject?.county">{{
          $t(`Weather_forecast_for_{city}`, {
            city: $t(`${breadcumsObject?.state}`),
          })
        }}</span>
        <span
          v-if="
            breadcumsObject?.state &&
            breadcumsObject?.county &&
            !breadcumsObject?.cities
          "
          >{{
            $t(`Weather_forecast_for_{city}`, {
              city: $t(`${breadcumsObject?.county}`),
            })
          }}</span
        >
        <span
          v-if="
            breadcumsObject?.state &&
            breadcumsObject?.county &&
            breadcumsObject?.cities
          "
          >{{
            $t(`Weather_forecast_for_{city}`, {
              city: $t(`${breadcumsObject?.cities}`),
            })
          }}</span
        >
      </div>
    </div>
    <div class="w-full h-full overflow-hidden">
      <transition-group name="fade" tag="div" class="gap-10-px flex flex-col">
        <BaseList
          v-for="(item, index) in displayedItems"
          :uniqueKey="item.time"
          :key="item.time"
        >
          <div v-if="item !== null" class="w-full cursor-pointer">
            <!--  -->
            <div
              @click="onClickShowDetailCard(index)"
              class="flex justify-between items-center w-full"
            >
              <!--  -->
              <div class="flex items-center">
                <p class="w-[100px] text-left txt_regular_14">
                  <span>
                    {{ convertTime(item?.time) }}
                  </span>
                </p>
                <p class="txt_regular_14">
                  {{
                    convertCapitalizeWords(
                      $t(`${item?.summary.replace(/\s+/g, "_")}`)
                    )
                  }}
                </p>
              </div>

              <div class="flex items-center">
                <div class="flex items-center gap-2 mr-2 w-[80px]">
                  <component
                    class="icon-svg"
                    :is="renderIcon(item)"
                  ></component>
                  <p class="txt_medium_15">
                    {{ renderToCelsius(item?.temperature) }}
                  </p>
                </div>
                <div>
                  <svg
                    :id="'chevron-' + index"
                    :class="{ 'rotate-180': activeIndex === index }"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon-svg"
                  >
                    <path
                      d="M18 9L12 15L6 9"
                      stroke="var(--color-icon-df)"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div
              v-if="index === valueChoose"
              class="w-full flex items-center justify-between pt-4 md:pr-11"
            >
              <div class="w-[50%] flex flex-col gap-4 bor-rim-r md:pr-6 pr-2">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <IcTitleReadFeel class="icon-svg"></IcTitleReadFeel>
                    <p class="txt_regular_14">{{ $t("Real_feel") }}</p>
                  </div>
                  <div class="flex items-center txt_medium_15">
                    <p>{{ renderToCelsius(item?.apparentTemperature) }}</p>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <IcHumidity class="icon-svg"></IcHumidity>
                    <p class="txt_regular_14">{{ $t("Humidity") }}</p>
                  </div>
                  <div class="flex items-center txt_medium_15">
                    <p>{{ Math.round(item?.humidity * 100) }}%</p>
                  </div>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <IcUvIndex class="icon-svg"></IcUvIndex>
                    <p class="txt_regular_14">{{ $t("UV") }}</p>
                  </div>
                  <div class="flex items-center gap-1">
                    <span class="txt_medium_15">
                      {{ Math.round(item?.uvIndex) }}
                    </span>
                    <span class="txt_regular_14">
                      ({{ convertUvIndexName(item?.uvIndex) }})
                    </span>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <IcPrecipitation class="icon-svg"></IcPrecipitation>
                    <p class="txt_regular_14">{{ $t("Precipitation") }}</p>
                  </div>
                  <div class="flex items-center txt_medium_15">
                    <p>{{ convertPrecipitation(item?.precipIntensity) }}</p>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <div
                    class="flex items-center gap-2"
                    v-if="item?.precipType === 'Snow'"
                  >
                    <IcChanceOfRainSnow class="icon-svg"></IcChanceOfRainSnow>
                    <p class="txt_regular_14">{{ $t("Chance_of_snow") }}</p>
                  </div>
                  <div class="flex items-center gap-2" v-else>
                    <IcChanceOfRain class="icon-svg"></IcChanceOfRain>
                    <p class="txt_regular_14">{{ $t("Chance_of_rain") }}</p>
                  </div>
                  <div class="flex items-center txt_medium_15">
                    <p>{{ item?.precipProbability * 100 }}%</p>
                  </div>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <IcTitleAir class="icon-svg"></IcTitleAir>
                    <p class="txt_regular_14">{{ $t("Dew_point") }}</p>
                  </div>
                  <div class="flex items-center">
                    <span class="txt_regular_14">{{
                      renderToCelsius(item?.dewPoint)
                    }}</span>
                  </div>
                </div>
              </div>

              <!--  -->

              <div class="w-[50%] flex flex-col gap-4 md:pl-6 pl-2">
                <div class="flex items-center justify-between w-full">
                  <div class="flex items-center gap-2">
                    <IcTitleWindSpeed class="icon-svg"></IcTitleWindSpeed>
                    <p class="txt_regular_14">{{ $t("Wind_speed") }}</p>
                  </div>

                  <div class="flex items-center gap-1">
                    <p class="txt_medium_15">
                      {{ convertWindSpeed(item.windSpeed) }}
                    </p>
                    <span class="txt_regular_14">{{
                      convertUnitWindSpeed()
                    }}</span>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <IcTitleWindDirection
                      class="icon-svg"
                    ></IcTitleWindDirection>
                    <p class="txt_regular_14">{{ $t("Wind_direction") }}</p>
                  </div>
                  <div class="flex items-center">
                    <p class="txt_medium_15">
                      {{ convertWindBearing(item?.windBearing) }}
                    </p>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <IcTitleCloudCover class="icon-svg"></IcTitleCloudCover>
                    <p class="txt_regular_14">{{ $t("Cloud_cover") }}</p>
                  </div>
                  <div class="flex items-center">
                    <p class="txt_medium_15">
                      {{ Math.round(item.cloudCover * 100) }}%
                    </p>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <IcTitlePressure class="icon-svg"></IcTitlePressure>
                    <p class="txt_regular_14">{{ $t("Pressure") }}</p>
                  </div>
                  <div class="flex items-center gap-1">
                    <p class="txt_medium_15">
                      {{ convertPressure(item?.pressure) }}
                    </p>
                    <span class="txt_regular_14">{{
                      convertUnitPressure()
                    }}</span>
                  </div>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <IcTitleOzone3 class="icon-svg"></IcTitleOzone3>
                    <p class="txt_regular_14">{{ $t("Ozone") }}</p>
                  </div>
                  <div class="flex items-center gap-1">
                    <span class="txt_medium_15">
                      {{ item?.ozone }}
                    </span>
                    <!-- <span class="txt_regular_14" v-if="timePeriodSunriseTime">
                      ({{ timePeriodSunriseTime }})
                    </span> -->
                  </div>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <IcTitleWindGust class="icon-svg"></IcTitleWindGust>
                    <p class="txt_regular_14">{{ $t("Wind_gust") }}</p>
                  </div>
                  <div class="flex items-center gap-1">
                    <p class="txt_medium_15">
                      {{ convertWindSpeed(item.windGust) }}
                    </p>
                    <span class="txt_regular_14">{{
                      convertUnitWindSpeed()
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="w-full mt-4">
            <SkeletonLoader class="w-full h-full"> </SkeletonLoader>
          </div>
        </BaseList>
        <!-- Đã thêm key -->
      </transition-group>

      <div class="w-full text-left mt-3">
        <button
          type="button"
          @click="onClickLoadMoreItems"
          class="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none font-medium rounded-lg text-sm px-3 py-2 text-center me-2 lg:mb-2"
        >
          <span class="txt_medium_12">
            {{ showLessButton ? $t("Hide") : $t("See_more") }}</span
          >
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import BaseComponent from "@/components/common/baseComponent.vue";
import {
  convertTimestampToHoursMinutes,
  convertTimestampToHoursMinutes12,
  getIconHourlyForecastTheme,
  convertCtoF,
  convertFtoC,
  codeToFind,
  convertMillimet,
  convertMillimetToInch,
  convertMPHtoMetPS,
  convertMiToKm,
  convertMiToKnot,
  convertMiToBeaufortScale,
  getWindDirectionFromDegrees,
  convertHpaToMmHg,
  convertHpaToAtm,
  convertHpaToInHg,
  convertHpaToMbar,
  convertHpaToKpa,
  convertToEnglish,
  getUvSummaryName,
  capitalizeWords,
  getAirSummaryName,
  convertTime12hTimeZoneNotNowUnit,
  convertTimestampUnit12,
  convertAMPMFromTimestamp,
  convertTimestamp24hSun,
  convertTimestamp12hSun,
  convertTime24hTimeZoneNotNow,
} from "@/utils/converValue";
import { decodeBase64 } from "@/utils/EncoderDecoderUtils";
import { mapGetters } from "vuex";
import removeAccents from "remove-accents";
import BaseList from "@/components/common/baseList.vue";
import IcTitleSunset from "@/components/icons/IcTitleSunset.vue";
import IcTitleSunrise from "@/components/icons/IcTitleSunrise.vue";
import IcTitlePressure from "@/components/icons/IcTitlePressure.vue";
import IcTitleCloudCover from "@/components/icons/IcTitleCloudCover.vue";
import IcTitleWindDirection from "@/components/icons/IcTitleWindDirection.vue";
import IcTitleWindSpeed from "@/components/icons/IcTitleWindSpeed.vue";
import IcTitleAir from "@/components/icons/IcTitleAir.vue";
import IcChanceOfRain from "@/components/icons/IcChanceOfRain.vue";
import IcPrecipitation from "@/components/icons/IcPrecipitation.vue";
import IcUvIndex from "@/components/icons/IcUvIndex.vue";
import IcTitleReadFeel from "@/components/icons/IcTitleReadFeel.vue";
import IcTemptMax from "@/components/icons/IcTemptMax.vue";
import IcTemptMin from "@/components/icons/IcTemptMin.vue";
import IcTempt from "@/components/icons/IcTempt.vue";
import IcHumidity from "@/components/icons/IcHumidity.vue";
import IcChanceOfRainSnow from "@/components/icons/IcChanceOfRainSnow.vue";
import IcTitleOzone3 from "@/components/icons/IcTitleOzone3.vue";
import IcTitleWindGust from "@/components/icons/IcTitleWindGust.vue";
import SkeletonLoader from "@/control-ui/SkeletonLoader/SkeletonLoader.vue";

export default {
  name: "item-time-24h",

  components: {
    BaseList,
    IcTitleSunset,
    IcTempt,
    IcTemptMin,
    IcTemptMax,
    IcTitleReadFeel,
    IcUvIndex,
    IcPrecipitation,
    IcChanceOfRain,
    IcTitleAir,
    IcTitleWindSpeed,
    IcTitleWindDirection,
    IcTitleCloudCover,
    IcTitlePressure,
    IcTitleSunrise,
    IcHumidity,
    IcChanceOfRainSnow,
    IcTitleWindGust,
    IcTitleOzone3,
    SkeletonLoader,
  },
  data() {
    return {
      valueChoose: -1,
      isRotated: false,
      itemsPerPage: 10, // Số mục hiển thị ban đầu
      currentPage: 1, // Trang hiện tại
      showLessButton: false,
      activeIndex: null, // Lưu trạng thái mục đang mở
    };
  },

  computed: {
    ...mapGetters("weatherModule", ["hourly24hGetters", "dailyOneGetters"]),
    ...mapGetters("commonModule", ["breadcumsObjectGetters"]),
    ...mapGetters("airQualityModule", ["airObjectGetters"]),
    languageParam() {
      const languageRouter = this.$route.params;

      return Object.keys(languageRouter).length !== 0
        ? languageRouter.language !== "en" && languageRouter.language !== "vi"
          ? "en"
          : languageRouter.language
        : this.$i18n.locale !== "en" && this.$i18n.locale !== "vi"
        ? "en"
        : this.$i18n.locale;
    },
    hourly24hGettersData() {
      return this.hourly24hGetters;
    },

    timePeriodSunsetTime() {
      const timeString = this.convertAMPMFromTimestampData(
        this.dailyOneGettersData?.sunsetTime
      );
      return timeString.split(" ")[1]; // Lấy phần AM/PM
    },

    timePeriodSunriseTime() {
      const timeString = this.convertAMPMFromTimestampData(
        this.dailyOneGettersData?.sunriseTime
      );
      return timeString.split(" ")[1]; // Lấy phần AM/PM
    },

    dailyOneGettersData() {
      return this.dailyOneGetters;
    },

    displayedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = this.currentPage * this.itemsPerPage;
      return this.hourly24hGettersData.slice(0, end);
    },

    showSeeMoreButton() {
      return this.displayedItems.length < this.hourly24hGettersData.length;
    },

    breadcumsObject() {
      const retrievedArray = JSON.parse(localStorage.getItem("objectBread"));
      const resultData = retrievedArray
        ? retrievedArray
        : this.breadcumsObjectGetters;

      return resultData;
    },

    paramAirModule() {
      const storageAir = this.$store.state.airQualityModule.apiValue;

      return storageAir;
    },
  },

  methods: {
    convertCapitalizeWords(value) {
      return capitalizeWords(value);
    },
    convertAMPMFromTimestampData(value) {
      const offsetValue = this.$store.state.weatherModule.locationOffset.offset;
      const timezoneValue =
        this.$store.state.weatherModule.locationOffset.timezone;
      return convertAMPMFromTimestamp(value, offsetValue, timezoneValue);
    },

    convertWindSpeed(value) {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      if (unitSetting.activeWindSpeed_save === "m/s") {
        return convertMPHtoMetPS(value);
      }
      if (unitSetting.activeWindSpeed_save === "km/h") {
        return convertMiToKm(value);
      }
      if (unitSetting.activeWindSpeed_save === "mi/h") {
        return value;
      }
      if (unitSetting.activeWindSpeed_save === "Knot") {
        return convertMiToKnot(value);
      }
      if (unitSetting.activeWindSpeed_save === "bft") {
        return convertMiToBeaufortScale(value);
      }
    },

    convertUnitWindSpeed() {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      return codeToFind(unitSetting.activeWindSpeed_save);
    },

    convertWindBearing(value) {
      return getWindDirectionFromDegrees(value);
    },

    onClickShowDetailCard(value) {
      if (this.activeIndex === value) {
        this.activeIndex = null; // Đóng mục nếu đã mở
      } else {
        this.activeIndex = value; // Mở mục mới
      }
      if (this.valueChoose === value) {
        this.valueChoose = -1;
      } else {
        this.valueChoose = value;
      }
    },

    convertTime(val) {
      const offsetValue = this.$store.state.weatherModule.locationOffset.offset;
      const timezoneValue =
        this.$store.state.weatherModule.locationOffset.timezone;
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      if (unitSetting.activeTime_save === "12h") {
        return convertTimestampToHoursMinutes12(
          val,
          1,
          offsetValue,
          timezoneValue
        );
      } else {
        return convertTimestampToHoursMinutes(
          val,
          1,
          offsetValue,
          timezoneValue
        );
      }
    },

    renderIcon(val) {
      const iconValue = getIconHourlyForecastTheme(val.icon);
      return iconValue;
    },

    convertPrecipitation(val) {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      if (unitSetting.activePrecipitation_save === "mm") {
        return (
          convertMillimet(val) +
          " " +
          codeToFind(unitSetting.activePrecipitation_save)
        );
      } else {
        return (
          convertMillimetToInch(val) +
          " " +
          codeToFind(unitSetting.activePrecipitation_save)
        );
      }
    },

    renderToCelsius(value) {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      if (unitSetting.activeTemperature_save === "f") {
        return (
          convertCtoF(value) + codeToFind(unitSetting.activeTemperature_save)
        );
      } else {
        return (
          convertFtoC(value) + codeToFind(unitSetting.activeTemperature_save)
        );
      }
    },

    convertPressure(val) {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      if (unitSetting.activePressure_save === "hPa") {
        return val;
      }
      if (unitSetting.activePressure_save === "mmHg") {
        return convertHpaToMmHg(val);
      }
      if (unitSetting.activePressure_save === "atm") {
        return convertHpaToAtm(val);
      }
      if (unitSetting.activePressure_save === "inHg") {
        return convertHpaToInHg(val);
      }
      if (unitSetting.activePressure_save === "mBar") {
        return convertHpaToMbar(val);
      }
      if (unitSetting.activePressure_save === "kPa") {
        return convertHpaToKpa(val);
      }
    },

    convertUnitPressure() {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      return codeToFind(unitSetting.activePressure_save);
    },

    convertTimeUnit(value) {
      const offsetValue = this.$store.state.weatherModule.locationOffset.offset;
      const timezoneValue =
        this.$store.state.weatherModule.locationOffset.timezone;
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      if (unitSetting.activeTime_save === "12h") {
        return convertTime12hTimeZoneNotNowUnit(
          value,
          1,
          offsetValue,
          timezoneValue
        );
      } else {
        return convertTime24hTimeZoneNotNow(
          value,
          1,
          offsetValue,
          timezoneValue
        );
      }
    },

    convertTimeUnit12(value) {
      const offsetValue = this.$store.state.weatherModule.locationOffset.offset;

      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      if (unitSetting.activeTime_save === "12h") {
        return convertTimestampUnit12(value, 1, offsetValue);
      } else {
        return "";
      }
    },

    onClickLoadMoreItems() {
      if (this.showLessButton) {
        this.currentPage = 1; // Reset to show the initial items
        this.showLessButton = false;
      } else {
        this.currentPage++;
        this.showLessButton =
          this.currentPage * this.itemsPerPage >=
          this.hourly24hGettersData.length;
      }
    },

    convertToEnglishRender(value) {
      return convertToEnglish(value);
    },

    convertFahrenheitToCelsiusNot(value) {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      if (unitSetting.activeTemperature_save === "f") {
        return (
          convertCtoF(value) + codeToFind(unitSetting.activeTemperature_save)
        );
      } else {
        return (
          convertFtoC(value) + codeToFind(unitSetting.activeTemperature_save)
        );
      }
    },

    convertUvIndexName(val) {
      return getUvSummaryName(val);
    },

    convertAirIndexName(val) {
      return getAirSummaryName(val);
    },

    convertToSlugCity(str) {
      const slug = removeAccents(str);

      return slug
        .toLowerCase() // Chuyển thành chữ thường
        .replace(/\s+/g, ""); // Xóa khoảng trắng
    },

    convertToLowCase(value) {
      const normalizedStr = value
        .normalize("NFD") // Chuyển chuỗi sang dạng tổ hợp Unicode
        .replace(/[\u0300-\u036f]/g, ""); // Loại bỏ các dấu

      return normalizedStr;
    },
  },
};
</script>
<style lang="scss">
.rotate-180 {
  transform: rotate(180deg);
  transition: transform 0.3s ease; /* Thêm hiệu ứng quay mượt mà */
}
</style>
