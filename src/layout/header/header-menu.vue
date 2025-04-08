<template>
  <div class="header-menu">
    <!--  -->
    <div class="w-full h-full relative">
      <div class="md:flex w-full items-center justify-between hidden">
        <div
          class="flex items-center gap-2"
          v-if="namePage !== 'unit_settings' && namePage !== 'unit_language'"
        >
          <img
            src="../../assets/images/svg_v2/ic_settings.svg"
            alt=""
            srcset=""
          />
          <p class="txt_regular text-white">{{ $t("Setting") }}</p>
        </div>
        <div
          @click="onClickBack('settings')"
          class="flex items-center gap-2 cursor-pointer"
          v-if="namePage === 'unit_settings'"
        >
          <img
            src="../../assets/images/svg_v2/ic_back_st.svg"
            alt=""
            srcset=""
          />
          <p class="txt_regular text-white">
            <span>{{ $t(`Unit_preferences_settings`) }}</span>
          </p>
        </div>
        <div
          @click="onClickBack('settings')"
          class="flex items-center gap-2 cursor-pointer"
          v-if="namePage === 'unit_language'"
        >
          <img
            src="../../assets/images/svg_v2/ic_back_st.svg"
            alt=""
            srcset=""
          />
          <p class="txt_regular text-white">
            <span>{{ $t(`Language_content`) }}</span>
          </p>
        </div>

        <img
          @click="onClickCancel"
          src="../../assets/images/svg_v2/ic_close.svg"
          alt=""
          width="24"
          class="cursor-pointer"
        />
      </div>
      <!-- Mobile -->

      <div class="md:hidden block address-now text-left cursor-pointer z-30">
        <!--  -->
        <div
          class="flex justify-between items-center pl-4 pr-4 bg-h-location pt-2 pb-2"
        >
          <div
            class="flex txt_regular_14"
            v-if="breadcumsObject?.country_key?.toLowerCase() === 'vn'"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 12H5M5 12C5 15.866 8.13401 19 12 19M5 12C5 8.13401 8.13401 5 12 5M19 12H22M19 12C19 15.866 15.866 19 12 19M19 12C19 8.13401 15.866 5 12 5M12 2V5M12 19V22M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            &nbsp;
            <div class="flex items-center">
              <p v-if="breadcumsObject?.city">
                {{ convertToLowCase(breadcumsObject.city) }},
              </p>
              &nbsp;
              <p v-if="breadcumsObject?.country">
                {{ breadcumsObject?.country }}
              </p>
            </div>
          </div>

          <div class="flex items-center txt_regular_12 color-text">
            <div class="flex items-center gap-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="icon-path"
                  d="M12.0229 13.4997C12.3511 13.4999 12.6702 13.3917 12.9308 13.1921C13.1914 12.9925 13.3788 12.7125 13.4641 12.3955C13.5493 12.0785 13.5277 11.7422 13.4024 11.4388C13.2772 11.1354 13.0554 10.8818 12.7714 10.7172V6.01172C12.7714 5.81281 12.6924 5.62204 12.5517 5.48139C12.4111 5.34074 12.2203 5.26172 12.0214 5.26172C11.8225 5.26172 11.6317 5.34074 11.491 5.48139C11.3504 5.62204 11.2714 5.81281 11.2714 6.01172V10.7195L11.2691 10.7202L8.49862 9.12122C8.32645 9.02333 8.12256 8.99752 7.93142 9.04941C7.74029 9.1013 7.57744 9.22668 7.47842 9.3982C7.37939 9.56971 7.35222 9.77344 7.40284 9.96491C7.45347 10.1564 7.57777 10.3201 7.74862 10.4202L10.5311 12.0267C10.5361 12.4192 10.6955 12.794 10.9749 13.0697C11.2543 13.3454 11.6303 13.4999 12.0229 13.4997Z"
                />
                <path
                  class="icon-path"
                  d="M22.5 12C22.5 6.201 17.799 1.5 12 1.5C6.201 1.5 1.5 6.201 1.5 12C1.5 17.799 6.201 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12ZM20.25 12C20.25 16.5562 16.5562 20.25 12 20.25C7.44375 20.25 3.75 16.5562 3.75 12C3.75 7.44375 7.44375 3.75 12 3.75C16.5562 3.75 20.25 7.44375 20.25 12Z"
                />
              </svg>
              <div class="text-left">
                <span>{{ $t("Local_time") }}: </span>&nbsp;
              </div>
            </div>
            <span id="s-date-time" class="flex items-center">
              {{ vietnamTime }}
            </span>
          </div>
        </div>
        <!--  -->
        <div class="w-full mt-2">
          <div
            class="w-full"
            v-if="valueScream !== 'unit-preferences-settings'"
          >
            <div
              v-for="(menu, index) in menuItems"
              :key="index"
              class="cursor-pointer pl-4 pr-4 pt-2 pb-2 flex bg-btn-hover justify-start"
              @click="onClickMobile(menu)"
            >
              <div class="flex justify-between items-center w-full">
                <div class="flex items-center txt-medium gap-2 cursor-pointer">
                  <component :is="menu.icon" class="menu-icon" />
                  <span class="txt_regular_14">{{ menu.label }}</span>
                </div>

                <div class="flex items-center" v-if="menu.isShowArrow">
                  <component :is="IcBackRight"></component>
                </div>
                <div v-if="menu.isSwitch">
                  <el-switch
                    v-model="valueLives"
                    @change="onChangeLiveActivity"
                    class="ml-2"
                    style="
                      --el-switch-on-color: #0c61ee;
                      --el-switch-off-color: #d4cccc;
                    "
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            class="pl-3 pr-3"
            v-if="valueScream === 'unit-preferences-settings'"
          >
            <div
              class="flex items-center cursor-pointer"
              @click="onClickBackMobile"
            >
              <div>
                <component :is="IcBackLeft"></component>
              </div>
              <div class="txt_medium_14 flex items-center">
                <span>{{ $t(`Unit_preferences_settings`) }}</span>
              </div>
            </div>
            <UnitPreferencesPageMobile></UnitPreferencesPageMobile>
          </div>
        </div>
      </div>

      <!-- Desktop -->
      <div
        class="md:block hidden address-now pt-2 pb-2 text-left cursor-pointer text-blue-300"
        :key="indexState + Math.random()"
      >
        <div
          class="flex"
          v-if="breadcumsObject?.country_key?.toLowerCase() === 'vn'"
        >
          <p v-if="breadcumsObject?.city">
            <!-- {{ $t(`city.city_${languageParam}.${breadcumsObject?.city_key}`) }}, -->
            {{ convertToLowCase(breadcumsObject.city) }},
          </p>
          &nbsp;
          <p v-if="breadcumsObject?.country">{{ breadcumsObject?.country }}</p>
        </div>
      </div>

      <!-- desktop -->
      <div class="w-full md:block hidden">
        <div
          v-if="namePage !== 'unit_settings' && namePage !== 'unit_language'"
          class="w-full nav-bar cursor-pointer flex justify-between pad-option-tb-8"
          @click="onClickUnitSetting('unit_settings')"
        >
          <div class="txt_regular flex items-center text-white">
            <span>{{ $t(`Unit_preferences_settings`) }}</span>
          </div>
          <div>
            <img src="../../assets/images/svg/ic_back_right.svg" alt="" />
          </div>
        </div>
        <div
          v-if="namePage !== 'unit_settings' && namePage !== 'unit_language'"
          class="w-full nav-bar cursor-pointer flex justify-between pad-option-tb-8"
          @click="onClickLanguage('unit_language')"
        >
          <div class="txt_regular flex items-center text-white">
            <span>{{ $t(`Language_content`) }}</span>
          </div>
          <div>
            <img src="../../assets/images/svg/ic_back_right.svg" alt="" />
          </div>
        </div>

        <div
          v-if="namePage !== 'unit_settings' && namePage !== 'unit_language'"
          class="w-full nav-bar cursor-pointer flex justify-between pad-option-tb-8"
        >
          <div class="txt_regular flex items-center text-white">
            <span>{{ $t("Theme_settings") }}</span>
          </div>
          <div>
            <el-switch
              v-model="valueLives"
              @change="onChangeLiveActivity"
              class="ml-2"
              style="
                --el-switch-on-color: #0c61ee;
                --el-switch-off-color: #d4cccc;
              "
            />
          </div>
        </div>

        <!--  -->
        <UnitPreferencesPage
          v-if="namePage === 'unit_settings'"
        ></UnitPreferencesPage>

        <LanguagePage v-if="namePage === 'unit_language'"></LanguagePage>
      </div>

      <!-- mobile -->

      <div class="txt_regular_14 absolute bottom-0 right-0 color-footer p-5">
        <span>{{ $t("Version") }} 6 - 26/2/2025</span>
      </div>
    </div>
  </div>
</template>
<script>
import UnitPreferencesPage from "@/components/settings/unit-preferences-page.vue";
import { convertToEnglish } from "@/utils/converValue";
import { mapActions, mapGetters, mapMutations } from "vuex";
import { formatInTimeZone } from "date-fns-tz";
import IcCalendar from "@/components/icons/mobile/IcCalendar.vue";
import IcOclock from "@/components/icons/mobile/IcOclock.vue";
import IcCloudSun from "@/components/icons/mobile/IcCloudSun.vue";
import IcApiTab from "@/components/icons/mobile/IcApiTab.vue";
import IcUvIndex from "@/components/icons/mobile/IcUvIndex.vue";
import IcMoonphase from "@/components/icons/mobile/IcMoonphase.vue";
import IcRadar from "@/components/icons/mobile/IcRadar.vue";
import IcUnitPreferences from "@/components/icons/mobile/IcUnitPreferences.vue";
import IcDarkLight from "@/components/icons/mobile/IcDarkLight.vue";
import IcLanguage from "@/components/icons/mobile/IcLanguage.vue";
import IcRightArrow from "@/components/icons/mobile/IcRightArrow.vue";
import { markRaw } from "vue";
import UnitPreferencesPageMobile from "@/components/settings/unit-preferences-page-mobile.vue";
import IcBackLeft from "@/components/icons/mobile/IcBackLeft.vue";
import IcBackRight from "@/components/icons/mobile/IcBackRight.vue";
import {
  checkSubstring,
  convertLowerCase,
  convertToConvertLowerCase,
  convertToVietnamese,
  removeWordAndAccents,
  replaceApostropheWithUnderscore,
} from "@/utils/coverTextSystem";
import {
  encodeBase64,
  getAqiDataFromLocation,
  getParamAirByCode,
  urlEncodeString,
} from "@/utils/EncoderDecoderUtils";
import removeAccents from "remove-accents";
import { Search } from "@element-plus/icons-vue";
import LanguagePage from "@/components/settings/language-page.vue";

export default {
  name: "header-menu",

  setup() {
    return {
      Search,
    };
  },
  components: {
    UnitPreferencesPage,
    UnitPreferencesPageMobile,
    IcCalendar,
    IcOclock,
    IcCloudSun,
    IcApiTab,
    IcUvIndex,
    IcMoonphase,
    IcRadar,
    IcLanguage,
    IcDarkLight,
    IcUnitPreferences,
    IcRightArrow,
    LanguagePage,
  },

  data() {
    return {
      namePage: "setting",
      valueSearch: "",
      valueLives: false,
      suggestions: [],
      selectedActive: null,
      suggestionsTop100: [],
      suggestionsFull: [],

      theme: "dark",
      indexKey: 0,
      vietnamTime: "",
      usTime: "",
      valueScream: "",
      IcRightArrow: markRaw(IcRightArrow),
      IcBackLeft: markRaw(IcBackLeft),
      IcBackRight: markRaw(IcBackRight),
      userTimeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // Múi giờ của người dùng
    };
  },

  watch: {
    valueSearch(newValue) {
      if (!newValue) {
        // Khi giá trị bị xóa, reset danh sách gợi ý
        this.suggestions = [];
      }
    },
  },

  computed: {
    ...mapGetters("commonModule", ["breadcumsObjectGetters"]),
    indexState() {
      return this.$store.state.commonModule.indexComponent;
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
      return retrievedArray ? retrievedArray : this.breadcumsObjectGetters;
    },

    menuItems() {
      return [
        {
          name: "today-weather",
          label: this.$t("Today"),
          isRun: true,
          isShowArrow: false,
          isSwitch: false,
          icon: IcCloudSun,
        },
        {
          name: "hourly-weather",
          label: this.$t("Hourly"),
          isRun: true,
          isShowArrow: false,
          isSwitch: false,
          icon: IcOclock,
        },
        {
          name: "month-weather",
          label: this.$t("Month"),
          isShowArrow: false,
          isRun: true,
          isSwitch: false,
          icon: IcCalendar,
        },
        {
          name: "radar-weather",
          label: this.$t("Radar"),
          isShowArrow: false,
          isRun: true,
          isSwitch: false,
          icon: IcRadar,
        },
        {
          name: "air-quality-weather",
          label: this.$t("AQI"),
          isShowArrow: false,
          isRun: true,
          isSwitch: false,
          icon: IcApiTab,
        },
        {
          name: "uv-weather",
          label: this.$t("UV"),
          isShowArrow: false,
          isRun: true,
          isSwitch: false,
          icon: IcUvIndex,
        },
        {
          name: "moon-phase-weather",
          label: this.$t("Moon_phase"),
          isShowArrow: false,
          isRun: true,
          isSwitch: false,
          icon: IcMoonphase,
        },

        {
          name: "unit-preferences-settings",
          label: this.$t("Unit_preferences_settings"),
          isShowArrow: true,
          isRun: false,
          isSwitch: false,
          icon: IcUnitPreferences,
        },

        {
          name: "dark-light",
          label: this.$t("Theme_settings"),
          isRun: false,
          isShowArrow: false,
          isSwitch: true,
          icon: IcDarkLight,
        },

        {
          name: "language-view",
          label: this.$t("Language_content"),
          isRun: false,
          isShowArrow: true,
          isSwitch: false,
          icon: IcLanguage,
        },
      ];
    },

    objectCityByLocationData() {
      const retrievedArray = JSON.parse(sessionStorage.getItem("dataCityLog"));
      const resultData = retrievedArray
        ? retrievedArray
        : this.objectCityByLocationGetters;

      return resultData;
    },

    listCityAllData() {
      const retrievedArray = JSON.parse(sessionStorage.getItem("dataCityAll"));
      const resultData = retrievedArray
        ? retrievedArray
        : this.listCityAllGetters;

      return resultData;
    },
  },

  mounted() {
    const savedTheme = localStorage.getItem("theme");
    document.documentElement.setAttribute("data-theme", savedTheme);
    if (savedTheme === "light") {
      this.valueLives = true;
    } else {
      this.valueLives = false;
    }

    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 1000);

    this.valueSearch = "";
  },

  methods: {
    ...mapMutations("commonModule", [
      "setIndexComponent",
      "updateThemeColor",
      "setThemeState",
      "setKeyIndexComponent",
      "setIsScroll",
      "setBreadcumsNotAllowLocation",
      "setBreadcumsAllowLocation",
      "setIndexComponent",
      "setObjectCityByLocation",
      "setListDetailCityAll",
      "setObjectFormattesLocation",
    ]),

    ...mapActions("weatherModule", [
      "getWeatherDataCurrent",
      "getFormattedAddress",
    ]),

    ...mapActions("airQualityModule", ["getAirQualityByKey", "getAirQuality"]),

    async querySearchAsync(queryString, cb) {
      let timeout;
      // Tạo phần tử "Sử dụng vị trí hiện tại"
      const useCurrentLocation = {
        isFallback: true,
        address: "",
        country: "",
      };

      if (!this.valueSearch) {
        // Khi không có giá trị tìm kiếm, chỉ hiển thị "Sử dụng vị trí hiện tại"
        this.suggestions = [useCurrentLocation];
        timeout = setTimeout(() => {
          cb(this.suggestions);
        }, 300);
        return;
      }

      // Gọi API để lấy dữ liệu gợi ý
      const urlParam = `version=1&type=4&app_id=amobi.weather.forecast.radar.rain&request=https://maps.googleapis.com/maps/api/geocode/json?address=${urlEncodeString(
        this.valueSearch
      )}&key=TOH_KEY`;

      const value = encodeBase64(urlParam);

      try {
        await this.getFormattedAddress(value);

        // Đảm bảo giá trị tìm kiếm không thay đổi
        if (this.valueSearch === queryString) {
          // Thêm phần tử "Sử dụng vị trí hiện tại" vào đầu danh sách
          this.suggestions = [
            useCurrentLocation,
            ...(this.$store.state.weatherModule.newArray || []),
          ];
          timeout = setTimeout(() => {
            cb(this.suggestions);
          }, 300);
        }
      } catch (error) {
        console.error("Error fetching address:", error);
        this.suggestions = [useCurrentLocation];
        cb(this.suggestions);
      }
    },

    async handleSelect(item) {
      this.valueSearch = "";

      if (item?.country_key?.toLowerCase() === "vn") {
        await this.loadProvince();
        await this.loadAllFileJson();
      } else {
        await this.loadProvinceWould(item.country);
      }
      let language = this.languageParam;
      if (item?.country_key?.toLowerCase() === "vn") {
        let objectBread = {
          country: item.country,
          country_key: item.country_key.toLowerCase(),
          city: item.city ? this.findCityData(item).viNameLanguage : "",
          city_key: item.city ? this.findCityData(item).keyAccentLanguage : "",
          district:
            item.district && this.findDistrictsData(item) ? item.district : "",
          district_key:
            item.district &&
            item.district.trim() !== "" &&
            this.findDistrictsData(item)
              ? this.findDistrictsData(item).keyAccentLanguage
              : "",
          ward:
            item.ward && this.getWardsByLocation(item)
              ? this.getWardsByLocation(item).viNameLanguage
              : "",
          ward_key:
            item.ward && this.getWardsByLocation(item)
              ? this.getWardsByLocation(item).keyAccentLanguage
              : "",
          latitude: item.lat,
          longitude: item.lng,
        };

        localStorage.setItem("objectBread", JSON.stringify(objectBread));

        this.setBreadcumsNotAllowLocation(objectBread);

        // tồn tại thành phố
        if (
          objectBread.city.length !== 0 &&
          objectBread.district.length === 0
        ) {
          await this.$router.push({
            name: "today-weather",
            params: {
              language: language,
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
            name: "today-weather",
            params: {
              language: language,
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
            name: "today-weather",
            params: {
              language: language,
              location: [
                objectBread.country_key.toLowerCase(),
                convertLowerCase(objectBread.city),
                convertLowerCase(objectBread.district),
                convertLowerCase(removeWordAndAccents(objectBread.ward)),
              ],
            },
          });
        }
      } else {
        // Trên thế giới
        let objectBread = {
          country: item.country,
          country_key: item.country_key.toLowerCase(),
          state: item.state,
          state_key: item.state_key,
          county: item.county,
          cities: item.cities,
          latitude: item.lat,
          longitude: item.lng,
        };

        localStorage.setItem("objectBread", JSON.stringify(objectBread));
        this.setBreadcumsAllowLocation(objectBread);

        // Bang
        if (objectBread.state.length !== 0 && objectBread.cities.length === 0) {
          await this.$router.push({
            name: "today-weather",
            params: {
              language: language,
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
            name: "today-weather",
            params: {
              language: language,
              location: [
                objectBread.country_key.toLowerCase(),
                convertLowerCase(objectBread.state),
                convertLowerCase(objectBread.cities),
              ],
            },
          });
        }
      }

      // window.location.reload();

      const param = `version=1&type=8&app_id=amobi.weather.forecast.radar.rain&request=https://api.forecast.io/forecast/TOH_KEY/${item.lat},${item.lng}?lang=en`;
      const resultAir = getAqiDataFromLocation(item.lat, item.lng);
      const encodeDataWeather = encodeBase64(param);

      // API Get Weather Current
      await this.getWeatherDataCurrent(encodeDataWeather);

      const encodeKeyAir = encodeBase64(resultAir);
      // API Get Air Quality By Key
      await this.getAirQualityByKey(encodeKeyAir);

      const airCode = getParamAirByCode(this.airKeyObjectGetters?.key);
      const encodeAirCode = encodeBase64(airCode);
      // API Get Air Quality Data
      await this.getAirQuality(encodeAirCode);
      this.indexKey = this.indexKey + 1;
      this.setIndexComponent(this.indexKey);
    },

    async loadProvince() {
      const dataCityVNSession = JSON.parse(
        sessionStorage.getItem("dataCityLog")
      );
      if (!dataCityVNSession) {
        try {
          const response = await fetch("/json/city/city.json");
          if (!response.ok)
            throw new Error(
              `Failed to fetch data: ${response.status} ${response.statusText}`
            );
          const data = await response.json(); // Parse JSON data
          this.provinceData = data;
          this.setObjectCityByLocation(this.provinceData);
        } catch (error) {
          console.error("Error loading file:", error.message);
        }
      } else {
        this.setObjectCityByLocation(dataCityVNSession);
      }
    },

    async loadAllFileJson() {
      let provinces = [];
      const dataCityLogVNSession = JSON.parse(
        sessionStorage.getItem("dataCityAll")
      );
      if (!dataCityLogVNSession) {
        const context = require.context(
          "/public/json/vietnamese",
          false,
          /\.json$/
        );
        // context.keys() trả về danh sách các file, duyệt qua và import dữ liệu của từng file
        const provincesData = context.keys().map((key) => {
          const provinceData = context(key); // Load dữ liệu từ file

          provinces.push(provinceData);
        });
        this.setListDetailCityAll(provinces);
      } else {
        this.setListDetailCityAll(dataCityLogVNSession);
      }
    },

    async loadProvinceWould(value) {
      const formattedCountry = value.replace(/ /g, "_");
      const dataCityVNSession = JSON.parse(
        sessionStorage.getItem(`data_${formattedCountry}`)
      );
      if (!dataCityVNSession) {
        try {
          const response = await fetch(`/json/city/${formattedCountry}.json`);
          if (!response.ok)
            throw new Error(
              `Failed to fetch data: ${response.status} ${response.statusText}`
            );
          const data = await response.json(); // Parse JSON data
          const objectState = {
            provinceData: data,
            keyStorage: formattedCountry,
          };
          this.setObjectFormattesLocation(objectState);
        } catch (error) {
          console.error("Error loading file:", error.message);
        }
      } else {
        this.setObjectFormattesLocation(dataCityVNSession);
      }
    },

    findCityData(value) {
      const listCityVN = this.objectCityByLocationData;

      const replaceCity = convertToVietnamese(value.city).cityConvert;
      for (let index = 0; index < listCityVN.length; index++) {
        const element = listCityVN[index];
        const provinceCityData = element.provinceCity;
        const findData = provinceCityData.find(
          (x) => x.keyAccentLanguage === replaceCity
        );
        if (findData) {
          return findData;
        }
      }
    },

    findDistrictsData(value) {
      const listCityVN = this.listCityAllData;

      const replaceCity = convertToVietnamese(value.city).cityConvert;
      const replaceDistrict = convertToConvertLowerCase(value.district);

      const replaceApos = replaceApostropheWithUnderscore(replaceDistrict);
      const findData = listCityVN.find(
        (x) => x.keyAccentLanguage === replaceCity
      );

      if (findData) {
        const districtListData = findData.districtList;

        // Kiểm tra districtListData có tồn tại và là mảng không
        if (Array.isArray(districtListData)) {
          for (let index = 0; index < districtListData.length; index++) {
            const element = districtListData[index];

            const checkSub = checkSubstring(
              removeAccents(element.keyAccentLanguage),
              replaceApos
            );

            if (checkSub) {
              return element; // Trả về district nếu tìm thấy
            }
          }
        } else {
          console.error("districtListData không phải là mảng");
        }
      }

      return null; // Trả về null nếu không tìm thấy district
    },

    getWardsByLocation(value) {
      // Lấy danh sách Viet nam
      const listCityVN = this.listCityAllData;

      const replaceCity = convertToVietnamese(value.city).cityConvert;
      const replaceDistrict = convertToConvertLowerCase(value.district);

      const findData = listCityVN.find(
        (x) => x.keyAccentLanguage === replaceCity
      );
      if (findData) {
        const districtListData = findData.districtList;

        if (Array.isArray(districtListData)) {
          for (let index = 0; index < districtListData.length; index++) {
            const element = districtListData[index];

            const listWard = element.wards;
            const findDataWard = listWard.find(
              (x) => x.location.lat === value.lat
            );
            if (findDataWard) {
              localStorage.setItem("locationDistrict", element.location);
              return findDataWard;
            }
          }
        } else {
          console.error("districtListData không phải là mảng");
        }
      }
    },

    updateTime() {
      const now = new Date();

      // Định dạng giờ Việt Nam (Asia/Ho_Chi_Minh)
      const timeZone = this.userTimeZone;
      this.vietnamTime = formatInTimeZone(
        now,
        timeZone,
        "HH:mm:ss | dd/MM/yyyy"
      );
    },

    convertToEnglishRender(value) {
      return convertToEnglish(value);
    },
    convertToLowCase(value) {
      const normalizedStr = value
        .normalize("NFD") // Chuyển chuỗi sang dạng tổ hợp Unicode
        .replace(/[\u0300-\u036f]/g, ""); // Loại bỏ các dấu

      return normalizedStr;
    },
    onClickUnitSetting(value) {
      this.namePage = value;
    },

    onClickLanguage(value) {
      this.namePage = value;
    },

    onClickLanguagesSetting(value) {},

    onClickCancel() {
      this.$emit("onChangeCloseMenu", false);
    },

    onClickBack(value) {
      this.namePage = value;
    },

    onChangeLiveActivity(value) {
      this.valueLive = value;
      this.setIndexComponent(this.indexKey++);

      this.theme = this.valueLive ? "light" : "dark";

      this.setThemeState(this.theme);
      document.documentElement.setAttribute("data-theme", this.theme); // Gán `data-theme` vào HTML
      localStorage.setItem("theme", this.theme); // Lưu trạng thái vào localStorage
    },

    async onClickMobile(value) {
      if (value.isRun) {
        this.valueScream = value.name;

        const objectBread = JSON.parse(localStorage.getItem("objectBread"));
        const countryKey = objectBread.country_key;

        if (countryKey.toLowerCase() === "vn") {
          // tồn tại thành phố
          if (
            objectBread.city.length !== 0 &&
            objectBread.district.length === 0
          ) {
            await this.$router.push({
              name: value.name,
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
              name: value.name,
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
              name: value.name,
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
          this.$emit("route-changed", value.name);
        } else {
          if (
            objectBread.state.length !== 0 &&
            objectBread.cities.length === 0
          ) {
            await this.$router.push({
              name: value.name,
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
              name: value.name,
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
          this.$emit("route-changed", value.name);
        }

        this.$emit("onChangeCloseMenu", false);
        this.setIsScroll(false);
      } else {
        this.valueScream = value.name;
      }
    },

    onClickBackMobile(value) {
      this.valueScream = "";
    },
  },
};
</script>
<style lang="scss">
.header-menu {
  background-color: var(--bg-menu-mobile);
  border-top: 1px solid hsla(0, 0%, 76%, 0.2);
  color: var(--color-menu-mobile);
  display: none;
  overflow-y: auto;
  // padding: 12px 0 0px;
  z-index: 100;
}
@media (min-width: 768px) {
  .header-menu {
    // background: linear-gradient(to bottom, #343863, #a6a6c4);
    background-image: url(../../assets/images/svg_v2/background.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    -webkit-box-shadow: 1px 0 4px 0 rgba(0, 0, 0, 0.5);
    box-shadow: 1px 0 4px 0 rgba(0, 0, 0, 0.5);
    color: #f9f9f9;
    padding: 20px 20px 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 478px;
  }
}
.basic-header.menu-open .header-menu {
  display: block;
}
.basic-header .header-menu {
  height: 100vh;
}

@media (max-width: 767px) {
  .basic-header .header-menu {
    height: calc(100vh - 44px);
  }
}
.basic-header.menu-open .header-menu {
  display: block;
}

.pad-option-tb-8 {
  padding-top: 8px;
  padding-bottom: 8px;
}

.bg-h-location {
  background-color: var(--bg-location-header);
}
</style>
