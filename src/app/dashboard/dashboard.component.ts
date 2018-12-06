import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import {ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core';
import { Categories } from '../categories';
import { Product } from '../product';
import { forEach } from '@angular/router/src/utils/collection';
import { MatSnackBar } from '@angular/material';

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
  i:number;
  maxlimitreached:boolean=false;
  tempproduct:Product={productid:0,productName:'',price:0,qty:0,picture:null,categoryid:0};
  constructor(
    private categoryservice:CategoryService,
    public snackbar:MatSnackBar
    ) { }

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
    if(!(this.selectedlist.length==0)){
      for(this.i=0;this.i<this.selectedlist.length;this.i++){
        if(this.selectedlist[this.i].productid==product.productid){
          if(!(this.selectedlist[this.i].qty==product.qty)){
            this.selectedlist[this.i].qty=this.selectedlist[this.i].qty+1;
            this.cartno++;
          }
          else{
            this.alertmaxlimit();
          }
          break;
        }
      }
      if(this.i==this.selectedlist.length){
        this.tempproduct.productid=product.productid;
        this.tempproduct.productName=product.productName;
        this.tempproduct.price=product.price;
        this.tempproduct.qty=1;
        this.selectedlist.push(this.tempproduct);
        this.tempproduct={productid:0,productName:'',price:0,qty:0,picture:null,categoryid:0};
        this.cartno++;
      }
    }
    else{
      this.tempproduct.productid=product.productid;
      this.tempproduct.productName=product.productName;
      this.tempproduct.price=product.price;
      this.tempproduct.qty=1;
      this.selectedlist.push(this.tempproduct);
      this.tempproduct={productid:0,productName:'',price:0,qty:0,picture:null,categoryid:0};
      this.cartno++;
    }
    
  }
  clickunselect(product:Product){
    if(!(this.selectedlist.length==0)){
      for(this.i=0;this.i<this.selectedlist.length;this.i++){
        if(this.selectedlist[this.i].productid==product.productid){
          this.selectedlist[this.i].qty=this.selectedlist[this.i].qty-1;
          this.cartno--;
          if(this.selectedlist[this.i].qty==0){
            this.selectedlist.splice(this.selectedlist.indexOf(product), 1);
            this.alertminlimit();
          }
        }
      }
    }


    //this.selectedlist.splice(this.selectedlist.indexOf(product), 1);
    
  }
  clickcart(){
    localStorage.setItem('cartitems',JSON.stringify(this.selectedlist));
  }
  alertmaxlimit(){
    this.snackbar.open('stock limit reached','close',{
      duration: 2000,
    });
  }
  alertminlimit(){
    this.snackbar.open('this item is not added in cart','close',{
      duration: 2000,
    });
  }
}
