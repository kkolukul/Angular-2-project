
import {Injectable} from '@angular/core';
import {IProduct} from './product';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()

export class ProductService {

constructor(private _http: Http ){}

 getProducts():Promise<IProduct[]>{

    return this._http.get('api/products/products.json').map(response => <IProduct[]>response.json()).toPromise();

 }

}
