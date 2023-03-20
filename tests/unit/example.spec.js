import { mount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import { createStore } from "vuex";

// describe("HelloWorld.vue", () => {
//   it("renders props.msg when passed", () => {
//     const msg = "new message";
//     const wrapper = shallowMount(HelloWorld, {
//       props: { msg },
//     });
//     expect(wrapper.text()).toMatch(msg);
//   });
// });
describe("hello", () => {
  it("1 + 1 = 2", () => {
    expect(1 + 1).toBe(2);
  });
});

describe("Home.vue", () => {
  it("Renders count: 0", () => {
    const wrapper = mount(Home);
    expect(wrapper.text()).toContain(0);
  });
});
