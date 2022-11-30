import { Component, OnInit } from '@angular/core';
import { NailserviceCartService } from '../nailservice-cart.service';
import { NailserviceDataService } from '../nailservice-data.service';
import { Nailservice } from './Nailservice';

@Component({
  selector: 'app-nailservice-list',
  templateUrl: './nailservice-list.component.html',
  styleUrls: ['./nailservice-list.component.css']
})
export class NailserviceListComponent implements OnInit {

  nailservices: Nailservice[] = [];



  constructor(
    private cart: NailserviceCartService,
    private NailserviceDataService: NailserviceDataService) { 
    
  }

  ngOnInit(): void {
    this.NailserviceDataService.getAll()
    .subscribe(nailservices => this.nailservices = nailservices);
  }

  addToCart(nailservice:Nailservice) : void{
   
    this.cart.addToCart(nailservice);
    
  }
  maxReached(m: string){
    alert(m);
  }
  
}
