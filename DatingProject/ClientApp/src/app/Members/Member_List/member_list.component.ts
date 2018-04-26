import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../../Services/user-service.service';

@Component({
  selector: 'app-member_list',
  templateUrl: './member_list.component.html',
  styleUrls: ['./member_list.component.css']
})
export class MemberList implements OnInit {

  constructor(private UserServiceService: UserServiceService) { }

  users = [];
  ngOnInit() {
    this.GetUsers();
  }
  GetUsers() {
    this.UserServiceService.RetrieveUsers().subscribe(p => this.users = p, err => console.log(err), () => console.log(this.users));
    console.log(this.users);
  }
}
