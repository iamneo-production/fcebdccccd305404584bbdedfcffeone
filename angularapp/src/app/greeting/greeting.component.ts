import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
  userGreeting: string = '';
  displayedGreeting: string = '';
  editing: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  displayGreeting() {
    this.displayedGreeting = this.userGreeting;
    this.editing = false; // Reset editing mode when displaying new greeting
  }

  startEditing() {
    this.editing = true;
  }

  saveEditing() {
    this.editing = false;
  }
}
