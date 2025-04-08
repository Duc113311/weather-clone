<template>
  <div class="w-full h-full pl-2 pr-2">
    <!--  -->
    <div class="container mt-5">
      <div class="header-h h-full w-full md:flex gap-20-px">
        <div class="left-hourly lg:w-[85%] w-full">
          <div class="md:flex justify-between w-full gap-20-px">
            <!--  -->
            <div class="w-full">
              <GaugeAir
                v-if="currentlyData && Object.keys(currentlyData).length > 0"
                class="h-[280px]"
              ></GaugeAir>
              <SkeletonLoader v-else class="w-full h-[320px]"> </SkeletonLoader>
            </div>
            <div class="w-full mt-2 mb-2">
              <RecommendedInfor
                v-if="currentlyData && Object.keys(currentlyData).length > 0"
              ></RecommendedInfor>
              <SkeletonLoader v-else class="w-full h-[320px]"> </SkeletonLoader>
            </div>
            <!--  -->
          </div>
        </div>
        <div class="right-hourly md:w-[15%] w-full">
          <div class="w-full h-full">
            <NoteAir
              v-if="currentlyData && Object.keys(currentlyData).length > 0"
            ></NoteAir>
            <SkeletonLoader v-else class="w-full h-[320px]"> </SkeletonLoader>
          </div>
        </div>
      </div>
    </div>

    <!--  -->
    <div class="container mt-5">
      <div class="header-h h-full w-full flex gap-20-px">
        <div class="left-hourly w-full">
          <ListAirPage
            v-if="currentlyData && Object.keys(currentlyData).length > 0"
          ></ListAirPage>
          <SkeletonLoader v-else class="w-full h-[320px]"> </SkeletonLoader>
        </div>
      </div>
    </div>

    <div class="container mt-5">
      <div class="lg:flex w-full h-full gap-20-px">
        <div class="left-hourly h-full lg:w-[68%] w-full">
          <div class="w-full h-full">
            <div class="lg:h-[350px] h-auto w-full">
              <div class="w-full h-full md:flex justify-between gap-4">
                <div class="w-full h-full">
                  <ListStationPage
                    class="lg:h-[306px]"
                    v-if="
                      currentlyData && Object.keys(currentlyData).length > 0
                    "
                  ></ListStationPage>
                  <SkeletonLoader v-else class="w-full h-full">
                  </SkeletonLoader>
                </div>
                <div class="w-full h-[300px] mb-11">
                  <GoogleMapPage
                    class="md:h-[306px]"
                    v-if="
                      currentlyData && Object.keys(currentlyData).length > 0
                    "
                  ></GoogleMapPage>

                  <SkeletonLoader v-else class="w-full h-full">
                  </SkeletonLoader>
                </div>
              </div>
            </div>

            <div class="h-full w-full">
              <div class="w-full h-full">
                <ListNearbyLocation
                  v-if="currentlyData && Object.keys(currentlyData).length > 0"
                ></ListNearbyLocation>
                <SkeletonLoader v-else class="w-full h-full"> </SkeletonLoader>
              </div>
            </div>
            <div class="h-full w-full">
              <div class="w-full h-full">
                <ListCountryPage
                  v-if="currentlyData && Object.keys(currentlyData).length > 0"
                ></ListCountryPage>
                <SkeletonLoader v-else class="w-full h-full"> </SkeletonLoader>
              </div>
            </div>
          </div>
        </div>

        <!--  -->
        <div class="right-hourly lg:w-[30%] w-full md:block hidden">
          <div class="flex justify-center items-center h-auto">
            <img
              src="../../../assets/images/png/ic_app_download.png"
              alt=""
              class="img-logo"
            />
          </div>

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
            <UvPage :key="indexState + Math.random()"></UvPage>
          </div>
          <div v-else class="w-full h-[230px] mt-4">
            <SkeletonLoader class="w-full h-full"> </SkeletonLoader>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>
<script>
import ListStationPage from "@/components/air-quality/air-station/list-station-page.vue";
import GaugeAir from "@/components/air-quality/gauge-air.vue";
import GoogleMapPage from "@/components/air-quality/google-map/google-map-page.vue";
import ListAirPage from "@/components/air-quality/list-air-infor/list-air-page.vue";
import NoteAir from "@/components/air-quality/note/note-air.vue";
import RecommendedInfor from "@/components/air-quality/recommended-air/recommended-infor.vue";
import MoonPage from "@/components/common/moon-phase/moon-page.vue";
import SunPage from "@/components/common/sun/sun-page.vue";
import TempFullCard from "@/components/common/temp-full/temp-full-card.vue";
import UvPage from "@/components/common/uv-index/uv-page.vue";
import ListCountryPage from "@/components/today/country/list-country-page.vue";
import ListNearbyLocation from "@/components/today/nearby-location/list-nearby-location.vue";
import SkeletonLoader from "@/control-ui/SkeletonLoader/SkeletonLoader.vue";
import { mapGetters } from "vuex";

export default {
  name: "air-quality-weather",

  components: {
    SkeletonLoader,
    // TempFullCard,
    RecommendedInfor,
    NoteAir,
    GaugeAir,
    ListAirPage,
    ListStationPage,
    GoogleMapPage,
    SunPage,
    MoonPage,
    UvPage,
    ListNearbyLocation,
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
      return this.$store.state.commonModule.indexComponent;
    },
  },

  methods: {},
};
</script>
<style lang="scss"></style>
