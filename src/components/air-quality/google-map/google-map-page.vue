<template>
  <div class="w-full h-full">
    <!--  -->
    <BaseComponent :isShowPad="false">
      <!--  -->
      <template v-slot:header>
        <div class="flex items-center text-left gap-2">
          <svg
            class="icon-svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.65674 3.34005C9.56418 2.23728 11.7824 1.79532 13.9669 2.08284C16.1513 2.37036 18.1796 3.37126 19.7367 4.93005L14.0767 10.5899M4.6665 6H4.6765M2.95637 9.6201C2.58146 11.1472 2.57195 12.7411 2.92859 14.2725C3.28524 15.804 3.998 17.2297 5.009 18.434C6.02 19.6383 7.30075 20.5872 8.74727 21.2037C10.1938 21.8202 11.7653 22.0869 13.3342 21.9822C14.9031 21.8774 16.4252 21.4041 17.7769 20.6008C19.1286 19.7975 20.2719 18.6867 21.1138 17.3587C21.9557 16.0306 22.4726 14.5228 22.6224 12.9575C22.7723 11.3923 22.551 9.81376 21.9764 8.3501M16.9063 7.75992C16.3308 7.18108 15.6433 6.72575 14.8857 6.42179C14.1282 6.11783 13.3166 5.97163 12.5007 5.99213C11.6847 6.01263 10.8815 6.1994 10.1402 6.54103C9.39886 6.88265 8.73506 7.37193 8.18936 7.97894C7.64367 8.58594 7.22757 9.29791 6.96651 10.0713C6.70546 10.8446 6.60494 11.6631 6.67112 12.4767C6.73729 13.2902 6.96877 14.0817 7.35138 14.8027C7.73398 15.5237 8.25968 16.1591 8.8963 16.6699M12.6665 18H12.6765M18.6565 11.6599C18.7109 12.6113 18.5379 13.5619 18.1519 14.4332C17.7658 15.3044 17.1778 16.0711 16.4365 16.6699M14.6665 12C14.6665 13.1046 13.7711 14 12.6665 14C11.5619 14 10.6665 13.1046 10.6665 12C10.6665 10.8954 11.5619 10 12.6665 10C13.7711 10 14.6665 10.8954 14.6665 12Z"
              stroke="var(--color-icon-df)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span class="txt_medium_14">{{ this.$t("Google_Map") }}</span>
        </div>
      </template>
      <div class="h-[100%]">
        <!--  -->
        <div class="w-full h-full">
          <GoogleMap
            :api-key="AIzaSyCy9v8 - DMADL8RYMlp65ui4iky4Agr6vaA"
            style="width: 100%; height: 100%"
            :center="center"
            :zoom="10"
          >
            <Marker
              v-for="(item, index) in this.convertLocationAir(renderAir)"
              :key="index"
              :options="{ position: item }"
            />
          </GoogleMap>
        </div>
      </div>
    </BaseComponent>
  </div>
</template>
<script>
import BaseComponent from "@/components/common/baseComponent.vue";
import { decodeBase64 } from "@/utils/EncoderDecoderUtils";
import { GoogleMap, Marker } from "vue3-google-map";

export default {
  name: "google-map-page",

  components: {
    BaseComponent,
    Marker,
    GoogleMap,
  },

  data() {
    return {
      overlayValue: "temp",
      center: { lat: 21.020424, lng: 105.806926 },
      center1: { lat: 21.0215063, lng: 105.8188748 },
    };
  },

  computed: {
    renderAir() {
      const storageAir = localStorage.getItem("airObject");
      if (storageAir) {
        // const airObject = decodeBase64(storageAir);
        const decodeAirObject = JSON.parse(storageAir);
        return decodeAirObject.nearest ? decodeAirObject.nearest : [];
      }
      return this.$store.state.airQualityModule.airObject.nearest
        ? this.$store.state.airQualityModule.airObject.nearest
        : [];
    },
  },

  methods: {
    convertLocationAir(value) {
      const listNearest = value;
      const result = [];
      for (let index = 0; index < listNearest.length; index++) {
        const element = listNearest[index];
        const objectLocation = {
          lat: element.g[0],
          lng: element.g[1],
        };
        result.push(objectLocation);
      }

      return result;
    },
  },
};
</script>
<style lang="scss"></style>
