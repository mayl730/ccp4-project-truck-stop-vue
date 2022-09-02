exports.up = function(knex) {
  return knex.schema.alterTable("locations", function(table) {
    table.dropColumn("address2");
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable("locations", function(table) {
    table.string("address2", 64);
  });
};
