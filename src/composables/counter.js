import { ref, onMounted } from "vue";

export function counter() {
  const count = ref(0);

  const increment = (val) => {
    count.value++;
  };

  const decrement = () => {
    if (count.value > 0) {
      count.value--;
    }
  };

  const reset = () => {
    while (count.value > 0) {
      count.value--;
    }
  };

  const setValue = (value) => {
    count.value = value;
  };

  return { count, increment, decrement, reset, setValue };
}
