<template>
  <div class="w-full relative flex flex-col">
    <div class="mb-1.5 flex gap-x-1 items-center">
      <span v-if="required" class="text-red-500 font-medium">*</span>
      <span class="dark:text-gray-100 text-sm lg:text-base">{{ label }}</span>
    </div>

    <div v-if="type === 'textarea'">
      <textarea
        :placeholder="placeholder"
        :value="value"
        :disabled="disabled"
        :name="name"
        @change="onChange"
        @input="updateValue"
        class="
          overflow-hidden
          text-ellipsis
          w-full
          align-bottom
          dark:text-gray-200
          text-gray-600
          disabled:border-gray-300 disabled:bg-gray-200
          focus:outline-none
          border
          dark:border-gray-600
          dark:placeholder-gray-600
          dark:disabled:border-gray-700
          dark:disabled:bg-gray-700
          dark:disabled:placeholder-gray-500
          dark:focus:border-accent-600
          border-gray-300
          p-3
          bg-transparent
          leading-normal
          appearance-none
          focus:border-accent-600
          rounded-md
          text-sm lg:text-base
        "
        :class="{ 'border-red-500': message.length }"
        rows="5"
      />
    </div>

    <input
      v-else
      :placeholder="placeholder"
      :type="type"
      :value="value"
      :disabled="disabled"
      :name="name"
      @change="$emit('update:change', event.target.value)"
      @input="$emit('update:input', event.target.value)"
      class="
        overflow-hidden
        text-ellipsis
        whitespace-nowrap
        w-full
        align-bottom
        dark:text-gray-200
        disabled:border-gray-300 disabled:bg-gray-200
        text-gray-600
        focus:outline-none
        border
        dark:border-gray-600
        dark:placeholder-gray-600
        dark:disabled:border-gray-700
        dark:disabled:bg-gray-700
        dark:disabled:placeholder-gray-500
        dark:focus:border-accent-600
        border-gray-300
        p-3
        bg-transparent
        leading-normal
        appearance-none
        focus:border-accent-600
        rounded-md
        text-sm lg:text-base
      "
      :class="{ 'border-red-500': message.length }"
    />

    <div
      v-if="message.length"
      class="bg-red-100 px-2 py-1.5 rounded-md mt-1.5"
    >
      <span class="text-red-500 leading-normal appearance-none text-sm">
        {{ message[0] }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    required: {
      type: Boolean,
      default: false,
    },
    message: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
</style>