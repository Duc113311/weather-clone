<template>
  <div class="w-full pad-l-r-20 pad-t">
    <!--  -->
    <div class="c-temp text-left pt-2">
      <div class="flex items-center justify-start text-center gap-2">
        <component
          :width="40"
          :height="40"
          :is="renderIcon(currentlyData)"
        ></component>
        <div class="flex items-start text-start">
          <p class="txt_poppins_68">
            {{ convertFahrenheitToCelsiusNotUnit(currentlyData?.temperature) }}
          </p>
          <p class="txt_poppins_30">°</p>
        </div>
      </div>
      <div class="flex flex-col gap-1.5 pt-6 pb-2">
        <div class="txt_regular_17 text-left">
          {{
            convertCapitalizeWords(
              $t(`${currentlyData?.summary.replace(/\s+/g, "_")}`)
            )
          }}
        </div>
        <div class="txt_regular_12 text-left">
          {{ $t("Real_feel") }}
          {{
            convertFahrenheitToCelsiusNot(currentlyData?.apparentTemperature)
          }}
        </div>
      </div>
    </div>

    <!--  -->

    <div class="pt-1 pb-1 gap-2 flex-col flex">
      <div class="flex justify-between items-center">
        <div class="flex items-center text-left gap-2 txt_regular_des">
          <IcTempt class="icon-svg"></IcTempt>
          <p class="txt_regular_14">{{ $t("Temperature") }}</p>
        </div>
        <div class="flex items-center">
          <div class="flex items-center">
            <IcTemptMin class="icon-svg"></IcTemptMin>
            <p class="txt_medium_17">
              {{ convertFahrenheitToCelsiusNot(dailyOneData?.temperatureMin) }}
            </p>
          </div>
          <div class="flex items-center">
            <IcTemptMax class="icon-svg"></IcTemptMax>
            <p class="txt_medium_17">
              {{ convertFahrenheitToCelsiusNot(dailyOneData?.temperatureMax) }}
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex items-center text-left gap-2 txt_regular_des">
          <IcUvIndex class="icon-svg"></IcUvIndex>
          <p class="txt_regular_14">{{ $t("UV") }}</p>
        </div>
        <div class="items-center flex gap-1">
          <span class="txt_medium_17">{{
            Math.round(currentlyData?.uvIndex)
          }}</span>
          <span class="txt_regular_14"
            >({{ convertUvIndexName(currentlyData?.uvIndex) }})</span
          >
        </div>
      </div>

      <div class="flex justify-between items-center">
        <div class="flex items-center text-left gap-2 txt_regular_des">
          <IcHumidity class="icon-svg"></IcHumidity>
          <p class="txt_regular_14">{{ $t("Humidity") }}</p>
        </div>
        <p>{{ Math.round(currentlyData?.humidity * 100) }}%</p>
      </div>

      <div class="flex justify-between items-center">
        <div class="flex items-center text-left gap-2 txt_regular_des">
          <IcPrecipitation class="icon-svg"></IcPrecipitation>
          <p class="txt_regular_14">{{ $t("Precipitation") }}</p>
        </div>
        <p class="txt_medium_des">
          {{ convertPrecipitation(currentlyData?.precipIntensity) }}
        </p>
      </div>

      <div class="flex justify-between items-center">
        <div class="flex items-center text-left gap-2 txt_regular_des">
          <IcTitleAir class="icon-svg"></IcTitleAir>
          <p class="txt_regular_14">{{ $t("Dew_point") }}</p>
        </div>
        <p class="txt_medium_des">
          {{ renderToCelsiusAndUnit(currentlyData?.dewPoint) }}
        </p>
      </div>

      <div class="flex justify-between items-center">
        <div class="flex items-center text-left gap-2 txt_regular_des">
          <IcChanceOfRain class="icon-svg"></IcChanceOfRain>
          <p class="txt_regular_14" v-if="currentlyData?.precipType === 'Snow'">
            {{ $t("Chance_of_snow") }}
          </p>
          <p class="txt_regular_14" v-else>{{ $t("Chance_of_rain") }}</p>
        </div>
        <p class="txt_medium_des">
          {{ Math.round(currentlyData?.precipProbability * 100) }}%
        </p>
      </div>
      <!-- <div class="flex justify-between items-center">
        <div class="flex items-center text-left gap-2 txt_regular_des">
          <IcTitleAir></IcTitleAir>
          <p class="txt_regular_14">{{ $t("Air_quality") }}</p>
        </div>
        <div class="items-center flex gap-1">
          <span class="txt_medium_17 text-right">{{ paramAirModule }}</span>
          <span class="txt_regular_14 text-right">
            ({{ convertAirIndexName(paramAirModule) }})
          </span>
        </div>
      </div> -->
    </div>

    <div class="text-left w-full txt_regular_14 pb-2 pt-2">
      <p>
        {{ renderTitleByIconHouse(currentlyData?.icon, dailyOneData) }}
      </p>
    </div>
  </div>
</template>
<script>
import IcChanceOfRain from "@/components/icons/IcChanceOfRain.vue";
import IcHumidity from "@/components/icons/IcHumidity.vue";
import IcPrecipitation from "@/components/icons/IcPrecipitation.vue";
import IcTempt from "@/components/icons/IcTempt.vue";
import IcTemptMax from "@/components/icons/IcTemptMax.vue";
import IcTemptMin from "@/components/icons/IcTemptMin.vue";
import IcTitleAir from "@/components/icons/IcTitleAir.vue";
import IcUvIndex from "@/components/icons/IcUvIndex.vue";
import {
  capitalizeWords,
  codeToFind,
  convertCtoF,
  convertFtoC,
  convertMillimet,
  convertMillimetToInch,
  getAirSummaryName,
  getIconHourlyForecastTheme,
  getTitleIconByHouse,
  getUvSummaryName,
} from "@/utils/converValue";
import { decodeBase64 } from "@/utils/EncoderDecoderUtils";
import { mapGetters } from "vuex";

export default {
  name: "infor-full-card",

  components: {
    IcChanceOfRain,
    IcPrecipitation,
    IcTempt,
    IcTemptMax,
    IcTemptMin,
    IcTitleAir,
    IcUvIndex,
    IcHumidity,
  },

  data() {
    return {};
  },

  computed: {
    ...mapGetters("weatherModule", ["currentlyGetters", "dailyOneGetters"]),
    ...mapGetters("airQualityModule", ["airObjectGetters"]),
    currentlyData() {
      return this.currentlyGetters;
    },

    dailyOneData() {
      return this.dailyOneGetters;
    },

    paramAirModule() {
      const storageAir = this.$store.state.airQualityModule.apiValue;

      return storageAir;
    },
  },

  methods: {
    renderIcon(val) {
      const iconValue = getIconHourlyForecastTheme(val.icon);
      return iconValue;
    },

    renderToCelsiusAndUnit(value) {
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

    convertCapitalizeWords(value) {
      return capitalizeWords(value);
    },
    convertAirIndexName(val) {
      return getAirSummaryName(val);
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

    renderTitleByIconHouse(value, data) {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;

      return getTitleIconByHouse(value, data, unitSetting);
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
