import { EmployeeService } from './../../../services/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public listEmployees:any[]=[];

  constructor(private empService:EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  getEmployees():void{
    this.empService.getEmployees().subscribe(data=>{
      console.log(data);
      this.listEmployees.push(...data);},
      err=>console.log(err));
  }

}
