import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  @Input() itemToCart: string = "";
  @Input() quantityToCart: number = 0;
  @Input() priceToCart: number = 0;
  @Input() amountToCart: number = 0;

  cartValue: cartContent[]=[];

}

interface cartContent {
  name: string;
  quantity: number;
  price: number;
  amount: number;
}