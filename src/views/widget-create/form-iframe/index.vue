<template>
  <div class="w-full h-full">
    <!--  -->
    <div class="form-widget w-full p-2">
      <!--  -->
      <div
        v-if="renderOptionWidget.valueSample === 'option_1'"
        class="w-full h-full flex justify-center items-center"
      >
        <div
          :style="{
            width: renderOptionWidget.valueSliderWidth + 'px',
            background: titleBackgroundColor,
          }"
          class="text-black overflow-hidden h-full"
        >
          <div class="w-full items-center pl-4 pr-4 pt-2 pb-2">
            <!-- Nhiệt độ -->
            <div class="flex w-full">
              <div class="text-left h-full w-auto">
                <div :style="{ color: titleColor }">
                  <p class="temp-ture">
                    <span class="txt_regular_40">{{
                      convertTemperature(
                        renderObjectWidget?.currently?.temperature
                      )
                    }}</span>
                  </p>
                  <a class="txt_regular_city_40" href="">{{
                    renderTitleWidget
                  }}</a>
                </div>
                <div
                  class="txt_regular_des"
                  :style="{ color: descriptionColor }"
                >
                  <p>
                    <span
                      >{{ $t("Real_feel") }}
                      {{
                        convertTemperature(
                          renderObjectWidget?.currently?.apparentTemperature
                        )
                      }}</span
                    >
                  </p>
                  <p>
                    <span>{{
                      convertCapitalizeWords(
                        $t(
                          `${renderObjectWidget?.currently?.summary.replace(
                            /\s+/g,
                            "_"
                          )}`
                        )
                      )
                    }}</span>
                  </p>
                </div>
              </div>
              <div class="ml-4 h-full flex items-center pt-4">
                <component
                  :width="50"
                  :height="50"
                  :is="
                    convertIconCurrently(renderObjectWidget?.currently?.icon)
                  "
                ></component>
              </div>
            </div>
          </div>

          <!-- Body -->
          <div
            class="w-full flex items-center justify-center pb-4 pl-4 pr-4 txt_regular_des"
            :style="{ color: textColor }"
          >
            <!--  -->
            <div class="w-full">
              <div
                :style="{
                  'border-bottom':
                    index === renderObjectWidget.listDaily.length - 1
                      ? 'none'
                      : `1px solid ${lineColor}`,
                }"
                class="flex justify-between items-center pt-2 pb-2 txt_light_14"
                v-for="(item, index) in renderObjectWidget?.listDaily"
                :key="index"
              >
                <div class="w-[60px]">
                  <span>{{ convertDayWeek(item.time) }}</span>
                </div>
                <div class="flex text-right">
                  <img
                    src="../../../assets/images/svg_v2/ic_droplet_blue.svg"
                    alt=""
                    width="16"
                  />
                  <span>{{ Math.round(item.humidity * 100) }}%</span>
                </div>
                <div class="flex items-center gap-2">
                  <component :is="convertIconCurrently(item?.icon)"></component>
                  <component :is="convertIconCurrently(item?.icon)"></component>
                  <!-- <img :src="convertIconCurrently(item?.icon)" alt="" />
                          <img :src="convertIconCurrently(item?.icon)" alt="" /> -->
                </div>
                <div class="flex items-center gap-1">
                  <span>
                    {{ convertTemperatureNot(item.temperatureMin) }}°
                  </span>
                  <span>
                    {{ convertTemperatureNot(item.temperatureMax) }}°
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="w-full bg-widget pl-4 pr-4 pt-2 pb-2">
            <div class="w-full flex justify-end items-center h-full gap-1">
              <div class="logoImg"></div>
            </div>
          </div>
          <!--  -->
        </div>
      </div>
      <!--  -->

      <div
        v-if="renderOptionWidget.valueSample === 'option_2'"
        class="w-full h-full flex justify-center items-center"
      >
        <div
          :style="{
            width: renderOptionWidget.valueSliderWidth + 'px',
            background: titleBackgroundColor,
          }"
          class="widget-form-new text-black overflow-hidden"
        >
          <!--  -->
          <div class="w-full items-center pl-4 pr-4 pt-2 pb-2">
            <div class="w-full text-center pt-2">
              <span class="txt_medium_30 text-white" href="">{{
                renderTitleWidget
              }}</span>
            </div>
            <!-- Nhiệt độ -->
            <div class="flex w-full">
              <div class="mr-4 h-full flex items-center pt-4">
                <component
                  :width="40"
                  :height="40"
                  :is="
                    convertIconCurrently(renderObjectWidget?.currently?.icon)
                  "
                ></component>
              </div>
              <div class="text-left h-full w-auto">
                <div :style="{ color: titleColor }">
                  <p class="temp-ture">
                    <span class="txt_regular_40">{{
                      convertTemperature(
                        renderObjectWidget?.currently?.temperature
                      )
                    }}</span>
                  </p>
                </div>
                <div
                  class="txt_regular_des"
                  :style="{ color: descriptionColor }"
                >
                  <p>
                    <span
                      >{{ $t("Real_feel") }}
                      {{
                        convertTemperature(
                          renderObjectWidget?.currently?.apparentTemperature
                        )
                      }}</span
                    >
                  </p>
                  <p>
                    <span>{{
                      convertCapitalizeWords(
                        $t(
                          `${renderObjectWidget?.currently?.summary.replace(
                            /\s+/g,
                            "_"
                          )}`
                        )
                      )
                    }}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!--  -->
          <div
            class="h-[42%] w-full flex items-center justify-center pb-4 pl-4 pr-4 txt_regular_des"
            :style="{ color: textColor }"
          >
            <div class="w-full">
              <div
                :style="{
                  'border-bottom':
                    index === renderObjectWidget.listDaily.length - 1
                      ? 'none'
                      : `1px solid ${lineColor}`,
                }"
                class="flex justify-between items-center pt-2 pb-2 txt_light_14"
                v-for="(item, index) in renderObjectWidget?.listDaily"
                :key="index"
              >
                <div class="w-[60px]">
                  <span>{{ convertDayWeek(item.time) }}</span>
                </div>
                <div class="flex text-right">
                  <img
                    src="../../../assets/images/svg_v2/ic_droplet_blue.svg"
                    alt=""
                    width="16"
                  />
                  <span>{{ Math.round(item.humidity * 100) }}%</span>
                </div>
                <div class="flex items-center gap-2">
                  <component :is="convertIconCurrently(item?.icon)"></component>
                  <component :is="convertIconCurrently(item?.icon)"></component>

                  <!-- <img :src="convertIconCurrently(item?.icon)" alt="" />
                          <img :src="convertIconCurrently(item?.icon)" alt="" /> -->
                </div>
                <div class="flex items-center gap-1">
                  <span>
                    {{ convertTemperatureNot(item.temperatureMin) }}°
                  </span>
                  <span>
                    {{ convertTemperatureNot(item.temperatureMax) }}°
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="h-[calc(100%-80%)] w-full bg-widget pl-4 pr-4 pt-2 pb-2">
            <div class="w-full flex justify-end items-center h-full gap-1">
              <div class="logoImg"></div>
            </div>
          </div>
        </div>
      </div>

      <!--  -->

      <div
        v-if="renderOptionWidget.valueSample === 'option_3'"
        class="w-full h-full flex justify-center items-center"
      >
        <div
          :style="{
            width: renderOptionWidget.valueSliderWidth + 'px',
            background: titleBackgroundColor,
          }"
          class="widget-form-new text-black overflow-hidden"
        >
          <!--  -->
          <div class="w-full items-center pl-4 pr-4 pt-2 pb-2">
            <div class="w-full text-left pt-2">
              <span class="txt_medium_30 text-white" href="">{{
                renderTitleWidget
              }}</span>
            </div>
            <!-- Nhiệt độ -->
            <div class="flex w-full">
              <div class="mr-4 h-full flex items-center pt-4">
                <component
                  :width="40"
                  :height="40"
                  :is="
                    convertIconCurrently(renderObjectWidget?.currently?.icon)
                  "
                ></component>
              </div>
              <div class="text-left h-full w-auto">
                <div :style="{ color: titleColor }">
                  <p class="temp-ture">
                    <span class="txt_regular_40">{{
                      convertTemperature(
                        renderObjectWidget?.currently?.temperature
                      )
                    }}</span>
                  </p>
                </div>
                <div
                  class="txt_regular_des"
                  :style="{ color: descriptionColor }"
                >
                  <p>
                    <span
                      >{{ $t("Real_feel") }}
                      {{
                        convertTemperature(
                          renderObjectWidget?.currently?.apparentTemperature
                        )
                      }}</span
                    >
                  </p>
                  <p>
                    <span>{{
                      convertCapitalizeWords(
                        $t(
                          `${renderObjectWidget?.currently?.summary.replace(
                            /\s+/g,
                            "_"
                          )}`
                        )
                      )
                    }}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!--  -->

          <div class="h-[calc(100%-80%)] w-full bg-widget pl-4 pr-4 pt-2 pb-2">
            <div class="w-full flex justify-end items-center h-full gap-1">
              <div class="logoImg"></div>
            </div>
          </div>
        </div>
      </div>

      <!--  -->

      <div
        v-if="renderOptionWidget.valueSample === 'option_4'"
        class="w-full h-full flex justify-center items-center"
      >
        <div
          :style="{
            width: renderOptionWidget.valueSliderWidth + 'px',
            background: titleBackgroundColor,
          }"
          class="widget-form-new text-black overflow-hidden"
        >
          <!--  -->
          <div class="w-full items-center pl-4 pr-4 pt-2 pb-2">
            <div class="w-full text-left pt-2">
              <span class="txt_medium_30 text-white" href="">{{
                renderTitleWidget
              }}</span>
            </div>
            <!-- Nhiệt độ -->
            <div class="flex w-full">
              <div class="mr-4 h-full flex items-center pt-4">
                <component
                  :width="40"
                  :height="40"
                  :is="
                    convertIconCurrently(renderObjectWidget?.currently?.icon)
                  "
                ></component>
              </div>
              <div class="text-left h-full w-auto">
                <div :style="{ color: titleColor }">
                  <p class="temp-ture">
                    <span class="txt_regular_40 text-white">{{
                      convertTemperature(
                        renderObjectWidget?.currently?.temperature
                      )
                    }}</span>
                  </p>
                </div>
                <div
                  class="txt_regular_des"
                  :style="{ color: descriptionColor }"
                >
                  <p>
                    <span
                      >{{ $t("Real_feel") }}
                      {{
                        convertTemperature(
                          renderObjectWidget?.currently?.apparentTemperature
                        )
                      }}</span
                    >
                  </p>
                  <p>
                    <span>{{
                      convertCapitalizeWords(
                        $t(
                          `${renderObjectWidget?.currently?.summary.replace(
                            /\s+/g,
                            "_"
                          )}`
                        )
                      )
                    }}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!--  -->

          <div class="h-[calc(100%-80%)] w-full bg-widget pl-4 pr-4 pt-2 pb-2">
            <div class="w-full flex justify-end items-center h-full gap-1">
              <div class="logoImg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import {
  getIconHourlyForecastTheme,
  convertDayOfWeek,
  fahrenheitToCelsiusNot,
  capitalizeWords,
  convertCtoF,
  convertFtoC,
  codeToFind,
} from "../../../utils/converValue.js";

export default {
  name: "form-iframe",

  data() {
    return {};
  },
  computed: {
    renderOptionWidget() {
      return JSON.parse(localStorage.getItem("optionWidgetObject"))
        ? JSON.parse(localStorage.getItem("optionWidgetObject"))
        : this.$store.state.weatherModule.valueOptionWidget;
    },

    renderTitleWidget() {
      return JSON.parse(localStorage.getItem("titleWidget"))
        ? JSON.parse(localStorage.getItem("titleWidget"))
        : this.$store.state.weatherModule.valueTitleWidget;
    },
    renderObjectWidget() {
      return JSON.parse(localStorage.getItem("objectWidget"))
        ? JSON.parse(localStorage.getItem("objectWidget"))
        : this.$store.state.weatherModule.objectWidget;
    },

    titleBackgroundColor() {
      debugger;
      return this.$route.query.titleBackgroundColor
        ? this.$route.query.titleBackgroundColor
        : this.$store.state.commonModule.titleBackgroundColor;
    },
    descriptionColor() {
      return this.$route.query.descriptionColor
        ? this.$route.query.descriptionColor
        : this.$store.state.commonModule.descriptionColor;
    },
    textColor() {
      return this.$route.query.textColor
        ? this.$route.query.textColor
        : this.$store.state.commonModule.textColor;
    },
    lineColor() {
      return this.$route.query.lineColor
        ? this.$route.query.lineColor
        : this.$store.state.commonModule.lineColor;
    },
    titleColor() {
      return this.$route.query.titleColor
        ? this.$route.query.titleColor
        : this.$store.state.commonModule.titleColor;
    },
  },

  mounted() {},

  methods: {
    ...mapMutations("weatherModule", ["setNumberDailyWeather"]),
    convertCapitalizeWords(value) {
      return capitalizeWords(value);
    },

    convertIconCurrently(value) {
      if (value) {
        const url = getIconHourlyForecastTheme(value);
        return url;
      }
    },

    convertDayWeek(value) {
      return convertDayOfWeek(value);
    },

    convertTemperature(value) {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      if (unitSetting.activeTemperature_save === "f") {
        return (
          convertCtoF(value) + codeToFind(unitSetting.activeTemperature_save)
        );
      } else {
        return (
          convertFtoC(value) + codeToFind(unitSetting.activeTemperature_save)
        );
      }
    },

    convertTemperatureNot(value) {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      if (unitSetting.activeTemperature_save === "f") {
        return convertCtoF(value);
      } else {
        return convertFtoC(value);
      }
    },
  },
};
</script>
<style lang="scss">
.widget-form-new {
  box-shadow: 0 14px 28px rgb(0 0 0 / 0%), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.bg-widget {
  background-color: #dfecff;
}
.logoImg {
  background-image: url(../../../assets/images/svg/logo_new.svg);
  width: 125px;
  height: 25px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: width 0.3s ease, height 0.3s ease; /* Thêm hiệu ứng chuyển đổi */
}

.temp-ture {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: start;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
</style>
