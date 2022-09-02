import { shallowMount } from "@vue/test-utils";
import { expect } from "chai";
import App from "@/App.vue";

describe("App vue", () => {
  const wrapper = shallowMount(App);
  it("Should render", () => {
    expect(wrapper.exists()).to.equal(true);
  });
  it("Should display information in h3", () => {
    expect(wrapper.find("h3").text()).to.be.equal(
      "The following is the data retrieved from DB"
    );
  });
});
