import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.page.html',
  styleUrls: ['./numbers.page.scss'],
})
export class NumbersPage  {

  constructor(private router: Router) { }

 back_lessons(){
   this.router.navigate(["/tabs/tab2"])
 }

 home(){
    this.router.navigate(["/tabs/tab1"])
 }
}
