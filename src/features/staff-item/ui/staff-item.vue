<template>
  <thead
    v-if="
      staff.name &&
      staff.surname &&
      staff.age &&
      staff.experience &&
      staff.address
    "
  >
    <modal v-model:isVisible="modalVisible">
      <h2>Edit Cell</h2>
      <text-field v-model="newValue" />
      <button @click="saveCell">Save</button>
    </modal>
    <tr class="w-full">
      <th
        class="table-cell w-[50px] p-5 border-2 font-bold text-white border-bgInput"
      >
        Name
      </th>
      <th
        class="table-cell w-[50px] p-5 border-2 font-bold text-white border-bgInput"
      >
        Surname
      </th>
      <th
        class="table-cell w-[50px] p-5 border-2 font-bold text-white border-bgInput"
      >
        Age
      </th>
      <th
        class="table-cell w-[50px] p-5 border-2 font-bold text-white border-bgInput"
      >
        Experience
      </th>
      <th
        class="table-cell w-[50px] p-5 border-2 font-bold text-white border-bgInput"
      >
        Address
      </th>
    </tr>
  </thead>
  <tbody
    v-if="
      staff.name &&
      staff.surname &&
      staff.age &&
      staff.experience &&
      staff.address
    "
  >
    <tr class="w-full">
      <td
        class="table-cell w-[70px] p-5 border-2 text-textSecondary border-bgInput break-all"
      >
        <div class="flex w-full items-center justify-between">
          {{ staff.name }}
          <div @click="editCell(staff.id, 'name')">
            <edit-icon />
          </div>
        </div>
      </td>
      <td
        class="table-cell w-[50px] p-5 border-2 text-textSecondary border-bgInput break-all"
      >
        <div class="flex w-full items-center justify-between">
          {{ staff.surname }}
          <div @click="editCell(staff.id, 'surname')">
            <edit-icon />
          </div>
        </div>
      </td>
      <td
        class="table-cell w-[50px] p-5 border-2 text-textSecondary border-bgInput break-all"
      >
        <div class="flex w-full items-center justify-between">
          {{ staff.age }}
          <div @click="editCell(staff.id, 'age')">
            <edit-icon />
          </div>
        </div>
      </td>
      <td
        class="table-cell w-[50px] p-5 border-2 text-textSecondary border-bgInput break-all"
      >
        <div class="flex w-full items-center justify-between">
          {{ staff.experience }}
          <div @click="editCell(staff.id, 'experience')">
            <edit-icon />
          </div>
        </div>
      </td>
      <td
        class="table-cell w-[50px] p-5 border-2 text-textSecondary border-bgInput break-all"
      >
        <div class="flex w-full items-center justify-between">
          {{ staff.address }}
          <div @click="editCell(staff.id, 'address')">
            <edit-icon />
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</template>
<script>
import editIcon from "@/shared/ui/icons/edit-icon.vue";
import modal from "@/shared/ui/modal/modal.vue";
import textField from "@/shared/ui/text-field/text-field.vue";
import { mapMutations, mapState } from "vuex";
export default {
  components: {
    editIcon,
    modal,
    textField,
  },
  props: {
    staff: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      modalVisible: false,
      newValue: "",
      id: 0,
      field: "",
    };
  },
  methods: {
    ...mapMutations(["setField"]),
    editCell(id, field) {
      this.modalVisible = true;
      this.id = id;
      this.field = field;
    },
    saveCell() {
      this.modalVisible = false;
      this.setField({ id: this.id, field: this.field, newValue: this.newValue });
    },
  },
};
</script>
<style lang="css"></style>
