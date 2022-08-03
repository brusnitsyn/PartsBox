<template>
  <div
    v-show="visible"
    class="fixed top-0 left-0 right-0 bottom-0 w-full h-full z-50"
  >
    <div
      class="fixed top-0 left-0 right-0 bottom-0 -z-[1] bg-slate-300/40"
      @click="visible = false"
    ></div>
    <div
      class="fixed left-0 top-0 bottom-0 bg-white transition-all w-4/5 z-20"
      :class="[drawerClass]"
    >
      <slot name="header" />
      <slot name="content" />
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    drawerClass: function () {
      return {
        "-translate-x-full": this.direction === "ltr" && !this.visible,
        "translate-x-full": this.direction === "rtl" && !this.visible,
        "translate-x-0": this.visible,
      };
    },
  },
  props: {
    direction: {
      type: String,
      default: "ltr",
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:visible'],
  methods: {
    changeVisible(visible) {
      this.$emit("update:visible", visible);
    },
    beforeEnter: function (el) {
      if (this.direction === "ltr") el.style.translateX = "-100%";
      else el.style.translateX = "100%";
    },
    enter: function (el, done) {
      Velocity(el, { translateX: "0" }, { duration: 350 });
      done();
    },
    leave: function (el, done) {
      if (this.direction === "ltr")
        Velocity(el, { translateX: "-100%" }, { duration: 350 });
      done();
    },
  },
};
</script>

<style>
</style>