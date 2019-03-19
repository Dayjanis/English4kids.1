import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-v',
  templateUrl: './v.page.html',
  styleUrls: ['./v.page.scss'],
})
export class VPage  {
  constructor(private router: Router) { }
  back_lessons(){
    this.router.navigate(["/abecedario"])
  }
  
    home(){
      this.router.navigate(["/tabs/tab1"])
   }
}
