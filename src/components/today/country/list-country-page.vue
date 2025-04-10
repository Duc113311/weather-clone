<template>
  <div class="w-full">
    <ItemComponent>
      <!--  -->
      <template v-slot:header>
        <div class="flex justify-between items-center">
          <div class="flex items-center text-left gap-2">
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
            <span class="txt_medium_14">{{
              convertCapitalizeWords($t("Provinces_Weather"))
            }}</span>
          </div>
        </div>
      </template>

      <div class="w-full h-auto" v-if="listCityState.length !== 0">
        <!--  -->
        <transition-group name="fade" tag="div" class="district-list">
          <ProvinceCardPage
            v-for="(item, index) in displayedItems"
            :key="`district-${index}`"
            :objectProvince="item"
            @click="onClickRenderCityLocation(item)"
          ></ProvinceCardPage>
        </transition-group>
        <div class="w-full text-left mt-3" v-if="listCityState.length > 8">
          <button
            type="button"
            class="bg-gradient-to-r from-cyan-500 text-white to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none font-medium rounded-lg text-sm px-3 py-2 text-center me-2 md:mb-2"
          >
            <span class="txt_regular_12">
              {{ showLessButton ? $t("Hide") : $t("See_more") }}</span
            >
          </button>
        </div>
      </div>
      <div class="h-[212px]" v-else>
        <div class="w-full h-full justify-center flex items-center">
          {{ $t("In_development") }}
        </div>
      </div>
    </ItemComponent>
  </div>
</template>
<script>
import { capitalizeWords, convertHaversine } from "@/utils/converValue";
import { mapActions, mapGetters, mapMutations } from "vuex";
import { getDistance } from "geolib";
import {
  convertLowerCase,
  decryptData,
  getFromIndexedDB,
} from "@/utils/coverTextSystem";
import {
  encodeBase64,
  getAqiDataFromLocation,
  getParamAirByCode,
} from "@/utils/EncoderDecoderUtils";
import { setTitleScream } from "@/helpers/setTitle";
import IcCardProvinces from "@/components/icons/IcCardProvinces.vue";
import { markRaw } from "vue";
import ProvinceCardPage from "@/components/common/card/province-card-page.vue";
import ItemComponent from "@/components/common/itemComponent.vue";
export default {
  name: "list-country-page",

  components: {
    ItemComponent,
    ProvinceCardPage,
  },
  data() {
    return {
      indexKey: 0,
      IcCardProvinces: markRaw(IcCardProvinces),
      listCityState: [],
      itemsPerPage: 14, // Số mục hiển thị ban đầu
      currentPage: 1, // Trang hiện tại
      showLessButton: false,
    };
  },

  computed: {
    ...mapGetters("airQualityModule", [
      "airObjectGetters",
      "airKeyObjectGetters",
    ]),
    ...mapGetters("commonModule", [
      "objectCityByLocationGetters",
      "breadcumsObjectGetters",
      "listStateAmericanGetters",
      "locationChomeObjectGetters",
      "objectFormatLocationGetters",
    ]),

    displayedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = this.currentPage * this.itemsPerPage;
      return this.listCityState.slice(0, end);
    },

    listCityWorldData() {
      const retrievedValue = JSON.parse(localStorage.getItem("objectBread"));
      const formattedCountry = retrievedValue.country.replace(/ /g, "_");

      const dataCityVNSession = JSON.parse(
        sessionStorage.getItem(`${formattedCountry}`)
      );

      const resultData = decryptData(dataCityVNSession)
        ? decryptData(dataCityVNSession)
        : this.objectFormatLocationGetters;

      debugger;
      return resultData;
    },

    renderLanguage() {
      const languageRouter = this.$route.params;
      return Object.keys(languageRouter).length !== 0
        ? languageRouter.language
        : this.$i18n.locale;
    },

    languageParam() {
      const languageRouter = this.$route.params;
      debugger;
      return Object.keys(languageRouter).length !== 0
        ? languageRouter.language !== "en" && languageRouter.language !== "vi"
          ? "en"
          : languageRouter.language
        : this.$i18n.locale !== "en" && this.$i18n.locale !== "vn"
        ? "en"
        : this.$i18n.locale;
    },

    objectBreadParam() {
      const retrievedArray = JSON.parse(localStorage.getItem("objectBread"));
      const resultData = retrievedArray
        ? retrievedArray
        : this.breadcumsObjectGetters;

      return resultData;
    },

    renderCityLocation() {
      debugger;
      const retrievedData = JSON.parse(sessionStorage.getItem("cityVietnam"));
      // const value = decryptData(retrievedDataCity);
      // ? JSON.parse(decryptData(sessionStorage.getItem("cityVietnam")))
      // : [];
      const retrievedDataCity = decryptData(retrievedData)
        ? decryptData(retrievedData)
        : [];
      debugger;

      if (!retrievedDataCity) {
        console.error("retrievedDataCity is null or invalid.");
        return [];
      }

      const countryCode = this.objectBreadParam.country_key.toLowerCase();
      debugger;
      if (countryCode === "vn") {
        for (const element of retrievedDataCity) {
          const listCity = element.provinceCity;
          if (Object.keys(this.breadcumsObjectGetters).length !== 0) {
            const findExistData = listCity.filter(
              (x) => x.keyAccentLanguage === this.objectBreadParam.city_key
            );
            if (findExistData.length > 0) {
              const findExistNew = listCity.filter(
                (x) => x.keyAccentLanguage !== this.objectBreadParam.city_key
              );
              return findExistNew;
            }
          }
        }
      } else {
        if (this.listCityWorldData.length !== 0) {
          return this.listCityWorldData;
        } else {
          return [];
        }
      }

      return [];
    },

    currentLocationChome() {
      const retrievedArray = JSON.parse(
        localStorage.getItem("currentLocationChome")
      );

      return retrievedArray ? retrievedArray : this.locationChomeObjectGetters;
    },

    unitSetting() {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      return unitSetting;
    },
  },

  methods: {
    ...mapMutations("commonModule", [
      "setIndexComponent",
      "setBreadcumsAllowLocation",
    ]),
    ...mapActions("airQualityModule", ["getAirQualityByKey", "getAirQuality"]),

    ...mapActions("weatherModule", [
      "getWeatherDataCurrent",
      "getFormattedAddress",
    ]),

    async getDataByCounty() {
      const countryCode = this.objectBreadParam.country_key.toLowerCase();

      let cityName, cityDetail;

      if (countryCode === "vn") {
        cityName = "Vietnamese";
        cityDetail = "vietnam";
      } else {
        cityName = this.objectBreadParam.country;
        cityDetail = this.objectBreadParam.country_key;
      }

      const dataGet = await getFromIndexedDB(cityName, cityDetail);

      // ❗ Kiểm tra dataGet tồn tại và có ít nhất 1 phần tử
      if (!dataGet || !Array.isArray(dataGet) || dataGet.length === 0) {
        console.warn(
          "⚠️ Không tìm thấy dữ liệu trong IndexedDB:",
          cityName,
          cityDetail
        );
        this.listCityState = [];
        return;
      }

      if (countryCode === "vn") {
        const provinceList = dataGet[1]?.data ?? [];

        for (const element of provinceList) {
          const listCity = element.provinceCity ?? [];

          const findExistData = listCity.filter(
            (x) => x.keyAccentLanguage === this.objectBreadParam.city_key
          );

          if (findExistData.length > 0) {
            const findExistNew = listCity.filter(
              (x) => x.keyAccentLanguage !== this.objectBreadParam.city_key
            );
            this.listCityState = findExistNew;
            return;
          }
        }

        this.listCityState = [];
        return;
      } else {
        this.listCityState = dataGet[0]?.data ?? [];
        return;
      }
    },
    async onClickRenderCityLocation(value) {
      debugger;
      const objectBreadValue = this.objectBreadParam;
      const locationValue = {
        latitude: value.location.lat,
        longitude: value.location.lng,
      };
      if (objectBreadValue?.country_key?.toLowerCase() === "vn") {
        let objectBread = {
          country: objectBreadValue.country,
          country_key: objectBreadValue.country_key,
          city: value.viNameLanguage ? value.viNameLanguage : "",
          city_key: value.keyAccentLanguage ? value.keyAccentLanguage : "",
          district: "",
          district_key: "",
          ward: "",
          ward_key: "",
          latitude: value.location.lat,
          longitude: value.location.lng,
        };
        localStorage.setItem("objectBread", JSON.stringify(objectBread));

        this.setBreadcumsAllowLocation(objectBread);

        await this.$router.push({
          name: "today-weather",
          params: {
            language: this.renderLanguage,
            location: [
              objectBread?.country_key?.toLowerCase(),
              convertLowerCase(objectBread.city),
            ],
          },
        });
        debugger;
      } else {
        debugger;
        let objectBread = {
          country: objectBreadValue.country,
          country_key: objectBreadValue.country_key.toLowerCase(),
          state: value.enNameLanguage,
          state_key: value.keyAccentLanguage,
          cities: "",
          latitude: value.location.lat,
          longitude: value.location.lng,
        };

        localStorage.setItem("objectBread", JSON.stringify(objectBread));
        this.setBreadcumsAllowLocation(objectBread);

        await this.$router.push({
          name: "today-weather",
          params: {
            language: this.renderLanguage,
            location: [
              objectBread?.country_key?.toLowerCase(),
              convertLowerCase(objectBread.state),
            ],
          },
        });
      }

      const retrievedArray = JSON.parse(localStorage.getItem("objectBread"));
      setTitleScream(0, retrievedArray, this.languageParam);

      const param = `version=1&type=8&app_id=amobi.weather.forecast.radar.rain&request=https://api.forecast.io/forecast/TOH_KEY/${locationValue.latitude},${locationValue.longitude}?lang=${this.renderLanguage}`;

      // const latLong = localStorage.getItem("locationLatLong");
      const resultAir = getAqiDataFromLocation(
        locationValue.latitude,
        locationValue.longitude
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
    calculateDistance(value) {
      const locationValue = {
        latitude: value.lat,
        longitude: value.lng,
      };
      const locationSearch = {
        latitude: this.objectBreadParam.latitude,
        longitude: this.objectBreadParam.longitude,
      };
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      const isMiles = unitSetting.activeDistance_save === "mi"; // Kiểm tra đơn vị đang sử dụng

      // Sử dụng Haversine để tính khoảng cách
      const distanceValue = convertHaversine(
        locationValue.latitude,
        locationValue.longitude,
        locationSearch.latitude,
        locationSearch.longitude,
        isMiles ? "mi" : "km" // Truyền đơn vị vào hàm nếu cần
      );

      // Sử dụng geolib để tính khoảng cách (mặc định là mét)
      let distance = getDistance(locationValue, locationSearch);

      // Chuyển đổi đơn vị
      if (isMiles) {
        this.distanceKm = (distance / 1609.34).toFixed(1); // Đổi sang mile
      } else {
        this.distanceKm = (distance / 1000).toFixed(1); // Đổi sang km
      }

      return distanceValue;
    },

    convertCapitalizeWords(value) {
      return capitalizeWords(value);
    },
    convertKeyLanguage(value, keyLanguage) {
      return value.languages[keyLanguage];
    },

    convertToUnderscore(text) {
      return text.replace(/ /g, "_");
    },

    removeDiacritics(str) {
      return str
        .normalize("NFD") // Tách ký tự dấu
        .replace(/[\u0300-\u036f]/g, ""); // Loại bỏ dấu
    },
  },

  async mounted() {
    await this.getDataByCounty();
  },
};
</script>
<style lang="scss">
.item-city:hover {
  background-color: rgba(239, 240, 242, 0.126);
}
</style>
