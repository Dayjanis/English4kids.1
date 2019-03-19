import { Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-six',
  templateUrl: './six.page.html',
  styleUrls: ['./six.page.scss'],
})
export class SixPage  {

  constructor(private router: Router) { }
back_lessons(){
  this.router.navigate(["/numbers"])
}
home(){
  this.router.navigate(["/tabs/tabs1"])
}
}
