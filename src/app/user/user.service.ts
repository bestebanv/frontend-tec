import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http : HttpClient
  ) { }

  getUsers(){
    return this.http.get("http://localhost:3000/api/test");
  }

  getUsersById(){

  }

  createUser(){

  }

  deleteUser(){

  }
}
