<template>
  <form @submit.prevent class="flex w-full flex-col items-center gap-10">
    <h1>Form created</h1>
    <input type="text" v-model="staff.name" />
    <button @click="addStaff">Add</button>
  </form>
</template>
<script>
import textField from "@/shared/ui/text-field.vue";
export default {
  data() {
    return {
      staff: {
        name: "",
        surname: "",
        age: "",
        experience: "",
      },
    }; 
  },
  methods: {
    addStaff() {
      this.staff.id = Date.now();
      this.staff = {
        name: "",
        surname: "",
        age: "",
        experience: "",
      };
    },
  },
};
</script>
<style lang=""></style>
