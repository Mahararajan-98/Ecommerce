import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  checkoutProduct:any=[];
  totalAmount:number=0

    constructor(private cartservice:CartService){}

  ngOnInit()
  {
   
this.checkoutProduct=this.cartservice.checkoutList

this.grandTotal();
  }
  grandTotal(){
    this.totalAmount=this.checkoutProduct.reduce(function(acc:any,val:any){
      return  acc +((val.productPrice * val.quantity))
    },0)
  }
 
}
