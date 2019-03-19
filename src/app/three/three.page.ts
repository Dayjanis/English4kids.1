import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-three',
  templateUrl: './three.page.html',
  styleUrls: ['./three.page.scss'],
})
export class ThreePage  {

  constructor(private router: Router) { }
  back_lessons(){
    this.router.navigate(["/numbers"])
  }
  home(){
    this.router.navigate(["/tabs/tabs1"])
  }

}
