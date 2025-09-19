import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {User} from './Shared/Models/user';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgForOf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Jason-Truong-Learning-Angular');
  // Lets make a variable
  name : string = "Jason"

  // Once you assign a var type, it is forever that type
  // name : string = "bob"

  new : string = "Truong"

  // declare instances of user object
  user1 : User = {id: 1, firstName: "Jason", lastName: "Truong", department: "Computer Programming", isAdmin: false};
  user2 : User = {id: 2, firstName: "Joe", lastName: "Schmoe", department: "Mobile Apps Development", isAdmin: true};
  user3 : User = {id: 3, firstName: "Dillon", lastName: "Bell", department: "Computer Programming", isAdmin: false};
  user4 : User = {id: 4, firstName: "Adam", lastName: "Larsh", department: "Computer Programming", isAdmin: false};
  user5 : User = {id: 5, firstName: "Owen", lastName: "Trulieb", department: "Computer Programming", isAdmin: false};
  user6 : User = {id: 6, firstName: "Walter", lastName: "White", department: "Mobile Apps Development", isAdmin: true};

  // initialize array with instances of user object
  userList: User[] =
    [
      this.user1,
      this.user2,
      this.user3,
      this.user4,
      this.user5,
      this.user6
    ]
}
