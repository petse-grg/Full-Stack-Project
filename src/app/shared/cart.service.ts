import { Injectable } from '@angular/core';
import { cartContent } from '../cartModel/CModel';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItem: cartContent[] = [];
  cartSubject = new BehaviorSubject<cartContent[]>([]);

  constructor() { }

  addToCart(item: cartContent) {

    const index = this.cartItem.findIndex(existingItem => existingItem.id === item.id);

    if (index !== -1) {

      this.cartItem[index].quantity++;
      let quantity = this.cartItem[index].quantity;
      let price = this.cartItem[index].price;
      this.cartItem[index].amount = quantity * price;

    } else {
      this.cartItem.push(item);
    }

    this.cartSubject.next([...this.cartItem]);
  }

  deleteItem(item: cartContent) {

    const index = this.cartItem.findIndex(existingItem => existingItem.id === item.id);
    if (index !== -1) {
      this.cartItem.splice(index, 1);
    }
  }

}
