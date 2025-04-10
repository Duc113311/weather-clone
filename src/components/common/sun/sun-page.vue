<template>
  <div class="w-full">
    <BaseComponent :isShowPad="false">
      <template v-slot:header>
        <div class="flex items-center text-left gap-2">
          <IcTitleSun class="icon-svg"></IcTitleSun>
          <p class="txt_medium_14">{{ $t("Suns") }}</p>
        </div>
      </template>
      <div
        v-if="paramDailyOne && Object.keys(paramDailyOne).length > 0"
        class="w-full lg:h-[212px] h-[210px]"
      >
        <!--  -->
        <div class="sun-rise-progression w-full relative">
          <div
            class="flex items-center justify-between w-full absolute bottom-24"
          >
            <div class="flex flex-col gap-2 items-center">
              <div class="flex items-center gap-1">
                <p class="txt_medium_14 pl-2 text-center">
                  {{
                    convertTimeUnit(paramDailyOne?.sunriseTime).split(" ")[0]
                  }}
                </p>
                <span
                  class="txt_regular_14"
                  v-if="convertTimeUnit(paramDailyOne?.sunriseTime)"
                  >{{
                    convertTimeUnit(paramDailyOne?.sunriseTime).split(" ")[1]
                  }}</span
                >
              </div>
              <span class="txt_regular_12 pl-2">{{ $t("Sunrise") }}</span>
            </div>
            <!--  -->
            <div class="flex flex-col gap-2 items-center">
              <div class="flex items-center gap-1 pr-2">
                <p class="txt_medium_14 text-center">
                  {{ convertTimeUnit(paramDailyOne?.sunsetTime).split(" ")[0] }}
                </p>
                <span
                  class="txt_regular_14"
                  v-if="convertTimeUnit(paramDailyOne?.sunsetTime)"
                  >{{
                    convertTimeUnit(paramDailyOne?.sunsetTime).split(" ")[1]
                  }}</span
                >
              </div>
              <span class="txt_regular_12 pr-2">{{ $t("Sunset") }}</span>
            </div>
          </div>
          <canvas
            id="draw_progression"
            class="w-full"
            height="400"
            width="700"
          ></canvas>
        </div>
      </div>
      <div v-else class="w-full h-[211px]">
        <SkeletonLoader class="w-full h-full"> </SkeletonLoader>
      </div>
    </BaseComponent>
  </div>
</template>
<script>
import BaseComponent from "../baseComponent.vue";
import {
  convertTime12hTimeZoneNotNowUnit,
  convertTime24hTimeZoneNotNow,
  convertTimestamp12hSun,
  convertTimestamp24hSun,
  convertTimeSun,
} from "../../../utils/converValue.js";
import { mapGetters } from "vuex";
import {
  convertTimestampToHoursMinutes,
  convertTimestampToHoursMinutes12,
} from "../../../utils/converValue.js";
import IcTitleSun from "@/components/icons/IcTitleSun.vue";
import SkeletonLoader from "@/control-ui/SkeletonLoader/SkeletonLoader.vue";
export default {
  name: "sun-page",
  components: {
    BaseComponent,
    IcTitleSun,
    SkeletonLoader,
  },

  data() {
    return {
      sunSize: 50,
      percentProgression: 50,
      imgTop: require("../../../assets/images/svg_v2/ic_Sun.svg"),
      imgBottom: require("../../../assets/images/svg_v2/ic_sun_night.svg"),
    };
  },

  computed: {
    ...mapGetters("weatherModule", [
      "currentlyGetters",
      "dailyOneGetters",
      "locationOffsetGetters",
    ]),

    paramDailyOne() {
      return this.dailyOneGetters;
    },

    timeHourly() {
      const timeValue = this.$store.state.weatherModule.currently;

      const offsetValue =
        this.$store.state.weatherModule.locationOffset?.offset;

      const timezoneValue =
        this.$store.state.weatherModule?.locationOffset?.timezone;
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      return Math.round(
        (this.convertTimeSunRender(
          timeValue.time,
          timezoneValue,
          offsetValue,
          unitSetting.activeTime_save
        ) *
          100) /
          24
      );
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.createProgressionSin();
    });
  },

  methods: {
    convertTimeSunRender(timeValue, timezoneValue, offsetValue, unitSetting) {
      return convertTimeSun(timeValue, timezoneValue, offsetValue, unitSetting);
    },
    convertTimeUnit(val) {
      const offsetValue =
        this.$store.state.weatherModule.locationOffset?.offset;

      const timezoneValue =
        this.$store.state.weatherModule.locationOffset.timezone;

      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      if (unitSetting.activeTime_save === "12h") {
        return convertTime12hTimeZoneNotNowUnit(
          val,
          1,
          offsetValue,
          timezoneValue
        );
      } else {
        return convertTime24hTimeZoneNotNow(val, 1, offsetValue, timezoneValue);
      }
    },
    async createProgressionSin() {
      if (
        !this.paramDailyOne ||
        Object.keys(this.paramDailyOne).length === 0 ||
        !this.timeHourly ||
        !this.imgTop ||
        !this.imgBottom
      ) {
        console.warn("🚫 Thiếu dữ liệu, không vẽ canvas");
        return;
      }
      // Lấy canvas gốc và context của nó
      var canvas = document.getElementById("draw_progression");
      if (!canvas) {
        console.warn("🚫 Không tìm thấy canvas");
        return;
      }
      var ctx = canvas.getContext("2d");

      // Khởi tạo tiếp 2 thằng con
      var canvasUpper = document.createElement("canvas");
      canvasUpper.width = canvas.width; // Chiều rộng lấy theo canvas gốc
      canvasUpper.height = canvas.height; // Chiều cao tương tự
      var ctxUpper = canvasUpper.getContext("2d");

      // Tạo thằng con tiếp theo
      var canvasDowner = document.createElement("canvas");
      canvasDowner.width = canvas.width;
      canvasDowner.height = canvas.height;
      var ctxDowner = canvasDowner.getContext("2d");

      // Tạo đường path

      var path = new Path2D();
      path.moveTo(-100, canvas.height + 200); // Di chuyển ra tọa độ này
      var sunPosX = []; // Lưu trữ tọa độ x
      var sunPosY = []; // Lưu trữ tọa độ y
      let i = 0;
      while (i < canvas.width + 5) {
        const wx = i;
        const factor =
          (1 - Math.sin(((i / canvas.width) * 2 - 0.5) * Math.PI)) / 2;
        const wy = factor * canvas.height * 0.7 + canvas.height * 0.15;
        path.lineTo(wx, wy);
        sunPosX.push(wx);
        sunPosY.push(wy);
        i += 5;
      }
      path.lineTo(canvas.width + 100, canvas.height + 100);
      path.closePath(); // Đóng đường path

      ctxUpper.clearRect(0, 0, canvas.width, canvas.height);
      ctxDowner.clearRect(0, 0, canvas.width, canvas.height);

      ctx.clearRect(1, 0, canvas.width, canvas.height);

      let innerGradient = ctx.createLinearGradient(
        0,
        canvas.height * 0.15, // Bắt đầu từ đỉnh quỹ đạo
        0,
        canvas.height * 0.6 // Kéo dài đến đáy canvas
      );

      innerGradient.addColorStop(0, "rgba(241, 217, 80, 0.4)"); // Vàng nhạt đậm hơn ở trên
      innerGradient.addColorStop(0.5, "rgba(241, 217, 80, 0.2)"); // Trung bình
      innerGradient.addColorStop(1, "rgba(241, 217, 80, 0)"); // Hoàn toàn trong suốt ở dưới

      // **2️⃣ Áp dụng gradient vào vùng bên trong đường cong**
      ctx.save();
      ctx.fillStyle = innerGradient;
      ctx.fill(path); // Đổ màu vào vùng dưới quỹ đạo
      ctx.restore();

      // **1️⃣ Tạo gradient cho phần dưới quỹ đạo**
      let backgroundGradient = ctx.createLinearGradient(
        0,
        canvas.height * 0.5,
        0,
        canvas.height
      );
      backgroundGradient.addColorStop(0, "rgba(191, 191, 191, 0.6)"); // Xám đậm ở phần trên
      backgroundGradient.addColorStop(0.3, "rgba(191, 191, 191, 0.4)"); // Giảm nhẹ độ đậm
      backgroundGradient.addColorStop(0.6, "rgba(191, 191, 191, 0.02)"); // Mờ dần xuống
      backgroundGradient.addColorStop(1, "rgba(191, 191, 191, 0)"); // Hoàn toàn trong suốt ở cuối

      ctx.fillStyle = backgroundGradient;
      ctx.fillRect(0, canvas.height * 0.6, canvas.width, canvas.height * 0.5); // Phủ nền dưới

      ctxDowner.strokeStyle = "#C5C5C5";
      ctxUpper.strokeStyle = "#F4DA2E";
      ctx.strokeStyle = "#C9C9C9";
      ctxUpper.lineWidth = 5;
      ctxDowner.lineWidth = 5;
      ctx.lineWidth = 4;
      ctxDowner.setLineDash([5, 5]);

      ctxUpper.stroke(path); // Vẽ đường cong
      ctxDowner.stroke(path); // Vẽ đường cong

      ctxDowner.clearRect(0, 0, canvas.width, canvas.height * 0.6);
      ctxUpper.clearRect(0, canvas.height * 0.6, canvas.width, canvas.height);

      ctx.drawImage(canvasDowner, 0, 0); // Vẽ canvas canvasDowner lên ctx
      ctx.drawImage(canvasUpper, 0, 0); // Vẽ canvas canvasUpper lên ctx
      var sunSize = 50;
      var percent = this.timeHourly;
      this.drawSunAt(
        ctx,
        ctxDowner,
        canvasDowner,
        percent,
        sunPosX,
        sunPosY,
        sunSize,
        this.imgTop,
        canvas,
        1
      );

      this.drawSunAt(
        ctx,
        ctxUpper,
        canvasUpper,
        percent,
        sunPosX,
        sunPosY,
        sunSize,
        this.imgBottom,
        canvas,
        2
      );
    },
    drawSunAt(
      ctx,
      ctxNew,
      canvasDowner,
      percent,
      sunPosX,
      sunPosY,
      sunSize,
      drawable,
      canvas,
      number
    ) {
      const posIndex = Math.floor((sunPosY.length * percent) / 100);

      const posX = sunPosX[posIndex];
      const posY = sunPosY[posIndex];

      const img = new Image();
      img.style.width = "220px";
      img.style.height = "220px";
      img.src = drawable;

      img.onload = () => {
        // **1️⃣ Tạo hiệu ứng gradient ánh sáng mặt trời**
        const gradient = ctxNew.createRadialGradient(
          posX,
          posY,
          sunSize / 4, // Tâm gradient
          posX,
          posY,
          sunSize // Bán kính lan tỏa
        );

        if (drawable !== "imgBottom") {
          gradient.addColorStop(0, "rgba(255, 204, 0, 0.8)"); // Vàng cam sáng
          gradient.addColorStop(0.4, "rgba(255, 153, 0, 0.5)"); // Màu vàng cam nhạt
          gradient.addColorStop(1, "rgba(255, 102, 0, 0.2)"); // Màu nhạt dần ra ngoài

          // **2️⃣ Vẽ gradient phía sau mặt trời**
          ctxNew.fillStyle = gradient;
          ctxNew.beginPath();
          ctxNew.arc(posX, posY, sunSize * 1.2, 0, Math.PI * 2); // Tạo hình tròn
          ctxNew.fill();
        }

        ctxNew.drawImage(
          img,
          posX - this.sunSize / 2,
          posY - this.sunSize / 2,
          sunSize,
          sunSize
        );
        if (number === 1) {
          ctxNew.clearRect(0, canvas.height * 0.5, canvas.width, canvas.height);
        } else {
          ctxNew.clearRect(0, 0, canvas.width, canvas.height * 0.5);
        }
        // Sau khi vẽ lên canvasDowner, bạn cần vẽ canvasDowner lên canvas chính
        ctx.drawImage(canvasDowner, 0, 0);
        // Thêm đường kẻ trắng
        ctx.beginPath();
        ctx.moveTo(0, canvas.height * 0.6);
        ctx.lineTo(canvas.width, canvas.height * 0.6);
        ctx.stroke();
      };
    },
  },
};
</script>
<style lang="scss"></style>
