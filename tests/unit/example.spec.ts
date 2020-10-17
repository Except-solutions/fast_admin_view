import { shallowMount } from "@vue/test-utils";
import Dashboard from "@/components/Dashboard.vue";

describe("Dashboard.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = shallowMount(Dashboard);

    expect(wrapper.text()).toMatch("Dashboard!");
  });
});
