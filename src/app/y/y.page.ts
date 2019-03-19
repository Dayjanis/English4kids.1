import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-y',
  templateUrl: './y.page.html',
  styleUrls: ['./y.page.scss'],
})
export class YPage  {
  constructor(private router: Router) { }
  back_lessons(){
    this.router.navigate(["/abecedario"])
  }
  
    home(){
      this.router.navigate(["/tabs/tab1"])
   }
}
