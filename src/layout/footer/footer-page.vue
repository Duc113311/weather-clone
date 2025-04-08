<template>
  <div class="w-full h-[60px] p-2 bg-footer mt-10">
    <div class="container">
      <!-- footer -->
      <div class="w-full justify-between flex items-center">
        <div
          class="logo-app lg:w-[600px] h-full flex justify-center items-center"
        >
          <div class="flex w-full items-center gap-2 cursor-pointer">
            <div class="imgLogo-footer cursor-pointer"></div>
            <div class="txt_bold_34 color-title-logo">
              <a href="http://">9Weather</a>
            </div>
          </div>
        </div>
        <div
          class="tab-proxy flex items-center color-title-logo txt_regular_17"
        >
          <div>
            <span class="underline">
              <a href="http://">{{ $t("Tems_of_Use") }}</a>
            </span>
          </div>
          &nbsp;|&nbsp;
          <div>
            <span class="underline"
              ><a href="http://">{{ $t("Privacy_Policy") }}</a></span
            >
          </div>
          &nbsp;|&nbsp;
          <div>
            <span class="underline"
              ><a href="http://">{{ $t("Cookie_Policy") }}</a></span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "footer_page",
};
</script>
<style lang="scss">
.bg-footer {
  background-color: var(--bs-header-bg);
}
</style>
