import { Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-loro',
  templateUrl: './loro.page.html',
  styleUrls: ['./loro.page.scss'],
})
export class LoroPage {

  constructor(private router: Router) { }

  back_lessons(){
    this.router.navigate(["/animals"])
  }

  home(){
    this.router.navigate(["/tabs/tabs1"])
  }


}
