import {Component,OnInit} from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product-service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector :"product-list",
  templateUrl :"app/products/product-list.component.html",
  styles:['thead{color:#FF0000;}'],
  providers:[ProductService]

})

export class ProductListComponent implements OnInit {

constructor(private _productService: ProductService, private _activatedRoute: ActivatedRoute){

};

  ngOnInit():void {

  this._productService.getProducts().then(resp => this.products = resp);
  this.paramname = this._activatedRoute.snapshot.params['username'];
  this.paramid = this._activatedRoute.snapshot.params['id'];

  };
  listfilter : string;

  imageWidth : number = 40;

  showImage : boolean = true;

  toggleImage() : void {
     this.showImage = !this.showImage;
  };
  products :IProduct[] =[];

 ratingClicked(message: string) : void{
  alert(message);
 }

 paramname : string;

 paramid : number;

}
