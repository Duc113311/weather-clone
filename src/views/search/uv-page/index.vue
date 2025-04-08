<template>
  <div class="w-full h-full pl-2 pr-2">
    <!--  -->

    <div class="container mt-5">
      <div class="header-h h-full w-full md:flex gap-20-px">
        <div class="left-hourly lg:w-[85%] h-full w-full">
          <div class="md:flex w-full h-full gap-20-px">
            <!--  -->
            <div class="md:w-[65%] md:h-[280px] h-[300px] w-full">
              <ChartUvIndexPage
                v-if="currentlyData && Object.keys(currentlyData).length > 0"
              ></ChartUvIndexPage>
              <SkeletonLoader v-else class="w-full h-[320px]"> </SkeletonLoader>
            </div>
            <div class="md:w-[35%] w-full md:mt-0 mt-12">
              <UvCurrentPage
                v-if="currentlyData && Object.keys(currentlyData).length > 0"
              ></UvCurrentPage>
              <SkeletonLoader v-else class="w-full h-[320px]"> </SkeletonLoader>
            </div>
            <!--  -->
          </div>
        </div>
        <div class="right-hourly md:w-[15%] w-full md:block hidden">
          <div class="w-full h-full">
            <NoteUvPage
              v-if="currentlyData && Object.keys(currentlyData).length > 0"
            ></NoteUvPage>
            <SkeletonLoader v-else class="w-full h-[320px]"> </SkeletonLoader>
          </div>
        </div>
      </div>
    </div>
    <!--  -->

    <div class="container">
      <div class="lg:flex w-full h-full gap-20-px">
        <!-- Left -->
        <div class="left-hourly h-full lg:w-[68%] w-full">
          <!-- <div class="w-full">
            <ItemTime24h
              :key="indexState + Math.random()"
              v-if="currentlyData && Object.keys(currentlyData).length > 0"
            ></ItemTime24h>
            <div v-else class="w-full h-[860px] mt-4">
              <SkeletonLoader class="w-full h-full"> </SkeletonLoader>
            </div>
          </div> -->

          <!--  -->

          <div class="w-full">
            <div
              class="left-hourly w-full"
              v-if="currentlyData && Object.keys(currentlyData).length > 0"
            >
              <ListNearbyLocation
                :key="indexState + Math.random()"
              ></ListNearbyLocation>
            </div>
            <div v-else class="w-full h-[380px] mt-5">
              <SkeletonLoader class="w-full h-full"> </SkeletonLoader>
            </div>
          </div>

          <!--  -->

          <div class="w-full">
            <div
              class="right-country w-full"
              v-if="currentlyData && Object.keys(currentlyData).length > 0"
            >
              <!--  -->
              <ListCountryPage></ListCountryPage>
            </div>
            <div v-else class="w-full h-[380px] mt-4">
              <SkeletonLoader class="w-full h-full"> </SkeletonLoader>
            </div>
          </div>
        </div>

        <!-- Right -->

        <div class="right-hourly lg:w-[30%] w-full md:block hidden">
          <div class="flex justify-center items-center h-auto mt-4">
            <img
              src="../../../assets/images/png/ic_app_download.png"
              alt=""
              class="img-logo"
            />
          </div>
          <!--  -->
          <!--  -->
          <div
            class="w-full"
            v-if="currentlyData && Object.keys(currentlyData).length > 0"
          >
            <SunPage :key="indexState + Math.random()"></SunPage>
          </div>
          <div v-else class="w-full h-[230px] mt-4">
            <SkeletonLoader class="w-full h-full"> </SkeletonLoader>
          </div>

          <!--  -->

          <div
            class="w-full"
            v-if="currentlyData && Object.keys(currentlyData).length > 0"
          >
            <MoonPage :key="indexState + Math.random()"></MoonPage>
          </div>
          <div v-else class="w-full h-[230px] mt-4">
            <SkeletonLoader class="w-full h-full"> </SkeletonLoader>
          </div>

          <!--  -->
          <div
            class="w-full"
            v-if="currentlyData && Object.keys(currentlyData).length > 0"
          >
            <AirQualityPage :key="indexState + Math.random()"></AirQualityPage>
          </div>
          <div v-else class="w-full h-[230px] mt-4">
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
import ItemTime24h from "@/components/hourly-day/item-card-page.vue/item-time-24h.vue";
import ListCountryPage from "@/components/today/country/list-country-page.vue";
import ListNearbyLocation from "@/components/today/nearby-location/list-nearby-location.vue";
import ChartUvIndexPage from "@/components/uv-page/chart/chart-uv-index-page.vue";
import UvCurrentPage from "@/components/uv-page/form-uv-index/uv-current-page.vue";
import NoteUvPage from "@/components/uv-page/note-uv/note-uv-page.vue";
import SkeletonLoader from "@/control-ui/SkeletonLoader/SkeletonLoader.vue";
import { mapGetters } from "vuex";

export default {
  name: "uv-weather",

  components: {
    SkeletonLoader,
    NoteUvPage,
    MoonPage,
    AirQualityPage,
    SunPage,
    // ItemTime24h,
    ListNearbyLocation,
    ListCountryPage,
    UvCurrentPage,
    ChartUvIndexPage,
  },

  data() {
    return {
      srcDaytime: require("../../../assets/images/svg_v2/ic_sun_daytime.svg"),
    };
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
};
</script>
<style lang=""></style>
