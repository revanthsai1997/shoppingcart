import { Component, OnInit } from '@angular/core';
import { categoriesList } from '../categorieslist';
import { FormControl,FormGroup } from '@angular/forms';
import { CategoryService } from '../category.service';
import { Categories } from '../categories';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  //id=categoriesList.length;
  tempcategory:Categories;
  category:Categories={categoryid:0,categoryName:""};
  categorylist:Categories[];
  constructor(private categoryservice:CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }
  getCategories(){
    this.categoryservice.getCategories().subscribe(categories=>this.categorylist=categories);
  }
  addCategory(){
    //this.category.categoryid=this.id;
    //this.id++;
    //categoriesList.push(this.category);
    this.tempcategory=this.category;
    this.categoryservice.addCategory(this.category).subscribe(category=>{this.categorylist.push(this.tempcategory)});
    this.category={categoryid:0,categoryName:""};
  }
}
