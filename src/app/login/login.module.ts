import { NgModule,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ModalModule
  ],
  providers:[BsModalService]
})
export class LoginModule implements OnInit { 

 
  ngOnInit(): void {
    
  }



}
