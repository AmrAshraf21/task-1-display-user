import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { users } from './users';
@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {
  arrUsers = users;
  
}
