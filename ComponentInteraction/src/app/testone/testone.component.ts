import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-testone',
  templateUrl: './testone.component.html',
  styleUrls: ['./testone.component.css']
})
export class TestoneComponent implements OnInit {

  constructor() { }
  @Input('parentData') public name;
  @Output() public childEvent=new EventEmitter();


  ngOnInit(): void {
  }
  fireEvent(){
    this.childEvent.emit("Hey Angular");
  }
}
