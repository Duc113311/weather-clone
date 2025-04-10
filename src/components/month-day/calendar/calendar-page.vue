<template>
  <div class="w-full h-full">
    <BaseComponent :height="heightAuto" :is-show-pad="false">
      <template v-slot:header>
        <div class="flex items-center justify-between text-left gap-2">
          <div class="flex items-center gap-2">
            <svg
              class="icon-svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.167 2V4M5.09717 4.92993L6.50717 6.33993M20.167 12H22.167M19.2371 4.92993L17.8271 6.33993M16.114 12.6501C16.237 11.9046 16.1464 11.1395 15.8527 10.4433C15.5589 9.74717 15.0739 9.14847 14.454 8.71654C13.834 8.28461 13.1044 8.03711 12.3496 8.00269C11.5948 7.96827 10.8457 8.14835 10.189 8.52206M13.167 22H7.16695C6.22092 21.9998 5.29436 21.7312 4.49487 21.2255C3.69539 20.7197 3.0558 19.9975 2.65038 19.1427C2.24496 18.288 2.09035 17.3358 2.20451 16.3966C2.31867 15.4575 2.69691 14.5701 3.29531 13.8373C3.89371 13.1046 4.6877 12.5567 5.58507 12.2572C6.48244 11.9577 7.44637 11.9189 8.36489 12.1454C9.28342 12.3718 10.1188 12.8542 10.7742 13.5366C11.4295 14.2189 11.8777 15.0731 12.067 16H13.167C13.9626 16 14.7257 16.3161 15.2883 16.8787C15.8509 17.4413 16.167 18.2044 16.167 19C16.167 19.7956 15.8509 20.5587 15.2883 21.1213C14.7257 21.6839 13.9626 22 13.167 22Z"
                stroke="var(--color-icon-df)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="txt_medium_14">{{ $t("Calendar") }}</span>
          </div>

          <div class="txt_regular_17">
            {{ onvertToShortMonth(renderCalendar[0]?.time) }}
          </div>
        </div>
      </template>

      <div v-if="adjustedCalendar.length >= 10" class="w-full gap-4 grid">
        <div class="w-full">
          <div class="calendar">
            <ul class="weeks bor-bottom bg-title-calender p-2">
              <li class="txt_regular_14">{{ $t("Monday") }}</li>
              <li class="txt_regular_14">{{ $t("Tuesday") }}</li>
              <li class="txt_regular_14">{{ $t("Wednesday") }}</li>
              <li class="txt_regular_14">{{ $t("Thursday") }}</li>
              <li class="txt_regular_14">{{ $t("Friday") }}</li>
              <li class="weekend txt_regular_14">{{ $t("Saturday") }}</li>
              <li class="weekend txt_regular_14">{{ $t("Sunday") }}</li>
            </ul>
            <ul class="days">
              <li
                class=""
                v-for="(day, index) in adjustedCalendar"
                :key="index"
                :style="getStyle(day?.time)"
                :class="{
                  'active-calender': activeIndex === index,
                }"
              >
                <el-tooltip
                  popper-class="app-tooltip cursor-pointer"
                  placement="bottom-end"
                  effect="dark"
                  transition="none"
                  hide-after="0"
                >
                  <template #content>
                    <PopupCalendarDetail
                      :objTemperature="day"
                    ></PopupCalendarDetail>
                  </template>
                  <div
                    v-if="day && day.time"
                    :class="{
                      'current-month': isCurrentMonth(day?.time),
                    }"
                    class="flex item-calender p-2 flex-col justify-start gap-1 txt_light_14 opacity-45"
                  >
                    <span class="txt_regular_12 text-right">{{
                      convertToShortDay(day.time)
                    }}</span>
                    <div class="flex justify-between">
                      <component
                        :width="30"
                        :height="30"
                        :is="convertIconCurrently(day?.icon)"
                      ></component>
                      <div class="flex justify-start items-center gap-1">
                        <div class="flex items-center">
                          <p>
                            <IcTemptMin class="icon-svg"></IcTemptMin>
                          </p>
                          <p class="txt_regular_14">
                            {{ convertTemperature(day.temperatureMin) }}°
                          </p>
                        </div>
                        <div class="flex items-center">
                          <p>
                            <IcTemptMax class="icon-svg"></IcTemptMax>
                          </p>
                          <p class="txt_regular_14">
                            {{ convertTemperature(day.temperatureMax) }}°
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <!-- <img :src="convertIcon(day.icon)" alt="" /> -->
                    </div>

                    <div
                      class="flex items-center gap-0.5 color_ff8c00"
                      v-if="day.precipType === 'Snow'"
                    >
                      <svg
                        width="18"
                        height="17"
                        viewBox="0 0 11 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_3004_9967)">
                          <path
                            d="M5.14225 5.00004V8.33337C5.14225 8.55439 5.23005 8.76635 5.38633 8.92263C5.54261 9.07891 5.75457 9.16671 5.97559 9.16671C6.1966 9.16671 6.40856 9.07891 6.56484 8.92263C6.72112 8.76635 6.80892 8.55439 6.80892 8.33337M5.14225 0.833374V1.25004M9.30892 5.00005C9.19632 3.97366 8.70883 3.02494 7.93993 2.33578C7.17102 1.64662 6.1748 1.2655 5.14225 1.2655C4.1097 1.2655 3.11348 1.64662 2.34458 2.33578C1.57567 3.02494 1.08819 3.97366 0.975586 5.00005H9.30892Z"
                            stroke="var(--bg-radio-chance-of-snow)"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_3004_9967">
                            <rect
                              width="10"
                              height="10"
                              fill="#ff8c00"
                              transform="translate(0.142578)"
                            />
                          </clipPath>
                        </defs>
                      </svg>

                      <p class="txt_regular_12">
                        {{ Math.round(day.precipProbability * 100) }}%
                      </p>
                    </div>
                    <div class="flex items-center gap-0.5 color_00e3f5" v-else>
                      <component
                        :is="IcChanceOfRain"
                        :height="18"
                        :width="18"
                      ></component>

                      <p class="txt_regular_12">
                        {{ Math.round(day.precipProbability * 100) }}%
                      </p>
                    </div>
                  </div>
                </el-tooltip>
              </li>
            </ul>
          </div>
        </div>

        <!--  -->
      </div>
      <div v-else class="w-full h-[460px]">
        <SkeletonLoader class="w-full h-full"> </SkeletonLoader>
      </div>
    </BaseComponent>
  </div>
  <el-drawer
    v-model="drawer"
    direction="btt"
    :with-header="false"
    @close="onClose()"
  >
  </el-drawer>
</template>
<script>
import BaseComponent from "@/components/common/baseComponent.vue";
import {
  convertCtoF,
  convertFtoC,
  convertTimestampToMonthYear,
  getIconHourlyForecastTheme,
} from "@/utils/converValue";
import PopupCalendarDetail from "../popup/popup-calendar-detail.vue";
import IcChanceOfRain from "@/components/icons/IcChanceOfRain.vue";
import { markRaw } from "vue";
import IcTemptMax from "@/components/icons/IcTemptMax.vue";
import IcTemptMin from "@/components/icons/IcTemptMin.vue";
import SkeletonLoader from "@/control-ui/SkeletonLoader/SkeletonLoader.vue";

export default {
  name: "calendar-page",

  components: {
    BaseComponent,
    PopupCalendarDetail,
    IcTemptMax,
    IcTemptMin,
    SkeletonLoader,
  },
  data() {
    return {
      IcChanceOfRain: markRaw(IcChanceOfRain),
      heightAuto: "auto",
      activeDayIndex: null,
      activeIndex: null, // Lưu trữ index của phần tử đang active
      drawer: false,
      dayValue: {},
    };
  },
  computed: {
    renderCalendar() {
      const daily = this.$store.state.weatherModule.dailyData;
      const listDaily30Day = this.$store.state.weatherModule.listDaily30Day;
      if (daily.length !== 0) {
        listDaily30Day.splice(0, 8, ...daily);
      }

      console.log("listDaily30Day", listDaily30Day);

      return listDaily30Day;
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

    locationOffsetValue() {
      return this.$store.state.weatherModule.locationOffset.offset;
    },

    adjustedCalendar() {
      if (!this.renderCalendar.length) return [];

      // Lấy ngày đầu tiên trong mảng dữ liệu
      const timestamp = this.renderCalendar[0].time;
      const adjustedTimestamp = timestamp + this.locationOffsetValue * 60; // offset từ phút sang giây
      const date = new Date(adjustedTimestamp * 1000); // Chuyển đổi thành Date objecte

      // Điều chỉnh theo múi giờ
      const utcTime = date.getTime();
      const localTime = new Date(
        utcTime + this.locationOffsetValue * 3600 * 1000
      );

      // Lấy ngày đầu tuần (firstDay)
      const firstDay = localTime.getDay();

      // Thứ Hai = 1, Chủ nhật = 0, cần điều chỉnh
      const placeholders = Array.from({
        length: firstDay === 0 ? 6 : firstDay - 1, // Số lượng ô trống trước ngày đầu tiên
      }).map(() => ({}));

      // Điều chỉnh ngày theo múi giờ (offset)
      const adjustedDays = this.renderCalendar.map((day) => {
        const date = new Date(day.time);

        // Nếu bạn cần sử dụng offset múi giờ, tính toán lại thời gian
        const utcTime = date.getTime();
        const localTime = new Date(
          utcTime + this.locationOffsetValue * 3600 * 1000
        );

        return { ...day, adjustedTime: localTime };
      });

      // Kết hợp các ô trống với dữ liệu của tháng
      return [...placeholders, ...adjustedDays];
    },
  },

  methods: {
    isCurrentMonth(timestamp) {
      if (!timestamp) return false;

      // Lấy thời gian hiện tại theo múi giờ đã điều chỉnh
      const now = new Date();
      const timezoneOffset = this.locationOffsetValue * 60; // offset từ phút sang giây
      const adjustedNow = new Date(now.getTime() + timezoneOffset * 1000);

      // Lấy tháng và năm hiện tại
      const currentMonth = adjustedNow.getMonth();
      const currentYear = adjustedNow.getFullYear();

      // Chuyển đổi timestamp sang ngày có offset
      const adjustedTimestamp = timestamp + timezoneOffset;
      const date = new Date(adjustedTimestamp * 1000);

      return (
        date.getMonth() === currentMonth && date.getFullYear() === currentYear
      );
    },
    onClose() {
      this.activeIndex = null;
    },
    onClickDraw(data, value, index) {
      this.activeIndex = index;
      this.drawer = value;
      this.dayValue = data;
    },
    // Thêm class khi popover hiển thị
    onShowPopover(index) {
      this.activeIndex = index; // Gán index của phần tử đang được click
    },

    // Khi Popover chuẩn bị đóng
    onBeforeLeavePopover() {
      this.activeIndex = null; // Xóa trạng thái active
    },
    convertIconCurrently(value) {
      if (value) {
        const url = getIconHourlyForecastTheme(value);
        return url;
      }
    },
    convertToShortDay(value) {
      // Kiểm tra nếu value không hợp lệ (null, undefined, NaN)
      if (!value || isNaN(value)) {
        console.error("Invalid timestamp:", value);
        return "Invalid Date";
      }
      // Chuyển timestamp Unix thành Date (value là giây)
      const adjustedTimestamp = value + this.locationOffsetValue * 60; // offset từ phút sang giây

      const date = new Date(adjustedTimestamp * 1000);

      const timezone =
        this.$store.state.weatherModule?.locationOffset?.timezone;

      // Lấy tên ngày viết tắt theo timezone
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        weekday: "short", // Trả về thứ viết tắt (Mon, Tue, Wed,...)
        day: "2-digit", // Ngày (DD)
        month: "2-digit", // Tháng (MM)
      });

      // Format lại thành mảng [weekday, day, month]
      const formattedDate = formatter.formatToParts(date);

      // Lấy thông tin ngày, tháng, thứ từ phần đã format
      let day = "";
      let month = "";

      formattedDate.forEach(({ type, value }) => {
        if (type === "day") day = value;
        if (type === "month") month = value;
      });

      // Trả về định dạng "Thu DD/MM" (VD: "Fri 21/02")
      return `${day}/${month}`;
    },

    onvertToShortMonth(value) {
      const offsetValue = this.$store.state.weatherModule.locationOffset.offset;
      const timezoneValue =
        this.$store.state.weatherModule.locationOffset.timezone;
      return convertTimestampToMonthYear(
        value,
        this.languageParam,
        offsetValue,
        timezoneValue
      );
    },

    convertToShortToDay() {
      // Lấy thời gian hiện tại
      const now = new Date();
      const offsetValue = this.$store.state.weatherModule.locationOffset.offset;
      const timezoneValue =
        this.$store.state.weatherModule.locationOffset.timezone;
      // Điều chỉnh thời gian theo offset (phút)
      const adjustedTime = new Date(now.getTime() + offsetValue * 60000);

      // Định dạng ngày/tháng theo múi giờ cụ thể
      const formatter = new Intl.DateTimeFormat("en-GB", {
        timeZone: timezoneValue,
        day: "2-digit",
        month: "2-digit",
      });

      // Format lại thành chuỗi DD/MM
      return formatter.format(adjustedTime);
    },

    getStyle(value) {
      if (this.convertToShortDay(value) === this.convertToShortToDay()) {
        return {
          backgroundColor: "rgba(0, 98, 245, 0.25)",
          border: "2px solid #0062F5",
          borderRadius: "10px",
        };
      } else {
        return { backgroundColor: "transparent" };
      }
    },

    isActive(index) {
      return this.activeDayIndex === index;
    },

    onClickActiveShow(value, index) {
      if (this.activeDayIndex === index) {
        this.activeDayIndex = null;
      } else {
        this.activeDayIndex = index; // Active ngày được click
      }
    },

    closeIfClickedOutside(event) {
      const daysList = this.$refs.daysList;
      if (daysList && !daysList.contains(event.target)) {
        this.activeDayIndex = null; // Tắt active nếu click ra ngoài
      }
    },

    convertTemperature(value) {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      if (unitSetting.activeTemperature_save === "f") {
        return convertFtoC(value);
      } else {
        return convertFtoC(value);
      }
    },
  },
};
</script>
<style lang="scss">
.calendar ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  text-align: center;
}

.calendar li {
  width: calc(100% / 7);
  position: relative; /* Make sure tooltip is positioned correctly */
  // border-radius: 10px;
}

.calendar .weeks li {
  cursor: default;
}

.calendar .days li {
  cursor: default;
  position: relative;
  // margin-top: 8px;
  border-right: 1px solid #cccccc56;
  border-bottom: 1px solid #cccccc56;
}

.days li.inactive {
  color: #3f62ad56;
  opacity: 0;
}

.days li.active {
  color: #a086dd;
}

.calendar li.weekend {
  color: var(--color-weekend);
}

.days li::before {
  position: absolute;
  content: "";
  left: 50%;
  top: 50%;
  height: 100%;
  width: 100%;
  z-index: -1;
  // border-radius: 10px;
  transform: translate(-50%, -50%);
}

.days li.active::before {
  background-color: rgba(148, 148, 148, 0.4);
  // border-radius: 10px;
}

.days li:not(.active):hover::before {
  border: 2px solid #abcaf9;
  border-radius: 10px;
}

.active-calender {
  background-color: rgba(114, 149, 202, 0.5); /* Ví dụ: thêm màu nền */
}

.current-month {
  opacity: 1;
}
</style>
