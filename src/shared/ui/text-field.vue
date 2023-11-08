<template lang="">
  <label className="label w-2/6">
    {{ label }}
    <input v-bind="modelValue" class="root" type="text" />
  </label>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      required: false,
    },
    modelValue: {
      type: String,
      required: false,
    },
  },
};
</script>
<style>
.root {
  @apply bg-bgInput w-[100%] py-2 rounded-3xl pl-[20px] text-base  outline-none border-none text-textMain transition-colors duration-300;
}

.root:focus {
  @apply bg-bgInputFocus transition-colors duration-300;
}

.label {
  @apply text-textSecondary;
}
.label:focus-within {
  @apply text-focusColor;
}
</style>
