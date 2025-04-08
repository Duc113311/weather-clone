<template>
  <div class="w-full h-full">
    <!--  -->
    <BaseComponent :isShowPad="true">
      <template v-slot:header>
        <div class="flex items-center text-left gap-2">
          <component class="icon-svg" :is="srcDaytime"></component>
          <p class="txt_medium_14" v-if="breadcumsObject?.country_key === 'vn'">
            {{
              $t(`Current_UV_In_{city}`, {
                city: convertToLowCase(breadcumsObject.city),
              })
            }}
          </p>
          <p class="txt_medium_14" v-else>
            {{
              $t(`Current_UV_In_{city}`, {
                city: `
                  ${breadcumsObject?.state}`,
              })
            }}
          </p>
        </div>
      </template>
      <div class="w-full text-left">
        <div class="w-full text-left pt-4 pb-2">
          <span class="txt_poppins_30">
            {{ Math.round(currentlyData?.uvIndex) }} -
            {{ convertUvSummary(currentlyData?.uvIndex) }}
          </span>
        </div>
        <div class="w-full text-left flex flex-col gap-2 mt-2">
          <p class="txt_regular_12">
            {{ $t("World_Health_Organization_UVI") }}
          </p>
          <p
            v-if="objectBreadcums?.country_key?.toLowerCase() === 'vn'"
            class="txt_regular_17 text-left"
          >
            {{ convertToLowCase(objectBreadcums.city) }},
            {{ objectBreadcums?.country }}
          </p>
        </div>
        <div class="w-full flex items-center justify-between mt-6 mb-4">
          <div class="flex items-center text-left gap-2 txt_regular_des">
            <IcTempt class="icon-svg"></IcTempt>
            <p class="txt_regular_14">{{ $t("Temperature") }}</p>
          </div>
          <div class="flex items-center">
            <div class="flex items-center">
              <IcTemptMin class="icon-svg"></IcTemptMin>
              <p class="txt_medium_17">
                {{
                  convertFahrenheitToCelsiusNot(dailyOneData?.temperatureMin)
                }}
              </p>
            </div>
            <div class="flex items-center">
              <IcTemptMax class="icon-svg"></IcTemptMax>
              <p class="txt_medium_17">
                {{
                  convertFahrenheitToCelsiusNot(dailyOneData?.temperatureMax)
                }}
              </p>
            </div>
          </div>
        </div>
        <div class="w-full text-left txt_regular_14">
          <span>{{ convertInforIndex(dailyOneData?.uvIndex) }}</span>
        </div>
      </div>
    </BaseComponent>
  </div>
</template>
<script>
import BaseComponent from "@/components/common/baseComponent.vue";
import IcTempt from "@/components/icons/IcTempt.vue";
import IcTemptMax from "@/components/icons/IcTemptMax.vue";
import IcTemptMin from "@/components/icons/IcTemptMin.vue";
import {
  codeToFind,
  convertCtoF,
  convertFtoC,
  getInformationUVIndex,
  getUvSummaryName,
} from "@/utils/converValue";
import { mapGetters } from "vuex";
import { markRaw } from "vue";
import IcTitleDaytime from "@/components/icons/IcTitleDaytime.vue";

export default {
  name: "uv-current-page",

  data() {
    return {
      srcNighttime: require("../../../assets/images/svg_v2/ic_nighttime.svg"),
      srcDaytime: markRaw(IcTitleDaytime),
      height: "120",
    };
  },

  components: {
    IcTemptMax,
    BaseComponent,
    IcTempt,
    IcTemptMin,
  },

  computed: {
    ...mapGetters("weatherModule", ["currentlyGetters", "dailyOneGetters"]),
    ...mapGetters("commonModule", ["breadcumsObjectGetters"]),

    languageParam() {
      const languageRouter = this.$route.params;
      return Object.keys(languageRouter).length !== 0
        ? languageRouter.language !== "en" && languageRouter.language !== "vi"
          ? "en"
          : languageRouter.language
        : this.$i18n.locale !== "en" && this.$i18n.locale !== "vi"
        ? "en"
        : this.$i18n.locale;
    },

    breadcumsObject() {
      const retrievedArray = JSON.parse(localStorage.getItem("objectBread"));
      const resultData = retrievedArray
        ? retrievedArray
        : this.breadcumsObjectGetters;

      return resultData;
    },
    currentlyData() {
      return this.currentlyGetters;
    },

    dailyOneData() {
      return this.dailyOneGetters;
    },

    objectBreadcums() {
      const retrievedArray = JSON.parse(localStorage.getItem("objectBread"));
      return retrievedArray ? retrievedArray : this.breadcumsObjectGetters;
    },
  },

  methods: {
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

    convertInforIndex(value) {
      return getInformationUVIndex(value);
    },

    convertUvSummary(value) {
      return getUvSummaryName(value);
    },

    convertToLowCase(value) {
      const normalizedStr = value
        .normalize("NFD") // Chuyển chuỗi sang dạng tổ hợp Unicode
        .replace(/[\u0300-\u036f]/g, ""); // Loại bỏ các dấu

      return normalizedStr;
    },
  },
};
</script>
<style lang="scss"></style>
