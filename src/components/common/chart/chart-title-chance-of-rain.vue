<template>
  <div class="w-[1550px] flex justify-between items-center">
    <div
      class="weather-item w-full"
      v-for="(item, index) in listChanceOfRainData"
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
import IcTempt from "@/components/icons/IcTempt.vue";
import IcChanceOfRain from "@/components/icons/IcChanceOfRain.vue";
import IcChanceOfRainSnow from "@/components/icons/IcChanceOfRainSnow.vue";
export default {
  name: "chart-title-chance-of-rain",
  components: {
    IcChanceOfRain,
    IcChanceOfRainSnow,
  },
  data() {
    return {};
  },

  computed: {
    ...mapGetters("weatherModule", ["hourly24hGetters"]),
    paramHourly() {
      return this.$store.state.weatherModule.hourly24h;
    },

    objectSetting() {
      return this.$store.state.commonModule.objectSettingSave;
    },

    listChanceOfRainData() {
      const unitSetting = this.objectSetting;

      return this.paramHourly.map((element) => element);
      // return [0, 1, 5, 10, 0, 100, 4, 100, 26, 49, 0];
    },
  },

  methods: {},
};
</script>
<style lang="scss"></style>
