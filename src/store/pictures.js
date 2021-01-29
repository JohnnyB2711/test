import Vue from "vue";
import axios from "axios";
import { storage, delay, has } from "../utils";
import { defaultState } from "../constants/defaultState";

const initialState = storage("pictures") ? storage("pictures") : defaultState;

export const pictures = {
  namespaced: true,
  state: {
    data: initialState,
    loadings: {},
    errors: "",
  },
  getters: {
    pictures: (state) => state.data,
    isLoading: (state) => (id) => {
      return has(state.loadings, id);
    },
  },
  mutations: {
    SET_ERROR: (state, error) => {
      state.errors = error;
    },
    SET_LOADING: (state, pictureId) => {
      const date = new Date();
      Vue.set(state.loadings, pictureId, date);
    },
    UNSET_LOADING: (state, pictureId) => {
      Vue.delete(state.loadings, pictureId);
    },
    CHANGE_PICTURES: (state, pictureId) => {
      const index = state.data.findIndex((picture) => picture.id === pictureId);
      state.data.splice(index, 1, {
        ...state.data[index],
        inBasket: true,
      });
    },
  },
  actions: {
    TO_BASKET: async ({ commit }, pictureId) => {
      commit("SET_LOADING", pictureId);
      try {
        await axios({
          url: "https://jsonplaceholder.typicode.com/posts/1",
          method: "GET",
        });
        delay(2000).then(() => {
          commit("CHANGE_PICTURES", pictureId);
          commit("UNSET_LOADING", pictureId);
        });
      } catch (error) {
        commit("SET_ERROR", error);
        commit("SET_LOADING", pictureId);
      }
    },
  },
};
