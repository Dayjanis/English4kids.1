import { Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ten',
  templateUrl: './ten.page.html',
  styleUrls: ['./ten.page.scss'],
})
export class TenPage  {

  constructor(private router: Router) { }
  back_lessons(){
    this.router.navigate(["/numbers"])
  }
  home(){
    this.router.navigate(["/tabs/tabs1"])
  }

}
