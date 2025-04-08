<template>
  <div class="w-full h-full">
    <div class="w-full relative h-full">
      <div class="w-full h-full relative">
        <!--  -->
        <vue-horizontal
          v-if="paramHourly.length > 0"
          :key="paramHourly.length"
          :displacement="1"
          class="w-full h-[calc(100%-40px)] relative horizontal"
        >
          <div class="w-full h-full relative">
            <ChartDays class="h-[40px]"></ChartDays>

            <div class="flex w-full h-full min-w-[1550px]">
              <div
                v-for="(day, index) in paramHourly"
                :key="index"
                class="flex-1 bor-r-chart opacity-30"
              ></div>
            </div>

            <DetailChartUv
              class="h-[calc(100%-40px)] absolute bottom-0"
            ></DetailChartUv>
          </div>
        </vue-horizontal>

        <div class="w-full h-[40px] flex justify-between pad-t-b-10 pad-r-l-10">
          <el-tooltip
            popper-class="app-tooltip cursor-pointer"
            effect="dark"
            placement="bottom-end"
          >
            <template #content>
              <div class="w-[150px] p-2">{{ $t("Low_UV_levels") }}</div>
            </template>
            <div class="flex items-center text-left gap-2 cursor-default">
              <div class="bg-short rounded-full w-[10px] h-[10px]"></div>
              <div class="text-center">
                <p class="txt_regular_12">{{ $t("Low") }}: 0-2</p>
              </div>
            </div>
          </el-tooltip>
          <el-tooltip
            popper-class="app-tooltip cursor-pointer"
            effect="dark"
            placement="bottom-end"
          >
            <template #content>
              <div class="w-[150px] p-2">{{ $t("There_is_a_moderate") }}</div>
            </template>
            <div class="flex items-center text-left gap-2 cursor-default">
              <div class="bg-Medium rounded-full w-[10px] h-[10px]"></div>
              <div class="text-center">
                <p class="txt_regular_12">{{ $t("Moderate") }}: 3-5</p>
              </div>
            </div>
          </el-tooltip>
          <el-tooltip
            popper-class="app-tooltip cursor-pointer"
            effect="dark"
            placement="bottom-end"
          >
            <template #content>
              <div class="w-[150px] p-2">{{ $t("UV_rays_are_highly") }}</div>
            </template>
            <div class="flex items-center text-left gap-2 cursor-default">
              <div class="bg-High rounded-full w-[10px] h-[10px]"></div>
              <div class="text-center">
                <p class="txt_regular_12">{{ $t("High") }}: 6-7</p>
              </div>
            </div>
          </el-tooltip>
          <el-tooltip
            popper-class="app-tooltip cursor-pointer"
            effect="dark"
            placement="bottom-end"
          >
            <template #content>
              <div class="w-[150px] p-2">
                {{ $t("The_risk_from_UV_is_very_high") }}
              </div>
            </template>
            <div class="flex items-center text-left gap-2 cursor-default">
              <div class="bg-Very-high rounded-full w-[10px] h-[10px]"></div>
              <div class="text-center">
                <p class="txt_regular_12">{{ $t("Very_High") }}: 8-10</p>
              </div>
            </div>
          </el-tooltip>
          <el-tooltip
            popper-class="app-tooltip cursor-pointer"
            effect="dark"
            placement="bottom-end"
          >
            <template #content>
              <div class="w-[150px] p-2">
                {{ $t("UV_rays_are_extremely_dangerous") }}
              </div>
            </template>
            <div class="flex items-center text-left gap-2 cursor-default">
              <div
                class="bg-Extremely-high rounded-full w-[10px] h-[10px]"
              ></div>
              <div class="text-center">
                <p class="txt_regular_12">{{ $t("Extreme") }}: > 10</p>
                <p class="txt_regular_12"></p>
              </div>
            </div>
          </el-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ChartDays from "@/components/common/chart/chart-days.vue";
import VueHorizontal from "vue-horizontal";
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
  convertTimestamp12hSun,
  convertTimestamp24hSun,
} from "@/utils/converValue";
import DetailChartUv from "./detail/detail-chart-uv.vue";

export default {
  name: "uv-chart-page",

  components: { ChartDays, VueHorizontal, DetailChartUv },

  computed: {
    paramHourly() {
      return this.$store.state.weatherModule.hourly24h;
    },
    listHourly() {
      const hourly24hValue = [...this.$store.state.weatherModule.hourly24h]; // Tạo bản sao để tránh thay đổi trực tiếp trong store
      const currently = this.$store.state.weatherModule.currently;

      if (hourly24hValue.length !== 0 && currently) {
        hourly24hValue.splice(0, 1, currently); // Chỉ thay thế phần tử đầu tiên bằng object currently
      }

      console.log("hourly24hValue", hourly24hValue);

      return hourly24hValue;
    },

    objectSetting() {
      return this.$store.state.commonModule.objectSettingSave;
    },

    listUvIndexData() {
      const unitSetting = this.objectSetting;

      return this.listHourly.map((element) => Math.round(element.uvIndex) || 0);
      // return [
      //   12, 12, 16, 17, 10, 13, 10, 15, 3, 12, 12, 16, 17, 12, 12, 16, 17, 10,
      //   13, 10, 15, 3, 12, 12,
      // ];
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
      // Tạo gradient màu từ #FFDA24 đến #D9D9D9 chỉ ở nửa trên của canvas
      const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
      gradient.addColorStop(0, "#FFD600"); // Màu trên (#F5A300 với độ mờ 50%)
      gradient.addColorStop(1, "#FFA800"); // Màu dưới (#F5D400 với độ mờ 10%)
      const displayData = this.listUvIndexData.map((value) =>
        value === 0 ? 0.5 : value > 13 ? 13 : value
      );

      // Thay đổi màu sắc của từng cột dựa trên giá trị
      const backgroundColors = displayData.map((value) => {
        if (value <= 2) return "#389311"; // Màu cho giá trị thấp
        if (2 < value && value <= 5) return "#F3E52B"; // Màu cho giá trị trung bình
        if (5 < value && value <= 7) return "#EE621D"; // Màu cho giá trị cao
        if (7 < value && value <= 10) return "#CF2526"; // Màu cho giá trị rất cao
        return "#9064CB"; // Màu cho giá trị cực cao
      });

      const labelList = this.listHourly.map((item) => {
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
              label: "Uv Index",
              type: "bar",
              pointBackgroundColor: "#ffffff",
              borderWidth: 1,
              pointBorderColor: "#C27021",
              pointRadius: 5,
              backgroundColor: backgroundColors,
              fill: true,
              data: displayData,
              barThickness: 30,
              borderRadius: 20,
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
              left: 0,
              right: 0,
            },
          },
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
              align: "end", // Position labels at the end of each bar
              anchor: "end", // Anchor labels to the end of each bar
              font: {
                size: 14,
                //   weight: "bold", // Chỉnh độ đậm của chữ
              },
              color: savedTheme === "light" ? "#333333" : "#ffffff", // Thay đổi màu sắc của nhãn dữ liệu
              formatter: (value, context) => {
                return value === 0.5 ? 0 : value;
              },
              offset: 0,
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
              beginAtZero: true,
              max: 14,
              min: 0,
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
.bg-short {
  background-color: #389311;
}

.bg-Medium {
  background-color: #f3e52b;
}

.bg-High {
  background-color: #ee621d;
}

.bg-Very-high {
  background-color: #cf2526;
}

.bg-Extremely-high {
  background-color: #9064cb;
}

.chart-container {
  padding: 0;
  margin: 0;
}
canvas {
  display: block;
  padding: 0;
  margin: 0;
}
</style>
