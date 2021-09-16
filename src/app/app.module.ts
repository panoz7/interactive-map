import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LegendColumnComponent } from './interactive-map/legend-column/legend-column.component';
import { LegendSectionComponent } from './interactive-map/legend-column/legend-section/legend-section.component';
import { MapComponent } from './interactive-map/map/map.component';
import { InteractiveMapComponent } from './interactive-map/interactive-map.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LegendColumnComponent,
    LegendSectionComponent,
    MapComponent,
    InteractiveMapComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
