exports.seed = async function(knex) {
  const fs = require("fs");
  // Deletes ALL existing entries
  await knex("restaurants").del();

  // Inserts seed entries
  const locations = JSON.parse(fs.readFileSync("./data/locations.json"));
  const uniqueIds = new Set();
  for (const location of locations) {
    for (const el of location.Site.Concepts) {
      if (!uniqueIds.has(el.Concept.Id)) {
        uniqueIds.add(el.Concept.Id);
        const id = el.Concept.Id;
        const name = el.Concept.Name;
        const icon = el.Concept.ConceptIcon;
        await knex("restaurants").insert({
          id,
          name,
          icon,
        });
      }
    }
  }
};
