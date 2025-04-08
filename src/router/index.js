import { createRouter, createWebHistory } from "vue-router";
// import HomePage from "../views/home/index.vue";
import HomePageV2 from "../views/home-page/index.vue";

import WidgetView from "../views/widget-create/form-iframe/index.vue";
import NotFoundComponent from "../views/404/index.vue";
import DashPage from "../views/index.vue";
import SearchPage from "../views/search/index.vue";
import RadarMap from "../views/radar-map/index.vue";

// Home-v2
import HomePageV3 from "../views/home-page/index-v3.vue";
const routes = [
  {
    path: "/widget-view",
    name: "widget-view",
    component: WidgetView,
    props: true,
  },

  { path: "/404", name: "404-page", component: NotFoundComponent }, // Component cho trang 404

  // v2

  {
    path: "/:location",
    name: "radar-map",
    component: RadarMap,
  },

  // {
  //   path: "",
  //   name: "home-page-v3",
  //   component: HomePageV3,
  // },

  {
    path: "",
    name: "dash-page",
    component: DashPage,

    children: [
      {
        path: "",
        name: "home-pages",
        component: HomePageV3,
      },
      {
        path: ":language",
        name: "city-page",
        component: SearchPage,
        children: [
          // Today-New
          {
            path: `today-weather/:location*`, // Tỉnh
            name: "today-weather",
            component: () => import("@/views/search/today-page/index.vue"), // Component cho route con
          },
          {
            path: `month-weather/:location*`, // Add ':language' as a dynamic segment
            name: "month-weather",
            component: () => import("@/views/search/month-page/index.vue"), // Component cho route con
          },
          {
            path: `hourly-weather/:location*`, // Add ':language' as a dynamic segment
            name: "hourly-weather",
            component: () => import("@/views/search/hourly-page/index.vue"), // Component cho route con
          },
          {
            path: `radar-weather/:location*`, // Add ':language' as a dynamic segment
            name: "radar-weather",
            component: () => import("@/views/search/radar-page/index.vue"), // Component cho route con
          },
          {
            path: `air-quality-weather/:location*`, // Add ':language' as a dynamic segment
            name: "air-quality-weather",
            component: () =>
              import("@/views/search/air-quality-page/index.vue"), // Component cho route con
          },
          {
            path: `uv-weather/:location*`, // Add ':language' as a dynamic segment
            name: "uv-weather",
            component: () => import("@/views/search/uv-page/index.vue"), // Component cho route con
          },
          {
            path: `moon-phase-weather/:location*`, // Add ':language' as a dynamic segment
            name: "moon-phase-weather",
            component: () => import("@/views/search/moon-phase-page/index.vue"), // Component cho route con
          },
          {
            path: `tide-page/:location*`, // Add ':language' as a dynamic segment
            name: "tide-page",
            component: () => import("@/views/search/tide-page/index.vue"), // Component cho route con
          },
          {
            path: `radar-map/:location*`, // Add ':language' as a dynamic segment
            name: "radar-map",
            component: () => import("@/views/search/radar-map/index.vue"), // Component cho route con
          },
        ],
      },
      {
        path: ":language/",
        component: HomePageV2, // Directly render HomePageV2 for language path
      },
      {
        path: ":language/create-widget",
        name: "create-widget-view",
        component: () =>
          // eslint-disable-next-line prettier/prettier
          import(
            /* webpackChunkName: "create-widget-view" */ "../views/widget-create/index.vue"
          ),
      },
    ],
  },

  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFoundComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Cuộn lên đầu mỗi khi điều hướng đến một route mới
    return { top: 0 };
  },
});

router.afterEach((to, from) => {
  const favicon = document.getElementById("favicon");
  if (favicon) {
    favicon.href = "/favicon.ico"; // Đổi đường dẫn favicon nếu cần
  }
});
const isSafeURL = (url) => {
  // Kiểm tra URL có chứa mã độc hay không
  const unsafeChars = /<script>|<\/script>|javascript:/i;
  return !unsafeChars.test(url);
};
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  if (isSafeURL(to.fullPath)) {
    next(); // Nếu URL an toàn, tiếp tục điều hướng
  } else {
    next("/404"); // Nếu URL không an toàn, chuyển hướng đến trang 404
  }
});

export default router;
