import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewAccountComponent } from './add-new-account/add-new-account.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {path:'customer-list', component: CustomerComponent},
  {path:'add-new-account', component: AddNewAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
