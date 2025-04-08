<template>
  <div class="w-full">
    <BaseComponent :isShowPad="false">
      <template v-slot:header>
        <div class="flex items-center text-left gap-2">
          <svg
            class="icon-svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 6C2.6 6.5 3.2 7 4.5 7C7 7 7 5 9.5 5C12.1 5 11.9 7 14.5 7C17 7 17 5 19.5 5C20.8 5 21.4 5.5 22 6M2 12C2.6 12.5 3.2 13 4.5 13C7 13 7 11 9.5 11C12.1 11 11.9 13 14.5 13C17 13 17 11 19.5 11C20.8 11 21.4 11.5 22 12M2 18C2.6 18.5 3.2 19 4.5 19C7 19 7 17 9.5 17C12.1 17 11.9 19 14.5 19C17 19 17 17 19.5 17C20.8 17 21.4 17.5 22 18"
              stroke="var(--color-icon-df)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p class="txt_medium_14">{{ $t("Air_quality") }}</p>
        </div>
      </template>
      <div class="w-full h-[211px]">
        <!--  -->
        <div class="text-left pad-big">
          <div class="flex justify-between items-start">
            <div>
              <div class="txt_bold_24" v-if="apiValue">
                <span>{{ apiValue }}</span>
              </div>
              <div
                class="txt_regular_17 text-left"
                :style="{ color: progressColor }"
              >
                <p>{{ convertAirIndexName(paramAirModule) }}</p>
              </div>
              <div class="txt_regular_12">
                <p>
                  {{ convertAqiHealthyInformationInfo(paramAirModule) }}
                </p>
              </div>
            </div>
            <el-popover placement="top" :width="200" trigger="hover">
              <template #reference>
                <svg
                  class="icon-svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4ZM12 15C12.2652 15 12.5196 15.1054 12.7071 15.2929C12.8946 15.4804 13 15.7348 13 16C13 16.2652 12.8946 16.5196 12.7071 16.7071C12.5196 16.8946 12.2652 17 12 17C11.7348 17 11.4804 16.8946 11.2929 16.7071C11.1054 16.5196 11 16.2652 11 16C11 15.7348 11.1054 15.4804 11.2929 15.2929C11.4804 15.1054 11.7348 15 12 15ZM12 6C12.2652 6 12.5196 6.10536 12.7071 6.29289C12.8946 6.48043 13 6.73478 13 7V13C13 13.2652 12.8946 13.5196 12.7071 13.7071C12.5196 13.8946 12.2652 14 12 14C11.7348 14 11.4804 13.8946 11.2929 13.7071C11.1054 13.5196 11 13.2652 11 13V7C11 6.73478 11.1054 6.48043 11.2929 6.29289C11.4804 6.10536 11.7348 6 12 6Z"
                    fill="var(--color-icon-df)"
                  />
                </svg>
              </template>
              <template #default>
                <div class="">
                  <div class="">
                    <p class="txt_medium_14">{{ titleRecommended }}</p>
                  </div>
                  <div class="text-left">
                    <span class="txt_regular_12">{{
                      convertAqiRecommendedPrecautionsInfo(110)
                    }}</span>
                  </div>
                </div>
              </template>
            </el-popover>
          </div>
        </div>

        <div class="w-full items-center gap-2">
          <div id="chart" class="w-full">
            <apexchart
              height="120"
              type="area"
              :options="chartOptions"
              :series="series"
            />
          </div>
        </div>
      </div>
    </BaseComponent>
  </div>
</template>
<script>
import { decodeBase64 } from "@/utils/EncoderDecoderUtils";
import BaseComponent from "../baseComponent.vue";
import { ref, computed } from "vue";
import {
  getAirSummaryName,
  getAqiHealthyInformationInfo,
  getAqiRecommendedPrecautionsInfo,
} from "@/utils/converValue";
import { mapGetters } from "vuex";
import { useStore } from "vuex"; // Nhập useStore từ vuex

export default {
  name: "air-quality-page",
  components: {
    BaseComponent,
  },

  data() {
    return {
      titleRecommended: this.$t("Recommended_Precautions"),
    };
  },

  setup() {
    const series = ref([
      {
        name: "Air Quality Index",
        data: [280, 290, 270, 260, 280, 250, 290, 295, 280, 270], // Dữ liệu mẫu
      },
    ]);
    const store = useStore();
    const paramAir = computed(() => {
      return store.state.airQualityModule.apiValue;
    });

    const paramAirModule = computed(() => {
      const storageAir = paramAir.value;
      return storageAir;
    });

    const getColorFromPercentage = (percentage) => {
      if (percentage <= 50) return "#41E11F";
      if ((51 <= percentage) & (percentage <= 100)) return "#3DE177";
      if ((101 <= percentage) & (percentage <= 150)) return "#F68421";
      if ((151 <= percentage) & (percentage <= 200)) return "#F42E1C";
      if ((201 <= percentage) & (percentage <= 300)) return "#8C4396";
      return "#781125"; // Giá trị phần trăm từ 90 đến 100
    };

    const progressColor = computed(() => {
      return getColorFromPercentage(paramAirModule.value);
    });

    const chartOptions = computed(() => ({
      chart: {
        type: "area",
        toolbar: { show: false },
        sparkline: { enabled: true },
        offsetY: 0,
      },
      stroke: {
        curve: "smooth",
        width: 5,
        colors: [progressColor.value],
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.4,
          stops: [0, 100],
          colorStops: [
            {
              offset: 0,
              color: progressColor.value,
              opacity: 0.7,
            },
            {
              offset: 100,
              color: "#ffffff",
              opacity: 0.4,
            },
          ],
        },
      },
      xaxis: {
        labels: { show: false },
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      yaxis: {
        labels: { show: false },
        min: 0,
        max: 300, // Giới hạn trục y
        offset: 0,
      },
      grid: {
        show: false,
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      tooltip: {
        enabled: false,
      },
    }));

    return {
      series,
      chartOptions,
      progressColor,
      paramAirModule,
      getColorFromPercentage,
    };
  },

  computed: {
    ...mapGetters("airQualityModule", ["airObjectGetters", "apiValueGetters"]),

    apiValue() {
      return this.$store.state.airQualityModule.apiValue;
    },

    dotStyle() {
      return { left: `${(parseInt(this.paramAirModule) / 500) * 100}%` };
    },
  },

  methods: {
    convertAirIndexName(val) {
      return getAirSummaryName(val);
    },

    convertAqiHealthyInformationInfo(val) {
      return getAqiHealthyInformationInfo(val);
    },

    convertAqiRecommendedPrecautionsInfo(val) {
      return getAqiRecommendedPrecautionsInfo(val);
    },

    // getColorFromPercentage(percentage) {
    //   if (percentage <= 50) return "#9dc194";
    //   if (percentage <= 100) return "#cbd956";
    //   if (percentage <= 150) return "#ecc32b";
    //   if (percentage <= 200) return "#f9b81d";
    //   if (percentage <= 300) return "#ff6272";
    //   return "#ff38a2"; // Giá trị phần trăm từ 90 đến 100
    // },
  },
};
</script>
<style lang="scss">
.chart-container {
  margin: 0; /* Remove any margin */
  padding: 0; /* Remove any padding */
  overflow: hidden; /* Prevent overflow */
}
</style>
