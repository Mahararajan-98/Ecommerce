import { Component,OnInit } from '@angular/core';
import { __values } from 'tslib';
import { CommonService } from '../app-utilites/services/common.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
  
})
export class ProductsComponent implements OnInit{


  productData:any;
  searchProducts:string=''
  parseData:any
  totalCartItem:number=0;


  constructor(private common:CommonService,
     private cartService:CartService){}


  ngOnInit()
  {
   this.addData();
   this.cartService.getCartProducts().subscribe(res=>{
    this.totalCartItem=res.length})
  }

  addData()
   {
    let url='../../assets/data/product.json'
   
this.common.commonGet(url).subscribe((result:any)=>{
  localStorage.setItem('myJson',JSON.stringify(result))
  
console.log(localStorage.getItem('myJson'),"json");
let stringifydata:any=localStorage.getItem('myJson')
this.parseData=JSON.parse(stringifydata);

this.parseData.forEach((a:any=[]) => {
  Object.assign(a,{quantity:1,total:a.productPrice});
});
})

   }

   addtoCart(item:any)
   {
    this.cartService.addtoCart(item)
      
   }

}
