<template>
  <div class="w-full pl-2 pr-2">
    <!-- Body1 Current -->
    <div class="container md:mt-0 mt-4">
      <div class="header h-full w-full lg:flex gap-20-px">
        <div
          class="left-today w-full h-full"
          v-if="currentlyData && Object.keys(currentlyData).length > 0"
        >
          <TempPage :key="indexState + Math.random()"></TempPage>
        </div>
        <div v-else class="w-full h-[800px]">
          <SkeletonLoader class="w-full h-full"> </SkeletonLoader>
        </div>
      </div>
    </div>

    <!-- Body2 daily -->

    <div
      class="container local-d lg:flex block w-full justify-between gap-20-px md:pt-2 md:pb-2"
    >
      <!--  -->
      <div
        class="container h-[280px] local-d lg:flex block w-full justify-between gap-20-px md:pt-2 md:pb-2"
      >
        <div class="left-c w-full lg:w-[68%] gap-20-px">
          <div
            class="md:flex block justify-between lg:h-[260px] w-full gap-20-px"
            v-if="currentlyData && Object.keys(currentlyData).length > 0"
          >
            <!--  -->
            <DailyPage></DailyPage>
          </div>
          <div v-else class="w-full h-[310px]">
            <SkeletonLoader class="w-full h-full"> </SkeletonLoader>
          </div>
        </div>

        <div class="right-c lg:w-[32%] w-full">
          <!--  -->
          <div
            class="right-country lg:h-[260px] md:h-[243px] w-[100%]"
            v-if="currentlyData && Object.keys(currentlyData).length > 0"
          >
            <RadarPage :key="indexState + Math.random()"></RadarPage>
          </div>
          <div v-else class="w-full h-[310px]">
            <SkeletonLoader class="w-full h-full"> </SkeletonLoader>
          </div>
        </div>
      </div>
    </div>

    <!-- Body3 Option-current -->
    <div
      class="container local-d lg:flex block w-full justify-between gap-20-px md:pt-2 md:pb-2 mt-4"
    >
      <!--  -->
      <div class="md:flex block justify-between w-full gap-20-px">
        <div class="left-c md:w-[50%] w-full flex flex-col gap-20-px">
          <!--  -->
          <div
            class="w-full"
            v-if="currentlyData && Object.keys(currentlyData).length > 0"
          >
            <SunPage :key="indexState + Math.random()"></SunPage>
          </div>
          <div v-else class="w-full h-[230px] md:mt-4 mt-2">
            <SkeletonLoader class="w-full h-full"> </SkeletonLoader>
          </div>
          <div
            class="w-full"
            v-if="currentlyData && Object.keys(currentlyData).length > 0"
          >
            <MoonPage :key="indexState + Math.random()"></MoonPage>
          </div>
          <div v-else class="w-full h-[230px] md:mt-1">
            <SkeletonLoader class="w-full h-full"> </SkeletonLoader>
          </div>

          <!-- <div
            class="w-full"
            v-if="currentlyData && Object.keys(currentlyData).length > 0"
          >
            <PreciptationPage></PreciptationPage>
          </div>
          <div v-else class="w-full h-[240px] md:mt-1">
            <SkeletonLoader class="w-full h-full"> </SkeletonLoader>
          </div> -->
        </div>

        <div class="center-c md:w-[50%] w-full flex flex-col gap-20-px">
          <!--  -->
          <div
            class="w-full"
            v-if="currentlyData && Object.keys(currentlyData).length > 0"
          >
            <UvPage :key="indexState + Math.random()"></UvPage>
          </div>
          <div v-else class="w-full h-[230px] mt-4">
            <SkeletonLoader class="w-full h-full"> </SkeletonLoader>
          </div>

          <div
            class="w-full"
            v-if="currentlyData && Object.keys(currentlyData).length > 0"
          >
            <AirQualityPage :key="indexState + Math.random()"></AirQualityPage>
          </div>
          <div v-else class="w-full h-[230px] md:mt-1">
            <SkeletonLoader class="w-full h-full"> </SkeletonLoader>
          </div>

          <!-- <div
            class="w-full"
            v-if="currentlyData && Object.keys(currentlyData).length > 0"
          >
            <CloudCoverPage :key="indexState + Math.random()"></CloudCoverPage>
          </div>
          <div v-else class="w-full h-[240px] md:mt-1">
            <SkeletonLoader class="w-full h-full"> </SkeletonLoader>
          </div> -->
        </div>

        <div class="center-c md:w-[50%] w-full flex flex-col gap-20-px">
          <div
            class="w-full"
            v-if="currentlyData && Object.keys(currentlyData).length > 0"
          >
            <CloudCoverPage :key="indexState + Math.random()"></CloudCoverPage>
          </div>
          <div v-else class="w-full h-[240px] mt-4">
            <SkeletonLoader class="w-full h-full"> </SkeletonLoader>
          </div>

          <div
            class="w-full"
            v-if="currentlyData && Object.keys(currentlyData).length > 0"
          >
            <PreciptationPage
              :key="indexState + Math.random()"
            ></PreciptationPage>
          </div>
          <div v-else class="w-full h-[240px] md:mt-1">
            <SkeletonLoader class="w-full h-full"> </SkeletonLoader>
          </div>

          <!-- <div
            class="w-full"
            v-if="currentlyData && Object.keys(currentlyData).length > 0"
          >
            <VisibilityPage :key="indexState + Math.random()"></VisibilityPage>
          </div>
          <div v-else class="w-full h-[240px] md:mt-1">
            <SkeletonLoader class="w-full h-full"> </SkeletonLoader>
          </div> -->
        </div>
      </div>
    </div>

    <!-- Body4 City around -->
    <div class="container local-c w-full md:flex gap-20-px">
      <div
        class="left-location w-[100%]"
        v-if="currentlyData && Object.keys(currentlyData).length > 0"
      >
        <!--  -->
        <ListNearbyLocation
          :key="indexState + Math.random()"
        ></ListNearbyLocation>

        <ListCountryPage :key="indexState + Math.random()"></ListCountryPage>
      </div>
      <div v-else class="w-full h-[300px] md:mt-4 mt-2">
        <SkeletonLoader class="w-full h-full"> </SkeletonLoader>
      </div>
    </div>

    <div class="md:hidden block mt-8">
      <!--  -->
      <div class="flex justify-center items-center h-auto">
        <img
          src="../../../assets/images/png/ic_app_download.png"
          alt=""
          width="200"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AirQualityPage from "@/components/common/air-quality/air-quality-page.vue";
import MoonPage from "@/components/common/moon-phase/moon-page.vue";
import SunPage from "@/components/common/sun/sun-page.vue";
import UvPage from "@/components/common/uv-index/uv-page.vue";
import IcTitleDaytime from "@/components/icons/IcTitleDaytime.vue";
import IcTitleNighttime from "@/components/icons/IcTitleNighttime.vue";
import ListCountryPage from "@/components/today/country/list-country-page.vue";
import ListNearbyLocation from "@/components/today/nearby-location/list-nearby-location.vue";
import RadarPage from "@/components/today/radar/radar-page.vue";
import TempDayNightPage from "@/components/today/temp-day-night/temp-day-night-page.vue";
import TempPage from "@/components/today/temperature/temp-page.vue";
import SkeletonLoader from "@/control-ui/SkeletonLoader/SkeletonLoader.vue";
import { mapGetters, mapMutations } from "vuex";
import { markRaw } from "vue";
import DailyPage from "@/components/common/daily-week/daily-page.vue";
// import PreciptationPage from "@/components/common/preciptation/preciptation-page.vue";
import CloudCoverPage from "@/components/common/cloud-cover/cloud-cover-page.vue";
import WindSpeedPage from "@/components/common/wind/wind-speed-page.vue";
import VisibilityPage from "@/components/common/visibility/visibility.page.vue";
import HumidityPage from "@/components/common/humidity/humidity-page.vue";
import PreciptationPage from "@/components/common/preciptation/preciptation-page.vue";

export default {
  name: "today-weather",
  components: {
    TempPage,
    // TempDayNightPage,
    RadarPage,
    ListNearbyLocation,
    ListCountryPage,
    SunPage,
    MoonPage,
    UvPage,
    AirQualityPage,
    SkeletonLoader,
    DailyPage,
    // PreciptationPage,
    CloudCoverPage,
    PreciptationPage,
    // VisibilityPage,
    // WindSpeedPage,
    // HumidityPage,
  },
  data() {
    return {
      dayTime: this.$t("Day_time"),
      nightTime: this.$t("Night_time"),
      isShowDayNight: false,
      srcDaytime: markRaw(IcTitleDaytime),
      srcNighttime: markRaw(IcTitleNighttime),
      descriptDaytime: this.$t("Lorem_ipsum"),
      descriptNighttime: this.$t("Lorem_ipsum"),
    };
  },

  computed: {
    ...mapGetters("weatherModule", [
      "currentlyGetters",
      "dailyOneGetters",
      "suggestionsTop100Getters",
    ]),

    currentlyData() {
      return this.currentlyGetters;
    },

    suggestionsTop100Data() {
      return this.suggestionsTop100Getters;
    },

    indexState() {
      debugger;
      return this.$store.state.commonModule.indexComponent;
    },
  },

  mounted() {
    const keyLanguage = this.$route.params.language;
    if (keyLanguage) {
      localStorage.setItem("language", keyLanguage); // Lưu lại
    }
    this.setActiveTab(0);
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
.img-logo {
  width: 360px;
  height: auto;
}
</style>
