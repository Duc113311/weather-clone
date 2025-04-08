<template>
  <div
    class="w-full h-[500px] flex items-center justify-center bg-from mar-t mar-b"
  >
    <div class="w-full">
      <div class="flex w-full items-center h-[135px] justify-center p-5 gap-4">
        <div class="w-[30%] h-[1px] bg-white"></div>
        <div class="flex items-center gap-4">
          <img
            src="../../assets/images/svg/ic_fluent_cloud-error_504.svg"
            alt=""
            width="60"
          />
          <div class="txt_medium_504">404</div>
        </div>
        <div class="w-[30%] h-[1px] bg-white"></div>
      </div>
      <div class="txt_light_504 w-full text-center">
        Oops!_The_page_you_requested_was_not_found!
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "not-found-page",
  data() {
    return {};
  },

  methods: {},
};
</script>
<style lang="scss"></style>
