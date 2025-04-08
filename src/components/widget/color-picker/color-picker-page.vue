<template>
  <div class="w-full h-full text-black">
    <div class="demo-color-block">
      <span class="demonstration">With default value</span>
      <el-color-picker :show-alpha="true" v-model="color" />
    </div>
  </div>
</template>
<script>
export default {
  name: "color-picker-page.vue",

  data() {
    return {
      color: "#ff0000",
    };
  },
};
</script>
<style lang="scss">
.demo-color-block {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.demo-color-block .demonstration {
  margin-right: 16px;
}
</style>
