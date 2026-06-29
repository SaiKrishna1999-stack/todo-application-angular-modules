import { Component } from '@angular/core';
import {DUMMY_USERS} from "./dummy-users";

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = DUMMY_USERS;
  userId?: string;

  get userName(){
    return DUMMY_USERS.find(user => user.id === this.userId)?.name!;
  }
  onUserSelect(userId: string) {
    console.log('Selected User ID:', userId);
    this.userId = userId;
  }
}
