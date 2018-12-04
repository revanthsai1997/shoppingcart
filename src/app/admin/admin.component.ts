import { Component, OnInit } from '@angular/core';
import { categoriesList } from '../categorieslist';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  id=categoriesList.length;
  category={id:0,name:""};
  categorylist=categoriesList;
  constructor() { }

  ngOnInit() {
  }
  addCategory(){
    this.category.id=this.id;
    this.id++;
    categoriesList.push(this.category);
    this.category={id:0,name:""};
  }
}
