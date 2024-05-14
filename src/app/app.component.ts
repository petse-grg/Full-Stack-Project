import { Component } from '@angular/core';
import { content } from './ContentModel/ContentInterface';
import { cartContent } from './cartModel/CModel';
import { CartService } from './shared/cart.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    //data variable for entree
    entreeContent: content[] = [
        {
            "title": "Main Dish",
            "price": 12.50,
            "food": [
                {
                    "id": "M1",
                    "name": "Pad Thai",
                    "filename": "ent_101.jpg",
                    "description": ""
                },
                {
                    "id": "M2",
                    "name": "Pad Kra Pao",
                    "filename": "ent_102.jpg",
                    "description": ""
                },
                {
                    "id": "M3",
                    "name": "BBQ Ribs",
                    "filename": "ent_103.jpg",
                    "description": ""
                },
                {
                    "id": "M4",
                    "name": "Fried Rice",
                    "filename": "ent_104.jpg",
                    "description": ""
                },
                {
                    "id": "M5",
                    "name": "Khao Mun Gai",
                    "filename": "ent_105.jpg",
                    "description": ""
                },
                {
                    "id": "M6",
                    "name": "Pork Belly",
                    "filename": "ent_106.jpg",
                    "description": ""
                },
                {
                    "id": "M7",
                    "name": "Sausage",
                    "filename": "ent_107.jpg",
                    "description": ""
                },
                {
                    "id": "M8",
                    "name": "Egg Rolls",
                    "filename": "ent_108.jpg",
                    "description": ""
                }
            ]
        },

    ];

    //data variable for combo
    comboContent: content[] = [
        {
            "title": "Combo Dish",
            "price": 13.50,
            "food": [
                {
                    "id": "C1",
                    "name": "Pad Thai",
                    "filename": "com_201.jpg",
                    "description": ""
                },
                {
                    "id": "C2",
                    "name": "Khao Mun Gai",
                    "filename": "com_202.jpg",
                    "description": ""
                },
                {
                    "id": "C3",
                    "name": "Pad Kra Pao",
                    "filename": "com_203.jpg",
                    "description": ""
                },
                {
                    "id": "C4",
                    "name": "Fried Rice",
                    "filename": "com_204.jpg",
                    "description": ""
                }
            ]
        }
    ];

    //data variable for drink
    drinkContent: content[] = [
        {
            "title": "Bobba Tea",
            "price": 6.00,
            "food": [
                {
                    "id": "B1",
                    "name": "Honey Dew",
                    "filename": "bob_301.jpg",
                    "description": ""
                },
                {
                    "id": "B2",
                    "name": "Taro",
                    "filename": "bob_302.jpg",
                    "description": ""
                },
                {
                    "id": "B3",
                    "name": "Water Melon",
                    "filename": "bob_303.jpg",
                    "description": ""
                },
                {
                    "id": "B4",
                    "name": "Mango",
                    "filename": "bob_304.jpg",
                    "description": ""
                },
                {
                    "id": "B5",
                    "name": "Strawberry",
                    "filename": "bob_305.jpg",
                    "description": ""
                },
                {
                    "id": "B6",
                    "name": "Matcha",
                    "filename": "bob_306.jpg",
                    "description": ""
                },
                {
                    "id": "B7",
                    "name": "Coconut",
                    "filename": "bob_307.jpg",
                    "description": ""
                }
            ]
        }
    ];

    listOfData: cartContent[] = [];

    itemQuanity: number = 1;
    itemAmount: number = 0;

    constructor(private cartService: CartService) {
        this.listOfData = this.cartService.cartItem;
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


