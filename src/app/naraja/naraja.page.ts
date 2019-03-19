import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-naraja',
  templateUrl: './naraja.page.html',
  styleUrls: ['./naraja.page.scss'],
})
export class NarajaPage  {

  constructor(private router: Router) { }
  back_lessons(){
    this.router.navigate(["/fruits"])
  }
  home(){
    this.router.navigate(["/tabs/tabs1"])
  }

}
