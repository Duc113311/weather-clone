<template>
  <div class="w-full pad-l-r-20 pad-b pad-t">
    <div class="flex justify-start gap-2">
      <div
        class="bg-btn-hover color_f9f9f9 color_fffff_10 txt_regular_14 pad-tab bor-c bor-radios-big cursor-pointer w-[150px]"
        v-for="(item, index) in listTab"
        :class="{ 'active-tab': activeIndex === index }"
        :key="index"
        @click="onClickTabChart(index)"
      >
        <span>{{ $t(item) }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "tab-navigation",
  components: {},
  data() {
    return {
      listTab: ["Today", "UV", "Wind_speed", "Humidity", "Pressure"],
      activeIndex: 0,
    };
  },

  methods: {
    onClickTabChart(value) {
      this.activeIndex = value;
      this.$emit("onChangeTabChart", value);
    },
  },
};
</script>
<style lang="scss">
.item-tab {
  flex: 1;
  min-width: 0; // This prevents flex items from overflowing
  margin-right: 10px;
  font-size: 12px;

  &:last-child {
    margin-right: 0px;
  }
}

.active-tab {
  background-color: #ffffff;
  color: #0062f5;
}
</style>
