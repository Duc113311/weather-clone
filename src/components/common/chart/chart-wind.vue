<template>
  <div class="w-[1550px] flex justify-between items-center">
    <div
      class="weather-item w-[50px]"
      v-for="(item, index) in paramHourly"
      :key="index"
    >
      <!-- <span class="txt">{{ renderHourly(item).timestampValue }}</span> -->

      <div class="txt_regular_11">
        {{ renderHourly(item) }}
      </div>
      <div class="txt_regular_17 text-center">
        {{ convertDirectionEmoji(item?.windBearing) }}
      </div>
    </div>
  </div>
</template>
<script>
import {
  convertTimestampNow12,
  convertTimestampToHoursMinutes,
  convertTimestampToHoursMinutes12,
  getIconHourlyForecastTheme,
  getWindDirectionEmojiFromDegrees,
} from "@/utils/converValue";
import { mapGetters } from "vuex";

export default {
  name: "chart-wind",

  data() {
    return {};
  },

  computed: {
    ...mapGetters("weatherModule", ["hourly24hGetters"]),
    paramHourly() {
      return this.hourly24hGetters;
    },
  },

  methods: {
    convertDirectionEmoji(windBearing) {
      return getWindDirectionEmojiFromDegrees(windBearing);
    },

    renderHourly(value) {
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
.p-chart {
  padding-left: 10px;
  padding-right: 10px;
}
</style>
