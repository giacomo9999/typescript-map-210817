//  API Key: AIzaSyC0c7A0kTrSpwtPxbjKaQoozlq0PcGpF1c

/// <reference types="@types/google.maps">

import { User } from "./User";
import { Company } from "./Company";

const user = new User();
const company = new Company();
console.log(user, company);

new google.maps.Map(document.getElementById("map"), {
  center: { lat: 0, lng: 0 },
  zoom: 5,
});

