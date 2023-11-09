<template>
  <form @submit.prevent class="flex w-full flex-col items-center gap-10">
    <h1 class="text-2xl text-white ont-bold">Add an employee</h1>
    <text-field label="Enter name" v-model="staff.name"></text-field>
    <text-field label="Enter surname" v-model="staff.surname"></text-field>
    <text-field label="Enter age" v-model="staff.age"></text-field>
    <text-field
      label="Enter experience"
      v-model="staff.experience"
    ></text-field>
    <text-field label="Enter address" v-model="staff.address"></text-field>
    <button
      class="text-2xl text-white border-2 border-focusColor rounded-xl p-2 hover:bg-focusColor"
      type="submit"
      @click="addStaff"
    >
      Create staff
    </button>
  </form>
</template>
<script>
import textField from "@/shared/ui/text-field/text-field.vue";
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
      const store = this.$store;
      const staff = {
        id: Date.now(),
        name: this.staff.name,
        surname: this.staff.surname,
        age: this.staff.age,
        experience: this.staff.experience,
        address: this.staff.address,
      };

      store.commit("setStaff", staff);
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
