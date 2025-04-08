<template>
  <div class="w-full">
    <ItemComponent>
      <template v-slot:header>
        <div class="flex justify-between items-center">
          <div class="flex items-center text-left gap-2">
            <svg
              class="icon-svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.478 11.9997H17.5C18.0909 11.9997 18.6761 12.1161 19.2221 12.3422C19.768 12.5684 20.2641 12.8998 20.682 13.3177C21.0998 13.7356 21.4313 14.2316 21.6575 14.7776C21.8836 15.3236 22 15.9087 22 16.4997C22 17.0906 21.8836 17.6758 21.6575 18.2218C21.4313 18.7677 21.0998 19.2638 20.682 19.6817C20.2641 20.0995 19.768 20.431 19.2221 20.6571C18.6761 20.8833 18.0909 20.9997 17.5 20.9997H7C5.71535 20.9999 4.47988 20.5057 3.54984 19.6195C2.6198 18.7333 2.06654 17.5231 2.00481 16.24C1.94307 14.9568 2.3776 13.6991 3.21827 12.7277C4.05894 11.7563 5.24125 11.1458 6.52 11.0227M17.478 11.9997C17.492 11.835 17.4993 11.6683 17.5 11.4997C17.5022 10.0809 16.956 8.71607 15.9755 7.69052C14.9951 6.66496 13.6562 6.05798 12.2387 5.9964C10.8212 5.93482 9.43478 6.42341 8.36907 7.36007C7.30337 8.29674 6.64087 9.60901 6.52 11.0227M17.478 11.9997C17.3773 13.1011 16.9469 14.1466 16.243 14.9997M6.52 11.0227C6.678 11.0073 6.838 10.9997 7 10.9997C8.126 10.9997 9.165 11.3717 10 11.9997"
                stroke="var(--color-icon-df)"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.9999 5.53C10.9034 5.03437 10.7261 4.558 10.4749 4.12C9.8883 3.08689 8.91939 2.32555 7.77686 2C7.86335 2.69404 7.74466 3.39821 7.43543 4.02554C7.12621 4.65288 6.64 5.1759 6.03686 5.53C5.43644 5.88058 4.74532 6.04467 4.05139 6.0014C3.35746 5.95813 2.69207 5.70946 2.13986 5.287C1.8466 6.44479 2.01514 7.67124 2.60986 8.707C3.00109 9.39602 3.5662 9.97038 4.24879 10.3727C4.93137 10.7751 5.70756 10.9914 6.49986 11"
                stroke="var(--color-icon-df)"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div class="flex items-center txt_medium_14 text-left">
              <span>{{ $t("Moon_Phases_List") }}</span>
            </div>
          </div>
        </div>
      </template>

      <div class="w-full h-auto">
        <!--  -->
        <transition-group name="fade" tag="div" class="district-list">
          <CardMoonPage
            v-for="(item, index) in displayedItems"
            :key="`district-${index}`"
            :objectLocation="item"
          ></CardMoonPage>
        </transition-group>
        <div class="w-full text-left mt-3">
          <button
            type="button"
            @click="onClickLoadMoreItems"
            class="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2"
          >
            <span class="txt_regular_12">
              {{ showLessButton ? $t("Hide") : $t("See_more") }}</span
            >
          </button>
        </div>
      </div>
    </ItemComponent>
  </div>
</template>
<script>
import CardMoonPage from "@/components/common/card/card-moon-page.vue";
import DistrictCardPage from "@/components/common/card/district-card-page.vue";
import ItemComponent from "@/components/common/itemComponent.vue";
import { capitalizeWords } from "@/utils/converValue";
import {
  decodeBase64,
  encodeBase64,
  getAqiDataFromLocation,
  getParamAirByCode,
  urlEncodeString,
} from "@/utils/EncoderDecoderUtils";
import { getInfoMoonPhase } from "@/utils/moonPhase";

// import removeAccents from "remove-accents";
import { ElNotification } from "element-plus";

import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "list-item-moon-page",

  components: {
    ItemComponent,
    // DistrictCardPage,
    CardMoonPage,
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      showLessButton: false,
      itemsPerPage: 8, // Số mục hiển thị ban đầu
      currentPage: 1, // Trang hiện tại

      currentDate: "",
      listMoonData: [],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    };
  },

  setup() {
    const successUnit = () => {
      ElNotification({
        title: "District Ward",
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
      "listCityAllGetters",
      "breadcumsObjectGetters",
      "listAlabamaGetters",
      "objectCityByLocationGetters",
    ]),

    ...mapGetters("airQualityModule", [
      "airObjectGetters",
      "airKeyObjectGetters",
    ]),

    listCityAllData() {
      const retrievedArray = JSON.parse(sessionStorage.getItem("dataCityAll"));
      const resultData = retrievedArray
        ? retrievedArray
        : this.listCityAllGetters;

      return resultData;
    },

    objectCityByLocationData() {
      const retrievedArray = JSON.parse(sessionStorage.getItem("dataCityLog"));
      const resultData = retrievedArray
        ? retrievedArray
        : this.objectCityByLocationGetters;

      return resultData;
    },

    classThemeBg() {
      const themeValue = this.$store.state.commonModule.themeValue;
      const savedTheme = themeValue
        ? themeValue
        : localStorage.getItem("theme");
      if (savedTheme === "light") {
        return "bg-color-light";
      }
      return "bg-color-dark";
    },

    displayedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = this.currentPage * this.itemsPerPage;
      return this.listMoonData.slice(0, end);
    },

    itemSliceCount() {
      if (this.windowWidth <= 567) {
        return 4; // Mobile
      } else if (this.windowWidth < 768) {
        return 4; // Tablet
      } else if (this.windowWidth < 1024) {
        return 6; // Tablet
      } else {
        return 8; // Desktop
      }
    },

    languageParam() {
      const languageRouter = this.$route.params;

      return Object.keys(languageRouter).length !== 0
        ? languageRouter.language !== "en" && languageRouter.language !== "vi"
          ? "en"
          : languageRouter.language
        : this.$i18n.locale !== "en" && this.$i18n.locale !== "vi"
        ? "en"
        : this.$i18n.locale;
    },

    wardParam() {
      const retrievedArray = JSON.parse(localStorage.getItem("objectBread"));
      const resultData = retrievedArray
        ? retrievedArray
        : this.breadcumsObjectGetters;

      return resultData;
    },

    locationOffsetValue() {
      return this.$store.state.weatherModule.locationOffset.offset;
    },
  },

  mounted() {
    this.renderListCityAllGetters();
    window.addEventListener("resize", this.handleResize);
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },

  methods: {
    ...mapMutations("commonModule", ["setBreadcumsNotAllowLocation"]),
    ...mapActions("weatherModule", [
      "getWeatherDataCurrent",
      "getFormattedAddress",
    ]),
    ...mapActions("airQualityModule", ["getAirQualityByKey", "getAirQuality"]),
    ...mapMutations("weatherModule", ["setCityWeather"]),

    onClickLoadMoreItems() {
      if (this.showLessButton) {
        this.currentPage = 1; // Reset to show the initial items
        this.showLessButton = false;
      } else {
        this.currentPage++;
        this.showLessButton =
          this.currentPage * this.itemsPerPage >= this.listMoonData.length;
      }
    },

    renderListCityAllGetters() {
      const dateNew = new Date();

      const timezoneOffset = this.locationOffsetValue * 60; // offset từ phút sang giây
      const adjustedNow = new Date(dateNew.getTime() + timezoneOffset * 1000);

      const currYear = adjustedNow.getFullYear();
      const currMonth = adjustedNow.getMonth();

      const lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();

      let dayList = [];

      // Ngày trong tháng hiện tại
      for (let i = 1; i <= lastDateofMonth; i++) {
        const dateNew = new Date(currYear, currMonth, i);

        // Lấy offset theo múi giờ (tính theo phút → chuyển thành mili giây)
        const timezoneOffset = this.locationOffsetValue * 60 * 1000;

        // Điều chỉnh ngày với múi giờ
        const adjustedNowNew = new Date(dateNew.getTime() + timezoneOffset);

        const isToday =
          i === new Date().getDate() &&
          currMonth === new Date().getMonth() &&
          currYear === new Date().getFullYear();

        const isWeekend = dateNew.getDay() === 0 || dateNew.getDay() === 6;

        const infoMoonPhaseDay = getInfoMoonPhase(
          adjustedNowNew, // Dùng adjustedNow với ngày i đã điều chỉnh theo múi giờ
          this.wardParam?.latitude,
          this.wardParam?.longitude
        );
        const monthDay = currMonth + 1; // Tháng hiện tại (1-12)

        dayList.push({
          date: i,
          monthDay: monthDay,
          active: isToday,
          weekend: isWeekend,
          moonPhase: infoMoonPhaseDay.moonPhaseName,
          moonPhasePercentage: infoMoonPhaseDay.moonPhasePercentage,
          infoMoonPhaseDay: infoMoonPhaseDay,
        });
      }

      this.listMoonData = dayList;
    },

    async onClickShowDetailDistrict(value) {
      this.successUnit();
    },

    handleResize() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>
<style lang="scss">
.district-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 16px;
}
@media (max-width: 1024px) {
  .district-list {
    /* Adjust the max-width as needed for tablet */
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  }
}
</style>
