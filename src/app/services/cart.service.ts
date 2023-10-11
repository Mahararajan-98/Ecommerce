import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  public cartItem:any=[];
  public productList=new BehaviorSubject<any>([]);
  public checkoutList:any=[];
  public checkoutTotal:number=0
 
  
  constructor() { }

getCartProducts()
{
return this.productList.asObservable();
}

setCartProducts(product :any)
{
  this.cartItem.push(product)
  this.productList.next(product);
}
addtoCart(product :any)
{

  this.cartItem.push(product);
  this.productList.next(this.cartItem);
  this.totalPrice();
  console.log(this.cartItem);

}
totalPrice():number
{
  let total=0
  this.cartItem.map((a:any)=>{
   total+=a.productPrice*1;
  
  })
  return total
}

deleteCartItem(product:any)
{
  this.cartItem.map((a:any,index:any)=>{
    if(product.id===a.id)
  {
    this.cartItem.splice(index,1)
  }
})
this.productList.next(this.cartItem);
}
removeAllCartProducts()
{
  this.cartItem=[];
  this.productList.next(this.cartItem);
}


}
