<template>
  <canvas ref="canvas" :width="canvasWidth" :height="canvasHeight"></canvas>
</template>
<script>
export default {
  // name: "global-moon-icon",

  props: {
    illuminatePercent: {
      type: String,
      default: "",
    },
    isClipFromStart: {
      type: Boolean,
      default: true,
    },
    canvasWidth: {
      type: Number,
      default: 33,
    },
    canvasHeight: {
      type: Number,
      default: 33,
    },
  },

  data() {
    return {};
  },

  mounted() {
    this.draw();
  },

  watch: {
    illuminatePercent: "draw",
    isClipFromStart: "draw",
    canvasWidth: "draw",
    canvasHeight: "draw",
  },

  methods: {
    createPath() {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext("2d");

      const path = new Path2D();
      const percent = this.illuminatePercent;
      const width = canvas.width;
      const height = canvas.height;

      if (this.isClipFromStart) {
        path.moveTo(0, 0);
        path.lineTo(width / 2, 0);
        let cubicWidthPath;
        if (percent <= 50) {
          cubicWidthPath = width / 2 - ((width / 1.5) * (50 - percent)) / 50;
        } else {
          cubicWidthPath = width / 2 + ((width / 1.5) * (percent - 50)) / 50;
        }
        path.bezierCurveTo(
          cubicWidthPath,
          0,
          cubicWidthPath,
          height,
          width / 2,
          height
        );
        path.lineTo(0, height);
      } else {
        path.moveTo(width, 0);
        path.lineTo(width / 2, 0);
        let cubicWidthPath;
        if (percent <= 50) {
          cubicWidthPath = width / 2 + ((width / 1.5) * (50 - percent)) / 50;
        } else {
          cubicWidthPath = width / 2 - ((width / 1.5) * (percent - 50)) / 50;
        }
        path.bezierCurveTo(
          cubicWidthPath,
          0,
          cubicWidthPath,
          height,
          width / 2,
          height
        );
        path.lineTo(width, height);
      }
      path.closePath();

      return path;
    },
    draw() {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext("2d");

      const img = new Image();
      img.src = require("../../../assets/images/svg_v2/ic_moon_phase_light.svg");

      img.onload = () => {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw background image
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Create and fill the path
        const path = this.createPath();

        const moonImg = new Image();
        moonImg.src = require("../../../assets/images/svg_v2/ic_moon_phase_light_new.svg");

        moonImg.onload = () => {
          // Create an off-screen canvas to draw the SVG
          const patternCanvas = document.createElement("canvas");
          patternCanvas.width = canvas.width;
          patternCanvas.height = canvas.height;
          const patternCtx = patternCanvas.getContext("2d");

          // Draw the SVG onto the off-screen canvas
          patternCtx.drawImage(
            moonImg,
            0,
            0,
            patternCanvas.width,
            patternCanvas.height
          );

          // Create a pattern from the off-screen canvas
          const pattern = ctx.createPattern(patternCanvas, "repeat");
          if (pattern) {
            ctx.fillStyle = pattern;
            ctx.fill(path);
          }
        };
      };
    },
  },
};
</script>
<style lang="scss"></style>
