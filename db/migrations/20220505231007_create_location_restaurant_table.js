exports.up = async function(knex) {
  return await knex.schema.createTable("location_restaurant", (table) => {
    table.increments().index();
    table
      .integer("restaurant_id")
      .unsigned()
      .notNullable()
      .references("restaurants.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("location_id")
      .unsigned()
      .notNullable()
      .references("locations.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("location_restaurant");
};
