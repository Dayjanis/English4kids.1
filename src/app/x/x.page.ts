import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-x',
  templateUrl: './x.page.html',
  styleUrls: ['./x.page.scss'],
})
export class XPage  {
  constructor(private router: Router) { }
  back_lessons(){
    this.router.navigate(["/abecedario"])
  }
  
    home(){
      this.router.navigate(["/tabs/tab1"])
   }
}
