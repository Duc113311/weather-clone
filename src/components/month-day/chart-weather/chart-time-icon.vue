<template>
  <div class="w-[1800px] flex justify-between items-center">
    <div
      class="weather-item w-[70px]"
      v-for="(item, index) in paramHourly"
      :key="index"
    >
      <!-- <span class="txt">{{ renderHourly(item).timestampValue }}</span> -->
      <div class="txt_regular_11">
        {{ renderHourly(item).timestampValue }}
      </div>
      <div class="txt_regular_12">{{ convertToShortDay(item.time) }}</div>

      <div class="flex justify-center items-center">
        <component :is="renderHourly(item).iconValue" width="18"></component>
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
} from "../../../utils/converValue";
export default {
  name: "chart-time-icon",
  data() {
    return {};
  },

  computed: {
    ...mapGetters("weatherModule", ["listDaily30DayGetters"]),
    paramHourly() {
      return this.listDaily30DayGetters;
    },

    locationOffsetValue() {
      return this.$store.state.weatherModule.locationOffset;
    },
  },

  methods: {
    convertToShortDay(value) {
      const timezone =
        this.$store.state.weatherModule?.locationOffset?.timezone;

      const offsetValue =
        this.$store.state.weatherModule?.locationOffset?.offset;
      // Kiểm tra nếu timestamp không hợp lệ
      if (!value || isNaN(value)) {
        console.error("Invalid timestamp:", value);
        return "Invalid Date";
      }

      // Chuyển timestamp từ giây sang milliseconds & áp dụng offset (phút → giây)
      const adjustedTimestamp = (value + offsetValue * 60) * 1000;

      try {
        // Tạo Date object theo múi giờ chỉ định
        const formatter = new Intl.DateTimeFormat("en-US", {
          timeZone: timezone,
          day: "2-digit", // Lấy ngày (DD)
        });

        // Format để lấy ngày chính xác theo timezone
        const formattedDate = formatter.formatToParts(
          new Date(adjustedTimestamp)
        );

        // Lấy giá trị ngày
        let day =
          formattedDate.find(({ type }) => type === "day")?.value || "00";

        return day;
      } catch (error) {
        console.error("Invalid Timezone:", timezone);
        return "Invalid Timezone";
      }
    },

    renderHourly(value) {
      const offsetValue = this.$store.state.weatherModule.locationOffset.offset;
      const timeZoneValue =
        this.$store.state.weatherModule.locationOffset.timeZone;

      const timestampValue = convertDayOfWeek(
        value.time,
        offsetValue,
        timeZoneValue
      );
      const iconValue = getIconHourlyForecastTheme(value.icon);

      return {
        timestampValue: timestampValue,
        iconValue: iconValue,
      };
    },
  },
};
</script>
<style lang="scss">
.p-chart-avg-new {
  padding-left: 20x;
  padding-right: 20px;
}
</style>
