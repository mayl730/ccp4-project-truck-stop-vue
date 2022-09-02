/* eslint-disable */
const chai = require("chai");
const expect = chai.expect;
const resolvers = require("../resolvers");

describe("communicate with resolvers file", () => {
  it("Able to listen to resolvers file", () => {
    expect(typeof resolvers).to.equal("object");
  });
  describe("Query locations", () => {
    it("Should retrieve locations by restaurant", async () => {
      const filteredLocations = await resolvers.Query.FilterByRestaurant("Arby's");
      expect(filteredLocations.length).to.equal(57);
    });
  });
  it("Should filter by state", async () => {
    const filteredLocations = await resolvers.Query.FilterByState("AR");
    for (let obj of filteredLocations) {
      expect(obj.state).to.equal("AR");
    };
  });
  it("Should filter by city", async () => {
    const filteredLocations = await resolvers.Query.FilterByCity("Chandler ");
    for (let obj of filteredLocations) {
      expect(obj.city).to.equal("Chandler ");
    };
  });
  it("Should filter by highway", async () => {
    const filteredLocations = await resolvers.Query.FilterByHighway("I-40");
    for (let obj of filteredLocations) {
      expect(obj.highway).to.equal("I-40");
    };
  });
  it("Should filter by address", async () => {
    const filteredLocations = await resolvers.Query.FilterByAddress("1010 N. Main");
    expect(filteredLocations).to.deep.equal({
      id: 275,
      latitude: 34.98649,
      longitude: -90.905235,
      name: 'Palestine',
      state: 'AR',
      city: 'Palestine',
      highway: 'I-40',
      exit_number: '233',
      address1: '1010 N. Main',
      zip: '72372',
      main_phone: '(870) 581-5004'
    });
  });
  it("Should filter by zip", async () => {
    const filteredLocations = await resolvers.Query.FilterByZip("92236");
    expect(filteredLocations).to.deep.equal({
      id: 207,
      latitude: 33.71742,
      longitude: -116.171265,
      name: 'Coachella - 207',
      state: 'CA',
      city: 'Coachella',
      highway: 'I-10',
      exit_number: '146',
      address1: '45-761 Dillon Rd.',
      zip: '92236',
      main_phone: '(760) 775-3401'
    });
  });
});
