import { Component, OnInit } from '@angular/core';
import { MapServiceService } from '../map-service.service';

@Component({
  selector: 'app-legend-column',
  templateUrl: './legend-column.component.html',
  styleUrls: ['./legend-column.component.scss']
})
export class LegendColumnComponent implements OnInit {

  mapLayers = this.ms.mapLayers;

  constructor(private ms: MapServiceService) { }

  ngOnInit(): void {
    console.log('here', this.mapLayers);
  }

}
