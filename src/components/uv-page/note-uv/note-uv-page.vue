<template>
  <div
    class="w-full md:flex md:flex-col grid grid-cols-2 gap-8 pad-t-b-10 pad-r-l-10"
  >
    <div class="flex items-center text-left gap-2">
      <div class="bg-Low rounded-full w-[10px] h-[10px]"></div>
      <div class="text-left">
        <p class="txt_medium_14">{{ $t("Low") }}</p>
        <p class="txt_regular_12">0-2</p>
      </div>
    </div>
    <div class="flex items-center text-left gap-2">
      <div class="bg-Moderate rounded-full w-[10px] h-[10px]"></div>
      <div class="text-left">
        <p class="txt_medium_14">{{ $t("Moderate") }}</p>
        <p class="txt_regular_12">3-5</p>
      </div>
    </div>
    <div class="flex items-center text-left gap-2">
      <div class="bg-High rounded-full w-[10px] h-[10px]"></div>
      <div class="text-left">
        <p class="txt_medium_14">{{ $t("High") }}</p>
        <p class="txt_regular_12">6-7</p>
      </div>
    </div>
    <div class="flex items-center text-left gap-2">
      <div class="bg-Very-Heigh rounded-full w-[10px] h-[10px]"></div>
      <div class="text-left">
        <p class="txt_medium_14">{{ $t("Very_High") }}</p>
        <p class="txt_regular_12">8-10</p>
      </div>
    </div>
    <div class="flex items-center text-left gap-2">
      <div class="bg-Extreme rounded-full w-[10px] h-[10px]"></div>
      <div class="text-left">
        <p class="txt_medium_14">{{ $t("Extreme") }}</p>
        <p class="txt_regular_12">> 10</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "note-uv-page",
};
</script>
<style lang="scss">
.bg-Low {
  background-color: #389311;
}

.bg-Moderate {
  background-color: #f3e52b;
}

.bg-High {
  background-color: #ee621d;
}

.bg-Very-Heigh {
  background-color: #cf2526;
}
.bg-Extreme {
  background-color: #9064cb;
}
</style>
