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
                class="chart-container-pressure w-[1550px] h-full p-chart-avg"
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
                v-for="(item, index) in listPressure"
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
              <div class="bg-pressure rounded-full w-[10px] h-[10px]"></div>
              <div class="txt_regular_12">
                <p>{{ $t("Pressure") }}:</p>
              </div>
              <div class="flex items-center gap-0.5">
                <p class="txt_regular_12">
                  {{ this.convertPressure(objectCurrently?.pressure) }}
                </p>
                <p class="txt_regular_12">({{ convertUnitPressure() }})</p>
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
  codeToFind,
  convertHpaToAtm,
  convertHpaToInHg,
  convertHpaToKpa,
  convertHpaToMbar,
  convertHpaToMmHg,
  convertMillimet,
  convertMillimetToInch,
  convertTimestamp12hSun,
  convertTimestamp24hSun,
  formatHpa,
} from "@/utils/converValue";
import ChartDays from "@/components/common/chart/chart-days.vue";

import VueHorizontal from "vue-horizontal";
import { mapGetters } from "vuex";

export default {
  name: "pressure-chart-page",

  components: { ChartDays, VueHorizontal },
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
    objectCurrently() {
      return this.$store.state.weatherModule.currently;
    },
    listHourly() {
      return this.$store.state.weatherModule.hourly24h;
    },

    objectSetting() {
      return this.$store.state.commonModule.objectSettingSave;
    },

    listPressure() {
      return this.generateSeriesData(this.listHourly);
      // return [1000, 920, 1000, 1100, 1040, 1080, 1020, 1090];
    },
    breadcumsObjectValue() {
      const retrievedArray = JSON.parse(localStorage.getItem("objectBread"));
      return retrievedArray ? retrievedArray : this.breadcumsObjectGetters;
    },

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
      const normalizedStr = value
        .normalize("NFD") // Chuyển chuỗi sang dạng tổ hợp Unicode
        .replace(/[\u0300-\u036f]/g, ""); // Loại bỏ các dấu

      return normalizedStr;
    },
    convertUnitPressure() {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      return codeToFind(unitSetting.activePressure_save);
    },
    convertTime(val) {
      const offsetValue = this.$store.state.weatherModule.locationOffset.offset;
      const timezoneValue =
        this.$store.state.weatherModule.locationOffset.timezone;
      const unitSetting = this.$store.state.commonModule.objectSettingSave;

      if (unitSetting.activeTime_save === "12h") {
        return convertTimestamp12hSun(val, 1, offsetValue, timezoneValue);
      } else {
        return convertTimestamp24hSun(val, 1, offsetValue);
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

      // const dpr = window.devicePixelRatio || 1;
      // canvas.width = canvas.clientWidth * dpr;
      // canvas.height = canvas.clientHeight * dpr;
      // ctx.scale(dpr, dpr);

      if (this.chartInstance) {
        this.chartInstance.destroy();
      }

      const chartHeight = ctx.canvas.height;

      const gradient = ctx.createLinearGradient(0, 0, 0, chartHeight);
      gradient.addColorStop(0, "rgba(188, 65, 242, 1)"); // Màu đậm nhất ở trên (#BC41F2 với opacity 1)
      gradient.addColorStop(0.6, "rgba(188, 65, 242, 0.5)"); // Giảm độ mờ
      gradient.addColorStop(0.8, "rgba(188, 65, 242, 0.2)"); // Màu rất nhạt trước khi hết
      gradient.addColorStop(1, "rgba(188, 65, 242, 0)"); // Hoàn toàn trong suốt ở đáy

      const labelList = this.listHourly.map((item) => {
        const date = item.time;
        return this.convertTime(date);
      });
      const maxWindSpeedData = Math.max(...this.listPressure);
      const minWindSpeedData = Math.min(...this.listPressure);

      const unitSetting = this.objectSetting.activePressure_save;

      this.chartInstance = new Chart(ctx, {
        type: "line",
        data: {
          labels: labelList,
          datasets: [
            {
              label: "Pressure",
              borderColor: "#BC41F2",
              pointBackgroundColor: "#BC41F2",
              pointBorderWidth: 1, // Độ dày viền của điểm
              borderWidth: 2,
              pointBorderColor: "#BC41F2",
              pointRadius: 0,
              backgroundColor: gradient,
              fill: "start",
              data: this.listPressure,
              pointHoverRadius: 4, // Tăng kích thước khi hover
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: {
              top: 0, // Chỉ định padding phía trên
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
                stepSize: 2, // Điều chỉnh số lượng điểm hiển thị trên trục x
              },
            },
            y: {
              display: false,
              beginAtZero: true,
              max:
                unitSetting === "atm"
                  ? maxWindSpeedData + 1
                  : maxWindSpeedData + 20,
              min:
                unitSetting === "atm"
                  ? minWindSpeedData - 1
                  : minWindSpeedData - 20,
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

    convertPrecipitation(val) {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      if (unitSetting.activePrecipitation_save === "mm") {
        return convertMillimet(val);
      } else {
        return convertMillimetToInch(val);
      }
    },
    convertPressure(val) {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      if (unitSetting.activePressure_save === "hPa") {
        return val;
      }
      if (unitSetting.activePressure_save === "mmHg") {
        return convertHpaToMmHg(val);
      }
      if (unitSetting.activePressure_save === "atm") {
        return convertHpaToAtm(val);
      }
      if (unitSetting.activePressure_save === "inHg") {
        return convertHpaToInHg(val);
      }
      if (unitSetting.activePressure_save === "mBar") {
        return convertHpaToMbar(val);
      }
      if (unitSetting.activePressure_save === "kPa") {
        return convertHpaToKpa(val);
      }
    },

    generateSeriesData(data) {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;

      return data.map((item) => {
        if (unitSetting.activePressure_save === "hPa") {
          return formatHpa(item?.pressure);
        }
        if (unitSetting.activePressure_save === "mmHg") {
          return convertHpaToMmHg(item?.pressure);
        }
        if (unitSetting.activePressure_save === "atm") {
          return convertHpaToAtm(item?.pressure);
        }
        if (unitSetting.activePressure_save === "inHg") {
          return convertHpaToInHg(item?.pressure);
        }
        if (unitSetting.activePressure_save === "mBar") {
          return convertHpaToMbar(item?.pressure);
        }
        if (unitSetting.activePressure_save === "kPa") {
          return convertHpaToKpa(item?.pressure);
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
.bg-pressure {
  background-color: #b915ff;
}
</style>
