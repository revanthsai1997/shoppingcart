import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {

  
  cartitems:Product[]=[];
  displayedColumns:string[]=['no','name','qty','price','totalprice'];
  constructor() { }

  ngOnInit() {
    this.getCartItems();
  }

  getCartItems(){
    this.cartitems=JSON.parse(localStorage.getItem('cartitems'));
    localStorage.clear();
  }
  getTotalCost() {
    return this.cartitems.map(t => t.qty * t.price).reduce((acc, value) => acc + value, 0);
  }
}
