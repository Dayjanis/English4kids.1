import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-four',
  templateUrl: './four.page.html',
  styleUrls: ['./four.page.scss'],
})
export class FourPage  {

  constructor(private router: Router) { }
  back_lessons(){
    this.router.navigate(["/numbers"])
  }
  home(){
    this.router.navigate(["/tabs/tabs1"])
  }
}
