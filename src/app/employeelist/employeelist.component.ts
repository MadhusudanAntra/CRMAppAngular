import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {

  employees=[
    {id:1, name:"Peter", salary:"5000",dept:"IT"},
    {id:2, name:"Mia", salary:"6000",dept:"IT"},
    {id:3, name:"Julia", salary:"3500",dept:"HR"},
    {id:4, name:"Allen", salary:"4500",dept:"HR"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
