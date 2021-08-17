import faker from "faker";

export class Company {
  companyName: string;
  companyCatchPhrase: string;
  companyLocation: { lat: number; lng: number };

  constructor() {
    this.companyName = faker.company.companyName();
    this.companyCatchPhrase = faker.company.catchPhrase();
    this.companyLocation = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
