exports.up = function(knex) {
  return knex.schema.alterTable("location_restaurant", function(table) {
    table.string("state", 64);
    table.string("city", 64);
    table.string("highway", 64);
    table.string("restaurant_name", 64);
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable("location_restaurant", function(table) {
    table.dropColumn("state");
    table.dropColumn("city");
    table.dropColumn("highway");
    table.dropColumn("restaurant_name");
  });
};
