import { ref, readonly } from "vue";

const Counter = () => {
  const count = ref(0);

  const increment = () => {
    count.value++;
  };

  const decrement = () => {
    if (count.value > 0) {
      count.value--;
    }
  };

  const reset = () => {
    count.value = 0;
  };

  const setValue = (value) => {
    count.value = value;
  };

  return { count: readonly(count), increment, decrement, reset, setValue };
};

export default Counter;
