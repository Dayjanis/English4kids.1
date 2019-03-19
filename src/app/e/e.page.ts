import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-e',
  templateUrl: './e.page.html',
  styleUrls: ['./e.page.scss'],
})
export class EPage  {

  constructor(private router: Router) { }
back_lessons(){
  this.router.navigate(["/abecedario"])
}

  home(){
    this.router.navigate(["/tabs/tab1"])
 }

}
