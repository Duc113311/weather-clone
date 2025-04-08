<template>
  <div class="w-[1800px] flex justify-between items-center">
    <div
      class="weather-item w-full"
      v-for="(item, index) in listTemperatureData"
      :key="index"
    >
      <!-- <span class="txt">{{ renderHourly(item).timestampValue }}</span> -->
      <div class="txt_regular_12">
        {{ item.tempMax }}° / {{ item.tempMin }}°
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
export default {
  name: "chart-title-temp-max-min",
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

      return this.paramHourly.map((element) =>
        unitSetting.activeTemperature_save === "f"
          ? {
              tempMax: convertCtoF(element.temperatureMax),
              tempMin: convertCtoF(element.temperatureMin),
            }
          : {
              tempMax: convertFtoC(element.temperatureMax),
              tempMin: convertFtoC(element.temperatureMin),
            }
      );
      // return [0, 1, 5, 10, 0, 100, 4, 100, 26, 49, 0];
    },
  },

  methods: {},
};
</script>
<style lang="scss"></style>
