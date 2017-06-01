import { Component, Input, OnChanges, Output, EventEmitter} from '@angular/core';


@Component({
  selector :'ml-star',
  templateUrl:'app/shared/star.component.html',
  styleUrls:['app/shared/star.component.css']
})

export class StarComponent implements OnChanges {

 ngOnChanges():void{
  this.starWidth = this.rating;
 }

 @Output() ratingClicked : EventEmitter<string> = new EventEmitter();

 ratingFunc():void {
  this.ratingClicked.emit("the rating"+this.rating+" was clicked");
 }


 @Input() rating : number = 4;
 starWidth : number;


}
