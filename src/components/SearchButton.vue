<template>
  <div class="button">
    <button type="button" v-on:click="printValue(state)">Click Me!</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SearchButton",
  computed: mapGetters(["state", "city", "highway"]),
  methods: {
    //   ...mapActions(["updateState, printValue"]),
    printValue: (something) => {
      console.log(something);
    },
  },
};
</script>
