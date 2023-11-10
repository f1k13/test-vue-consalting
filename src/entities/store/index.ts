import { createStore } from "vuex";
import { staffModule } from "./staffModule";

export default createStore({

  // Экспорт модуля во всём приложении
  modules: {
    staff: staffModule,
  },
});
