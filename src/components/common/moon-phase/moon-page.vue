<template>
  <div class="w-full">
    <BaseComponent>
      <template v-slot:header>
        <div class="flex items-center text-left gap-2">
          <IcMoonphase class="icon-svg"></IcMoonphase>
          <p class="txt_medium_14">{{ $t("Moon_phase") }}</p>
        </div>
      </template>
      <div class="w-full h-[183px]">
        <!--  -->

        <div
          class="flex items-center w-full relative h-full"
          v-if="listMoonData.length !== 0"
        >
          <div class="text-left relative h-full w-[50%]">
            <div class="txt_medium_14 text-left">
              <span>{{ $t(`${listMoonData[0].moonPhase}`) }}</span>
            </div>
            <div class="txt_regular_12 pt-1">
              <p>
                {{
                  convertFullMoonTime(listMoonData[0].infoMoonPhaseDay?.date)
                }}
              </p>
            </div>
            <div class="absolute bottom-0 w-full">
              <div
                class="flex w-full justify-between items-center txt_regular_12 pt-2 pb-2"
              >
                <p>{{ $t("Illumination") }}:</p>
                <p>{{ listMoonData[0]?.infoMoonPhaseDay?.illumination }}%</p>
              </div>
              <!--  -->
              <div
                class="flex justify-between items-center txt_regular_12 pt-2 pb-2"
              >
                <p>{{ $t("Moonrise") }}:</p>
                <p>{{ listMoonData[0]?.infoMoonPhaseDay?.moonrise }}</p>
              </div>
              <!--  -->
              <div
                class="flex justify-between items-center txt_regular_12 pt-2 pb-2"
              >
                <p>{{ $t("Next_full_moon") }}:</p>
                <p>
                  {{ listMoonData[0]?.infoMoonPhaseDay?.nextFullMoon }}
                  {{ $t("days") }}
                </p>
              </div>
            </div>
          </div>

          <div class="flex flex-col justify-center items-center w-[50%]">
            <!-- <GlobalMoonIcon
              :illuminate-percent="illuminate"
              :is-clip-from-start="true"
              :width="100"
              :height="100"
            >
            </GlobalMoonIcon> -->
            <div class="text-center">
              <component
                :is="convertStringMoonIcon(listMoonData[0]?.moonPhase)"
                width="100"
                height="100"
              ></component>
            </div>
          </div>
        </div>
      </div>
    </BaseComponent>
  </div>
</template>
<script>
import BaseComponent from "../baseComponent.vue";
import GlobalMoonIcon from "./global-moon-icon.vue";
import { getInfoMoonPhase, getMoonPhase } from "../../../utils/moonPhase";
import {
  getWindDirectionEmojiFromDegrees,
  getWindDirectionFromDegrees,
  convertToShortDay,
  convertTimestampToHoursMinutes12,
  convertTimestampToHoursMinutes,
  getFormattedCurrentDate,
  convertTime12hTimeZoneNotNowUnit,
  convertTime24hTimeZoneNotNow,
  convertTimestampFullMoon,
} from "../../../utils/converValue";

import IcMoonphase from "@/components/icons/IcMoonphase.vue";
import { markRaw } from "vue";
import IcFullMoon from "@/components/icons/moon-phase/IcFullMoon.vue";
import IcFirstQuarter from "@/components/icons/moon-phase/IcFirstQuarter.vue";
import IcNewMoon from "@/components/icons/moon-phase/IcNewMoon.vue";
import IcThirdQuarter from "@/components/icons/moon-phase/IcThirdQuarter.vue";
import IcWaningGibbous from "@/components/icons/moon-phase/IcWaningGibbous.vue";
import IcWaxingCrescent from "@/components/icons/moon-phase/IcWaxingCrescent.vue";
import IcWaxingGibbous from "@/components/icons/moon-phase/IcWaxingGibbous.vue";

export default {
  name: "moon-page",
  components: {
    BaseComponent,
    IcMoonphase,
    // GlobalMoonIcon,
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
    renderPosition() {
      return this.$store.state.weatherModule.cityCountry;
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
  },

  watch: {
    renderPosition(newValue) {
      this.calculateNext30DaysMoonPhases(newValue);
    },
  },

  methods: {
    convertFullMoonTime(value) {
      const timezoneValue =
        this.$store.state.weatherModule.locationOffset.timezone;
      const offsetValue = this.$store.state.weatherModule.locationOffset.offset;
      const dateString = convertTimestampFullMoon(
        value,
        this.languageParam,
        timezoneValue
      );
      return dateString;
    },
    convertTime(val) {
      const offsetValue =
        this.$store.state.weatherModule.locationOffset?.offset;

      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      if (unitSetting.activeTime_save === "12h") {
        return convertTime12hTimeZoneNotNowUnit(val, 1, offsetValue);
      } else {
        return convertTime24hTimeZoneNotNow(val, 1, offsetValue);
      }
    },

    convertTimeDayNight(value) {
      const sunrise = value.sunriseTime;
      const sunset = value.sunsetTime;
      const currentTime = Math.floor(Date.now() / 1000);
      if (currentTime > sunrise && currentTime < sunset) {
        return true;
      } else {
        return false;
      }
    },
    convertDayFull(value) {
      return convertToShortDay(value);
    },

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

      // Ghép lại theo thứ tự mới
      return [...part1, ...part2];
    },
    renderListCityAllGetters() {
      const dateNew = new Date();
      const currYear = dateNew.getFullYear();
      const currMonth = dateNew.getMonth();
      const firstDayofMonth =
        (new Date(currYear, currMonth, 1).getDay() + 6) % 7;
      const lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
      const lastDayofMonth = new Date(
        currYear,
        currMonth,
        lastDateofMonth
      ).getDay();

      const lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
      let dayList = [];
      const infoMoonPhaseDay = getInfoMoonPhase(new Date(), 80, -90);

      // Ngày cuối của tháng trước
      for (let i = firstDayofMonth; i > 0; i--) {
        const monthDay = currMonth === 0 ? 12 : currMonth; // Tháng trước (1-12)

        dayList.push({
          date: lastDateofLastMonth - i + 1,
          inactive: true,
          monthDay: monthDay,
          weekend: false,
          moonPhase: "Full Moon",
          moonPhasePercentage: 0,
          infoMoonPhaseDay: infoMoonPhaseDay,
        });
      }
      // Ngày trong tháng hiện tại
      for (let i = 1; i <= lastDateofMonth; i++) {
        const isToday =
          i === new Date().getDate() &&
          currMonth === new Date().getMonth() &&
          currYear === new Date().getFullYear();
        const isWeekend =
          new Date(currYear, currMonth, i).getDay() === 0 ||
          new Date(currYear, currMonth, i).getDay() === 6;

        const infoMoonPhaseDay = getInfoMoonPhase(
          new Date(currYear, currMonth, i),
          80,
          -90
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

      // Ngày đầu của tháng sau
      for (let i = lastDayofMonth; i < 6; i++) {
        const monthDay = currMonth === 11 ? 1 : currMonth + 2; // Tháng sau (1-12)
        dayList.push({
          date: i - lastDayofMonth + 1,
          monthDay: monthDay,
          inactive: true,
          weekend: false,
          moonPhase: "Full Moon",
          moonPhasePercentage: 0,
          infoMoonPhaseDay: infoMoonPhaseDay,
        });
      }
      this.currentDate = `${this.months[currMonth]} ${currYear}`;

      const dateNow = new Date();
      const day = dateNow.getDate(); // 4
      const month = dateNow.getMonth() + 1;

      const findNumber = this.rearrangeArray(dayList, day, month);

      this.listMoonData = findNumber;

      console.log("this.listMoonData", this.listMoonData);
    },
  },

  async mounted() {
    await this.renderListCityAllGetters();
  },

  beforeUnmount() {},
};
</script>
<style lang="scss">
.wrapper {
  position: relative;
  width: 150px;
}

.container-moon {
  display: flex;
  overflow-x: hidden;
  box-sizing: border-box;
  padding-left: calc(50%);
  padding-right: calc(50%);
}

.child {
  display: flex;
  width: 80px;
  justify-content: space-between;
}

.arrow {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  color: aqua;
}

.bg-moon {
  background-color: #190839;
}
</style>
