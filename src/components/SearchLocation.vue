<template>
  <div class="location">
    <br />{{ state }}
    <br />
    <br />
    <label for="location">Location: </label>
    <select v-model="stateSelected">
      <option value="" disabled selected>Select State</option>
      <option
        v-for="state in statesList"
        v-bind:key="state"
        v-bind:value="state"
      >
        {{ state }}
      </option>
    </select>

    <!-- <select v-model="city" id="cities">
      <option value="" disabled selected>Select City</option>
      <option v-for="city in citiesList" v-bind:key="city">
        {{ city }}
      </option>
    </select>

    <select v-model="highway" id="highways">
      <option value="" disabled selected>Select Highway</option>
      <option v-for="highway in highwaysList" v-bind:key="highway">
        {{ highway }}
      </option>
    </select> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "SearchLocation",
  data() {
    return {
      stateSelected: "",
    };
  },
  computed: {
    ...mapGetters([
      "statesList",
      "citiesList",
      "highwaysList",
      "state",
      // "city",
      // "highway",
    ]),
    // watch: {
    //   stateSelected: function(val, oldVal) {
    //     this.$store.dispatch();
    //   },
    // }
    // searchState: {
    //   get() {
    //     return this.$store.state.search.state;
    //   },
    //   set(value) {
    //     this.$store.commit("updateState", value);
    //   },
    // },
  },
  methods: {
    ...mapActions(["updateState"]),
  },
};
</script>
