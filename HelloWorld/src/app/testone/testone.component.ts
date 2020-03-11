import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-testone]',
  template: `
  <h2>
    Welcome {{name}}
  </h2>
  <h2 [class]="successClass ">Angular</h2>
  <h2 [class.text-danger]="hasError">HarshithaVishnu</h2>
  <h2 [ngClass]="messageClasses">CodeEvolution</h2>
  <h2>{{2*4}}</h2>
  <h2>{{"Welcome " +name}}</h2>
  <h2>{{name.length}}</h2>
  <h2>{{name.toUpperCase()}}</h2>
  <h2>{{greetUser()}}</h2>
  <h2>{{siteUrl}}</h2>
  <input [id]="myId" type="text" value="Harshitha">
  <input bind-disabled  ="isDisabled" id="{{myId}}" type="text" value="Harshitha">
  <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding</h2>
  <h2 [style.color]="highlightColor">StyleBinding2</h2>
  <h2 [ngStyle]="myStyles">StyleBinding3</h2>
  <button (click)="onClick($event)">Greet</button>
  {{greeting}}
  <input #myInput type="text">
  <button (click)="logMessage(myInput.value)">Log</button>

  `,
  styles: [`
  .text-success{
    color:green;  
  }
  .text-danger{
    color:red;
  }
  .text-special{
    font-style:italic;
  }
  
  `]
})
export class TestoneComponent implements OnInit {
  public name="Harshi"
  public siteUrl=window.location.href;
  public myId="testId";
  public isDisabled=false;
  public error=true;
  public successClass="text-success"
  public hasError=false;
  public isSpecial=true;  
  public highlightColor ="orange";
  public greeting=" ";
  constructor() { }
  greetUser(){
    return "Hello" +this.name;
  }
  public messageClasses={
    "text-success":!this.hasError,
    "text-danger": this.hasError,
    "text-special":this.isSpecial


  }
  public myStyles={
    color:"blue",
    fontStyle: "italic"
}
onClick(event){
  console.log(event);
  this.greeting=event.type;
}
logMessage(value){
  console.log(value);
}

  ngOnInit(): void {
  }

}
