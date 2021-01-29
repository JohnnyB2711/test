import Vue from "vue";
import Vuex from "vuex";

import { pictures } from "./pictures";

Vue.use(Vuex);

const modules = {
  pictures,
};
const store = new Vuex.Store({
  modules,
});

store.subscribe((mutation, state) => {
  localStorage.setItem("pictures", JSON.stringify(state.pictures.data));
});
export default store;
