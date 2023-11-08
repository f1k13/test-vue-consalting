<template lang="">
  <div class="flex flex-col justify-center items-center w-full">
    <form-created @create="createStaff" />
    <staff-list :staffPeoples="staffPeoples" />
  </div>
</template>
<script>
import formCreated from "@/widgets/form-created/ui/form-created.vue";
import staffList from "@/widgets/staff-list/ui/staff-list.vue";
export default {
  components: {
    formCreated,
    staffList,
  },
  data() {
    return {
      staffPeoples: [{}],
    };
  },
  methods: {
    createStaff(staff) {
      this.staffPeoples.push(staff);
      console.log(staff);
    },
  },
};
</script>
<style lang=""></style>
