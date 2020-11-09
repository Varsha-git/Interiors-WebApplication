import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Category } from '../model/category';
import { Product } from '../model/product';
import { Cart } from '../model/cart';
import { tap, catchError } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestAPIService {
  categorys: Category[];
  products: Product[] = [];
  cartItems: Cart[] = [];

  constructor(private httpClient: HttpClient) {}

  getCategorys() {
    return this.httpClient
      .get<Category[]>('http://localhost:8080/getCategorys')
      .pipe(
        tap((data) => (this.categorys = data)),
        catchError(this.errorHandler)
      );
  }

  getCategorysById() {
    return this.httpClient
      .get<Category[]>('http://localhost:8080/getCategorysById')
      .pipe(
        tap((data) => (this.categorys = data)),
        catchError(this.errorHandler)
      );
  }

  getProducts() {
    return this.httpClient.get('http://localhost:8080/getProducts');
  }

  // getProducts() {
  //   return this.httpClient
  //     .get<Product[]>('http://localhost:8080/getProducts')
  //     .pipe(
  //       tap((data) => (this.products = data)),
  //       catchError(this.errorHandler)
  //     );
  // }

  getCart() {
    return this.httpClient
      .get<Cart[]>('http://localhost:8080/getCartItems')
      .pipe(
        tap((data) => (this.cartItems = data)),
        catchError(this.errorHandler)
      );
  }

  addProductToCart(cartItem: Cart) {
    console.log('adding product to cart');
    console.log(cartItem);
    this.httpClient
      .post('http://localhost:8080/addCart', cartItem)
      .subscribe((res: Response) => {});
    console.log(' Product Added to Cart Successfully');
  }

  deleteCartProduct(id: number) {
    return this.httpClient.delete('http://localhost:8080/deleteCartItem/' + id);
  }

  deleteAllCartItems() {
    console.log('deleting cart Items');
    return this.httpClient.delete('http://localhost:8080/deleteCart');
  }

  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || 'Server Error');
  }
}
