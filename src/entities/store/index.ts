import { createStore } from "vuex";
import { staffModule } from "./staffModule";

export default createStore({
  modules: {
    staff: staffModule,
  },
});
