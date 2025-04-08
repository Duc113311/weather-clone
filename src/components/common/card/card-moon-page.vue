<template>
  <div class="cursor-pointer">
    <!--  -->
    <div class="district-card">
      <div class="text-center txt_medium_14">
        {{ $t(`${objectLocation?.moonPhase}`) }}
      </div>
      <div class="txt_regular_10 color_BFBFBF">
        <p>{{ convertFullMoonTime(objectLocation?.infoMoonPhaseDay?.date) }}</p>
      </div>
      <div class="flex items-center justify-center p-1">
        <component
          class="icon-svg-moon-list"
          :is="convertStringMoonIcon(objectLocation?.moonPhase)"
          width="30"
          height="30"
        ></component>
      </div>

      <div class="txt_regular_12 color_BFBFBF">
        <p>
          {{ $t("Illumination") }}:
          {{ objectLocation?.infoMoonPhaseDay?.illumination }}%
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import IcFirstQuarter from "@/components/icons/moon-phase/IcFirstQuarter.vue";
import IcFullMoon from "@/components/icons/moon-phase/IcFullMoon.vue";
import IcNewMoon from "@/components/icons/moon-phase/IcNewMoon.vue";
import IcThirdQuarter from "@/components/icons/moon-phase/IcThirdQuarter.vue";
import IcWaningGibbous from "@/components/icons/moon-phase/IcWaningGibbous.vue";
import IcWaxingCrescent from "@/components/icons/moon-phase/IcWaxingCrescent.vue";
import IcWaxingGibbous from "@/components/icons/moon-phase/IcWaxingGibbous.vue";
import { convertTimestampFullMoon } from "@/utils/converValue";
import { markRaw } from "vue";

export default {
  name: "card-moon-page",

  props: {
    objectLocation: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      IcFullMoon: markRaw(IcFullMoon),
      IcFirstQuarter: markRaw(IcFirstQuarter),
      IcNewMoon: markRaw(IcNewMoon),
      IcThirdQuarter: markRaw(IcThirdQuarter),
      IcWaningGibbous: markRaw(IcWaningGibbous),
      IcWaxingCrescent: markRaw(IcWaxingCrescent),
      IcWaxingGibbous: markRaw(IcWaxingGibbous),
    };
  },

  computed: {
    languageParam() {
      const languageRouter = this.$route.params;
      return Object.keys(languageRouter).length !== 0
        ? languageRouter.language
        : this.$i18n.locale;
    },
  },

  methods: {
    convertFullMoonTime(value) {
      if (value) {
        const timezoneValue =
          this.$store.state.weatherModule.locationOffset.timezone;
        const offsetValue =
          this.$store.state.weatherModule.locationOffset.offset;
        const dateString = convertTimestampFullMoon(
          value,
          this.languageParam,
          timezoneValue
        );
        return dateString;
      }
    },
    convertStringMoonIcon(value) {
      const valueName = value.toString();

      switch (valueName) {
        case "Full_Moon":
          return this.IcFullMoon;
        case "First_Quarter":
          return this.IcFirstQuarter;
        case "New_Moon":
          return this.IcNewMoon;
        case "Third_Quarter":
          return this.IcThirdQuarter;
        case "Waning_Gibbous":
          return this.IcWaningGibbous;
        case "Waxing_Crescent":
          return this.IcWaxingCrescent;
        case "Waxing_Gibbous":
          return this.IcWaxingGibbous;
        default:
          return this.IcFullMoon;
      }
    },
  },
};
</script>
<style lang="scss">
.district-card {
  box-shadow: inset 0px 0px 56px var(--bg-compo-1),
    inset -50px -50px 100px 0px var(--bg-compo-2),
    inset 500px 500px 100px 0px var(--bg-compo-3);
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  height: 212px;
  list-style-type: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.district-name {
  font-size: 1.2em;
  margin-bottom: 10px;
}

.weather-icon {
  width: 50px;
  height: 50px;
  margin: 10px 0;
}

.weather-condition {
  margin: 5px 0;
}

.temperature {
  font-weight: bold;
}
</style>
