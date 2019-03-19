import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-letra-a',
  templateUrl: './letra-a.page.html',
  styleUrls: ['./letra-a.page.scss'],
})
export class LetraAPage  {

  constructor(private router: Router) { }
back_lessons(){
  this.router.navigate(["/abecedario"])
}

  home(){
    this.router.navigate(["/tabs/tab1"])
 }
}
