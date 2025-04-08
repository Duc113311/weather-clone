<template>
  <div class="w-full h-full">
    <BaseComponent>
      <template v-slot:header>
        <div class="flex justify-between items-center">
          <div class="flex items-center text-left gap-2">
            <IcAirStation class="icon-svg"></IcAirStation>
            <span class="txt_medium_14">{{ $t("Air_Station_Near_By") }}</span>
          </div>
        </div>
      </template>

      <div class="w-full h-[280px] show-scroll pt-1 pb-1">
        <!--  -->
        <div class="flex flex-col gap-4 w-full h-full pb-4">
          <div
            class="w-full h-full"
            v-for="(item, index) in renderAir"
            :key="index"
          >
            <div class="flex w-full justify-between gap-2 items-center">
              <div
                class="w-[30px] flex justify-center items-center h-[30px] rounded-full"
                :style="{ backgroundColor: getAQIColorItem(item.v) }"
              >
                <p class="txt_regular_12 text-station">{{ item.v }}</p>
              </div>
              <div class="text-left w-[calc(100%-130px)] pl-2 pr-2">
                <p class="txt_medium_14 text-left">{{ item.nlo }}</p>
              </div>
              <div class="flex items-center gap-1">
                <p class="txt_regular_14">
                  {{ convertHaversineItem(item).toFixed(2) }} km
                </p>
                <img
                  src="../../../assets/images/svg_v2/ic_distance_svgrepo_com.svg"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseComponent>
  </div>
</template>
<script>
import BaseComponent from "@/components/common/baseComponent.vue";
import IcAirStation from "@/components/icons/IcAirStation.vue";
import { convertHaversine, getAQIColor } from "@/utils/converValue";
import { decodeBase64 } from "@/utils/EncoderDecoderUtils";

export default {
  name: "list-station-page",

  components: {
    BaseComponent,
    IcAirStation,
  },
  data() {
    return {
      listStation: [2, 3, 4, 6, 7, 8],
    };
  },

  computed: {
    renderAir() {
      const storageAir = localStorage.getItem("airObject");
      if (storageAir) {
        const airObject = decodeBase64(storageAir);
        const decodeAirObject = JSON.parse(airObject);
        return decodeAirObject.nearest ? decodeAirObject.nearest : [];
      }
      return this.$store.state.airQualityModule.airObject.nearest
        ? this.$store.state.airQualityModule.airObject.nearest
        : [];
    },

    wardParam() {
      const retrievedArray = JSON.parse(localStorage.getItem("objectBread"));
      const resultData = retrievedArray
        ? retrievedArray
        : this.breadcumsObjectGetters;

      return resultData;
    },
  },

  methods: {
    getAQIColorItem(value) {
      return getAQIColor(value);
    },

    convertHaversineItem(value) {
      const position = this.wardParam;
      return convertHaversine(
        position.latitude,
        position.longitude,
        value.g[0],
        value.g[1]
      );
    },
  },
};
</script>
<style lang="scss">
.text-station {
  color: #0e2950;
}
</style>
