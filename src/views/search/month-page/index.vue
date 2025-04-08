<template>
  <div class="w-full h-full pl-2 pr-2">
    <!-- -->
    <div class="container mt-5">
      <div class="header-m flex w-full gap-20-px h-full">
        <div class="left-hourly w-full">
          <!--  -->
          <CalendarPage
            :key="indexState + Math.random()"
            v-if="currentlyData && Object.keys(currentlyData).length > 0"
          ></CalendarPage>
          <div v-else class="w-full h-full">
            <SkeletonLoader class="w-full h-[600px]"> </SkeletonLoader>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="header-b ld:block lg:flex w-full gap-20-px h-full">
        <div class="left-hourly lg:w-[67%] w-full">
          <!--  -->
          <ChartMonthPage
            :key="indexState + Math.random()"
            v-if="listDaily30DayData && listDaily30DayData.length > 0"
          ></ChartMonthPage>
          <div v-else class="w-full h-full mt-6">
            <SkeletonLoader class="w-full h-[460px]"> </SkeletonLoader>
          </div>
        </div>

        <div class="right-hourly lg:w-[31%] w-full lg:h-[439px]">
          <!--  -->
          <TempFullCard
            :key="indexState + Math.random()"
            v-if="currentlyData && Object.keys(currentlyData).length > 0"
            :title="title"
          ></TempFullCard>

          <div v-else class="w-full h-full">
            <SkeletonLoader class="w-full h-[600px]"> </SkeletonLoader>
          </div>
          <!--  -->
        </div>
      </div>
    </div>

    <div class="container">
      <div class="lg:flex w-full h-full mt-1 gap-20-px">
        <div class="left-hourly lg:w-[68%] w-full">
          <!--  -->

          <ItemTime30Day
            :key="indexState + Math.random()"
            v-if="currentlyData && Object.keys(currentlyData).length > 0"
          ></ItemTime30Day>
          <div v-else class="w-full h-full mt-6">
            <SkeletonLoader class="w-full h-[960px]"> </SkeletonLoader>
          </div>

          <div
            class="left-hourly w-[100%] lg:mt-0 md:mt-10"
            v-if="currentlyData && Object.keys(currentlyData).length > 0"
          >
            <ListNearbyLocation
              :key="indexState + Math.random()"
            ></ListNearbyLocation>
          </div>
          <div v-else class="w-full h-[380px] mt-5">
            <SkeletonLoader class="w-full h-full"> </SkeletonLoader>
          </div>

          <div
            class="right-hourly w-[100%]"
            v-if="currentlyData && Object.keys(currentlyData).length > 0"
          >
            <ListCountryPage
              :key="indexState + Math.random()"
            ></ListCountryPage>
          </div>
          <div v-else class="w-full h-[380px] mt-5">
            <SkeletonLoader class="w-full h-full"> </SkeletonLoader>
          </div>
        </div>

        <div
          class="right-hourly lg:w-[32%] w-full md:grid md:grid-cols-2 gap-5 lg:block"
        >
          <RadarPage
            class="lg:h-[200px]"
            v-if="currentlyData && Object.keys(currentlyData).length > 0"
          ></RadarPage>
          <div v-else class="w-full h-[260px] md:mt-5">
            <SkeletonLoader class="w-full h-[260px]"> </SkeletonLoader>
          </div>
          <SunPage
            class="mt-10"
            :key="indexState + Math.random()"
            v-if="currentlyData && Object.keys(currentlyData).length > 0"
          ></SunPage>
          <div v-else class="w-full h-[260px] md:mt-5">
            <SkeletonLoader class="w-full h-full"> </SkeletonLoader>
          </div>
          <MoonPage
            :key="indexState + Math.random()"
            v-if="currentlyData && Object.keys(currentlyData).length > 0"
          ></MoonPage>
          <div v-else class="w-full h-[260px] md:mt-5">
            <SkeletonLoader class="w-full h-full"> </SkeletonLoader>
          </div>
          <UvPage
            class="lg:mt-0 md:mt-6"
            :key="indexState + Math.random()"
            v-if="currentlyData && Object.keys(currentlyData).length > 0"
          ></UvPage>
          <div v-else class="w-full h-[260px] md:mt-5">
            <SkeletonLoader class="w-full h-full"> </SkeletonLoader>
          </div>
          <AirQualityPage
            class="lg:mt-0 md:mt-6"
            :key="indexState + Math.random()"
            v-if="currentlyData && Object.keys(currentlyData).length > 0"
          ></AirQualityPage>
          <div v-else class="w-full h-[260px] md:mt-5">
            <SkeletonLoader class="w-full h-full"> </SkeletonLoader>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AirQualityPage from "@/components/common/air-quality/air-quality-page.vue";
import MoonPage from "@/components/common/moon-phase/moon-page.vue";
import SunPage from "@/components/common/sun/sun-page.vue";
import TempFullCard from "@/components/common/temp-full/temp-full-card.vue";
import UvPage from "@/components/common/uv-index/uv-page.vue";
import ChartAvgWeather from "@/components/hourly-day/chart-weather/chart-avg-weather.vue";
import CalendarPage from "@/components/month-day/calendar/calendar-page.vue";
import ChartMonthPage from "@/components/month-day/chart-weather/chart-month-page.vue";
import ItemTime30Day from "@/components/month-day/item-weather/item-time-30-day.vue";
import ListCountryPage from "@/components/today/country/list-country-page.vue";
import ListNearbyLocation from "@/components/today/nearby-location/list-nearby-location.vue";
import RadarPage from "@/components/today/radar/radar-page.vue";
import SkeletonLoader from "@/control-ui/SkeletonLoader/SkeletonLoader.vue";
import { encodeBase64 } from "@/utils/EncoderDecoderUtils";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "month-weather",

  components: {
    CalendarPage,
    TempFullCard,
    ChartMonthPage,
    RadarPage,
    ItemTime30Day,
    SunPage,
    MoonPage,
    UvPage,
    AirQualityPage,
    SkeletonLoader,
    ListNearbyLocation,
    ListCountryPage,
  },
  data() {
    return {
      title: "Today Sumary",
    };
  },

  computed: {
    ...mapGetters("commonModule", ["breadcumsObjectGetters"]),
    ...mapGetters("weatherModule", [
      "currentlyGetters",
      "listDaily30DayGetters",
    ]),

    breadcumsObject() {
      return this.breadcumsObjectGetters;
    },

    currentlyData() {
      return this.currentlyGetters;
    },

    listDaily30DayData() {
      return this.listDaily30DayGetters;
    },

    indexState() {
      return this.$store.state.commonModule.indexComponent;
    },

    objectLocalBreadcums() {
      const retrievedArray = JSON.parse(localStorage.getItem("objectBread"));
      return retrievedArray ? retrievedArray : this.breadcumsObjectGetters;
    },
  },

  async created() {
    await this.getWeather30Day();
  },

  mounted() {
    this.setActiveTab(2);
  },

  methods: {
    ...mapActions("weatherModule", ["getWeather30DayData"]),
    ...mapMutations("commonModule", ["setActiveTab"]),
    async getWeather30Day() {
      const objectLocationLatLong = JSON.parse(
        localStorage.getItem("locationLatLong")
      );
      if (objectLocationLatLong) {
        const objectBreadValue = objectLocationLatLong;
        const retrievedArray = JSON.parse(localStorage.getItem("objectBread"));

        console.log("retrievedArray", retrievedArray);

        const param = `version=1&type=10&app_id=amobi.weather.forecast.radar.rain&request=https://api.forecast.io/forecast/TOH_KEY/${retrievedArray.latitude},${retrievedArray.longitude}?lang=en`;

        console.log("param30Day", param);

        const value = encodeBase64(param);
        await this.getWeather30DayData(value);
      }
    },
  },

  // beforeRouteLeave(to, from, next) {
  //   window.location.replace(to.fullPath);
  //   next(); // Cho phép chuyển route
  // },
};
</script>

<style lang="scss"></style>
