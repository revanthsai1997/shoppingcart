import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import {ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core';
import { Categories } from '../categories';
import { Product } from '../product';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
})
export class DashboardComponent implements OnInit {

  productsgroupbycategorieslist:any;
  categorylist:Categories[]=[];
  pictures:any[];
  clicked:boolean=true;
  selectedlist:Product[]=[];
  cartno:number=0;
  constructor(private categoryservice:CategoryService) { }

  ngOnInit() {
    //this.getCategories();
    this.getProductsGroupByCategories();
    //localStorage.setItem('selectedlist',JSON.stringify(this.selectedlist));
  }

  getCategories(){
    this.categoryservice.getCategories().subscribe(categories=>this.categorylist=categories);
  }
  getProductsGroupByCategories(){
      this.categoryservice.getProductsGroupByCategories().subscribe(productlist=>
        this.productsgroupbycategorieslist=productlist
      );
  }

  clickselect(product:Product){
    this.selectedlist.push(product);
    this.cartno++;
  }
  clickunselect(product:Product){
    this.selectedlist.splice(this.selectedlist.indexOf(product), 1);
    this.cartno--;
  }
  clickcart(){
    localStorage.setItem('cartitems',JSON.stringify(this.selectedlist));
  }
}
