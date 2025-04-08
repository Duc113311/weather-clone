<template>
  <div class="w-[1800px] flex justify-between items-center">
    <div
      class="weather-item w-full"
      v-for="(item, index) in listTemperatureData"
      :key="index"
    >
      <!-- <span class="txt">{{ renderHourly(item).timestampValue }}</span> -->
      <div class="flex items-center justify-center gap-1">
        <IcChanceOfRain
          v-if="item.summary !== 'snow'"
          class="icon-svg-small"
        ></IcChanceOfRain>
        <IcChanceOfRainSnow v-else class="icon-svg-small"></IcChanceOfRainSnow>
        <div class="txt_regular_12">
          {{ Math.round(item.precipProbability * 100) }}%
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import {
  getIconHourlyForecastTheme,
  convertDayOfWeek,
  convertTimestampToHoursMinutes12,
  convertTimestampToHoursMinutes,
  convertTimestampNow12,
  convertCtoF,
  convertFtoC,
} from "../../../utils/converValue";
import IcChanceOfRain from "@/components/icons/IcChanceOfRain.vue";
import IcChanceOfRainSnow from "@/components/icons/IcChanceOfRainSnow.vue";
export default {
  name: "chart-title-chance-of-rain-month",

  components: {
    IcChanceOfRainSnow,
    IcChanceOfRain,
  },
  data() {
    return {};
  },

  computed: {
    ...mapGetters("weatherModule", ["hourly24hGetters"]),
    paramHourly() {
      return this.$store.state.weatherModule.listDaily30Day;
    },

    objectSetting() {
      return this.$store.state.commonModule.objectSettingSave;
    },

    listTemperatureData() {
      const unitSetting = this.objectSetting;

      return this.paramHourly.map((element) => element);
      // return [0, 1, 5, 10, 0, 100, 4, 100, 26, 49, 0];
    },
  },

  methods: {},
};
</script>
<style lang="scss"></style>
