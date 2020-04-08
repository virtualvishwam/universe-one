import { Injectable } from '@angular/core';
import { NGODataInterface } from './ngo-data-interface';

@Injectable({
  providedIn: 'root'
})
export class NGOData {

  ngoList: NGODataInterface[] = [
    {
      name: "Amazon",
      typeOfOrganization: "Company",
      websiteLink: "https://amzn.to/2V6aoZI",
      country: "India",
      state: "Nationwide",
      city: "Nationwide",
      typeOfDonations: "Money",
      verifiedProfile: true,
      verifiedProfileJustification: "A well known company"
    },
    {
      name: "Flipkart (Give India)",
      typeOfOrganization: "Company",
      websiteLink: "https://flipkart.giveindia.org",
      country: "India",
      state: "Nationwide",
      city: "Nationwide",
      typeOfDonations: "Money",
      facebook: "https://www.facebook.com/GiveIndia",
      instagram: "https://www.instagram.com/give_india",
      twitter: "https://twitter.com/giveindia",
      verifiedProfile: true,
      verifiedProfileJustification: "A well known company"
    },
    {
      name: "Akshaya Patra",
      typeOfOrganization: "NGO",
      websiteLink: "https://www.akshayapatra.org/covid-relief-services",
      phoneNumber: "1800-425-8622",
      emailID: "infodesk@akshayapatra.org",
      country: "India",
      state: "Nationwide",
      city: "Nationwide",
      typeOfDonations: "Money",
      facebook: "https://www.facebook.com/TheAkshayaPatraFoundation",
      twitter: "https://twitter.com/akshayapatra",
      instagram: "https://www.instagram.com/theakshayapatrafoundation",
      verifiedProfile: true,
      verifiedProfileJustification: "A well known NGO",
      message: "The NGO is distributing Meals and Grocery Kits."
    },
    {
      name: "United Way Mumbai",
      typeOfOrganization: "NGO",
      country: "India",
      state: "Maharashtra",
      city: "Mumbai",
      websiteLink: "https://www.unitedwaymumbai.org/fight-covid",
      phoneNumber: "+91 22 26567000",
      emailID: "sanaa@unitedwaymumbai.org",
      facebook: "https://www.facebook.com/Unitedwaymumbai",
      typeOfDonations: "Money",
      verifiedProfile: true,
      verifiedProfileJustification: "NGO backed by Amazon- 'https://www.unitedwaymumbai.org/amazoncares' Social media account has proof of work",
      message: "Quoted from website - 'Our teams are at the frontlines supporting public health officials and community organisations. Your donations will go towards fighting the spread of the virus, keeping health workers safe and support community resilience.'"
    },
    {
      name: "Uday Foundation",
      typeOfOrganization: "NGO",
      country: "India",
      state: "Delhi NCR",
      city: "Delhi NCR",
      websiteLink: "https://www.udayfoundation.org/coronavirus-disease-covid-19",
      phoneNumber: "+91-9910445043",
      emailID: "reena.sen@udayfoundation.org",
      facebook: "https://www.facebook.com/Uday.Foundation",
      twitter: "https://twitter.com/udayfoundation",
      instagram: "https://www.instagram.com/udayfoundation",
      typeOfDonations: "Money",
      verifiedProfile: true,
      verifiedProfileJustification: "Well known NGO. Proof of work documented in various news portals and social media.",
      message: "Distributing - 'Care kit (Each care kit includes 6 antiseptic soaps, 125 g each and a hand sanitizer, 200 ml.) & One Month’s Food Supply (Flour, Rice, Pulses, Cooking Oil and Other Food Items)'"
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
        },
        {
          name: "Maharashtra",
          cities: [
            "Mumbai"
          ]
        },
        {
          name: "Delhi NCR",
          cities: [
            "Delhi NCR"
          ]
        },
      ]
    }
  ];

  tempStates = [];

  constructor() { }


  fetchCountries() {
    let list: string[] = [];
    this.countries.forEach(element => {
      list.push(element.name);
    })
    return list;
  }

  fetchStates(country) {
    let list: string[] = [];
    this.countries.forEach(element => {
      if (element.name === country) {
        element.states.forEach(state => {
          list.push(state.name);
        });
        this.tempStates = element.states;
      }
    });
    return list;
  }

  fetchCities(state) {
    let list: string[] = [];
    this.tempStates.forEach(element => {
      if (element.name === state) {
        list = element.cities;
      }
    });
    return list;
  }

  fetchNGO(country, state, city) {
    let list = [];
    this.ngoList.forEach(element => {
      if (element.city === city && element.state === state && element.country === country) {
        list.push(element);
      }
    });
    return list;
  }


}
