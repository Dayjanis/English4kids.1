import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sandia',
  templateUrl: './sandia.page.html',
  styleUrls: ['./sandia.page.scss'],
})
export class SandiaPage  {

  constructor(private router: Router) { }
  back_lessons(){
    this.router.navigate(["/fruits"])
  }
  home(){
    this.router.navigate(["/tabs/tabs1"])
  }

}
