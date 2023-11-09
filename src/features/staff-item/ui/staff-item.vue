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
          {{ staff.name || newValue }}
          <div>
            <edit-icon />
          </div>
        </div>
      </td>
      <td
        class="table-cell w-[50px] p-5 border-2 text-textSecondary border-bgInput break-all"
      >
        <div class="flex w-full items-center justify-between">
          {{ staff.surname || newValue }}
          <div>
            <edit-icon />
          </div>
        </div>
      </td>
      <td
        class="table-cell w-[50px] p-5 border-2 text-textSecondary border-bgInput break-all"
      >
        <div class="flex w-full items-center justify-between">
          {{ staff.age || newValue }}
          <div>
            <edit-icon />
          </div>
        </div>
      </td>
      <td
        class="table-cell w-[50px] p-5 border-2 text-textSecondary border-bgInput break-all"
      >
        <div class="flex w-full items-center justify-between">
          {{ staff.experience || newValue }}
          <div>
            <edit-icon />
          </div>
        </div>
      </td>
      <td
        class="table-cell w-[50px] p-5 border-2 text-textSecondary border-bgInput break-all"
      >
        <div class="flex w-full items-center justify-between">
          {{ staff.address }}
          <div>
            <edit-icon @click="editCell(staff)" />
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
export default {
  data() {
    return {
      modalVisible: false,
      newValue: "",
      text: "",
    };
  },
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
  methods: {
    editCell(staff) {
      this.modalVisible = true;
      this.text = staff[Object.keys(staff)[0]];
    },
    saveCell(staff) {
      staff[Object.keys(staff)[0]] = this.newValue;
      this.modalVisible = false;
    },
  },
};
</script>
<style lang="css"></style>
