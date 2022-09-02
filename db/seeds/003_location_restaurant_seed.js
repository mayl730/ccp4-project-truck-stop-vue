exports.seed = async function(knex) {
  const fs = require("fs");
  // Deletes ALL existing entries
  await knex("location_restaurant").del();

  // Inserts seed entries
  const locations = JSON.parse(fs.readFileSync("./data/locations.json"));

  for (const location of locations) {
    const location_id = location.Site.SiteId;
    const state = location.Addresses[0].State;
    const city = location.Addresses[0].City;
    const highway = location.Site.Highway;
    for (const el of location.Site.Concepts) {
      const restaurant_id = el.Concept.Id;
      const restaurant_name = el.Concept.Name;
      await knex("location_restaurant").insert({
        location_id,
        restaurant_id,
        state,
        city,
        highway,
        restaurant_name,
      });
    }
  }
};
