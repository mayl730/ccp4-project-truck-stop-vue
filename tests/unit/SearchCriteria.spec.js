import { shallowMount, createLocalVue } from "@vue/test-utils";
import { expect } from "chai";
import SearchCriteria from "@/components/SearchCriteria.vue";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);
const store = new Vuex.Store({});
const wrapper = shallowMount(SearchCriteria, {
  localVue,
  store,
});

describe("searchCriteria", async () => {
  it("Should currState as nothing by default", async () => {
    expect(wrapper.vm.currState).to.equal("");
  });
  it("Should update currState when prompted", async () => {
    console.log(await wrapper.vm.selectState);
    await wrapper.vm.selectState("KY");
    expect(wrapper.vm.selectState).to.equal("KY");
  });
});
