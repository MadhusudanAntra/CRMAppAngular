import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arithematic',
  templateUrl: './arithematic.component.html',
  styleUrls: ['./arithematic.component.scss']
})
export class ArithematicComponent implements OnInit {

  firstNumber:number=20
  secondNumber:number=30
  result=0;
  constructor() { }

  ngOnInit(): void {
  }

  addition(){
    this.result =  parseFloat(  this.firstNumber+"")+ parseFloat( this.secondNumber+"");
  }

}
