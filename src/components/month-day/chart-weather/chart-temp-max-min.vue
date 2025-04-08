<template>
  <div
    class="chart-container-tempt w-[1800px] p-chart-avg"
    v-if="paramHourly && paramHourly.length && listTemperatureData.length"
  >
    <div class="chart-wrapper-tempt w-full h-full">
      <canvas id="chart_hourly" ref="canvas"></canvas>
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
  convertDayOfWeek,
  convertDayOfWeekMonth,
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
      console.log(
        "listDaily30Day-data",
        this.$store.state.weatherModule.listDaily30Day
      );

      return this.$store.state.weatherModule.listDaily30Day;
    },

    objectSetting() {
      return this.$store.state.commonModule.objectSettingSave;
    },

    listTemperatureData() {
      const unitSetting = this.objectSetting;

      return this.paramHourly.map((element) =>
        unitSetting.activeTemperature_save === "f"
          ? convertCtoF(element.temperatureMax)
          : convertFtoC(element.temperatureMax)
      );
    },

    listTemperatureMin() {
      const unitSetting = this.objectSetting;

      return this.paramHourly.map((element) =>
        unitSetting.activeTemperature_save === "f"
          ? convertCtoF(element.temperatureMin)
          : convertFtoC(element.temperatureMin)
      );
    },

    listPrecipProbabilityData() {
      return this.paramHourly.map((element) =>
        Math.round(element?.precipProbability * 100)
      );
    },

    listPrecipIntensityData() {
      return this.paramHourly.map((element) =>
        element.precipIntensity === 0 ? "0.00" : element.precipIntensity
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
    convertTime(value) {
      const offsetValue = this.$store.state.weatherModule.locationOffset.offset;
      const timeZoneValue =
        this.$store.state.weatherModule.locationOffset.timeZone;
      const timestampValue = convertDayOfWeekMonth(
        value,
        offsetValue,
        timeZoneValue
      );
      return timestampValue;
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

      // Lấy giá trị nhỏ nhất trong dữ liệu và giảm thêm padding
      const maxDataValue = Math.max(...this.listTemperatureData);

      const minDataValueMin = Math.min(...this.listTemperatureMin);
      const chartHeight = ctx.canvas.height;

      // Tạo gradient Temperature Dark Max

      const gradientMax = ctx.createLinearGradient(0, 0, 0, chartHeight);
      gradientMax.addColorStop(0, "rgba(255, 218, 36, 0.5)");
      gradientMax.addColorStop(1, "rgba(255, 218, 36, 0)");

      const gradientMin = ctx.createLinearGradient(0, 0, 0, chartHeight);
      gradientMin.addColorStop(0, "rgba(83, 224, 80, 0.4)");
      gradientMin.addColorStop(1, "rgba(83, 224, 80, 0)");

      // Fill từ Min xuống đáy
      const gradientFillMin = ctx.createLinearGradient(
        0,
        0,
        0,
        chartHeight - 40
      );
      gradientFillMin.addColorStop(0.5, "rgba(117, 255, 95, 0.8)");
      gradientFillMin.addColorStop(1, "rgba(117, 255, 95, 0)");

      const labelList = this.paramHourly.map((item) => {
        const date = item.time;
        return this.convertTime(date);
      });

      // const savedTheme = localStorage.getItem("theme") || "light";

      this.chartInstance = new Chart(ctx, {
        type: "line",
        data: {
          labels: labelList,
          datasets: [
            {
              label: this.$t("Max"),
              order: 0, // Được vẽ sau, nên đè lên trên dataset Max
              borderColor: "#EBAB3F",
              pointBackgroundColor: "#EBAB3F",
              pointBorderWidth: 1, // Độ dày viền của điểm
              borderWidth: 2, // Độ dày đường
              pointBorderColor: "#EBAB3F",
              pointRadius: 0, // Bán kính điểm
              backgroundColor: gradientMax,
              fill: false, // Tô nền dưới line
              data: this.listTemperatureData,
              pointHoverRadius: 4, // Tăng kích thước khi hover
            },

            {
              label: this.$t("Min"),
              order: 2, // Được vẽ sau, nên đè lên trên dataset Max
              type: "line", // Kiểu dataset là line
              borderColor: "#53E050",
              pointBackgroundColor: "#53E050",
              borderWidth: 2, // Độ dày đường
              pointBorderColor: "#53E050",
              pointRadius: 0, // Bán kính điểm
              backgroundColor: gradientMax,
              fill: "-1", // Tô nền dưới line
              data: this.listTemperatureMin,
              pointHoverRadius: 4, // Tăng kích thước khi hover
            },
            {
              label: "Fill dưới Min",
              order: -1, // Vẽ đầu tiên (làm nền)
              borderWidth: 0,
              pointRadius: 0,
              backgroundColor: gradientFillMin, // Màu nhẹ hơn
              fill: "start", // Từ Min đến trục X
              data: this.listTemperatureMin, // same với line Min
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
                stepSize: 10, // Điều chỉnh số lượng điểm hiển thị trên trục x
              },
            },
            y: {
              display: false,
              title: {
                display: false,
                //   text: "Giá trị",
              },
              beginAtZero: true,
              min: minDataValueMin - 3,
              max: maxDataValue + 3,
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
              clip: false, // Không cắt tooltip khi nó vượt khỏi vùng vẽ
              cornerRadius: 6, // Làm bo góc tooltip
              displayColors: false, // Ẩn ô màu mặc định
              theme: "dark",
              titleAlign: "center",
              bodyAlign: "center",
              footerAlign: "center",
              callbacks: {
                label: (context) => {
                  if (context.dataset.label === this.$t("Max")) {
                    const index = context.dataIndex;
                    const maxVal = context.raw;
                    // Tìm dataset có label "Min"
                    const minDataset = context.chart.data.datasets.find(
                      (ds) => ds.label === this.$t("Min")
                    );
                    const minVal = minDataset ? minDataset.data[index] : "N/A";
                    // Kết hợp các thông tin vào một dòng tooltip
                    return [
                      `Max: ${maxVal}°`,
                      `Min: ${minVal}°`,
                      `${this.listPrecipProbabilityData[index]}%`,
                      `${this.listPrecipIntensityData[index]} ${this.unitPrecipitation}`,
                    ];
                  }
                  // Đối với dataset "Min", trả về chuỗi rỗng để không hiển thị tooltip riêng
                  return "";
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
<style lang="scss">
.chart-container-tempt {
  overflow: visible !important;
}

#chartjs-tooltip {
  transition: all 0.1s ease;
  white-space: nowrap;
}
</style>
