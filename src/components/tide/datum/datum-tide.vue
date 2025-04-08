<template>
  <div class="w-full h-full">
    <!--  -->
    <BaseComponent :height="heightAuto" :isShowPad="false">
      <template v-slot:header>
        <div class="flex items-center justify-between text-left gap-2">
          <div class="flex items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 8.49902C17.5228 8.49902 22 7.15588 22 5.49902C22 3.84217 17.5228 2.49902 12 2.49902C6.47715 2.49902 2 3.84217 2 5.49902C2 7.15588 6.47715 8.49902 12 8.49902Z"
                stroke="var(--color-icon-df)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.385 7.74902C3.31 8.29902 2 9.10302 2 9.99902C2 11.656 6.477 12.999 12 12.999C17.523 12.999 22 11.656 22 9.99902C22 9.10302 20.6905 8.29902 18.615 7.74902C16.852 8.21552 14.536 8.49902 12 8.49902C9.464 8.49902 7.1485 8.21552 5.385 7.74902Z"
                stroke="var(--color-icon-df)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.385 12.249C3.31 12.799 2 13.603 2 14.499C2 16.156 6.477 17.499 12 17.499C17.523 17.499 22 16.156 22 14.499C22 13.603 20.6905 12.799 18.615 12.249"
                stroke="var(--color-icon-df)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.385 16.749C3.31 17.299 2 18.103 2 18.999C2 20.656 6.477 21.999 12 21.999C17.523 21.999 22 20.656 22 18.999C22 18.103 20.6905 17.299 18.615 16.749"
                stroke="var(--color-icon-df)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div class="txt_medium_14">
              <!--  -->
              Tide datum data
            </div>
          </div>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="cursor-pointer"
            @click="drawer = true"
          >
            <path
              d="M10 14.999C10.2833 14.999 10.521 14.903 10.713 14.711C10.905 14.519 11.0007 14.2817 11 13.999V9.99902C11 9.71569 10.904 9.47836 10.712 9.28702C10.52 9.09569 10.2827 8.99969 10 8.99902C9.71733 8.99836 9.48 9.09436 9.288 9.28702C9.096 9.47969 9 9.71702 9 9.99902V13.999C9 14.2824 9.096 14.52 9.288 14.712C9.48 14.904 9.71733 14.9997 10 14.999ZM10 6.99902C10.2833 6.99902 10.521 6.90302 10.713 6.71102C10.905 6.51902 11.0007 6.28169 11 5.99902C10.9993 5.71636 10.9033 5.47902 10.712 5.28702C10.5207 5.09502 10.2833 4.99902 10 4.99902C9.71667 4.99902 9.47933 5.09502 9.288 5.28702C9.09667 5.47902 9.00067 5.71636 9 5.99902C8.99933 6.28169 9.09533 6.51936 9.288 6.71202C9.48067 6.90469 9.718 7.00036 10 6.99902ZM10 19.999C8.61667 19.999 7.31667 19.7364 6.1 19.211C4.88334 18.6857 3.825 17.9734 2.925 17.074C2.025 16.1747 1.31267 15.1164 0.788001 13.899C0.263335 12.6817 0.000667933 11.3817 1.26582e-06 9.99902C-0.000665401 8.61636 0.262001 7.31636 0.788001 6.09902C1.314 4.88169 2.02633 3.82336 2.925 2.92402C3.82367 2.02469 4.882 1.31236 6.1 0.787024C7.318 0.26169 8.618 -0.000976562 10 -0.000976562C11.382 -0.000976563 12.682 0.26169 13.9 0.787024C15.118 1.31236 16.1763 2.02469 17.075 2.92402C17.9737 3.82336 18.6863 4.88169 19.213 6.09902C19.7397 7.31636 20.002 8.61636 20 9.99902C19.998 11.3817 19.7353 12.6817 19.212 13.899C18.6887 15.1164 17.9763 16.1747 17.075 17.074C16.1737 17.9734 15.1153 18.686 13.9 19.212C12.6847 19.738 11.3847 20.0004 10 19.999ZM10 17.999C12.2333 17.999 14.125 17.224 15.675 15.674C17.225 14.124 18 12.2324 18 9.99902C18 7.76569 17.225 5.87402 15.675 4.32402C14.125 2.77402 12.2333 1.99902 10 1.99902C7.76667 1.99902 5.875 2.77402 4.325 4.32402C2.775 5.87402 2 7.76569 2 9.99902C2 12.2324 2.775 14.124 4.325 15.674C5.875 17.224 7.76667 17.999 10 17.999Z"
              fill="var(--color-icon-df)"
            />
          </svg>

          <el-drawer class="bg-draw" v-model="drawer" :with-header="false">
            <div class="w-full mt-12">
              <div class="w-full flex items-center justify-center pt-2 pb-2">
                <p class="txt_medium_17">Tidal Datums</p>
              </div>
              <div class="flex flex-col gap-2">
                <div>
                  <span class="txt_regular_14_tide color_AEBACA"
                    >In general, a datum is a base elevation used as a reference
                    from which to reckon heights or depths. A tidal datum is a
                    standard elevation defined by a certain phase of the tide.
                    Tidal datums are used as references to measure local water
                    levels and should not be extended into areas having
                    differing oceanographic characteristics without
                    substantiating measurements.</span
                  >
                </div>
                <div class="text-left">
                  <p class="txt_medium_14">HAT (Highest Astronomical Tide)</p>
                  <span class="txt_regular_14_tide color_AEBACA"
                    >The elevation of the highest predicted astronomical tide
                    expected to occur at a specific tide station over the time
                    period of 40 years. The 40-year period will include 2
                    National Tidal Datum Epoch periods. This time period will be
                    updated every 20 years. The present values are based on the
                    time period of 2000-2040.</span
                  >
                </div>
                <div>
                  <p class="txt_medium_14">WHHW (Mean Higher High Water)*</p>
                  <span class="txt_regular_14_tide color_AEBACA"
                    >The average of the higher high water height of each tidal
                    day observed over the National Tidal Datum Epoch. For
                    stations with shorter series, comparison of simultaneous
                    observations with a control tide station is made in order to
                    derive the equivalent datum of the National Tidal Datum
                    Epoch.</span
                  >
                </div>
                <div>
                  <p class="txt_medium_14">WHW (Mean High Water)</p>
                  <span class="txt_regular_14_tide color_AEBACA"
                    >The average of all the high water heights observed over the
                    National Tidal Datum Epoch. For stations with shorter
                    series, comparison of simultaneous observations with a
                    control tide station is made in order to derive the
                    equivalent datum of the National Tidal Datum Epoch.</span
                  >
                </div>
                <div>
                  <p class="txt_medium_14">DTL (Diurnal Tide Level)</p>
                  <span class="txt_regular_14_tide color_AEBACA"
                    >The arithmetic mean of mean higher high water and mean
                    lower low water.</span
                  >
                </div>
                <div>
                  <p class="txt_medium_14">MTL (Mean Tide Level)</p>
                  <span class="txt_regular_14_tide color_AEBACA"
                    >The arithmetic mean of mean high water and mean low
                    water.</span
                  >
                </div>
                <div>
                  <p class="txt_medium_14">MSL (Mean Sea Level)</p>
                  <span class="txt_regular_14_tide color_AEBACA"
                    >The arithmetic mean of hourly heights observed over the
                    National Tidal Datum Epoch. Shorter series are specified in
                    the name; e.g., monthly mean sea level and yearly mean sea
                    level.</span
                  >
                </div>
                <div>
                  <p class="txt_medium_14">MLW (Mean Low Water)</p>
                  <span class="txt_regular_14_tide color_AEBACA"
                    >The average of all the low water heights observed over the
                    National Tidal Datum Epoch. For stations with shorter
                    series, comparison of simultaneous observations with a
                    control tide station is made in order to derive the
                    equivalent datum of the National Tidal Datum Epoch.</span
                  >
                </div>
                <div>
                  <p class="txt_medium_14">MLLW (Mean Lower Low Water)*</p>
                  <span class="txt_regular_14_tide color_AEBACA"
                    >The average of the lower low water height of each tidal day
                    observed over the National Tidal Datum Epoch. For stations
                    with shorter series, comparison of simultaneous observations
                    with a control tide station is made in order to derive the
                    equivalent datum of the National Tidal Datum Epoch.</span
                  >
                </div>
                <div>
                  <p class="txt_medium_14">LAT (Lowest Astronomical Tide)</p>
                  <span class="txt_regular_14_tide color_AEBACA"
                    >The elevation of the lowest predicted astronomical tide
                    expected to occur at a specific tide station over the time
                    period of 40 years. The 40-year period will include 2
                    National Tidal Datum Epoch periods. This time period will be
                    updated every 20 years. The present values are based on the
                    time period of 2000-2040.</span
                  >
                </div>
                <div>
                  <p class="txt_medium_14">GT (Great Diurnal Range)</p>
                  <span class="txt_regular_14_tide color_AEBACA"
                    >The difference in height between mean higher high water and
                    mean lower low water.</span
                  >
                </div>
                <div>
                  <p class="txt_medium_14">MN (Mean Range of Tide)</p>
                  <span class="txt_regular_14_tide color_AEBACA"
                    >The difference in height between mean high water and mean
                    low water.</span
                  >
                </div>
                <div>
                  <p class="txt_medium_14">
                    DHQ (Mean Diurnal High Water Inequality)
                  </p>
                  <span class="txt_regular_14_tide color_AEBACA"
                    >One-half the average difference between the two high waters
                    of each tidal day observed over the National Tidal Datum
                    Epoch. It is obtained by subtracting the mean of all the
                    high waters from the mean of the higher high waters.</span
                  >
                </div>
                <div>
                  <p class="txt_medium_14">
                    DLQ (Mean Diurnal Low Water Inequality)
                  </p>
                  <span class="txt_regular_14_tide color_AEBACA"
                    >One-half the average difference between the two low waters
                    of each tidal day observed over the National Tidal Datum
                    Epoch. It is obtained by subtracting the mean of the lower
                    low waters from the mean of all the low waters.</span
                  >
                </div>
                <div>
                  <span class="txt_regular_14_tide color_AEBACA"
                    >*Some locations have diurnal tides--one high tide and one
                    low tide per day. At most locations, there are semidiurnal
                    tides--the tide cycles through a high and low twice each
                    day, with one of the two high tides being higher than the
                    other and one of the two low tides being lower than the
                    other.</span
                  >
                </div>
              </div>
            </div>
          </el-drawer>
        </div>
      </template>
      <div class="w-full h-[300px] pad-big pt-6">
        <!--  -->
        <div class="w-full grid grid-cols-3 gap-6">
          <div v-for="(value, key) in datumsDataRender" :key="key">
            <p class="txt_medium_14 text-center">{{ key }}</p>
            <span class="txt_regular_14"
              >{{ convertDatum(value) }} {{ unitTide }}</span
            >
          </div>
        </div>
      </div>
    </BaseComponent>
  </div>
</template>
<script>
import BaseComponent from "@/components/common/baseComponent.vue";
import { convertFeetToMeter, convertMeterToFeet } from "@/utils/converValue";
import { mapGetters } from "vuex";

export default {
  name: "datum-tide",

  components: { BaseComponent },

  data() {
    return {
      heightAuto: "auto",
      drawer: false,
    };
  },

  computed: {
    ...mapGetters("tideModule", ["datumsDataGetters"]),
    datumsDataRender() {
      console.log("datumsDataRender", this.datumsDataGetters);

      return this.datumsDataGetters;
    },

    unitTide() {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;

      return unitSetting.activeTide_save;
    },
  },

  methods: {
    convertDatum(value) {
      debugger;
      const unitSetting = this.$store.state.commonModule.objectSettingSave;

      if (unitSetting.activeTide_save === "m") {
        return convertFeetToMeter(value);
      } else {
        return convertMeterToFeet(value);
      }
    },

    onClickShowDatum() {
      debugger;
    },
  },
};
</script>
<style lang="scss">
.bg-draw {
  background-color: #34527c;
}

.color_AEBACA {
  color: #aebaca;
}
</style>
