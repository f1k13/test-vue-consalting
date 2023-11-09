<template>
  <form @submit.prevent class="flex w-full flex-col items-center gap-10">
    <h1 class="text-2xl text-white">Add an employee</h1>
    <text-field label="Enter name" v-model="staff.name"></text-field>
    <text-field label="Enter surname" v-model="staff.surname"></text-field>
    <text-field label="Enter age" v-model="staff.age"></text-field>
    <text-field
      label="Enter experience"
      v-model="staff.experience"
    ></text-field>
    <text-field label="Enter address" v-model="staff.address"></text-field>

    <button @click="addStaff">Add</button>
  </form>
</template>
<script>
import textField from "@/shared/ui/text-field.vue";
export default {
  components: {
    textField,
  },
  data() {
    return {
      staff: {
        name: "",
        surname: "",
        age: "",
        experience: "",
        address: "",
      },
    };
  },
  methods: {
    addStaff() {
      this.staff.id = Date.now();
      this.$emit("create", this.staff);
      this.staff = {
        name: "",
        surname: "",
        age: "",
        experience: "",
        address: "",
      };
    },
  },
};
</script>
<style lang=""></style>
