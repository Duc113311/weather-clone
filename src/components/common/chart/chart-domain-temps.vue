<template>
  <div
    class="chart-container w-[89rem]"
    v-if="paramHourly && paramHourly.length && listTemperatureData.length"
  >
    <div class="chart-wrapper w-full h-full">
      <canvas id="chart_hourly" height="290" ref="canvas"></canvas>
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
  name: "chart-domain-rain",
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

    listTemperatureData() {
      const unitSetting = this.objectSetting;

      return this.paramHourly.map((element) =>
        unitSetting.activeTemperature_save === "f"
          ? convertCtoF(element.temperature)
          : convertFtoC(element.temperature)
      );
      // return [5, 10, 12, 45, 15, 17, 10, 24, 30, 10, 40, 23];
    },

    listDataProbability() {
      return this.paramHourly.map((element) =>
        Math.round(element.precipProbability * 100)
      );
      // return [0, 1, 5, 10, 0, 4, 100, 26, 49, 0];
    },

    listDataPrecipIntensity() {
      return this.paramHourly.map((element) =>
        // this.convertPrecipitation(element.humidity * 100)
        Math.round(this.convertPrecipitation(element.precipIntensity))
      );
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
    convertPrecipitation(val) {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      if (unitSetting.activePrecipitation_save === "mm") {
        return convertMillimet(val);
      } else {
        return convertMillimetToInch(val);
      }
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

      // Tạo gradient Temperature Dark
      const gradientTemperatureDark = ctx.createLinearGradient(
        0,
        0,
        0,
        ctx.canvas.height
      );

      gradientTemperatureDark.addColorStop(0, "rgba(245, 163, 0, 1)"); // Màu #00CCDC với độ mờ 100% (vị trí 0%)
      gradientTemperatureDark.addColorStop(0.4, "rgba(245, 163, 0, 0.4)"); // Màu #FFFFFF với độ mờ 0% (vị trí 100%)
      gradientTemperatureDark.addColorStop(0.7, "rgba(245, 163, 0, 0)"); // Màu #FFFFFF với độ mờ 0% (vị trí 100%)
      gradientTemperatureDark.addColorStop(1, "rgba(255, 255, 255, 0)"); // Màu #FFFFFF với độ mờ 0% (vị trí 100%)

      // Tạo gradient Temperature Dark
      const gradientTemperatureLight = ctx.createLinearGradient(
        0,
        0,
        0,
        ctx.canvas.height
      );

      gradientTemperatureLight.addColorStop(0, "rgba(245, 163, 0, 0.5)"); // Màu vàng cam (#F5A300) với độ mờ 50%
      gradientTemperatureLight.addColorStop(0, "rgba(245, 163, 0, 0.2)"); // Màu vàng cam (#F5A300) với độ mờ 50%
      gradientTemperatureLight.addColorStop(1, "rgba(255, 255, 255, 0)"); // Màu trắng (#FFFFFF) với độ mờ 0%

      const gradientRain = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height); // Gradient từ trên xuống dưới
      // gradientRain.addColorStop(0, "rgba(0, 204, 220, 1)"); // Màu #00CCDC với độ mờ 100% (vị trí 0%)
      // gradientRain.addColorStop(0.31, "rgba(0, 204, 220, 0.31)"); // Màu #00CCDC với độ mờ 31% (vị trí 31%)
      // gradientRain.addColorStop(1, "rgba(255, 255, 255, 0)"); // Màu #FFFFFF với độ mờ 0% (vị trí 100%)

      gradientRain.addColorStop(0, "rgba(0, 204, 220, 1)"); // Màu #00CCDC với độ mờ 100%
      gradientRain.addColorStop(0, "rgba(0, 204, 220, 0.5)"); // Màu #00CCDC với độ mờ 100%
      gradientRain.addColorStop(1, "rgba(0, 132, 143, 0)"); // Màu #00848F với độ mờ 0%
      // // Lấy giá trị nhỏ nhất trong dữ liệu và giảm thêm padding
      const minDataValue = Math.min(...this.listTemperatureData);
      const maxDataValue = Math.max(...this.listTemperatureData);

      const maxDataValueRain = Math.max(...this.listDataProbability);
      const maxDataValueIntensity = Math.max(...this.listDataPrecipIntensity);
      const yAxisMin = minDataValue - 2; // Giảm giá trị nhỏ nhất xuống thêm 5 đơn vị (tuỳ chỉnh)

      const displayData = this.listDataProbability.map((value, index) => {
        return value === 0 ? 0.5 : value;
      });

      const labelList = this.paramHourly.slice(0, 24).map((item) => {
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
              label: this.$t("Chance_of_rain"),
              type: "line", // Kiểu dataset là line
              borderColor: "#90bcf3",
              pointBackgroundColor:
                savedTheme === "light" ? "#90bcf3" : "#00E3F5",
              pointBorderWidth: 1, // Độ dày viền của điểm
              borderWidth: 2,
              pointBorderColor: savedTheme === "light" ? "#90bcf3" : "#00E3F5",
              pointRadius: 5,
              backgroundColor: gradientRain,
              fill: true,
              data: displayData,
              pointHoverRadius: 4,
              yAxisID: "y2", // Gán trục y cho Rain
              datalabels: {
                display: true,
                align: "top",
                anchor: "start", // Gắn nhãn ở đầu cột
                font: {
                  size: 14,
                },
                color: savedTheme === "light" ? "#333333" : "#00e3f5",
                formatter: (value) => `${value === 0.5 ? 0 : value}%`, // Định dạng giá trị hiển thị
                offset: 8,
              },
            },

            {
              label: "Temperature",
              type: "line", // Kiểu dataset là line
              borderColor: "#EBAB3F",
              pointBackgroundColor: "#EBAB3F",
              pointBorderWidth: 1, // Độ dày viền của điểm
              borderWidth: 2, // Độ dày đường
              pointBorderColor: "#EBAB3F",
              pointRadius: 5, // Bán kính điểm
              backgroundColor:
                savedTheme === "light"
                  ? gradientTemperatureLight
                  : gradientTemperatureDark,
              fill: true, // Tô nền dưới line
              data: this.listTemperatureData,
              pointHoverRadius: 4, // Tăng kích thước khi hover
              yAxisID: "y1", // Gán trục y cho Temperature
              datalabels: {
                display: true,
                align: "top",
                anchor: "start", // Gắn nhãn ở đầu cột
                font: {
                  size: 14,
                },
                color: "#EBAB3F",
                formatter: (value) => `${value}°`, // Định dạng giá trị hiển thị
                offset: 4,
              },
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: {
              top: 20, // Chỉ định padding phía trên
              bottom: 25, // Chỉ định padding phía dưới
              left: 20,
              right: 20,
            },
          },
          scales: {
            x: {
              display: false,
              ticks: {
                stepSize: 10, // Điều chỉnh số lượng điểm hiển thị trên trục x
              },
            },
            y1: {
              type: "linear",
              position: "left",
              display: false,
              beginAtZero: true,
              max: maxDataValue + 4,
              min: minDataValue - 20,
              ticks: {
                padding: 100, // Giảm khoảng cách giữa nhãn và trục
              },
            },
            y2: {
              type: "linear",
              position: "right",
              display: false,
              beginAtZero: true,
              max: maxDataValueRain + 120,
              ticks: {
                padding: 0, // Giảm khoảng cách giữa nhãn và trục
              },
              // min: yAxisMin - 30,
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
                  const label = context.dataset.label || "";
                  const value = context.raw || "";
                  return `${label}: ${Number(value) === 0 ? 0 : value}${
                    label === "Temperature" ? "°" : "%"
                  }`; // Thông tin khi hover
                },
              },
            },
            datalabels: {
              anchor: "end",
              align: "top",
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
  },
};
</script>
<style lang="scss">
.chart-container {
  width: 150%;
}

.chart-wrapper {
  width: 100%; /* Đặt chiều rộng lớn hơn để kích hoạt cuộn ngang nếu cần */
}
</style>
