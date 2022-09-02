exports.up = async function(knex) {
  return await knex.schema.createTable("locations", (table) => {
    table.increments().index();
    table.float("latitude");
    table.float("longitude");
    table.string("name", 32).notNullable();
    table.string("state", 32);
    table.string("city", 32);
    table.string("highway", 32);
    table.string("exit_number", 32);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("locations");
};
