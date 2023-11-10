<template>
  <div class="mt-5 w-[60%] flex flex-col justify-center items-center p-5">
    <h3 class="text-2xl font-bold text-white text-center mb-10">Staff table</h3>
    <table class="w-[100%]">
      <staff-item
        v-for="staff in staffPeoples"
        :staff="staff"
        :key="staff.id"
        @update="setStaffPeoples"
      />
    </table>
  </div>
</template>
<script>
import staffItem from "@/features/staff-item/ui/staff-item.vue";
import { mapMutations, mapState } from "vuex";
export default {
  components: {
    staffItem,
  },
  // Компонент для отрисовки таблицы, получает данные из store и передает их в компонент staff-item
  computed: {
    ...mapState({
      staffPeoples: state => state.staff.staffPeoples,
    }),
  },
};
</script>
<style></style>
