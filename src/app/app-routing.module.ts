import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"finance", loadChildren:()=> import('./finance/finance.module').then(mod=>mod.FinanceModule)},
  {path:"hr", loadChildren:()=> import('./hr/hr.module').then(mod=>mod.HrModule)},
  {path:"production", loadChildren:()=> import('./production/production.module').then(mod=>mod.ProductionModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
