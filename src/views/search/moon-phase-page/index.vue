<template>
  <div class="w-full h-full pl-2 pr-2">
    <!--  -->
    <div class="container mt-5">
      <div class="header-h h-full w-full flex gap-20-px">
        <div class="left-hourly h-full w-full">
          <ListCarouselMoon
            v-if="currentlyData && Object.keys(currentlyData).length > 0"
          ></ListCarouselMoon>
          <SkeletonLoader v-else class="w-full h-[320px]"> </SkeletonLoader>
        </div>
      </div>
    </div>

    <!--  -->

    <div class="container mt-5">
      <div class="lg:flex w-full h-full gap-20-px">
        <!--  -->
        <div class="left-hourly h-full lg:w-[68%] w-full">
          <div class="w-full">
            <DescribeMoonPage
              :key="indexState + Math.random()"
              v-if="currentlyData && Object.keys(currentlyData).length > 0"
            ></DescribeMoonPage>
            <SkeletonLoader v-else class="w-full h-full"> </SkeletonLoader>
          </div>

          <div class="w-full">
            <div
              class="left-hourly w-full"
              v-if="currentlyData && Object.keys(currentlyData).length > 0"
            >
              <ListItemMoonPage
                :key="indexState + Math.random()"
              ></ListItemMoonPage>
            </div>
            <div v-else class="w-full h-[380px] mt-5">
              <SkeletonLoader class="w-full h-full"> </SkeletonLoader>
            </div>
          </div>

          <div class="w-full">
            <!-- <ItemTime24h
              :key="indexState + Math.random()"
              v-if="currentlyData && Object.keys(currentlyData).length > 0"
            ></ItemTime24h>
            <div v-else class="w-full h-[860px] mt-4">
              <SkeletonLoader class="w-full h-full"> </SkeletonLoader>
            </div> -->
          </div>

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
            <UvPage :key="indexState + Math.random()"></UvPage>
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
import SunPage from "@/components/common/sun/sun-page.vue";
import UvPage from "@/components/common/uv-index/uv-page.vue";
import ItemTime24h from "@/components/hourly-day/item-card-page.vue/item-time-24h.vue";
import ListCarouselMoon from "@/components/moon-phase/carousel/list-carousel-moon.vue";
import DescribeMoonPage from "@/components/moon-phase/describe/describe-moon-page.vue";
import FormMoonPage from "@/components/moon-phase/form-infor/form-moon-page.vue";
import ListItemMoonPage from "@/components/moon-phase/list-moon-phase/list-item-moon-page.vue";
import ListNearbyLocation from "@/components/today/nearby-location/list-nearby-location.vue";
import SkeletonLoader from "@/control-ui/SkeletonLoader/SkeletonLoader.vue";
import { mapGetters } from "vuex";

export default {
  name: "moon-phase-weather",

  components: {
    SkeletonLoader,
    AirQualityPage,
    SunPage,
    UvPage,
    // ItemTime24h,
    ListNearbyLocation,
    DescribeMoonPage,
    ListItemMoonPage,
    // FormMoonPage,
    ListCarouselMoon,
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

  data() {
    return {};
  },

  methods: {},
};
</script>
<style lang=""></style>
