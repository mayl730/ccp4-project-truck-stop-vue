<template>
  <div id="app">
    <h1>FlyingK Truck Stops</h1>
    <Map />
    <SearchCriteria />
    <SearchResult v-if="currentView === 'searchResult'" />
    <div></div>
  </div>
</template>

<script>
import Map from "./components/Map";
import SearchCriteria from "./components/SearchCriteria";
import SearchResult from "./components/SearchResult";
import { mapGetters } from "vuex";
import store from "./store";

export default {
  name: "app",
  store: store,
  components: {
    Map,
    SearchCriteria,
    SearchResult,
  },

  computed: {
    ...mapGetters(["currentView"]),
  },

  methods: {
    selectState: function(e) {
      this.currRestaurant = [];
      this.currState = e.target.value;
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  display: block;
  max-width: 600px;
}
.result {
  background: #2c3e50;
  color: #fff;
  padding: 10px;
  margin: 20px 0px;
}
h5 {
  margin-bottom: -10px;
}
#search-criteria {
  background: rgb(173, 173, 203);
  padding: 20px;
}

select {
  padding: 4px 8px;
  margin: 3px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;
  user-select: none;
  font-size: 12px;
  background-color: rgb(208, 232, 255);
}

button {
  background-color: #007fba; /* Green */
  border: none;
  color: white;
  margin-top: 10px;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

#restaurants-continer {
  display: flex;
  width: 80%;
  margin: 0 auto;
  flex-wrap: wrap;
}
#restaurant {
  display: flex;
  flex-direction: row;
  margin: 0 0.5rem;
  align-self: stretch;
  width: 40%;
}
</style>
