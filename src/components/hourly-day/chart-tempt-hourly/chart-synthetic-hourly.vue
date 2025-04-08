<template>
  <div class="w-full h-full">
    <!-- -->
    <div class="w-full relative h-full">
      <div class="w-full h-full relative">
        <vue-horizontal
          v-if="paramHourly.length > 0"
          :key="paramHourly.length"
          :displacement="1"
          class="w-full h-[calc(100%-40px)] relative horizontals pt-4"
        >
          <div class="w-full h-full relative">
            <ChartDays class="h-[40px]"></ChartDays>
            <ChartTitleTemp></ChartTitleTemp>
            <ChartTitleChanceOfRain></ChartTitleChanceOfRain>

            <div class="flex w-full h-full min-w-[1550px]">
              <div
                v-for="(day, index) in paramHourly"
                :key="index"
                class="flex-1 bor-r-chart opacity-30"
              ></div>
            </div>

            <ChartTemperatureBar
              class="h-[130px] absolute top-16"
            ></ChartTemperatureBar>

            <ChartPrecipitationBar
              class="h-[150px] absolute -bottom-2 z-10"
            ></ChartPrecipitationBar>

            <ChartTitleRain
              class="h-[112px] absolute rain-ab z-20"
            ></ChartTitleRain>

            <!-- <ChartChanceOfRainBar
              class="h-[150px] absolute bottom-6 z-20"
            ></ChartChanceOfRainBar> -->
          </div>
        </vue-horizontal>

        <div
          class="w-full h-[40px] md:flex grid grid-cols-2 justify-between pad-t-b-10 pad-r-l-10"
        >
          <div class="flex items-center text-left gap-2">
            <div class="bg-temp-c rounded-full w-[12px] h-[12px]"></div>
            <span class="txt_regular_12">{{ $t("Temperature") }}</span>
          </div>
          <div class="flex items-center text-left gap-2">
            <div class="bg-rain-c rounded-full w-[12px] h-[12px]"></div>
            <span class="txt_regular_12">{{ $t("Chance_of_rain") }}</span>
          </div>
          <div class="flex items-center text-left gap-2">
            <div class="bg-snow-c rounded-full w-[12px] h-[12px]"></div>
            <span class="txt_regular_12">{{ $t("Chance_of_snow") }}</span>
          </div>
          <div class="flex items-center text-left gap-2">
            <div class="bg-rainfall-c rounded-full w-[12px] h-[12px]"></div>
            <span class="txt_regular_12">{{ $t("Precipitation") }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueHorizontal from "vue-horizontal";

import ChartDays from "@/components/common/chart/chart-days.vue";
import ChartPrecipitationBar from "@/components/common/chart/chart-precipitation-bar.vue";
import ChartTemperatureBar from "@/components/common/chart/chart-temperature-bar.vue";
import ChartTitleChanceOfRain from "@/components/common/chart/chart-title-chance-of-rain.vue";
import ChartTitleRain from "@/components/common/chart/chart-title-rain.vue";
import ChartTitleTemp from "@/components/common/chart/chart-title-temp.vue";

export default {
  name: "chart-synthetic-hourly",

  components: {
    VueHorizontal,
    ChartTemperatureBar,
    ChartDays,
    ChartPrecipitationBar,
    ChartTitleTemp,
    ChartTitleRain,
    ChartTitleChanceOfRain,
  },

  data() {
    return {};
  },

  computed: {
    paramHourly() {
      return this.$store.state.weatherModule.hourly24h;
    },
  },

  mounted() {},

  methods: {
    onSlide(index) {},
  },
};
</script>

<style lang="css">
.bg-temp-c {
  background-color: #ffa60d;
}

.bg-rain-c {
  background-color: var(--bg-radio-chance-of-rain);
}
.bg-snow-c {
  background-color: var(--bg-radio-chance-of-snow);
}

.bg-rainfall-c {
  background-color: #327cee;
}

.top-chance-rain-hourly {
  top: 10px;
}
.top-chart-pre-hourly {
  top: 170px;
}

.rain-ab {
  top: 75px;
}
</style>
