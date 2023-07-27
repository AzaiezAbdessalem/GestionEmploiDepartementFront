import { GestionDepartmentComponent } from './gestion-department/gestion-department.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { GestionEmployeeComponent } from './gestion-employee/gestion-employee.component';


@NgModule({
  declarations: [
    PagesComponent,
    
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
