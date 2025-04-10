vue-horizontal
<template>
  <div class="w-full">
    <BaseComponent>
      <template v-slot:header>
        <div class="flex items-center text-left gap-2">
          <IcUvIndex class="icon-svg"></IcUvIndex>
          <div class="txt_medium_14" v-if="wardParam.country_key === 'vn'">
            <span v-if="wardParam?.city && !wardParam?.district">{{
              $t(`Daily_Weather_{city}`, {
                city: convertToLowCase(wardParam.city),
              })
            }}</span>
            <span
              v-if="wardParam?.city && wardParam?.district && !wardParam?.ward"
              >{{
                convertCapitalizeWords(
                  $t(`Daily_Weather_{city}`, {
                    city: convertToLowCase(wardParam.district),
                  })
                )
              }}</span
            >

            <span
              v-if="wardParam?.city && wardParam?.district && wardParam?.ward"
              >{{
                convertCapitalizeWords(
                  $t(`Daily_Weather_{city}`, {
                    city: convertToLowCase(wardParam.ward),
                  })
                )
              }}</span
            >
          </div>
          <div class="txt_medium_14" v-else>
            <span v-if="wardParam?.state && !wardParam?.cities">{{
              $t(`Daily_Weather_{city}`, {
                city: $t(`${wardParam?.state}`),
              })
            }}</span>

            <span v-if="wardParam?.state && wardParam?.cities">{{
              $t(`Daily_Weather_{city}`, {
                city: $t(`${wardParam?.cities}`),
              })
            }}</span>
          </div>
        </div>
      </template>
      <div v-if="dailyGettersData.length !== 0" class="w-full h-full">
        <div class="w-full h-full">
          <div class="w-full h-full relative">
            <vue-horizontal
              v-if="dailyGettersData.length > 0"
              :key="dailyGettersData.length"
              :displacement="1"
              class="w-full relative h-full horizontal"
            >
              <div class="w-full flex gap-4 h-full relative pl-2 pr-2">
                <div v-for="(item, index) in dailyGettersData" :key="index">
                  <div
                    v-if="item !== null"
                    class="w-[169px] h-full flex flex-col gap-1 item-daily"
                  >
                    <div class="w-full text-left">
                      <span class="txt_regular_14"
                        >{{ renderHourly(item).timestampValue }},
                      </span>
                      <span class="txt_regular_12">
                        {{ convertToShortDay(item.time) }}
                      </span>
                    </div>
                    <!--  -->
                    <div
                      class="w-full flex gap-4 justify-between items-center pt-2 pb-2 h-[90px]"
                    >
                      <div class="flex flex-col gap-2">
                        <component :is="renderIcon(item.icon)"></component>
                        <p class="txt_regular_12 text-left">
                          {{ convertSummary(item?.summary) }}
                        </p>
                      </div>

                      <div class="flex flex-col gap-1">
                        <div class="flex items-center gap-1">
                          <IcTemptMin class="icon-svg"></IcTemptMin>
                          {{ renderToCelsius(item.temperatureMin) }}
                        </div>
                        <div class="flex items-center gap-1">
                          <IcTemptMax class="icon-svg"></IcTemptMax>
                          {{ renderToCelsius(item.temperatureMax) }}
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-col gap-2">
                      <!--  -->
                      <div class="w-full flex justify-start items-center"></div>
                      <!--  -->
                      <div
                        class="w-full flex gap-1 justify-between items-center"
                      >
                        <IcPrecipitation class="icon-svg"></IcPrecipitation>
                        <div class="flex items-center txt_medium_15">
                          <p>
                            {{ convertPrecipitation(item?.precipIntensity) }}
                          </p>
                        </div>
                      </div>
                      <!--  -->
                      <div
                        class="w-full flex gap-1 justify-between items-center"
                      >
                        <div
                          class="flex items-center gap-2"
                          v-if="item?.precipType === 'Snow'"
                        >
                          <IcChanceOfRainSnow
                            class="icon-svg"
                          ></IcChanceOfRainSnow>
                        </div>
                        <div class="flex items-center gap-2" v-else>
                          <IcChanceOfRain class="icon-svg"></IcChanceOfRain>
                        </div>
                        <div class="flex items-center txt_medium_15">
                          <p>
                            {{ Math.round(item?.precipProbability * 100) }}%
                          </p>
                        </div>
                      </div>
                      <!--  -->
                      <div
                        class="w-full flex gap-1 justify-between items-center"
                      >
                        <IcHumidity class="icon-svg"></IcHumidity>
                        <div class="flex items-center txt_medium_15">
                          <p>{{ Math.round(item?.humidity * 100) }}%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-else class="w-[169px] h-[230px]">
                    <SkeletonLoader class="w-full h-full"> </SkeletonLoader>
                  </div>
                </div>
              </div>
            </vue-horizontal>
          </div>
        </div>
      </div>
    </BaseComponent>
  </div>
</template>
<script>
import IcUvIndex from "@/components/icons/IcUvIndex.vue";
import BaseComponent from "../baseComponent.vue";
import { mapGetters, mapState } from "vuex";
import VueHorizontal from "vue-horizontal";
import {
  capitalizeWords,
  codeToFind,
  convertCtoF,
  convertDayOfWeek,
  convertFtoC,
  convertMillimet,
  convertMillimetToInch,
  convertTimestampToDayMonth,
  getIconHourlyForecastTheme,
  getTextWeather,
} from "@/utils/converValue";
import IcTemptMax from "@/components/icons/IcTemptMax.vue";
import IcTemptMin from "@/components/icons/IcTemptMin.vue";
import IcPrecipitation from "@/components/icons/IcPrecipitation.vue";
import IcChanceOfRainSnow from "@/components/icons/IcChanceOfRainSnow.vue";
import IcChanceOfRain from "@/components/icons/IcChanceOfRain.vue";
import IcHumidity from "@/components/icons/IcHumidity.vue";
import SkeletonLoader from "@/control-ui/SkeletonLoader/SkeletonLoader.vue";

export default {
  name: "daily-page",

  components: {
    BaseComponent,
    IcUvIndex,
    IcTemptMax,
    VueHorizontal,
    IcTemptMin,
    IcPrecipitation,
    IcChanceOfRainSnow,
    IcChanceOfRain,
    IcHumidity,
    SkeletonLoader,
  },

  computed: {
    ...mapState("weatherModule", ["dailyDataGetters"]),
    ...mapGetters("commonModule", [
      "indexComponentGetters",
      "breadcumsObjectGetters",
    ]),
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

    dailyGettersData() {
      debugger;
      const dailyData = this.$store.state.weatherModule.dailyData;
      console.log("dailyData", dailyData.slice(1));

      return dailyData.slice(1);
    },

    wardParam() {
      const retrievedArray = JSON.parse(localStorage.getItem("objectBread"));
      const resultData = retrievedArray
        ? retrievedArray
        : this.breadcumsObjectGetters;

      return resultData;
    },
  },

  methods: {
    convertCapitalizeWords(value) {
      return capitalizeWords(value);
    },

    convertToLowCase(value) {
      const normalizedStr = value
        .normalize("NFD") // Chuyển chuỗi sang dạng tổ hợp Unicode
        .replace(/[\u0300-\u036f]/g, ""); // Loại bỏ các dấu

      return normalizedStr;
    },

    renderHourly(value) {
      const offsetValue = this.$store.state.weatherModule.locationOffset.offset;

      const timestampValue = convertDayOfWeek(value.time, offsetValue);

      return {
        timestampValue: timestampValue,
      };
    },

    convertToShortDay(value) {
      const timezone =
        this.$store.state.weatherModule?.locationOffset?.timezone;
      const offsetValue =
        this.$store.state.weatherModule?.locationOffset?.offset;

      return convertTimestampToDayMonth(value, offsetValue, timezone);
    },

    renderIcon(val) {
      const iconValue = getIconHourlyForecastTheme(val);
      return iconValue;
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

    convertSummary(val) {
      return getTextWeather(val);
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
  },
};
</script>
<style lang="scss">
.item-daily {
  border-radius: 20px;
  background: linear-gradient(to bottom, #495970 50%, #4b74b0);
  padding: 10px;
}
</style>
