import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { CartService } from './shared/cart.service';
import { KitchenDisplayComponent } from './kitchen-display/kitchen-display.component';
import { OrderSystemComponent } from './order-system/order-system.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    KitchenDisplayComponent,
    OrderSystemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    CartService, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
