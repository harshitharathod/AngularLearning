import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testone',
  templateUrl: './testone.component.html',
  styleUrls: ['./testone.component.css']
})
export class TestoneComponent implements OnInit {

  constructor() { }
  public name="Harshitha";
  public message="Welcome to Angular";
  public person={
    "firstName":"Harshitha",
    "lastName": "Rathod"
  }
  public date=new Date();

  ngOnInit(): void {
  }

}
