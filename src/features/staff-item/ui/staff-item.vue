<template lang="">
  <table>
    <p>{{ staff.name }}</p>
    <p>{{ staff.surname }}</p>
    <p>{{ staff.age }}</p>
    <p>{{ staff.experience }}</p>
    <p>{{ staff.address }}</p>

  </table>
</template>
<script>
export default {
  props: {
    staff: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang=""></style>
