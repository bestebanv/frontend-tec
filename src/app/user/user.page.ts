import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service' 

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  users: any = [];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      res => {
        this.users = res;
      },
      err => console.log(err)
      );
  }

}
