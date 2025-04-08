<template>
  <div class="w-full h-auto">
    <NavBottom class="md:block hidden mt-14"></NavBottom>

    <BreadcumsPage
      v-if="nameRouter !== 'radar-map'"
      :key="indexState + Math.random()"
    ></BreadcumsPage>

    <!--  -->
    <NavTabbar v-if="nameRouter !== 'radar-map'" class="mb-4"></NavTabbar>

    <div class="ads w-full h-[83px] bg-slate-500 md:hidden block"></div>

    <router-view></router-view>

    <FooterPage v-if="nameRouter !== 'radar-map'"></FooterPage>
  </div>
</template>
<script>
import BreadcumsPage from "@/layout/breadcums/breadcums-page.vue";
import FooterPage from "@/layout/footer/footer-page.vue";
import NavTabbar from "@/layout/tab-menu/nav-tabbar.vue";
import NavBottom from "@/layout/tabbar-bottom/nav-bottom.vue";
// import { mapMutations } from "vuex";

export default {
  name: "search-page",

  components: {
    BreadcumsPage,
    NavTabbar,
    FooterPage,
    NavBottom,
  },

  data() {
    return {
      nameRouter: "",
    };
  },

  computed: {
    indexState() {
      return this.$store.state.commonModule.indexComponent;
    },
  },

  mounted() {
    debugger;
    this.nameRouter = this.$route.name;
    // const objectBread = localStorage.getItem("objectBread");
    // this.setBreadcumsNotAllowLocation(objectBread);
  },

  methods: {
    // ...mapMutations("weatherModule", ["setBreadcumsNotAllowLocation"]),
  },
};
</script>
<style lang="scss"></style>
