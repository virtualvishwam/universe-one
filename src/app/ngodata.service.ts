import { Injectable } from '@angular/core';

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
                  typeOfDonations: ["Money","Food Supplies"],
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

  constructor() { }
}
