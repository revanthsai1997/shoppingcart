import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productlist:Product[];
  tempproduct:Product;
  product:Product={productid:0,productName:"",price:0,qty:0,categoryid:0};
  displayedColumns: string[] = ['productName', 'price', 'qty','action'];
  constructor(
    private route:ActivatedRoute,
    private categoryservice:CategoryService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this.categoryservice.getProducts().subscribe(products=>this.productlist=products);
  }
  addProduct(){
    const id=+this.route.snapshot.paramMap.get("categoryid");
    this.product.categoryid=id;
    this.tempproduct=this.product;
      this.categoryservice.addProduct(this.product).subscribe(product=>{
        this.getProducts();
      });
      this.product={productid:0,productName:"",price:0,qty:0,categoryid:0};
  }
}
