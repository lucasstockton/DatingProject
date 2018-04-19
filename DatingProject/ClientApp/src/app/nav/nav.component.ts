import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authServie : AuthService) { }

  ngOnInit() {

    console.log("String");
  }



}
