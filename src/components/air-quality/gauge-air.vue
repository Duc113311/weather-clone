<template>
  <div class="w-full">
    <!--  -->
    <div class="flex items-center text-left gap-2 pad-t-b">
      <IcTitleAir class="icon-svg"></IcTitleAir>
      <div class="txt_medium_14" v-if="breadcumsObject.country_key === 'vn'">
        <span v-if="breadcumsObject?.city && !breadcumsObject?.district">{{
          $t(`{city}_Air_Quality`, {
            city: convertToLowCase(breadcumsObject.city),
          })
        }}</span>
        <span
          v-if="
            breadcumsObject?.city &&
            breadcumsObject?.district &&
            !breadcumsObject?.ward
          "
        >
          {{
            $t(`{city}_Air_Quality`, {
              city: convertToLowCase(breadcumsObject.district),
            })
          }}
        </span>
        <span
          v-if="
            breadcumsObject?.city &&
            breadcumsObject?.district &&
            breadcumsObject?.ward
          "
        >
          {{
            $t(`{city}_Air_Quality`, {
              city: convertToLowCase(breadcumsObject.ward),
            })
          }}
        </span>
      </div>
      <div class="txt_medium_14" v-else>
        <span v-if="breadcumsObject?.state && !breadcumsObject?.county">{{
          $t(`{city}_Air_Quality`, {
            city: $t(`${breadcumsObject?.state}`),
          })
        }}</span>
        <span
          v-if="
            breadcumsObject?.state &&
            breadcumsObject?.county &&
            !breadcumsObject?.cities
          "
          >{{
            $t(`{city}_Air_Quality`, {
              city: $t(`${breadcumsObject?.county}`),
            })
          }}</span
        >

        <span
          v-if="
            breadcumsObject?.state &&
            breadcumsObject?.county &&
            breadcumsObject?.cities
          "
          >{{
            $t(`{city}_Air_Quality`, {
              city: $t(`${breadcumsObject?.cities}`),
            })
          }}</span
        >
      </div>
    </div>
    <div class="w-full h-full overflow-hidden">
      <!--  -->
      <div class="arc-progress">
        <!-- SVG Progress Bar -->
        <svg class="progress" viewBox="0 0 120 120">
          <!-- Background Arc -->
          <path
            class="progress-bg"
            d="M20,100 A50,50 0 1,1 100,100"
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
          />
          <!-- Progress Arc -->
          <path
            ref="progressPath"
            class="progress-bar"
            d="M20,100 A50,50 0 1,1 100,100"
            fill="none"
            stroke="url(#gradient)"
            stroke-linecap="round"
            :stroke-dasharray="314"
            :stroke-dashoffset="314 - (animatedProgress / 100) * 314"
          />

          <!-- White Dot -->
          <circle
            class="progress-dot"
            :cx="dotPosition.x"
            :cy="dotPosition.y"
            r="6"
            fill="white"
          />

          <!-- Inner Thin Line with Padding -->
          <path
            class="inner-line"
            :d="innerLinePath"
            fill="none"
            stroke="white"
            stroke-width="1"
          />
          <!-- Gradient Definition -->
          <defs>
            <linearGradient id="gradient">
              <stop offset="0%" stop-color="#2BE26B" />
              <!-- 0-50 -->
              <stop offset="16.67%" stop-color="#F4D43F" />
              <!-- 51-100 -->
              <stop offset="33.33%" stop-color="#F3A432" />
              <!-- 101-150 -->
              <stop offset="50%" stop-color="#C74326" />
              <!-- 151-200 -->
              <stop offset="70%" stop-color="#C32789" />
              <!-- 201-300 -->
              <stop offset="100%" stop-color="#560D6F" />
            </linearGradient>
          </defs>
          <!-- Knob -->
        </svg>
        <!-- Text in Center -->
        <div class="progress-text">
          <p
            class="w-[164px] text-center txt_regular_14"
            :style="{ color: progressColor(airQualityValue) }"
          >
            {{ convertAirIndexName(airQualityValue) }}
          </p>
          <p class="txt_medium_24 mt-2 color_f9f9f9">{{ airQualityValue }}</p>
          <p class="color_BFBFBF">({{ $t("AQI") }})</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getAirSummaryName } from "@/utils/converValue";
import IcTitleAir from "../icons/IcTitleAir.vue";
import { mapGetters } from "vuex";
import { removeAccentsUnicode } from "@/utils/coverTextSystem";

export default {
  name: "gauge-air",

  components: {
    IcTitleAir,
  },

  data() {
    return {
      status: "Moderate", // Status text
      animatedProgress: 100, // Progress value that will animate
      radius: 50, // Radius of the progress arc
      strokeWidth: 10, // Stroke width of the progress arc
      padding: 10, // Padding for the inner line
      centerX: 60, // Center X coordinate of the arc
      centerY: 122, // Center Y coordinate of the arc
      gapAngle: 80, // Angle for the gap at the bottom (in degrees)

      progress: 0, // Final progress value (0 to 100)
      radiusDot: 50, // Radius of the arc
      centerXDot: 60, // Center X coordinate of the arc
      centerYDot: 60, // Center Y coordinate of the arc
      strokeWidthDot: 30, // Stroke width of the progress arc

      pathElement: null, // Reference to the path element
    };
  },

  computed: {
    ...mapGetters("commonModule", ["breadcumsObjectGetters"]),
    languageParam() {
      const languageRouter = this.$route.params;
      return Object.keys(languageRouter).length !== 0
        ? languageRouter.language !== "en" && languageRouter.language !== "vi"
          ? "en"
          : languageRouter.language
        : this.$i18n.locale !== "en" && this.$i18n.locale !== "vn"
        ? "en"
        : this.$i18n.locale;
    },
    breadcumsObject() {
      const retrievedArray = JSON.parse(localStorage.getItem("objectBread"));
      const resultData = retrievedArray
        ? retrievedArray
        : this.breadcumsObjectGetters;

      return resultData;
    },
    airQualityValue() {
      return this.$store.state.airQualityModule.apiValue;
    },
    dotPosition() {
      // Kiểm tra sự tồn tại pathElement
      if (!this.pathElement) return { x: 20, y: 100 };

      // Láy tổng chiều dài của đường path pixel đường cong
      // Nửa vòng tròn là 314px
      const pathLength = this.pathElement.getTotalLength();

      // Tính vị trí trên đường path
      const position = (this.airQualityValue / 300) * pathLength;

      // Láy ra tọa độ
      const point = this.pathElement.getPointAtLength(position);

      // Return the x and y coordinates of the dot

      return { x: point.x, y: point.y };
    },
    innerLinePath() {
      // Calculate the radius for the dashed line with padding
      const innerRadius = this.radius - this.padding;

      // Convert gap angle to radians
      const gapRadians = (this.gapAngle * Math.PI) / 180;

      // Calculate the start and end angles for the arc
      const startAngle = Math.PI + gapRadians / 2; // Start slightly above the bottom
      const endAngle = 2 * Math.PI - gapRadians / 2; // End slightly above the bottom

      // Calculate start and end points
      const startX = this.centerX + innerRadius * Math.cos(startAngle);
      const startY = this.centerY + innerRadius * Math.sin(startAngle);
      const endX = this.centerX + innerRadius * Math.cos(endAngle);
      const endY = this.centerY + innerRadius * Math.sin(endAngle);

      // Generate the arc path with a small gap at the bottom
      return `M${startX},${startY} A${innerRadius},${innerRadius} 0 1,1 ${endX},${endY}`;
    },
  },

  mounted() {
    this.pathElement = this.$refs.progressPath;
    // Animate the progress from 0 to the target value
    const duration = 2000; // Animation duration in ms
    const fps = 60; // Frames per second
    const steps = (duration / 1000) * fps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      // this.animatedProgress = (this.progress / steps) * currentStep;

      if (currentStep >= steps) {
        clearInterval(interval); // Stop the animation when done
        // this.animatedProgress = this.progress; // Ensure it ends at the exact value
      }
    }, 1000 / fps);
  },
  methods: {
    convertAirIndexName(val) {
      return getAirSummaryName(val);
    },

    progressColor(value) {
      console.log("value-air", value);

      if (value <= 50) return "#41E11F";
      if ((50 <= value) & (value <= 100)) return "#3DE177";
      if ((101 <= value) & (value <= 150)) return "#F68421";
      if ((151 <= value) & (value <= 200)) return "#F42E1C";
      if ((201 <= value) & (value <= 300)) return "#8C4396";
      return "#781125"; // Giá trị phần trăm từ 90 đến 100
    },

    convertToSlugCity(str) {
      const slug = removeAccentsUnicode(str);
      return slug
        .toLowerCase() // Chuyển thành chữ thường
        .replace(/\s+/g, ""); // Xóa khoảng trắng
    },

    convertToLowCase(value) {
      const normalizedStr = value
        .normalize("NFD") // Chuyển chuỗi sang dạng tổ hợp Unicode
        .replace(/[\u0300-\u036f]/g, ""); // Loại bỏ các dấu

      return normalizedStr;
    },
  },
};
</script>
<style lang="scss">
.arc-progress {
  position: relative;
  width: 100%;
  height: 100%;
}
.progress {
  width: 100%;
  height: 100%;
}
.progress-bg {
  stroke-width: 8;
}
.progress-bar {
  stroke-width: 8;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.5s ease;
}
.progress-knob {
  transition: cx 0.5s ease, cy 0.5s ease;
}
.progress-text {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}
.progress-text h1 {
  font-size: 2rem;
  margin: 0;
}
.progress-text span {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
}

.inner-line {
  stroke-width: 1; /* Thin white line */
  stroke-dasharray: 4; /* Dashed effect */
  opacity: 0.3; /* Slightly transparent */
}

.progress-dot {
  transition: cx 0.3s ease, cy 0.3s ease; /* Smooth movement of the dot */
}
</style>
