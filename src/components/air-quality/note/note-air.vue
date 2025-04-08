<template>
  <div
    class="w-full md:flex md:flex-col grid grid-cols-2 gap-8 pad-t-b-10 pad-r-l-10"
  >
    <div class="flex items-center text-left gap-2">
      <div class="bg-Good rounded-full w-[10px] h-[10px]"></div>
      <div class="text-left">
        <p class="txt_regular_12">{{ $t("Good") }}</p>
      </div>
    </div>
    <div class="flex items-center text-left gap-2">
      <div class="bg-Moderate rounded-full w-[10px] h-[10px]"></div>
      <div class="text-left">
        <p class="txt_regular_12">{{ $t("Moderate") }}</p>
      </div>
    </div>
    <div class="flex items-center text-left gap-2">
      <div class="w-[13px] h-[10px]">
        <div class="bg-Sensitive-Groups rounded-full w-full h-full"></div>
      </div>
      <div class="text-left">
        <p class="txt_regular_12">{{ $t("Unhealthy_for_Sensitive_Groups") }}</p>
      </div>
    </div>
    <div class="flex items-center text-left gap-2">
      <div class="bg-Unhealthy rounded-full w-[10px] h-[10px]"></div>
      <div class="text-left">
        <p class="txt_regular_12">{{ $t("Unhealthy") }}</p>
      </div>
    </div>
    <div class="flex items-center text-left gap-2">
      <div class="bg-Very-Unhealthy rounded-full w-[10px] h-[10px]"></div>
      <div class="text-left">
        <p class="txt_regular_12">{{ $t("Very_Unhealthy") }}</p>
      </div>
    </div>
    <div class="flex items-center text-left gap-2">
      <div class="bg-Hazardous rounded-full w-[10px] h-[10px]"></div>
      <div class="text-left">
        <p class="txt_regular_12">{{ $t("Hazardous") }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "note-air",

  data() {
    return {};
  },
};
</script>
<style lang="scss">
.bg-Good {
  background-color: #2be26b;
}

.bg-Moderate {
  background-color: #f4d43f;
}

.bg-Sensitive-Groups {
  background-color: #f3a432;
}

.bg-Unhealthy {
  background-color: #c63e20;
}
.bg-Very-Unhealthy {
  background-color: #c01982;
}

.bg-Hazardous {
  background-color: #4f0369;
}
</style>
