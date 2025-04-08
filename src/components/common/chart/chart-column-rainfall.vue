<template>
  <div class="chart-container-rainfall w-[89rem]">
    <div class="chart-wrapper w-full relative">
      <canvas id="chart_hourly_rainfall" height="110" ref="canvas"></canvas>
    </div>
  </div>
</template>
<script>
import {
  codeToFind,
  convertMillimet,
  convertMillimetToInch,
} from "@/utils/converValue";
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
import ChartDataLabels from "chartjs-plugin-datalabels";

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
export default {
  name: "chart-column-rainfall",

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
      return this.$store.state.weatherModule.hourly24h;
    },

    listDataProbability() {
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
          this.createChartRainfall24h();
        });
      }
    },
  },

  mounted() {
    if (this.paramHourly && this.paramHourly.length) {
      this.$nextTick(() => {
        this.createChartRainfall24h();
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

    createChartRainfall24h() {
      const canvas = document.getElementById("chart_hourly_rainfall");
      if (!canvas) {
        console.error("Canvas element not found");
        return;
      }

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        console.error("Failed to get canvas context");
        return;
      }

      // var chart_hourly_rain = Chart.getChart("chart_hourly_rain");
      if (this.chartInstance) {
        this.chartInstance.destroy();
      }

      // Tạo gradient màu từ #FFDA24 đến #D9D9D9 chỉ ở nửa trên của canvas
      const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height); // Gradient từ trên xuống dưới
      gradient.addColorStop(0, "#2E77E8"); // Màu trên (100% độ mờ)
      gradient.addColorStop(1, "#104B77"); // Màu dưới (0% độ mờ)

      const displayData = this.listDataProbability.map((value) =>
        value === 0 ? 0.9 : value
      );

      this.chartInstance = new Chart(ctx, {
        type: "bar",
        data: {
          labels: [...Array(24).keys()].map((i) => i + 1),
          datasets: [
            {
              label: "PrecipIntensity",
              borderColor: "#F4F5F8",
              pointBackgroundColor: "#00E3F5",
              pointBorderColor: "#474A8D",
              borderWidth: 1,
              pointRadius: 10,
              backgroundColor: gradient,
              fill: true,
              data: displayData,
              borderRadius: 4,
              barThickness: 30,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,

          plugins: {
            legend: {
              display: false,
              position: "bottom",
            },
            tooltip: {
              enabled: true,
            },
            datalabels: {
              display: true,
              anchor: "end",
              align: "end",
              clip: false,
              font: {
                size: 14,
                //   weight: "bold", // Chỉnh độ đậm của chữ
              },
              color: "#ffffff", // Thay đổi màu sắc của nhãn dữ liệu
              formatter: (value, context) => {
                return this.listDataProbability[context.dataIndex] === 0
                  ? "0" + " " + this.unitPrecipitation
                  : value + " " + this.unitPrecipitation;
              },
            },
          },
          scales: {
            x: {
              display: false,
              title: {
                display: false,
                stepSize: 3,
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
              max: 25,
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
.chart-wrapper {
  width: 100%; /* Đặt chiều rộng lớn hơn để kích hoạt cuộn ngang nếu cần */
}
</style>
