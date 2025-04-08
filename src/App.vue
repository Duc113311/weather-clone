<template>
  <div class="w-full h-full" :class="[isShowScroll ? 'overflow-hidden' : '']">
    <router-view />
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "App-V2",

  data() {
    return {
      drawerValue: false,
      isContentLoaded: false,
    };
  },

  computed: {
    ...mapGetters("commonModule", ["isScrollGetters"]),
    currentHeader() {
      if (
        this.$route.name === "home-page" ||
        this.$route.name === "create-widget-view" ||
        this.$route.name === "introduce-page"
      ) {
        return "default";
      } else {
        return "city";
      }
    },

    headerClass() {
      return this.currentHeader === "city"
        ? "h-[calc(100vh-72px)]"
        : "md:h-[calc(100vh-28rem)] h-[calc(100vh-20rem)]";
    },
    isShowScroll() {
      return this.isScrollGetters;
    },
  },

  watch: {
    $route(to, from) {
      // Khi route thay đổi, đánh dấu là nội dung đang được load
      this.isContentLoaded = false;

      const language = to.params.language; // Lấy ngôn ngữ từ route mới
      if (language) {
        localStorage.setItem("language", language); // Lưu ngôn ngữ vào localStorage
        this.$i18n.locale = language; // Cập nhật ngôn ngữ cho i18n
      }
      // Sau khi route được tải xong, đánh dấu là đã load xong
      this.$nextTick(() => {
        this.isContentLoaded = true;
      });
    },
  },

  mounted() {
    // Kiểm tra nếu flag chưa được lưu trong localStorage
    const isFirstVisit = localStorage.getItem("isFirstVisit");

    // Nếu là lần truy cập đầu tiên, xóa cache và lưu flag
    if (!isFirstVisit) {
      // Xóa dữ liệu trong localStorage và sessionStorage
      localStorage.clear(); // Xóa tất cả localStorage
      sessionStorage.clear(); // Xóa tất cả sessionStorage

      // Lưu flag vào localStorage để đánh dấu lần truy cập đầu tiên
      localStorage.setItem("isFirstVisit", "false");
    }

    this.nameRouter = this.$route.name;
    const unitValue = localStorage.getItem("unit");
    if (unitValue) {
      const decodeAirObject = JSON.parse(unitValue);
      this.setObjectSetting(decodeAirObject);
      this.setObjectSettingNotLocal(decodeAirObject);
    }
    this.$nextTick(() => {
      document.body.classList.add("content-loaded");
    });

    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      this.$i18n.locale = storedLanguage; // Cập nhật ngôn ngữ cho i18n
    }

    document.title = this.$t("Local_National_Global") + " " + "| 9Weather";

    const valueTheme = localStorage.getItem("theme");
    if (valueTheme) {
      this.setThemeState(valueTheme);

      document.documentElement.setAttribute("data-theme", valueTheme);
      localStorage.setItem("theme", valueTheme); // Lưu trạng thái vào localStorage
    } else {
      this.setThemeState("dark");

      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark"); // Lưu trạng thái vào localStorage
    }
  },

  methods: {
    ...mapMutations("commonModule", [
      "setObjectSettingNotLocal",
      "setObjectSetting",
      "setThemeState",
    ]),
  },
};
</script>
<style lang="scss">
@import "./assets/css/style.css";
@import "./assets/css/common.css";
@import "./assets/css/colors.css";
@import "./assets/css/fonts.css";
@import "./assets/css/padding.css";

#app {
  font-family: "Roboto-Regular", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
body {
  position: relative;
  margin: 0px;
  height: 100%;
  margin: 0;
  font-family: var(--bs-body-font-family);
  font-size: var(--bs-body-font-size);
  font-weight: var(--bs-body-font-weight);
  line-height: var(--bs-body-line-height);
  color: var(--bs-body-color);
  text-align: var(--bs-body-text-align);
  background-color: var(--bs-body-bg);
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.body-app {
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 999;
  flex-direction: column;
}

#main-content {
  opacity: 0;
  transition: opacity 0.5s;
}

.content-loaded #main-content {
  opacity: 1;
}
</style>
