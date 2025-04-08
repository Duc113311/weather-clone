<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 11V16M12 16V21M12 16L7.5 13.5M12 16L16.5 18.5M12 16L16.5 13.5M12 16L7.5 18.5M20 16.607C21.494 16.022 23 14.689 23 12C23 8 19.667 7 18 7C18 5 18 1 12 1C6 1 6 5 6 7C4.333 7 1 8 1 12C1 14.689 2.506 16.022 4 16.607"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script>
export default {
  name: "Ic-Snow-Map",

  props: {
    width: {
      type: String,
      default: "24", // default value if no width is provided
    },
    height: {
      type: String,
      default: "24", // default value if no height is provided
    },
  },
};
</script>
<style lang=""></style>
