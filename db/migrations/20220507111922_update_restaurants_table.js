exports.up = function(knex) {
  return knex.schema.alterTable("restaurants", function(table) {
    table.string("icon", 64);
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable("restaurants", function(table) {
    table.dropColumn("icon");
  });
};
