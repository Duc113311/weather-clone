<template>
  <div
    class="chart-container-tempt flex p-chart-avg w-[1550px] pt-4 pb-4 pl-10"
  >
    <div
      class="w-[100px] flex items-center gap-2"
      v-for="(item, index) in extremesDataRenderTimeRender"
      :key="index"
    >
      <el-tooltip effect="dark" placement="bottom-end">
        <template #content>
          <div class="w-[200px]">
            <div>Hello</div>
          </div>
        </template>
        <div class="txt_regular_12">
          {{ convertDateTime(item) }}
        </div>
      </el-tooltip>
    </div>
  </div>
</template>
<script>
import {
  formatDateToDayMonth,
  formatTo12HourTimeTide,
  formatTo24HourTimeTide,
} from "@/utils/converValue";
import { mapGetters } from "vuex";

export default {
  name: "label-time-month",

  computed: {
    ...mapGetters("tideModule", [
      "extremesDataFullGetters",
      "extremesDataGetters",
      "tideDataGetters",
    ]),
    extremesDataRenderTimeRender() {
      const data = this.extremesDataFullGetters;
      const objectClone = { ...data[0] };

      const timeClone = objectClone.datetime;
      const listDataTime = data.map((el) => {
        return el.datetime;
      });
      return [timeClone, ...listDataTime] || [];
    },

    extremesDataRenderTime() {
      const data = this.extremesDataFullGetters;
      const objectClone = { ...data[0] };
      console.log("data-extreme", data);

      return [objectClone, ...data] || [];
    },
  },

  methods: {
    convertDateTime(value) {
      // const unitSetting = this.$store.state.commonModule.objectSettingSave;
      return formatDateToDayMonth(value);
    },

    shouldShowTime(index) {
      const current = this.convertDateTime(
        this.extremesDataRenderTimeRender[index]
      );
      const prev = this.convertDateTime(
        this.extremesDataRenderTimeRender[index - 1]
      );

      if (index === 0) return true;
      return current !== prev;
    },
  },
};
</script>
<style lang=""></style>
