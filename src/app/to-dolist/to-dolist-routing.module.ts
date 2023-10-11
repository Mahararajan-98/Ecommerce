import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDolistComponent } from './to-dolist.component';

const routes: Routes = [
  {path:'',component:ToDolistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDolistRoutingModule { }
