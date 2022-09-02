<template>
  <div>
    {{ Locations }}
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "PostRestaurantInfo",
  computed: mapState({
    locations: (state) => state.locations,
  }),
};
</script>
