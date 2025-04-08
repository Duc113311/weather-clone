<template>
  <div class="w-full">
    <!-- -->
    <div class="text-left h-full">
      <div class="txt_regular_title_50 h-[60px]">30°</div>
      <div class="txt_regular_city_40">
        <span>Hà Nội</span>
      </div>
    </div>
    <div>
      <button @click="convertToIframe">Chuyển đổi thành mã iframe</button>
    </div>

    <div v-if="iframeHtml">
      <textarea
        v-model="iframeHtml"
        ref="iframeCode"
        readonly
        style="width: 100%; height: 100px"
      >
      </textarea>
      <button @click="copyToClipboard">Copy mã HTML</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "create-iframe-page",

  data() {
    return {
      iframeHtml: "",
    };
  },

  methods: {
    convertToIframe() {
      this.iframeHtml = `<iframe
        width="100%"
        height="360px"
        src="https://thoitiet.app/widget/embed/"
        id="widgeturl"
        scrolling="no"
        frameborder="0"
        allowtransparency="true"
        style="border: none; overflow: hidden"
      ></iframe>`;
    },
    copyToClipboard() {
      const textarea = this.$refs.iframeCode;
      textarea.select();
      document.execCommand("copy");
      alert("Đã copy mã HTML!");
    },
  },
};
</script>

<style lang="scss" scoped>
textarea {
  color: #000000;
}
</style>
