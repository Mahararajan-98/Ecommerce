import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { OnInit } from '@angular/core';

import { ProductsRoutingModule } from './products-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    Ng2SearchPipeModule
  ]
})
export class ProductsModule { 

  

  constructor (){}
  ngOnInit(){


  }

}
