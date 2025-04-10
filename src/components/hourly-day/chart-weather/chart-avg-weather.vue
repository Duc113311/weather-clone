<template>
  <div class="w-full">
    <div class="lg:flex items-center gap-20-px w-full h-full">
      <div class="left-i w-full">
        <BaseComponent :isShowPad="false">
          <template v-slot:header>
            <div class="flex items-center text-left gap-2">
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
              <div class="txt_medium_14" v-if="wardParam.country_key === 'vn'">
                <span v-if="wardParam?.city && !wardParam?.district">
                  {{
                    $t(`Temperature_and_chance_of_rain_{city}_hour`, {
                      city: convertToLowCase(wardParam.city),
                    })
                  }}
                </span>

                <span
                  v-if="
                    wardParam?.city && wardParam?.district && !wardParam?.ward
                  "
                >
                  {{
                    convertCapitalizeWords(
                      $t(`Temperature_and_chance_of_rain_{city}_hour`, {
                        city: convertToLowCase(wardParam.district),
                      })
                    )
                  }}
                </span>

                <span
                  v-if="
                    wardParam?.city && wardParam?.district && wardParam?.ward
                  "
                  >{{
                    convertCapitalizeWords(
                      $t(`Temperature_and_chance_of_rain_{city}_hour`, {
                        city: convertToLowCase(wardParam.ward),
                      })
                    )
                  }}</span
                >
              </div>
              <div v-else class="txt_medium_14">
                <span v-if="wardParam?.state && !wardParam?.cities">
                  {{
                    $t(`Temperature_and_chance_of_rain_{city}_hour`, {
                      city: $t(`${wardParam?.state}`),
                    })
                  }}
                </span>

                <span v-if="wardParam?.state && wardParam?.cities">
                  {{
                    $t(`Temperature_and_chance_of_rain_{city}_hour`, {
                      city: $t(`${wardParam?.state}`),
                    })
                  }}
                </span>
              </div>
            </div>
          </template>

          <div class="w-full">
            <div
              v-if="currentlyData && Object.keys(currentlyData).length < 0"
              class="w-auto h-[380px] pl-4 pr-4"
            >
              <!-- <ChartTempRain></ChartTempRain> -->
              <ChartSyntheticHourly></ChartSyntheticHourly>
            </div>
            <div v-else class="l w-full h-[380px]">
              <SkeletonLoader class="w-full h-full"> </SkeletonLoader>
            </div>

            <!--  -->
          </div>
        </BaseComponent>
      </div>
    </div>
  </div>
</template>
<script>
import BaseComponent from "@/components/common/baseComponent.vue";
import ChartTempRain from "@/components/today/temperature/chart-temp-rain.vue";
import SkeletonLoader from "@/control-ui/SkeletonLoader/SkeletonLoader.vue";
import {
  capitalizeWords,
  codeToFind,
  convertCtoF,
  convertFtoC,
  convertMillimet,
  convertMillimetToInch,
  getIconHourlyForecastTheme,
} from "@/utils/converValue";
import { mapGetters } from "vuex";
import removeAccents from "remove-accents";
import ChartSyntheticHourly from "../chart-tempt-hourly/chart-synthetic-hourly.vue";

export default {
  name: "chart-avg-weather",

  components: {
    BaseComponent,
    // ChartTempRain,
    SkeletonLoader,
    ChartSyntheticHourly,
  },
  data() {
    return {};
  },

  computed: {
    ...mapGetters("commonModule", ["breadcumsObjectGetters"]),
    ...mapGetters("weatherModule", ["dailyOneGetters", "currentlyGetters"]),

    currentlyData() {
      return this.currentlyGetters;
    },

    dailyOneData() {
      return this.dailyOneGetters;
    },

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
    convertIconCurrently(value) {
      if (value) {
        const url = getIconHourlyForecastTheme(value);
        return url;
      }
    },

    convertToSlugCity(str) {
      const slug = removeAccents(str);

      return slug
        .toLowerCase() // Chuyển thành chữ thường
        .replace(/\s+/g, ""); // Xóa khoảng trắng
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

    convertFahrenheitToCelsiusAmtp(value) {
      const temp = value.apparentTemperature;
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      if (unitSetting.activeTemperature_save === "f") {
        return (
          convertCtoF(temp) + codeToFind(unitSetting.activeTemperature_save)
        );
      } else {
        return (
          convertFtoC(temp) + codeToFind(unitSetting.activeTemperature_save)
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

    convertToLowCase(value) {
      return value ? value.replace(/_/g, " ") : "";
    },
  },
};
</script>
<style lang="scss">
.flex-hourly {
  grid-column: span 3;
  display: grid;
  grid-template-columns: 2fr 2fr;
  gap: 16px;
}
</style>
