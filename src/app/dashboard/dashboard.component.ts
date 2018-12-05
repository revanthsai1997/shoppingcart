import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import {ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core';
import { Categories } from '../categories';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
})
export class DashboardComponent implements OnInit {

  productsgroupbycategorieslist:any;
  categorylist:Categories[]=[];
  pictures:any[];
  constructor(private categoryservice:CategoryService) { }

  ngOnInit() {
    //this.getCategories();
    this.getProductsGroupByCategories();
    this.pictures=[
      { title:"aaa",img:"https://material.angular.io/assets/img/examples/shiba2.jpg" },
      { title:"aaa",img:"https://material.angular.io/assets/img/examples/shiba2.jpg" },
      { title:"aaa",img:"https://material.angular.io/assets/img/examples/shiba2.jpg" }    
    ];
  }

  getCategories(){
    this.categoryservice.getCategories().subscribe(categories=>this.categorylist=categories);
  }
  getProductsGroupByCategories(){
      this.categoryservice.getProductsGroupByCategories().subscribe(productlist=>
        this.productsgroupbycategorieslist=productlist
      );
  }
}
