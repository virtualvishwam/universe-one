export interface NGODataInterface {
    name: string;
    typeOfOrganization: string;
    websiteLink?: string;
    phoneNumber?: string;
    emailID?: string;
    country: string;
    state: string;
    city: string;
    typeOfDonations?: string;
    localAreas?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
    verifiedProfile: boolean;
    verifiedProfileJustification: string;
    message?: string;
}
