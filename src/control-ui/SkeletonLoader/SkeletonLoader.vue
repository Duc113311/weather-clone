<template>
  <div :class="[bgClass, loaderClass, 'relative overflow-hidden']">
    <div
      class="shimmer absolute top-0 right-0 bottom-0 left-0 z-40"
      :style="shimmerStyle"
    ></div>
    <slot />
  </div>
</template>

<script>
const LOADER_TYPES = { rectangle: "rectangle", circle: "circle" };

const LOADER_CSS_CLASSES = {
  // [LOADER_TYPES.rectangle]: "bor-radios-big",
  [LOADER_TYPES.circle]: "rounded-full",
};

const SHIMMER_COLOR = "#4A7A9F";

function isHexColor(hexColor) {
  const hex = hexColor.replace("#", "");
  return (
    typeof hexColor === "string" &&
    hexColor.startsWith("#") &&
    hex.length === 6 &&
    !isNaN(Number("0x" + hex))
  );
}

function hexToRgb(hex) {
  const rgb = hex.match(/\w\w/g)?.map((x) => parseInt(x, 16));
  return rgb ? rgb.join(", ") : "";
}

export default {
  props: {
    type: {
      type: String,
      default: LOADER_TYPES.rectangle,
      validator(value) {
        return Object.values(LOADER_TYPES).includes(value);
      },
    },
    bgClass: {
      type: String,
      default: "bg-load",
    },
    cssClass: {
      type: String,
      default: "",
    },
    shimmerColor: {
      type: String,
      default: SHIMMER_COLOR,
    },
  },
  computed: {
    shimmerStyle() {
      const rgb = isHexColor(this.shimmerColor)
        ? hexToRgb(this.shimmerColor)
        : SHIMMER_COLOR;
      return {
        backgroundImage: `linear-gradient(90deg, rgba(${rgb}, 0) 0%, rgba(${rgb}, 0.2) 20%, rgba(${rgb}, 0.5) 60%, rgba(${rgb}, 0))`,
      };
    },
    loaderClass() {
      return this.cssClass ? this.cssClass : LOADER_CSS_CLASSES[this.type];
    },
  },
};
</script>

<style scoped>
.shimmer {
  transform: translateX(-100%);
  animation: shimmer 1.4s infinite;
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}

.bg-load {
  background-color: rgb(84 85 124 / 64%);
}
</style>
