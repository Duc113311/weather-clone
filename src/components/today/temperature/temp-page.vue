<template>
  <div class="w-full">
    <!--  -->
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
            <span v-if="wardParam?.city && !wardParam?.district">{{
              $t(`Current_weather_in_{city}`, {
                city: convertToLowCase(wardParam.city),
              })
            }}</span>
            <span
              v-if="wardParam?.city && wardParam?.district && !wardParam?.ward"
              >{{
                convertCapitalizeWords(
                  $t(`Current_weather_in_{city}`, {
                    city: convertToLowCase(wardParam.district),
                  })
                )
              }}</span
            >

            <span
              v-if="wardParam?.city && wardParam?.district && wardParam?.ward"
              >{{
                convertCapitalizeWords(
                  $t(`Current_weather_in_{city}`, {
                    city: convertToLowCase(wardParam.ward),
                  })
                )
              }}</span
            >
          </div>
          <div class="txt_medium_14" v-else>
            <span v-if="wardParam?.state && !wardParam?.cities">{{
              $t(`Current_weather_in_{city}`, {
                city: $t(`${wardParam?.state}`),
              })
            }}</span>

            <span v-if="wardParam?.state && wardParam?.cities">{{
              $t(`Current_weather_in_{city}`, {
                city: $t(`${wardParam?.cities}`),
              })
            }}</span>
          </div>
        </div>
      </template>

      <div class="w-full">
        <HeaderTemp
          :currentlyData="currentlyData"
          :dailyOneData="dailyOneData"
        ></HeaderTemp>
        <!--  -->
        <TabNavigation @onChangeTabChart="onChangeTabChart"></TabNavigation>
        <!--  -->
        <div class="w-full h-[378px] pad-l-r">
          <ChartTempRain
            :key="indexKey + Math.random()"
            v-show="indexChart === 0"
          ></ChartTempRain>
          <UvChartPage
            :key="indexKey + Math.random()"
            v-show="indexChart === 1"
          >
          </UvChartPage>
          <WindChartPage
            :key="indexKey + Math.random()"
            v-show="indexChart === 2"
          >
          </WindChartPage>
          <HumidChartPage
            :key="indexKey + Math.random()"
            v-show="indexChart === 3"
          ></HumidChartPage>
          <PressureChartPage
            :key="indexKey + Math.random()"
            v-show="indexChart === 4"
          ></PressureChartPage>
        </div>

        <!--  -->
      </div>
    </BaseComponent>
  </div>
</template>
<script>
import BaseComponent from "@/components/common/baseComponent.vue";
import HeaderTemp from "./header-temp.vue";
import TabNavigation from "./tab-navigation.vue";
import ChartTempRain from "./chart-temp-rain.vue";
import { mapGetters, mapMutations } from "vuex";
import UvChartPage from "../uv-chart/uv-chart-page.vue";
import WindChartPage from "../wind-chart/wind-chart-page.vue";
import HumidChartPage from "../humid-chart/humid-chart-page.vue";
import PressureChartPage from "../pressure-chart/pressure-chart-page.vue";
import removeAccents from "remove-accents";
import { capitalizeWords } from "@/utils/converValue";

export default {
  name: "temp-page",

  components: {
    BaseComponent,
    HeaderTemp,
    TabNavigation,
    ChartTempRain,
    UvChartPage,
    WindChartPage,
    HumidChartPage,
    PressureChartPage,
  },

  computed: {
    ...mapGetters("weatherModule", ["currentlyGetters", "dailyOneGetters"]),

    ...mapGetters("commonModule", [
      "indexComponentGetters",
      "breadcumsObjectGetters",
    ]),

    currentlyData() {
      return this.currentlyGetters;
    },

    dailyOneData() {
      return this.dailyOneGetters;
    },

    indexState() {
      return this.$store.state.commonModule.indexComponent;
    },

    wardParam() {
      const retrievedArray = JSON.parse(localStorage.getItem("objectBread"));
      const resultData = retrievedArray
        ? retrievedArray
        : this.breadcumsObjectGetters;

      return resultData;
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
  },

  data() {
    return {
      indexChart: 0,
      indexKey: 0,
    };
  },

  methods: {
    ...mapMutations("commonModule", ["setIndexComponent"]),
    convertCapitalizeWords(value) {
      return capitalizeWords(value);
    },

    escapeKey(key) {
      // Kiểm tra nếu key chứa dấu ' thì escape
      if (key.includes("'")) {
        return key.replace(/'/g, "\\'");
      }
      // Nếu không chứa dấu ', trả về key như bình thường
      return key;
    },
    convertToLowCase(value) {
      const normalizedStr = value
        .normalize("NFD") // Chuyển chuỗi sang dạng tổ hợp Unicode
        .replace(/[\u0300-\u036f]/g, ""); // Loại bỏ các dấu

      return normalizedStr;
    },
    convertToSlugCity(str) {
      const slug = removeAccents(str);

      return slug
        .toLowerCase() // Chuyển thành chữ thường
        .replace(/\s+/g, ""); // Xóa khoảng trắng
    },
    onChangeTabChart(value) {
      this.indexChart = value;
      this.indexKey = this.indexKey + 1;

      // this.setIndexComponent(this.indexKey);
    },
  },
};
</script>
<style lang=""></style>
