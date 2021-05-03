import { Component, OnInit } from '@angular/core';
import {MapComponent} from '../mapa/map.component';
import {take} from 'rxjs/operators';
import {MapDataService} from '../../services/map-data.service';
import {MapResultModel} from '../../models/mapResult.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public mapResults: MapResultModel[] = [];
  index = 1;

  constructor(public map: MapComponent, public mapDataService: MapDataService) { }

  ngOnInit(): void {
    console.log(this.mapData());
  }
  mapData(): void{
      this.mapDataService.getMapResult()
        .pipe(
          take(1)
        )
        .subscribe(results => {
          this.mapResults = results;
        });
    }
}
