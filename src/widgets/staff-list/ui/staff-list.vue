<template lang="">
  <div class="mt-5 w-[34%] flex flex-col justify-center p-5 ">
    <h3 class="text-2xl font-bold text-white text-center">Staff table</h3>
    <staff-item v-for="staff in staffPeoples" :staff="staff" :key="staff.id" />
  </div>
</template>
<script>
import staffItem from "@/features/staff-item/ui/staff-item.vue";
export default {
  components: {
    staffItem,
  },
  props: {
    staffPeoples: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style lang=""></style>
