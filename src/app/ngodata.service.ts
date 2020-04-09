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
      state: "New Delhi",
      city: "New Delhi",
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
    },
    {
      name: "Sarthak Foundation",
      typeOfOrganization: "NGO",
      websiteLink: "https://www.sarthakfoundation.org",
      country: "India",
      state: "Uttar Pradesh",
      city: "Lucknow",
      phoneNumber: "+91-9984031039",
      emailID: "social@sarthakfoundation.org",
      facebook: "https://www.facebook.com/SarthakFoundation",
      twitter: "https://twitter.com/sarthakngo",
      instagram: "https://www.instagram.com/SarthakFoundation",
      typeOfDonations: "Money, Food Supplies",
      verifiedProfile: true,
      verifiedProfileJustification: "Well know NGO in Lucknow. Social media account has proof of work.",
      message: "Message from NGO - 'We are ensuring distribution through Parshads and Pradhans and are coordinating with community kitchens to distribute food. Also some donors are coming and distributing veggies and all'"
    },
    {
      name: "INA Corona Fighters",
      typeOfOrganization: "Group",
      country: "India",
      state: "Haryana",
      city: "Hisar",
      phoneNumber: "+91-9896407106",
      emailID: "inacoronafighters@gmail.com",
      facebook: "https://www.facebook.com/inacoronafighters",
      twitter: "https://twitter.com/inaCoronaFight",
      instagram: "https://www.instagram.com/inacoronafighters",
      typeOfDonations: "Money",
      verifiedProfile: false,
      verifiedProfileJustification: "",
      message: `WhatsApp message - Everyone of us are going though very tough circumstances and we all are praying to God to save us from the virus but there is also a responsibility on all of us to support each other in this situation and show our humanity by all means and save poor, siblings from hunger, an infant get milk, and save life of our super heros such as policemen, doctors, nurses, and other officials who r struggling day and night to save all of us.
      So one of my friend Alok Partap Singh has started a very great mission with his team to arrange thermal thermometers, masks, gloves, food, who r critically involved in this novel campaign to fight against covid 19. A team of 200-300 elite educated personals under the leadership of Alok partap singh are supporting this mission and we have already created groups on Facebook, Twitter, insta to aware and help people through our valuable posts. As thermometers  masks and gloves has consumed our all collected funds and now we are convincing vendors to pay helping hand and concession for this issue. I on behalf of my friend and his team humbly request u please contribute in this mission with us.`
    },
    {
      name: "Zomato Feeding India",
      typeOfOrganization: "Campaign",
      country: "India",
      state: "Nationwide",
      city: "Nationwide",
      websiteLink: "https://www.feedingindia.org/donate",
      facebook: "https://www.facebook.com/feedingindia",
      twitter: "https://twitter.com/FeedingIndia",
      instagram: "https://www.instagram.com/feedingindia",
      typeOfDonations: "Money",
      verifiedProfile: true,
      verifiedProfileJustification: "An initiative by well known company - Zomato",
      message: "Quoted from website - As the crisis around the COVID-19 pandemic grows, the livelihoods of a large number of families surviving on daily wages have been shaken up. We have initiated the ‘Feed the Daily Wager’ project to provide food support to such families and to help them have a reliable supply of meals in the absence of employment opportunities."
    },
    {
      name:"ActionAid",
      typeOfOrganization:"NGO",
      country:"India",
      state:"Nationwide",
      city:"Nationwide",
      websiteLink:"https://www.actionaidindia.org/SupportCOVID-hitFamilies",
      phoneNumber:"+91 80 25586293",
      emailID:"fundindia@actionaid.org",
      facebook:"https://www.facebook.com/ActionAidIndia",
      twitter:"https://twitter.com/ActionAidIndia",
      instagram:"https://www.instagram.com/actionaid_india",
      typeOfDonations:"Money",
      verifiedProfile:true,
      verifiedProfileJustification:"A well known NGO backed by celebrities and government officials. Proof of work is available in their social media accounts.",
      message:"Types of donation kits - Distribution of Sanitation Kit (masks, gloves, sanitizer and soap, for hygiene needs of one family for one month), Ration kit (Rice, wheat flour, pulses and oil, for nutrition needs of one family for one month), Cash transfer (in lieu of one month's wages to meet all needs of one family for one month)"
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
          name: "New Delhi",
          cities: [
            "New Delhi"
          ]
        },
        {
          name: "Haryana",
          cities: [
            "Hisar"
          ]
        },
        {
          name: "Maharashtra",
          cities: [
            "Mumbai"
          ]
        },
        {
          name: "Uttar Pradesh",
          cities: [
            "Lucknow"
          ]
        }

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
