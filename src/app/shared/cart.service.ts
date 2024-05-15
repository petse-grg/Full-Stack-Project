import { Injectable } from '@angular/core';
import { cartContent } from '../Model/CartModel';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItem: cartContent[] = [];
  cartSubject = new BehaviorSubject<cartContent[]>([]);

  //update kitchen data on demand
  private kitchenSubject = new BehaviorSubject<cartContent[]>(this.cartItem);
  dataToDisplay = this.kitchenSubject.asObservable();

  constructor() { }

  getData(): Observable<cartContent[]> {
    return this.dataToDisplay;
  }


  //adds item
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


  //deletes an element of an item
  deleteItem(item: cartContent) {

    const index = this.cartItem.findIndex(existingItem => existingItem.id === item.id);
    if (index !== -1) {
      this.cartItem.splice(index, 1);
    }
  }

  //deletes the order
  deleteAll() {

    if (this.cartItem.length !== 0) {
      this.cartItem.splice(0);
    }
  }


}
