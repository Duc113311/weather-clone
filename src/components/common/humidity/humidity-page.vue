<template>
  <div class="w-full">
    <BaseComponent>
      <template v-slot:header>
        <div class="flex items-center text-left gap-2">
          <IcTitleCloudCover class="icon-svg"></IcTitleCloudCover>
          <p class="txt_medium_14">Humidity</p>
        </div>
      </template>
      <div class="w-full h-[185px]">
        <!--  -->
        <div class="w-full flex justify-between items-center">
          <div>
            <div>
              <p>71%</p>
              <span>Relative Humidity</span>
            </div>
            <div>
              <p>42</p>
              <span>Relative Humidity</span>
            </div>
          </div>

          <div></div>
        </div>

        <div>
          <p>Normal</p>
          <span
            >Steady at 74%. Tomorrow's humidity levels are expected to be
            similar to today.</span
          >
        </div>
      </div>
    </BaseComponent>
  </div>
</template>
<script>
import IcTitleCloudCover from "@/components/icons/IcTitleCloudCover.vue";
import BaseComponent from "../baseComponent.vue";
import { mapGetters } from "vuex";

export default {
  name: "humidity-page",

  components: {
    IcTitleCloudCover,
    BaseComponent,
  },

  computed: {
    ...mapGetters("weatherModule", ["currentlyGetters"]),
    listHourly() {
      return this.$store.state.weatherModule.hourly24h;
    },
    currentlyData() {
      return this.currentlyGetters;
    },
  },

  methods: {},
};
</script>
<style lang=""></style>
