import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.page.html',
  styleUrls: ['./colors.page.scss'],
})
export class ColorsPage  {

  constructor(private router: Router) { }

back_lessons(){
  this.router.navigate(["/tabs/tab2"])
}
home(){
  this.router.navigate(["/tabs/tab1"])
}
}
