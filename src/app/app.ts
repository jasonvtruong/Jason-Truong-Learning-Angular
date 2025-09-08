import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
}
