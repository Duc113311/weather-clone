<template>
  <div class="w-full pad-l-r-20 pad-t">
    <!--  -->
    <div class="c-temp text-left pt-2">
      <div class="flex items-center justify-start text-center gap-2">
        <component
          :width="40"
          :height="40"
          :is="renderIcon(dataDayNightRender?.icon)"
        ></component>
        <div class="flex items-start text-start">
          <p class="txt_poppins_68">
            {{ convertFahrenheitToCelsiusNotUnit(dataDayNightRender?.tempAvg) }}
          </p>
          <p class="txt_poppins_30">°</p>
        </div>
      </div>

      <div class="flex flex-col gap-1.5 pt-6 pb-2">
        <div class="txt_regular_17 text-left">
          {{
            convertCapitalizeWords(
              $t(`${dataDayNightRender?.summary.replace(/\s+/g, "_")}`)
            )
          }}
        </div>
        <div class="txt_regular_12 text-left">
          {{ $t("Real_feel") }}
          {{
            convertFahrenheitToCelsiusNot(
              dataDayNightRender?.apparentTemperature
            )
          }}
        </div>
      </div>
    </div>

    <!--  -->

    <div class="pt-2 pb-2 gap-2 flex-col flex">
      <div class="flex justify-between items-center">
        <div class="flex items-center text-left gap-2 txt_regular_des">
          <IcUvIndex class="icon-svg"></IcUvIndex>
          <p class="txt_regular_14">{{ $t("UV") }}</p>
        </div>
        <div class="items-center flex gap-1">
          <span class="txt_medium_17">{{
            Math.round(dataDayNightRender?.UvMax)
          }}</span>

          <span class="txt_regular_14"
            >({{ convertUvIndexName(dataDayNightRender?.UvMax) }})</span
          >
        </div>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex items-center text-left gap-2 txt_regular_des">
          <IcPrecipitation class="icon-svg"></IcPrecipitation>
          <p class="txt_regular_14">{{ $t("Precipitation") }}</p>
        </div>
        <p class="txt_medium_17">
          {{ convertPrecipitation(dataDayNightRender?.SumRainfall) }}
        </p>
      </div>
      <div class="flex justify-between items-center">
        <div
          class="flex items-center text-left gap-2 txt_regular_des"
          v-if="dataDayNightRender?.precipType === 'Snow'"
        >
          <IcChanceOfRainSnow class="icon-svg"></IcChanceOfRainSnow>
          <p class="txt_regular_14">{{ $t("Chance_of_snow") }}</p>
        </div>
        <div class="flex items-center text-left gap-2 txt_regular_des" v-else>
          <IcChanceOfRain class="icon-svg"></IcChanceOfRain>
          <p class="txt_regular_14">{{ $t("Chance_of_rain") }}</p>
        </div>
        <p class="txt_medium_17">
          {{ Math.round(dataDayNightRender?.ChanceOfRainAvg * 100) }}%
        </p>
      </div>
    </div>

    <div class="text-left w-full txt_regular_14 pt-4 pb-6">
      <p>
        {{ $t("Lorem_ipsum") }}
      </p>
    </div>
  </div>
</template>
<script>
import IcChanceOfRain from "@/components/icons/IcChanceOfRain.vue";
import IcChanceOfRainSnow from "@/components/icons/IcChanceOfRainSnow.vue";
import IcPrecipitation from "@/components/icons/IcPrecipitation.vue";
import IcUvIndex from "@/components/icons/IcUvIndex.vue";
import {
  capitalizeWords,
  codeToFind,
  convertCtoF,
  convertFtoC,
  convertMillimet,
  convertMillimetToInch,
  getIconHourlyForecastTheme,
  getUvSummaryName,
} from "@/utils/converValue";
import { mapGetters } from "vuex";

export default {
  name: "infor-common",
  components: {
    IcChanceOfRain,
    IcUvIndex,
    IcPrecipitation,
    IcChanceOfRainSnow,
  },

  data() {
    return {};
  },

  props: {
    isShowDayNightData: {
      type: Boolean,
      default: true,
    },

    renderTempoDay: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    ...mapGetters("weatherModule", ["currentlyGetters"]),

    currentlyData() {
      return this.currentlyGetters;
    },
    dataDayNightRender() {
      return this.renderTempoDay;
    },
  },

  methods: {
    renderIcon(val) {
      const iconValue = getIconHourlyForecastTheme(val);
      return iconValue;
    },
    convertCapitalizeWords(value) {
      return capitalizeWords(value);
    },

    convertDataDayNight(valueData, isDayNight) {
      let tempAvg = 0;

      debugger;
      if (isDayNight === true) {
        tempAvg =
          (valueData.maxTempDataDay?.temperature +
            valueData.minTempDataDay?.temperature) /
          2;
      } else {
        tempAvg =
          (valueData.minTempDataNight?.temperature +
            valueData.maxTempDataNight?.temperature) /
          2;
      }

      return tempAvg;
    },

    convertFahrenheitToCelsiusNot(value) {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      if (unitSetting.activeTemperature_save === "f") {
        return (
          convertCtoF(value) + codeToFind(unitSetting.activeTemperature_save)
        );
      } else {
        return (
          convertFtoC(value) + codeToFind(unitSetting.activeTemperature_save)
        );
      }
    },

    convertFahrenheitToCelsiusNotUnit(value) {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      if (unitSetting.activeTemperature_save === "f") {
        return convertCtoF(value);
      } else {
        return convertFtoC(value);
      }
    },

    convertUvIndexName(val) {
      return getUvSummaryName(val);
    },

    convertPrecipitation(val) {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      if (unitSetting.activePrecipitation_save === "mm") {
        return (
          convertMillimet(val) +
          " " +
          codeToFind(unitSetting.activePrecipitation_save)
        );
      } else {
        return (
          convertMillimetToInch(val) +
          " " +
          codeToFind(unitSetting.activePrecipitation_save)
        );
      }
    },
  },
};
</script>
<style lang="scss"></style>
