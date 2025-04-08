<template>
  <div class="w-full bg-unit show-scroll h-[80vh]">
    <!--  -->
    <div class="w-full h-full">
      <div
        class="w-full nav-bar cursor-pointer flex justify-between pad-option-tb-8 pr-2"
        v-for="(name, code) in languageMap"
        :key="code"
        @click="onChooseLanguage(code)"
      >
        <div class="txt_light_summer">
          <span> {{ name }}</span>
        </div>
        <div class="fade-leave-active" v-if="selectedLanguage === code">
          <img src="../../assets/images/svg/ic_success.svg" alt="" />
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import languageMap from "../../locales/index.json";

export default {
  name: "unit-language-page",

  data() {
    return {
      languageMap,
    };
  },

  computed: {
    selectedLanguage() {
      return this.$store.state.commonModule.codeLanguage;
    },
  },

  watch: {},

  methods: {
    ...mapMutations("commonModule", ["setCodeLanguage"]),
    onChooseLanguage(code) {
      this.selectedLanguage = code;
      localStorage.setItem("language", code);
      this.$i18n.locale = code;
      // this.$emit("onChangeLaguages", code);
      this.setCodeLanguage(code);
      const { path, params } = this.$route;
      const pathSegments = path.split("/").filter(Boolean); // Cắt bỏ dấu `/`

      // Nếu đường dẫn có ngôn ngữ, thay thế nó
      if (
        pathSegments.length > 0 &&
        this.$i18n.availableLocales.includes(pathSegments[0])
      ) {
        pathSegments[0] = code; // Cập nhật ngôn ngữ
      } else {
        pathSegments.unshift(code); // Nếu không có, thêm vào đầu URL
      }

      // Chuyển hướng sang đường dẫn mới
      this.$router.replace(`/${pathSegments.join("/")}`);
    },
  },

  mounted() {
    const { path, params } = this.$route;
    const languageParam = params.language;
    debugger;
    this.setCodeLanguage(languageParam);
  },
};
</script>
<style lang="scss">
.bg-unit {
  transition: right 0.3s ease;
  color: white;
}

.fade-leave-active {
  transition: opacity 0.5s;
}
</style>
