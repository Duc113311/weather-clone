<template>
  <div class="w-full h-full">
    <div class="w-full mt-4 bg-unit-mobile">
      <!-- Nhiệt độ -->
      <div class="w-full cursor-pointer flex flex-col gap-4 pt-2 pb-2">
        <div class="txt_regular flex items-center justify-start gap-2">
          <component :is="IcTemperature"></component>
          <span>{{ $t("Temperature") }}</span>
        </div>
        <div class="flex gap-2 justify-end">
          <button
            class="btn-unit-mobile"
            :class="{ active: renderUnitSetting.activeTemperature === 'c' }"
            @click="setActiveButton('c')"
          >
            <span class="txt_medium">°C </span>
          </button>
          <button
            class="btn-unit-mobile"
            :class="{ active: renderUnitSetting.activeTemperature === 'f' }"
            @click="setActiveButton('f')"
          >
            <span class="txt_medium">°F</span>
          </button>
        </div>
      </div>
      <div class="bor-bottom"></div>
      <!-- Thời gian -->
      <div class="w-full cursor-pointer flex flex-col gap-4 pt-2 pb-2">
        <div class="txt_regular flex items-center justify-start gap-2">
          <component :is="IcTimeFormat"></component>
          <span>{{ $t("Time_Format") }}</span>
        </div>
        <div class="flex gap-2 justify-end">
          <button
            class="btn-unit-mobile"
            :class="{ active: renderUnitSetting.activeTime === '12h' }"
            @click="setActiveButton('12h')"
          >
            <span class="txt_medium">12h </span>
          </button>
          <button
            class="btn-unit-mobile"
            :class="{ active: renderUnitSetting.activeTime === '24h' }"
            @click="setActiveButton('24h')"
          >
            <span class="txt_medium">24h</span>
          </button>
        </div>
      </div>
      <div class="bor-bottom"></div>
      <!-- Lượng mưa -->
      <div class="w-full cursor-pointer flex flex-col gap-4 pt-2 pb-2">
        <div class="txt_regular flex items-center justify-start gap-2">
          <component :is="IcPrecipitation"></component>
          <span>{{ $t("Precipitation") }}</span>
        </div>
        <div class="flex gap-2 justify-end">
          <button
            class="btn-unit-mobile"
            :class="{ active: renderUnitSetting.activePrecipitation === 'mm' }"
            @click="setActiveButton('mm')"
          >
            <span class="txt_medium">mm</span>
          </button>
          <button
            class="btn-unit-mobile"
            :class="{ active: renderUnitSetting.activePrecipitation === 'in' }"
            @click="setActiveButton('in')"
          >
            <span class="txt_medium">in</span>
          </button>
        </div>
      </div>
      <div class="bor-bottom"></div>
      <!-- Khoảng cách -->
      <div class="w-full cursor-pointer flex flex-col gap-4 pt-2 pb-2">
        <div class="txt_regular flex items-center justify-start gap-2">
          <component :is="IcDistance"></component>
          <span>{{ $t("Distance") }}</span>
        </div>
        <div class="flex gap-2 justify-end">
          <button
            class="btn-unit-mobile"
            :class="{ active: renderUnitSetting.activeDistance === 'km' }"
            @click="setActiveButton('km')"
          >
            <span class="txt_medium">km</span>
          </button>
          <button
            class="btn-unit-mobile"
            :class="{ active: renderUnitSetting.activeDistance === 'mi' }"
            @click="setActiveButton('mi')"
          >
            <span class="txt_medium">mi</span>
          </button>
        </div>
      </div>
      <div class="bor-bottom"></div>
      <!-- Tốc độ gió -->

      <!-- Áp xuất -->
      <div class="w-full cursor-pointer flex flex-col gap-4 pt-2 pb-2">
        <div class="txt_regular flex items-center justify-start gap-2">
          <component :is="IcWindSpeed"></component>
          <span>{{ $t("Wind_speed") }}</span>
        </div>
        <div class="flex flex-col gap-2">
          <div class="flex gap-2 justify-end">
            <button
              class="btn-unit-mobile"
              :class="{ active: renderUnitSetting.activeWindSpeed === 'm/s' }"
              @click="setActiveButton('m/s')"
            >
              <span class="txt_regular_14">m/s </span>
            </button>
            <button
              class="btn-unit-mobile"
              :class="{ active: renderUnitSetting.activeWindSpeed === 'km/h' }"
              @click="setActiveButton('km/h')"
            >
              <span class="txt_regular_14">km/h</span>
            </button>
            <button
              class="btn-unit-mobile"
              :class="{ active: renderUnitSetting.activeWindSpeed === 'mi/h' }"
              @click="setActiveButton('mi/h')"
            >
              <span class="txt_regular_14">mi/h</span>
            </button>
            <button
              class="btn-unit-mobile"
              :class="{ active: renderUnitSetting.activeWindSpeed === 'knot' }"
              @click="setActiveButton('knot')"
            >
              <span class="txt_regular_14">Knot</span>
            </button>
            <button
              class="btn-unit-mobile w-auto"
              :class="{ active: renderUnitSetting.activeWindSpeed === 'bft' }"
              @click="setActiveButton('bft')"
            >
              <span class="txt_regular_14">Beaufort scale</span>
            </button>
          </div>
        </div>
      </div>
      <div class="bor-bottom"></div>
      <!-- Pressure -->
      <div class="w-full cursor-pointer flex flex-col gap-4 pt-2 pb-2">
        <div class="txt_regular flex items-center justify-start gap-2">
          <component :is="IcPressure"></component>
          <span>{{ $t("Pressure") }}</span>
        </div>
        <div class="flex flex-col gap-2">
          <div class="gap-2 flex justify-end">
            <button
              class="btn-unit-mobile"
              :class="{ active: renderUnitSetting.activePressure === 'mmHg' }"
              @click="setActiveButton('mmHg')"
            >
              <span class="txt_regular_14">mmHg</span>
            </button>
            <button
              class="btn-unit-mobile"
              :class="{ active: renderUnitSetting.activePressure === 'hPa' }"
              @click="setActiveButton('hPa')"
            >
              <span class="txt_regular_14">hPa</span>
            </button>
            <button
              class="btn-unit-mobile"
              :class="{ active: renderUnitSetting.activePressure === 'atm' }"
              @click="setActiveButton('atm')"
            >
              <span class="txt_regular_14">atm</span>
            </button>
            <button
              class="btn-unit-mobile"
              :class="{ active: renderUnitSetting.activePressure === 'mBar' }"
              @click="setActiveButton('mBar')"
            >
              <span class="txt_regular_14">mBar</span>
            </button>
            <button
              class="btn-unit-mobile"
              :class="{ active: renderUnitSetting.activePressure === 'inHg' }"
              @click="setActiveButton('inHg')"
            >
              <span class="txt_regular_14">inHg</span>
            </button>
            <button
              class="btn-unit-mobile"
              :class="{ active: renderUnitSetting.activePressure === 'kPa' }"
              @click="setActiveButton('kPa')"
            >
              <span class="txt_regular_14">kPa</span>
            </button>
          </div>
        </div>
      </div>
      <div class="bor-bottom"></div>
    </div>

    <div class="w-full p-4 mt-4 flex justify-center">
      <button
        type="button"
        @click="onClickDoneUnit()"
        class="w-[100px] bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none font-medium rounded-xl text-sm px-5 py-3 text-center me-2 mb-2"
      >
        <span class="txt_medium">{{ $t("Done") }}</span>
      </button>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import { ElNotification } from "element-plus";
import IcTemperature from "../icons/mobile/IcTemperature.vue";
import { markRaw } from "vue";
import IcTimeFormat from "../icons/mobile/IcTimeFormat.vue";
import IcPrecipitation from "../icons/mobile/IcPrecipitation.vue";
import IcDistance from "../icons/mobile/IcDistance.vue";
import IcWindSpeed from "../icons/mobile/IcWindSpeed.vue";
import IcPressure from "../icons/mobile/IcPressure.vue";

export default {
  name: "unit-preferences-page-mobile",
  setup() {
    const successUnit = () => {
      ElNotification({
        title: "Unit",
        message: "Unit installation successful",
        type: "success",
        position: "bottom-left",
      });
    };
    return {
      successUnit,
    };
  },
  data() {
    return {
      objectNewSetting: {
        activeTemperature: "c",
        activeTime: "12h",
        activePrecipitation: "mm",
        activeDistance: "km",
        activeWindSpeed: "mi/h",
        activePressure: "hPa",
      },
      indexKey: 0,
      IcTemperature: markRaw(IcTemperature),
      IcTimeFormat: markRaw(IcTimeFormat),
      IcPrecipitation: markRaw(IcPrecipitation),
      IcDistance: markRaw(IcDistance),
      IcWindSpeed: markRaw(IcWindSpeed),
      IcPressure: markRaw(IcPressure),
    };
  },

  computed: {
    renderUnitSetting() {
      return this.$store.state.commonModule.objectSetting;
    },
  },

  methods: {
    ...mapMutations("commonModule", [
      "setObjectSetting",
      "setActivePressure",
      "setActiveWindSpeed",
      "setActiveDistance",
      "setActivePrecipitation",
      "setActiveTime",
      "setActiveTemperature",
      "setObjectSettingSave",
      "setObjectSettingSaveDefault",
      "setIndexComponent",
    ]),
    setActiveButton(value) {
      const nameValue = value;
      if (nameValue === "c" || nameValue === "f") {
        this.setActiveTemperature(nameValue);
      }
      if (nameValue === "12h" || nameValue === "24h") {
        this.setActiveTime(nameValue);
      }
      if (nameValue === "mm" || nameValue === "in") {
        this.setActivePrecipitation(nameValue);
      }
      if (nameValue === "km" || nameValue === "mi") {
        this.setActiveDistance(nameValue);
      }
      if (
        nameValue === "m/s" ||
        nameValue === "km/h" ||
        nameValue === "mi/h" ||
        nameValue === "knot" ||
        nameValue === "bft"
      ) {
        this.setActiveWindSpeed(nameValue);
      }
      if (
        nameValue === "mmHg" ||
        nameValue === "hPa" ||
        nameValue === "atm" ||
        nameValue === "mBar" ||
        nameValue === "inHg" ||
        nameValue === "kPa"
      ) {
        this.objectNewSetting.activePressure = nameValue;
        this.setActivePressure(nameValue);
      }
    },

    onClickDoneUnit() {
      this.successUnit();
      // this.$router.go();
      this.setIndexComponent(this.indexKey++);

      this.setObjectSettingSaveDefault(this.renderUnitSetting);

      this.$emit("onCloseDraw", false);
    },
  },
};
</script>
<style lang="scss">
.bg-unit-mobile {
  transition: right 0.3s ease;
  color: var(--color-menu-mobile);
}

.btn-unit-mobile {
  border-radius: 12px;
  background-color: var(--bg-btn-option);
  padding: 10px 10px;
  width: 60px;
  height: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-unit-mobile:hover {
  background-color: #6056bb9a;
}
.btn-unit-mobile.active {
  border: 2px solid #3490dc; /* Example active background color */
  color: #ffffff; /* Example active text color */
}
button {
  cursor: pointer;
}
</style>
