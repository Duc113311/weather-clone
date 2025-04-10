<template>
  <div class="w-full h-full pl-2 pr-2">
    <!-- -->
    <div class="container mt-5">
      <div class="header-h h-full w-full lg:flex block gap-20-px">
        <div class="left-hourly lg:w-[67%] w-full">
          <!--  -->
          <ChartAvgWeather :key="indexState + Math.random()"> </ChartAvgWeather>
        </div>

        <div class="right-hourly lg:w-[31%] w-full lg:mt-0 md:mt-0">
          <TempFullCard :key="indexState + Math.random()"></TempFullCard>
        </div>
      </div>
    </div>

    <!--  -->
    <div class="container">
      <div class="lg:flex w-full h-full mt-1 gap-20-px">
        <div class="left-hourly h-full lg:w-[68%] w-full">
          <!--  -->
          <ItemTime24h :key="indexState + Math.random()"></ItemTime24h>

          <div class="left-hourly w-[100%] lg:mt-0 md:mt-10">
            <ListNearbyLocation
              :key="indexState + Math.random()"
            ></ListNearbyLocation>
          </div>

          <div class="left-hourly w-[100%] lg:mt-0">
            <ListCountryPage
              :key="indexState + Math.random()"
            ></ListCountryPage>
          </div>
        </div>

        <div
          class="right-hourly lg:w-[32%] w-full md:grid md:grid-cols-2 gap-5 lg:block"
        >
          <SunPage :key="indexState + Math.random()"></SunPage>

          <MoonPage :key="indexState + Math.random()"></MoonPage>

          <UvPage
            class="lg:mt-0 md:mt-6"
            :key="indexState + Math.random()"
          ></UvPage>

          <AirQualityPage
            class="lg:mt-0 md:mt-6"
            :key="indexState + Math.random()"
          ></AirQualityPage>

          <div class="right-hourly lg:h-[243px] w-[100%]">
            <RadarPage :key="indexState + Math.random()"></RadarPage>
          </div>
        </div>
      </div>
    </div>

    <!--  -->
  </div>
</template>

<script>
import AirQualityPage from "@/components/common/air-quality/air-quality-page.vue";
import MoonPage from "@/components/common/moon-phase/moon-page.vue";
import SunPage from "@/components/common/sun/sun-page.vue";
import TempFullCard from "@/components/common/temp-full/temp-full-card.vue";
import UvPage from "@/components/common/uv-index/uv-page.vue";
import ChartAvgWeather from "@/components/hourly-day/chart-weather/chart-avg-weather.vue";
import ItemTime24h from "@/components/hourly-day/item-card-page.vue/item-time-24h.vue";
import ListCountryPage from "@/components/today/country/list-country-page.vue";
import ListNearbyLocation from "@/components/today/nearby-location/list-nearby-location.vue";
import RadarPage from "@/components/today/radar/radar-page.vue";
import SkeletonLoader from "@/control-ui/SkeletonLoader/SkeletonLoader.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "hourly-weather",

  components: {
    ChartAvgWeather,
    ItemTime24h,
    RadarPage,
    SunPage,
    MoonPage,
    AirQualityPage,
    // SkeletonLoader,
    ListNearbyLocation,
    UvPage,
    TempFullCard,
    ListCountryPage,
  },
  data() {
    return {};
  },

  computed: {
    ...mapGetters("weatherModule", ["currentlyGetters"]),
    currentlyData() {
      return this.currentlyGetters;
    },

    indexState() {
      debugger;
      return this.$store.state.commonModule.indexComponent;
    },
  },

  mounted() {
    this.setActiveTab(1);
  },

  methods: {
    ...mapMutations("commonModule", ["setActiveTab"]),
  },
  // beforeRouteLeave(to, from, next) {
  //   window.location.replace(to.fullPath);
  //   next(); // Cho phép chuyển route
  // },
};
</script>

<style lang="scss">
.header-2 {
  grid-column: span 3;
  display: grid;
  grid-template-columns: 2fr 2fr;
  gap: 16px;
}
</style>
