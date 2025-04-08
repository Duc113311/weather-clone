<template>
  <div class="chart-container-rain w-[89rem]">
    <div class="chart-wrapper w-full">
      <canvas id="chart_month_rain" height="80" ref="canvas"></canvas>
    </div>
  </div>
</template>

<script>
import { convertMillimet, convertMillimetToInch } from "@/utils/converValue";
import {
  CategoryScale,
  Chart,
  Filler,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
  Filler,
  ChartDataLabels
);
import ChartDataLabels from "chartjs-plugin-datalabels";

export default {
  name: "chart-chance-of-rain",
  data() {
    return {
      chart: null,
      pattern: null,
      img: null,
      pointImg: null, // Add an image object to the data
      chartInstance: null,
    };
  },

  computed: {
    paramHourly() {
      return this.$store.state.weatherModule.listDaily30Day;
    },

    listDataProbability() {
      return this.paramHourly.map((element) =>
        Math.round(element.precipProbability * 100 || 0)
      );
    },
  },

  watch: {
    paramHourly(newData) {
      if (newData.length !== 0) {
        this.$nextTick(() => {
          this.createChartRain30Day();
        });
      }
    },
  },

  mounted() {
    if (this.paramHourly && this.paramHourly.length) {
      this.$nextTick(() => {
        this.createChartRain30Day();
      });
    }
  },

  methods: {
    createChartRain30Day() {
      const canvas = document.getElementById("chart_month_rain");
      if (!canvas) {
        console.error("Canvas element not found");
        return;
      }

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        console.error("Failed to get canvas context");
        return;
      }

      // var chart_month_rain = Chart.getChart("chart_month_rain");
      if (this.chartInstance) {
        this.chartInstance.destroy();
      }

      // Tạo gradient màu từ #FFDA24 đến #D9D9D9 chỉ ở nửa trên của canvas
      const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height); // Gradient từ trên xuống dưới
      gradient.addColorStop(0, "#00CCDC"); // Màu trên (100% độ mờ)
      gradient.addColorStop(1, "#00848F00"); // Màu dưới (0% độ mờ)
      this.chartInstance = new Chart(ctx, {
        type: "line",
        data: {
          labels: [...Array(30).keys()].map((i) => i + 1),
          datasets: [
            {
              label: this.$t("Chance_of_rain"),
              borderColor: "#00E3F5",
              pointBackgroundColor: "#00E3F5",
              pointBorderWidth: 1, // Độ dày viền của điểm
              borderWidth: 1,
              pointBorderColor: "#00E3F5",
              pointRadius: 5,
              backgroundColor: gradient,
              fill: true,
              data: this.listDataProbability,
              pointHoverRadius: 8,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: 20,
          },
          plugins: {
            legend: {
              display: false,
              position: "bottom",
            },
            tooltip: {
              enabled: true,
              callbacks: {
                label: (tooltipItem) => {
                  const value = tooltipItem.raw; // Get the raw value
                  return `${this.$t("Chance_of_rain")}: ${value} %`; // Display value with percentage
                },
              },
            },
            datalabels: {
              display: true,
              align: "top",
              font: {
                size: 14,
                //   weight: "bold", // Chỉnh độ đậm của chữ
              },
              color: "#00E3F5", // Thay đổi màu sắc của nhãn dữ liệu
              formatter: (value, context) => {
                return `${value}%`;
              },
            },
          },
          scales: {
            x: {
              display: false,
              title: {
                display: false,
                stepSize: 2,
                //   text: "Tháng",
              },
            },
            y: {
              display: false,
              title: {
                display: false,
                //   text: "Giá trị",
              },
              beginAtZero: true,
              max: 110,
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

<style scoped>
.chart-wrapper {
  width: 100%; /* Đặt chiều rộng lớn hơn để kích hoạt cuộn ngang nếu cần */
}

.chart-container-rain {
  left: -10px;
}
</style>
