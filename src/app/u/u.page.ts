import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-u',
  templateUrl: './u.page.html',
  styleUrls: ['./u.page.scss'],
})
export class UPage {
  constructor(private router: Router) { }
back_lessons(){
  this.router.navigate(["/abecedario"])
}

  home(){
    this.router.navigate(["/tabs/tab1"])
 }
}
