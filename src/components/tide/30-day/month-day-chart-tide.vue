<template>
  <div class="w-full h-full">
    <!--  -->
    <BaseComponent :height="heightAuto" :isShowPad="false">
      <template v-slot:header>
        <div class="flex items-center text-left gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 3H18V1H16V3H8V1H6V3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3ZM19 19H5V9H19V19ZM19 7H5V5H19M7 11H12V16H7"
              fill="var(--color-icon-df)"
            />
          </svg>

          <div class="txt_medium_14">
            <!--  -->
            30 Days
          </div>
        </div>
      </template>
      <div class="w-full h-[400px] pl-4 pr-4">
        <!--  -->
        <vue-horizontal
          :displacement="1"
          class="w-full h-full relative horizontal pl-5 pr-5"
        >
          <div class="relative w-full h-full">
            <LabelTimeMonth class="absolute bottom-2"></LabelTimeMonth>
            <ChartTideBarMonth
              class="h-[370px] absolute top-0"
            ></ChartTideBarMonth>
          </div>
        </vue-horizontal>
      </div>
    </BaseComponent>
  </div>
</template>
<script>
import BaseComponent from "@/components/common/baseComponent.vue";
import ChartTideBarMonth from "../chart-tide-bar/chart-tide-bar-month.vue";
import VueHorizontal from "vue-horizontal";
import LabelTimeMonth from "../chart-tide-bar/label-time-month.vue";

export default {
  name: "month-day-chart-tide",

  components: {
    BaseComponent,
    ChartTideBarMonth,
    VueHorizontal,
    LabelTimeMonth,
  },

  data() {
    return {
      heightAuto: "auto",
    };
  },
};
</script>
<style lang="scss"></style>
