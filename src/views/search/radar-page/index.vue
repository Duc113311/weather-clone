<template>
  <div class="w-full h-full pl-2 pr-2">
    <!-- -->
    <div class="container mt-5">
      <div class="header-m h-full lg:flex w-full gap-20-px">
        <div class="left-hourly lg:w-[70%] w-full">
          <!--  -->
          <RadarMapPage
            v-if="currentlyData && Object.keys(currentlyData).length > 0"
            :overlayValue="overlayValue"
          ></RadarMapPage>
          <div v-else class="w-full h-[510px]">
            <SkeletonLoader class="w-full h-full"> </SkeletonLoader>
          </div>
          <!--  -->
        </div>

        <div class="right-hourly lg:w-[30%] w-full lg:flex hidden">
          <!--  -->
          <TempFullCard
            :key="indexState + Math.random()"
            v-if="currentlyData && Object.keys(currentlyData).length > 0"
            :title="titleParam"
          ></TempFullCard>
          <div v-else class="w-full h-[510px]">
            <SkeletonLoader class="w-full h-full"> </SkeletonLoader>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="header-r h-full lg:flex w-full gap-20-px mt-5">
        <div class="left-hourly lg:w-[70%] w-full">
          <!--  -->
          <OptionMapRadarPage
            @onStateValueMap="onChangeValueMap"
          ></OptionMapRadarPage>
        </div>

        <div class="right-hourly w-[30%] lg:flex hidden">
          <!--  -->
          <!-- <TempFullCard :title="title"></TempFullCard> -->
          <div>
            <img src="../../../assets/images/png/ic_app_download.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TempFullCard from "@/components/common/temp-full/temp-full-card.vue";
import OptionMapRadarPage from "@/components/radar/option-radar/option-map-radar-page.vue";
import RadarMapPage from "@/components/radar/weather-radar/radar-map-page.vue";
import SkeletonLoader from "@/control-ui/SkeletonLoader/SkeletonLoader.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "radar-weather",

  components: {
    TempFullCard,
    RadarMapPage,
    OptionMapRadarPage,
    SkeletonLoader,
  },
  data() {
    return {
      overlayValue: "temp",
    };
  },

  mounted() {
    this.setActiveTab(3);
  },

  computed: {
    ...mapGetters("weatherModule", ["currentlyGetters"]),

    currentlyData() {
      return this.currentlyGetters;
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

    titleParam() {
      return this.$t(`Weather_{city}`, { city: this.wardParam?.city });
    },
  },

  methods: {
    ...mapMutations("commonModule", ["setActiveTab"]),
    onChangeValueMap(value) {
      this.overlayValue = value;
    },
  },

  // beforeRouteLeave(to, from, next) {
  //   window.location.replace(to.fullPath);
  //   next(); // Cho phép chuyển route
  // },
};
</script>

<style lang="scss"></style>
