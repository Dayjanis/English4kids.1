import { Component, ViewChild } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-animals',
  templateUrl: './animals.page.html',
  styleUrls: ['./animals.page.scss'],
})
export class AnimalsPage  {

    
  constructor(private router: Router) { }
 back_lessons(){
   this.router.navigate(["/tabs/tab2"])
 }
 home(){
  this.router.navigate(["/tabs/tab1"])
}

}
