import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'Final-Project';

    //data variable for entree
    entreeContent: content[] = [
        {
            "title": "Main Dish",
            "price": 12.50,
            "food": [
                {
                    "id": "",
                    "name": "Pad Thai",
                    "code": "M1",
                    "filename": "ent_101.jpg",
                    "description": ""
                },
                {
                    "id": "",
                    "name": "Pad Kra Pao",
                    "code": "M2",
                    "filename": "ent_102.jpg",
                    "description": ""
                },
                {
                    "id": "",
                    "name": "BBQ Ribs",
                    "code": "M3",
                    "filename": "ent_103.jpg",
                    "description": ""
                },
                {
                    "id": "",
                    "name": "Fried Rice",
                    "code": "M4",
                    "filename": "ent_104.jpg",
                    "description": ""
                },
                {
                    "id": "",
                    "name": "Khao Mun Gai",
                    "code": "M5",
                    "filename": "ent_105.jpg",
                    "description": ""
                },
                {
                    "id": "",
                    "name": "Pork Belly",
                    "code": "M6",
                    "filename": "ent_106.jpg",
                    "description": ""
                },
                {
                    "id": "",
                    "name": "Sausage",
                    "code": "M7",
                    "filename": "ent_107.jpg",
                    "description": ""
                },
                {
                    "id": "",
                    "name": "Egg Rolls",
                    "code": "M8",
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
                    "id": "",
                    "name": "Pad Thai",
                    "code": "C1",
                    "filename": "com_201.jpg",
                    "description": ""
                },
                {
                    "id": "",
                    "name": "Khao Mun Gai",
                    "code": "C2",
                    "filename": "com_202.jpg",
                    "description": ""
                },
                {
                    "id": "",
                    "name": "Pad Kra Pao",
                    "code": "C3",
                    "filename": "com_203.jpg",
                    "description": ""
                },
                {
                    "id": "",
                    "name": "Fried Rice",
                    "code": "C4",
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
                    "id": "",
                    "name": "Honey Dew",
                    "code": "B1",
                    "filename": "bob_301.jpg",
                    "description": ""
                },
                {
                    "id": "",
                    "name": "Taro",
                    "code": "B2",
                    "filename": "bob_302.jpg",
                    "description": ""
                },
                {
                    "id": "",
                    "name": "Water Melon",
                    "code": "B3",
                    "filename": "bob_303.jpg",
                    "description": ""
                },
                {
                    "id": "",
                    "name": "Mango",
                    "code": "B4",
                    "filename": "bob_304.jpg",
                    "description": ""
                },
                {
                    "id": "",
                    "name": "Strawberry",
                    "code": "B5",
                    "filename": "bob_305.jpg",
                    "description": ""
                },
                {
                    "id": "",
                    "name": "Matcha",
                    "code": "B6",
                    "filename": "bob_306.jpg",
                    "description": ""
                },
                {
                    "id": "",
                    "name": "Coconut",
                    "code": "B7",
                    "filename": "bob_307.jpg",
                    "description": ""
                }
            ]
        }
    ];


    cartItem: cartContent[]=[];

    public item: string="";
    public quantity: number = 0;
    public amount: number = 0;
    public price: number = 0;

    addToCart(name: string, price:number) {
        this.item = name;
        this.updateQuantity(name);
        this.price = price;
        this.amount = this.calculateAmount(price);
        
        let cartObj =  {
            name: this.item,
            quantity: this.quantity,
            price: this.price,
            amount: this.amount,
        } as cartContent;
        this.cartItem.push(cartObj);
    }

    updateQuantity(name: string){
        if(this.item != name){
            this.quantity = 0;
            this.quantity++;
        }else{
            this.quantity++;
        }
    }

    calculateAmount(price: number){
        this.price = price;
        return this.quantity * this.price;
    }


    counter: number = 0;
    public confirmPayment() {
        //To Do: 1) valid payment confirmation
        // 2) send data to kds
        return this.counter++;
    }
}

//interface for food data
interface content {
    title: string;
    price: number;
    food: types[];
}

interface types {
    id: string;
    name: string;
    code: string;
    description: string;
    filename: string;
}

interface cartContent {
    name: string;
    quantity: number;
    price: number;
    amount: number;
}