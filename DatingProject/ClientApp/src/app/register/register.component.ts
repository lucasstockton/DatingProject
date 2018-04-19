import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    console.log("This is a test");

  }

  model = {};

  login() {

    console.log(this.model);
  }

  submit() {
    console.log(this.model);

  }


}
