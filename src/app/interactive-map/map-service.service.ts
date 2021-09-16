import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import mapLayers from '../../assets/data/map-layers.json';
import mapViews from '../../assets/data/map-views.json';

@Injectable({
  providedIn: 'root'
})
export class MapServiceService {

  mapLayers = mapLayers;
  mapViews = mapViews; 
  currentView = mapViews.default;
  currentView$ = new BehaviorSubject(this.currentView);

  constructor() {
  }

  setView(viewName) {
    const selectedView = mapViews[viewName];
    this.currentView = selectedView || mapViews.default;
    this.currentView$.next(this.currentView);
  }

  isActive(layer) {
    return this.currentView.includes(layer);
  }

  updateView(layerStatus) {
    for (const prop in layerStatus) {
      const include = layerStatus[prop];
      const isInView = this.isActive(prop);
      
      if (include && !isInView) {
        // If we want to include it and it isn't already included add it
        this.currentView.push(prop);
      } else if (!include && isInView) {
        // IF we want to remove it and it's in the array remove it 
        this.currentView.splice(this.currentView.indexOf(prop), 1)
      } 
    }

    this.currentView$.next(this.currentView);
  }
}
