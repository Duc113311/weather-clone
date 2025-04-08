<template>
  <div class="w-full">
    <BaseComponent>
      <template v-slot:header>
        <div class="flex items-center text-left gap-2">
          <IcTitleCloudCover class="icon-svg"></IcTitleCloudCover>
          <p class="txt_medium_14">{{ $t("Cloud_cover") }}</p>
        </div>
      </template>
      <div class="w-full h-[182px]">
        <!--  -->
        <div class="w-full h-full flex justify-between gap-2">
          <div class="text-left h-[100px]">
            <p class="txt_bold_24">
              {{ Math.round(currentlyData.cloudCover * 100) }}%
            </p>
            <p class="txt_regular_17 text-left">
              {{
                convertCapitalizeWords(
                  $t(`${currentlyData?.summary.replace(/\s+/g, "_")}`)
                )
              }}
            </p>
            <div class="text-left w-full pt-2 pb-2 txt_regular_12">
              <p>
                {{ renderTitleByIconHouse(currentlyData?.icon, dailyOneData) }}
              </p>
            </div>
          </div>
          <div class="h-full flex justify-center items-center">
            <IcCloudyHome></IcCloudyHome>
          </div>
        </div>
      </div>
    </BaseComponent>
  </div>
</template>
<script>
import IcTitleCloudCover from "@/components/icons/IcTitleCloudCover.vue";
import BaseComponent from "../baseComponent.vue";
import IcCloudyHome from "@/components/icons/IcCloudyHome.vue";
import { mapGetters } from "vuex";
import { capitalizeWords, getTitleIconByHouse } from "@/utils/converValue";

export default {
  name: "cloud-cover-page",

  components: {
    IcTitleCloudCover,
    BaseComponent,
    IcCloudyHome,
  },

  computed: {
    ...mapGetters("weatherModule", ["currentlyGetters", "dailyOneGetters"]),
    listHourly() {
      return this.$store.state.weatherModule.hourly24h;
    },
    currentlyData() {
      return this.currentlyGetters;
    },

    dailyOneData() {
      return this.dailyOneGetters;
    },
  },

  methods: {
    convertCapitalizeWords(value) {
      return capitalizeWords(value);
    },

    renderTitleByIconHouse(value, data) {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;

      return getTitleIconByHouse(value, data, unitSetting);
    },
  },
};
</script>
<style lang=""></style>
