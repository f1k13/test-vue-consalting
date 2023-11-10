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
      <div
        class="flex justify-center gap-5 items-center flex-col w-full h-[300px]"
      >
        <h2 class="text-xl font-bold text-white">Edit Cell</h2>
        <form class="flex flex-col">
          <text-field v-model="newValue" />
          <button
            class="text-2xl py-1 outline-none mt-5 text-white bg-focusColor rounded-xl hover:bg-transparent border-2 border-focusColor"
            @click="saveCell"
          >
            Save
          </button>
        </form>
      </div>
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
    // Тут я регестирую компоненты который будет использованы в этом компоненте
  },
  props: {
    staff: {
      type: Object,
      required: true,
    },
    // Принимаю пропс staff из компонента staff-list, делаю его обязательным и типом объект
  },
  data() {
    return {
      modalVisible: false,
      newValue: "",
      id: 0,
      field: "",
    };
    // Обьявляю данные который будут использованы в этом компоненте, modalVisile - для открытия модального окна, который позволяет изменить ячейку, newValue - новое значение ячейки, id - id ячейки, field - поле ячейки,
  },
  methods: {
    ...mapMutations(["editField"]),
    // Я достаю из стора при помощи спред оператора функцию editField,
    editCell(id, field) {
      // Функция для изменения ячейки, при клике на icon в ячейке, вызывается она и в id и field записываются данные конкретной ячейки по которой кликнули, и делаю видимым модальное окно
      this.modalVisible = true;
      this.id = id;
      this.field = field;
    },
    saveCell() {
      // Функция для сохранения ячейки, делает модальное окно видимым и отправляет данные о сотруднике в store, чтобы поменять значение ячейки
      this.modalVisible = false;
      this.editField({
        id: this.id,
        field: this.field,
        newValue: this.newValue,
      });
      this.newValue = "";
    },
  },
};
</script>
<style></style>
