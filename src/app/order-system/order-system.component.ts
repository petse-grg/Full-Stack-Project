import { Component } from '@angular/core';
import { cartContent } from '../Model/CartModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { content } from '../Model/ContentInterface';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-order-system',
  templateUrl: './order-system.component.html',
  styleUrl: './order-system.component.scss'
})
export class OrderSystemComponent {
 //data variable for entree
 mainDishContent: content[] = [];

 //data variable for combo
 comboContent: content[] = [];

 //data variable for drink
 bubbleTeaContent: content[] = [];

 itemQuanity: number = 1;
 itemAmount: number = 0;

 constructor(public httpClients: HttpClient, private cartService: CartService) {

 }
 ngOnInit(): void {
     this.getData();
 }

 //get method 
 getData() {
     const options = {
         headers: new HttpHeaders({
             'Content-Type': 'Application/json',
             'Accept': 'Applcation/json'
         })
     };

     this.httpClients.get<content[]>("http://localhost:8080", options)
         .subscribe({
             next: (data) => {
                 for (let foodItem of data) {
                     if (foodItem.title == "Main Dish") {
                         this.mainDishContent.push(foodItem);
                     } else if (foodItem.title == "Combo Dish") {
                         this.comboContent.push(foodItem);
                     } else if (foodItem.title == "Bobba Tea") {
                         this.bubbleTeaContent.push(foodItem);
                     } else {
                         console.log("error retrieving data to client");
                     }
                 }
             },
             error: (e) => {
                 console.error("Error Occured: " + e);
             }
         });
 }

 //add items to service
 addItem(id: string, name: string, price: number) {

     let cartObj = {
         id: id,
         name: name,
         price: price,
         quantity: this.itemQuanity,
         amount: price,
     } as cartContent;

     this.cartService.addToCart(cartObj);

     cartObj = {
         id: '',
         name: '',
         price: 0,
         quantity: 0,
         amount: 0,
     };
 }
}
