import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'login'},
  {path:'login',component:LoginComponent},
  // {path:'product',component:ProductsComponent}
  {
    path: 'product',
    loadChildren: () => import('../app/products/products.module').then(m => m.ProductsModule)
  },
  {
    path:'cart',
    loadChildren: ()=>import('../app/cart/resources/cart/cart.module').then(m=>m.CartModule)
  },
  {
    path:'checkout',
    loadChildren:()=>import('./checkout/checkout.module').then(m=>m. CheckoutModule)
  },
  {
    path:'to-dolist',
    loadChildren:()=>import('./to-dolist/to-dolist.module').then(m=>m.ToDolistModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
