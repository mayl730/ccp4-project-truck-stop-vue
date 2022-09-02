// import dataJSON from "../../data/locations.json";
// const rawdata = JSON.parse(dataJSON);
// console.log(rawdata[0]);

const data = [
  {
    CustomFields: null,
    Acreage: 0,
    AreaRoadsideManagerId: "",
    DescriptiveAddress: "I-65, Exit 93",
    DistrictId: 17,
    EmployeeRelationsSpecialistId: "",
    EnvironmentalManagerId: "",
    ExitNumber: "93",
    Highway: "I-65",
    Latitude: 31.419105,
    Longitude: -87.00765,
    LossPreventionSpecialistId: "",
    OwnerLessorId: 2,
    RiskManagementRepresentativeId: "",
    SiteId: 225,
    SiteName: "Site 225",
    SiteNumber: 225,
    SitePreferredName: "Evergreen",
    SiteRef: "47b67119-8445-4b8a-95d2-d0ded442a05e",
    SiteStatusId: 1,
    SiteTypeId: 1,
    UTCOffset: -6,
  },
  {
    CustomFields: null,
    Acreage: 0,
    AreaRoadsideManagerId: "",
    DescriptiveAddress: "I-65, Exit 322",
    DistrictId: 14,
    EmployeeRelationsSpecialistId: "",
    EnvironmentalManagerId: "",
    ExitNumber: "322",
    Highway: "I-65",
    Latitude: 34.367333,
    Longitude: -86.89353,
    LossPreventionSpecialistId: "",
    OwnerLessorId: 2,
    RiskManagementRepresentativeId: "",
    SiteId: 381,
    SiteName: "Site 381",
    SiteNumber: 381,
    SitePreferredName: "Falkville",
    SiteRef: "d43907ef-4a4a-4aa6-bde7-7073a3f30a23",
    SiteStatusId: 1,
    SiteTypeId: 1,
    UTCOffset: -6,
  },
];

const dummyResponse = [
  {
    Locations: {
      //ID
      Latitude: 31.419105,
      Longitude: -87.00765,
      SitePreferredName: "Evergreen",
      State: "AL",
      City: "Clanton",
      Highway: "I-65",
      ExitNumber: "Exit 43",
      Address1: "300 Arby Dr.",
      Address2: "",
      Zip: "35045"
    },
    Restaurant: [
      //ID
      {
        Name: "Arby's",
        ConceptIcon: "/-/media/Images/Amenities/Location-search/ArbysLogo.ashx"
      },
      {
        Name: "McDonald's",
        ConceptIcon: "/-/media/Images/Amenities/Location-search/mcdonalds.ashx",
      }
    ]
    ,
    ContactMethods: [
      {
        Name: "Main Phone",
        Data: "(205) 295-1709"
      }
    ]
  },
  {
    Locations: {
      //ID
      Latitude: 33.278775,
      Longitude: -87.09893,
      SitePreferredName: "Woodstock",
      State: "AL",
      City: "Clanton",
      Highway: "I-65",
      ExitNumber: "Exit 43",
      Address1: "300 Arby Dr.",
      Address2: "",
      Zip: "35045"
    },
    Restaurant: {
      //ID
      Name: "Arby's",
      ConceptIcon: "/-/media/Images/Amenities/Location-search/ArbysLogo.ashx"
    },
    ContactMethods: [
      {
        Name: "Main Phone",
        Data: "(205) 295-1709"
      }
    ]
  },
];


const statesList = [ "AK", 
"AL", 
"AR", 
"AS", 
"AZ", 
"CA", 
"CO", 
"CT", 
"DC", 
"DE", 
"FL", 
"GA", 
"GU", 
"HI", 
"IA", 
"ID", 
"IL", 
"IN", 
"KS", 
"KY", 
"LA", 
"MA", 
"MD", 
"ME", 
"MI", 
"MN", 
"MO", 
"MS", 
"MT", 
"NC", 
"ND", 
"NE", 
"NH", 
"NJ", 
"NM", 
"NV", 
"NY", 
"OH", 
"OK", 
"OR", 
"PA", 
"PR", 
"RI", 
"SC", 
"SD", 
"TN", 
"TX", 
"UT", 
"VA", 
"VI", 
"VT", 
"WA", 
"WI", 
"WV", 
"WY"]

const citiesList = ["Abbeville", "Abbotsford", "Aberdeen", "test1", "test2", "test3"]

const highwaysList = ["I-20", "Hwy 72A", "I-65"]

module.exports = {
  data,
  dummyResponse,
  statesList,
  citiesList,
  highwaysList
};


// table.increments().index();
// table.float("latitude");
// table.float("longitude");
// table.string("name", 32).notNullable();
// table.string("state", 32);
// table.string("city", 32);
// table.string("highway", 32);
// table.string("exit_number", 32);