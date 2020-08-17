import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { RulesComponent } from './rules/rules.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: TableComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
