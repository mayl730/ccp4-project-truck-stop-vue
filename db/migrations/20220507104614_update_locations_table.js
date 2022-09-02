exports.up = function(knex) {
  return knex.schema.alterTable("locations", function(table) {
    table.string("address1", 64);
    table.string("address2", 64);
    table.string("zip");
    table.string("main_phone");
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable("locations", function(table) {
    table.dropColumn("address1");
    table.dropColumn("address2");
    table.dropColumn("zip");
    table.dropColumn("main_phone");
  });
};
