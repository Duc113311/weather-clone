<template>
  <div class="w-full md:block hidden">
    <!--  -->
    <div class="container overflow-hidden">
      <div
        class="weather-menu-inner w-full flex items-center pad-l-r-10 pad-t-b-10"
      >
        <div
          v-for="(menu, index) in menuItems"
          :key="index"
          class="cursor-pointer weather-menu-item pad_btn flex justify-center bg-btn-hover"
          :class="{
            'active-tab': activeTabGettersParam === index,
            'disabled-class': !menu.isRun,
          }"
          @click="onClickRouterView(menu, index)"
        >
          <div class="flex items-center txt-medium gap-2 cursor-pointer">
            <component
              :is="menu.icon"
              class="menu-icon icon-svg"
              :class="{
                'active-icon': activeTabGettersParam === index,
              }"
            />
            <span class="txt_regular_14">{{ menu.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { convertToEnglishReplace } from "@/utils/converValue";
import { mapGetters, mapMutations } from "vuex";
import removeAccents from "remove-accents";
import IcCloudSun from "@/components/icons/IcCloudSun.vue";
import IcCalendar from "@/components/icons/IcCalendar.vue";
import IcOclock from "@/components/icons/IcOclock.vue";
import IcRadar from "@/components/icons/IcRadar.vue";
import {
  convertLowerCase,
  removeWordAndAccents,
} from "@/utils/coverTextSystem";
import IcApiTab from "@/components/icons/IcApiTab.vue";
import IcUvIndex from "@/components/icons/IcUvIndex.vue";
import IcTitleSun from "@/components/icons/IcTitleSun.vue";
import IcMoonphase from "@/components/icons/IcMoonphase.vue";

import { ElNotification } from "element-plus";
import { setTitleScream } from "@/helpers/setTitle";
import IcTide from "@/components/icons/IcTide.vue";

export default {
  name: "nav-tabbar",

  data() {
    return {
      activeIndex: -1,
    };
  },

  setup() {
    const successUnit = () => {
      ElNotification({
        title: "Scream",
        message: "Coming soon",
        type: "warning",
        position: "bottom-left",
      });
    };
    return {
      successUnit,
    };
  },

  computed: {
    ...mapGetters("commonModule", [
      "breadcumsObjectGetters",
      "activeTabGetters",
    ]),
    menuItems() {
      return [
        {
          name: "today-weather",
          label: this.$t("Today"),
          isRun: true,
          icon: IcCloudSun,
        },
        {
          name: "hourly-weather",
          label: this.$t("Hourly"),
          isRun: true,
          icon: IcOclock,
        },
        {
          name: "month-weather",
          label: this.$t("Monthly"),
          isRun: true,
          icon: IcCalendar,
        },
        {
          name: "radar-weather",
          label: this.$t("Radar"),
          isRun: true,
          icon: IcRadar,
        },
        {
          name: "air-quality-weather",
          label: this.$t("AQI"),
          isRun: true,
          icon: IcApiTab,
        },
        {
          name: "uv-weather",
          label: this.$t("UV"),
          isRun: true,
          icon: IcUvIndex,
        },
        {
          name: "moon-phase-weather",
          label: this.$t("Moon_phase"),
          isRun: true,
          icon: IcMoonphase,
        },
        {
          name: "tide-page",
          label: this.$t("Tide"),
          isRun: true,
          icon: IcTide,
        },
      ];
    },

    renderCityName() {
      return this.$route.params.city
        ? this.$route.params.city
        : this.breadcumsObjectGetters?.city;
    },

    renderCountry() {
      return this.$route.params.country
        ? this.$route.params.country
        : this.breadcumsObjectGetters?.country;
    },

    renderCoordinates() {
      return this.$route.params.coordinates
        ? this.$route.params.coordinates
        : `${this.breadcumsObjectGetters.latitude}, ${this.breadcumsObjectGetters.longitude}`;
    },

    breadcumsObject() {
      const retrievedArray = JSON.parse(localStorage.getItem("objectBread"));

      return retrievedArray ? retrievedArray : this.breadcumsObjectGetters;
    },

    languageParam() {
      const languageRouter = this.$route.params;
      return Object.keys(languageRouter).length !== 0
        ? languageRouter.language
        : this.$i18n.locale;
    },

    renderLanguage() {
      const languageRouter = this.$route.params;

      return Object.keys(languageRouter).length !== 0
        ? languageRouter.language !== "en" && languageRouter.language !== "vi"
          ? "en"
          : languageRouter.language
        : this.$i18n.locale !== "en" && this.$i18n.locale !== "vn"
        ? "en"
        : this.$i18n.locale;
    },

    activeTabGettersParam() {
      return this.activeTabGetters;
    },
  },

  watch: {
    // Theo dõi sự thay đổi của breadcumsObjectGetters
  },

  mounted() {
    const nameRouter = this.$route.name;
    this.activeIndex = this.menuItems.findIndex((x) => x.name === nameRouter);

    if (this.activeIndex === -1) {
      this.activeIndex = -1;
    }

    this.setTitleScream(this.activeIndex);
    this.setActiveTab(this.activeIndex);
  },

  methods: {
    ...mapMutations("commonModule", [
      "setKeyIndexComponent",
      "setIndexComponent",
      "setActiveTab",
    ]),
    convertToSlugCity(str) {
      const slug = removeAccents(str);

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

    setTitleScream(activeIndex) {
      const retrievedArray = JSON.parse(localStorage.getItem("objectBread"));
      setTitleScream(activeIndex, retrievedArray, this.renderLanguage);
    },
    isActive(menu) {
      return this.$route.name === menu.name;
    },

    convertToSlug(str) {
      // Bước 1: Loại bỏ dấu tiếng Việt
      const normalizedStr = str
        .normalize("NFD") // Chuyển chuỗi sang dạng tổ hợp Unicode
        .replace(/[\u0300-\u036f]/g, ""); // Loại bỏ các dấu

      // Bước 2: Chuyển thành chữ thường và thay thế khoảng trắng bằng gạch ngang
      return normalizedStr
        .toLowerCase() // Chuyển thành chữ thường
        .replace(/\s+/g, "-") // Thay thế khoảng trắng bằng "-"
        .replace(/[^a-z0-9-]/g, ""); // Loại bỏ ký tự không hợp lệ (chỉ giữ lại chữ, số, và "-")
    },

    removeWordAndAccents(str, wordsToRemove) {
      const removeAccents = (s) =>
        s
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "") // Loại bỏ dấu
          .replace(/đ/g, "d")
          .replace(/Đ/g, "D");

      // Loại bỏ dấu và chuẩn hóa chuỗi
      let normalizedStr = removeAccents(str);

      // Loại bỏ từng từ trong danh sách wordsToRemove
      wordsToRemove.forEach((word) => {
        const normalizedWord = removeAccents(word);
        const regex = new RegExp(`\\b${normalizedWord}\\b`, "gi");
        normalizedStr = normalizedStr.replace(regex, "").trim();
      });

      return normalizedStr;
    },

    async onClickRouterView(value, index) {
      try {
        this.activeIndex = index;

        let screamName = "today-weather";
        if (this.activeIndex === 0) {
          this.setActiveTab(0);
        }
        if (this.activeIndex === 1) {
          this.setActiveTab(1);
          screamName = "hourly-weather";
        }
        if (this.activeIndex === 2) {
          this.setActiveTab(2);
          screamName = "month-weather";
        }
        if (this.activeIndex === 3) {
          this.setActiveTab(3);
          screamName = "radar-weather";
        }
        if (this.activeIndex === 4) {
          this.setActiveTab(4);
          screamName = "air-quality-weather";
          // this.successUnit();
        }
        if (this.activeIndex === 5) {
          this.setActiveTab(5);
          screamName = "uv-weather";
          // this.successUnit();
        }
        if (this.activeIndex === 6) {
          this.setActiveTab(6);
          screamName = "moon-phase-weather";
          // this.successUnit();
        }
        if (this.activeIndex === 7) {
          this.setActiveTab(7);
          screamName = "tide-page";
          // this.successUnit();
        }

        this.setTitleScream(this.activeIndex);
        const objectBread = JSON.parse(localStorage.getItem("objectBread"));
        const countryKey = objectBread.country_key;

        console.log("this.breadcumsObject", objectBread);

        if (countryKey.toLowerCase() === "vn") {
          // tồn tại thành phố
          if (
            objectBread.city.length !== 0 &&
            objectBread.district.length === 0
          ) {
            await this.$router.push({
              name: screamName,
              params: {
                language: this.languageParam,
                location: [
                  objectBread.country_key.toLowerCase(),
                  convertLowerCase(objectBread.city),
                ],
              },
            });
          }
          // Tồn tại quận
          if (
            objectBread.city.length !== 0 &&
            objectBread.district.length !== 0 &&
            objectBread.ward.length === 0
          ) {
            await this.$router.push({
              name: screamName,
              params: {
                language: this.languageParam,
                location: [
                  objectBread.country_key.toLowerCase(),
                  convertLowerCase(objectBread.city),
                  convertLowerCase(objectBread.district),
                ],
              },
            });
          }
          if (
            objectBread.city.length !== 0 &&
            objectBread.district.length !== 0 &&
            objectBread.ward.length !== 0
          ) {
            await this.$router.push({
              name: screamName,
              params: {
                language: this.languageParam,
                location: [
                  objectBread.country_key.toLowerCase(),
                  convertLowerCase(objectBread.city),
                  convertLowerCase(objectBread.district),
                  convertLowerCase(removeWordAndAccents(objectBread.ward)),
                ],
              },
            });
          }

          // Chuyển route và đợi cho đến khi navigation hoàn tất
          this.setKeyIndexComponent(1);
          this.setIndexComponent(1);

          // Emit event để thông báo cho component cha biết route đã thay đổi
          this.$emit("route-changed", screamName);
        } else {
          if (
            objectBread.state.length !== 0 &&
            objectBread.cities.length === 0
          ) {
            await this.$router.push({
              name: screamName,
              params: {
                language: this.languageParam,
                location: [
                  objectBread.country_key.toLowerCase(),
                  convertLowerCase(objectBread.state),
                ],
              },
            });
          }
          // Quận
          if (
            objectBread.state.length !== 0 &&
            !objectBread.cities.length !== 0
          ) {
            await this.$router.push({
              name: screamName,
              params: {
                language: this.languageParam,
                location: [
                  objectBread.country_key.toLowerCase(),
                  convertLowerCase(objectBread.state),
                  convertLowerCase(objectBread.cities),
                ],
              },
            });
          }

          // Chuyển route và đợi cho đến khi navigation hoàn tất
          this.setKeyIndexComponent(1);

          this.setIndexComponent(1);
          // Emit event để thông báo cho component cha biết route đã thay đổi
          this.$emit("route-changed", screamName);
        }
      } catch (err) {
        console.error("Navigation failed:", err);
      }
    },
  },
};
</script>
<style lang="scss">
.weather-menu-item {
  width: 163px;
  height: 40px;
  background-color: var(--bg-button);
  color: var(--color-txt);
}

.weather-menu-inner {
  gap: 10px;
}

.active-tab {
  background-color: #ffffff;
  color: #0074ff;

  .menu-icon {
    filter: invert(71%) sepia(98%) saturate(1946%) hue-rotate(201deg)
      brightness(97%) contrast(107%);
  }
}

.disabled-class {
  background-color: #839dcc3b;
}
</style>
