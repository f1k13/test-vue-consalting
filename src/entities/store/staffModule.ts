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
      state.staffPeoples.push(staff);
      localStorage.setItem("staff", JSON.stringify(state.staffPeoples));
    },
    setField: (
      state: any,
      payload: { id: number; field: string; newValue: string }
    ) => {
      const findStaff = state.staffPeoples.find(
        (item: staff) => item.id === payload.id
      );

      findStaff[payload.field] = payload.newValue;
      localStorage.setItem("staff", JSON.stringify(state.staffPeoples));
    },
  },
  actions: {},
};
