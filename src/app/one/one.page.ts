import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.page.html',
  styleUrls: ['./one.page.scss'],
})
export class OnePage  {

  constructor(private router : Router) { }
  back_lessons(){
    this.router.navigate(["/numbers"])
  }
   home(){
     this.router.navigate(["/tabs/tabs1"])
   }
 

}
