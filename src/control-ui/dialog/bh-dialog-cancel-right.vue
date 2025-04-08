<template>
  <div class="absolute top-0 left-0 bottom-0 right-0">
    <div class="relative h-full">
      <div class="v-modal-bg" @click="onClickHide()"></div>
      <div class="flex justify-center w-full h-full items-center z-30">
        <div class="z-model bg-default p-4 box-shadow-bh">
          <div
            class="w-full justify-center relative pb-2 bor-bottom flex items-center h-title-close h-form-title"
          >
            <div class="txt_medium">{{ renderStringName }}</div>
            <div class="absolute right-0">
              <img
                @click="onClickCancel()"
                src="../../assets/images/svg/ic_cancel.svg"
                width="24"
                height="24"
                alt=""
                class="cursor-pointer"
              />
            </div>
          </div>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "bh-dialog-cancel-right",

  data() {
    return {};
  },

  props: {
    stringName: {
      type: String,
      required: "",
    },
  },

  computed: {
    renderStringName() {
      return this.stringName;
    },
  },

  methods: {
    onClickCancel() {
      this.$emit("onCancelModel", false);
    },

    onClickHide() {
      this.$emit("onHideModel", false);
    },
  },
};
</script>
<style lang="scss"></style>
