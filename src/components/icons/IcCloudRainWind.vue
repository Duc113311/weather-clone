<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.99936 14.899C3.2564 14.1399 2.69593 13.2217 2.3604 12.214C2.02486 11.2062 1.92307 10.1353 2.06272 9.08232C2.20238 8.02938 2.57982 7.02202 3.16646 6.13655C3.7531 5.25109 4.53355 4.51074 5.44869 3.97157C6.36384 3.43241 7.38969 3.10857 8.44853 3.0246C9.50737 2.94062 10.5714 3.09871 11.5601 3.48688C12.5488 3.87505 13.4362 4.48313 14.1551 5.26506C14.874 6.04698 15.4055 6.98225 15.7094 8.00002H17.4994C18.4649 7.99991 19.4048 8.31034 20.1804 8.88546C20.9559 9.46058 21.5259 10.2699 21.8061 11.1938C22.0864 12.1178 22.062 13.1074 21.7367 14.0164C21.4113 14.9254 20.8022 15.7057 19.9994 16.242M9.19971 22L12.1997 15M8.99951 13L5.99951 20M16.9995 13L13.9995 20"
      stroke="var(--color-txt)"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script>
export default {
  name: "Ic-Cloud-Rain-Wind",
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
