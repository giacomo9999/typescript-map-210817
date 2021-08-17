import { User } from "./User";
import { Company } from "./Company";

interface Mappable {
  location: google.maps.LatLngLiteral;
}

export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(id: string) {
    this.googleMap = new google.maps.Map(document.getElementById(id), {
      center: { lat: 0, lng: 0 },
      zoom: 1,
    });
  }

  addMarker(mapLoc: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: { lat: mapLoc.location.lat, lng: mapLoc.location.lng },
    });
  }
}
