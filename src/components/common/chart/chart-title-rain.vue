<template>
  <div class="w-[1550px] flex justify-between items-center">
    <div
      class="weather-item w-full"
      v-for="(item, index) in listDataPrecipIntensity"
      :key="index"
    >
      <!-- <span class="txt">{{ renderHourly(item).timestampValue }}</span> -->
      <div v-if="Math.round(item.precipProbability * 100) > 50">
        <div
          v-if="item.precipType === 'Snow'"
          class="h-[115px] image-gradient-snow"
        ></div>
        <div
          v-if="item.precipType === 'Rain'"
          class="h-[115px] image-gradient-rain"
        ></div>
      </div>
      <div v-else>
        <div class="h-[120px]"></div>
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
  codeToFind,
} from "../../../utils/converValue";
export default {
  name: "chart-days",
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

    listDataPrecipIntensity() {
      return this.paramHourly.map((element) => element);

      // return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    },
    unitPrecipitation() {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      return codeToFind(unitSetting.activePrecipitation_save);
    },
  },

  methods: {
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
.image-gradient-rain {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 204, 220, 0.5),
      rgba(0, 160, 168, 0.2),
      rgba(0, 160, 168, 0.02)
    ),
    url("@/assets/images/Raining_Sticker.gif");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.5;
}

.image-gradient-snow {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 204, 220, 0.5),
      rgba(0, 160, 168, 0.2),
      rgba(0, 160, 168, 0.02)
    ),
    url("@/assets/images/Snowing_Sticker.gif");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.5;
}
</style>
