<template>
  <div class="cursor-pointer">
    <!--  -->
    <div class="district-card-km cursor-pointer overflow-hidden">
      <div v-if="objectProvince !== null" class="pad-district w-full">
        <div class="flex items-center justify-center p-1">
          <component :is="IcCardProvinces"></component>
        </div>

        <div class="text-center w-full">
          <p
            class="txt_medium_14 text-center"
            v-if="breadcumsObject.country_key === 'vn'"
          >
            <span v-if="renderLanguage === 'vi'">
              {{ objectProvince.viNameLanguage }}
            </span>
            <span v-else>
              {{ convertToLowCase(objectProvince.keyAccentLanguage) }}
            </span>
          </p>
          <p class="txt_medium_14 text-center" v-else>
            {{ objectProvince.enNameLanguage }}
          </p>
        </div>

        <div class="txt_regular_12 color_BFBFBF">
          <!-- <p>
            ({{ Math.round(calculateDistance(objectLocation.location))
            }}{{ unitSetting.activeDistance_save }} {{ $t("Away") }})
          </p> -->
          <p
            v-if="Math.round(calculateDistance(objectProvince.location)) !== 0"
          >
            {{
              $t(`{number}_{unit}_away`, {
                number: Math.round(calculateDistance(objectProvince.location)),
                unit: unitSetting.activeDistance_save,
              })
            }}
          </p>
        </div>
      </div>
      <div v-else class="w-full h-[112px]">
        <SkeletonLoader class="w-full h-full"> </SkeletonLoader>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import removeAccents from "remove-accents";
import { capitalizeWords, convertHaversine } from "@/utils/converValue";
import { encodeBase64, urlEncodeString } from "@/utils/EncoderDecoderUtils";
import { getDistance } from "geolib";
import { markRaw } from "vue";
import IcCardProvinces from "@/components/icons/IcCardProvinces.vue";
import SkeletonLoader from "@/control-ui/SkeletonLoader/SkeletonLoader.vue";

export default {
  name: "province-card-page",
  components: {
    IcCardProvinces,
    SkeletonLoader,
  },

  props: {
    objectProvince: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      distanceKm: 0,
      IcCardProvinces: markRaw(IcCardProvinces),
    };
  },

  computed: {
    ...mapGetters("commonModule", ["breadcumsObjectGetters"]),
    renderLanguage() {
      const languageRouter = this.$route.params;

      return Object.keys(languageRouter).length !== 0
        ? languageRouter.language !== "en" && languageRouter.language !== "vi"
          ? "en"
          : languageRouter.language
        : this.$i18n.locale !== "en" && this.$i18n.locale !== "vi"
        ? "en"
        : this.$i18n.locale;
    },

    languageParam() {
      const languageRouter = this.$route.params;
      return Object.keys(languageRouter).length !== 0
        ? languageRouter.language
        : this.$i18n.locale;
    },

    breadcumsObject() {
      const retrievedArray = JSON.parse(localStorage.getItem("objectBread"));

      return retrievedArray ? retrievedArray : this.breadcumsObjectGetters;
    },

    unitSetting() {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      return unitSetting;
    },
  },

  methods: {
    convertToLowCase(value) {
      return value ? value.replace(/_/g, " ") : "";
    },
    splitLocationName(location) {
      const keywords = [
        "Town",
        "Commune",
        "City",
        "District",
        "Ward",
        "Province",
      ]; // 🔥 Các từ khóa cần tách
      const regex = new RegExp(`\\b(${keywords.join("|")})\\b`, "gi"); // Regex tìm từ khóa

      const parts = location.split(/,\s*/); // Tách từng phần dựa trên dấu phẩy
      let nameParts = [];
      let types = [];
      let splitDetails = [];

      parts.forEach((part) => {
        const matchedType = part.match(regex); // Tìm từ khóa trong phần này
        const cleanedName = part.replace(regex, "").trim(); // Xóa từ khóa để lấy tên chính

        if (matchedType) {
          types.push(matchedType[0]); // Lưu loại địa danh
          splitDetails.push({ name: cleanedName, type: matchedType[0] }); // Lưu cả tên và loại vào danh sách
        }

        nameParts.push(cleanedName); // Lưu phần tên (không có từ khóa)
      });

      return {
        name: nameParts[0], // Tên chính, nối lại với dấu phẩy
        types: types[0], // Danh sách các loại địa danh
      };
    },
    calculateDistance(value) {
      const locationValue = {
        latitude: value.lat,
        longitude: value.lng,
      };
      const locationSearch = {
        latitude: this.breadcumsObject.latitude,
        longitude: this.breadcumsObject.longitude,
      };
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      const isMiles = unitSetting.activeDistance_save === "mi"; // Kiểm tra đơn vị đang sử dụng

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
    convertLanguage(data, language) {
      return data.languages[language];
    },

    removeWordAndAccents(str, wordToRemove) {
      const normalizedStr = removeAccents(str); // Loại bỏ dấu nếu có
      return normalizedStr
        .replace(new RegExp(`\\b${wordToRemove}\\b`, "gi"), "")
        .trim();
    },

    removeDiacritics(str) {
      const removeString = str
        .normalize("NFD") // Tách ký tự dấu
        .replace(/[\u0300-\u036f]/g, ""); // Loại bỏ dấu
      return removeString.toLowerCase().replace(/\s+/g, "");
    },

    convertToConvert(str) {
      const slug = removeAccents(str).toLowerCase().replace(/\s+/g, "");
      return slug;
    },
  },
};
</script>
<style lang="scss">
.district-card-km {
  box-shadow: inset 0px 0px 56px var(--bg-compo-1),
    inset -50px -50px 100px 0px var(--bg-compo-2),
    inset 500px 500px 100px 0px var(--bg-compo-3);
  border-radius: 10px;
}

.pad-district {
  padding: 10px;
  text-align: center;
  height: 112px;
  list-style-type: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.district-name {
  font-size: 1.2em;
  margin-bottom: 10px;
}

.weather-icon {
  width: 50px;
  height: 50px;
  margin: 10px 0;
}

.weather-condition {
  margin: 5px 0;
}

.temperature {
  font-weight: bold;
}
</style>
