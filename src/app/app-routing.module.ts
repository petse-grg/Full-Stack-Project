import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KitchenDisplayComponent } from './kitchen-display/kitchen-display.component';
import { OrderSystemComponent } from './order-system/order-system.component';


const routes: Routes = [
  { path: 'orderSystem', component: OrderSystemComponent},
  { path: 'kitchenDisplay', component: KitchenDisplayComponent},
  { path:'', redirectTo:'orderSystem', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }