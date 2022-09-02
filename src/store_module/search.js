const {
  statesList,
  citiesList,
  highwaysList,
} = require("../data_dummy/location");

const state = {
  test: "Test Message From store_module - search.js",
  statesList: statesList,
  citiesList: citiesList,
  highwaysList: highwaysList,
  state: "",
  city: "",
  highway: "",
  resturant: "",
  request: {},
};

const getters = {
  state: (state) => state.state,
  city: (state) => state.city,
  highway: (state) => state.highway,
  statesList: (state) => state.statesList,
  citiesList: (state) => state.citiesList,
  highwaysList: (state) => state.highwaysList,
  request: (state) => state.request,
};

const mutations = {
  setState: (state, data) => {
    state.state = data;
  },
  setCity: (state, data) => {
    state.city = data;
  },
  setHighway: (state, data) => {
    state.highway = data;
  },
  setResturant: (state, data) => {
    state.resturant = data;
  },
  setRequest: (state, data) => {
    state.request = data;
  },
};

const actions = {
  updateState: (event, { commit }) => {
    commit("setState", event.target.value);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
