<template>
  <div class="modal" v-if="isVisible" @click="hideModal">
    <div
      class="m-auto bg-textSecondary rounded-3xl min-h-[50px] min-w-[300px] p-5"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    // Компонент модального окна передает свойство isVisible в родительский компонент и обрабатывает его
    hideModal() {
      this.$emit("update:isVisible", false);
    },
  },
};
</script>
<style>
.modal {
  @apply fixed top-0 left-0 w-full h-full bg-black/40 flex justify-center items-center;
}
</style>
