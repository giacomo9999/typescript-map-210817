//  API Key: AIzaSyC0c7A0kTrSpwtPxbjKaQoozlq0PcGpF1c

/// <reference types="@types/google.maps">

import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();
console.log(user, company);

const customMap = new CustomMap("map");
