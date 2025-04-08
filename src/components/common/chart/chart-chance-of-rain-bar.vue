<template>
  <div
    class="chart-container-rain w-[1550px] p-chart-avg"
    v-if="paramHourly && paramHourly.length && listDataPrecipIntensity.length"
  >
    <div class="chart-wrapper-rain w-full h-full">
      <canvas id="chart_hourly" height="auto" ref="canvas"></canvas>
    </div>
  </div>
</template>
<script>
import {
  convertFtoC,
  convertCtoF,
  convertMillimet,
  convertMillimetToInch,
  codeToFind,
  convertTimestamp12hSun,
  convertTimestamp24hSun,
} from "../../../utils/converValue.js";
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

export default {
  name: "chart-chance-of-rain-bar",
  data() {
    return {
      chart: null,
      chartInstance: null,
    };
  },

  computed: {
    paramHourly() {
      return this.$store.state.weatherModule.hourly24h;
    },

    objectSetting() {
      return this.$store.state.commonModule.objectSettingSave;
    },

    listDataPrecipIntensity() {
      return this.paramHourly.map((element) =>
        Math.round(element.precipProbability * 100)
      );
      // return [
      //   10, 13, 12, 53, 10, 12, 100, 4, 100, 26, 49, 0, 100, 4, 100, 26, 4, 0,
      //   100, 4, 100, 26, 4, 0, 5,
      // ];
      // return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    },

    listDataPrecipIntensitySnow() {
      return this.paramHourly.map((element) =>
        element.precipType === "Snow"
          ? Math.round(element.precipProbability * 100)
          : 0
      );
      // return [0, 1, 5, 10, 0, 100, 4, 100, 26, 49, 0];
      // return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    },

    listDataPrecipType() {
      return this.paramHourly.map((element) => element.precipType);
      // return [0, 1, 5, 10, 0, 100, 4, 100, 26, 49, 0];
      // return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    },

    unitPrecipitation() {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      return codeToFind(unitSetting.activePrecipitation_save);
    },
  },

  props: {
    heightValue: {
      type: String,
      default: "90",
    },
  },

  watch: {
    paramHourly(newData) {
      if (newData.length !== 0) {
        this.$nextTick(() => {
          this.createChartHourly24h();
        });
      }
    },
  },

  mounted() {
    if (this.paramHourly && this.paramHourly.length) {
      this.$nextTick(() => {
        this.createChartHourly24h();
      });
    }
  },

  methods: {
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

      // Tạo gradient Temperature Dark
      const gradientPrecipIntensityDark = ctx.createLinearGradient(
        0,
        0,
        0,
        ctx.canvas.height
      );

      gradientPrecipIntensityDark.addColorStop(0, "rgba(0, 204, 220, 1)"); // Màu #00CCDC với độ mờ 100% (vị trí 0%)
      gradientPrecipIntensityDark.addColorStop(0.6, "rgba(0, 132, 143, 0)"); // Màu #FFFFFF với độ mờ 0% (vị trí 100%)
      gradientPrecipIntensityDark.addColorStop(1, "rgba(0, 132, 143, 0)"); // Màu #FFFFFF với độ mờ 0% (vị trí 100%)

      // Tạo gradient Temperature Dark
      const gradientPrecipIntensityLight = ctx.createLinearGradient(
        0,
        0,
        0,
        ctx.canvas.height
      );

      gradientPrecipIntensityLight.addColorStop(0, "rgba(245, 163, 0, 0.5)"); // Màu vàng cam (#F5A300) với độ mờ 50%
      gradientPrecipIntensityLight.addColorStop(0, "rgba(245, 163, 0, 0)"); // Màu vàng cam (#F5A300) với độ mờ 50%
      gradientPrecipIntensityLight.addColorStop(1, "rgba(255, 255, 255, 0)"); // Màu trắng (#FFFFFF) với độ mờ 0%

      const labelList = this.paramHourly.slice(0, 24).map((item) => {
        const date = item.time;
        return this.convertTime(date);
      });

      const displayData = this.listDataPrecipIntensity.map((value, index) => {
        return value === 0 ? 0.5 : value;
      });

      const savedTheme = localStorage.getItem("theme") || "light";

      this.chartInstance = new Chart(ctx, {
        type: "line",
        data: {
          labels: labelList,
          datasets: [
            {
              label: this.$t("Chance_of_rain"),
              type: "line", // Kiểu dataset là line
              borderColor: "#ccc",
              pointBackgroundColor: "#00e3f5",
              pointBorderWidth: 1, // Độ dày viền của điểm
              borderWidth: 2, // Độ dày đường
              pointBorderColor: "#00e3f5",
              pointRadius: 0, // Bán kính điểm
              backgroundColor:
                savedTheme === "light"
                  ? gradientPrecipIntensityLight
                  : gradientPrecipIntensityDark,
              fill: "start", // Tô nền dưới line
              data: displayData,
              pointHoverRadius: 0, // Tăng kích thước khi hover
              yAxisID: "y1", // Gán trục y cho Temperature
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
          scales: {
            x: {
              display: false,
              ticks: {
                stepSize: 0, // Điều chỉnh số lượng điểm hiển thị trên trục x
              },
            },
            y1: {
              type: "linear",
              position: "left",
              display: false,
              beginAtZero: true,
              max: 115,
              min: -6,
              ticks: {
                padding: 0, // Giảm khoảng cách giữa nhãn và trục
              },
            },
          },
          plugins: {
            legend: {
              display: false,
              position: "bottom",
            },
            tooltip: {
              enabled: true,
              theme: "dark",
              callbacks: {
                label: (context) => {
                  const { dataset, dataIndex } = context;
                  let labelValue = context.dataset.label || "";
                  const value = context.raw || "";

                  const precipType = this.listDataPrecipType[dataIndex];
                  // savedTheme === "light" ? "#333333" : "#00e3f5",
                  if (precipType === "Snow") {
                    labelValue = this.$t("Chance_of_snow");
                  } else {
                    labelValue = this.$t("Chance_of_rain");
                  }
                  // Nếu giá trị < 0 thì đặt align = bottom, ngược lại thì top
                  // return precipType === "Snow" ? "#BD8526" : "#00e3f5";
                  return `${labelValue}: ${value === 0.5 ? 0 : value}%`; // Thông tin khi hover
                },
              },
            },
            datalabels: {
              anchor: "end",
              align: "top",
              display: false,
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
<style lang="scss"></style>
