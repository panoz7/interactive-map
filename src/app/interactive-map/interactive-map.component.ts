import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { MapServiceService } from './map-service.service';

@Component({
  selector: 'app-interactive-map',
  templateUrl: './interactive-map.component.html',
  styleUrls: ['./interactive-map.component.scss']
})
export class InteractiveMapComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ms: MapServiceService ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => params.get('view') as string)
    ).subscribe(view => {
      this.ms.setView(view)
    })
  }

}
