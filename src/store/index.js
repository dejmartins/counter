import { createStore } from "vuex";
import { counter } from "../composables/counter";

const { count, increment, decrement, reset } = counter();
const store = createStore({
  state: {
    count: count,
  },

  mutations: {
    increment: () => increment(),
    decrement: () => decrement(),
    reset: () => reset(),
  },

  actions: {
    increment({ commit }) {
      commit("increment");
    },

    decrement({ commit }) {
      commit("decrement");
    },

    reset({ commit }) {
      commit("reset");
    },
  },

  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
});

export default store;
