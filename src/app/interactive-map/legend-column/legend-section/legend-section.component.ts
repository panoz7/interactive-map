import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MapServiceService } from '../../map-service.service';

@Component({
  selector: 'app-legend-section',
  templateUrl: './legend-section.component.html',
  styleUrls: ['./legend-section.component.scss']
})
export class LegendSectionComponent implements OnInit {

  @Input() sectionData;
  sectionForm; 
  
  constructor(private fb: FormBuilder, private ms: MapServiceService) { }

  ngOnInit(): void {

    const formControls = {};
    for (const layer of this.sectionData.layers) {
      formControls[layer.id] = [false]
    }

    this.sectionForm = this.fb.group(formControls);

    this.sectionForm.valueChanges.subscribe(data => {
      this.ms.updateView(data);
    })

    this.ms.currentView$.subscribe(this.handleViewChange.bind(this))

  }

  handleViewChange(activeLayers) {
    const formControls = {};
    for (const layer of this.sectionData.layers) {
      formControls[layer.id] = activeLayers.includes(layer.id)
    }

    this.sectionForm.setValue(formControls, { emitEvent: false});
  }

}
