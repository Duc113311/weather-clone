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
            <ChartWind class="h-[40px]"></ChartWind>

            <div class="flex w-full h-full min-w-[1550px]">
              <div
                v-for="(day, index) in listHourly"
                :key="index"
                class="flex-1 bor-r-chart opacity-30"
              ></div>
            </div>

            <div class="w-full absolute bottom-6">
              <div
                class="chart-container-win h-full w-[1550px] p-chart-avg"
                v-if="listHourly && listHourly.length"
              >
                <canvas id="chart_hourly" class="h-full" ref="canvas"></canvas>
              </div>
            </div>

            <div
              class="w-[1550px] flex justify-between items-center absolute bottom-0"
            >
              <div
                class="weather-item w-full"
                v-for="(item, index) in listWindSpeedData"
                :key="index"
              >
                <!-- <span class="txt">{{ renderHourly(item).timestampValue }}</span> -->
                <div class="txt_regular_12">{{ item }}</div>
              </div>
            </div>
          </div>
        </vue-horizontal>

        <div class="w-full h-[40px] flex justify-between pad-t-b-10 pad-r-l-10">
          <div class="w-full flex justify-between items-center">
            <div class="flex items-center gap-1">
              <div class="bg-wind rounded-full w-[10px] h-[10px]"></div>
              <div class="txt_regular_12">
                <p>{{ $t("Wind_speed") }}:</p>
              </div>
              <div class="flex items-center gap-0.5">
                <p class="txt_regular_12">
                  {{ this.generateSeriesDataObject(objectCurrently) }}
                </p>
                <p class="txt_regular_12">({{ convertUnitPressure() }})</p>
              </div>
              <p class="txt_regular_12">
                {{ convertWindBearing(objectCurrently?.windBearing) }}
              </p>
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
import ChartWind from "@/components/common/chart/chart-wind.vue";
import VueHorizontal from "vue-horizontal";

import {
  codeToFind,
  convertMiToBeaufortScale,
  convertMiToKm,
  convertMiToKnot,
  convertMPHtoMetPS,
  convertTimestamp12hSun,
  convertTimestamp24hSun,
  getWindDirectionFromDegrees,
} from "@/utils/converValue";

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
import { mapGetters } from "vuex";

export default {
  name: "wind-chart-page",

  components: { ChartWind, VueHorizontal },
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
    listHourly() {
      return this.$store.state.weatherModule.hourly24h;
    },

    objectCurrently() {
      return this.$store.state.weatherModule.currently;
    },

    objectSetting() {
      return this.$store.state.commonModule.objectSettingSave;
    },

    listWindSpeedData() {
      const unitSetting = this.objectSetting;

      return this.generateSeriesData(this.listHourly);
    },

    breadcumsObjectValue() {
      const retrievedArray = JSON.parse(localStorage.getItem("objectBread"));
      return retrievedArray ? retrievedArray : this.breadcumsObjectGetters;
    },

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
    convertUnitPressure() {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      return codeToFind(unitSetting.activeWindSpeed_save);
    },
    convertToLowCase(value) {
      const normalizedStr = value
        .normalize("NFD") // Chuyển chuỗi sang dạng tổ hợp Unicode
        .replace(/[\u0300-\u036f]/g, ""); // Loại bỏ các dấu

      return normalizedStr;
    },
    convertWindBearing(value) {
      return getWindDirectionFromDegrees(value);
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

      if (this.chartInstance) {
        this.chartInstance.destroy();
      }

      const chartHeight = ctx.canvas.height;

      const gradient = ctx.createLinearGradient(0, 0, 0, chartHeight);
      gradient.addColorStop(0, "rgba(14, 41, 80, 1)");
      gradient.addColorStop(0.6, "rgba(14, 41, 80, 0.5)");
      gradient.addColorStop(0.8, "rgba(14, 41, 80, 0.2)");
      gradient.addColorStop(1, "rgba(14, 41, 80, 0)");

      const labelList = this.listHourly.map((item) => {
        const date = item.time;
        return this.convertTime(date);
      });

      const maxWindSpeedData = Math.max(...this.listWindSpeedData);

      const unitSetting = this.objectSetting.activeWindSpeed_save;

      this.chartInstance = new Chart(ctx, {
        type: "line",
        data: {
          labels: labelList,
          datasets: [
            {
              label: this.$t("Wind_speed"),
              borderColor: "#0E2950",
              pointBackgroundColor: "#0E2950",
              pointBorderWidth: 1, // Độ dày viền của điểm
              borderWidth: 2,
              pointBorderColor: "#0E2950",
              pointRadius: 0,
              backgroundColor: gradient,
              fill: "start",
              data: this.listWindSpeedData,
              pointHoverRadius: 3, // Tăng kích thước khi hover
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: {
              top: maxWindSpeedData, // Chỉ định padding phía trên
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
                  return ` ${value} ${unitSetting}`; // Thông tin khi hover
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
              max: maxWindSpeedData + 4,
              min: 0,
            },
          },
          elements: {
            line: {
              tension: 0.5,
            },
          },
        },
        plugins: [{}],
      });
    },

    formatWindSpeed(windSpeed) {
      // Kiểm tra nếu là số nguyên thì thêm ".00"
      if (Number.isInteger(windSpeed)) {
        return windSpeed.toFixed(2); // Thêm 2 chữ số thập phân
      }
      return windSpeed.toString(); // Giữ nguyên nếu đã có phần thập phân
    },

    generateSeriesDataObject(item) {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;

      if (unitSetting.activeWindSpeed_save === "m/s") {
        return convertMPHtoMetPS(item.windSpeed);
      }
      if (unitSetting.activeWindSpeed_save === "km/h") {
        return convertMiToKm(item.windSpeed);
      }
      if (unitSetting.activeWindSpeed_save === "mi/h") {
        return item.windSpeed;
      }
      if (unitSetting.activeWindSpeed_save === "knot") {
        return convertMiToKnot(item.windSpeed);
      }
      if (unitSetting.activeWindSpeed_save === "bft") {
        return convertMiToBeaufortScale(item.windSpeed);
      }
    },
    generateSeriesData(data) {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      return data.map((item) => {
        if (unitSetting.activeWindSpeed_save === "m/s") {
          return convertMPHtoMetPS(item.windSpeed);
        }
        if (unitSetting.activeWindSpeed_save === "km/h") {
          return convertMiToKm(item.windSpeed);
        }
        if (unitSetting.activeWindSpeed_save === "mi/h") {
          return item.windSpeed;
        }
        if (unitSetting.activeWindSpeed_save === "knot") {
          return convertMiToKnot(item.windSpeed);
        }
        if (unitSetting.activeWindSpeed_save === "bft") {
          return convertMiToBeaufortScale(item.windSpeed);
        }
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
.bg-wind {
  background-color: #0e2950;
}
</style>
