import { User } from "./User";
import { Company } from "./Company";

interface Mappable {
  location: google.maps.LatLngLiteral;
  markerContent(): string;
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
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: { lat: mapLoc.location.lat, lng: mapLoc.location.lng },
    });
    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: `<div><h2>${mapLoc.markerContent()}</h2></div>`,
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
