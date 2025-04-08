<template>
  <div class="flex flex-col">
    <!-- header -->

    <div class="basic-header menu-open">
      <HeaderPage
        @onChangeShowHeaderMenu="onChangeShowHeaderMenu"
        :isShowHeaderMenu="isShowHeaderMenu"
      ></HeaderPage>
      <HeaderMenu
        v-show="isShowHeaderMenu"
        :isShowHeaderMenu="isShowHeaderMenu"
        @onChangeCloseMenu="onChangeShowHeaderMenu"
        @onChangeShowHeaderMobile="onChangeShowHeaderMobile"
      ></HeaderMenu>
    </div>
    <div class="header-placeholder"></div>

    <div class="body-app relative body-n flex-grow">
      <div class="w-full h-full color-txt-df">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import {
  encodeBase64,
  decodeBase64,
  getAqiDataFromLocation,
  getParamAirByCode,
  urlEncodeString,
} from "@/utils/EncoderDecoderUtils.js";
import removeAccents from "remove-accents";

import { mapActions, mapGetters, mapMutations } from "vuex";
import HeaderPage from "@/layout/header/header_page.vue";
import NavBottom from "@/layout/tabbar-bottom/nav-bottom.vue";
// import FooterPage from "@/layout/footer/footer-page.vue";
import HeaderMenu from "@/layout/header/header-menu.vue";
import {
  convertLowerCase,
  convertToConvertLowerCase,
  removeWordAndAccents,
} from "@/utils/coverTextSystem";

export default {
  name: "dash-page",

  components: {
    HeaderPage,
    // NavBottom,
    // FooterPage,
    HeaderMenu,
    // NavTabbar,
  },
  data() {
    return {
      suggestionsTop100: [],
      provinces: [],
      isShowHeaderMenu: false,
      provinceData: null,
      indexKey: 0,
    };
  },

  async mounted() {
    const objectBread = localStorage.getItem("objectBread");
    const routerLink = this.$route.params;

    // Xóa cache
    if (!objectBread) {
      // Điều hướng về màn Home
      this.getLocationBrowser();
      this.$router.push({ path: "/" }).then(() => {});
    }
    // Không xóa cache
    else {
      const objectBreadValue = JSON.parse(objectBread);
      if (objectBreadValue.country_key === "vn") {
        if (Object.keys(routerLink).length !== 0) {
          if (routerLink.location) {
            this.handleLocationVietNam(routerLink.location);
          }
        } else {
          this.getLocationBrowser();
        }
      } else {
        this.handleLocationWorld(objectBreadValue);
      }
    }

    // this.loadDataTop100();
  },

  computed: {
    ...mapGetters("airQualityModule", [
      "airKeyObjectGetters",
      "airObjectGetters",
    ]),

    ...mapGetters("commonModule", [
      "listCityAllGetters",
      "objectCityByLocationGetters",
      "listAlabamaGetters",
      "breadcumsObjectGetters",
    ]),

    languageParam() {
      const languageRouter = this.$route.params;
      return Object.keys(languageRouter).length !== 0
        ? languageRouter.language
        : this.$i18n.locale;
    },

    listCityVNData() {
      const retrievedArray = JSON.parse(sessionStorage.getItem("dataCityLog"));
      const resultData = retrievedArray
        ? retrievedArray
        : this.breadcumsObjectGetters;

      return resultData;
    },

    objectLocalBreadcums() {
      const retrievedArray = JSON.parse(localStorage.getItem("objectBread"));
      return retrievedArray ? retrievedArray : this.breadcumsObjectGetters;
    },
  },

  created() {},

  methods: {
    ...mapMutations("weatherModule", ["setCityWeather", "setDataTop100City"]),
    ...mapMutations("commonModule", [
      "setBreadcumsNotAllowLocation",
      "setBreadcumsAllowLocation",
      "setObjectCityByLocation",
      "setAmericanStateRegions",
      "setListDetailCityAll",
      "setStateAmerican",
      "setLocationChome",
      "setIndexComponent",
    ]),

    ...mapActions("weatherModule", [
      "getWeatherDataCurrent",
      "getWeatherDataIp",
      "getFormattedAddress",
    ]),

    ...mapActions("airQualityModule", ["getAirQualityByKey", "getAirQuality"]),
    ...mapActions("idFindModule", ["getIpLocation"]),

    getLocationBrowser() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          this.setPosition.bind(this),
          this.showError.bind(this)
        );
      } else {
        this.error = "Geolocation is not supported by this browser.";
      }
    },
    onChangeShowHeaderMenu(value) {
      this.isShowHeaderMenu = value;
    },

    onChangeShowHeaderMobile(value) {
      this.isShowHeaderMenu = value;
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

    async loadProvinceAmerican() {
      const dataStateAmericanSession = JSON.parse(
        sessionStorage.getItem("dataStateAmerican")
      );
      if (!dataStateAmericanSession) {
        try {
          const response = await fetch("/json/city/american.json");
          if (!response.ok)
            throw new Error(
              `Failed to fetch data: ${response.status} ${response.statusText}`
            );
          const data = await response.json(); // Parse JSON data
          this.provinceData = data.regions;
          this.setAmericanStateRegions(this.provinceData);
        } catch (error) {
          console.error("Error loading file:", error.message);
        }
      } else {
        this.setAmericanStateRegions(dataStateAmericanSession);
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

    async loadStateAmerican() {
      let provinces = [];
      const dataCityLogVNSession = JSON.parse(
        sessionStorage.getItem("dataAlabama")
      );
      if (!dataCityLogVNSession) {
        const context = require.context(
          "/public/json/american",
          false,
          /\.json$/
        );
        // context.keys() trả về danh sách các file, duyệt qua và import dữ liệu của từng file
        const provincesData = context.keys().map((key) => {
          const provinceData = context(key); // Load dữ liệu từ file

          provinces.push(provinceData);
        });
        this.setStateAmerican(provinces);
      } else {
        this.setStateAmerican(dataCityLogVNSession);
      }
    },

    async handleLocationWorld(dataValue) {
      let latitude = dataValue.latitude;
      let longitude = dataValue.longitude;

      console.log("dataValue", dataValue);

      localStorage.setItem("objectBread", JSON.stringify(dataValue));

      this.setBreadcumsAllowLocation(dataValue);

      this.setCityWeather(dataValue);

      const param = `version=1&type=8&app_id=amobi.weather.forecast.radar.rain&request=https://api.forecast.io/forecast/TOH_KEY/${latitude},${longitude}?lang=en`;

      console.log("paramDay", param);

      const resultAir = getAqiDataFromLocation(latitude, longitude);

      const encodeDataWeather = encodeBase64(param);

      console.log("encodeDataWeather", encodeDataWeather);

      // API Get Weather Current
      await this.getWeatherDataCurrent(encodeDataWeather);

      // Lưu lại ở Storage để cache
      localStorage.setItem("keyCurrent", JSON.stringify(encodeDataWeather));

      const encodeKeyAir = encodeBase64(resultAir);
      // API Get Air Quality By Key
      await this.getAirQualityByKey(encodeKeyAir);

      const airCode = getParamAirByCode(this.airKeyObjectGetters?.key);
      const encodeAirCode = encodeBase64(airCode);
      // API Get Air Quality Data
      await this.getAirQuality(encodeAirCode);

      this.indexKey = this.indexKey++;
      this.setIndexComponent(this.indexKey);
    },

    async handleLocationVietNam(dataValue) {
      const objectBread = this.objectLocalBreadcums;
      let nameScream = this.$route.name;

      if (dataValue.length === 2) {
        let objectBreadValue = {
          country: objectBread.country,
          country_key: objectBread.country_key,
          city: objectBread.city ? objectBread.city : "",
          city_key: objectBread.city_key ? objectBread.city_key : "",
          district: "",
          district_key: "",
          ward: "",
          ward_key: "",
          latitude: objectBread.latitude,
          longitude: objectBread.longitude,
        };
        localStorage.setItem("objectBread", JSON.stringify(objectBreadValue));
        this.setBreadcumsAllowLocation(objectBreadValue);
        await this.$router.push({
          name: nameScream,
          params: {
            language: this.languageParam,
            location: [
              objectBread?.country_key?.toLowerCase(),
              convertLowerCase(objectBread.city),
            ],
          },
        });
      }
      if (dataValue.length === 3) {
        let objectBreadValue = {
          country: objectBread.country,
          country_key: objectBread.country_key,
          city: objectBread.city ? objectBread.city : "",
          city_key: objectBread.city_key ? objectBread.city_key : "",
          district: objectBread.district,
          district_key: objectBread.district_key,
          ward: "",
          ward_key: "",
          latitude: objectBread.latitude,
          longitude: objectBread.longitude,
        };
        localStorage.setItem("objectBread", JSON.stringify(objectBreadValue));

        this.setBreadcumsAllowLocation(objectBreadValue);
        await this.$router.push({
          name: nameScream,
          params: {
            language: this.languageParam,
            location: [
              objectBread?.country_key?.toLowerCase(),
              convertLowerCase(objectBread.city),
            ],
          },
        });
      }
      if (dataValue.length === 4) {
        let objectBreadValue = {
          country: objectBread.country,
          country_key: objectBread.country_key,
          city: objectBread.city ? objectBread.city : "",
          city_key: objectBread.city_key ? objectBread.city_key : "",
          district: objectBread.district,
          district_key: objectBread.district_key,
          ward: objectBread.ward,
          ward_key: objectBread.ward_key,
          latitude: objectBread.latitude,
          longitude: objectBread.longitude,
        };
        localStorage.setItem("objectBread", JSON.stringify(objectBreadValue));

        this.setBreadcumsAllowLocation(objectBreadValue);
        await this.$router.push({
          name: nameScream,
          params: {
            language: this.languageParam,
            location: [
              objectBread?.country_key?.toLowerCase(),
              convertLowerCase(objectBread.city),
              convertLowerCase(objectBread.district),
              convertLowerCase(removeWordAndAccents(objectBread.ward)),
            ],
          },
        });
      }

      const param = `version=1&type=8&app_id=amobi.weather.forecast.radar.rain&request=https://api.forecast.io/forecast/TOH_KEY/${objectBread.latitude},${objectBread.longitude}?lang=${this.languageParam}`;

      // map url by lat,long
      const resultAir = getAqiDataFromLocation(
        objectBread.latitude,
        objectBread.longitude
      );

      const encodeDataWeather = encodeBase64(param);
      // API Get Weather Current
      await this.getWeatherDataCurrent(encodeDataWeather);

      // Lưu lại ở Storage để cache
      localStorage.setItem("keyCurrent", JSON.stringify(encodeDataWeather));

      const encodeKeyAir = encodeBase64(resultAir);
      // API Get Air Quality By Key
      await this.getAirQualityByKey(encodeKeyAir);

      const airCode = getParamAirByCode(this.airKeyObjectGetters?.key);
      const encodeAirCode = encodeBase64(airCode);
      // API Get Air Quality Data
      await this.getAirQuality(encodeAirCode);
      this.indexKey = this.indexKey++;
      this.setIndexComponent(1);
    },

    /**
     * Connect vị trí trên trình duyệt
     */

    /**
     * Có lấy cho phép lấy location trình duyệt
     * @param position
     */
    async setPosition(position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      const objectLatLong = {
        latitude: latitude,
        longitude: longitude,
      };
      localStorage.setItem("locationLatLong", JSON.stringify(objectLatLong));

      const keyLanguageStorage = this.$route.params.language
        ? this.$route.params.language
        : this.$i18n.locale;
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&accept-language=${keyLanguageStorage}`;
      const responsive = await axios.get(url); // Lấy thành phố và quốc gia theo map

      // Xét giá trị để lưu Recent
      const dataResponsive = responsive.data.address;

      if (dataResponsive.country_code.toLowerCase() === "us") {
        await this.loadStateAmerican();

        await this.loadProvinceAmerican();

        const objectPosition = {
          latitude: latitude,
          longitude: longitude,
          country_key: dataResponsive.country_code.toLowerCase(), // us
          country: dataResponsive.country, // us
          state: dataResponsive.state, // State
          state_key: dataResponsive.state.toLowerCase(), // State
          county: dataResponsive.county, // county
          cities: dataResponsive?.cities ? dataResponsive?.cities : "", // cities
          // objectLocation: responsive.data.address,
        };

        localStorage.setItem(
          "currentLocationChome",
          JSON.stringify(objectPosition)
        );
        this.setLocationChome(objectPosition);

        localStorage.setItem("objectBread", JSON.stringify(objectPosition));
        this.setBreadcumsAllowLocation(objectPosition);
      } else if (dataResponsive.country_code.toLowerCase() === "vn") {
        await this.loadProvince();

        await this.loadAllFileJson();
        const objectPosition = {
          latitude: latitude,
          longitude: longitude,
          country: dataResponsive.country,
          country_key: dataResponsive.country_code.toLowerCase(),
          city: dataResponsive?.city,
          city_key: convertToConvertLowerCase(dataResponsive?.city),
          district: "",
          district_key: "",
          ward: "",
          ward_key: "",
        };

        localStorage.setItem("objectBread", JSON.stringify(objectPosition));
        localStorage.setItem(
          "currentLocationChome",
          JSON.stringify(objectPosition)
        );
        this.setLocationChome(objectPosition);
        this.setBreadcumsAllowLocation(objectPosition);

        this.setCityWeather(objectPosition);
      } else {
        const objectPosition = {
          latitude: latitude,
          longitude: longitude,
          country: dataResponsive.country, // United Kingdom
          country_key: dataResponsive.country_code.toLowerCase(), // gb
          state: dataResponsive.state, // England
          regions: dataResponsive.state_district, // Greater London
          regions_key: convertToConvertLowerCase(dataResponsive.state_district), // Greater London
          cities: dataResponsive?.neighbourhood // Covent Garden
            ? dataResponsive?.neighbourhood
            : "",
          cities_key: dataResponsive?.neighbourhood // Covent Garden
            ? convertToConvertLowerCase(dataResponsive?.neighbourhood)
            : "",
        };

        localStorage.setItem("objectBread", JSON.stringify(objectPosition));
        this.setBreadcumsAllowLocation(objectPosition);

        this.setCityWeather(objectPosition);
      }

      // Xét giá trị để lưu Recent

      // if (dataResponsive.city === "Thành phố Hà Nội") {
      //   objectPosition.city = "Hà Nội";
      //   objectPosition.city_key = "Ha_Noi";
      // }

      const param = `version=1&type=8&app_id=amobi.weather.forecast.radar.rain&request=https://api.forecast.io/forecast/TOH_KEY/${latitude},${longitude}?lang=en`;

      // map url by lat,long
      const resultAir = getAqiDataFromLocation(latitude, longitude);

      const encodeDataWeather = encodeBase64(param);
      // API Get Weather Current
      await this.getWeatherDataCurrent(encodeDataWeather);

      // Lưu lại ở Storage để cache
      localStorage.setItem("keyCurrent", JSON.stringify(encodeDataWeather));

      const encodeKeyAir = encodeBase64(resultAir);
      // API Get Air Quality By Key
      await this.getAirQualityByKey(encodeKeyAir);

      const airCode = getParamAirByCode(this.airKeyObjectGetters?.key);
      const encodeAirCode = encodeBase64(airCode);
      // API Get Air Quality Data
      await this.getAirQuality(encodeAirCode);
    },

    removeAccentsUnicode(str) {
      return str
        .normalize("NFD") // Chuẩn hóa Unicode thành dạng tổ hợp ký tự và dấu
        .replace(/[\u0300-\u036f]/g, "") // Loại bỏ tổ hợp dấu
        .replace(/đ/g, "d") // Xử lý riêng cho chữ "đ"
        .replace(/Đ/g, "D");
    },

    /**
     * Handle hàm để lấy location request
     * @param value
     */
    async getIpLocationHandle(value) {
      try {
        const codeLocation = encodeBase64(value);
        await this.getWeatherDataIp(codeLocation).then(async (data) => {
          const valueNew = decodeBase64(data);
          debugger;
          // API Lấy vị trí
          await this.getIpLocation(valueNew).then(async (data) => {
            // Xét Breadcum

            const objectLatLong = {
              latitude: data.latitude,
              longitude: data.longitude,
            };
            localStorage.setItem(
              "locationLatLong",
              JSON.stringify(objectLatLong)
            );

            const objectLocation = {
              country: data.country,
              country_key: data.country_code.toLowerCase(),
              city: this.convertToVietnamese(data.city).city,
              city_key: removeAccents(
                this.convertToVietnamese(data.city).cityConvert
              ),
              district: "",
              district_key: "",
              ward: "",
              ward_key: "",
              latitude: data.latitude,
              longitude: data.longitude,
            };

            localStorage.setItem("objectBread", JSON.stringify(objectLocation));
            this.setBreadcumsNotAllowLocation(objectLocation);

            const objectPosition = {
              latitude: data.latitude,
              longitude: data.longitude,
              code: data.region_code,
              city: data.city,
              country: data.country,
            };
            this.setCityWeather(objectPosition);
            const param = `version=1&type=8&app_id=amobi.weather.forecast.radar.rain&request=https://api.forecast.io/forecast/TOH_KEY/${data.latitude},${data.longitude}?lang=en`;
            const resultAir = getAqiDataFromLocation(
              data.latitude,
              data.longitude
            );

            const encodeDataWeather = encodeBase64(param);
            // API Get Weather Current
            await this.getWeatherDataCurrent(encodeDataWeather);

            localStorage.setItem(
              "keyCurrent",
              JSON.stringify(encodeDataWeather)
            );

            const valueNewAir = encodeBase64(resultAir);
            // Call API getAirQualityByKey
            await this.getAirQualityByKey(valueNewAir);

            const airCode = getParamAirByCode(this.airKeyObjectGetters?.key);
            const encodeAirCode = encodeBase64(airCode);

            // API Get Air Quality Data
            await this.getAirQuality(encodeAirCode);
          });
        });
      } catch (error) {
        this.error = "Unable to retrieve location via IP.";
      }
    },

    /**
     * Không cho phép lấy location trình duyêt
     * @param error
     */
    async showError(error) {
      let param =
        "version=1&type=1&app_id=amobi.weather.forecast.radar.rain&request=https://ipfind.co/me?auth=TOH_KEY";
      switch (error.code) {
        case error.PERMISSION_DENIED:
          this.error = "User denied the request for Geolocation.";
          await this.getIpLocationHandle(param);
          break;
        case error.POSITION_UNAVAILABLE:
          this.error = "Location information is unavailable.";
          break;
        case error.TIMEOUT:
          this.error = "The request to get user location timed out.";
          break;
        case error.UNKNOWN_ERROR:
          this.error = "An unknown error occurred.";
          break;
      }
    },
  },
};
</script>

<style lang="scss">
.menu-open {
  height: 60px;
}

.body-app {
  height: 100vh;
}
</style>
