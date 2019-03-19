import { Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nine',
  templateUrl: './nine.page.html',
  styleUrls: ['./nine.page.scss'],
})
export class NinePage  {

  constructor(private router: Router) { }
  back_lessons(){
    this.router.navigate(["/numbers"])
  }
  home(){
    this.router.navigate(["/tabs/tabs1"])
  }

}
