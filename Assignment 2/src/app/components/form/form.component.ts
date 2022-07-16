import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  usernameIsEmpty: boolean = true;
  username: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onUpdateUsername(event: Event): void {
    this.usernameIsEmpty = (<HTMLInputElement>event.target).value === '' ? false : true;
  }

  onLogin(): void {
    this.username = '';
    //this.onUpdateUsername();
  }

}
