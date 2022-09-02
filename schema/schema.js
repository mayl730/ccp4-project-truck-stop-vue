/* eslint-disable */
const { gql } = require("apollo-server");
const typeDefs = gql`
  type Location {
    id: Int
    latitude: Float
    longitude: Float
    name: String
    state: String
    city: String
    highway: String
    exitNumber: String
    address1: String
    zip: String
    main_phone: String
  }

  type Restaurant {
    # id: Int
    # # name: String
    # # concept_icon: String
    city: String
    state: String
    highway: String
    restaurant_id: Int
    restaurant_name: String
  }

  type LocationRestaurant {
    Id: Int
    RestaurantId: Int
    LocationId: Int
  }

  type City {
    city: String
  }
  type State {
    state: String
  }
  type Highway {
    highway: String
  }
  input filterConditions {
    state: String
    city: String
    highway: String
    restaurant: [String]
  }
  input cityOrState {
    city: String
    state: String
  }

  input restaurantConditions {
    state: String
    city: String
    highway: String
  }

  type Query {
    FilteredLocations(conditions: filterConditions): [Location]
    FilterByState(state: String): [Location]
    FilterByCity(city: String): [Location]
    FilterByHighway(highway: String): [Location]
    FilterByRestaurant(name: String): [Location]
    FilterByZip(zip:String): [Location]
    FilterByAddress(address1:String): [Location]
    Cities(state: String): [City]
    States: [State]
    Highways(cityOrState: cityOrState): [Highway]
    # Restaurants: [Restaurant]
    Restaurants(conditions: restaurantConditions): [Restaurant]
  }
`;
module.exports = typeDefs;
