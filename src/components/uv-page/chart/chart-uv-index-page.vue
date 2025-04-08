<template>
  <div class="w-full h-full">
    <!--  -->
    <BaseComponent :isShowPad="true">
      <template v-slot:header>
        <div class="flex items-center text-left gap-2">
          <component class="icon-svg" :is="srcDaytime"></component>
          <div
            class="txt_medium_14"
            v-if="breadcumsObject.country_key === 'vn'"
          >
            <span v-if="breadcumsObject?.city && !breadcumsObject?.district">{{
              $t(`{city}_UV_index_by_hour`, {
                city: convertToLowCase(breadcumsObject.city),
              })
            }}</span>
            <span
              v-if="
                breadcumsObject?.city &&
                breadcumsObject?.district &&
                !breadcumsObject?.ward
              "
            >
              {{
                $t(`{city}_UV_index_by_hour`, {
                  city: convertToLowCase(breadcumsObject.district),
                })
              }}
            </span>
            <span
              v-if="
                breadcumsObject?.city &&
                breadcumsObject?.district &&
                breadcumsObject?.ward
              "
            >
              {{
                $t(`{city}_UV_index_by_hour`, {
                  city: convertToLowCase(breadcumsObject.ward),
                })
              }}
            </span>
          </div>
          <div class="txt_medium_14" v-else>
            <span v-if="breadcumsObject?.state && !breadcumsObject?.county">{{
              $t(`{city}_UV_index_by_hour`, {
                city: $t(`${breadcumsObject?.state}`),
              })
            }}</span>
            <span
              v-if="
                breadcumsObject?.state &&
                breadcumsObject?.county &&
                !breadcumsObject?.cities
              "
              >{{
                $t(`{city}_UV_index_by_hour`, {
                  city: $t(`${breadcumsObject?.county}`),
                })
              }}</span
            >

            <span
              v-if="
                breadcumsObject?.state &&
                breadcumsObject?.county &&
                breadcumsObject?.cities
              "
              >{{
                $t(`{city}_UV_index_by_hour`, {
                  city: $t(`${breadcumsObject?.cities}`),
                })
              }}</span
            >
          </div>
        </div>
      </template>
      <div class="w-full h-full">
        <vue-horizontal
          v-if="listUvIndexData.length > 0"
          :key="listUvIndexData.length"
          :displacement="1"
          class="w-full h-full relative horizontal"
        >
          <div class="w-full h-full relative">
            <ChartDays class="h-[40px]"></ChartDays>

            <div class="flex w-full h-full min-w-[1550px]">
              <div
                v-for="(day, index) in listUvIndexData"
                :key="index"
                class="flex-1 bor-r-chart opacity-30"
              ></div>
            </div>

            <div class="absolute bottom-0 z-10 w-full">
              <div
                class="chart-container-tab-uv h-full w-[1550px]"
                v-if="listHourly && listHourly.length"
              >
                <canvas id="chart_hourlys" height="200" ref="canvas"></canvas>
              </div>

              <div class="flex w-[1550px] items-center mt-2">
                <div
                  class="weather-item w-full"
                  v-for="(item, index) in listUvIndexData"
                  :key="index"
                >
                  <!-- <span class="txt">{{ renderHourly(item).timestampValue }}</span> -->
                  <div class="txt_regular_12">{{ item }}</div>
                </div>
              </div>
            </div>
          </div>
        </vue-horizontal>
      </div>
    </BaseComponent>
  </div>
</template>
<script>
import BaseComponent from "@/components/common/baseComponent.vue";
import ChartDays from "@/components/common/chart/chart-days.vue";
import IcUvIndex from "@/components/icons/IcUvIndex.vue";
import {
  convertTimestamp12hSun,
  convertTimestamp24hSun,
} from "@/utils/converValue";
import { markRaw } from "vue";
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
import { mapGetters } from "vuex";
import { removeAccentsUnicode } from "@/utils/coverTextSystem";
export default {
  name: "chart-uv-index-page",

  components: {
    BaseComponent,
    ChartDays,
    VueHorizontal,
  },

  data() {
    return {
      srcDaytime: markRaw(IcUvIndex),
    };
  },

  computed: {
    ...mapGetters("commonModule", ["breadcumsObjectGetters"]),
    languageParam() {
      const languageRouter = this.$route.params;

      return Object.keys(languageRouter).length !== 0
        ? languageRouter.language !== "en" && languageRouter.language !== "vi"
          ? "en"
          : languageRouter.language
        : this.$i18n.locale !== "en" && this.$i18n.locale !== "vi"
        ? "en"
        : this.$i18n.locale;
    },

    breadcumsObject() {
      const retrievedArray = JSON.parse(localStorage.getItem("objectBread"));
      const resultData = retrievedArray
        ? retrievedArray
        : this.breadcumsObjectGetters;

      return resultData;
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
    convertToSlugCity(str) {
      const slug = removeAccentsUnicode(str);

      return slug
        .toLowerCase() // Chuyển thành chữ thường
        .replace(/\s+/g, ""); // Xóa khoảng trắng
    },

    convertToLowCase(value) {
      const normalizedStr = value
        .normalize("NFD") // Chuyển chuỗi sang dạng tổ hợp Unicode
        .replace(/[\u0300-\u036f]/g, ""); // Loại bỏ các dấu

      return normalizedStr;
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

    convertValueUvTitle(value) {
      if (value <= 2) return this.$t("Low"); // Màu cho giá trị thấp
      if (2 < value && value <= 5) return this.$t("Moderate"); // Màu cho giá trị trung bình
      if (5 < value && value <= 7) return this.$t("High"); // Màu cho giá trị cao
      if (7 < value && value <= 10) return this.$t("Very_High"); // Màu cho giá trị rất cao
      return this.$t("Extreme"); // Màu cho giá trị cực cao
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
              top: 0, // Chỉ định padding phía trên
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
              theme: "dark",
              callbacks: {
                label: (context) => {
                  const value = context.raw || "";

                  return ` ${
                    value === 0.5 ? 0 : value
                  }, ${this.convertValueUvTitle(value)} UV`; // Thông tin khi hover
                },
              },
            },
            datalabels: {
              display: false,
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
              max: 15,
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
</style>
