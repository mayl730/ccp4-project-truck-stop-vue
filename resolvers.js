/* eslint-disable */
const db = require("./server/knex");
const filterQuery = function(queryBuilder, args) {
  if (args.conditions.highway !== "") {
    return queryBuilder.where({
      highway: args.conditions.highway,
    });
  }
  if (args.conditions.city !== "") {
    queryBuilder.where({ city: args.conditions.city });
  }
  if (args.conditions.state !== "") {
    return queryBuilder.where({ state: args.conditions.state });
  }
};

module.exports = {
  Query: {
    FilteredLocations: async (parent, args) => {
      console.log(args);
      if (args && args.conditions.restaurant.length !== 0) {
        console.log(args.conditions.restaurant);
        const restaurantIds = await db("restaurants")
          .select("id")
          .whereIn("name", args.conditions.restaurant);

        const locationIds = await db("location_restaurant")
          .select("location_id")
          .whereIn(
            "restaurant_id",
            restaurantIds.map((el) => el.id)
          );

        return await db
          .select("*")
          .from("locations")
          .whereIn(
            "id",
            locationIds.map((el) => el.location_id)
          )
          .modify(function(queryBuilder) {
            if (args) {
              if (args.conditions.highway) {
                return queryBuilder.where({
                  highway: args.conditions.highway,
                });
              }
              if (args.conditions.city) {
                queryBuilder.where({ city: args.conditions.city });
              }
              if (args.conditions.state) {
                return queryBuilder.where({ state: args.conditions.state });
              }
            }
          });
      }

      return await db
        .select("*")
        .modify(function(queryBuilder) {
          if (args) {
            if (args.conditions.highway) {
              return queryBuilder.where({
                highway: args.conditions.highway,
              });
            }
            if (args.conditions.city) {
              queryBuilder.where({ city: args.conditions.city });
            }
            if (args.conditions.state) {
              console.log("state is defined");
              return queryBuilder.where({ state: args.conditions.state });
            }
          }
        })
        .from("locations");
    },

    States: async (parent, args) => {
      return await db
        .distinct("state")
        .from("locations")
        .orderBy("state");
    },

    Cities: async (parent, args) => {
      return await db
        .distinct("city")
        .from(
          db
            .select("city")
            .as("city")
            .where({ state: args.state })
            .from("locations")
        )
        .orderBy("city");
    },
    Highways: async (parent, args) => {
      return await db
        .distinct("highway")
        .from(
          db
            .select("highway")
            .as("highway")
            .where({ city: args.cityOrState.city })
            .orWhere({ state: args.cityOrState.state })
            .from("locations")
        )
        .orderBy("highway");
    },

    Restaurants: async (parent, args) => {
      return await db
        .select("city", "state", "highway", "restaurant_name")
        .distinctOn("restaurant_name")
        .from("location_restaurant")
        .modify(function(queryBuilder) {
          if (args) {
            if (args.conditions.highway) {
              return queryBuilder.where({
                highway: args.conditions.highway,
              });
            }
            if (args.conditions.city) {
              queryBuilder.where({ city: args.conditions.city });
            }
            if (args.conditions.state) {
              return queryBuilder.where({ state: args.conditions.state });
            }
          }
        });
    },
  },
};
