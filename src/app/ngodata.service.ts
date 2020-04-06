import { Injectable } from '@angular/core';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class NGOData {


  ngoList = [
    {
      country: "India",
      expanded: false,
      states: [
        {
          state: "Uttar Pradesh",
          expanded: false,
          cities: [
            {
              city: "Lucknow",
              expanded: false,
              ngos: [
                {
                  name: "The Conseptulizers",
                  websiteLink: "",
                  phoneNumber: "+91-9876543210",
                  emailID: "xyz@xyz.com",
                  facebook: "facebook",
                  twitter: "twitter",
                  instagram: "instagram",
                  typeOfDonations: "Money, Food Supplies",
                  localAreas: "Whole City",
                  verifiedProfile: true,
                  verifiedProfileJustification: "I know this NGO",
                  expanded: false
                },
                {
                  name: "The Conseptulizers and friends",
                  websiteLink: "",
                  phoneNumber: "+91-9876543210",
                  emailID: "xyz@xyz.com",
                  facebook: "facebook",
                  twitter: "twitter",
                  instagram: "instagram",
                  typeOfDonations: "Money, Food Supplies",
                  localAreas: "Whole City",
                  verifiedProfile: true,
                  verifiedProfileJustification: "I know this NGO",
                  expanded: false
                }
              ]
            }
          ]
        },
        {
          state: "Karnataka",
          expanded: false,
          cities: [
            {
              city: "Bengaluru",
              expanded: false,
              ngos: [
                {
                  name: "The Conseptulizers",
                  websiteLink: "www.xyz.com",
                  phoneNumber: "",
                  emailID: "xyz@xyz.com",
                  facebook: "",
                  twitter: "",
                  instagram: "instagram",
                  typeOfDonations: ["Money", "Food Supplies"],
                  localAreas: "Whole City",
                  verifiedProfile: false,
                  verifiedProfileJustification: "I know this NGO",
                  expanded: false
                }
              ]
            }
          ]
        }
      ]
    }
  ];

  ngoList5 = [
    {
      name: "Company - Amazon",
      websiteLink: "https://amzn.to/2V6aoZI",
      country: "India",
      state: "Nationwide",
      city: "Nationwide",
      typeOfDonations: "Money",
      verifiedProfile: true,
      verifiedProfileJustification: "A well known company"
    },
    {
      name: "Company - Flipkart (Give India)",
      websiteLink: "https://flipkart.giveindia.org",
      country:"India",
      state:"Nationwide",
      city: "Nationwide",
      typeOfDonations: "Money",
      facebook:"https://www.facebook.com/GiveIndia",
      instagram:"https://www.instagram.com/give_india",
      twitter:"https://twitter.com/giveindia",
      verifiedProfile: true,
      verifiedProfileJustification: "A well known company"
    },
    {
      name: "Akshaya Patra",
      websiteLink: "https://www.akshayapatra.org/covid-relief-services",
      phoneNumber: "1800-425-8622",
      emailID:"infodesk@akshayapatra.org",
      country:"India",
      state:"Nationwide",
      city: "Nationwide",
      typeOfDonations: "Money, Meals, Grocery Kits",
      facebook:"https://www.facebook.com/TheAkshayaPatraFoundation",
      twitter:"https://twitter.com/akshayapatra",
      instagram:"https://www.instagram.com/theakshayapatrafoundation",
      verifiedProfile: true,
      verifiedProfileJustification: "A well known NGO"
    }

  ];

  countries = [
    {
      name: "India",
      states: [
        {
          name: "Nationwide",
          cities: [
            "Nationwide"
          ]
        }
      ]
    }
  ]

  constructor() { }


  fetchCountries() {
    let list: string[] = [];
    this.countries.forEach(element => {
      list.push(element.name);
    })
    return list;
  }

  fetchStates(country) {
    return ["Helenski", "Karnataka"];
  }

  fetchCities(state) {
    return ["Remeru", "Catacomb"];
  }

  fetchNGOs(city) {
    return ["The Conceptulizers", "Ronan the Accuser"];
  }
}
