import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonService } from '../app-utilites/services/common.service';

@Component({
  selector: 'app-to-dolist',
  templateUrl: './to-dolist.component.html',
  styleUrls: ['./to-dolist.component.scss']
})
export class ToDolistComponent implements OnInit {

  @ViewChild('productData') form!: NgForm

  url: any = "http://localhost:58712/productList"
  productList: any
  isEdited:boolean= false;
  updateProductId!: number
  productItem: any

  constructor(private common: CommonService) { }

  ngOnInit(): void {
    this.getAllProduct();
  }
  createProduct(product: { productName: string, productPrice: string, description: string, quantity: number }) {

    const headers = new HttpHeaders({ 'myHeader': 'productList/json' });
    if (product.productName != '') {
      if (!this.isEdited) {
        this.common.commonPost(this.url, product, { headers: headers })
          .subscribe(() => {
            alert("create product successfully")
          })
      }
      else {
        this.common.commonPut("http://localhost:58712/productList/" + this.updateProductId, product).subscribe((updateData:any) => {
          this.getAllProduct()
          alert("update product successfully")
        })
        console.log(product)
      }
    }

  }
  getAllProduct() {
    this.common.commonGet(this.url).subscribe
      ((productItem: any) => {
        this.productList = productItem
      })

  }

  deleteProduct(productId: any) {
    if (confirm("Do you want delete product?")) {
      this.common.commonDelete("http://localhost:58712/productList/" + productId)
        .subscribe((data: any) => {
          this.getAllProduct();
        });
    }
  }

  updateProduct(productId: any) {
    this.updateProductId = productId;
    this.productItem = this.productList.find((productValue: any) => { return productValue.id === productId });
    console.log(this.productItem)
    this.form.setValue({
      productName: this.productItem.productName,
      description: this.productItem.description,
      productPrice: this.productItem.productPrice,
      quantity: this.productItem.quantity
    })
    this.isEdited = true
  }
}
