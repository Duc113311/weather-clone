<template>
  <div class="w-full h-full">
    <!--  -->
    <div class="w-full relative h-full">
      <div class="w-full h-full relative">
        <vue-horizontal
          v-if="paramHourly.length > 0"
          :key="paramHourly.length"
          :displacement="1"
          class="w-full h-[calc(100%-40px)] relative horizontal"
        >
          <div class="w-full h-full relative">
            <ChartDays class="h-[40px]"></ChartDays>
            <ChartTitleTemp class="mt-0.5"></ChartTitleTemp>
            <ChartTitleChanceOfRain class="mt-0.5"></ChartTitleChanceOfRain>
            <div class="flex w-full h-full min-w-[1550px]">
              <div
                v-for="(day, index) in paramHourly"
                :key="index"
                class="flex-1 bor-r-chart opacity-30"
              ></div>
            </div>
            <ChartTemperatureBar
              class="h-[120px] absolute top-16 z-40"
            ></ChartTemperatureBar>

            <ChartPrecipitationBar
              class="h-[150px] absolute -bottom-2 z-10"
            ></ChartPrecipitationBar>

            <ChartTitleRain
              class="h-[112px] absolute top-rain-gif z-20"
            ></ChartTitleRain>
            <!-- <ChartChanceOfRainBar
              class="h-[150px] absolute bottom-6 z-20"
            ></ChartChanceOfRainBar> -->

            <!-- <ChartDomainTemps
                class="z-20 absolute"
                :heightValue="heightValue"
              ></ChartDomainTemps> -->
            <!--  -->
            <!-- <ChartDomainRain class="absolute inset-0"></ChartDomainRain> -->

            <!-- <ChartApexRain></ChartApexRain> -->
            <!-- <ChartColumnRainfall></ChartColumnRainfall> -->
          </div>
        </vue-horizontal>

        <!--  -->

        <!-- <ChartBarRain></ChartBarRain> -->

        <!-- <ChartColumnRainfall></ChartColumnRainfall> -->

        <div
          class="w-full h-[40px] md:flex grid grid-cols-2 justify-between pad-t-b-10 pad-r-l-10"
        >
          <div class="flex items-center text-left gap-2">
            <div class="bg-temp-c rounded-full w-[10px] h-[10px]"></div>
            <span class="txt_regular_12">{{ $t("Temperature") }}</span>
          </div>
          <div class="flex items-center text-left gap-2">
            <div class="bg-rain-c rounded-full w-[10px] h-[10px]"></div>
            <span class="txt_regular_12">{{ $t("Chance_of_rain") }}</span>
          </div>
          <div class="flex items-center text-left gap-2">
            <div class="bg-snow-c rounded-full w-[10px] h-[10px]"></div>
            <span class="txt_regular_12">{{ $t("Chance_of_snow") }}</span>
          </div>
          <div class="flex items-center text-left gap-2">
            <div class="bg-rainfall-c rounded-full w-[10px] h-[10px]"></div>
            <span class="txt_regular_12">{{ $t("Precipitation") }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ChartApexRain from "@/components/common/chart/chart-apex-rain.vue";
import ChartBarRain from "@/components/common/chart/chart-bar-rain.vue";
import ChartChanceOfRainBar from "@/components/common/chart/chart-chance-of-rain-bar.vue";
import ChartColumnRainfall from "@/components/common/chart/chart-column-rainfall.vue";
import ChartDays from "@/components/common/chart/chart-days.vue";
import ChartDomainRain from "@/components/common/chart/chart-domain-rain.vue";
import ChartDomainTemps from "@/components/common/chart/chart-domain-temps.vue";
import ChartPrecipitationBar from "@/components/common/chart/chart-precipitation-bar.vue";
import ChartTemperatureBar from "@/components/common/chart/chart-temperature-bar.vue";
import ChartTitleChanceOfRain from "@/components/common/chart/chart-title-chance-of-rain.vue";
import ChartTitleRain from "@/components/common/chart/chart-title-rain.vue";
import ChartTitleTemp from "@/components/common/chart/chart-title-temp.vue";
import ChartPrecipitation from "@/components/month-day/chart-weather/chart-precipitation.vue";
import VueHorizontal from "vue-horizontal";

export default {
  name: "chart-temp-rain",

  components: {
    ChartDays,
    // ChartDomainTemps,
    ChartPrecipitationBar,
    // ChartChanceOfRainBar,
    ChartTemperatureBar,
    // ChartDomainRain,
    ChartTitleTemp,
    VueHorizontal,
    ChartTitleRain,
    ChartTitleChanceOfRain,
    // ChartColumnRainfall,
    // ChartApexRain,
    // ChartBarRain,
    // ChartColumnRainfall,
  },
  data() {
    return {
      heightValue: "90",
    };
  },

  computed: {
    paramHourly() {
      return this.$store.state.weatherModule.hourly24h;
    },
  },

  methods: {},
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
.top-chart-pre {
  top: 148px;
}
.top-chart-rain {
  top: 126px;
}
.top-chance-rain {
  top: 134px;
}

.top-tempt {
  top: 2px;
}
.border-r {
  width: 50px; /* Kích thước mỗi cột */
  height: 100%;
}

.top-rain-gif {
  top: 79px;
}
</style>
