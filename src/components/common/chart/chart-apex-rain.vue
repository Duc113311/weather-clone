<template>
  <div class="w-full">
    <apexchart
      type="bar"
      :options="chartOptions"
      :series="series"
      height="150"
    />
  </div>
</template>
<script>
import ApexCharts from "vue3-apexcharts";

import {
  codeToFind,
  convertHpaToAtm,
  convertHpaToInHg,
  convertHpaToKpa,
  convertHpaToMbar,
  convertHpaToMmHg,
  convertMillimet,
  convertMillimetToInch,
  convertTimestampToHoursMinutes,
  convertTimestampToHoursMinutes12,
  formatHpa,
} from "@/utils/converValue";

export default {
  name: "chart-apex-rain",

  data() {
    return {
      series: [
        {
          name: "Background",
          data: [100, 100, 100, 100, 100, 100, 100, 100], // Dữ liệu nền 100%
        },
        {
          name: this.$t("Chance_of_rain"),
          data: [],
        },
      ],
      chartOptions: {
        plotOptions: {
          bar: {
            borderRadius: 12,
            columnWidth: "50%",
            // colors: {
            //   ranges: [
            //     {
            //       from: 0,
            //       to: 50,
            //       color: "#428FDB", // Màu cho các giá trị <= 50
            //     },
            //     {
            //       from: 51,
            //       to: 100,
            //       color: "#FF6347", // Màu cho các giá trị > 50
            //     },
            //   ],
            // },
          },
        },
        fill: {
          opacity: 1,
        },
        colors: ["#E0E0E0", "#428FDB"], // Màu nền (xám) và màu cột chính

        chart: {
          type: "bar",
          toolbar: {
            show: false,
          },
          stacked: true, // Dùng chế độ stacked để chồng hai lớp lên nhau
          zoom: {
            enabled: false,
          },
        },
        legend: {
          show: false,
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + " mm"; // Display value with units
          },
          offsetY: -10,
        },
        stroke: {
          width: [1],
          curve: "smooth",
        },
        tooltip: {
          enabled: true,
          theme: "dark", // Tooltip theme to use
        },
        xaxis: {
          categories: [],
          labels: {
            show: false,
            rotate: 0,
            style: {
              colors: "#2FC92B",
              fontSize: "12px",
              fontFamily: "Helvetica, Arial, sans-serif",
              cssClass: "apexcharts-yaxis-label",
            },
          },
        },
        yaxis: {
          opposite: true,
          labels: {
            show: true,
            style: {
              colors: "#ffffff",
              fontSize: "12px",
              fontFamily: "Helvetica, Arial, sans-serif",
              cssClass: "apexcharts-yaxis-label",
            },
            formatter: (value) => {
              return Math.round(value);
            },
          },
        },
      },
    };
  },

  components: {
    apexchart: ApexCharts,
  },

  computed: {
    listHourly() {
      return this.$store.state.weatherModule.hourly24h;
    },
  },

  watch: {
    listHourly(newValue) {
      this.handlerPrecipitation(newValue);
    },
  },

  mounted() {
    if (this.listHourly.length !== 0) {
      this.handlerPrecipitation(this.listHourly);
    }
  },

  methods: {
    generateSeriesData(data) {
      return [30, 40, 45, 50, 49, 60, 70, 91];
    },

    /**
     * Data Time
     * @param data
     */
    generateCategoriesTime(data) {
      const categories = [];
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      const offsetValue =
        this.$store.state.weatherModule?.locationOffset?.offset;
      const timezoneValue =
        this.$store.state.weatherModule?.locationOffset?.timezone;

      if (data.length !== 0) {
        data.forEach((item, index) => {
          let timeConvert = "";

          if (unitSetting.activeTime_save === "12h") {
            timeConvert = convertTimestampToHoursMinutes12(
              item?.time,
              0,
              offsetValue,
              timezoneValue
            );
          } else {
            timeConvert = convertTimestampToHoursMinutes(
              item?.time,
              0,
              offsetValue
            );
          }

          categories.push(timeConvert);
        });
      }

      return categories;
    },

    handlerPrecipitation(value) {
      const categories = this.generateCategoriesTime(value);
      const data = this.generateSeriesData(value);

      const maxData = Math.max(...data) + 10;
      const minData = Math.min(...data);
      this.series = [
        {
          name: "Pressure",
          data: data,
        },
      ];
      this.chartOptions = {
        ...this.chartOptions,
        xaxis: {
          ...this.chartOptions.xaxis,
          categories: categories,
        },
        yaxis: {
          ...this.chartOptions.yaxis,

          max: maxData,
          // min: Math.round(minData),
          // max: Math.round(maxData),
        },
      };
    },
  },
};
</script>
<style lang="scss"></style>
