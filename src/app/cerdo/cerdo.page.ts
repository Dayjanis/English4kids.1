import { Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cerdo',
  templateUrl: './cerdo.page.html',
  styleUrls: ['./cerdo.page.scss'],
})
export class CerdoPage  {

  constructor(private router: Router) { }
back_lessons(){
  this.router.navigate(["/animals"])
}

  home(){
    this.router.navigate(["/tabs/tab1"])
 }
}
