import { Component, Input } from '@angular/core';
import { cartContent } from '../Model/CartModel';
import { CartService } from '../shared/cart.service';
import { displayContent } from '../Model/kdsData';
import { KitchenService } from '../shared/kitchen.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.scss'
})
export class CartComponent {

    cartItems: cartContent[] = [];

    subtotal: number = 0;
    total: number = 0;
    totalTax: number = 0;
    orderId: string = "";

    constructor(private dataService: CartService, private displayService: KitchenService) {
        this.cartItems = dataService.cartItem;
    }

    edit(item: cartContent) {
        let value = prompt("Enter Item Quantity");
        if (value != '0') {
            item.quantity = Number(value);
            item.amount = item.price * item.quantity;
        } else {
            alert("Enter an appropiriate quantity for the order");
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

    delete(item: cartContent) {
        this.dataService.deleteItem(item);
    }

    paymentCard() {
        //TODO : invoke card system

        //complete trasaction

        //set order and send it to KDS
        if (this.orderId) {
            alert("Confirm Payment");

            this.displayService.orderNum(this.orderId);
            this.displayService.updateData(this.cartItems);
            this.displayService.addData();
            this.dataService.deleteAll();
        } else {
            alert("Please Enter Order Number or Name");
        }
    }

    paymentCash() {

        if (this.orderId) {
            alert("Confirm Payment");
            this.displayService.orderNum(this.orderId);
            this.displayService.updateData(this.cartItems);
            this.displayService.addData();
            this.dataService.deleteAll();
        } else {
            alert("Please Enter Order Number or Name");
        }
    }

    cancleOrder() {
        this.dataService.deleteAll();
    }
}

const RATE: number = 0.0867;