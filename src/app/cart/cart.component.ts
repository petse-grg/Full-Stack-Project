import { Component, Input } from '@angular/core';
import { cartContent } from '../cartModel/CModel';
import { CartService } from '../shared/cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.scss'
})
export class CartComponent {

    cartItems: cartContent[] = [];

    itemQuanity: number = 0;
    itemAmount: number = 0;
    subtotal: number = 0;
    total: number = 0;
    totalTax: number = 0;

    constructor(private cartService: CartService) {
        this.cartItems = this.cartService.cartItem;
    }

    ngOnInIt() {
        this.cartService.cartSubject.subscribe(newItems => {
            this.cartItems = newItems;
        });

        // this.calculateSubtotal();
        this.calculateTax();
        this.calculateGrandTotal();

    }

    edit(item: cartContent) {
        let value = prompt("Enter Item Quantity");
        if (value) {
            item.quantity = Number(value);
            item.amount = item.price * item.quantity;
        }
    }

    calculateSubtotal() {
        this.subtotal = this.cartItems.reduce((total, item) => total + item.amount, 0);
        return this.subtotal;
    }

    calculateTax() {
        this.totalTax = this.subtotal * RATE;
        return this.totalTax.toFixed(2);
    }

    calculateGrandTotal() {
        this.total = this.totalTax + this.subtotal;
        return this.total.toFixed(2);
    }

    delete(item: cartContent){
        this.cartService.deleteItem(item);
    }
}


const RATE: number = 0.0867;