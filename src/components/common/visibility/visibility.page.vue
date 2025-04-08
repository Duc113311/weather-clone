<template>
  <div class="w-full">
    <BaseComponent>
      <template v-slot:header>
        <div class="flex items-center text-left gap-2">
          <IcTitleCloudCover class="icon-svg"></IcTitleCloudCover>
          <p class="txt_medium_14">Visibility</p>
        </div>
      </template>
      <div class="w-full h-[180px]">
        <!--  -->
      </div>
    </BaseComponent>
  </div>
</template>
<script>
import IcTitleCloudCover from "@/components/icons/IcTitleCloudCover.vue";
import BaseComponent from "../baseComponent.vue";

export default {
  name: "visibility-page",

  components: {
    IcTitleCloudCover,
    BaseComponent,
  },
};
</script>
<style lang=""></style>
