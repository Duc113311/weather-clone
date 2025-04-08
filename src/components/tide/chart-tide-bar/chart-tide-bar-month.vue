<template>
  <div
    class="chart-container-tempt p-chart-avg w-[1550px] pt-4 pb-4"
    v-if="extremesDataHeightRender"
  >
    <div class="chart-wrapper-tempt w-full h-full">
      <canvas id="chart_hourly" ref="canvas"></canvas>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

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
  convertFeetToMeter,
  convertMeterToFeet,
  convertToShortDayMonth,
  formatDateToDayMonth,
  formatTo12HourTimeTide,
  formatTo24HourTimeTide,
} from "@/utils/converValue";

export default {
  name: "chart-tide-bar-month",
  data() {
    return {};
  },

  computed: {
    ...mapGetters("tideModule", [
      "extremesDataFullGetters",
      "extremesDataGetters",
      "tideDataGetters",
    ]),

    extremesDataHeightRender() {
      const data = this.extremesDataFullGetters;

      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      const objectClone = { ...data[0] };
      objectClone.height = objectClone.height * 0.8; // giảm 20%
      const fakeValue =
        unitSetting.activeTide_save === "m"
          ? convertFeetToMeter(objectClone.height)
          : convertMeterToFeet(objectClone.height);
      const listHeight = data.map((el) => {
        const data = el.height;
        if (unitSetting.activeTide_save === "m") {
          return convertFeetToMeter(data);
        } else {
          return convertMeterToFeet(data);
        }
      });
      return [fakeValue, ...listHeight];
    },

    extremesDataRenderTime() {
      const data = this.extremesDataFullGetters;
      const objectClone = { ...data[0] };

      return [objectClone, ...data] || [];
    },

    extremesDataRenderTimeRender() {
      const data = this.extremesDataFullGetters;
      const objectClone = { ...data[0] };

      const timeClone = objectClone.datetime;
      const listDataTime = data.map((el) => {
        return el.datetime;
      });
      return [timeClone, ...listDataTime] || [];
    },
  },

  watch: {
    extremesDataHeightRender(newData) {
      if (newData.length !== 0) {
        this.$nextTick(() => {
          this.createChartHourly24h();
        });
      }
    },
  },

  mounted() {
    if (this.extremesDataHeightRender && this.extremesDataHeightRender.length) {
      this.$nextTick(() => {
        this.createChartHourly24h();
      });
    }
  },

  methods: {
    unitTide() {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;

      return unitSetting.activeTide_save;
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

      const maxDataValue = Math.max(...this.extremesDataHeightRender);
      const minDataValue = Math.min(...this.extremesDataHeightRender);

      const chartHeight = ctx.canvas.height;

      // Tạo gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, chartHeight + 200);
      gradient.addColorStop(0, "rgba(20, 130, 231, 1)"); // Đậm đầu
      gradient.addColorStop(0.8, "rgba(255, 255, 255, 0.3)"); // Trắng mờ cuối
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)"); // Trắng mờ cuối
      // Time

      console.log("this.extremesDataRenderTime", this.extremesDataRenderTime);

      const labelList = this.extremesDataRenderTime.map((item) => {
        const date = item.datetime;

        return formatDateToDayMonth(date);
      });
      const canvasWidth = labelList.length * 60;
      this.$refs.canvas.width = canvasWidth;

      // Chart
      this.chartInstance = new Chart(ctx, {
        type: "line",
        data: {
          labels: labelList,
          datasets: [
            {
              label: "",
              type: "line", // Kiểu dataset là line
              borderColor: "#1482E7",
              pointBackgroundColor: "#ffffff",
              pointBorderWidth: 1, // Độ dày viền của điểm
              pointRadius: (ctx) => (ctx.dataIndex === 0 ? 0 : 4), // ẩn chấm đầu

              borderWidth: 2, // Độ dày đường
              pointBorderColor: "#ffffff",
              // pointRadius: 4, // Bán kính điểm
              backgroundColor: gradient,
              fill: "start",
              data: this.extremesDataHeightRender,
              pointHoverRadius: 3,
              tension: 0.4,
              datalabels: {
                align: "top",
                anchor: "end",
                color: "#ffffff",
                font: {
                  size: 10,
                },
                formatter: (value, context) => {
                  return this.convertDateTime(
                    this.extremesDataRenderTimeRender[context.dataIndex]
                  ); // VD: "05:20"
                },
              },
              display: true,
            },
            {
              label: "",
              data: this.extremesDataHeightRender,
              borderColor: "transparent",
              backgroundColor: "transparent",
              pointRadius: 0,
              datalabels: {
                align: "bottom",
                anchor: "start",
                color: "#cccccc",
                font: {
                  size: 12,
                },
                formatter: (value, context) => {
                  const trendArrow = value >= 0 ? "↑" : "↓";
                  return `${value} ${this.unitTide()} ${trendArrow}`;
                },
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
              right: 30, // Chỉ định padding phía bên phải
            },
          },
          scales: {
            x: {
              display: true,
              ticks: {
                stepSize: 20, // Điều chỉnh số lượng điểm hiển thị trên trục x
                autoSkip: false, // không bỏ qua nhãn
                maxRotation: 40,
                color: "#ffffff",
                font: {
                  size: 12,
                },
                display: false,
                callback: function (value, index, ticks) {
                  const label = this.getLabelForValue(value);
                  const prevTick = ticks[index - 1];

                  if (!prevTick) return label; // luôn hiển thị nhãn đầu tiên

                  const prevLabel = this.getLabelForValue(prevTick.value);

                  if (label === prevLabel) {
                    return ""; // Nếu giống nhãn trước → không hiển thị
                  }

                  return label; // hiển thị nếu khác
                },
              },
              offset: false, // ✅ Thêm khoảng cách đầu/cuối

              grid: {
                display: true,
                color: "rgba(0,0,0,0.1)",
                drawOnChartArea: true, // ✅ cần cái này
                drawTicks: true,
                borderColor: "rgba(255,255,255,0.1)",
              },
            },
            y: {
              type: "linear",
              position: "left",
              display: true,
              beginAtZero: true,
              max: maxDataValue + 2,
              min: minDataValue.toFixed(1) - 1,

              ticks: {
                callback: (val) => `${val} m`,
                color: "#ccc",
              },
              grid: {
                display: false, // ✅ Hiện vạch kẻ trục Y
                color: "rgba(0,0,0,0.1)",
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
              intersect: false, // Cho phép hover ở mọi nơi trên đường
              mode: "index", // Hiển thị tooltip của tất cả dataset tại vị trí trục x
              theme: "dark",
              displayColors: false, // Ẩn ô màu mặc định
              titleAlign: "center",
              bodyAlign: "center",
              footerAlign: "center",
              callbacks: {
                title: (tooltipItems) => {
                  const index = tooltipItems[0].dataIndex;
                  const rawTime = this.extremesDataRenderTimeRender[index]; // Mảng thời gian của mày
                  const valueTime = this.convertDateTime(rawTime);
                  // Tùy format: có thể là "2025-04-02T05:20:00"
                  const date = new Date(rawTime);
                  const day = String(date.getDate()).padStart(2, "0");
                  const month = String(date.getMonth() + 1).padStart(2, "0");

                  return `${valueTime} - ${day}/${month}`;
                },
                label: (context) => {
                  const index = context.dataIndex;
                  const datasetIndex = context.datasetIndex;
                  const value = context.raw;

                  // Nếu là dataset đầu tiên (dữ liệu chính)
                  if (datasetIndex === 0) {
                    const trendArrow = value >= 0 ? "↑" : "↓";
                    return `${value} ${this.unitTide()} ${trendArrow}`;
                  }

                  // Nếu là dataset thứ 2 (ví dụ nhãn dưới điểm)
                  if (datasetIndex === 1) {
                    return ``;
                  }

                  // Default
                  return `Giá trị: ${value}`;
                },
              },
            },
            datalabels: {
              anchor: "center",
              align: "top",
              color: "#ccc", // Màu chữ
              display: (ctx) => ctx.dataIndex !== 0, // ✅ Đúng chỗ rồi
              font: {
                size: 12,
              },
              formatter: (value, context) => {
                const labelTime = context.chart.data.labels[context.dataIndex];
                const trendArrow = value >= 0 ? "↑" : "↓"; // Mũi tên
                return [`${labelTime}`, `${value} ${trendArrow}`]; // array = hiển thị 2 dòng
              },
            },
          },

          elements: {
            line: {
              tension: 0.5,
            },
          },

          hover: {
            mode: "index",
            intersect: false,
          },
        },
        plugins: [{}],
      });
    },

    convertDateTime(value) {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      if (unitSetting.activeTime_save === "12h") {
        return formatTo12HourTimeTide(value);
      } else {
        return formatTo24HourTimeTide(value);
      }
    },
  },
};
</script>
<style lang="scss"></style>
