import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      count: 0,
      message: "hello, world",
    };
  },
  getters: {
    double(state) {
      return state.count * 2;
    },
  },
  mutations: {
    plusOne(state) {
      state.count++;
    },
  },
  actions: {
    sayHi({ commit }) {
      setTimeout(() => {
        commit("plusOne");
      }, 1000);
    },
  },
});
