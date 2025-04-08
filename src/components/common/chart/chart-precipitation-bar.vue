<template>
  <div class="w-[1550px] flex justify-between items-center pl-pre">
    <div
      class="weather-item w-[50px]"
      v-for="(item, index) in paramHourly"
      :key="index"
    >
      <!-- <span class="txt">{{ renderHourly(item).timestampValue }}</span> -->
      <div class="flex justify-center items-center">
        <component :is="renderHourlyIcon(item.precipIntensity)"></component>
      </div>

      <div class="">
        <p class="txt_regular_12">
          {{ item.precipIntensity === 0 ? "0.00" : item.precipIntensity }}
          {{ unitPrecipitation }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import IcChanceOfRain from "@/components/icons/IcChanceOfRain.vue";
import IcChanceOfRainSnow from "@/components/icons/IcChanceOfRainSnow.vue";
import {
  codeToFind,
  convertTimestamp12hSun,
  convertTimestamp24hSun,
  convertTimestampToHoursMinutes,
  convertTimestampToHoursMinutes12,
  getIconChartPrecipIntensity,
  getIconHourlyForecastTheme,
} from "@/utils/converValue";
import { mapGetters } from "vuex";

export default {
  name: "chart-precipitation",

  components: {
    IcChanceOfRain,
    IcChanceOfRainSnow,
  },

  data() {
    return {
      width: 14,
      height: 14,
    };
  },

  computed: {
    ...mapGetters("weatherModule", ["hourly24hGetters"]),
    paramHourly() {
      return this.$store.state.weatherModule.hourly24h;
    },

    convertTimeMonth() {
      return this.paramHourly.map((item) => {
        const date = item.time;
        return this.convertTime(date);
      });
    },

    unitPrecipitation() {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      return codeToFind(unitSetting.activePrecipitation_save);
    },
  },

  methods: {
    renderHourlyIcon(value) {
      const iconValue = getIconChartPrecipIntensity(value);

      return iconValue;
    },

    convertTime(val) {
      const offsetValue = this.$store.state.weatherModule.locationOffset.offset;
      const timezoneValue =
        this.$store.state.weatherModule.locationOffset.timezone;
      const unitSetting = this.$store.state.commonModule.objectSettingSave;

      if (unitSetting.activeTime_save === "12h") {
        return convertTimestamp12hSun(val, 1, offsetValue, timezoneValue);
      } else {
        return convertTimestamp24hSun(val, 1, offsetValue, timezoneValue);
      }
    },

    renderHourlyTime(value) {
      const offsetValue = this.$store.state.weatherModule.locationOffset.offset;
      const timezoneValue =
        this.$store.state.weatherModule.locationOffset.timezone;

      //   const iconValue = getIconHourlyForecastTheme(value.icon);
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      const timestampValue =
        unitSetting.activeTime_save === "12h"
          ? convertTimestampToHoursMinutes12(
              value.time,
              0,
              offsetValue,
              timezoneValue
            )
          : convertTimestampToHoursMinutes(
              value.time,
              0,
              offsetValue,
              timezoneValue
            );
      return timestampValue;
    },
  },
};
</script>
<style lang="scss">
.pl-pre {
  padding-left: 5px;
  padding-right: 6px;
}
</style>
