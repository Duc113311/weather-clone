<template>
  <div class="w-[1550px] flex justify-between items-center">
    <div
      class="weather-item w-full"
      v-for="(item, index) in listTemperatureData"
      :key="index"
    >
      <!-- <span class="txt">{{ renderHourly(item).timestampValue }}</span> -->
      <div class="flex items-center justify-center">
        <IcTempt class="icon-svg-small"></IcTempt>
        <div class="txt_regular_12">{{ item }}°</div>
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
export default {
  name: "chart-title-temp",
  components: {
    IcTempt,
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

    listTemperatureData() {
      const unitSetting = this.objectSetting;

      return this.paramHourly.map((element) =>
        unitSetting.activeTemperature_save === "f"
          ? convertCtoF(element.temperature)
          : convertFtoC(element.temperature)
      );
      // return [0, 1, 5, 10, 0, 100, 4, 100, 26, 49, 0];
    },
  },

  methods: {},
};
</script>
<style lang="scss"></style>
