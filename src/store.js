import Vue from "vue";
import Vuex from "vuex";
import searchModule from "./store_module/search";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    search: searchModule,
  },
  state: {
    locations: [],
    currentView: "searchCriteria",
  },
  getters: {
    locations: (state) => state.locations,
    currentView: (state) => state.currentView,
  },
  mutations: {
    setLocations(state, locations) {
      state.locations = locations;
    },
    setView(state, view) {
      state.currentView = view;
    },
  },
  actions: {
    async addMarkers({ commit }, locations) {
      try {
        console.log(locations);
        const markers = await locations.map((location) => ({
          position: {
            id: location.id,
            lat: location.latitude,
            lng: location.longitude,
            name: location.name,
            state: location.state,
            city: location.city,
            highway: location.highway,
            exitNumber: location.exitNumber,
            address1: location.address1,
            zip: location.zip,
            mainPhone: location.main_phone,
          },
          // key: location.SiteName,
          defaultAnimation: 2,
        }));
        commit("setLocations", markers);
      } catch (err) {
        console.error(err);
      }
    },
    setView({ commit }, view) {
      commit("setView", view);
    },
  },
});
