import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-d',
  templateUrl: './d.page.html',
  styleUrls: ['./d.page.scss'],
})
export class DPage  {

  constructor(private router: Router) { }
back_lessons(){
  this.router.navigate(["/abecedario"])
}

  home(){
    this.router.navigate(["/tabs/tab1"])
 }

}
