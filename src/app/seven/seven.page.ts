import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-seven',
  templateUrl: './seven.page.html',
  styleUrls: ['./seven.page.scss'],
})
export class SevenPage  {

  constructor(private router: Router) { }
back_lessons(){
  this.router.navigate(["/numbers"])
}
home(){
  this.router.navigate(["/tabs/tabs1"])
}
}
