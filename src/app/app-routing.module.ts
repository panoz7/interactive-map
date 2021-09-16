import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InteractiveMapComponent } from './interactive-map/interactive-map.component';

const routes: Routes = [
  {path: 'map', component: InteractiveMapComponent},
  {path: 'map/:view', component: InteractiveMapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
