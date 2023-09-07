import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  usuario: string = '';

  constructor() {}

  ngOnInit() {
    if (history.state.users) {
      this.usuario = history.state.users.usuario;
    }
  }
}
