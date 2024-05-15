import { Component } from '@angular/core';
import { content } from '../Model/ContentInterface';
import { CartService } from '../shared/cart.service';
import { displayContent } from '../Model/kdsData';
import { KitchenService } from '../shared/kitchen.service';

@Component({
  selector: 'app-kitchen-display',
  templateUrl: './kitchen-display.component.html',
  styleUrl: './kitchen-display.component.scss'
})
export class KitchenDisplayComponent {

  foodContent: displayContent[] = [];

  constructor(private displayContent: KitchenService) {
    this.foodContent = this.displayContent.kitchenData;
  }

  ready(orderId: string) {
    alert("Ready to Serve?");
    const index = this.foodContent.findIndex(existingItem => existingItem.nameOrNum === orderId);
    if(index !== -1){
      this.foodContent.splice(index, 1);
    }
  }
  
}
