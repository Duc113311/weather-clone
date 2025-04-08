<template>
  <div class="w-full h-[60px] bg-nav flex items-center color-txt-df">
    <div class="w-full h-full pl-4 pr-4">
      <div class="w-full h-full container">
        <div class="w-full h-full flex justify-between items-center">
          <!-- left -->
          <div class="md:flex hidden items-center gap-4">
            <div
              class="flex items-center gap-2 cursor-pointer"
              @click="onClickShowWidget()"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 16V3C19 2.45 18.55 2 18 2H3C2.45 2 2 2.45 2 3V16C2 16.55 2.45 17 3 17H18C18.55 17 19 16.55 19 16ZM4 4H17V8H4V4ZM5 5V7H8V5H5ZM9 5V7H12V5H9ZM13 5V7H16V5H13ZM4.5 10C4.78 10 5 10.22 5 10.5C5 10.78 4.78 11 4.5 11C4.22 11 4 10.78 4 10.5C4 10.22 4.22 10 4.5 10ZM6 10H10V11H6V10ZM12 10H17V15H12V10ZM4.5 12C4.78 12 5 12.22 5 12.5C5 12.78 4.78 13 4.5 13C4.22 13 4 12.78 4 12.5C4 12.22 4.22 12 4.5 12ZM6 12H10V13H6V12ZM13 12V14H16V12H13ZM4.5 14C4.78 14 5 14.22 5 14.5C5 14.78 4.78 15 4.5 15C4.22 15 4 14.78 4 14.5C4 14.22 4.22 14 4.5 14ZM6 14H10V15H6V14Z"
                  fill="var(--color-icon-df)"
                />
              </svg>

              <span class="txt_regular_16">{{ $t("Widget") }}</span>
            </div>
          </div>
          <!-- right -->
          <div class="flex items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 12H5M5 12C5 15.866 8.13401 19 12 19M5 12C5 8.13401 8.13401 5 12 5M19 12H22M19 12C19 15.866 15.866 19 12 19M19 12C19 8.13401 15.866 5 12 5M12 2V5M12 19V22M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                stroke="var(--color-icon-df)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div class="flex items-center mr-2 gap-2">
              <span class="txt_regular_16"
                >{{ $t("Your_current_location") }}:</span
              >
              <span
                class="txt_medium_17 cursor-pointer color_60A5FA"
                @click="onClickLocationNow()"
                v-if="currentLocationChome?.country_key?.toLowerCase() === 'vn'"
                >{{ convertToLowCase(currentLocationChome.city) }}</span
              >
              <span
                class="txt_medium_des_16 color_60A5FA"
                v-else-if="
                  currentLocationChome?.country_key?.toLowerCase() === 'us'
                "
                >{{ currentLocationChome?.state }}</span
              >
              <span class="txt_medium_des_16 color_60A5FA" v-else>{{
                currentLocationChome?.city
              }}</span>
            </div>
            <div
              class="md:flex hidden items-center cursor-pointer txt_regular_14 bg-color-refresh pad_bth_app bg-btn-hover"
              @click="onClickRechange()"
            >
              <span>{{ $t("Reload") }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  decodeBase64,
  encodeBase64,
  getAqiDataFromLocation,
  getParamAirByCode,
  urlEncodeString,
} from "@/utils/EncoderDecoderUtils";
import { mapActions, mapGetters, mapMutations } from "vuex";
import removeAccents from "remove-accents";
import { ElNotification } from "element-plus";
import { setTitleScream } from "@/helpers/setTitle";

export default {
  name: "nav-bottom",

  data() {
    return {
      isMegaBoxVisible: false,
    };
  },

  setup() {
    const successUnit = () => {
      ElNotification({
        title: "Widget",
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
      "objectCityByLocationGetters",
      "listStateAmericanGetters",
      "locationChomeObjectGetters",
    ]),
    ...mapGetters("airQualityModule", [
      "airObjectGetters",
      "airKeyObjectGetters",
    ]),

    activeCities() {
      const paramCity = this.$route.params;

      if (Object.keys(paramCity).length !== 0) {
        const newData = paramCity.location[1];

        const newConvert = this.convertToSnakeCase(newData);
        return newConvert;
      }
      return "";
    },

    currentLocationChome() {
      const retrievedArray = JSON.parse(
        localStorage.getItem("currentLocationChome")
      );

      return retrievedArray ? retrievedArray : this.locationChomeObjectGetters;
    },

    breadcumsObject() {
      const retrievedArray = JSON.parse(localStorage.getItem("objectBread"));

      return retrievedArray ? retrievedArray : this.breadcumsObjectGetters;
    },

    objectCity() {
      if (this.breadcumsObject.country_key === "vn") {
        const retrievedArray = JSON.parse(
          sessionStorage.getItem("dataCityLog")
        );

        return this.objectCityByLocationGetters.length !== 0
          ? this.objectCityByLocationGetters
          : retrievedArray;
      } else if (this.breadcumsObject.country_key === "us") {
        const retrievedArray = JSON.parse(
          sessionStorage.getItem("dataStateAmerican")
        );
        return this.listStateAmericanGetters.length !== 0
          ? this.listStateAmericanGetters
          : retrievedArray;
      } else {
        return [];
      }
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
  },

  methods: {
    ...mapMutations("commonModule", [
      "setBreadcumsNotAllowLocation",
      "setKeyIndexComponent",
      "setIndexComponent",
    ]),
    ...mapActions("weatherModule", [
      "getWeatherDataCurrent",
      "getFormattedAddress",
    ]),
    ...mapActions("airQualityModule", ["getAirQualityByKey", "getAirQuality"]),
    ...mapMutations("weatherModule", ["setCityWeather"]),

    convertToLowCase(value) {
      const normalizedStr = value
        .normalize("NFD") // Chuyển chuỗi sang dạng tổ hợp Unicode
        .replace(/[\u0300-\u036f]/g, ""); // Loại bỏ các dấu

      return normalizedStr;
    },

    convertToSnakeCase(str) {
      return str
        .split("-") // Tách chuỗi dựa trên dấu "-"
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Viết hoa chữ cái đầu của từng từ
        .join("_"); // Nối lại bằng dấu "_"
    },

    toggleMegaBox() {
      this.isMegaBoxVisible = !this.isMegaBoxVisible; // Chuyển đổi trạng thái hiển thị
    },
    convertToSlug(str) {
      // Bước 1: Loại bỏ dấu tiếng Việt
      const normalizedStr = str
        .normalize("NFD") // Chuyển chuỗi sang dạng tổ hợp Unicode
        .replace(/[\u0300-\u036f]/g, ""); // Loại bỏ các dấu
      // Bước 2: Chuyển thành chữ thường và thay thế khoảng trắng bằng gạch ngang
      const resultConvert = normalizedStr
        .toLowerCase() // Chuyển thành chữ thường
        .replace(/\s+/g, "-") // Thay thế khoảng trắng bằng "-"
        .replace(/[^a-z0-9-]/g, ""); // Loại bỏ ký tự không hợp lệ (chỉ giữ lại chữ, số, và "-")

      return resultConvert;
    },

    convertToConvert(str) {
      const slug = removeAccents(str).toLowerCase().replace(/\s+/g, "-");
      return slug;
    },

    removeAccentsUnicode(str) {
      return str
        .normalize("NFD") // Chuẩn hóa Unicode thành dạng tổ hợp ký tự và dấu
        .replace(/[\u0300-\u036f]/g, "") // Loại bỏ tổ hợp dấu
        .replace(/đ/g, "d") // Xử lý riêng cho chữ "đ"
        .replace(/Đ/g, "D");
    },

    convertToConvertLowerCase(str) {
      const slug = this.removeAccentsUnicode(str).replace(/\s+/g, "_");
      return slug;
    },

    async onClickSearchState(value, valueCategory) {},

    async onClickSearchCity(value, valueCategory) {
      try {
        const nameCity = value.viNameLanguage;
        const urlParam = `version=1&type=4&app_id=amobi.weather.forecast.radar.rain&request=https://maps.googleapis.com/maps/api/geocode/json?address=${urlEncodeString(
          nameCity
        )}&key=TOH_KEY`;
        const valueEncode = encodeBase64(urlParam);

        await this.getFormattedAddress(valueEncode);

        const newDataValue = this.$store.state.weatherModule.newArray[0];
        const language = this.languageParam;

        const objectBread = {
          country: newDataValue.country,
          country_key: newDataValue.country_key.toLowerCase(),
          city: nameCity,
          city_key: this.convertToConvertLowerCase(nameCity),
          district: "",
          district_key: "",
          ward: "",
          ward_key: "",
          latitude: newDataValue.lat,
          longitude: newDataValue.lng,
        };

        localStorage.setItem("objectBread", JSON.stringify(objectBread));
        this.setBreadcumsNotAllowLocation(objectBread);

        const convertCityUrl = this.convertToConvert(objectBread.city);
        // Chuyển hướng ngay lập tức
        await this.$router.push({
          name: "today-weather",
          params: {
            language,
            location: [objectBread.country_key.toLowerCase(), convertCityUrl],
          },
        });
        this.setKeyIndexComponent(1);
        this.isMegaBoxVisible = true;
        setTimeout(() => {
          this.isMegaBoxVisible = false;
        }, 50);
        // this.$router.go();

        // Gọi các API sau khi chuyển hướng
        const param = `version=1&type=8&app_id=amobi.weather.forecast.radar.rain&request=https://api.forecast.io/forecast/TOH_KEY/${objectBread.latitude},${objectBread.longitude}?lang=${this.languageParam}`;

        const resultAir = getAqiDataFromLocation(
          objectBread.latitude,
          objectBread.longitude
        );

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
      } catch (error) {
        console.error("Error while searching city:", error);
        // Hiển thị thông báo lỗi cho người dùng
      }
    },

    getLanguageDisplay(data, languageKey) {
      return data.languages[languageKey] || data.languages.vi;
    },

    onClickShowWidget() {
      this.$router.push({
        path: `/${this.languageParam}/create-widget`,
      });
    },

    async onClickLocationNow() {
      this.valueSearch = "";

      const currentChrome = this.currentLocationChome;

      if (currentChrome?.country_key?.toLowerCase() === "vn") {
        let objectBread = {
          country: currentChrome.country,
          country_key: currentChrome.country_key.toLowerCase(),
          city: currentChrome.city ? currentChrome.city : "",
          city_key: currentChrome.city_key ? currentChrome.city_key : "",
          district: currentChrome.district ? currentChrome.district : "",
          district_key: currentChrome.district_key
            ? currentChrome.district_key
            : "",
          ward: currentChrome.ward ? currentChrome.ward : "",
          ward_key: currentChrome.ward_key ? currentChrome.ward_key : "",
          latitude: currentChrome.latitude,
          longitude: currentChrome.longitude,
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
              language: this.languageParam,
              location: [
                objectBread.country_key.toLowerCase(),
                this.convertLowerCase(objectBread.city),
              ],
            },
          });
        }
      } else {
        let objectBread = {
          country: currentChrome.country,
          country_key: currentChrome.country_key.toLowerCase(),
          state: currentChrome.state,
          state_key: currentChrome.state_key,
          county: currentChrome.county,
          cities: currentChrome.cities,
          latitude: currentChrome.lat,
          longitude: currentChrome.lng,
        };

        localStorage.setItem("objectBread", JSON.stringify(objectBread));

        this.setBreadcumsNotAllowLocation(objectBread);

        // tồn tại thành phố
        if (objectBread.state.length !== 0 && objectBread.cities.length === 0) {
          await this.$router.push({
            name: "today-weather",
            params: {
              language: this.languageParam,
              location: [
                objectBread.country_key.toLowerCase(),
                this.convertLowerCase(objectBread.state),
              ],
            },
          });
        }
      }

      const retrievedArray = JSON.parse(localStorage.getItem("objectBread"));
      setTitleScream(0, retrievedArray, this.languageParam);

      const param = `version=1&type=8&app_id=amobi.weather.forecast.radar.rain&request=https://api.forecast.io/forecast/TOH_KEY/${currentChrome.latitude},${currentChrome.longitude}?lang=${this.languageParam}`;

      // const latLong = localStorage.getItem("locationLatLong");
      const resultAir = getAqiDataFromLocation(
        currentChrome.latitude,
        currentChrome.longitude
      );
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

    convertLowerCase(str) {
      const slug = removeAccents(str);
      return slug.replace(/\s+/g, "-").toLowerCase();
    },

    async onClickRechange() {
      this.valueSearch = "";

      window.location.reload();
    },
  },
};
</script>
<style lang="scss"></style>
