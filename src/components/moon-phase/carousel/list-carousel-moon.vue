<template>
  <div class="w-full h-full md:flex gap-20-px">
    <div class="lg:w-[68%] w-full">
      <div class="flex items-center text-left gap-2 pad-t-b">
        <IcMoonphase class="icon-svg"></IcMoonphase>
        <span class="txt_medium_14">{{ $t("Moon_phase") }}</span>
      </div>

      <el-carousel
        :interval="0"
        loop="false"
        type="card"
        height="230px"
        @change="onChangeMoon"
      >
        <el-carousel-item v-for="item in listMoonData" :key="item">
          <div class="text-center w-full">
            <p class="txt_medium_15">{{ $t(`${item.moonPhase}`) }}</p>
            <p class="txt_regular_10">
              {{ convertFullMoonTime(item.infoMoonPhaseDay?.date) }}
            </p>
          </div>
          <div class="flex justify-center items-center w-full h-full">
            <component
              class="icon-svg-moon"
              :is="convertStringMoonIcon(item.moonPhase)"
              width="130"
              height="130"
            ></component>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="right-hourly md:w-[30%] w-full">
      <div class="w-full">
        <FormMoonPage :objectMoonNew="objectMoon"></FormMoonPage>
      </div>
    </div>
  </div>
</template>
<script>
import IcFirstQuarter from "@/components/icons/moon-phase/IcFirstQuarter.vue";
import IcFullMoon from "@/components/icons/moon-phase/IcFullMoon.vue";
import IcNewMoon from "@/components/icons/moon-phase/IcNewMoon.vue";
import IcThirdQuarter from "@/components/icons/moon-phase/IcThirdQuarter.vue";
import IcWaningGibbous from "@/components/icons/moon-phase/IcWaningGibbous.vue";
import IcWaxingCrescent from "@/components/icons/moon-phase/IcWaxingCrescent.vue";
import { markRaw } from "vue";
import FormMoonPage from "../form-infor/form-moon-page.vue";
import SkeletonLoader from "@/control-ui/SkeletonLoader/SkeletonLoader.vue";
import { mapGetters, mapMutations } from "vuex";
import { getInfoMoonPhase } from "@/utils/moonPhase";
import IcWaxingGibbous from "@/components/icons/moon-phase/IcWaxingGibbous.vue";
import IcMoonphase from "@/components/icons/IcMoonphase.vue";
import { convertTimestampFullMoon } from "@/utils/converValue";

export default {
  name: "list-carousel-moon",

  components: {
    FormMoonPage,
    IcMoonphase,
  },

  data() {
    return {
      IcFullMoon: markRaw(IcFullMoon),
      IcFirstQuarter: markRaw(IcFirstQuarter),
      IcNewMoon: markRaw(IcNewMoon),
      IcThirdQuarter: markRaw(IcThirdQuarter),
      IcWaningGibbous: markRaw(IcWaningGibbous),
      IcWaxingCrescent: markRaw(IcWaxingCrescent),
      IcWaxingGibbous: markRaw(IcWaxingGibbous),

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

      objectMoon: {},
    };
  },

  computed: {
    ...mapGetters("weatherModule", ["currentlyGetters"]),
    ...mapGetters("commonModule", ["breadcumsObjectGetters"]),

    currentlyData() {
      return this.currentlyGetters;
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

    breadcumsObject() {
      const retrievedArray = JSON.parse(localStorage.getItem("objectBread"));
      const resultData = retrievedArray
        ? retrievedArray
        : this.breadcumsObjectGetters;

      return resultData;
    },

    locationOffsetValue() {
      return this.$store.state.weatherModule.locationOffset.offset;
    },
    timezoneValue() {
      return this.$store.state.weatherModule.locationOffset.timezone;
    },
  },

  methods: {
    ...mapMutations("commonModule", ["setObjectMoonphase"]),
    convertStringMoonIcon(value) {
      const valueName = value.toString();

      switch (valueName) {
        case "Full_Moon":
          return this.IcFullMoon;
        case "First_Quarter":
          return this.IcFirstQuarter;
        case "New_Moon":
          return this.IcNewMoon;
        case "Third_Quarter":
          return this.IcThirdQuarter;
        case "Waning_Gibbous":
          return this.IcWaningGibbous;
        case "Waxing_Crescent":
          return this.IcWaxingCrescent;
        case "Waxing_Gibbous":
          return this.IcWaxingGibbous;
        default:
          return this.IcFullMoon;
      }
    },

    rearrangeArray(arr, date, monthDay) {
      // Tìm vị trí của `number` trong mảng
      const index = arr.findIndex(
        (item) => item.date === date && item.monthDay === monthDay
      );

      if (index === -1) {
        return arr;
      }

      // Cắt mảng thành hai phần
      const part1 = arr.slice(index); // Từ `number + 1` đến cuối
      const part2 = arr.slice(0, index); // Từ đầu đến `number`

      console.log("part2", part2);

      // Ghép lại theo thứ tự mới
      return [...part1, ...part2];
    },
    renderListCityAllGetters() {
      const dateNew = new Date();

      const timezoneOffset = this.locationOffsetValue * 60; // offset từ phút sang giây
      const adjustedNow = new Date(dateNew.getTime() + timezoneOffset * 1000);

      const currYear = adjustedNow.getFullYear();
      const currMonth = adjustedNow.getMonth();

      const lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();

      console.log("lastDateofMonth", lastDateofMonth);
      console.log("currYear", currYear);
      console.log("currMonth", currMonth);
      console.log("adjustedNow", adjustedNow);
      console.log("adjustedNow", adjustedNow);
      console.log("locationOffsetValue", this.locationOffsetValue);

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
          this.breadcumsObject?.latitude,
          this.breadcumsObject?.longitude
        );
        console.log(
          "this.breadcumsObject?.latitude,",
          this.breadcumsObject?.latitude
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

      const dateNow = new Date();
      const day = dateNow.getDate(); // 4
      const month = dateNow.getMonth() + 1;

      const findNumber = this.rearrangeArray(dayList, day, month);

      this.listMoonData = findNumber;

      console.log("day-moon", day);
      console.log("month-moon", month);

      console.log("listMoonData", this.listMoonData);
    },

    convertFullMoonTime(value) {
      if (value) {
        const dateString = convertTimestampFullMoon(value);
        return dateString;
      }
    },

    onChangeMoon(value) {
      this.objectMoon = this.listMoonData[value];
      this.setObjectMoonphase(this.objectMoon);
    },
  },

  async mounted() {
    // const date = new Date();
    // const day = date.getDate(); // Lấy ngày hiện tại
    // const month = date.getMonth() + 1; // Lấy tháng hiện tại (tháng bắt đầu từ 0)
    // const dateNow = day + "/" + month;
    await this.renderListCityAllGetters();

    // const findData = this.listMoonData.find(
    //   (x) => x.date === day && x.monthDay === month
    // );
    // if (findData) {
    //   this.objectMoon = findData;
    // }
    this.objectMoon = this.listMoonData[0];
    this.setObjectMoonphase(this.objectMoon);
  },
};
</script>
<style scoped>
.el-carousel__item {
  opacity: 0.4;
  transition: opacity 0.4s ease;
}

/* Hình ở giữa sẽ sáng */
.el-carousel__item.is-active {
  opacity: 1 !important;
}

/* Tùy chỉnh kích thước của carousel item */
:deep(.el-carousel__item) {
  background: none !important;
}

/* Tùy chỉnh khoảng cách giữa các items */
:deep(.el-carousel__container) {
  gap: 20px;
}

/* Bỏ background cho các item không active */
:deep(.el-carousel__item:not(.is-active)) {
  border: none !important;
  background: transparent !important;
  box-shadow: none !important;
}

/* Xóa bỏ các style không cần thiết */
.el-carousel__item h3 {
  display: none;
}
</style>
