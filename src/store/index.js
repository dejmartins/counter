import { createStore } from "vuex";
import { counter } from "../composables/counter";

// Vue.use(VueX);
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
  },

  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
});

export default store;
