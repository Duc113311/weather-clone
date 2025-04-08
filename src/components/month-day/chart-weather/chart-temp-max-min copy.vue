<template>
  <div
    class="chart-container w-[96rem] mt-2"
    v-if="paramHourly && paramHourly.length"
  >
    <div class="chart-wrapper w-full h-full">
      <canvas id="chart_tem_month" height="320" ref="canvas"></canvas>
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
  name: "chart-temp-max-min",
  data() {
    return {
      chart: null,
      chartInstance: null,
    };
  },

  computed: {
    paramHourly() {
      return this.$store.state.weatherModule.listDaily30Day;
    },

    objectSetting() {
      return this.$store.state.commonModule.objectSettingSave;
    },

    listTemperatureDataMax() {
      const unitSetting = this.objectSetting;

      return this.paramHourly.map((element) =>
        unitSetting.activeTemperature_save === "f"
          ? convertCtoF(element.temperatureMax)
          : convertFtoC(element.temperatureMax)
      );
    },

    listTemperatureDataMin() {
      const unitSetting = this.objectSetting;

      return this.paramHourly.map((element) =>
        unitSetting.activeTemperature_save === "f"
          ? convertCtoF(element.temperatureMin)
          : convertFtoC(element.temperatureMin)
      );
    },

    listDataProbability() {
      return this.paramHourly.map((element) =>
        Math.round(element.precipProbability * 100 || 0)
      );
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

  watch: {
    paramHourly(newData) {
      if (newData.length !== 0) {
        this.$nextTick(() => {
          if (
            this.listTemperatureDataMin.length !== 0 &&
            this.listTemperatureDataMax.length !== 0
          ) {
            this.createChartMonthly();
          }
        });
      }
    },
  },

  mounted() {
    if (this.paramHourly && this.paramHourly.length) {
      this.$nextTick(() => {
        if (
          this.listTemperatureDataMin.length !== 0 &&
          this.listTemperatureDataMax.length !== 0
        ) {
          this.createChartMonthly();
        }
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

    createChartMonthly() {
      const maxDataMin = Math.max(...this.listTemperatureDataMin);
      const minDataMin = Math.min(...this.listTemperatureDataMin);
      const minDataMax = Math.max(...this.listTemperatureDataMax);
      const maxDataMax = Math.min(...this.listTemperatureDataMax);
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

      // Tạo gradient màu từ #FFDA24 đến #D9D9D9 chỉ ở nửa trên của canvas
      const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
      gradient.addColorStop(0, "rgba(245, 163, 0, 1)"); // Màu #00CCDC với độ mờ 100% (vị trí 0%)
      gradient.addColorStop(0.4, "rgba(245, 163, 0, 0.4)"); // Màu #FFFFFF với độ mờ 0% (vị trí 100%)
      gradient.addColorStop(0.8, "rgba(245, 163, 0, 0)"); // Màu #FFFFFF với độ mờ 0% (vị trí 100%)
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)"); // Màu #FFFFFF với độ mờ 0% (vị trí 100%)

      const gradientRain = ctx.createLinearGradient(
        0,
        0,
        0,
        ctx.canvas.height * 2
      ); // Gradient từ trên xuống dưới
      gradientRain.addColorStop(0, "rgba(0, 204, 220, 1)"); // Màu #00CCDC với độ mờ 100% (vị trí 0%)
      gradientRain.addColorStop(0.6, "rgba(0, 132, 143, 0.2)"); // Màu #FFFFFF với độ mờ 0% (vị trí 100%)
      gradientRain.addColorStop(1, "rgba(0, 132, 143, 0)"); // Màu #FFFFFF với độ mờ 0% (vị trí 100%)

      const maxDataValueRain = Math.max(...this.listDataProbability);
      const minDataValueRain = Math.min(...this.listDataProbability);

      const labelList = this.paramHourly.map((item) => {
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
              borderColor: "#00E3F5",
              pointBackgroundColor: "#00E3F5",
              pointBorderWidth: 1, // Độ dày viền của điểm
              borderWidth: 2,
              pointBorderColor: "#00E3F5",
              pointRadius: 5,
              backgroundColor: gradientRain,
              fill: true,
              data: this.listDataProbability,
              pointHoverRadius: 4,
              yAxisID: "y3", // Gán trục y cho Rain
              datalabels: {
                display: true,
                align: "top",
                anchor: "center", // Gắn nhãn ở đầu cột
                font: {
                  size: 14,
                },
                color: savedTheme === "light" ? "#333333" : "#00e3f5",
                formatter: (value) => `${value}%`, // Định dạng giá trị hiển thị
                offset: 4,
              },
            },

            {
              label: "Temperature Max",
              type: "line", // Kiểu dataset là line
              borderColor: "#EC9D00",
              pointBackgroundColor: "#EC9D00",
              pointBorderWidth: 0, // Độ dày viền của điểm
              borderWidth: 2,
              pointBorderColor: "#EC9D00",
              pointRadius: 5,
              backgroundColor: gradient,
              fill: true,
              data: this.listTemperatureDataMax,
              pointHoverRadius: 4, // Tăng kích thước khi hove
              yAxisID: "y1", // Gán trục y cho Rain
              datalabels: {
                display: true,
                align: "top",
                borderRadius: 1,
                font: {
                  size: 14,
                  //   weight: "bold", // Chỉnh độ đậm của chữ
                },
                color: "#EC9D00", // Thay đổi màu sắc của nhãn dữ liệu
                offset: 4,
                formatter: (value, context) => {
                  return `${value}°`;
                },
              },
            },
            {
              label: "Temperature Min",
              type: "line", // Kiểu dataset là line
              borderColor: "#00D354",
              pointBackgroundColor: "#00D354",
              pointBorderWidth: 0, // Độ dày viền của điểm
              borderWidth: 2,
              pointBorderColor: "#C27021",
              pointRadius: 5,
              backgroundColor: gradient,
              fill: true,
              data: this.listTemperatureDataMin,
              pointHoverRadius: 4, // Tăng kích thước khi hover
              yAxisID: "y2", // Gán trục y cho Rain
              datalabels: {
                display: true,
                align: "bottom",
                borderRadius: 3,
                font: {
                  size: 14,
                },
                color: "#00D354",
                offset: 4,
                formatter: (value) => `${value}°`,
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
              bottom: 10, // Chỉ định padding phía dưới
              left: 18,
              right: 18,
            },
          },
          plugins: {
            legend: {
              display: false,
              position: "bottom",
            },
            tooltip: {
              enabled: true,
              callbacks: {
                label: (context) => {
                  const label = context.dataset.label || "";
                  const value = context.raw || "";
                  return `${label}: ${value}${
                    label === "Temperature Max" || label === "Temperature Min"
                      ? "°"
                      : "%"
                  }`; // Thông tin khi hover
                },
              },
            },
          },
          scales: {
            x: {
              display: false,
              offset: false,
              ticks: {
                stepSize: 10, // Điều chỉnh số lượng điểm hiển thị trên trục x
              },
            },
            // Tempt Max
            y1: {
              display: false,
              beginAtZero: true,
              max: maxDataMax + 20,
              min: minDataMax - 20,
              ticks: {
                padding: 0, // Giảm khoảng cách giữa nhãn và trục
              },
            },
            // Tempt Min
            y2: {
              display: false,
              beginAtZero: true,
              max: maxDataMin + 10,
              min: minDataMin - 22,
              ticks: {
                padding: 0, // Giảm khoảng cách giữa nhãn và trục
              },
            },
            y3: {
              type: "linear",
              position: "center",
              display: false,
              beginAtZero: true,
              max: maxDataValueRain + 180,
              min: minDataValueRain - 6,
              ticks: {
                padding: 0, // Giảm khoảng cách giữa nhãn và trục
              },
              // min: yAxisMin - 30,
            },
          },
          elements: {
            line: {
              tension: 0.4,
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
.chart-wrapper {
  width: 100%; /* Đặt chiều rộng lớn hơn để kích hoạt cuộn ngang nếu cần */
}
</style>
