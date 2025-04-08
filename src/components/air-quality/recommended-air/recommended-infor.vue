<template>
  <div class="w-full">
    <div class="w-full h-full text-left flex flex-col gap-6">
      <div>
        <div class="w-full pt-2 pb-2">
          <p class="txt_medium_17 text-left">{{ $t("Healthy_Information") }}</p>
        </div>
        <div class="text-left">
          <p class="txt_regular_14 text-left">
            {{ getAqiHealthyInformationInfoItem(paramAirModule) }}
          </p>
        </div>
      </div>
      <div>
        <div class="pt-2 pb-2">
          <p class="txt_medium_17 text-left">
            {{ $t("Recommended_Precautions") }}
          </p>
        </div>
        <div class="text-left">
          <p class="txt_regular_14 text-left">
            {{ getAqiRecommendedPrecautionsInfoItem(paramAirModule) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  getAqiHealthyInformationInfo,
  getAqiRecommendedPrecautionsInfo,
} from "@/utils/converValue";
import { decodeBase64 } from "@/utils/EncoderDecoderUtils";

export default {
  name: "recommended-infor",

  data() {
    return {};
  },

  computed: {
    paramAirModule() {
      const storageAir = localStorage.getItem("airObject");
      if (storageAir) {
        const airObject = decodeBase64(storageAir);

        const decodeAirObject = JSON.parse(airObject);

        return decodeAirObject.aqi ? decodeAirObject.aqi : 0;
      }
      return this.$store.state.airQualityModule.airObject.aqi
        ? this.$store.state.airQualityModule.airObject.aqi
        : 0;
    },
  },

  methods: {
    getAqiHealthyInformationInfoItem(value) {
      return getAqiHealthyInformationInfo(value);
    },

    getAqiRecommendedPrecautionsInfoItem(value) {
      return getAqiRecommendedPrecautionsInfo(value);
    },
  },
};
</script>
<style lang="scss"></style>
