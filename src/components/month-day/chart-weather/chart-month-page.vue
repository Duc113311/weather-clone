<template>
  <div class="w-full h-full">
    <BaseComponent :height="heightAuto" :isShowPad="false">
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
                $t(`Temperature_and_chance_of_rain_{city}_next_30_days`, {
                  city: convertToLowCase(wardParam.city),
                })
              }}
            </span>

            <span
              v-if="wardParam?.city && wardParam?.district && !wardParam?.ward"
            >
              {{
                convertCapitalizeWords(
                  $t(`Temperature_and_chance_of_rain_{city}_next_30_days`, {
                    city: convertToLowCase(wardParam.district),
                  })
                )
              }}
            </span>

            <span
              v-if="wardParam?.city && wardParam?.district && wardParam?.ward"
              >{{
                convertCapitalizeWords(
                  $t(`Temperature_and_chance_of_rain_{city}_next_30_days`, {
                    city: convertToLowCase(wardParam.ward),
                  })
                )
              }}</span
            >
          </div>
          <div class="txt_medium_14" v-else>
            <span v-if="wardParam?.state && !wardParam?.cities">{{
              $t(`Temperature_and_chance_of_rain_{city}_next_30_days`, {
                city: $t(`${wardParam?.state}`),
              })
            }}</span>

            <span v-if="wardParam?.state && wardParam?.cities">{{
              $t(`Temperature_and_chance_of_rain_{city}_next_30_days`, {
                city: $t(`${wardParam?.cities}`),
              })
            }}</span>
          </div>
        </div>
      </template>

      <div class="w-full gap-4">
        <div class="w-auto h-[380px] pl-4 pr-4">
          <!-- <ChartTempRain></ChartTempRain> -->
          <div class="w-full relative h-full">
            <div class="w-full h-full relative">
              <vue-horizontal
                v-if="paramMonth.length > 0"
                :key="paramMonth.length"
                :displacement="0.9"
                class="w-full h-[calc(100%-30px)] relative horizontals pt-2"
              >
                <div class="w-full h-full relative">
                  <ChartTimeIcon class="h-[60px]"></ChartTimeIcon>
                  <ChartTitleTempMaxMin></ChartTitleTempMaxMin>
                  <ChartTitleChanceOfRainMonth></ChartTitleChanceOfRainMonth>

                  <div class="flex w-full h-full min-w-[1800px]">
                    <div
                      v-for="(day, index) in paramMonth"
                      :key="index"
                      class="flex-1 bor-r-chart opacity-30"
                    ></div>
                  </div>
                  <ChartTempMaxMin
                    class="h-[110px] absolute top-tem-month z-40"
                    :key="indexState + Math.random()"
                  ></ChartTempMaxMin>

                  <ChartPrecipitation
                    class="h-[150px] absolute -bottom-2 z-10"
                    :key="indexState + Math.random()"
                  ></ChartPrecipitation>

                  <ChartChanceOfRainBarMonth
                    class="h-[120px] absolute top-rain-gif-calendar z-20"
                  ></ChartChanceOfRainBarMonth>
                </div>
              </vue-horizontal>

              <div
                class="w-full h-[30px] md:flex grid grid-cols-3 justify-between pad-r-l-10"
              >
                <div class="flex items-center text-left gap-2">
                  <div class="bg-temp-c rounded-full w-[12px] h-[12px]"></div>
                  <span class="txt_regular_12">{{ $t("High") }}</span>
                </div>
                <div class="flex items-center text-left gap-2">
                  <div class="bg-temp-d rounded-full w-[12px] h-[12px]"></div>
                  <span class="txt_regular_12">{{ $t("Low") }}</span>
                </div>
                <div class="flex items-center text-left gap-2">
                  <div class="bg-rain-c rounded-full w-[12px] h-[12px]"></div>
                  <span class="txt_regular_12">{{ $t("Chance_of_rain") }}</span>
                </div>
                <div class="flex items-center text-left gap-2">
                  <div class="bg-snow-c rounded-full w-[12px] h-[12px]"></div>
                  <span class="txt_regular_12">{{ $t("Chance_of_snow") }}</span>
                </div>
                <div class="flex items-center text-left gap-2">
                  <div
                    class="bg-rainfall-c rounded-full w-[12px] h-[12px]"
                  ></div>
                  <span class="txt_regular_12">{{ $t("Precipitation") }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--  -->
      </div>
    </BaseComponent>
  </div>
</template>
<script>
import BaseComponent from "@/components/common/baseComponent.vue";
import ChartTimeIcon from "./chart-time-icon.vue";
import ChartTempMaxMin from "./chart-temp-max-min.vue";
import VueHorizontal from "vue-horizontal";
import ChartChanceOfRain from "./chart-chance-of-rain.vue";
import ChartPrecipitation from "./chart-precipitation.vue";
import { capitalizeWords } from "@/utils/converValue";
import removeAccents from "remove-accents";
import { mapGetters } from "vuex";
import ChartChanceOfRainBarMonth from "./chart-chance-of-rain-bar-month.vue";
import ChartTitleTempMaxMin from "./chart-title-temp-max-min.vue";
import ChartTitleChanceOfRain from "@/components/common/chart/chart-title-chance-of-rain.vue";
import ChartTitleChanceOfRainMonth from "./chart-title-chance-of-rain-month.vue";

export default {
  name: "chart-month-page",

  components: {
    BaseComponent,
    ChartTimeIcon,
    ChartTempMaxMin,
    VueHorizontal,
    ChartTitleTempMaxMin,
    // ChartChanceOfRain,
    ChartPrecipitation,
    ChartChanceOfRainBarMonth,
    ChartTitleChanceOfRainMonth,
  },
  data() {
    return {
      heightAuto: "auto",
    };
  },

  computed: {
    ...mapGetters("weatherModule", ["dailyOneGetters", "currentlyGetters"]),
    paramMonth() {
      return this.$store.state.weatherModule.listDaily30Day;
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
    indexState() {
      return this.$store.state.commonModule.indexComponent;
    },
  },

  methods: {
    convertToSlugCity(str) {
      const slug = removeAccents(str);

      return slug
        .toLowerCase() // Chuyển thành chữ thường
        .replace(/\s+/g, ""); // Xóa khoảng trắng
    },

    convertCapitalizeWords(value) {
      return capitalizeWords(value);
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
<style lang="css">
.bg-temp-c {
  background-color: #ec9d00;
}

.bg-rain-c {
  background-color: var(--bg-radio-chance-of-rain);
}

.bg-snow-c {
  background-color: var(--bg-radio-chance-of-snow);
}

.bg-temp-d {
  background-color: #02cc55;
}
.bg-rainfall-c {
  background-color: #327cee;
}

.bottom-chart-bar {
  top: 190px;
}
.bottom-chart-rain {
  top: 174px;
}

.top-rain-gif-calendar {
  top: 91px;
}

.top-tem-month {
  top: 93px;
}
</style>
