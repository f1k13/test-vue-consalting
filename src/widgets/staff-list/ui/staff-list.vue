<template lang="">
  <table>
    <h3 class="text-1xl text-white">Staff table</h3>
    <staff-item v-for="staff in staffPeoples" :staff="staff" />
  </table>
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
