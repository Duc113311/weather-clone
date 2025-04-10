<template>
  <div class="w-full">
    <!--  -->
    <BaseComponent :height="heightAuto" :isShowPad="false">
      <template v-slot:header>
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
              d="M3.99936 14.899C3.2564 14.1399 2.69593 13.2217 2.3604 12.214C2.02486 11.2062 1.92307 10.1353 2.06272 9.08232C2.20238 8.02938 2.57982 7.02202 3.16646 6.13655C3.7531 5.25109 4.53355 4.51074 5.44869 3.97157C6.36384 3.43241 7.38969 3.10857 8.44853 3.0246C9.50737 2.94062 10.5714 3.09871 11.5601 3.48688C12.5488 3.87505 13.4362 4.48313 14.1551 5.26506C14.874 6.04698 15.4055 6.98225 15.7094 8.00002H17.4994C18.4649 7.99991 19.4048 8.31034 20.1804 8.88546C20.9559 9.46058 21.5259 10.2699 21.8061 11.1938C22.0864 12.1178 22.062 13.1074 21.7367 14.0164C21.4113 14.9254 20.8022 15.7057 19.9994 16.242M9.19971 22L12.1997 15M8.99951 13L5.99951 20M16.9995 13L13.9995 20"
              stroke="var(--color-icon-df)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <div class="txt_medium_14" v-if="wardParam.country_key === 'vn'">
            <span v-if="wardParam?.city && !wardParam?.district">
              {{
                $t(`Weather_{city}`, {
                  city: convertToLowCase(wardParam.city),
                })
              }}
            </span>

            <span
              v-if="wardParam?.city && wardParam?.district && !wardParam?.ward"
            >
              {{
                convertCapitalizeWords(
                  $t(`Weather_{city}`, {
                    city: convertToLowCase(wardParam.district),
                  })
                )
              }}
            </span>

            <span
              v-if="wardParam?.city && wardParam?.district && wardParam?.ward"
              >{{
                convertCapitalizeWords(
                  $t(`Weather_{city}`, {
                    city: convertToLowCase(wardParam.ward),
                  })
                )
              }}</span
            >
          </div>
          <div class="txt_medium_14" v-else>
            <span v-if="wardParam?.state && !wardParam?.cities">{{
              $t(`Weather_{city}`, {
                city: $t(`${wardParam?.state}`),
              })
            }}</span>

            <span v-if="wardParam?.state && wardParam?.cities">{{
              $t(`Weather_{city}`, {
                city: $t(`${wardParam?.cities}`),
              })
            }}</span>
          </div>
        </div>
      </template>
      <InforFullCard
        v-if="currentlyData && Object.keys(currentlyData).length < 0"
      ></InforFullCard>
      <div v-else class="w-full h-full">
        <SkeletonLoader class="w-full h-[380px]"> </SkeletonLoader>
      </div>
    </BaseComponent>
  </div>
</template>
<script>
import BaseComponent from "@/components/common/baseComponent.vue";
import InforFullCard from "./infor-full-card.vue";
import { mapGetters } from "vuex";
import { capitalizeWords } from "@/utils/converValue";
import removeAccents from "remove-accents";
import SkeletonLoader from "@/control-ui/SkeletonLoader/SkeletonLoader.vue";

export default {
  name: "temp-full-card",

  components: {
    BaseComponent,
    InforFullCard,
    SkeletonLoader,
  },
  data() {
    return {
      heightAuto: "auto",
    };
  },

  computed: {
    ...mapGetters("weatherModule", ["dailyOneGetters", "currentlyGetters"]),

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
    wardParam() {
      const retrievedArray = JSON.parse(localStorage.getItem("objectBread"));
      const resultData = retrievedArray
        ? retrievedArray
        : this.breadcumsObjectGetters;

      return resultData;
    },
  },

  methods: {
    convertCapitalizeWords(value) {
      return capitalizeWords(value);
    },

    convertToSlugCity(str) {
      const slug = removeAccents(str);
      return slug
        .toLowerCase() // Chuyển thành chữ thường
        .replace(/\s+/g, ""); // Xóa khoảng trắng
    },

    convertToLowCase(value) {
      return value ? value.replace(/_/g, " ") : "";
    },
  },
};
</script>
<style lang="scss"></style>
