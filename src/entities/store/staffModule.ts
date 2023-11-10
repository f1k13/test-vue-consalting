// Типизирую state
type staff = {
  id: number;
  name: string;
  surname: string;
  age: string;
  address: string;
  experience: string;
};

export const staffModule = {
  state: () => ({
    // Инициализация state
    // staffPeoples - массив сотрудников которй хранится в localStorage
    staffPeoples: JSON.parse(localStorage.getItem("staff") || "[]"),
    staff: {
      name: "",
      surname: "",
      age: "",
      experience: "",
      address: "",
    },
  }),
  getters: {},
  mutations: {
    setStaff(state: any, staff: staff) {
      // Функция для добавление сотрудника в массив, тут я принимаю state что является самим массивом, и объект сотрудника который добавляю в массив
      if (
        staff.name &&
        staff.surname &&
        staff.age &&
        staff.experience &&
        staff.address
        // Проверяю что поля не пустые
      ) {
        state.staffPeoples.push(staff);
        // Добавляю сотрудника в массив
        localStorage.setItem("staff", JSON.stringify(state.staffPeoples));
        // Сохраняю изменения
      }
    },

    editField: (
      // Функция для изменения ячейки в ней я принимаю state, и payload со следующями полями id - для идентификации сотрудника, field - для идентификации ячейки в ней, newValue - новое значение ячейки
      state: any,
      payload: { id: number; field: string; newValue: string }
    ) => {
      // При помощи фукнции findStaff нахожу сотрудника по id
      const findStaff = state.staffPeoples.find(
        (item: staff) => item.id === payload.id
      );
      // Изменяю значение ячейки в ней
      findStaff[payload.field] = payload.newValue;
      // Сохраняю изменения
      localStorage.setItem("staff", JSON.stringify(state.staffPeoples));
    },
  },
  actions: {},
};
