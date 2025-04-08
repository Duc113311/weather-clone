<template>
  <div class="w-full">
    <BaseComponent>
      <template v-slot:header>
        <div class="flex items-center text-left gap-2">
          <IcUvIndex class="icon-svg"></IcUvIndex>
          <p class="txt_medium_14">{{ $t("UV") }}</p>
        </div>
      </template>
      <div class="w-full h-[183px]">
        <!--  -->
        <div class="text-left h-[100px]">
          <div class="txt_bold_24">
            <span>{{ Math.round(currentlyData?.uvIndex) }}</span>
          </div>
          <div
            class="txt_regular_17 text-left"
            :style="{ color: progressColor }"
          >
            <p>
              {{ convertUvIndexName(currentlyData?.uvIndex) }}
            </p>
          </div>
          <div class="txt_regular_12">
            <p>{{ convertInformationUVIndex(currentlyData?.uvIndex) }}</p>
          </div>
        </div>
        <div class="w-full relative mt-4 pr-2 h-[calc(100%-108px)]">
          <!--  -->
          <div class="chart-container absolute bottom-0 w-full h-full">
            <!--  -->
            <div
              class="chart-container w-full h-full"
              v-if="listHourly && listHourly.length"
            >
              <canvas id="chart_hourly" height="100" ref="canvas"></canvas>
            </div>
          </div>
        </div>
      </div>
    </BaseComponent>
  </div>
</template>
<script>
import BaseComponent from "../baseComponent.vue";
import { mapGetters } from "vuex";
import {
  convertTimestamp12hSun,
  convertTimestamp24hSun,
  getInformationUVIndex,
  getUvSummaryName,
} from "@/utils/converValue";
import IcUvIndex from "@/components/icons/IcUvIndex.vue";
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
  name: "uv-page",
  components: {
    BaseComponent,
    IcUvIndex,
  },

  data() {
    return {};
  },

  computed: {
    ...mapGetters("weatherModule", ["currentlyGetters"]),
    listHourly() {
      return this.$store.state.weatherModule.hourly24h;
    },
    currentlyData() {
      return this.currentlyGetters;
    },
    progressColor() {
      return this.getColorFromPercentage(
        Math.round(this.currentlyGetters?.uvIndex)
      );
    },
    listUvIndexData() {
      return this.listHourly.map((element) => Math.round(element.uvIndex) || 0);
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
    convertUvIndexName(val) {
      return getUvSummaryName(val);
    },

    convertInformationUVIndex(val) {
      return getInformationUVIndex(val);
    },

    getColorFromPercentage(percentage) {
      if (percentage) {
        if (percentage <= 2) return "#389311";
        if ((2 < percentage) & (percentage <= 5)) return "#F3E52B";
        if ((5 < percentage) & (percentage <= 7)) return "#EE621D";
        if ((7 < percentage) & (percentage <= 10)) return "#CF2526";
        return "#9064CB"; // Giá trị phần trăm từ 90 đến 100
      }
    },

    convertValueUvTitle(value) {
      if (value <= 2) return this.$t("Low"); // Màu cho giá trị thấp
      if (2 < value && value <= 5) return this.$t("Moderate"); // Màu cho giá trị trung bình
      if (5 < value && value <= 7) return this.$t("High"); // Màu cho giá trị cao
      if (7 < value && value <= 10) return this.$t("Very_High"); // Màu cho giá trị rất cao
      return this.$t("Extreme"); // Màu cho giá trị cực cao
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
      // Tạo gradient màu từ #FFDA24 đến #D9D9D9 chỉ ở nửa trên của canvas
      const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
      gradient.addColorStop(0, "#FFD600"); // Màu trên (#F5A300 với độ mờ 50%)
      gradient.addColorStop(1, "#FFA800"); // Màu dưới (#F5D400 với độ mờ 10%)
      const displayData = this.listUvIndexData
        .slice(0, 10)
        .map((value) => (value === 0 ? 0.5 : value));

      // Thay đổi màu sắc của từng cột dựa trên giá trị
      const backgroundColors = displayData.map((value) => {
        if (value <= 2) return "#389311"; // Màu cho giá trị thấp
        if (2 < value && value <= 5) return "#F3E52B"; // Màu cho giá trị trung bình
        if (5 < value && value <= 7) return "#EE621D"; // Màu cho giá trị cao
        if (7 < value && value <= 10) return "#CF2526"; // Màu cho giá trị rất cao
        return "#9064CB"; // Màu cho giá trị cực cao
      });

      const labelList = this.listHourly.slice(0, 10).map((item) => {
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
              label: "Uv Index",
              pointBackgroundColor: "#ffffff",
              borderWidth: 1,
              pointBorderColor: "#C27021",
              pointRadius: 10,
              backgroundColor: backgroundColors,
              fill: true,
              data: displayData,
              borderRadius: 20,
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
              callbacks: {
                label: (context) => {
                  const label = context.dataset.label || "";
                  const value = context.raw || "";
                  return ` ${
                    value === 0.5 ? 0 : value
                  }, ${this.convertValueUvTitle(value)} UV`; // Thông tin khi hover
                },
              },
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
                return context.dataIndex ===
                  this.listUvIndexData.indexOf(
                    Math.round(this.currentlyData.uvIndex)
                  )
                  ? value === 0.5
                    ? 0
                    : value
                  : "";
              },
              offset: 0,
            },
          },
          scales: {
            x: {
              display: false,
            },
            y: {
              display: false,
              beginAtZero: true,
              max: 13,
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
<style lang="scss"></style>
