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
  }),
  getters: {},
  mutations: {
    setStaff(state: any, staff: staff) {
      state.staffPeoples.push(staff);
      localStorage.setItem("staff", JSON.stringify(state.staffPeoples));
    },
  },
  actions: {},
};
