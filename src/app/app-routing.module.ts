import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ModelsComponent } from './models/models.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
{ path: 'home',component:HomeComponent},
{path: 'models',component:ModelsComponent},
{path:'services', component:ServicesComponent},
{path: '**', component:HomeComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
