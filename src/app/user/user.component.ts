import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { CardComponent } from '../shared/card/card.component';
const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  standalone: true
})
export class UserComponent {
  @Input({required:true}) user!: {
    id: string;
    name: string;
    avatar: string;
  }
  @Input({required:true}) selected!: boolean;
  @Output() select = new EventEmitter();
  
  get imagePath() {
    return `./assets/users/${this.user.avatar}`;
  }
  getUserDetails() {
    this.select.emit(this.user.id);
  }
}
