exports.up = function(knex) {
  return knex.schema.alterTable("restaurants", function(table) {
    table.string("icon", 255).alter({ alterType: true });
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable("restaurants", function(table) {
    table.string("icon", 64).alter({ alterType: true });
  });
};
