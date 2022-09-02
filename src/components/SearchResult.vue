<template>
  <div id="search-result">
    <h3>Search Result:</h3>
    <div class="result" v-for="location in locations" v-bind:key="location.id">
      <h2>Store #{{ location.position.id }}</h2>
      <h5>Address:</h5>
      <p>
        {{ location.position.city }} {{ location.position.highway }}
        {{ location.position.address1 }} {{ location.position.zip }}
        {{ location.position.state }}
      </p>
      <h5>Tel:</h5>
      <p>{{ location.position.mainPhone }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SearchResult",
  computed: mapGetters(["locations"]),
};
</script>
