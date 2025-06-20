import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from "./user/user";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, User],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'display-user';
}
