<template>
  <div
    class="chart-container w-[89rem]"
    v-if="paramHourly && paramHourly.length && listDataProbability.length"
  >
    <div class="chart-wrapper w-full h-full">
      <canvas id="chart_hourly_rain" ref="canvas_rain"></canvas>
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

    listDataProbability() {
      return this.paramHourly.map((element) => {
        return Math.round(element.precipProbability * 100 || 0); // Tính toán và trả về kết quả
      });
      // return [1, 2, 3, 10, 100, 60, 40, 78, 29, 100, 29];
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
      const canvas = this.$refs.canvas_rain;
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

      const gradientRain = ctx.createLinearGradient(
        0,
        0,
        0,
        ctx.canvas.height * 2
      ); // Gradient từ trên xuống dưới
      gradientRain.addColorStop(0, "#00CCDC"); // Màu trên (100% độ mờ)
      gradientRain.addColorStop(1, "#00848F00"); // Màu dưới (0% độ mờ)

      // Lấy giá trị nhỏ nhất trong dữ liệu và giảm thêm padding

      const maxDataValueRain = Math.max(...this.listDataProbability);
      const minDataValueRain = Math.min(...this.listDataProbability);

      const labelList = this.paramHourly.map((item) => {
        const date = item.time;

        return this.convertTime(date);
      });

      const savedTheme = localStorage.getItem("theme") || "light";

      this.chartInstance = new Chart(ctx, {
        type: "bar",
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
              pointHoverRadius: 8,
              yAxisID: "y2", // Gán trục y cho Rain
              datalabels: {
                display: true,
                align: "top",
                anchor: "start", // Gắn nhãn ở đầu cột
                font: {
                  size: 14,
                },
                color: savedTheme === "light" ? "#333333" : "#00e3f5",
                formatter: (value) => `${value}%`, // Định dạng giá trị hiển thị
                offset: 12,
              },
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
              left: 0,
              right: 0,
            },
          },
          scales: {
            x: {
              display: false,
              ticks: {
                stepSize: 10, // Điều chỉnh số lượng điểm hiển thị trên trục x
              },
            },
            y2: {
              type: "linear",
              position: "right",
              display: false,
              beginAtZero: true,
              max: maxDataValueRain + 20,
              min: minDataValueRain - 20,
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
                  return `${label}: ${value}`; // Thông tin khi hover
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
