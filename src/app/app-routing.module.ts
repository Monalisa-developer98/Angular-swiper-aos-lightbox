import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { ChartJsComponent } from './components/chart-js/chart-js.component';

const routes: Routes = [
  {path:'', redirectTo: 'event', pathMatch: 'full'},
  {path: 'event', component: EventListComponent},
  {path: 'events/:slug', component: EventDetailsComponent},
  {path: 'chart', component: ChartJsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
