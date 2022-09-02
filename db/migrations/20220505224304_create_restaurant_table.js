exports.up = async function(knex) {
  return await knex.schema.createTable("restaurants", (table) => {
    table.increments().index();
    table.string("name", 32).notNullable();
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("restaurants");
};
