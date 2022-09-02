<template>
  <div id="search-criteria">
    <select
      name="states"
      id="states"
      v-on:change="selectState"
      v-model="currState"
    >
      <option value="" disabled>Choose a State</option>
      <option
        vi-bind:value="el.state"
        v-for="el in States"
        v-bind:key="el.state"
        >{{ el.state }}</option
      >
    </select>

    <select
      name="cities"
      id="cities"
      v-on:change="selectCity"
      v-model="currCity"
    >
      <option value="" disabled>Choose a City</option>
      <option
        v-bind:value="el.city"
        v-for="el in Cities"
        v-bind:key="el.city"
        >{{ el.city }}</option
      >
    </select>

    <select
      name="highways"
      id="highways"
      v-on:change="selectHighway"
      v-model="currHighway"
    >
      <option value="" disabled>Choose a Highway</option>
      <option
        v-bind:value="el.highway"
        v-for="el in Highways"
        v-bind:key="el.highway"
        >{{ el.highway }}</option
      >
    </select>

    <select
      name="restaurants"
      id="restaurants"
      v-on:change="selectRestaurant"
      v-model="selectedRestaurant"
    >
      <option value="" disabled>Choose a Restaurant</option>
      <option
        v-bind:value="el.restaurant_name"
        v-for="el in Restaurants"
        v-bind:key="el.restaurant_name"
        >{{ el.restaurant_name }}</option
      >
    </select>

    <div id="restaurants-continer">
      <div
        v-for="(el, index) in Restaurants"
        v-bind:key="el.id"
        id="restaurant"
      >
        <input
          type="checkbox"
          v-bind:id="el.restaurant_name"
          v-on:change="selectRestaurantWithCheckBox"
          v-bind:checked="currRestaurant.includes(el.restaurant_name)"
          v-model="selectItems[index]"
        />
        <label v-bind:for="el.restaurant_name">{{ el.restaurant_name }}</label>
      </div>
    </div>

    <div class="button">
      <button
        type="button"
        v-on:click="
          addMarkers(FilteredLocations);
          setView('searchResult');
        "
      >
        Search
      </button>
    </div>
    <br />
    <a
      href="#"
      @click="
        resetSelection();
        setView('searchCriteria');
      "
      >Clear Selections</a
    >

    <div v-for="location in FilteredLocations" v-bind:key="location.id">
      <!-- {{Restaurants}} -->
      <!-- {{ location }} -->
      <!-- {{ location.latitude }}
      {{ location.longitude }}
      {{ location.state }}
      {{ location.city }}
      {{ location.highway }} -->
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import gql from "graphql-tag";

const getStates = gql`
  query {
    States {
      state
    }
  }
`;

const getCities = gql`
  query Cities($state: String) {
    Cities(state: $state) {
      city
    }
  }
`;

const getHighways = gql`
  query Highways($cityOrState: cityOrState) {
    Highways(cityOrState: $cityOrState) {
      highway
    }
  }
`;

const getRestaurants = gql`
  query Restaurants($conditions: restaurantConditions) {
    Restaurants(conditions: $conditions) {
      restaurant_name
    }
  }
`;

const getLocations = gql`
  query FilteredLocations($conditions: filterConditions) {
    FilteredLocations(conditions: $conditions) {
      id
      latitude
      longitude
      name
      state
      city
      highway
      exitNumber
      address1
      zip
      main_phone
    }
  }
`;

export default {
  name: "SearchCriteria",
  data() {
    return {
      currState: "",
      currCity: "",
      currHighway: "",
      // currRestaurant: "",
      selectedRestaurant: "",
      currRestaurant: [],
      States: [],
      Cities: [],
      FilterByState: [],
      FilteredLocations: [],
      Highways: [],
      Restaurants: [],
      selectItems: [],
    };
  },
  methods: {
    selectState: function(e) {
      this.currState = e.target.value;
    },
    selectCity: function(e) {
      this.currCity = e.target.value;
    },
    selectHighway: function(e) {
      this.currHighway = e.target.value;
    },
    // selectRestaurant: function(e) {
    //   this.currRestaurant = e.target.value;
    // },
    selectRestaurant: function(e) {
      this.currRestaurant = [e.target.value];
      this.selectedRestaurant = e.target.value;
    },
    selectRestaurantWithCheckBox: function(e) {
      if (e.target.checked) {
        this.currRestaurant = [...this.currRestaurant, e.target.id];
        this.selectedRestaurant = e.target.id;
      } else {
        this.currRestaurant = this.currRestaurant.filter(
          (el) => el !== e.target.id
        );
      }
    },
    resetSelection: function() {
      this.currState = "";
      this.currCity = "";
      this.currHighway = "";
      this.currRestaurant = [];
      this.selectItems = [];
      setTimeout(() => {
        this.addMarkers(this.FilteredLocations);
      }, 1);
    },
    ...mapActions(["addMarkers", "setView"]),
  },
  apollo: {
    States: getStates,
    Cities: {
      query: getCities,
      variables() {
        return { state: this.currState };
      },
    },
    FilteredLocations: {
      query: getLocations,
      variables() {
        return {
          conditions: {
            state: this.currState,
            city: this.currCity,
            highway: this.currHighway,
            restaurant: this.currRestaurant,
          },
        };
      },
    },
    Highways: {
      query: getHighways,
      variables() {
        return {
          cityOrState: { city: this.currCity, state: this.currState },
        };
      },
    },
    // Restaurants: getRestaurants,
    Restaurants: {
      query: getRestaurants,
      variables() {
        return {
          conditions: {
            state: this.currState,
            city: this.currCity,
            highway: this.currHighway,
          },
        };
      },
    },
  },
  created() {
    this.addMarkers(this.FilteredLocations);
  },
};
</script>
