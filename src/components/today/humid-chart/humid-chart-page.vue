<template>
  <div class="w-full h-full">
    <div class="w-full relative h-full">
      <div class="w-full h-full relative">
        <!--  -->
        <vue-horizontal
          v-if="listHourly.length > 0"
          :key="listHourly.length"
          :displacement="1"
          class="w-full h-[calc(100%-40px)] relative horizontal"
        >
          <div class="w-full h-full relative">
            <ChartDays class="h-[40px]"></ChartDays>

            <div class="flex w-full h-full min-w-[1550px]">
              <div
                v-for="(day, index) in listHourly"
                :key="index"
                class="flex-1 bor-r-chart opacity-30"
              ></div>
            </div>

            <div class="w-full absolute bottom-6">
              <div
                class="chart-container w-[1550px] h-full p-chart-avg"
                v-if="listHourly && listHourly.length"
              >
                <div class="w-full h-full">
                  <canvas
                    id="chart_hourly"
                    class="h-full"
                    ref="canvas"
                  ></canvas>
                </div>
              </div>
            </div>

            <div
              class="w-[1550px] flex justify-between items-center absolute bottom-0"
            >
              <div
                class="weather-item w-full"
                v-for="(item, index) in listTemperatureData"
                :key="index"
              >
                <!-- <span class="txt">{{ renderHourly(item).timestampValue }}</span> -->
                <div class="txt_regular_12">{{ item }}%</div>
              </div>
            </div>
          </div>
        </vue-horizontal>

        <div class="w-full h-[40px] flex justify-between pad-t-b-10 pad-r-l-10">
          <div class="w-full flex justify-between items-center">
            <div class="flex items-center gap-1">
              <div class="bg-humid rounded-full w-[10px] h-[10px]"></div>
              <div class="txt_regular_12">
                <p>{{ $t("Humidity") }}:</p>
              </div>
              <div class="flex items-center gap-0.5">
                <p class="txt_regular_12">
                  {{ Math.round(objectCurrently?.humidity * 100) }}%
                </p>
              </div>
            </div>
            <div class="flex items-center text-left gap-2">
              <span
                class="txt_regular_12"
                v-if="breadcumsObjectValue?.country_key?.toLowerCase() === 'vn'"
              >
                {{ convertToLowCase(breadcumsObjectValue.city) }},
                {{ breadcumsObjectValue?.country }}</span
              >
              <span v-else class="txt_regular_12">
                {{ breadcumsObjectValue.state }},
                {{ breadcumsObjectValue?.country }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ChartDays from "@/components/common/chart/chart-days.vue";
import VueHorizontal from "vue-horizontal";

import {
  Chart,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  Tooltip,
  Legend,
  LineController,
} from "chart.js";
Chart.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  Tooltip,
  Legend,
  LineController,
  ChartDataLabels
);

import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  convertTimestamp12hSun,
  convertTimestamp24hSun,
} from "@/utils/converValue";
import { mapGetters } from "vuex";
import { convertToLowCase } from "@/utils/coverTextSystem";

export default {
  name: "humid-chart-page",

  components: {
    ChartDays,
    VueHorizontal,
  },
  data() {
    return {
      chart: null,
      chartInstance: null,
    };
  },

  computed: {
    ...mapGetters("commonModule", [
      "breadcumsObjectGetters",
      "listCityAllGetters",
    ]),
    languageParam() {
      const languageRouter = this.$route.params;
      debugger;
      return Object.keys(languageRouter).length !== 0
        ? languageRouter.language !== "en" && languageRouter.language !== "vi"
          ? "en"
          : languageRouter.language
        : this.$i18n.locale !== "en" && this.$i18n.locale !== "vi"
        ? "en"
        : this.$i18n.locale;
    },

    breadcumsObjectValue() {
      const retrievedArray = JSON.parse(localStorage.getItem("objectBread"));
      return retrievedArray ? retrievedArray : this.breadcumsObjectGetters;
    },
    objectCurrently() {
      return this.$store.state.weatherModule.currently;
    },
    listHourly() {
      return this.$store.state.weatherModule.hourly24h;
    },

    objectSetting() {
      return this.$store.state.commonModule.objectSettingSave;
    },

    listTemperatureData() {
      const unitSetting = this.objectSetting;

      return this.listHourly.map(
        (element) => Math.round(element.humidity * 100) || 0
      );
      // return [
      //   10, 22, 0, 34, 100, 45, 10, 22, 34, 100, 56, 0, 10, 44, 66, 76, 23, 14,
      //   34, 0, 5,
      // ];
    },
  },

  watch: {
    listHourly(newValue) {
      if (newValue.length !== 0) {
        this.$nextTick(() => {
          this.createChartHourly24h();
        });
      }
    },
  },

  mounted() {
    if (this.listHourly && this.listHourly.length) {
      this.$nextTick(() => {
        this.createChartHourly24h();
      });
    }
  },

  methods: {
    convertToLowCase(value) {
      return convertToLowCase(value);
    },
    convertTime(val) {
      const offsetValue = this.$store.state.weatherModule.locationOffset.offset;
      const timezoneValue =
        this.$store.state.weatherModule.locationOffset.timezone;
      const unitSetting = this.$store.state.commonModule.objectSettingSave;

      if (unitSetting.activeTime_save === "12h") {
        return convertTimestamp12hSun(val, 1, offsetValue, timezoneValue);
      } else {
        return convertTimestamp24hSun(val, 1, offsetValue, timezoneValue);
      }
    },
    createChartHourly24h() {
      const canvas = this.$refs.canvas;
      if (!canvas) {
        console.error("Canvas element not found");
        return;
      }

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        console.error("Failed to get canvas context");
        return;
      }

      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      ctx.scale(dpr, dpr);

      if (this.chartInstance) {
        this.chartInstance.destroy();
      }

      // Tạo gradient màu từ #FFDA24 đến #D9D9D9 chỉ ở nửa trên của canvas
      const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
      gradient.addColorStop(0, "rgba(12, 255, 211, 0.9)"); // Màu trên (#F5A300 với độ mờ 50%)
      gradient.addColorStop(0, "rgba(0, 102, 255, 0.2)"); // Màu dưới (#F5D400 với độ mờ 10%)
      gradient.addColorStop(1, "rgba(0, 102, 255, 0)"); // Màu dưới (#F5D400 với độ mờ 10%)

      const labelList = this.listHourly.map((item) => {
        const date = item.time;
        return this.convertTime(date);
      });

      const savedTheme = localStorage.getItem("theme") || "light";

      this.chartInstance = new Chart(ctx, {
        type: "line",
        data: {
          labels: labelList,
          datasets: [
            {
              label: "Humidity",
              borderColor: "#0b78d5",
              pointBackgroundColor: "#0b78d5",
              pointBorderWidth: 1, // Độ dày viền của điểm
              borderWidth: 2,
              pointBorderColor: "#0b78d5",
              pointRadius: 0,
              backgroundColor: gradient,
              fill: "start",
              data: this.listTemperatureData,
              pointHoverRadius: 4, // Tăng kích thước khi hover
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: {
              top: 20, // Chỉ định padding phía trên
              bottom: 0, // Chỉ định padding phía dưới
            },
          },
          plugins: {
            legend: {
              display: false,
              position: "bottom",
            },
            tooltip: {
              enabled: true,
              intersect: false, // Cho phép hover ở mọi nơi trên đường
              mode: "index", // Hiển thị tooltip của tất cả dataset tại vị trí trục x
              theme: "dark",
              callbacks: {
                label: (context) => {
                  const label = context.dataset.label || "";
                  const value = context.raw || "";
                  return ` ${value}%`; // Thông tin khi hover
                },
              },
            },
            datalabels: {
              display: false,
              align: "top",
              anchor: "end",
            },
          },
          scales: {
            x: {
              display: false,

              ticks: {
                stepSize: 10, // Điều chỉnh số lượng điểm hiển thị trên trục x
              },
            },
            y: {
              type: "linear",
              position: "left",
              display: false,
              beginAtZero: true,
              max: 114,
              ticks: {
                padding: 10, // Giảm khoảng cách giữa nhãn và trục
              },
            },
          },
          elements: {
            line: {
              tension: 0.3,
            },
          },
        },
        plugins: [{}],
      });
    },
  },
};
</script>
<style scoped>
.horizontal >>> .v-hl-btn-prev {
  display: none !important;
  left: 10px !important;
}
.horizontal >>> .v-hl-btn-next {
  display: none !important;

  right: 10px !important;
}
.horizontal:hover >>> .v-hl-btn-prev {
  display: flex !important;
  left: 10px !important;
  opacity: 0.5;
}

.horizontal:hover >>> .v-hl-btn-next {
  display: flex !important;
  right: 10px !important;
  opacity: 0.5;
}
.bg-humid {
  background-color: #0b78d5;
}

.bg-rain-c {
  background-color: #39e4f2;
}

.bg-rainfall-c {
  background-color: #327cee;
}
</style>
