<template>
  <button
    class=" "
    :class="{
      'btn btn-accent': !type.length,
      'p-2 rounded-md hover:bg-gray-100': type === 'icon',
    }"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
</style>