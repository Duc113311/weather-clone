<template>
  <div class="w-full h-full">
    <!--  -->
    <div class="overflow-y-scroll xl:overflow-hidden" :class="[classThemeBg]">
      <div class="w-full h-full relative container-full">
        <div
          class="w-full h-full lg:flex block lg:justify-between xl:items-center text-white"
        >
          <!--  -->
          <div
            class="xl:w-[700px] lg:[w-565px] w-full text-center xl:text-left xl:flex xl:flex-col gap-14 p-20"
          >
            <!--  -->
            <div class="flex flex-col gap-4">
              <div class="txt_line_48">{{ $t("Everything_You_Need") }}</div>
              <div>
                <p class="txt_line_24">
                  {{ $t("Stay_prepared_with_live_updates") }}
                </p>
              </div>
              <div class="txt_line_50 mt-2">
                <a href="http://9weather.com">9Weather.com</a>
              </div>
            </div>
            <!--  -->

            <div class="flex flex-col gap-2">
              <div>
                <p class="txt_line_20">Tải app miễn phí</p>
              </div>
              <div class="flex xl:flex-col justify-center gap-4 mt-4 xl:mt-0">
                <a
                  href="https://play.google.com/store/apps/details?id=amobi.weather.forecast.storm.radar"
                  class="ic-dow-ch"
                >
                  <div class="ic-dow-ch cursor-pointer" alt="" srcset="" />
                </a>
                <a
                  href="https://apps.apple.com/vn/app/9weather-d%E1%BB%B1-b%C3%A1o-th%E1%BB%9Di-ti%E1%BA%BFt/id6467690935?l=vi"
                  class="ic-dow-apple"
                >
                  <div class="ic-dow-apple cursor-pointer"></div>
                </a>
              </div>
            </div>
          </div>
          <div
            class="xl:w-[calc(100%-620px)] lg:[calc(100%-565px)] w-full xl:h-full lg:absolute right-0 bottom-0 p-10"
          >
            <!--  -->
            <div
              class="flex items-center justify-center gap-8 h-full lg:flex-row md:flex-col flex-col"
            >
              <div class="ic-dow-app"></div>
              <div
                class="flex xl:flex-col lg:flex-row md:flex-row sm:flex-row gap-6 flex-col"
              >
                <div class="ic-dow-app-1"></div>
                <div class="ic-dow-app-2"></div>
              </div>
            </div>
          </div>
          <!--  -->
        </div>
      </div>

      <!-- <div class="w-full flex justify-between items-center pl-80 pr-80">
        <div class="w-[700px] text-left flex flex-col gap-14">
          <div class="color_f9f9f9 flex flex-col gap-4">
            <div class="txt_line_48">Everything You Need to Know</div>
            <div>
              <p class="txt_line_24">
                Stay prepared with live updates, detailed forecasts, and alerts.
                Get the app today!
              </p>
            </div>
            <div class="txt_line_50 mt-2">
              <a href="http://9weather.com">9weather.com</a>
            </div>
          </div>
        </div>
        <div class="w-[calc(100%-700px)] overflow-hidden">
          <div class="flex items-center justify-center gap-20 h-[800px]">
            <div class="tilted-image gap-6 flex flex-col">
              <div class="ic-dow-app tilted-images"></div>
              <div class="ic-dow-app-1 tilted-images"></div>
            </div>
            <div class="tilted-image relative">
              <div class="ic-dow-app-2 tilted-images absolute top-64"></div>
              <div class="ic-dow-app-1 tilted-images"></div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "home-page-v3",
  data() {
    return {
      isTheme: true,
    };
  },

  computed: {
    classThemeBg() {
      const themeValue = this.$store.state.commonModule.themeValue;
      const savedTheme = themeValue
        ? themeValue
        : localStorage.getItem("theme");
      if (savedTheme === "light") {
        return "ic_bg_light";
      }
      return "ic_bg_dark";
    },
  },
};
</script>
<style lang="scss">
.ic_bg_light {
  background-image: url("../../assets/images/svg_v2/bg-home1.png");
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.ic_bg_dark {
  background-image: url("../../assets/images/svg_v2/bg-home.png");
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.ic-dow-apple {
  background-image: url("../../assets/images/svg_v2/ic_down_apple.svg");
  width: 136px;
  height: 46px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.ic-dow-ch {
  background-image: url("../../assets/images/svg_v2/ic_down_ch.svg");
  width: 136px;
  height: 46px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.ic-dow-app {
  background-image: url("../../assets/images/svg_v2/ic_hinh_app.png");
  width: 193px;
  height: 394.77px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.ic-dow-app-1 {
  background-image: url("../../assets/images/svg_v2/ic_hinh_app_1.png");
  width: 193px;
  height: 394.77px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.ic-dow-app-2 {
  background-image: url("../../assets/images/svg_v2/ic_hinh_app_2.png");
  width: 193px;
  height: 394.77px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.p-l-home {
  padding-left: 26rem;
  padding-right: 26rem;
  padding-top: 10rem;
}

.container-full {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 576px) {
  .ic-dow-apple,
  .ic-dow-ch {
    width: 136px;
    height: 46px;
  }

  .ic-dow-app,
  .ic-dow-app-1,
  .ic-dow-app-2 {
    width: 193px;
    height: 394.77px;
  }
}

@media (min-width: 768px) {
}

@media (min-width: 1024px) {
  .container-full {
    max-width: 1204px;
  }
  .ic-dow-apple,
  .ic-dow-ch {
    width: 180px;
    height: 60px;
  }

  .ic-dow-app,
  .ic-dow-app-1,
  .ic-dow-app-2 {
    width: 289px;
    height: 587.77px;
  }
}

@media (min-width: 1280px) {
  .container-full {
    max-width: 1311px;
  }
  .ic-dow-apple,
  .ic-dow-ch {
    width: 180px;
    height: 60px;
  }

  .ic-dow-app,
  .ic-dow-app-1,
  .ic-dow-app-2 {
    width: 289px;
    height: 587.77px;
  }
}

@media (min-width: 1536px) {
  .container-full {
    max-width: 1402px;
  }
  .ic-dow-apple,
  .ic-dow-ch {
    width: 180px;
    height: 60px;
  }

  .ic-dow-app,
  .ic-dow-app-1,
  .ic-dow-app-2 {
    width: 289px;
    height: 587.77px;
  }
}
.tilted-image {
  transform: rotate(30deg); /* Nghiêng ảnh sang phải 30 độ */
  transition: transform 0.3s ease-in-out;
}

// .tilted-image:hover {
//   transform: rotate(0deg); /* Reset khi hover */
// }

.text-appear {
  opacity: 0;
  transform: translateY(100%);
  transition: all 0.5s ease-in-out;
}

.text-appear-active {
  opacity: 1;
  transform: translateY(0);
}
</style>
