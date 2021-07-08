import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegComponent} from './reg/reg.component'
import {ReactiveregComponent} from './reactivereg/reactivereg.component'
import {TableComponent} from './table/table.component'
const routes: Routes = [
  {path: 'registration', component: ReactiveregComponent},
   {path : 'table',component: TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 export const routing = [ReactiveregComponent];

