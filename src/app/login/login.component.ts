import { Component,OnInit } from '@angular/core';
import {  FormBuilder, Validators } from '@angular/forms';
import { Router, RouterModule} from '@angular/router';
import {BsModalService} from'ngx-bootstrap/modal';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
constructor(private formbuilder:FormBuilder,private router:Router,
  private bsModalService:BsModalService){}


submitted = false;
form:any;
  
  ngOnInit(): void {
    
    this.form=this.formbuilder.group(
      {
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(8)]]
      }
    )
  }
 
  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
  
  }
  formSubmit()
  {
   let path="../product";
   if(this.form.valid)
   {
      this.router.navigate([path]);
    }
      
  }

  
}

