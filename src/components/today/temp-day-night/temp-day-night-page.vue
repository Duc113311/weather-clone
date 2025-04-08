<template>
  <div class="w-full">
    <!--  -->
    <BaseComponent :isShowPad="false">
      <template v-slot:header>
        <div class="flex items-center text-left gap-2">
          <component class="icon-svg" :is="srcDayNight"></component>
          <p class="txt_medium_14">{{ title }}</p>
        </div>
      </template>
      <InforCommon
        :renderTempoDay="hourly24hData"
        :isShowDayNightData="isShowDayNightData"
      ></InforCommon>
    </BaseComponent>
  </div>
</template>
<script>
import BaseComponent from "@/components/common/baseComponent.vue";
import InforCommon from "./infor-common.vue";
import { mapGetters } from "vuex";
import { timeConvertUTC } from "@/utils/converValue";

export default {
  name: "temp-day-night-page",

  components: {
    InforCommon,
    BaseComponent,
  },
  data() {
    return {};
  },

  props: {
    title: {
      type: String,
      default: "",
    },

    isShowDayNight: {
      type: Boolean,
      default: true,
    },

    srcDayNight: {
      type: [String, Object],
      default: "",
    },
  },

  computed: {
    ...mapGetters("weatherModule", [
      "hourly24hGetters",
      "locationOffsetGetters",
      "dailyOneGetters",
    ]),

    hourly24hData() {
      return this.convertDataDayNight(this.hourly24hGetters);
    },

    isShowDayNightData() {
      return this.isShowDayNight;
    },
  },

  methods: {
    convertDataDayNight(value) {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;

      const timeSunrise = this.dailyOneGetters?.sunriseTime;
      const timeSunsetTime = this.dailyOneGetters?.sunsetTime;

      const listHourly24h = value;

      let listDaytimeData = [];
      let listNighttimeData = [];

      for (let index = 0; index < listHourly24h.length; index++) {
        const element = listHourly24h[index];

        const timeItem = timeConvertUTC(
          element.time,
          this.locationOffsetGetters?.offset,
          unitSetting.activeTime_save
        );

        if (timeSunrise <= element.time && element.time <= timeSunsetTime) {
          //
          listDaytimeData.push(element);
        } else {
          listNighttimeData.push(element);
        }
      }

      let totalDay = 0;
      let totalDayProbability = 0;
      let totalDayIntensity = 0;
      for (let i = 0; i < listDaytimeData.length; i++) {
        totalDay += listDaytimeData[i].temperature;
        totalDayProbability += listDaytimeData[i].precipProbability;
        totalDayIntensity += listDaytimeData[i].precipIntensity;
      }
      let totalNight = 0;
      let totalNightProbability = 0;
      let totalNightIntensity = 0;
      for (let i = 0; i < listNighttimeData.length; i++) {
        totalNight += listNighttimeData[i].temperature;
        totalNightProbability += listNighttimeData[i].precipProbability;
        totalNightIntensity += listNighttimeData[i].precipIntensity;
      }

      const avgTempDaytime = totalDay / listDaytimeData.length;
      const avgTempNighttime = totalNight / listNighttimeData.length;

      const avgProbabilityDaytime =
        totalDayProbability / listDaytimeData.length;
      const avgIntensityDaytime = totalDayIntensity / listDaytimeData.length;

      const avgProbabilityNighttime =
        totalNightProbability / listNighttimeData.length;
      const avgIntensityNighttime =
        totalNightIntensity / listNighttimeData.length;

      const maxTemp = Math.max(
        ...listDaytimeData.map((obj) => obj.temperature)
      );

      const maxObject = listDaytimeData.find(
        (obj) => obj.temperature === maxTemp
      );

      const minTemp = Math.max(
        ...listNighttimeData.map((obj) => obj.temperature)
      );
      const minObject = listNighttimeData.find(
        (obj) => obj.temperature === minTemp
      );

      const maxUvIndex = Math.max(...listDaytimeData.map((obj) => obj.uvIndex));

      const objectDaytime = {
        tempAvg: avgTempDaytime ? avgTempDaytime : avgTempNighttime,
        tempMaxMin: maxTemp ? maxTemp : minTemp,
        icon: maxObject?.icon ? maxObject?.icon : minObject.icon,
        summary: maxObject?.summary ? maxObject?.summary : minObject?.summary,
        apparentTemperature: maxObject?.apparentTemperature
          ? maxObject?.apparentTemperature
          : minObject?.apparentTemperature,
        UvMax: maxUvIndex === -Infinity ? 0 : maxUvIndex,
        ChanceOfRainAvg: avgProbabilityDaytime
          ? avgProbabilityDaytime
          : avgProbabilityNighttime,
        SumRainfall: avgIntensityDaytime
          ? avgIntensityDaytime
          : avgIntensityNighttime,
      };

      const objectNighttime = {
        tempAvg: avgTempNighttime,
        tempMaxMin: minTemp,
        icon: minObject.icon,
        summary: minObject.summary,
        apparentTemperature: minObject.apparentTemperature,
        UvMax: 0,
        ChanceOfRainAvg: avgProbabilityNighttime,
        SumRainfall: avgIntensityNighttime,
      };

      if (this.isShowDayNightData) {
        return objectDaytime;
      }

      return objectNighttime;
    },
    convertTempDayNight(value) {
      const dataList = value.slice(0, 24);
      const dayData = [];
      const nightData = [];

      const morningData = [];
      const eveningData = [];

      for (let index = 0; index < this.dailyDataGetters.length; index++) {
        const element = this.dailyDataGetters[index];
        const timeConvertUTCValue = timeConvertUTC(
          element.time,
          this.locationOffsetGetters?.offset
        );
      }

      //   Ngày đêm
      dataList.forEach((data) => {
        const timeConvertUTCValue = timeConvertUTC(
          data.time,
          this.locationOffsetGetters?.offset
        );

        const date = new Date(data.time * 1000); // Chuyển UNIX timestamp sang đối tượng Date
        const hours = date.getUTCHours(); // Lấy giờ UTC

        if (hours >= 6 && hours < 18) {
          dayData.push(data); // Nếu giờ trong khoảng từ 6h sáng đến 6h tối, thêm vào mảng ban ngày
        } else {
          nightData.push(data); // Ngược lại thêm vào mảng ban đêm
        }
      });

      //   Sáng tối
      dataList.forEach((data) => {
        const date = new Date(data.time * 1000); // Chuyển UNIX timestamp sang đối tượng Date
        const hours = date.getUTCHours(); // Lấy giờ UTC

        if (hours >= 6 && hours < 12) {
          morningData.push(data); // Nếu giờ trong khoảng từ 6h sáng đến 6h tối, thêm vào mảng ban ngày
        }

        if (hours >= 18 && hours < 22) {
          eveningData.push(data); // Ngược lại thêm vào mảng ban đêm
        }
      });

      let objectTemp = {
        maxTempDataDay: dayData[0],
        minTempDataDay: dayData[0],
        minTempDataNight: nightData[0],
        maxTempDataNight: nightData[0],
      };
      dayData.forEach((data) => {
        if (data.temperature > objectTemp.maxTempDataDay.temperature) {
          objectTemp.maxTempDataDay = data; // Cập nhật giá trị max nếu tìm thấy temperature lớn hơn
        }
        if (data.temperature < objectTemp.minTempDataDay.temperature) {
          objectTemp.minTempDataDay = data; // Cập nhật giá trị min nếu tìm thấy temperature nhỏ hơn
        }
      });

      nightData.forEach((data) => {
        if (data.temperature > objectTemp.maxTempDataNight.temperature) {
          objectTemp.maxTempDataNight = data; // Cập nhật giá trị max nếu tìm thấy temperature lớn hơn
        }
        if (data.temperature < objectTemp.minTempDataNight.temperature) {
          objectTemp.minTempDataNight = data; // Cập nhật giá trị min nếu tìm thấy temperature nhỏ hơn
        }
      });

      //

      return objectTemp;
    },
  },
};
</script>
<style lang="scss"></style>
