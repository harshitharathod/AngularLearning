import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testone',
  template: `
  <div *ngIf="displayName; then thenblock; else elseblock"></div>
  
  <ng-template #thenblock>
  <h2>
  Codevloution
  </h2>
  </ng-template>

  <ng-template #elseblock>
  <h2>
   Name is hidden
  </h2>
  </ng-template>

  <div [ngSwitch]="color">
   <div *ngSwitchCase='"red"'>You have picked red color</div>
   <div *ngSwitchCase='"blue"'>You have picked blue color</div>
   <div *ngSwitchCase='"pink"'>You have picked pink color</div>
   <div *ngSwitchDefault>Pick again</div>
  </div>

  <div *ngFor="let color of colors; index as i; first as f; last as l odd as o even as e">
  <h2>{{i}} {{f}} {{l}} {{o}} {{e}} {{color}}</h2>
  </div>

  `
  ,
  styleUrls: ['./testone.component.scss']
})
export class TestoneComponent implements OnInit {
  displayName= true;
  public color="yellow";
  public colors=["red", "yellow","blue","green"];

  constructor() { }

  ngOnInit(): void {
  }

}
