import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

public product:any=[]
public totalPrice: number=0
public  totalAmount:number=0
public parseData:any=[]
public checkout:any=[]
public pushData:any=[]
  constructor(private cartservice:CartService){}

  ngOnInit(): void {

this.cartservice.getCartProducts()
.subscribe(res=>{

  this.product=res
  this.totalAmount=this.cartservice.totalPrice()

})
// this.cartservice.loadcart();
this.grandTotal();

  }

  removeItem(item:any){
this.cartservice.deleteCartItem(item);
  }

  emptyCart()
  {
    this.cartservice.removeAllCartProducts();
  }

addQuantity(productid:any,quantity:any){
this.product.forEach((a:any) => {
  if(a.id===productid)
  {
    a.quantity=quantity+1
  }
});
this.grandTotal()
}

subQuantity(productid:any,quantity:any,item:any){
  this.product.forEach((a:any) => {
    if(a.id===productid && a.quantity>1)
    {
      a.quantity=quantity-1
    }
    else if(quantity==1)
    {
      this.cartservice.deleteCartItem(item);
    }
    
  });
  this. grandTotal();
}

 grandTotal(){
this.totalAmount=this.product.reduce((priceTotal:any,value:any)=>{
  return  priceTotal +((value.productPrice * value.quantity))
},0)
this.cartservice.checkoutTotal=this.totalAmount

}

checkboxStatus($event:any)
{

const id=$event.target.value
const ischecked=$event.target.checked
 
this.product.map((checkList:any,index:any) => {
  if( checkList.id == id )
  {
    checkList.select=ischecked
    if(checkList.select==true)
    {
this.checkout.push(checkList)
this.pushData=this.checkout
this.cartservice.checkoutList=this.pushData
// this.cartservice.productList.next(this.cartservice.checkoutList)
console.log(this.cartservice.checkoutList)
return this.cartservice.checkoutList

    }
    else if(checkList.select==false && checkList.id==this.product.id)
    {
      this.cartservice.checkoutList.splice(index,1,false)
      this.cartservice.productList.next(this.cartservice.checkoutList)
      return checkList
    }
  
  }
  
 return this.cartservice.checkoutList
  
});

}

}

