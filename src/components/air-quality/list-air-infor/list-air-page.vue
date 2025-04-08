<template>
  <div class="w-full">
    <ItemComponent>
      <!--  -->
      <template v-slot:header>
        <div class="flex justify-between items-center">
          <div class="flex items-center text-left gap-2">
            <IcApiO3 class="icon-svg"></IcApiO3>

            <div class="flex items-center txt_medium_14 text-left">
              <span>{{ $t("Major_Air_Pollutants") }}</span>
            </div>
          </div>
        </div>
      </template>

      <div class="w-full h-auto flex md:gap-4 gap-2">
        <!--  -->
        <div
          class="w-[200px]"
          v-for="(item, index) in paramAqiPollutant"
          :key="index"
        >
          <!-- List -->
          <div class="cursor-pointer">
            <div class="district-card-air pad-smal">
              <div class="relative w-full h-full">
                <div class="absolute top-0 left-0">
                  <p
                    class="relative txt_medium_15"
                    v-html="convertHtmlAir(item.code)"
                  ></p>
                </div>
                <div class="absolute bottom-0 right-0">
                  <p class="txt_regular_17">
                    {{ decodeBase64Data(item.code) }}
                    <span class="txt_regular_14">µg/m3</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ItemComponent>
  </div>
</template>
<script>
import ItemComponent from "@/components/common/itemComponent.vue";
import IcApiO3 from "@/components/icons/IcApiO3.vue";
import { dataDecodeFirstPair, getAQIColor } from "@/utils/converValue";
import { decodeBase64 } from "@/utils/EncoderDecoderUtils";

export default {
  name: "list-air-page",

  components: {
    ItemComponent,
    IcApiO3,
  },

  data() {
    return {
      aqi: 160,
      dialColor: "#00ff00",
      isWhiteText: false,
      dialAngle: 0,
    };
  },

  computed: {
    paramAqiPollutant() {
      return this.$store.state.commonModule.objectAqiPollutant;
    },

    paramAirModule() {
      const storageAir = localStorage.getItem("airObject");
      if (storageAir) {
        const airObject = decodeBase64(storageAir);
        const decodeAirObject = JSON.parse(airObject);
        return decodeAirObject ? decodeAirObject : {};
      }
      return this.$store.state.airQualityModule.airObject.nearest
        ? this.$store.state.airQualityModule.airObject
        : {};
    },
  },

  watch: {
    paramAirModule(newData) {
      return this.setDial(newData.aqi);
    },
  },

  methods: {
    convertHtmlAir(value) {
      switch (value) {
        case "pm25":
          return '<span class="txt_light_summer">PM</span> <span class="txt_light absolute -bottom-0.5 right-6.5">2.5</span>';
        case "pm10":
          return '<span class="txt_light_summer">PM</span> <span class="txt_light absolute -bottom-0.5 right-6.5">10</span>';
        case "03":
          return '<span class="txt_light_summer">O</span> <span class="txt_light absolute -bottom-0.5 right-6.5">3</span>';
        case "no2":
          return '<span class="txt_light_summer">NO</span> <span class="txt_light absolute -bottom-0.5 right-6.5">2</span>';
        case "SO2":
          return '<span class="txt_light_summer">SO</span> <span class="txt_light absolute -bottom-0.5 right-6.5">2</span>';
        case "co":
          return '<span class="txt_light_summer">CO</span>';

        default:
          break;
      }
    },

    decodeBase64Data(value) {
      if (
        this.paramAirModule !== undefined &&
        Object.keys(this.paramAirModule).length !== 0
      ) {
        const findData = this.paramAirModule?.historic.find(
          (item) => item.n === value
        );
        if (findData) {
          const resultData = dataDecodeFirstPair(findData.d, 1, 0, 1);

          return resultData[0][1] + " " + "";
        }
        return "--" + " " + "";
      }
    },

    getAQIColorItem(value) {
      return getAQIColor(value);
    },

    setDial(aqi) {
      const angle = this.getAQIDialAngle(aqi);
      const bg = this.getAQIColorItem(aqi);

      this.dialAngle = angle;
      this.dialColor = bg;
      // this.isWhiteText = white;
    },

    getAQIDialAngle(aqi) {
      if (aqi >= 301) {
        return Math.min(((aqi - 301) / 200) * 30 + 150, 180);
      } else if (aqi >= 201) {
        return ((aqi - 201) / 100) * 30 + 120;
      } else if (aqi >= 151) {
        return ((aqi - 151) / 50) * 30 + 90;
      } else if (aqi >= 101) {
        return ((aqi - 101) / 50) * 30 + 60;
      } else if (aqi >= 51) {
        return ((aqi - 51) / 50) * 30 + 30;
      } else if (aqi >= 0) {
        return (aqi / 50) * 30;
      } else {
        return 0;
      }
    },
  },

  mounted() {
    this.setDial(this.paramAirModule.aqi);
  },
};
</script>
<style lang="scss">
.district-card-air {
  box-shadow: inset 0px 0px 56px var(--bg-compo-1),
    inset -50px -50px 100px 0px var(--bg-compo-2),
    inset 500px 500px 100px 0px var(--bg-compo-3);
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  height: 100px;
  list-style-type: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
