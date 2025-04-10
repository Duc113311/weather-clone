<template>
  <div class="w-full">
    <BaseComponent :isShowPad="false">
      <template v-slot:header>
        <div class="flex items-center text-left gap-2">
          <IcPrecipitation class="icon-svg"></IcPrecipitation>
          <p class="txt_medium_14">{{ $t("Precipitation") }}</p>
        </div>
      </template>
      <div
        v-if="currentlyData && Object.keys(currentlyData).length > 0"
        class="w-full h-[212px] pad-big"
      >
        <div class="w-full h-full flex justify-between gap-2">
          <div class="text-left h-[100px]">
            <p class="txt_bold_24">
              {{ convertPrecipitation(currentlyData?.precipIntensity) }}
            </p>

            <p class="txt_regular_14 text-left">{{ $t("In_next_24h") }}</p>

            <div class="flex justify-start gap-1 mt-4">
              <IcChanceOfRainSnow
                v-if="currentlyData?.summary === 'snow'"
              ></IcChanceOfRainSnow>
              <IcChanceOfRain v-else></IcChanceOfRain>
              <div
                class="h-flex flex items-center justify-center txt_regular_14"
              >
                <p v-if="currentlyData?.summary === 'snow'">
                  {{ $t("Chance_of_snow") }}
                </p>
                <p v-else>{{ $t("Chance_of_rain") }}</p>
              </div>
              <div class="text-c text-center items-center txt_medium_17">
                <p>
                  ({{ Math.round(currentlyData?.precipProbability * 100) }}%)
                </p>
              </div>
            </div>
          </div>
          <div class="h-full flex justify-center items-center">
            <component
              :is="renderHourlyIcon(currentlyData.precipIntensity)"
            ></component>
            <!-- <img
              src="../../../assets/images/svg_v2/ic_precip/20%.svg"
              alt=""
              srcset=""
            /> -->
          </div>
        </div>
      </div>
      <div v-else class="w-full h-[212px]">
        <SkeletonLoader class="w-full h-full"> </SkeletonLoader>
      </div>
    </BaseComponent>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import BaseComponent from "../baseComponent.vue";
import IcCloudyHome from "@/components/icons/IcCloudyHome.vue";
import IcPrecipitationHome from "@/components/icons/IcPrecipitationHome.vue";
import IcPrecipitation from "@/components/icons/IcPrecipitation.vue";
import {
  codeToFind,
  convertMillimet,
  convertMillimetToInch,
  getIconChartPrecipIntensityHome,
} from "@/utils/converValue";
import IcChanceOfRainSnow from "@/components/icons/IcChanceOfRainSnow.vue";
import IcChanceOfRain from "@/components/icons/IcChanceOfRain.vue";
import SkeletonLoader from "@/control-ui/SkeletonLoader/SkeletonLoader.vue";
// import IcPrecipitation from "@/components/icons/IcPrecipitation.vue";

export default {
  name: "preciptation-page",

  components: {
    // IcCloudyHome,
    BaseComponent,
    IcPrecipitation,
    IcPrecipitationHome,
    IcChanceOfRain,
    IcChanceOfRainSnow,
    SkeletonLoader,
  },

  computed: {
    ...mapGetters("weatherModule", ["currentlyGetters"]),
    listHourly() {
      return this.$store.state.weatherModule.hourly24h;
    },
    currentlyData() {
      return this.currentlyGetters;
    },
  },

  methods: {
    renderHourlyIcon(value) {
      const iconValue = getIconChartPrecipIntensityHome(value);

      return iconValue;
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
  },
};
</script>
<style lang=""></style>
