import {AfterViewInit, Component, Injectable, OnInit} from '@angular/core';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapDataService} from '../../services/map-data.service';
import { MapGeometryModel, MapResultModel} from '../../models/mapResult.model';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class MapComponent implements OnInit, AfterViewInit{



 public mapResults: MapResultModel[] = [];

  private _map;

  constructor(private mapDataService: MapDataService) {
  }



  private _markerIcon = {
    icon: L.icon({
      iconSize: [25, 41],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40],
      // specify the path here
      iconUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-shadow.png'
    })
  };

  public ngOnInit(): void {
    this._prepareMap();
    this._checkGeolocation();
  }

  public ngAfterViewInit(): void {
    this._loadMapData();
  }

  private _checkGeolocation(): void {
    if (!navigator.geolocation) {

      console.log('location is not supported');
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        const coords = position.coords;
        const latLong = [coords.latitude, coords.longitude];
        this._map.flyTo([latLong[0], latLong[1]], 12);
        L.marker([latLong[0], latLong[1]], this._markerIcon).addTo(this._map).bindPopup('jesteś tutaj').openPopup();
        console.log(
          `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
        );
      });
    }
  }

  private _prepareMap(): void {
    this._map = L.map('map', {
      center: [39.8282, -98.5795],
      zoom: 3
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }
    ).addTo(this._map);
    this._map.on('click', e => {
      console.log(e.latlng); // get the coordinates
    //  L.marker([e.latlng.lat, e.latlng.lng], this._markerIcon).addTo(this._map); // add the marker onclick
    });
  }

  private _loadMapData(): void {
    this.mapDataService.getMapResult()
      .pipe(
        take(1)
      )
      .subscribe(results => {
        this.mapResults = results;
        this.mapResults.forEach(mapResult => this._addMapMarker(mapResult.geometry,
          mapResult.name, mapResult.info, mapResult.gallery, mapResult.video));
      });
  }

  private _addMapMarker(geo: MapGeometryModel, name: string, info: string, gallery: string, video: string): void {
    const [long, lat] = geo.coordinates;
   // L.marker([lat, long], this._markerIcon).addTo(this._map).bindPopup(name, {autoClose: false}).openPopup();
    const infoPop = `<b>Info : </b><a href=\'${info}\'>Click</a>`;
    const galleryPop = `<b>Gallery : </b><a href=\'${gallery}\'>Click</a>`;
    const videoPop = `<b>Video : </b><a href=\'${video}\'>Click</a>`;

    L.marker([lat, long], this._markerIcon).addTo(this._map).bindPopup(name + `<br>` + infoPop + `<br>` + galleryPop + `<br>` + videoPop);
  }
}
