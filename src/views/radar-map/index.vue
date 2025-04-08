<template>
  <div class="w-full h-full">
    <!--  -->

    <div class="w-full h-full">
      <iframe
        ref="radarIframe"
        :key="iframeKey"
        :src="renderRadar"
        width="100%"
        height="100%"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  </div>
</template>
<script>
export default {
  name: "radar-map",

  data() {
    return {
      originalPosition: {
        latitude: "21.0277644",
        longitude: "105.8341598",
      },
      iframeKey: 0,
    };
  },

  computed: {
    renderRadar() {
      const dataPosition = this.originalPosition;
      const objectSetting = this.$store.state.commonModule.objectSettingSave;
      if (!dataPosition || !dataPosition.latitude || !dataPosition.longitude) {
        return null;
      }
      const zoomValue = "7"; // 7,6,5,4,3
      const metricTempValue =
        objectSetting.activeTemperature_save === "f" ? "f" : "c"; // c, f
      const metricRainValue = "mm"; // mm, in
      const metricSnow = "cm"; // cm, in
      const metricWind = this.convertMetricWind(
        objectSetting.activeWindSpeed_save
      ); // kmh, kt, bft, ms,mh
      const metricPressure = objectSetting.activePressure_save; // hpa, inhg, mmhg
      const metricHumidity = "percent"; // percent
      const metricClouds = objectSetting.activePrecipitation_save; // mm, in
      const urlHost =
        "https://maps.goweatherradar.com/en/widget/1bfe4f546eb8a1d9fbe2f73812e60361e616c57d";
      const urlIframe =
        urlHost +
        `?lat=${dataPosition.latitude}&lng=${dataPosition.longitude}&overlay=${this.overlayValue}&zoom=${zoomValue}&metricTemp=${metricTempValue}&metricRain=${metricRainValue}&metricSnow=${metricSnow}&metricWind=${metricWind}&metricPressure=${metricPressure}&metricHumidity=${metricHumidity}&metricClouds=${metricClouds}`;

      const urlIf = `https://embed.windy.com/embed2.html?lat=${dataPosition.latitude}&lon=${dataPosition.longitude}&zoom=${zoomValue}&metricTemp=${metricTempValue}&level=surface&overlay=${this.overlayValue}`;
      return urlIframe;
    },
  },
};
</script>
<style lang="scss"></style>
