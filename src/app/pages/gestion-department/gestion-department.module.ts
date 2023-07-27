import { DepartmentService } from './../../services/department.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionDepartmentRoutingModule } from './gestion-department-routing.module';
import { GestionDepartmentComponent } from './gestion-department.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    GestionDepartmentComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    GestionDepartmentRoutingModule,
    HttpClientModule
  ],
  providers:[ DepartmentService]
})
export class GestionDepartmentModule { }
