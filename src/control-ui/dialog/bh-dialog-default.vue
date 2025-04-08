<template>
  <div class="absolute top-0 left-0 bottom-0 right-0">
    <div class="relative h-full">
      <div class="v-modal-bg" @click="onClickHide()"></div>
      <div class="flex justify-center w-full h-full items-center z-30">
        <div class="z-model bg-default p-4 box-shadow-bh">
          <div
            class="w-full justify-between mb-5 flex items-center h-title-close h-form-title"
          >
            <img
              @click="onClickCancel()"
              src="../../assets/images/svg/ic_cancel.svg"
              width="24"
              height="24"
              alt=""
              class="cursor-pointer"
            />
            <div class="txt_medium">Phản hồi và gợi ý</div>

            <img
              @click="onClickSave()"
              src="../../assets/images/svg/ic_mingcute_send_fill.svg"
              width="24"
              height="24"
              class="cursor-pointer"
            />
          </div>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bh-dialog-default",
  data() {
    return {};
  },

  computed: {},

  mounted() {},

  methods: {
    onClickCancel() {
      this.$emit("onCancelModel", false);
    },

    onClickHide() {
      this.$emit("onHideModel", false);
    },

    onClickSave() {
      this.$emit("onSaveModel", false);
    },
  },
};
</script>

<style lang="scss" scoped></style>
