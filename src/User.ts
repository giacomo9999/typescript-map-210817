import faker from "faker";

export class User {
  userName: string;
  userLocation: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.userName = faker.name.firstName();
    this.userLocation = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
