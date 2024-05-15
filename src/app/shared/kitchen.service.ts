import { Injectable } from '@angular/core';
import { displayContent } from '../Model/kdsData';
import { BehaviorSubject } from 'rxjs';
import { CartService } from './cart.service';
import { cartContent } from '../Model/CartModel';


@Injectable({
  providedIn: 'root'
})
export class KitchenService {

  private orderId: string ='';
  private addedData: cartContent[] =[];
  
  kitchenData: displayContent[] = [];
  kitchenSubject = new BehaviorSubject<displayContent[]>([]);

  constructor(private displayData: CartService) {
    this.displayData.getData().subscribe(data => {
      this.addedData = data;
    });
  }

  // Method to update data
  updateData(newData: cartContent[]): void {
    if(newData.length != 0){
      this.addedData = [...newData];
    }
  }

  // Method to get data from Service2
  addData() {
     let obj = {
          nameOrNum: this.orderId,
          items: this.addedData,
      } as displayContent;
    
    this.kitchenData.push(obj);
  }

  orderNum(order: string) {
    this.orderId = '# ' + order;
  }
}
