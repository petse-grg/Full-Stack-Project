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
        "title":"Main Dish",
        "price":12.50,
        "food":[
            {
                "id":"",
                "name":"Pad Thai",
                "code":"M1",
                "filename":"ent_101.jpg",
                "description":""
            },
            {
                "id":"",
                "name":"Pad Kra Pao",
                "code":"M2",
                "filename":"ent_102.jpg",
                "description":""
            },
            {
                "id":"",
                "name":"BBQ Ribs",
                "code":"M3",
                "filename":"ent_103.jpg",
                "description":""
            },
            {
                "id":"",
                "name":"Fried Rice",
                "code":"M4",
                "filename":"ent_104.jpg",
                "description":""
            },
            {
                "id":"",
                "name":"Khao Mun Gai",
                "code":"M5",
                "filename":"ent_105.jpg",
                "description":""
            },
            {
                "id":"",
                "name":"Pork Belly",
                "code":"M6",
                "filename":"ent_106.jpg",
                "description":""
            },
            {
                "id":"",
                "name":"Sausage",
                "code":"M7",
                "filename":"ent_107.jpg",
                "description":""
            },
            {
                "id":"",
                "name":"Egg Rolls",
                "code":"M8",
                "filename":"ent_108.jpg",
                "description":""
            }
        ]
    },

];

  //data variable for combo
  comboContent: content[] = [
    {
      "title":"Combo Dish",
      "price":13.50,
      "food":[
          {
              "id":"",
              "name":"Pad Thai",
              "code":"C1",
              "filename":"com_201.jpg",
              "description":""
          },
          {
              "id":"",
              "name":"Khao Mun Gai",
              "code":"C2",
              "filename":"com_202.jpg",
              "description":""
          },
          {
              "id":"",
              "name":"Pad Kra Pao",
              "code":"C3",
              "filename":"com_203.jpg",
              "description":""
          },
          {
              "id":"",
              "name":"Fried Rice",
              "code":"C4",
              "filename":"com_204.jpg",
              "description":""
          }
      ]
  }
  ];

  //data variable for drink
  drinkContent: content[] = [
    {
      "title":"Bobba Tea",
      "price": 6.00,
      "food":[
          {
              "id":"",
              "name":"Honey Dew",
              "code":"B1",
              "filename":"bob_301.jpg",
              "description":""
          },
          {
              "id":"",
              "name":"Taro",
              "code":"B2",
              "filename":"bob_302.jpg",
              "description":""
          },
          {
              "id":"",
              "name":"Water Melon",
              "code":"B3",
              "filename":"bob_303.jpg",
              "description":""
          },
          {
              "id":"",
              "name":"Mango",
              "code":"B4",
              "filename":"bob_304.jpg",
              "description":""
          },
          {
              "id":"",
              "name":"Strawberry",
              "code":"B5",
              "filename":"bob_305.jpg",
              "description":""
          },
          {
              "id":"",
              "name":"Matcha",
              "code":"B6",
              "filename":"bob_306.jpg",
              "description":""
          },
          {
              "id":"",
              "name":"Coconut",
              "code":"B7",
              "filename":"bob_307.jpg",
              "description":""
          }
      ]
  }
  ];
}

//interface for food data
interface content{
  title: string;
  price: number;
  food: types[];
}

interface types{
  id: string;
  name: string;
  code: string;
  description: string;
  filename: string;
}
