<template lang="">
  <div v-for="staff in staffPeoples">
    <p>{{ staff.name }}</p>
    <p>{{ staff.surname }}</p>
    <p>{{ staff.age }}</p>
    <p>{{ staff.experience }}</p>
  </div>
</template>
<script>
export default {
  props: {
    staffPeoples: {
      type: Array,
      required: true,
    },
      
  },
};
</script>
<style lang=""></style>
