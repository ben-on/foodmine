import { Component, NgModule } from '@angular/core';
import { Food } from '../../../shared/models/food';
import { FoodService } from '../../../services/food.service';
import { NgFor, formatCurrency } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RatingModule } from 'ng-starrating';
import { StarsComponent } from "../../partials/stars/stars.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [NgFor, RouterLink, StarsComponent]
})

// @NgModule({
//   imports : [RatingModule]
// })
export class HomeComponent {
  foods!: Food[];
  constructor(private foodservice:FoodService){
    this.foods = foodservice.getAll();
   }


  ngOnInit():void {

  }
}
