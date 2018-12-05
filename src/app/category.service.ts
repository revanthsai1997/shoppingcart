import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Categories } from './categories';
import { categoriesList } from './categorieslist';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError , map, tap } from 'rxjs/operators';
import { Product } from './product';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http:HttpClient) { }

  getCategories():Observable<Categories[]>{
    return this.http.get<Categories[]>("http://localhost:63948/Api/admin/getCategories").pipe(catchError(this.handleError('getCategories',[])));
  }
  addCategory(category:Categories){
    //categoriesList.push(category);
    return this.http.post<Categories>("http://localhost:63948/Api/admin/addCategory",category,this.httpOptions).pipe(catchError(this.handleError<Categories>('addCategory')));
  }
  getProducts(id:number):Observable<Product[]>{
    return this.http.get<Product[]>(`http://localhost:63948/Api/admin/getProducts/${id}`).pipe(catchError(this.handleError('getProducts',[])));
  }
  addProduct(product:Product){
    return this.http.post<Product>("http://localhost:63948/Api/admin/addProduct",product,this.httpOptions).pipe(catchError(this.handleError<Product>('addProduct')));
  }
  getProductsGroupByCategories():Observable<any>{
    return this.http.get<any>("http://localhost:63948/Api/admin/getProductsGroupByCategories").pipe(catchError(this.handleError('getProductsGroupByCategories',[])));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

