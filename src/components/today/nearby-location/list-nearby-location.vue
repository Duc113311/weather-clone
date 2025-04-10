<template>
  <div class="w-full" v-if="listCity.length !== 0">
    <ItemComponent>
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
            <!-- Việt nam -->
            <div
              class="flex items-center txt_medium_14 text-left"
              v-if="wardParam?.country_key === 'vn'"
            >
              <span v-if="wardParam?.city && !wardParam?.district">
                {{
                  convertCapitalizeWords(
                    $t(`Weather_in_{city}`, {
                      city: convertToLowCase(wardParam.city),
                    })
                  )
                }}</span
              >
              <span
                v-if="
                  wardParam?.city && wardParam?.district && !wardParam?.ward
                "
              >
                {{
                  convertCapitalizeWords(
                    $t(`Weather_in_{district}_{city}`, {
                      district: convertToLowCase(wardParam.district),
                      city: convertToLowCase(wardParam.city),
                    })
                  )
                }}
              </span>
              <span
                v-if="wardParam?.city && wardParam?.district && wardParam?.ward"
              >
                {{
                  convertCapitalizeWords(
                    $t(`Weather_in_{ward}_{city}`, {
                      ward: convertToLowCase(wardParam.ward),
                      city: convertToLowCase(wardParam.city),
                    })
                  )
                }}
              </span>
            </div>
            <!-- Nước khác -->
            <div class="txt_medium_14" v-else>
              <span v-if="wardParam?.state && !wardParam?.cities">
                {{
                  convertCapitalizeWords(
                    $t(`Weather_in_{city}_area`, {
                      city: `${wardParam?.state}`,
                    })
                  )
                }}
              </span>
              <span v-if="wardParam?.state && wardParam?.cities">
                {{
                  convertCapitalizeWords(
                    $t(`Weather_in_the_area_around_{city}`, {
                      city: `${wardParam?.cities}`,
                    })
                  )
                }}
              </span>
            </div>
          </div>
        </div>
      </template>

      <div class="w-full h-auto" v-if="listCity.length !== 0">
        <!--  -->
        <transition-group name="fade" tag="div" class="district-list">
          <DistrictCardPage
            v-for="(item, index) in displayedItems"
            :key="`district-${index}`"
            :objectLocation="item"
            @click="onClickShowDetailDistrict(item)"
          ></DistrictCardPage>
        </transition-group>
        <div class="w-full text-left mt-3" v-if="listCity.length > 14">
          <button
            type="button"
            @click="onClickLoadMoreItems"
            class="bg-gradient-to-r from-cyan-500 text-white to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none font-medium rounded-lg text-sm px-3 py-2 text-center me-2 md:mb-2"
          >
            <span class="txt_regular_12">
              {{ showLessButton ? $t("Hide") : $t("See_more") }}</span
            >
          </button>
        </div>
      </div>
      <div
        class="h-[240px] bg-color overflow-hidden pad-big"
        :class="[classThemeBg]"
        v-else
      >
        <div class="w-full h-full justify-center flex items-center">
          {{ $t("In_development") }}
        </div>
      </div>
    </ItemComponent>
  </div>
</template>
<script>
import DistrictCardPage from "@/components/common/card/district-card-page.vue";
import ItemComponent from "@/components/common/itemComponent.vue";
import { setTitleScream } from "@/helpers/setTitle";
import { capitalizeWords } from "@/utils/converValue";
import {
  convertLowerCase,
  convertToWorldState,
  decryptData,
  getFromIndexedDB,
  removeWordAndAccents,
} from "@/utils/coverTextSystem";
import {
  decodeBase64,
  encodeBase64,
  getAqiDataFromLocation,
  getParamAirByCode,
  urlEncodeString,
} from "@/utils/EncoderDecoderUtils";

// import removeAccents from "remove-accents";
import { ElNotification } from "element-plus";

import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "list-nearby-location",

  components: {
    ItemComponent,
    DistrictCardPage,
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      showLessButton: false,
      itemsPerPage: 14, // Số mục hiển thị ban đầu
      currentPage: 1, // Trang hiện tại
      listCity: [],
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
      "objectFormatLocationGetters",
    ]),

    ...mapGetters("airQualityModule", [
      "airObjectGetters",
      "airKeyObjectGetters",
    ]),

    listCityAllData() {
      const retrievedArray = JSON.parse(
        sessionStorage.getItem("cityDetailVietnam")
      );
      const resultData = decryptData(retrievedArray)
        ? decryptData(retrievedArray)
        : this.listCityAllGetters;

      return resultData;
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

      return resultData;
    },

    listCityWorldStateData() {
      const retrievedValue = JSON.parse(localStorage.getItem("objectBread"));
      const formattedCountry = retrievedValue.country;

      const dataCityVNSession = JSON.parse(
        sessionStorage.getItem(`${formattedCountry}`)
      );
      const resultData = decryptData(dataCityVNSession)
        ? decryptData(dataCityVNSession)
        : this.objectFormatLocationGetters;

      return resultData;
    },

    objectCityByLocationData() {
      const retrievedArray = JSON.parse(sessionStorage.getItem("cityVietnam"));
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
      return this.listCity.slice(0, end);
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
      debugger;
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
    renderLanguage() {
      const languageRouter = this.$route.params;
      return Object.keys(languageRouter).length !== 0
        ? languageRouter.language
        : this.$i18n.locale;
    },
  },

  async mounted() {
    window.addEventListener("resize", this.handleResize);

    await this.renderListCityAllGetters();
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },

  methods: {
    ...mapMutations("commonModule", [
      "setBreadcumsNotAllowLocation",
      "setBreadcumsAllowLocation",
      "setIndexComponent",
    ]),
    ...mapActions("weatherModule", [
      "getWeatherDataCurrent",
      "getFormattedAddress",
    ]),
    ...mapActions("airQualityModule", ["getAirQualityByKey", "getAirQuality"]),
    ...mapMutations("weatherModule", ["setCityWeather"]),

    async renderListCityAllGetters() {
      if (!this.wardParam) return;

      const countryKey = this.wardParam.country_key;
      let dataIndex = await this.getDataByCounty();

      if (countryKey === "vn") {
        const cityKey = this.wardParam.city_key;
        const findData = dataIndex.find((x) => x.keyAccentLanguage === cityKey);

        if (!findData) return;

        if (this.wardParam.district_key) {
          const findDataWard = findData.districtList?.find(
            (x) => x.keyAccentLanguage === this.wardParam.district_key
          );
          this.listCity = findDataWard ? findDataWard.wards : [];
        } else {
          this.listCity = findData.districtList || [];
        }
      } else {
        const cityKey = this.wardParam.state;
        const cities = this.wardParam.cities;
        if (!dataIndex || dataIndex.length === 0) {
          return;
        }

        // Tìm trong danh sách thành phố thế giới
        const findData = dataIndex.find(
          (x) => this.convertToWorldStateMethod(x.enNameLanguage) === cityKey
        );

        if (findData) {
          this.listCity = findData.districtList;
          return;
        }

        // Nếu không tìm thấy, duyệt danh sách để tìm city phù hợp
        for (const element of dataIndex) {
          const matchedDistrict = element.districtList.find(
            (e) => e.enNameLanguage === cities
          );
          if (matchedDistrict) {
            this.listCity = element.districtList;
            return;
          }
        }

        this.listCity = [];
      }
    },

    async getDataByCounty() {
      const countryKey = this.wardParam.country_key.toLowerCase();

      let cityName, cityDetail;

      if (countryKey === "vn") {
        cityName = "Vietnamese";
        cityDetail = "vietnam";
      } else {
        cityName = this.wardParam.country;
        cityDetail = this.wardParam.country_key;
      }

      const dataGet = await getFromIndexedDB(cityName, cityDetail);

      if (!dataGet || dataGet.length === 0 || !dataGet[0]?.data) {
        console.warn("⚠️ Không tìm thấy dữ liệu trong IndexedDB");
        return null;
      }

      return dataGet[0].data;
    },

    convertToWorldStateMethod(value) {
      const datanew = convertToWorldState(value);
      console.log("datanew", datanew);

      return datanew;
    },
    convertToFormattedArray(input) {
      if (!input) return []; // Nếu chuỗi không có giá trị, trả về mảng rỗng

      return input
        .split(" ") // Tách chuỗi theo khoảng trắng
        .map((word, index) => {
          if (index === 0) {
            return word; // Từ đầu tiên chuyển thành chữ thường
          }
          return word.charAt(0) + word.slice(1); // Viết hoa chữ cái đầu cho từ còn lại
        });
    },
    checkSubstring(str1, str2) {
      const words1 = str1.replace(/[^\w\s]/g, "").split("_");
      const words2 = str2.replace(/[^\w\s]/g, "").split("_");

      const convertArray = this.convertToFormattedArray(str2);
      // Lọc ra các từ có trong str2
      const commonWords = words1.filter((word) => words2.includes(word));
      return commonWords.length >= 2;
      // Kiểm tra xem có ít nhất 2 từ chung không
    },
    convertToSlugCity(str) {
      const slug = this.removeAccentsUnicode(str);
      debugger;
      return slug
        .toLowerCase() // Chuyển thành chữ thường
        .replace(/\s+/g, ""); // Xóa khoảng trắng
    },

    convertCapitalizeWords(value) {
      return capitalizeWords(value);
    },

    onClickLoadMoreItems() {
      if (this.showLessButton) {
        this.currentPage = 1; // Reset to show the initial items
        this.showLessButton = false;
      } else {
        this.currentPage++;
        this.showLessButton =
          this.currentPage * this.itemsPerPage >=
          this.renderListCityAllGetters.length;
      }
    },

    convertToLowCase(value) {
      const normalizedStr = value
        .normalize("NFD") // Chuyển chuỗi sang dạng tổ hợp Unicode
        .replace(/[\u0300-\u036f]/g, ""); // Loại bỏ các dấu

      return normalizedStr;
    },
    removeDiacritics(value) {
      const removeString = value
        .normalize("NFD") // Tách ký tự dấu
        .replace(/[\u0300-\u036f]/g, ""); // Loại bỏ dấu
      return removeString.replace(/ /g, "_");
    },
    convertToVietnamese(input) {
      const data = this.removeWordAndAccents(input, ["Province"]);

      // const dataNew = this.convertToCamelCase(data);
      // Map các từ gốc sang từ có dấu
      const vietnameseMap = {
        Hanoi: "Hà Nội",
        Haiphong: "Hải Phòng",
        Danang: "Đà Nẵng",
        Hochiminh: "Hồ Chí Minh",
        Cantho: "Cần Thơ",
        AnGiang: "An Giang",
        BacGiang: "Bắc Giang",
        BacKan: "Bắc Kạn",
        BacLieu: "Bạc Liêu",
        BacNinh: "Bắc Ninh",
        BenTre: "Bến Tre",
        BinhDinh: "Bình Định",
        BinhDuong: "Bình Dương",
        BinhPhuoc: "Bình Phước",
        BinhThuan: "Bình Thuận",
        CaMau: "Cà Mau",
        CaoBang: "Cao Bằng",
        DakLak: "Đắk Lắk",
        DakNong: "Đắk Nông",
        DienBien: "Điện Biên",
        DongNai: "Đồng Nai",
        DongThap: "Đồng Tháp",
        GiaLai: "Gia Lai",
        HaGiang: "Hà Giang",
        HaNam: "Hà Nam",
        HaTinh: "Hà Tĩnh",
        HaiDuong: "Hải Dương",
        HauGiang: "Hậu Giang",
        HoaBinh: "Hòa Bình",
        HungYen: "Hưng Yên",
        KhanhHoa: "Khánh Hòa",
        KienGiang: "Kiên Giang",
        KonTum: "Kon Tum",
        LaiChau: "Lai Châu",
        LamDong: "Lâm Đồng",
        LangSon: "Lạng Sơn",
        LaoCai: "Lào Cai",
        LongAn: "Long An",
        NamDinh: "Nam Định",
        NgheAn: "Nghệ An",
        NinhBinh: "Ninh Bình",
        NinhThuan: "Ninh Thuận",
        PhuTho: "Phú Thọ",
        PhuYen: "Phú Yên",
        QuangBinh: "Quảng Bình",
        QuangNam: "Quảng Nam",
        QuangNgai: "Quảng Ngãi",
        QuangNinh: "Quảng Ninh",
        QuangTri: "Quảng Trị",
        SocTrang: "Sóc Trăng",
        SonLa: "Sơn La",
        TayNinh: "Tây Ninh",
        ThaiBinh: "Thái Bình",
        ThaiNguyen: "Thái Nguyên",
        ThanhHoa: "Thanh Hóa",
        ThuaThienHue: "Thừa Thiên Huế",
        TienGiang: "Tiền Giang",
        TraVinh: "Trà Vinh",
        TuyenQuang: "Tuyên Quang",
        VinhLong: "Vĩnh Long",
        VinhPhuc: "Vĩnh Phúc",
        YenBai: "Yên Bái",
      };

      // Kiểm tra nếu chuỗi tồn tại trong map
      const converted = vietnameseMap[data] || data;

      // Thay khoảng trắng bằng dấu gạch dưới
      return {
        city: converted,
        cityConvert: this.convertToConvertLowerCase(converted),
      };
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

    removeAccentsUnicode(str) {
      return str
        .normalize("NFD") // Chuẩn hóa Unicode thành dạng tổ hợp ký tự và dấu
        .replace(/[\u0300-\u036f]/g, "") // Loại bỏ tổ hợp dấu
        .replace(/đ/g, "d") // Xử lý riêng cho chữ "đ"
        .replace(/Đ/g, "D");
    },

    convertToConvertLowerCase(str) {
      const name = this.removeAccentsUnicode(str);

      const slug = this.removeAccentsUnicode(str).replace(/\s+/g, "_");

      return slug;
    },

    findCityData(value) {
      const listCityVN = this.objectCityByLocationData;

      debugger;
      const replaceCity = this.convertToVietnamese(value.city).cityConvert;
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

    replaceApostropheWithUnderscore(key) {
      // Kiểm tra nếu chuỗi chứa dấu ' thì thay thế bằng _
      if (key.includes("'")) {
        return key.replace(/'/g, "_");
      }
      // Nếu không chứa dấu ', trả về chuỗi gốc
      return key;
    },

    findDistrictsData(value) {
      const listCityVN = this.listCityAllData;

      // Kiểm tra xem listCityVN có tồn tại không
      if (!listCityVN) {
        console.error("listCityAllGetters không tồn tại");
        return null; // Hoặc xử lý theo cách khác
      }

      const replaceCity = this.convertToVietnamese(value.city).cityConvert;
      const replaceDistrict = this.convertToConvertLowerCase(value.district);

      debugger;
      const replaceApos = this.replaceApostropheWithUnderscore(replaceDistrict);
      const findData = listCityVN.find(
        (x) => x.keyAccentLanguage === replaceCity
      );

      if (findData) {
        const districtListData = findData.districtList;

        // Kiểm tra districtListData có tồn tại và là mảng không
        if (Array.isArray(districtListData)) {
          for (let index = 0; index < districtListData.length; index++) {
            const element = districtListData[index];

            const checkSub = this.checkSubstring(
              this.removeAccentsUnicode(element.keyAccentLanguage),
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

    findWardData(value) {
      const listCityVN = this.listCityAllData;

      // Kiểm tra xem listCityVN có tồn tại không
      if (!listCityVN) {
        console.error("listCityAllGetters không tồn tại");
        return null; // Hoặc xử lý theo cách khác
      }
      debugger;
      const replaceCity = this.convertToVietnamese(value.city).cityConvert;
      const replaceDistrict = this.convertToConvertLowerCase(value.district);
      const replaceWard = this.convertToConvertLowerCase(value.ward);

      const replaceAposDistrict =
        this.replaceApostropheWithUnderscore(replaceDistrict);
      const replaceAposWard = this.replaceApostropheWithUnderscore(replaceWard);

      const findData = listCityVN.find(
        (x) => x.keyAccentLanguage === replaceCity
      );

      if (findData) {
        const districtListData = findData.districtList;

        // Kiểm tra districtListData có tồn tại và là mảng không
        if (Array.isArray(districtListData)) {
          for (let index = 0; index < districtListData.length; index++) {
            const element = districtListData[index];

            const checkSub = this.checkSubstring(
              this.removeAccentsUnicode(element.keyAccentLanguage),
              replaceAposDistrict
            );

            if (checkSub) {
              const wardListData = element.wards;

              // Kiểm tra wardListData có tồn tại và là mảng không
              if (Array.isArray(wardListData)) {
                for (let index = 0; index < wardListData.length; index++) {
                  const elementWard = wardListData[index];
                  const checkSubWard = this.checkSubstring(
                    this.removeAccentsUnicode(elementWard.keyAccentLanguage),
                    replaceAposWard
                  );

                  if (checkSubWard) {
                    return elementWard;
                  }
                }
              } else {
                console.error("wardListData không phải là mảng");
              }
            }
          }
        } else {
          console.error("districtListData không phải là mảng");
        }
      }

      return null; // Trả về null nếu không tìm thấy ward
    },

    async onClickShowDetailDistrict(value) {
      const objectBreadValue = this.wardParam;
      let locationValue = {
        latitude: value.location.lat,
        longitude: value.location.lng,
      };

      if (objectBreadValue?.country_key?.toLowerCase() === "vn") {
        //
        let objectBread = objectBreadValue;

        if (
          value.type === "Ward" ||
          value.type === "Town" ||
          value.type === "Commune"
        ) {
          objectBread.ward = value.viNameLanguage;
          objectBread.ward_key = value.keyAccentLanguage;
        }
        if (value.type === "City" || value.type === "District") {
          objectBread.district = value.viNameLanguage;
          objectBread.district_key = value.keyAccentLanguage;
        }
        objectBread.latitude = value.location.lat;
        objectBread.longitude = value.location.lng;
        debugger;
        localStorage.setItem("objectBread", JSON.stringify(objectBread));

        this.setBreadcumsNotAllowLocation(objectBread);
        setTitleScream(0, objectBread, this.languageParam);

        // tồn tại thành phố
        if (
          objectBread.city.length !== 0 &&
          objectBread.district.length === 0
        ) {
          await this.$router.push({
            name: "today-weather",
            params: {
              language: this.renderLanguage,
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
              language: this.renderLanguage,
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
              language: this.renderLanguage,
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
        debugger;
        let objectBread = {
          country: objectBreadValue.country,
          country_key: objectBreadValue.country_key.toLowerCase(),
          state: objectBreadValue.state,
          state_key: objectBreadValue.state_key,
        };

        objectBread.cities = value.enNameLanguage;
        (objectBread.latitude = locationValue.latitude),
          (objectBread.longitude = locationValue.longitude);

        localStorage.setItem("objectBread", JSON.stringify(objectBread));

        this.setBreadcumsAllowLocation(objectBread);
        setTitleScream(0, objectBread, this.languageParam);

        if (objectBreadValue.state && !objectBreadValue.cities) {
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
        if (objectBreadValue.state && objectBreadValue.cities) {
          await this.$router.push({
            name: "today-weather",
            params: {
              language: this.renderLanguage,
              location: [
                objectBread?.country_key?.toLowerCase(),
                convertLowerCase(objectBread.state),
                convertLowerCase(objectBread.cities),
              ],
            },
          });
        }
      }

      const param = `version=1&type=8&app_id=amobi.weather.forecast.radar.rain&request=https://api.forecast.io/forecast/TOH_KEY/${locationValue.latitude},${locationValue.longitude}?lang=${this.renderLanguage}`;
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
