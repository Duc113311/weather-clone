<template>
  <div class="w-full">
    <BaseComponent>
      <template v-slot:header>
        <div class="flex items-center text-left gap-2">
          <IcTitleWindSpeed class="icon-svg"></IcTitleWindSpeed>
          <p class="txt_medium_14">Humidity</p>
        </div>
      </template>
      <div class="w-full h-[180px]">
        <!--  -->
      </div>
    </BaseComponent>
  </div>
</template>
<script>
import BaseComponent from "../baseComponent.vue";
import IcTitleWindSpeed from "@/components/icons/IcTitleWindSpeed.vue";

export default {
  name: "wind-speed-page",

  components: {
    IcTitleWindSpeed,
    BaseComponent,
  },
};
</script>
<style lang=""></style>
