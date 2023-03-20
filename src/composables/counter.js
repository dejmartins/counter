import { ref } from "vue";

export function counter() {
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
    var input = document.getElementsByTagName("input");

    if (input[0].value === "") {
      input = 0;
    } else {
      input = Number(input[0].value);
    }

    if (input < count.value) {
      var refresh = setInterval(() => {
        decrement();
        if (count.value == input) {
          clearInterval(refresh);
        }
      }, 30);
    } else if (input > count.value) {
      var refresh = setInterval(() => {
        increment();
        if (count.value == input) {
          clearInterval(refresh);
        }
      }, 30);
    }
  };

  const setValue = (value) => {
    count.value = value;
  };

  return { count, increment, decrement, reset, setValue };
}
