exports.seed = async function(knex) {
  const fs = require("fs");
  // Deletes ALL existing entries
  await knex("locations").del();

  // Inserts seed entries
  const locations = JSON.parse(fs.readFileSync("./data/locations.json"));
  for (const location of locations) {
    const id = location.Site.SiteId;
    const latitude = location.Site.Latitude;
    const longitude = location.Site.Longitude;
    const name = location.Site.SitePreferredName;
    const state = location.Addresses[0].State;
    const city = location.Addresses[0].City;
    const highway = location.Site.Highway;
    const exit_number = location.Site.ExitNumber;
    const address1 = location.Addresses[0].Address1;
    const zip = location.Addresses[0].Zip;
    const mainPhoneEl = location.ContactMethods.find(
      (el) => el.ContactMethodTypeId === 1
    );
    const main_phone = mainPhoneEl.Data;
    await knex("locations").insert({
      id,
      latitude,
      longitude,
      name,
      state,
      city,
      highway,
      exit_number,
      address1,
      zip,
      main_phone,
    });
  }
};
