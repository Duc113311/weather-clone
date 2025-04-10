<template>
  <div class="w-full border-b pad-l-r-20 pad-t">
    <!--  -->
    <div class="c-temp text-left">
      <div class="flex justify-between items-start">
        <div class="flex items-center text-start gap-6">
          <div class="flex items-center text-start gap-2">
            <component
              :is="renderIcon(currentlyDataRender)"
              :width="50"
              :height="50"
            ></component>
            <div class="flex items-start text-start">
              <p class="txt_poppins_87">
                {{ renderToCelsius(currentlyDataRender?.temperature) }}
              </p>
              <p class="txt_poppins_40">{{ unitTemp() }}</p>
            </div>
          </div>
          <div class="flex flex-col gap-1.5 pt-2 pb-2">
            <div class="txt_regular_17 text-start">
              {{
                convertCapitalizeWords(
                  $t(`${currentlyDataRender?.summary.replace(/\s+/g, "_")}`)
                )
              }}
            </div>
            <div class="txt_regular_12 text-start">
              {{ $t("Real_feel") }}
              {{
                renderToCelsiusAndUnit(currentlyDataRender?.apparentTemperature)
              }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--  -->
    <div
      class="c-temp-row w-full sm:flex grid grid-cols-3 gap-2 items-center mt-2 pt-6 pb-3"
    >
      <div class="temp-section temp-max-min w-auto b-flex bor-rim-r pad-l-r">
        <div
          class="h-flex flex items-center justify-center pb-14 txt_regular_14"
        >
          <p>{{ $t("Temperature") }}</p>
        </div>
        <div class="flex justify-center items-center">
          <div class="text-left flex txt_medium gap-1">
            <IcTemptMin class="icon-svg"></IcTemptMin>
            <span class="txt_medium_17">{{
              renderToCelsiusAndUnit(dailyOneDataRender?.temperatureMin)
            }}</span>
          </div>

          <div class="text-right flex txt_medium gap-1">
            <IcTemptMax class="icon-svg"></IcTemptMax>
            <span class="txt_medium_17">
              {{ renderToCelsiusAndUnit(dailyOneDataRender?.temperatureMax) }}
            </span>
          </div>
        </div>
      </div>

      <div class="temp-section precipitation-c w-auto b-flex bor-rim-r pad-l-r">
        <div class="h-flex flex items-center justify-center txt_regular_14">
          <p>{{ $t("Precipitation") }}</p>
        </div>
        <div class="icon-c flex justify-center p-4">
          <IcPrecipitation></IcPrecipitation>
        </div>
        <div class="text-c text-center items-center txt_medium_17">
          <p>
            {{ convertPrecipitation(currentlyDataRender?.precipIntensity) }}
          </p>
        </div>
      </div>

      <div
        class="temp-section-c precipitation-c w-auto b-flex bor-rim-r pad-l-r"
      >
        <div class="h-flex flex items-center justify-center txt_regular_14">
          <p v-if="currentlyDataRender?.summary === 'snow'">
            {{ $t("Chance_of_snow") }}
          </p>
          <p v-else>{{ $t("Chance_of_rain") }}</p>
        </div>
        <div class="icon-c flex justify-center p-4">
          <IcChanceOfRainSnow
            v-if="currentlyDataRender?.summary === 'snow'"
          ></IcChanceOfRainSnow>
          <IcChanceOfRain v-else></IcChanceOfRain>
        </div>

        <div class="text-c text-center items-center txt_medium_17">
          <p>{{ Math.round(currentlyDataRender?.precipProbability * 100) }}%</p>
        </div>
      </div>

      <div class="temp-section precipitation-c w-auto b-flex bor-rim-r pad-l-r">
        <div class="h-flex flex items-center justify-center txt_regular_14">
          <p>{{ $t("Humidity") }}</p>
        </div>
        <div class="icon-c flex justify-center p-4">
          <IcHumidity class="icon-svg"></IcHumidity>
        </div>
        <div class="text-c text-center items-center txt_medium_17">
          <p>{{ Math.round(currentlyDataRender?.humidity * 100) }}%</p>
        </div>
      </div>

      <div class="temp-section precipitation-c w-auto b-flex bor-rim-r pad-l-r">
        <div class="h-flex flex items-center justify-center txt_regular_14">
          <p>{{ $t("Dew_point") }}</p>
        </div>
        <div class="icon-c flex justify-center p-4">
          <IcTitleAir class="icon-svg"></IcTitleAir>
        </div>
        <div class="text-c text-center items-center txt_medium_17">
          <p>
            {{ renderToCelsiusAndUnit(currentlyDataRender?.dewPoint) }}
          </p>
        </div>
      </div>

      <div class="temp-section precipitation-c w-auto b-flex bor-rim-r pad-l-r">
        <div class="h-flex flex items-center justify-center txt_regular_14">
          <p>{{ $t("Wind_speed") }}</p>
        </div>
        <div class="icon-c flex justify-center p-4">
          {{ convertWindBearing(currentlyDataRender?.windBearing) }}
        </div>
        <div class="text-c text-center items-center txt_medium_17">
          <p>
            {{ convertWindSpeed(currentlyDataRender.windSpeed) }}
            <span class="txt_regular_14">{{ convertUnitWindSpeed() }}</span>
          </p>
        </div>
      </div>
    </div>

    <!--  -->
    <div class="text-left w-full pt-6 pb-3 txt_regular_14">
      <p>
        {{ renderTitleByIconHouse(currentlyDataRender?.icon, dailyOneData) }}
      </p>
    </div>
  </div>
</template>
<script>
import IcChanceOfRain from "@/components/icons/IcChanceOfRain.vue";
import IcChanceOfRainSnow from "@/components/icons/IcChanceOfRainSnow.vue";
import IcHumidity from "@/components/icons/IcHumidity.vue";
import IcPrecipitation from "@/components/icons/IcPrecipitation.vue";
import IcScanApp from "@/components/icons/IcScanApp.vue";
import IcTemptMax from "@/components/icons/IcTemptMax.vue";
import IcTemptMin from "@/components/icons/IcTemptMin.vue";
import IcTitleAir from "@/components/icons/IcTitleAir.vue";
import IcTitleWindSpeed from "@/components/icons/IcTitleWindSpeed.vue";
import {
  codeToFind,
  convertCtoF,
  convertFtoC,
  convertMillimet,
  convertMillimetToInch,
  capitalizeWords,
  getIconHourlyForecastTheme,
  getTitleIconByHouse,
  convertMPHtoMetPS,
  convertMiToKm,
  convertMiToKnot,
  convertMiToBeaufortScale,
  getWindDirectionFromDegrees,
} from "@/utils/converValue";

export default {
  name: "header-temp",
  components: {
    IcTemptMax,
    IcTemptMin,
    IcPrecipitation,
    IcChanceOfRain,
    IcScanApp,
    IcChanceOfRainSnow,
    IcHumidity,
    IcTitleAir,
  },

  data() {
    return {};
  },

  props: {
    currentlyData: {
      type: Object,
      default: () => {},
    },

    dailyOneData: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    currentlyDataRender() {
      return this.currentlyData;
    },

    dailyOneDataRender() {
      debugger;
      return this.dailyOneData;
    },
  },

  methods: {
    renderIcon(val) {
      const iconValue = getIconHourlyForecastTheme(val.icon);
      return iconValue;
    },
    convertCapitalizeWords(value) {
      return capitalizeWords(value);
    },
    renderToCelsius(value) {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      if (unitSetting.activeTemperature_save === "f") {
        return convertCtoF(value);
      } else {
        return convertFtoC(value);
      }
    },

    unitTemp() {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      if (unitSetting.activeTemperature_save === "f") {
        return codeToFind(unitSetting.activeTemperature_save);
      } else {
        return codeToFind(unitSetting.activeTemperature_save);
      }
    },

    renderTitleByIconHouse(value, data) {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;

      return getTitleIconByHouse(value, data, unitSetting);
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

    renderUnit(value) {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      return codeToFind(unitSetting.activeTemperature_save);
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

    convertUnitWindSpeed() {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      return codeToFind(unitSetting.activeWindSpeed_save);
    },

    convertWindSpeed(value) {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      if (unitSetting.activeWindSpeed_save === "m/s") {
        return convertMPHtoMetPS(value);
      }
      if (unitSetting.activeWindSpeed_save === "km/h") {
        return convertMiToKm(value);
      }
      if (unitSetting.activeWindSpeed_save === "mi/h") {
        return value;
      }
      if (unitSetting.activeWindSpeed_save === "Knot") {
        return convertMiToKnot(value);
      }
      if (unitSetting.activeWindSpeed_save === "bft") {
        return convertMiToBeaufortScale(value);
      }
    },

    convertWindBearing(value) {
      return getWindDirectionFromDegrees(value);
    },
  },
};
</script>
<style lang="scss">
.temp-section {
  flex: 1;
  min-width: 0; // This prevents flex items from overflowing
  border-right: 1px solid #ccc; // Adjust color as needed

  &:last-child {
    border-right: none; // Remove border from the last item
  }
}

.temp-section-c {
  flex: 1;
  min-width: 0; // This prevents flex items from overflowing
  border-right: 0px solid #ccc; // Adjust color as needed

  &:last-child {
    border-right: none; // Remove border from the last item
  }
}

@media (min-width: 1200px) {
  .temp-section-c {
    border-right: 1px solid #ccc; // Adjust color as needed
  }
}

@media (min-width: 992px) {
  .temp-section-c {
    border-right: 1px solid #ccc; // Adjust color as needed
  }
}

.image-container {
  position: relative;
  width: 80px;
  height: 160px;
}

.stacked-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.stacked-image.active {
  opacity: 1;
}
</style>
