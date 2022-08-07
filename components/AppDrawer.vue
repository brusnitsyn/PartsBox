<template>
  <div v-show="backgroundVisible" class="fixed top-0 left-0 right-0 bottom-0 w-full h-full z-50">
    <div class="fixed top-0 left-0 right-0 bottom-0 -z-[1] bg-gray-300/60" @click="$emit('update:visible', false)">
    </div>
    <transition :name="direction === 'ltr' ? 'ltr' : 'rtl'">
      <div v-show="visible" class="fixed top-0 bottom-0 bg-white z-20 lg:max-w-[400px]" :class="
        [width, { 'left-0': direction === 'ltr', 'right-0': direction === 'rtl' }]
      ">
        <slot name="header" />
        <slot name="content" />
        <slot name="footer" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    direction: {
      type: String,
      default: "ltr",
    },
    visible: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: "w-[90%]",
    },
  },
  watch: {
    visible: function (newVal, oldVal) {
      if (!newVal)
        setTimeout(() => this.backgroundVisible = false, 300);
      else
        this.backgroundVisible = true
    }
  },
  data() {
    return {
      backgroundVisible: false,
    }
  },
  methods: {
    afterLeave(el) {
      // ...
    },
  },
};
</script>

<style scoped>
@keyframes ltr {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0);
  }
}

.ltr-enter-active {
  animation: ltr 0.3s;
}

.ltr-leave-active {
  animation: ltr 0.3s reverse;
}

@keyframes rtl {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
}

.rtl-enter-active {
  animation: rtl 0.3s;
}
.rtl-leave-active {
  animation: rtl 0.3s reverse;
}
</style>