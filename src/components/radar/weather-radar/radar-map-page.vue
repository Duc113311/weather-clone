<template>
  <div class="w-full h-full">
    <BaseComponent :height="heightAuto" :isShowPad="false">
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
              d="M12.167 2V4M5.09717 4.92993L6.50717 6.33993M20.167 12H22.167M19.2371 4.92993L17.8271 6.33993M16.114 12.6501C16.237 11.9046 16.1464 11.1395 15.8527 10.4433C15.5589 9.74717 15.0739 9.14847 14.454 8.71654C13.834 8.28461 13.1044 8.03711 12.3496 8.00269C11.5948 7.96827 10.8457 8.14835 10.189 8.52206M13.167 22H7.16695C6.22092 21.9998 5.29436 21.7312 4.49487 21.2255C3.69539 20.7197 3.0558 19.9975 2.65038 19.1427C2.24496 18.288 2.09035 17.3358 2.20451 16.3966C2.31867 15.4575 2.69691 14.5701 3.29531 13.8373C3.89371 13.1046 4.6877 12.5567 5.58507 12.2572C6.48244 11.9577 7.44637 11.9189 8.36489 12.1454C9.28342 12.3718 10.1188 12.8542 10.7742 13.5366C11.4295 14.2189 11.8777 15.0731 12.067 16H13.167C13.9626 16 14.7257 16.3161 15.2883 16.8787C15.8509 17.4413 16.167 18.2044 16.167 19C16.167 19.7956 15.8509 20.5587 15.2883 21.1213C14.7257 21.6839 13.9626 22 13.167 22Z"
              stroke="var(--color-icon-df)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span class="txt_medium_14">{{ $t("Radar_Map") }}</span>
        </div>
      </template>

      <div class="w-full h-[380px]">
        <div class="w-full h-full relative">
          <iframe
            ref="radarIframe"
            :key="iframeKey"
            :src="renderRadar"
            width="100%"
            height="100%"
            frameborder="0"
            scrolling="no"
          ></iframe>

          <!-- Thêm nút phóng to -->
          <div
            class="absolute bottom-2 bg-room right-2 p-1.5 rounded cursor-pointer transition-all"
            @click="toggleFullScreen"
          >
            <component :is="IcFullScream"></component>
          </div>

          <!-- Thêm nút locate -->
          <div
            class="absolute bottom-4 left-4 bg-locate p-1.5 rounded cursor-pointer transition-all"
            @click="onClickLocateFixed"
          >
            <component :is="IcLocateFixed"></component>
          </div>
        </div>
      </div>
    </BaseComponent>
  </div>
</template>
<script>
import BaseComponent from "@/components/common/baseComponent.vue";
import IcFullScream from "@/components/icons/radar/IcFullScream.vue";
import IcLocateFixed from "@/components/icons/radar/IcLocateFixed.vue";
import { markRaw } from "vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "radar-map-page",

  components: {
    BaseComponent,
  },

  data() {
    return {
      heightAuto: "auto",
      originalPosition: null,
      userLocation: null,
      iframeKey: 0,
      IcFullScream: markRaw(IcFullScream),
      IcLocateFixed: markRaw(IcLocateFixed),
    };
  },

  props: {
    overlayValue: {
      type: String,
      default: "temp",
    },
  },

  computed: {
    ...mapGetters("weatherModule", ["cityCountryGetters"]),
    ...mapGetters("commonModule", ["breadcumsObjectGetters"]),

    wardParam() {
      const retrievedArray = JSON.parse(localStorage.getItem("objectBread"));
      const resultData = retrievedArray
        ? retrievedArray
        : this.breadcumsObjectGetters;

      return resultData;
    },
    renderRadar() {
      const dataPosition = this.originalPosition;
      const objectSetting = this.$store.state.commonModule.objectSettingSave;
      if (!dataPosition || !dataPosition.latitude || !dataPosition.longitude) {
        return null;
      }
      const zoomValue = "7"; // 7,6,5,4,3
      const metricTempValue =
        objectSetting.activeTemperature_save === "f" ? "f" : "c"; // c, f
      const metricRainValue = "mm"; // mm, in
      const metricSnow = "cm"; // cm, in
      const metricWind = this.convertMetricWind(
        objectSetting.activeWindSpeed_save
      ); // kmh, kt, bft, ms,mh
      const metricPressure = objectSetting.activePressure_save; // hpa, inhg, mmhg
      const metricHumidity = "percent"; // percent
      const metricClouds = objectSetting.activePrecipitation_save; // mm, in
      const urlHost =
        "https://maps.goweatherradar.com/en/widget/1bfe4f546eb8a1d9fbe2f73812e60361e616c57d";
      const urlIframe =
        urlHost +
        `?lat=${dataPosition.latitude}&lng=${dataPosition.longitude}&overlay=${this.overlayValue}&zoom=${zoomValue}&metricTemp=${metricTempValue}&metricRain=${metricRainValue}&metricSnow=${metricSnow}&metricWind=${metricWind}&metricPressure=mmhg&metricHumidity=${metricHumidity}&metricClouds=${metricClouds}`;

      const urlIf = `https://embed.windy.com/embed2.html?lat=${dataPosition.latitude}&lon=${dataPosition.longitude}&zoom=${zoomValue}&metricTemp=${metricTempValue}&level=surface&overlay=${this.overlayValue}`;
      return urlIframe;
    },
  },

  watch: {
    originalPosition: {
      handler() {
        // Khi originalPosition thay đổi, iframe sẽ tự động cập nhật
      },
      deep: true,
    },
  },

  methods: {
    ...mapMutations("commonModule", ["setBreadcumsNotAllowLocation"]),
    convertMetricWind(value) {
      if (value === "m/s") {
        return "ms";
      }
      if (value === "km/h") {
        return "kmh";
      }
      if (value === "mi/h") {
        return "mh";
      }
      if (value === "knot") {
        return "kt";
      }
      if (value === "bft") {
        return "bft";
      }
    },

    toggleFullScreen() {
      // const iframe = this.$el.querySelector("iframe");
      // if (iframe) {
      //   if (!document.fullscreenElement) {
      //     iframe.requestFullscreen().catch((err) => {});
      //   } else {
      //     document.exitFullscreen();
      //   }
      // }
      this.$router.push("");
    },

    moveToPosition(position) {
      // Giả sử bạn có một phương thức để di chuyển iframe
      const jsCommand = `map.setView([${position.latitude}, ${position.longitude}], 7, { animate: true });`;

      // Gửi lệnh JavaScript đến iframe
      this.$refs.radarIframe.contentWindow.postMessage(
        { action: "executeJS", command: jsCommand },
        "*"
      );
    },

    // onClickLocateFixed() {},

    onClickLocateFixed() {
      // this.iframeKey += 1;
      const initialPosition = {
        latitude: this.wardParam.latitude,
        longitude: this.wardParam.longitude,
      };
      this.moveToPosition(initialPosition);
      // this.iframeKey += 1;
    },
  },

  mounted() {
    this.originalPosition = {
      latitude: this.wardParam.latitude,
      longitude: this.wardParam.longitude,
    };
  },
};
</script>
<style lang="scss" scoped>
.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
}

.bg-locate {
  backdrop-filter: blur(56px);
  box-shadow: inset 500px 500px 100px 0 rgba(243, 243, 243, 0.15),
    inset -50px -50px 100px 0 rgba(243, 243, 243, 0.15);
}
.bg-locate,
.bg-room {
  transition: transform 0.3s ease; /* Hiệu ứng mượt khi thay đổi kích thước */
}

.bg-locate:hover,
.bg-room:hover {
  transform: scale(1.1); /* Phóng to 10% */
}

iframe {
  transition: border 0.3s ease, box-shadow 0.3s ease;
  // border: 2px solid transparent; /* Default border */
}

iframe.active-radar {
  border: 2px solid #4caf50; /* Highlight border */
  box-shadow: 0 0 10px rgba(76, 175, 80, 0.8); /* Optional glow effect */
}
</style>
