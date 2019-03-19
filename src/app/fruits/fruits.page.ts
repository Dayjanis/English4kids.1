import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.page.html',
  styleUrls: ['./fruits.page.scss'],
})
export class FruitsPage  {

  constructor(private router: Router) { }
 back_lessons(){
   this.router.navigate(["/tabs/tab2"]);
 }

 home(){
this.router.navigate(["/tabs/tab1"])
 }
}
 
