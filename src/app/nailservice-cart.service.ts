import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Nailservice } from './nailservice-list/Nailservice';

@Injectable({
  providedIn: 'root'
})
export class NailserviceCartService {

  private _cartList: Nailservice[] = [];
  cartList: BehaviorSubject<Nailservice[]> = new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(nailservice: Nailservice) {
    let item: Nailservice = this._cartList.find((v1) => v1.name == nailservice.name)!;
    if(!item){
      this._cartList.push({...nailservice});
    }
    this.cartList.next(this._cartList);
  }

  removeFromCart(nailservice: Nailservice){
    let item: Nailservice = this._cartList.find((v1) => v1.name == nailservice.name)!;
    let indice = this._cartList.indexOf(nailservice);
    if(item){
      this._cartList.splice(indice, 1);
    }
    this.cartList.next(this._cartList);
  }
}
