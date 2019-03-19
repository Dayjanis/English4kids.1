import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-b',
  templateUrl: './b.page.html',
  styleUrls: ['./b.page.scss'],
})
export class BPage  {

  constructor(private router: Router) { }
back_lessons(){
  this.router.navigate(["/abecedario"])
}

  home(){
    this.router.navigate(["/tabs/tab1"])
 }
}
