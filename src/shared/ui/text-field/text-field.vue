<template>
  <div class="w-[400px]">
    <label class="label">
      {{ label }}
      <input
        :value="modelValue"
        @input="onChange"
        class="root"
        type="text"
        @click="(e) => e.stopPropagation()"
      />
    </label>
  </div>
</template>
<script>
export default {
  props: {
    modelValue: [String, Number],
    label: String,
    size: String,
  },
  methods: {
    // Обработка изменений в инпуте и передача его в родительский компонент
    onChange(event) {
      this.$emit("update:modelValue", event.target.value);
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
