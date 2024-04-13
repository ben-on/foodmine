import { NgFor, NgStyle } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'star-rating',
  standalone: true,
  imports: [NgFor,NgStyle],
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.css'
})
export class StarsComponent {
  @Input()
  stars! : number;

  @Input()
  size : number = 1;

  get styles(){
    return {
      "width.rem" : this.size,
      "height.rem" : this.size,
      "marginRight.rem" : this.size / 6,
    }
  }

  getStarImage(current : number): string{
    const imageName =  
    this.stars - current >= 0
    ? 'star-full' 
    : this.stars - current < 0 &&  this.stars - current > -1
    ? 'star-half'
    : 'star-empty';
    return `/assets/stars/${imageName}.svg` ;

  }
}
