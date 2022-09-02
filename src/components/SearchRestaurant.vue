<template>
  <div class="restaurant">
    <label for="Restaurant">Restaurant: </label>
    <select name="shop" id="shop">
      <option value="" disabled selected>Choose restaurant</option>
      <option v-for="shop in shops" :key="shop" :value="state">{{
        shop
      }}</option>
    </select>
    <button type="button" @click="search">Search</button>
  </div>
</template>

<script>
export default {
  name: "SearchRestaurant",
  data() {
    return {
      shops: [
        "McDonald's 🍟",
        "Arby's 🥪",
        "Subway 🥖",
        "Chester's 🥗",
        "Godfather's Pizza 🍕",
        "IHOP Express 🥞",
        "Hardee's 🍔",
        "FlyingK Subs Burritos 🌯",
        "Baskin Robbins 🎂",
        "Taco Bell 🌮",
        "Carl's Jr. 🍔",
        "FlyingK Subs 🥖",
        "Denny's 🌭",
        "Del Taco 🌮",
        "Wendy's 🍔",
        "Dairy Queen 🍦",
        "Sonic 🥤",
      ],
    };
  },
  methods: {
    search: () => {
      alert("See restaurant location below");
    },
  },
};
</script>

<style></style>
