<template>
  <div class="w-full h-auto">
    <header>
      <!-- Nội dung sẽ được chèn vào đây -->

      <div class="text-left pad-t-b">
        <slot name="header"></slot>
      </div>
    </header>

    <div class="">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "ItemComponent",
};
</script>
<style lang="scss"></style>
