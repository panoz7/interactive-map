import { Component, OnInit } from '@angular/core';
import { MapServiceService } from '../map-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  activeLayers: string[];
  constructor(private ms: MapServiceService) { }

  ngOnInit(): void {
    this.ms.currentView$.subscribe(activeLayers => {
      this.activeLayers = activeLayers;
    })
  }

}
