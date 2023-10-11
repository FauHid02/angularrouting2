import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'register-page');
  }
  nim = '222102514';
  name = 'Fauzan Hidayat';
}
