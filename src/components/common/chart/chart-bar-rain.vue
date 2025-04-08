<template>
  <div class="chart-container w-[80rem] absolute z-20">
    <div class="chart-wrapper w-full h-full">
      <canvas id="chart_hourly_rain" height="100" ref="canvas"></canvas>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import {
  CategoryScale,
  Chart,
  Filler,
  Legend,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(
  BarController,
  BarElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
  Filler,
  ChartDataLabels
);

export default {
  name: "chart-bar-rain",

  data() {
    return {
      //
    };
  },
  setup() {
    const canvas = ref(null);
    let chartInstance = null;

    onMounted(() => {
      const ctx = canvas.value.getContext("2d");

      // Create the gradient for the bar chart
      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, "rgba(0, 227, 245, 0.5)");
      gradient.addColorStop(1, "rgba(0, 227, 245, 0)");

      // Initialize the chart
      chartInstance = new Chart(ctx, {
        type: "bar", // Change type to "bar"
        data: {
          labels: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
          ],
          datasets: [
            {
              label: "Rain",
              backgroundColor: gradient,
              borderColor: "#00E3F5",
              borderWidth: 1,
              borderRadius: {
                topLeft: 20,
                topRight: 20,
              },
              data: [
                10, 20, 30, 40, 50, 20, 49, 12, 63, 80, 12, 7, 13, 34, 6, 12, 8,
                60, 80, 12, 100, 43, 60, 70, 80, 90, 100,
              ],
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
            },
            tooltip: {
              enabled: true,
            },
            datalabels: {
              display: true,
              align: "top",
              font: {
                size: 10,
              },
              color: "#ffffff",
              formatter: (value) => `${value}%`,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
          },
          scales: {
            x: {
              display: false,
            },
            y: {
              display: false,
              beginAtZero: true,
              max: 100,
            },
          },
          elements: {
            line: {
              tension: 0.5,
            },
          },
        },
      });
    });

    onBeforeUnmount(() => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    });

    return {
      canvas,
    };
  },
};
</script>
