<template>
  <div class="w-full">
    <BaseComponent>
      <template v-slot:header>
        <div class="flex items-center text-left gap-2">
          <IcMoonphase></IcMoonphase>
          <p>Moonphase</p>
        </div>
      </template>
      <div class="w-full h-[163px]">
        <!--  -->
        <canvas ref="sunPathCanvas" width="300" height="200"></canvas>
      </div>
    </BaseComponent>
  </div>
</template>
<script>
import BaseComponent from "../baseComponent.vue";
import ApexCharts from "vue3-apexcharts";
import { onMounted, ref } from "vue";
import IcMoonphase from "@/components/icons/IcMoonphase.vue";

export default {
  name: "moon-page",
  components: {
    BaseComponent,
    IcMoonphase,
  },
  setup() {
    const sunPathCanvas = ref(null);

    const drawSunPath = () => {
      const canvas = sunPathCanvas.value;
      const ctx = canvas.getContext("2d");

      // Xóa bất kỳ nội dung nào trước đó
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Tạo gradient cho nền đường cong
      const gradient = ctx.createLinearGradient(0, 50, 0, 200);
      gradient.addColorStop(0, "#FFD700"); // Màu vàng
      gradient.addColorStop(1, "#001f3f"); // Màu xanh đậm

      // Vẽ gradient nền
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Thiết lập màu và kiểu cho đường cong quỹ đạo mặt trời
      ctx.strokeStyle = "#FFD700"; // Màu đường cong
      ctx.lineWidth = 3;

      // Bắt đầu vẽ đường cong (quỹ đạo mặt trời)
      ctx.beginPath();
      ctx.moveTo(30, 150); // Điểm bắt đầu (mặt trời mọc)
      ctx.quadraticCurveTo(150, 50, 270, 150); // Đỉnh đường cong và điểm kết thúc (mặt trời lặn)
      ctx.stroke();

      // Vẽ đường ngang (đường hoàng hôn)
      ctx.strokeStyle = "#FFFFFF";
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(0, 150);
      ctx.lineTo(300, 150);
      ctx.stroke();

      // Vẽ biểu tượng mặt trời
      const sunRadius = 20;
      const sunX = 150; // Tọa độ X của mặt trời (tại đỉnh đường cong)
      const sunY = 70; // Tọa độ Y của mặt trời

      ctx.fillStyle = "#FFD700";
      ctx.beginPath();
      ctx.arc(sunX, sunY, sunRadius, 0, Math.PI * 2, true); // Mặt trời hình tròn
      ctx.fill();

      // Vẽ thời gian bình minh và hoàng hôn
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "14px Arial";
      ctx.fillText("05:24", 10, 170);
      ctx.fillText("16:48", 250, 170);
      ctx.fillText("Sunrise", 10, 190);
      ctx.fillText("Sunset", 250, 190);
    };

    onMounted(() => {
      drawSunPath();
    });

    return {
      sunPathCanvas,
    };
  },

  data() {
    return {};
  },
};
</script>
<style lang="scss"></style>
