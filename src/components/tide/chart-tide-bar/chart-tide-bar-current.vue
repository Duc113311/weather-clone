<template>
  <div class="chart-container-tempt w-full pl-6" v-if="extremesDataRender">
    <div class="chart-wrapper-tempt w-full h-full">
      <canvas id="chart_hourly" ref="canvas"></canvas>
    </div>
  </div>
</template>
<script>
import {
  convertGroupedForLineChart,
  convertGroupedToChartData,
  takeFirstNFromObject,
} from "@/utils/middleware";
import { mapGetters } from "vuex";

import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  TimeScale,
  CategoryScale,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import annotationPlugin from "chartjs-plugin-annotation";
import "chartjs-adapter-date-fns"; // hoặc dayjs nếu mày dùng dayjs

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  TimeScale, // ✅ đăng ký TimeScale ở đây
  Tooltip,
  Legend,
  Filler,
  annotationPlugin
);

import {
  convertFeetToMeter,
  convertMeterToFeet,
  formatTo12HourTimeTide,
  formatTo24HourTimeTide,
} from "@/utils/converValue";

export default {
  name: "chart-tide-bar-current",
  data() {
    return {
      xTarget: "2025-04-03T09:00:00+00:00", // Thời gian muốn nhúng điểm
      yTarget: null, // Giá trị y tương ứng với xTarget
    };
  },

  computed: {
    ...mapGetters("tideModule", ["extremesDataGetters"]),

    extremesDataRender() {
      const data = this.extremesDataGetters.slice(0, 2);

      const unitSetting = this.$store.state.commonModule.objectSettingSave;

      // 🔹 Fake điểm đầu: giảm 20%
      const objectCloneStart = { ...data[0] };
      objectCloneStart.height = objectCloneStart.height * 0.1;
      const fakeStartValue =
        unitSetting.activeTide_save === "m"
          ? convertFeetToMeter(objectCloneStart.height)
          : convertMeterToFeet(objectCloneStart.height);

      // 🔹 Fake điểm cuối: tăng 80%
      const objectCloneEnd = { ...data[data.length - 1] };
      objectCloneEnd.height = objectCloneEnd.height / 4.8;
      const fakeEndValue =
        unitSetting.activeTide_save === "m"
          ? convertFeetToMeter(objectCloneEnd.height)
          : convertMeterToFeet(objectCloneEnd.height);

      // 🔹 Dữ liệu thật
      const listHeight = data.map((el) => {
        const value = el.height;
        return unitSetting.activeTide_save === "m"
          ? convertFeetToMeter(value)
          : convertMeterToFeet(value);
      });

      // 🔹 Trả kết quả: [fake đầu, dữ liệu thật..., fake cuối]
      return [fakeStartValue, ...listHeight, fakeEndValue];
    },

    extremesDataRenderTime() {
      const data = this.extremesDataGetters.slice(0, 2);
      const objectClone = { ...data[0] };
      const objectCloneEnd = { ...data[data.length - 1] };

      return [objectClone, ...data, objectCloneEnd] || [];
    },

    extremesDataRenderTimeRender() {
      const data = this.extremesDataGetters.slice(0, 2);

      if (!data.length) return [];

      const formatToISOStringNoMs = (dateStr) => {
        const date = new Date(dateStr);
        const iso = date.toISOString();
        return iso.split(".")[0] + "+00:00";
      };

      // Clone đầu/cuối
      const start = new Date(data[0].datetime);
      start.setHours(start.getHours() + 3);

      const end = new Date(data[data.length - 1].datetime);
      end.setHours(end.getHours() - 3);

      const listDataTime = data.map((el) => formatToISOStringNoMs(el.datetime));

      return [
        formatToISOStringNoMs(start.toISOString()),
        ...listDataTime,
        formatToISOStringNoMs(end.toISOString()),
      ];
    },
  },

  watch: {
    extremesDataRender(newData) {
      if (newData.length !== 0) {
        this.$nextTick(() => {
          this.createChartHourly24h();
        });
      }
    },
  },

  mounted() {
    if (this.extremesDataRender && this.extremesDataRender.length) {
      this.$nextTick(() => {
        this.createChartHourly24h();
      });
    }
  },

  methods: {
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

      const maxDataValue = Math.max(...this.extremesDataRender);
      const minDataValue = Math.min(...this.extremesDataRender);

      const chartHeight = ctx.canvas.height;

      // Tạo gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, chartHeight);
      gradient.addColorStop(0, "rgba(20, 130, 231, 1)"); // Màu đậm trên cùng
      gradient.addColorStop(0.6, "rgba(20, 130, 231, 0.2)"); // Màu gần như trong suốt hơn
      gradient.addColorStop(0.8, "rgba(20, 130, 231, 0.02)"); // Màu rất nhạt trước khi hết
      gradient.addColorStop(1, "rgba(20, 130, 231, 0)"); // Màu hoàn toàn trong suốt ở đáy

      // Time
      const labelList = this.extremesDataRenderTime.map((item) => {
        const date = item.timestamp;
        return date;
      });

      console.log("extremesDataRender,", this.extremesDataRender);
      console.log("labelList", this.extremesDataRenderTimeRender);
      console.log(
        "Length match?",
        this.extremesDataRenderTimeRender.length ===
          this.extremesDataRender.length
      );

      // Chart
      this.chartInstance = new Chart(ctx, {
        type: "line",
        data: {
          labels: this.extremesDataRenderTimeRender,
          datasets: [
            {
              label: "",
              type: "line", // Kiểu dataset là line
              borderColor: "#1482E7",
              pointBackgroundColor: "#ffffff",
              pointRadius: (ctx) =>
                ctx.dataIndex === 0 || ctx.dataIndex === 3 ? 0 : 4, // ẩn chấm đầu
              pointBorderWidth: 1, // Độ dày viền của điểm
              borderWidth: 2, // Độ dày đường
              pointBorderColor: "#ffffff",
              backgroundColor: gradient,
              fill: "start",
              data: this.extremesDataRender,
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
                  console.log("value", context.dataIndex);

                  return this.convertDateTime(
                    this.extremesDataRenderTimeRender[context.dataIndex]
                  ); // VD: "05:20"
                },
              },
              display: true,
            },
            {
              label: "",
              type: "line",
              data: this.extremesDataRender,
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
              top: 10, // Chỉ định padding phía trên
              bottom: 0, // Chỉ định padding phía dưới
            },
          },
          scales: {
            x: {
              display: false,
              ticks: {
                stepSize: 20, // Điều chỉnh số lượng điểm hiển thị trên trục x
                autoSkip: false, // không bỏ qua nhãn
                maxRotation: 40,
              },
              offset: false, // ✅ Thêm khoảng cách đầu/cuố
            },
            y: {
              display: false,
              beginAtZero: true,
              max: maxDataValue + 0.5,
              min: minDataValue - 1,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            annotation: {
              annotation: {
                annotations: {
                  movingDot: {
                    type: "point",
                    xValue: null,
                    yValue: null,
                    radius: 6,
                    backgroundColor: "red",
                    borderColor: "#fff",
                    borderWidth: 2,
                  },
                },
              },
            },

            tooltip: {
              enabled: true,
              mode: "nearest",
              intersect: false, // Cho phép hover ở mọi nơi trên đường
              theme: "dark",
              displayColors: false, // Ẩn ô màu mặc định
              titleAlign: "center",
              bodyAlign: "center",
              footerAlign: "center",
              filter: (tooltipItem) => {
                try {
                  const index = tooltipItem?.dataIndex;
                  const dataLength = tooltipItem?.chart?.data?.labels?.length;
                  if (index === undefined || !dataLength) return false;

                  // ✅ ẩn tooltip ở điểm đầu (index === 0) và điểm cuối (index === labels.length - 1)
                  return index !== 0 && index !== 3;
                } catch {
                  return false;
                }
              },

              callbacks: {
                title: (tooltipItems) => {
                  const item = tooltipItems?.[0];
                  if (!item || item.dataIndex === undefined) return "";

                  const index = item.dataIndex;
                  const dataLength = item.chart.data.labels.length; // ✅ dùng đúng biến
                  if (index === 0 || index === 3) return "";

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
                  const dataLength = context.chart.data.labels.length;

                  if (index === 0 || index === 3) return ``;

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
              display: (ctx) =>
                ctx.dataIndex === 0 || ctx.dataIndex === 3 ? 0 : 4, // ẩn chấm đầu
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
        },
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

    unitTide() {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;

      return unitSetting.activeTide_save;
    },
  },
};
</script>
<style lang="scss"></style>
